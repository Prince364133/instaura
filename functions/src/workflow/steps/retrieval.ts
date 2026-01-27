import { WorkflowStep, WorkflowContext, WorkflowResult } from "../types";
import { retrieveContext } from "../../retrieval";

export class RetrievalStep implements WorkflowStep {
    name = "Retrieval";

    async execute(context: WorkflowContext): Promise<WorkflowResult> {
        try {
            // Only retrieve if it's a knowledge query or general chat (optional)
            // We can add logic here to skip retrieval for pure "hi" messages if we want
            if (context.intent === "consulting_inquiry") {
                console.log("[RetrievalStep] Skipping retrieval for consulting inquiry.");
                context.retrievedContext = ""; // No context needed specifically, or maybe we fetch "booking info"
                return { success: true };
            }

            console.log(`[RetrievalStep] Fetching context for: ${context.message}`);
            const contextText = await retrieveContext(context.message, 3);

            context.retrievedContext = contextText;
            return { success: true, data: contextText };

        } catch (error: any) {
            console.error("[RetrievalStep] Error:", error);
            context.retrievedContext = "Error retrieving context.";
            return { success: false, error: error.message };
        }
    }
}
