"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveContext = void 0;
const admin = require("firebase-admin");
/**
 * Extract keywords from user message for search
 */
function extractKeywords(message) {
    const keywords = [];
    const messageLower = message.toLowerCase();
    // Important terms to search for
    const searchTerms = [
        'signal', 'architecture', 'gtm', 'fundraising', 'capital',
        'deeptech', 'saas', 'strategy', 'market', 'investor',
        'founder', 'startup', 'revenue', 'growth', 'traction',
        'positioning', 'narrative', 'pitch', 'deck', 'valuation',
        'case study', 'example', 'about', 'who', 'what', 'how',
        'instaura', 'gaurav', 'hiasmine', 'yas'
    ];
    searchTerms.forEach(term => {
        if (messageLower.includes(term)) {
            keywords.push(term);
        }
    });
    return keywords;
}
/**
 * Determine category from user message
 */
function determineCategory(message) {
    const messageLower = message.toLowerCase();
    if (messageLower.includes('case study') || messageLower.includes('example')) {
        return 'case_studies';
    }
    if (messageLower.includes('about') || messageLower.includes('who') ||
        messageLower.includes('gaurav') || messageLower.includes('hiasmine')) {
        return 'about';
    }
    if (messageLower.includes('faq') || messageLower.includes('question')) {
        return 'faqs';
    }
    if (messageLower.includes('white paper') || messageLower.includes('methodology')) {
        return 'white_papers';
    }
    if (messageLower.includes('clarity') || messageLower.includes('insight')) {
        return 'clarity_series';
    }
    return null;
}
/**
 * Retrieve relevant knowledge from Firestore
 */
async function retrieveContext(message, limit = 3) {
    const db = admin.firestore();
    const keywords = extractKeywords(message);
    const category = determineCategory(message);
    console.log(`Searching for keywords: ${keywords.join(', ')}`);
    if (category) {
        console.log(`Category filter: ${category}`);
    }
    try {
        let query = db.collection('knowledge');
        // Filter by category if detected
        if (category) {
            query = query.where('category', '==', category);
        }
        // If we have keywords, filter by tags
        if (keywords.length > 0) {
            query = query.where('tags', 'array-contains-any', keywords.slice(0, 10)); // Firestore limit
        }
        // Limit results
        query = query.limit(limit * 2); // Get more to rank
        const snapshot = await query.get();
        if (snapshot.empty) {
            console.log('No documents found, fetching random samples...');
            // Fallback: get some random documents
            const fallbackQuery = db.collection('knowledge').limit(limit);
            const fallbackSnapshot = await fallbackQuery.get();
            if (fallbackSnapshot.empty) {
                return 'No additional context available.';
            }
            const docs = fallbackSnapshot.docs.map(doc => doc.data());
            return formatContext(docs);
        }
        // Rank documents by keyword matches
        const docs = snapshot.docs.map(doc => {
            const data = doc.data();
            const score = calculateRelevanceScore(data, keywords, message);
            return { data, score };
        });
        // Sort by score and take top N
        docs.sort((a, b) => b.score - a.score);
        const topDocs = docs.slice(0, limit).map(d => d.data);
        console.log(`Retrieved ${topDocs.length} relevant documents`);
        return formatContext(topDocs);
    }
    catch (error) {
        console.error('Error retrieving context:', error);
        return 'Error retrieving context.';
    }
}
exports.retrieveContext = retrieveContext;
/**
 * Calculate relevance score for a document
 */
function calculateRelevanceScore(doc, keywords, message) {
    let score = 0;
    const contentLower = doc.content.toLowerCase();
    const titleLower = doc.title.toLowerCase();
    const messageLower = message.toLowerCase();
    // Title matches are worth more
    keywords.forEach(keyword => {
        if (titleLower.includes(keyword)) {
            score += 10;
        }
        if (contentLower.includes(keyword)) {
            score += 1;
        }
    });
    // Exact phrase matches in content
    const phrases = extractPhrases(messageLower);
    phrases.forEach(phrase => {
        if (contentLower.includes(phrase)) {
            score += 5;
        }
    });
    // Shorter documents are easier to process
    if (doc.wordCount < 500) {
        score += 2;
    }
    return score;
}
/**
 * Extract 2-3 word phrases from message
 */
function extractPhrases(message) {
    const words = message.split(/\s+/).filter(w => w.length > 3);
    const phrases = [];
    for (let i = 0; i < words.length - 1; i++) {
        phrases.push(`${words[i]} ${words[i + 1]}`);
        if (i < words.length - 2) {
            phrases.push(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
        }
    }
    return phrases;
}
/**
 * Format retrieved documents into context string
 */
function formatContext(docs) {
    if (docs.length === 0) {
        return 'No additional context available.';
    }
    const contextParts = docs.map((doc, index) => {
        return `[Source ${index + 1}: ${doc.title}]\n${doc.content.substring(0, 1500)}${doc.content.length > 1500 ? '...' : ''}`;
    });
    return contextParts.join('\n\n---\n\n');
}
//# sourceMappingURL=retrieval.js.map