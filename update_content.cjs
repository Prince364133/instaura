
const fs = require('fs');
const path = require('path');

// --- Paths ---
const caseStudiesPath = path.join(__dirname, 'client/src/data/caseStudies.ts');
const whitePapersPath = path.join(__dirname, 'client/src/data/whitePapers.tsx');
const claritySeriesPath = path.join(__dirname, 'client/src/data/claritySeries.tsx');

// --- Map Generation ---
const urlMap = new Map();

// Helper to clean titles for fuzzy matching if needed
const normalize = (str) => str.trim().toLowerCase().replace(/[^\w\s]/g, '');

function extractMappings() {
    // 1. Case Studies
    if (fs.existsSync(caseStudiesPath)) {
        const content = fs.readFileSync(caseStudiesPath, 'utf8');
        const regex = /id:\s*(\d+),[\s\S]*?title:\s*(["'])(.*?)\2/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const id = match[1];
            const title = match[3];
            urlMap.set(normalize(title), `/case-studies/${id}`);
            // Also store exact match just in case
            urlMap.set(title.trim(), `/case-studies/${id}`);
        }
    }

    // 2. White Papers
    if (fs.existsSync(whitePapersPath)) {
        const content = fs.readFileSync(whitePapersPath, 'utf8');
        const regex = /title:\s*(["'])(.*?)\1,[\s\S]*?slug:\s*(["'])(.*?)\3/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const title = match[2];
            const slug = match[4];
            urlMap.set(normalize(title), `/white-papers/${slug}`);
            urlMap.set(title.trim(), `/white-papers/${slug}`);
        }
    }

    // 3. Clarity Series
    if (fs.existsSync(claritySeriesPath)) {
        const content = fs.readFileSync(claritySeriesPath, 'utf8');
        const regex = /title:\s*(["'])(.*?)\1,[\s\S]*?slug:\s*(["'])(.*?)\3/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const title = match[2];
            const slug = match[4];
            urlMap.set(normalize(title), `/clarity-series/${slug}`);
            urlMap.set(title.trim(), `/clarity-series/${slug}`);
        }
    }

    console.log(`Mapped ${urlMap.size} titles.`);
}

// --- Content Processing ---

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Remove Final CTA Block
    // Matches <section ...> ... Final CTA ... </section>
    // Be careful with greedy regex. We assume indentation pattern helps.
    // Try to match the specific structure seen in files.

    // Pattern: <section className="px-6 py-8"> ... Final CTA ... </section>
    // This is risky with regex. But let's try a robust pattern for the specific block.
    // The block usually starts with <section className="px-6 py-8"> and contains "Final CTA"

    const ctaRegex = /<section className="px-6 py-8">\s*<div className="max-w-4xl mx-auto">\s*<h2[^>]*>Final CTA.*?<\/section>/gs;
    if (ctaRegex.test(content)) {
        content = content.replace(ctaRegex, '');
        console.log(`Removed Final CTA blocks from ${path.basename(filePath)}`);
        modified = true;
    }

    // 2. Link Resources
    // Pattern: <p><span className="font-semibold">Type:</span> Title</p>
    // We want to capture the whole block of resources to replace it with a grid.
    // The resources are usually inside <div className="prose ..."> ... </div> inside a specific section.
    // BUT the previous replacement logic replaced line by line.
    // To switch to a grid, we need to wrap them.

    // Strategy:
    // 1. Find the "Related Resources" header and the following div.
    // 2. Extract all p/span items.
    // 3. Rebuild the whole div as a specific grid structure.

    // Current Structure in file:
    // <section...>
    //   <h2...>Related Resources</h2>
    //   <div className="prose text-gray-700 space-y-4">
    //      <p>...</p>
    //   </div>
    // </section>

    const sectionRegex = /(<h2[^>]*>Related Resources<\/h2>\s*<div className="prose[^"]*">)([\s\S]*?)(<\/div>)/;
    const sectionMatch = content.match(sectionRegex);

    if (sectionMatch) {
        const prefix = sectionMatch[1];
        const innerContent = sectionMatch[2];
        const suffix = sectionMatch[3];

        // Extract items
        // Supported formats:
        // <p><span className="font-semibold">Type:</span> Title</p>
        // <p><span className="font-semibold">Type</span> <Link href="...">Title</Link></p>

        const itemRegex = /<p>\s*<span className="font-semibold">([^<]+)<\/span>\s*(.*?)<\/p>/g;
        let match;
        const items = [];

        // We need to run regex on the ORIGINAL innerContent (before my previous replacements if running again? No, we are running on file on disk)
        // If I ran the script before, it might have Links already.
        // Let's handle both raw text and existing Links.

        while ((match = itemRegex.exec(innerContent)) !== null) {
            let type = match[1].replace(/:$/, '').trim();
            let rest = match[2];
            let title = '';
            let url = '';

            // Check if rest contains a Link
            const linkMatch = rest.match(/href="([^"]+)"[^>]*>([^<]+)<\/Link>/);
            if (linkMatch) {
                url = linkMatch[1];
                title = linkMatch[2];
            } else {
                title = rest.trim();
                // Match logic again for unlinked ones
                const norm = normalize(title);
                url = urlMap.get(norm);
                // Advanced Fuzzy Match
                if (!url) {
                    const searchTokens = new Set(norm.split(/\s+/).filter(t => t.length > 3));
                    let maxScore = 0;
                    for (const [key, val] of urlMap.entries()) {
                        const candidateTokens = new Set(key.split(/\s+/).filter(t => t.length > 3));
                        let intersection = 0;
                        for (const t of searchTokens) { if (candidateTokens.has(t)) intersection++; }
                        const union = new Set([...searchTokens, ...candidateTokens]).size;
                        const score = union === 0 ? 0 : intersection / union;
                        if (score > 0.25 && score > maxScore) {
                            maxScore = score; url = val;
                        }
                    }
                }
            }

            items.push({ type, title, url });
        }

        if (items.length > 0) {
            let newHtml = `<h2 className="text-2xl font-bold font-raleway text-brand-red mb-6">Related Resources</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">`;

            items.forEach(item => {
                let card = '';
                if (item.url) {
                    // Linked Card
                    card = `
                            <Link href="${item.url}" className="block group">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">${item.type}</span>
                                    <h3 className="font-raleway font-bold text-gray-800 group-hover:text-brand-red transition-colors text-lg leading-snug">
                                        ${item.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center text-brand-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Read Resource <span>→</span>
                                    </div>
                                </div>
                            </Link>`;
                } else {
                    // AI Card
                    const aiPrompt = encodeURIComponent(item.title);
                    // Use a special param to trigger AI
                    card = `
                            <Link href="/contact?ask_ai=${aiPrompt}" className="block group">
                                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 border-dashed hover:border-brand-red/30 hover:bg-red-50/10 transition-all duration-300 h-full flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-brand-red/70 font-semibold mb-2 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                                        Ask AI
                                    </span>
                                    <h3 className="font-raleway font-semibold text-gray-600 group-hover:text-brand-red/80 transition-colors text-lg leading-snug">
                                        ${item.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center text-gray-400 text-sm group-hover:text-brand-red transition-colors">
                                        Ask YAS Intelligence <span>→</span>
                                    </div>
                                </div>
                            </Link>`;
                }
                newHtml += card;
            });

            newHtml += `</div>`;

            // Replace the entire section block
            const fullSectionRegex = /<section className="px-6 py-8">\s*<div className="max-w-4xl mx-auto">\s*<h2[^>]*>Related Resources(?:[\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;

            // We need to be careful with layout. The original file has:
            // <section ...> <div max-w... > <h2...> ... <div>...</div> </div> </section>

            // I will construct the FULL section
            const fullReplacement = `<section className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        ${newHtml}
                    </div>
                </section>`;

            if (content.match(fullSectionRegex)) {
                content = content.replace(fullSectionRegex, fullReplacement);
                modified = true;
                console.log(`Updated Grid Layout for ${path.basename(filePath)}`);
            } else {
                // Fallback if regex missed: strictly replace the H2...div part inside the existing section if possible, 
                // but matching nested divs with regex is hard.
                // However, I know the code structure from previous reads.

                // Let's try replacing just the header + inner div
                // The H2 starts it. The div ends it.
                const partialRegex = /<h2[^>]*>Related Resources<\/h2>\s*<div className="prose[^"]*">[\s\S]*?<\/div>/;
                if (partialRegex.test(content)) {
                    content = content.replace(partialRegex, newHtml);
                    modified = true;
                    console.log(`Updated Grid Layout (Partial) for ${path.basename(filePath)}`);
                }
            }
        }
    } else {
        // Fallback for cases where regex completely fails or structure is different
        // Maybe it's already updated?
        if (content.includes('grid-cols-2')) {
            console.log('Already updated to grid.');
        } else {
            // Try standard replacement logic (paragraph based) if grid conversion fails? 
            // No, user requested cards.
        }
    }

    // 3. Add Import
    if (modified && !content.includes('import { Link } from "wouter";')) {
        content = `import { Link } from "wouter";\n` + content;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${path.basename(filePath)}`);
    } else {
        console.log(`No changes for ${path.basename(filePath)}`);
    }
}

extractMappings();
processFile(whitePapersPath);
processFile(claritySeriesPath);
