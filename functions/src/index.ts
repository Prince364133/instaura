import * as dotenv from "dotenv";
dotenv.config();

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as cors from "cors";
import { CORE_PROMPT } from "./corePrompt";
import { retrieveContext } from "./retrieval";

admin.initializeApp();

// Temporary seed function
export { seedKnowledge } from "./uploadKnowledge";

const corsHandler = cors({ origin: true });

export const chat = functions.https.onRequest((req: any, res: any) => {
    corsHandler(req, res, async () => {
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }

        const { message } = req.body;
        // Hardcoded API key as fallback (Cloud Functions doesn't deploy .env files)
        const apiKey = "AIzaSyDCUwKEV0oPGZxVEQCd0ztsQtaiu7EDq60";

        if (!apiKey) {
            res.status(500).json({ error: "API Key not configured" });
            return;
        }

        try {
            // Step 1: Retrieve relevant context from Firestore
            console.log('Retrieving context for message:', message);
            const retrievedContext = await retrieveContext(message, 3);

            // Step 2: Build dynamic prompt with retrieved context
            const dynamicPrompt = CORE_PROMPT.replace('{retrieved_context}', retrievedContext);

            // Step 3: Initialize Gemini
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const chatSession = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: "System Context: " + dynamicPrompt }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am YAS, the strategic intelligence assistant for Instaura. I will use the provided context to answer your questions about Signal Architecture, GTM strategy, and fundraising." }],
                    }
                ],
            });

            let retries = 0;
            const maxRetries = 3;
            let result;

            while (retries <= maxRetries) {
                try {
                    result = await chatSession.sendMessage(message);
                    break;
                } catch (err: any) {
                    if ((err.status === 429 || err.status === 503) && retries < maxRetries) {
                        retries++;
                        const delay = 3000 * retries;
                        console.log(`Retrying... Attempt ${retries}`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                    } else {
                        throw err;
                    }
                }
            }

            const response = await result?.response;
            const text = response?.text();
            res.json({ message: text });

        } catch (error: any) {
            console.error("Error:", error);
            console.error("Error Detail:", {
                message: error.message,
                status: error.status,
                stack: error.stack
            });
            res.status(500).json({
                message: "I'm having trouble thinking right now. Please try again.",
                debug: error.message
            });
        }
    });
});
