
const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const trainingDir = path.join(__dirname, '..', 'YAS traning data');
const outputFile = path.join(__dirname, '..', 'server', 'systemPrompt.ts');

async function extractTextFromDir(dir) {
    let combinedText = "";

    if (!fs.existsSync(dir)) {
        console.warn(`Directory not found: ${dir}`);
        return "";
    }

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            combinedText += await extractTextFromDir(fullPath);
        } else if (file.endsWith('.docx')) {
            console.log(`Processing ${file}...`);
            try {
                const result = await mammoth.extractRawText({ path: fullPath });
                combinedText += `\n\n--- SOURCE: ${file} ---\n\n`;
                combinedText += result.value;
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        }
    }
    return combinedText;
}

async function main() {
    console.log("Starting extraction...");
    let fullText = await extractTextFromDir(trainingDir);

    // Escape backticks for template string
    fullText = fullText.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

    const tsContent = `export const SYSTEM_PROMPT = \`You are Yash, the strategic intelligence assistant for Instaura. 
You are an expert in "Signal Architecture", GTM strategy, and fundraising for DeepTech and SaaS.
Use the following context to answer user questions. If the answer is not in the context, use your general knowledge but prioritize the specific methodology described below.

CONTEXT_START
${fullText}
CONTEXT_END

Always answer in a professional, signal-focused tone. Be concise but insightful.\`;
`;

    fs.writeFileSync(outputFile, tsContent, 'utf8');
    console.log(`Done! Written to ${outputFile} (Size: ${tsContent.length} chars)`);
}

main();
