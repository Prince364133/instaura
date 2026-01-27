"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = exports.seedKnowledge = void 0;
const dotenv = require("dotenv");
dotenv.config();
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const engine_1 = require("./workflow/engine");
const intent_1 = require("./workflow/steps/intent");
const retrieval_1 = require("./workflow/steps/retrieval");
const generation_1 = require("./workflow/steps/generation");
admin.initializeApp();
// Temporary seed function
var uploadKnowledge_1 = require("./uploadKnowledge");
Object.defineProperty(exports, "seedKnowledge", { enumerable: true, get: function () { return uploadKnowledge_1.seedKnowledge; } });
// export const chat = functions.https.onRequest((req: any, res: any) => {
//     corsHandler(req, res, async () => {
//         if (req.method !== "POST") {
//             res.status(405).send("Method Not Allowed");
//             return;
//         }
//         const { message, userId, history } = req.body;
// change to onCall for client compatibility
exports.chat = functions.https.onCall(async (data, context) => {
    const { message, userId, history } = data;
    // Hardcoded API key as fallback (Cloud Functions doesn't deploy .env files)
    const apiKey = "AIzaSyDCUwKEV0oPGZxVEQCd0ztsQtaiu7EDq60";
    if (!apiKey) {
        throw new functions.https.HttpsError('internal', "API Key not configured");
    }
    try {
        // Initialize Workflow Context
        const initialContext = {
            message,
            userId,
            history,
            apiKey // Pass API key to context for steps to access
        };
        // Initialize Workflow Engine
        const workflow = new engine_1.WorkflowEngine(initialContext);
        // Add Steps
        workflow
            .addStep(new intent_1.IntentClassificationStep(apiKey))
            .addStep(new retrieval_1.RetrievalStep())
            .addStep(new generation_1.GenerationStep(apiKey));
        // Execute Workflow
        const finalContext = await workflow.run();
        // Return Response
        return {
            message: finalContext.response,
            intent: finalContext.intent,
            debug: {
                steps_executed: true,
                intent: finalContext.intent
            }
        };
    }
    catch (error) {
        console.error("Workflow Error:", error);
        throw new functions.https.HttpsError('internal', "I'm having trouble thinking right now. Please try again.", error.message);
    }
});
//# sourceMappingURL=index.js.map