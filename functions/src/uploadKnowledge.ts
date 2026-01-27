import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Sample knowledge to upload (you can expand this)
const SAMPLE_KNOWLEDGE = {
    case_studies: [
        {
            id: "cs_signal_arch_1",
            source: "Case Study - Signal Architecture",
            title: "Premium Furniture & Home Décor - Signal Architecture",
            content: "A Malaysia-based premium furniture brand struggled to convert interest into sales in the Philippines market. Despite high engagement, checkout rates were extremely low. Instaura repositioned the brand from 'elevated design' to 'functional luxury for Filipino life', focusing on warm modernism and practical solutions. Results: Revenue grew 2.3x, conversion rate increased 41%, repeat purchases rose 42%, return rate dropped 36%, and ROAS improved 67%.",
            tags: ["signal architecture", "gtm", "market entry", "positioning", "case study"],
            wordCount: 85
        }
    ],
    faqs: [
        {
            id: "faq_signal_arch",
            source: "FAQ - Signal Architecture",
            title: "What is Signal Architecture?",
            content: "Signal Architecture is the strategic design of your company's belief system — the clarity, credibility, and conviction others feel when they encounter your brand, product, or raise. It moves capital, markets, and people. Unlike branding or pitch design, Signal Architecture is strategic and aligns your narrative, GTM clarity, capital story, and founder psychology to engineer trust.",
            tags: ["signal architecture", "faq", "methodology"],
            wordCount: 65
        }
    ],
    about: [
        {
            id: "about_instaura",
            source: "About Instaura",
            title: "About Instaura",
            content: "Instaura is the world's first Signal Consulting firm, founded by Gaurav (Principal Strategist). We help founders and investors achieve clarity to make decisive moves. Over the years: 2,500+ founders advised, 250+ decisive breakthroughs delivered, Over $2B in capital moved. Instaura specializes in Signal Architecture, GTM strategy, and fundraising for DeepTech and SaaS companies.",
            tags: ["about", "instaura", "founder", "company"],
            wordCount: 60
        }
    ]
};

// This is a one-time function to seed the knowledge base
export const seedKnowledge = functions.https.onRequest(async (req, res) => {
    try {
        const db = admin.firestore();
        let totalCount = 0;

        for (const [category, items] of Object.entries(SAMPLE_KNOWLEDGE)) {
            console.log(`Uploading ${category}...`);

            for (const item of items as any[]) {
                await db.collection('knowledge').doc(item.id).set({
                    category,
                    source: item.source,
                    title: item.title,
                    content: item.content,
                    tags: item.tags,
                    wordCount: item.wordCount,
                    createdAt: admin.firestore.FieldValue.serverTimestamp()
                });

                totalCount++;
            }

            console.log(`✅ ${items.length} ${category} uploaded`);
        }

        res.json({
            success: true,
            message: `Seeded ${totalCount} sample documents to Firestore`,
            count: totalCount
        });

    } catch (error: any) {
        console.error('Error seeding knowledge:', error);
        res.status(500).json({ error: error.message });
    }
});
