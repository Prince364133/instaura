const fs = require('fs');
const path = require('path');

// Paths
const CLIENT_DIR = path.join(__dirname, '../client/src');
const DATA_DIR = path.join(CLIENT_DIR, 'data');
const PAGES_DIR = path.join(CLIENT_DIR, 'pages');
const CS_DIR = path.join(PAGES_DIR, 'case-studies');

// 1. Build Index
const index = {
    whitePapers: [],
    claritySeries: [],
    caseStudies: []
};

// Helper: Normalize
const normalize = (str) => {
    let s = str.toLowerCase();
    s = s.replace(/^#\d+:\s*/, '');
    s = s.replace(/[^a-z0-9]+/g, ' ').trim();
    return s;
};

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

// Read CaseStudies
try {
    const caseContent = fs.readFileSync(path.join(DATA_DIR, 'caseStudies.ts'), 'utf8');
    const caseMatches = caseContent.matchAll(/"id":\s*(\d+),[\s\S]*?"title":\s*"([^"]+)"/g);
    for (const match of caseMatches) {
        index.caseStudies.push({ id: match[1], title: match[2], norm: normalize(match[2]) });
    }
} catch (e) { }

console.log(`Index: WP=${index.whitePapers.length}, CS=${index.claritySeries.length}, Studies=${index.caseStudies.length}`);

// 2. Fix Files
const filesToFix = fs.readdirSync(CS_DIR)
    .filter(f => f.startsWith('CaseStudy') && f.endsWith('.tsx'))
    .map(f => path.join(CS_DIR, f));

filesToFix.push(path.join(DATA_DIR, 'whitePapers.tsx'));
filesToFix.push(path.join(DATA_DIR, 'claritySeries.tsx'));

function findLink(title) {
    const norm = normalize(title);
    const wp = index.whitePapers.find(x => x.norm === norm);
    if (wp) return `/white-papers/${wp.slug}`;
    const cs = index.claritySeries.find(x => x.norm === norm);
    if (cs) return `/clarity-series/${cs.slug}`;
    const study = index.caseStudies.find(x => x.norm === norm);
    if (study) return `/case-studies/${study.id}`;
    return null;
}

filesToFix.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex 1: CaseStudy 1 style (motion.div, p title)
    const regex1 = /<Link href="([^"]+)">(\s*<motion\.div[\s\S]*?<p[^>]*>[^<]+<\/p>\s*<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/motion\.div>\s*)<\/Link>/g;

    // Regex 2: CaseStudy 4 style + ClaritySeries (div, h3 title, className on Link)
    const regex2 = /<Link href="([^"]+)"( className="[^"]*")?>(\s*<div[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<\/div>\s*)<\/Link>/g;

    // Regex 3: CaseStudy 14 style (motion.div, h3 title)
    const regex3 = /<Link href="([^"]+)"( className="[^"]*")?>(\s*<motion\.div[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<\/motion\.div>\s*)<\/Link>/g;

    let modified = false;

    const normalizeTitle = (t) => t.replace(/<[^>]+>/g, '').trim(); // Remove nested spans if any

    // Common styling replacement logic
    const updateStyling = (divStr) => {
        let s = divStr;
        // Replace bg-gradient with bg-white
        s = s.replace(/bg-gradient-to-br from-gray-50 to-white/g, "bg-white");
        // Replace border styles
        s = s.replace(/border-gray-200( border-dashed)?/g, "border-gray-300 shadow-md hover:shadow-xl bg-white");
        // Ensure bg-white is present and no duplicate 'shadow-sm' if we added 'shadow-md'
        s = s.replace(/shadow-sm/g, "");
        return s;
    };

    // Apply Regex 1
    content = content.replace(regex1, (match, oldHref, innerDiv, title) => {
        title = normalizeTitle(title);
        const link = findLink(title);
        let newHref = link ? link : `/contact?ask_ai=${encodeURIComponent("Tell me about " + title)}`;
        let newInnerDiv = updateStyling(innerDiv);
        if (oldHref !== newHref || innerDiv !== newInnerDiv) { modified = true; return `<Link href="${newHref}">${newInnerDiv}</Link>`; }
        return match;
    });

    // Apply Regex 2
    content = content.replace(regex2, (match, oldHref, classAttr, innerDiv, title) => {
        title = normalizeTitle(title);
        const link = findLink(title);
        let newHref = link ? link : `/contact?ask_ai=${encodeURIComponent("Tell me about " + title)}`;
        let newInnerDiv = updateStyling(innerDiv);
        if (oldHref !== newHref || innerDiv !== newInnerDiv) {
            modified = true;
            const classStr = classAttr || "";
            return `<Link href="${newHref}"${classStr}>${newInnerDiv}</Link>`;
        }
        return match;
    });

    // Apply Regex 3
    content = content.replace(regex3, (match, oldHref, classAttr, innerDiv, title) => {
        title = normalizeTitle(title);
        const link = findLink(title);
        let newHref = link ? link : `/contact?ask_ai=${encodeURIComponent("Tell me about " + title)}`;
        let newInnerDiv = updateStyling(innerDiv);
        if (oldHref !== newHref || innerDiv !== newInnerDiv) {
            modified = true;
            const classStr = classAttr || "";
            return `<Link href="${newHref}"${classStr}>${newInnerDiv}</Link>`;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${path.basename(filePath)}`);
    }
});
