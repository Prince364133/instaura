
const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, 'live_bundle.js');
const content = fs.readFileSync(bundlePath, 'utf-8');

const searchString = 'From "Tool" to "Standard"';
const index = content.indexOf(searchString);

if (index === -1) {
    console.error('Search string not found!');
    // Try without quotes just in case of encoding
    const looseSearch = 'From \\"Tool\\" to \\"Standard\\"';
    const index2 = content.indexOf(looseSearch);
    if (index2 === -1) {
        console.error('Loose search also failed.');
        process.exit(1);
    } else {
        console.log('Found with loose search at', index2);
        extractArray(index2);
    }
} else {
    console.log('Found at index:', index);
    extractArray(index);
}

function extractArray(idx) {
    // Look backwards for '['
    let start = idx;
    while (start > 0 && content[start] !== '[') {
        start--;
    }

    // Look forwards for ']'
    let end = idx;
    while (end < content.length && content[end] !== ']') {
        end++;
    }

    if (start > 0 && end < content.length) {
        const arrayStr = content.substring(start, end + 1);
        console.log('Extracted Array Length:', arrayStr.length);

        try {
            // Evaluates the string to get the object
            // Use eval strictly for this reliable input from our own bundle search
            const data = eval('(' + arrayStr + ')');

            // Format as TS
            const tsContent = `export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  sector: string;
  service: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = ${JSON.stringify(data, null, 2)};
`;

            const outputPath = path.join(__dirname, 'client', 'src', 'data', 'caseStudies.ts');
            fs.writeFileSync(outputPath, tsContent);
            console.log('Successfully wrote to', outputPath);

        } catch (e) {
            console.error('Error parsing/writing:', e);
        }
    } else {
        console.log('Could not bound array');
    }
}
