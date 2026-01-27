
const fs = require('fs');
const path = require('path');

const files = [
    'client/src/data/whitePapers.tsx',
    'client/src/data/claritySeries.tsx'
];

function processFile(filePath) {
    const fullPath = path.resolve(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
        console.error(`File not found: ${fullPath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Regex to find the "Related Resources" header and the following prose div
    // We match specific structure to avoid false positives
    const sectionRegex = /(<h2 className="text-2xl font-bold font-raleway text-brand-red mb-4">Related Resources<\/h2>\s*)<div className="prose text-gray-700 space-y-4">([\s\S]*?)<\/div>/g;

    content = content.replace(sectionRegex, (match, header, innerContent) => {
        const cards = [];

        // Split content by <p> tags to handle multiple items
        const paragraphs = innerContent.match(/<p>[\s\S]*?<\/p>/g);

        if (!paragraphs) return match; // No paragraphs found, return original

        paragraphs.forEach(p => {
            let type = "Resource";
            let title = "";
            let href = "";

            // Try to extract type from span
            const typeMatch = p.match(/<span className="font-semibold">([^<:]+):?<\/span>/);
            if (typeMatch) {
                type = typeMatch[1].trim();
            }

            // check for Link
            const linkMatch = p.match(/<Link href="([^"]+)"[^>]*>([\s\S]*?)<\/Link>/);

            if (linkMatch) {
                href = linkMatch[1];
                title = linkMatch[2].replace(/<[^>]+>/g, '').trim(); // Remove any inner tags if present
            } else {
                // No link, try to find text after span
                // e.g. <p><span...>Case Study:</span> Title Here</p>
                const textParts = p.replace(/<[^>]+>/g, '|').split('|').filter(s => s.trim().length > 0);
                // textParts might be ["Case Study:", "Title Here"] or similar

                // cleaner strategy: extract text content of p, remove type part
                let fullText = p.replace(/<[^>]+>/g, '').trim();
                // remove "Type:" prefix
                if (type && fullText.startsWith(type)) {
                    // remove type and optional colon
                    fullText = fullText.substring(type.length).replace(/^:\s*/, '').trim();
                }
                title = fullText;

                if (title) {
                    href = `/contact?ask_ai=Tell%20me%20about%20${encodeURIComponent(title)}`;
                }
            }

            if (title && href) {
                const card = `
                            <Link href="${href}" className="block group">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">${type}</span>
                                    <h3 className="font-raleway font-bold text-gray-800 group-hover:text-brand-red transition-colors text-lg leading-snug">
                                        ${title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center text-brand-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Read Resource <span>→</span>
                                    </div>
                                </div>
                            </Link>`;
                cards.push(card);
            }
        });

        if (cards.length > 0) {
            modified = true;
            return `${header}<div className="grid grid-cols-1 md:grid-cols-2 gap-4">${cards.join('')}</div>`;
        }

        return match;
    });

    if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    } else {
        console.log(`No changes needed for ${filePath}`);
    }
}

files.forEach(processFile);
