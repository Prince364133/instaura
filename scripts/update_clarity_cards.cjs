
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../client/src/data/claritySeries.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find the Related Resources section
// Matches <h2>...</h2> followed by <div class="prose...">...</div>
const sectionRegex = /(<h2 className="text-2xl font-bold font-raleway text-brand-red mb-4">Related Resources<\/h2>)\s*<div className="prose text-gray-700 space-y-4">([\s\S]*?)<\/div>/g;

content = content.replace(sectionRegex, (match, h2, body) => {
    // h2 has mb-4, change to mb-6
    const newH2 = h2.replace('mb-4', 'mb-6');

    // Parse body for <p> tags
    const pRegex = /<p>\s*<span className="font-semibold">([^<]+)<\/span>\s*(.*?)<\/p>/g;
    const items = [];
    let pMatch;

    while ((pMatch = pRegex.exec(body)) !== null) {
        let type = pMatch[1].replace(':', '').trim();
        let contentRaw = pMatch[2]; // Could contain <Link ...>Title</Link> or just Title

        let linkHref = '';
        let title = '';
        let isLink = false;

        const linkMatch = /<Link href="([^"]+)"[^>]*>(.*?)<\/Link>/.exec(contentRaw);
        if (linkMatch) {
            linkHref = linkMatch[1];
            title = linkMatch[2];
            isLink = true;
        } else {
            title = contentRaw.trim();
            // Generate Ask AI link
            linkHref = `/contact?ask_ai=${encodeURIComponent(title)}`;
            isLink = false; // It's an "Ask AI" link now, but conceptually unlinked in source
        }

        items.push({ type, title, linkHref, isLink });
    }

    if (items.length === 0) return match; // No items found, don't change

    const cards = items.map(item => {
        if (!item.isLink) {
            // Ask AI Card
            return `                            <Link href="${item.linkHref}" className="block group">
                                <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 border-dashed shadow-sm hover:shadow-md hover:border-brand-red/30 hover:bg-red-50/10 transition-all duration-300 h-full flex flex-col">
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
        } else {
            // Standard Card
            return `                            <Link href="${item.linkHref}" className="block group">
                                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">${item.type}</span>
                                    <h3 className="font-raleway font-bold text-gray-800 group-hover:text-brand-red transition-colors text-lg leading-snug">
                                        ${item.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center text-brand-red text-sm font-medium transition-colors">
                                        Read Resource <span>→</span>
                                    </div>
                                </div>
                            </Link>`;
        }
    }).join('\n\n');

    return `${newH2}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
${cards}
                        </div>`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated Clarity Series cards.');
