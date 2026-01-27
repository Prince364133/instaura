
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../client/src/data/claritySeries.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update Card Container Styles (Shadows and Border)
const oldContainerClass = 'bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col';
const newContainerClass = 'bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col';

// 2. Update Footer Visibility (Make always visible)
const oldFooterClass = 'mt-auto pt-4 flex items-center text-brand-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0';
const newFooterClass = 'mt-auto pt-4 flex items-center text-brand-red text-sm font-medium transition-colors';

// 3. Update Ask AI Card (Adding Shadow for contrast)
const oldAskAiClass = 'bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 border-dashed hover:border-brand-red/30 hover:bg-red-50/10 transition-all duration-300 h-full flex flex-col';
const newAskAiClass = 'bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 border-dashed shadow-sm hover:shadow-md hover:border-brand-red/30 hover:bg-red-50/10 transition-all duration-300 h-full flex flex-col';


let updatedContent = content.replaceAll(oldContainerClass, newContainerClass);
updatedContent = updatedContent.replaceAll(oldFooterClass, newFooterClass);
updatedContent = updatedContent.replaceAll(oldAskAiClass, newAskAiClass);

if (content === updatedContent) {
    console.log("No changes made. Check if strings match.");
} else {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log("Successfully refined card styles.");
}
