const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin (will use application default credentials)
admin.initializeApp({
    projectId: 'teste-erhij8'
});

const db = admin.firestore();

// Read knowledge base
const knowledgePath = path.join(__dirname, 'knowledge_base.json');
const knowledge = JSON.parse(fs.readFileSync(knowledgePath, 'utf8'));

async function uploadKnowledge() {
    console.log('Starting knowledge upload to Firestore...\n');

    let totalCount = 0;

    for (const [category, items] of Object.entries(knowledge)) {
        if (items.length === 0) continue;

        console.log(`Uploading ${category}...`);

        // Upload in smaller batches
        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            try {
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

                if ((i + 1) % 10 === 0) {
                    console.log(`  Progress: ${i + 1}/${items.length}`);
                }
            } catch (error) {
                console.error(`  ❌ Error uploading ${item.id}:`, error.message);
            }
        }

        console.log(`  ✅ ${items.length} ${category} uploaded`);
    }

    console.log(`\n✅ Total: ${totalCount} documents uploaded to Firestore`);
}

uploadKnowledge()
    .then(() => {
        console.log('\n🎉 Knowledge base upload complete!');
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Error uploading knowledge:', error);
        process.exit(1);
    });
