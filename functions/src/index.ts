import * as dotenv from "dotenv";
dotenv.config();

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// import * as cors from "cors"; // Removed unused import
import { WorkflowContext } from "./workflow/types";
import { WorkflowEngine } from "./workflow/engine";
import { IntentClassificationStep } from "./workflow/steps/intent";
import { RetrievalStep } from "./workflow/steps/retrieval";
import { GenerationStep } from "./workflow/steps/generation";

admin.initializeApp();

// Temporary seed function
export { seedKnowledge } from "./uploadKnowledge";

// export const chat = functions.https.onRequest((req: any, res: any) => {
//     corsHandler(req, res, async () => {
//         if (req.method !== "POST") {
//             res.status(405).send("Method Not Allowed");
//             return;
//         }

//         const { message, userId, history } = req.body;

// change to onCall for client compatibility
export const chat = functions.https.onCall(async (data, context) => {
    const { message, userId, history } = data;

    // Hardcoded API key as fallback (Cloud Functions doesn't deploy .env files)
    const apiKey = "AIzaSyDCUwKEV0oPGZxVEQCd0ztsQtaiu7EDq60";

    if (!apiKey) {
        throw new functions.https.HttpsError('internal', "API Key not configured");
    }

    try {
        // Initialize Workflow Context
        const initialContext: WorkflowContext = {
            message,
            userId,
            history,
            apiKey // Pass API key to context for steps to access
        };

        // Initialize Workflow Engine
        const workflow = new WorkflowEngine(initialContext);

        // Add Steps
        workflow
            .addStep(new IntentClassificationStep(apiKey))
            .addStep(new RetrievalStep())
            .addStep(new GenerationStep(apiKey));

        // Execute Workflow
        const finalContext = await workflow.run();

        // Return Response
        return {
            message: finalContext.response,
            intent: finalContext.intent, // Optional: return intent for client-side logic
            debug: {
                steps_executed: true,
                intent: finalContext.intent
            }
        };

    } catch (error: any) {
        console.error("Workflow Error:", error);
        throw new functions.https.HttpsError('internal', "I'm having trouble thinking right now. Please try again.", error.message);
    }
});
