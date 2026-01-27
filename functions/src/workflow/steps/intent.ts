import { WorkflowStep, WorkflowContext, WorkflowResult } from "../types";
import { GoogleGenerativeAI } from "@google/generative-ai";

export class IntentClassificationStep implements WorkflowStep {
    name = "IntentClassification";
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async execute(context: WorkflowContext): Promise<WorkflowResult> {
        try {
            const genAI = new GoogleGenerativeAI(this.apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const prompt = `
            Classify the following user message into one of these intents:
            - "consulting_inquiry": User wants to book a call, hire Instaura, or ask about services availability.
            - "knowledge_query": User is asking a question about strategy, signal, GTM, or asking definitions.
            - "general_chat": Casual conversation, greeting, or irrelevant to business.
            
            Message: "${context.message}"
            
            Return ONLY the intent string.
            `;

            const result = await model.generateContent(prompt);
            const intent = result.response.text().trim().toLowerCase();

            // Store intent in context
            context.intent = intent;
            console.log(`[IntentStep] Classified as: ${intent}`);

            return { success: true, data: intent };
        } catch (error: any) {
            console.error("[IntentStep] Error:", error);
            // Fallback intent
            context.intent = "general_chat";
            return { success: true, data: "general_chat", error: error.message };
        }
    }
}
