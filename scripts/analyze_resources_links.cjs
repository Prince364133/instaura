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

// Read WhitePages (Regex parse TSX)
try {
    const wpContent = fs.readFileSync(path.join(DATA_DIR, 'whitePapers.tsx'), 'utf8');
    const wpMatches = wpContent.matchAll(/title:\s*"([^"]+)",[\s\S]*?slug:\s*"([^"]+)"/g);
    for (const match of wpMatches) {
        index.whitePapers.push({ title: match[1], slug: match[2], norm: normalize(match[1]) });
    }
} catch (e) { console.error("Error reading whitePapers.tsx", e); }

// Read ClaritySeries
try {
    const csContent = fs.readFileSync(path.join(DATA_DIR, 'claritySeries.tsx'), 'utf8');
    const csMatches = csContent.matchAll(/title:\s*"([^"]+)",[\s\S]*?slug:\s*"([^"]+)"/g);
    for (const match of csMatches) {
        index.claritySeries.push({ title: match[1], slug: match[2], norm: normalize(match[1]) });
    }
} catch (e) { console.error("Error reading claritySeries.tsx", e); }

// Read CaseStudies
try {
    const caseContent = fs.readFileSync(path.join(DATA_DIR, 'caseStudies.ts'), 'utf8');
    const caseMatches = caseContent.matchAll(/id:\s*(\d+),[\s\S]*?title:\s*"([^"]+)"/g);
    for (const match of caseMatches) {
        index.caseStudies.push({ id: match[1], title: match[2], norm: normalize(match[2]) });
    }
} catch (e) { console.error("Error reading caseStudies.ts", e); }

console.log("--- Index Built ---");
console.log(`White Papers: ${index.whitePapers.length}`);
console.log(`Clarity Series: ${index.claritySeries.length}`);
console.log(`Case Studies: ${index.caseStudies.length}`);

// 2. Scan Files for "Related Resources"
const filesToScan = [];

// Add Case Studies (1-48)
try {
    const csFiles = fs.readdirSync(CS_DIR).filter(f => f.startsWith('CaseStudy') && f.endsWith('.tsx'));
    csFiles.forEach(f => filesToScan.push({ path: path.join(CS_DIR, f), name: f }));
} catch (e) { }

// Add Data Files (Simulating page content scan)
filesToScan.push({ path: path.join(DATA_DIR, 'whitePapers.tsx'), name: 'whitePapers.tsx' });
filesToScan.push({ path: path.join(DATA_DIR, 'claritySeries.tsx'), name: 'claritySeries.tsx' });

console.log(`\nScanning ${filesToScan.length} files for Related Resources links...`);

// Helper: Check if title exists in index
function findLink(title, type) {
    const norm = normalize(title);

    // Check strict type first if possible, otherwise check all
    // Priority: WhitePaper > Clarity > CaseStudy

    const wp = index.whitePapers.find(x => x.norm === norm);
    if (wp) return `/white-papers/${wp.slug}`;

    const cs = index.claritySeries.find(x => x.norm === norm);
    if (cs) return `/clarity-series/${cs.slug}`;

    const caseStudy = index.caseStudies.find(x => x.norm === norm);
    if (caseStudy) return `/case-studies/${caseStudy.id}`;

    return null; // Not found
}

filesToScan.forEach(file => {
    try {
        const content = fs.readFileSync(file.path, 'utf8');
        // Look for Related Resources section
        // Regex is hard, but let's look for Link hrefs inside the section.
        // Simplified: Find "Related Resources" and scan ~50 lines after it.

        const parts = content.split('Related Resources');
        if (parts.length < 2) return; // No related resources

        const section = parts[1].substring(0, 3000); // 3000 chars context

        // Find Links
        // Pattern: <Link href="([^"]+)">[\s\S]*?<p[^>]*>([^<]+)</p> (Type) [\s\S]*?<p[^>]*>([^<]+)</p> (Title)
        // This is tricky.

        // Alternative: Just find titles inside the block
        // Assuming title is in <p ... font-semibold ...>Title</p> or similar

        const titleRegex = /<p[^>]*font-semibold[^>]*>([^<]+)<\/p>/g;
        let match;
        const resourcesFound = [];

        while ((match = titleRegex.exec(section)) !== null) {
            const title = match[1].trim();
            // Filter out common UI text if regex is too loose
            if (title === "Related Resources" || title === "Talk to Yas") continue;

            const link = findLink(title);
            resourcesFound.push({ title, link: link || "MISSING" });
        }

        if (resourcesFound.length > 0) {
            console.log(`\n${file.name}:`);
            resourcesFound.forEach(r => {
                if (r.link === "MISSING") {
                    console.log(`  [UNLINKED] "${r.title}" -> /contact?ask_ai=...`);
                } else {
                    console.log(`  [LINKED]   "${r.title}" -> ${r.link}`);
                }
            });
        }

    } catch (e) {
        console.error(`Error scanning ${file.name}`, e);
    }
});
