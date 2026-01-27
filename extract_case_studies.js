
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caseStudiesDir = path.join(__dirname, 'client', 'src', 'pages', 'case-studies');
const outputFile = path.join(__dirname, 'client', 'src', 'data', 'caseStudies.ts');

const caseStudies = [];

function extractContent(content, regex) {
    const match = content.match(regex);
    return match ? match[1].trim() : '';
}

for (let i = 1; i <= 48; i++) {
    const filePath = path.join(caseStudiesDir, `CaseStudy${i}.tsx`);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        continue;
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract Title
    const titleRegex = /<h1[^>]*class(?:Name)?="[^"]*text-4xl[^"]*"[^>]*>\s*([\s\S]*?)\s*<\/h1>/i;
    let title = extractContent(content, titleRegex);
    title = title.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\n/g, ' ').replace(/\s+/g, ' ');

    // Extract Description (Hero description)
    const descRegex = /<p[^>]*class(?:Name)?="[^"]*text-gray-300[^"]*max-w-4xl[^"]*"[^>]*>\s*([\s\S]*?)\s*<\/p>/i;
    let description = extractContent(content, descRegex);
    description = description.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\n/g, ' ').replace(/\s+/g, ' ');

    // Extract Badges (Sector, Service, etc.)
    // Strategy: Look for the badges section and parse pairs
    const badgesSectionRegex = /<div[^>]*caseStudyAnimations\.hero\.badges[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i; // Match until end of badges container
    // Actually, simpler to just find all badge blocks.

    // Each badge block looks like:
    // <div ...>
    //   <p ... class="...text-gray-400...">LABEL</p>
    //   <p ... class="...text-white...">VALUE</p>
    // </div>

    // We can regex global search for label and value pairs close to each other

    let sector = '';
    let service = '';

    // Find Sector
    const sectorRegex = /<p[^>]*>Sector<\/p>\s*<p[^>]*>([\s\S]*?)<\/p>/i;
    let sectorMatch = content.match(sectorRegex);
    if (sectorMatch) sector = sectorMatch[1].trim();

    // Find Service
    const serviceRegex = /<p[^>]*>Service<\/p>\s*<p[^>]*>([\s\S]*?)<\/p>/i;
    let serviceMatch = content.match(serviceRegex);
    if (serviceMatch) service = serviceMatch[1].trim();

    if (!sector) sector = "General";
    if (!service) service = "General";


    caseStudies.push({
        id: i,
        title,
        description,
        sector,
        service,
        slug: `case-study-${i}` // Or allow just ID based routing
    });
}

const fileContent = `export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  sector: string;
  service: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = ${JSON.stringify(caseStudies, null, 2)};
`;

fs.writeFileSync(outputFile, fileContent);
console.log(`Successfully generated ${outputFile} with ${caseStudies.length} entries.`);
