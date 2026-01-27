const fs = require('fs');
const path = require('path');

// Read the massive system prompt
const systemPromptPath = path.join(__dirname, '../functions/src/systemPrompt.ts');
const content = fs.readFileSync(systemPromptPath, 'utf8');

// Extract the prompt content (between backticks)
const promptMatch = content.match(/export const SYSTEM_PROMPT = `([\s\S]*)`/);
if (!promptMatch) {
    console.error('Could not find SYSTEM_PROMPT in file');
    process.exit(1);
}

const promptContent = promptMatch[1];

// Parse sections by SOURCE markers
const sections = [];
const sourceRegex = /--- SOURCE: (.+?) ---\n\n([\s\S]*?)(?=\n\n--- SOURCE:|$)/g;
let match;

while ((match = sourceRegex.exec(promptContent)) !== null) {
    const [, source, sectionContent] = match;
    sections.push({
        source: source.trim(),
        content: sectionContent.trim()
    });
}

console.log(`Found ${sections.length} sections`);

// Categorize sections
const knowledge = {
    case_studies: [],
    white_papers: [],
    clarity_series: [],
    about: [],
    faqs: [],
    other: []
};

sections.forEach((section, index) => {
    const { source, content } = section;
    const sourceLower = source.toLowerCase();

    // Determine category
    let category = 'other';
    let title = source;
    let tags = [];

    if (sourceLower.includes('case_study') || sourceLower.includes('casestudy')) {
        category = 'case_studies';
        // Extract title from content (usually first line or heading)
        const titleMatch = content.match(/^(.+?)(?:\n|$)/);
        title = titleMatch ? titleMatch[1].trim() : source;
        tags = ['case study', 'signal architecture'];
    } else if (sourceLower.includes('about_me') || sourceLower.includes('hiasmine')) {
        category = 'about';
        tags = ['about', 'founder', 'team'];
    } else if (sourceLower.includes('faq')) {
        category = 'faqs';
        tags = ['faq', 'questions'];
    } else if (sourceLower.includes('white') || sourceLower.includes('paper')) {
        category = 'white_papers';
        tags = ['white paper', 'methodology'];
    } else if (sourceLower.includes('clarity')) {
        category = 'clarity_series';
        tags = ['clarity series', 'insights'];
    }

    // Extract keywords from content for better search
    const keywords = extractKeywords(content);

    knowledge[category].push({
        id: `${category}_${index}`,
        source,
        title,
        content,
        tags: [...tags, ...keywords],
        wordCount: content.split(/\s+/).length
    });
});

// Helper function to extract keywords
function extractKeywords(text) {
    const keywords = new Set();
    const importantTerms = [
        'signal', 'architecture', 'gtm', 'fundraising', 'capital',
        'deeptech', 'saas', 'strategy', 'market', 'investor',
        'founder', 'startup', 'revenue', 'growth', 'traction',
        'positioning', 'narrative', 'pitch', 'deck', 'valuation'
    ];

    const textLower = text.toLowerCase();
    importantTerms.forEach(term => {
        if (textLower.includes(term)) {
            keywords.add(term);
        }
    });

    return Array.from(keywords);
}

// Print summary
console.log('\nKnowledge Base Summary:');
Object.entries(knowledge).forEach(([category, items]) => {
    if (items.length > 0) {
        const totalWords = items.reduce((sum, item) => sum + item.wordCount, 0);
        console.log(`  ${category}: ${items.length} items (${totalWords.toLocaleString()} words)`);
    }
});

// Save to JSON
const outputPath = path.join(__dirname, 'knowledge_base.json');
fs.writeFileSync(outputPath, JSON.stringify(knowledge, null, 2), 'utf8');
console.log(`\n✅ Knowledge base saved to: ${outputPath}`);

// Also create a minimal core prompt
const corePrompt = `You are YAS, the strategic intelligence assistant for Instaura.

Core Expertise:
- Signal Architecture: Strategic design of belief systems that move capital, markets, and people
- GTM Strategy: Go-to-market planning and execution for DeepTech and SaaS
- Fundraising: Capital raising strategy and investor narrative design

About Instaura:
Instaura is the world's first Signal Consulting firm, founded by Gaurav (Principal Strategist). 
We help founders and investors achieve clarity to make decisive moves.

Key Achievements:
- 2,500+ founders advised
- 250+ decisive breakthroughs delivered
- Over $2B in capital moved

Response Style:
- Be direct, strategic, and insightful
- Focus on clarity and decisive action
- Use examples from Instaura's methodology when relevant
- Be concise but comprehensive

CONTEXT (Retrieved Dynamically):
{retrieved_context}

Answer the user's question using the above context and your expertise in Signal Architecture.`;

const corePromptPath = path.join(__dirname, 'core_prompt.txt');
fs.writeFileSync(corePromptPath, corePrompt, 'utf8');
console.log(`✅ Core prompt saved to: ${corePromptPath}`);
console.log(`\nCore prompt size: ${corePrompt.length} characters (~${Math.ceil(corePrompt.length / 4)} tokens)`);
