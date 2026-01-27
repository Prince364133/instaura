
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as cors from "cors";
import { SYSTEM_PROMPT } from "./systemPrompt";

admin.initializeApp();

const corsHandler = cors({ origin: true });

export const chat = functions.https.onRequest((req: any, res: any) => {
    corsHandler(req, res, async () => {
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }

        const { message } = req.body;
        // Get Key from Firebase Config
        const apiKey = functions.config().gemini?.key || process.env.GEMINI_API_KEY;

        if (!apiKey) {
            res.status(500).json({ error: "API Key not configured in Firebase Functions" });
            return;
        }

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const chatSession = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: "System Context: " + SYSTEM_PROMPT }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am YAS, the strategic intelligence assistant. I will use the provided context to answer your questions." }],
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
            res.status(500).json({ message: "I'm having trouble thinking right now. Please try again." });
        }
    });
});
