"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const generative_ai_1 = require("@google/generative-ai");
const cors = require("cors");
const systemPrompt_1 = require("./systemPrompt");
admin.initializeApp();
const corsHandler = cors({ origin: true });
exports.chat = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        var _a;
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }
        const { message } = req.body;
        // Get Key from Firebase Config
        const apiKey = ((_a = functions.config().gemini) === null || _a === void 0 ? void 0 : _a.key) || process.env.GEMINI_API_KEY;
        if (!apiKey) {
            res.status(500).json({ error: "API Key not configured in Firebase Functions" });
            return;
        }
        try {
            const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const chatSession = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: "System Context: " + systemPrompt_1.SYSTEM_PROMPT }],
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
                }
                catch (err) {
                    if ((err.status === 429 || err.status === 503) && retries < maxRetries) {
                        retries++;
                        const delay = 3000 * retries;
                        console.log(`Retrying... Attempt ${retries}`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                    else {
                        throw err;
                    }
                }
            }
            const response = await (result === null || result === void 0 ? void 0 : result.response);
            const text = response === null || response === void 0 ? void 0 : response.text();
            res.json({ message: text });
        }
        catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: "I'm having trouble thinking right now. Please try again." });
        }
    });
});
//# sourceMappingURL=index.js.map