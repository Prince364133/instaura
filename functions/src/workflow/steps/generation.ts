import { WorkflowStep, WorkflowContext, WorkflowResult } from "../types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CORE_PROMPT } from "../../corePrompt";

export class GenerationStep implements WorkflowStep {
    name = "Generation";
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async execute(context: WorkflowContext): Promise<WorkflowResult> {
        try {
            const genAI = new GoogleGenerativeAI(this.apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            let systemInstruction = CORE_PROMPT;
            if (context.retrievedContext) {
                systemInstruction = systemInstruction.replace('{retrieved_context}', context.retrievedContext);
            } else {
                systemInstruction = systemInstruction.replace('{retrieved_context}', "No specific context retrieved.");
            }

            // customize system instruction based on intent if needed
            if (context.intent === 'consulting_inquiry') {
                systemInstruction += "\n\nCRITICAL: The user is interested in working with us. Encourage them to book a Signal Call explicitly. Be professional and welcoming.";
            }

            const chatSession = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: "System Context: " + systemInstruction }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am YAS. I am ready to answer." }],
                    }
                    // We could inject previous history from context.history here if available
                ],
            });

            const result = await chatSession.sendMessage(context.message);
            const responseText = result.response.text();

            context.response = responseText;
            return { success: true, data: responseText };

        } catch (error: any) {
            console.error("[GenerationStep] Error:", error);
            return { success: false, error: error.message };
        }
    }
}
