const fs = require('fs');
const path = require('path');

// Paths
const CLIENT_DIR = path.join(__dirname, '../client/src');
const DATA_DIR = path.join(CLIENT_DIR, 'data');
const PAGES_DIR = path.join(CLIENT_DIR, 'pages');
const CS_DIR = path.join(PAGES_DIR, 'case-studies');

// 1. Build Index of Valid Pages
const index = {
    whitePapers: [],
    claritySeries: [],
    caseStudies: []
};

// Helper: Normalize title for fuzzy matching
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

// Read WhitePages
try {
    const wpContent = fs.readFileSync(path.join(DATA_DIR, 'whitePapers.tsx'), 'utf8');
    const wpMatches = wpContent.matchAll(/title:\s*"([^"]+)",[\s\S]*?slug:\s*"([^"]+)"/g);
    for (const match of wpMatches) {
        index.whitePapers.push({ title: match[1], slug: match[2], norm: normalize(match[1]) });
    }
} catch (e) { }

// Read ClaritySeries
try {
    const csContent = fs.readFileSync(path.join(DATA_DIR, 'claritySeries.tsx'), 'utf8');
    const csMatches = csContent.matchAll(/title:\s*"([^"]+)",[\s\S]*?slug:\s*"([^"]+)"/g);
    for (const match of csMatches) {
        index.claritySeries.push({ title: match[1], slug: match[2], norm: normalize(match[1]) });
    }
} catch (e) { }

// Read CaseStudies (Fix: Handle quotes around keys)
try {
    const caseContent = fs.readFileSync(path.join(DATA_DIR, 'caseStudies.ts'), 'utf8');
    // Match "id": 48 ... "title": "Value"
    const caseMatches = caseContent.matchAll(/"id":\s*(\d+),[\s\S]*?"title":\s*"([^"]+)"/g);
    for (const match of caseMatches) {
        index.caseStudies.push({ id: match[1], title: match[2], norm: normalize(match[2]) });
    }
} catch (e) { console.log(e) }

console.log("--- Index Built ---");
console.log(`White Papers: ${index.whitePapers.length}`);
console.log(`Clarity Series: ${index.claritySeries.length}`);
console.log(`Case Studies: ${index.caseStudies.length}`);

// 2. Scan Files for "Related Resources"
const filesToScan = [];
try {
    const csFiles = fs.readdirSync(CS_DIR).filter(f => f.startsWith('CaseStudy') && f.endsWith('.tsx'));
    csFiles.forEach(f => filesToScan.push({ path: path.join(CS_DIR, f), name: f }));
} catch (e) { }
filesToScan.push({ path: path.join(DATA_DIR, 'whitePapers.tsx'), name: 'whitePapers.tsx' });
filesToScan.push({ path: path.join(DATA_DIR, 'claritySeries.tsx'), name: 'claritySeries.tsx' });

function findLink(title) {
    const norm = normalize(title);
    const wp = index.whitePapers.find(x => x.norm === norm);
    if (wp) return `/white-papers/${wp.slug}`;
    const cs = index.claritySeries.find(x => x.norm === norm);
    if (cs) return `/clarity-series/${cs.slug}`;
    const caseStudy = index.caseStudies.find(x => x.norm === norm);
    if (caseStudy) return `/case-studies/${caseStudy.id}`;
    return null;
}

filesToScan.forEach(file => {
    try {
        const content = fs.readFileSync(file.path, 'utf8');
        const parts = content.split('Related Resources');
        if (parts.length < 2) return;

        const section = parts[1].substring(0, 5000);

        // Regex to find titles in cards. 
        // Looking for <p ... font-semiboldText ...>Title</p> or similar
        // The common pattern in CaseStudy1.tsx is: <p className="... font-semibold ...">Title</p>
        const titleRegex = /<p[^>]*font-semibold[^>]*>([\s\S]*?)<\/p>/g;

        let match;
        const resources = [];
        while ((match = titleRegex.exec(section)) !== null) {
            let title = match[1].trim();
            // Clean up if it grabbed text-sm line
            if (title.includes("hover:text-brand-red")) {
                // Sometimes the class is in the parent div? No, usually p tag.
            }
            if (title === "White Paper" || title === "Clarity Series" || title === "Case Study") continue; // Skip Type labels
            if (title.length > 50) continue; // Skip Description paragraphs if they accidentally match

            resources.push(title);
        }

        if (resources.length > 0) {
            console.log(`\n${file.name}:`);
            resources.forEach(t => {
                const link = findLink(t);
                console.log(`  "${t}" -> ${link || "[MISSING]"}`);
            });
        }
    } catch (e) { }
});
