import { WorkflowContext, WorkflowStep } from "./types";

export class WorkflowEngine {
    private steps: WorkflowStep[] = [];
    private context: WorkflowContext;

    constructor(initialContext: WorkflowContext) {
        this.context = initialContext;
    }

    addStep(step: WorkflowStep): WorkflowEngine {
        this.steps.push(step);
        return this;
    }

    async run(): Promise<WorkflowContext> {
        console.log(`[Workflow] Starting execution with ${this.steps.length} steps.`);

        for (const step of this.steps) {
            console.log(`[Workflow] Executing step: ${step.name}`);
            try {
                const result = await step.execute(this.context);

                if (!result.success) {
                    console.error(`[Workflow] Step ${step.name} failed: ${result.error}`);
                    throw new Error(`Step ${step.name} failed: ${result.error}`);
                }

                console.log(`[Workflow] Step ${step.name} completed.`);
            } catch (error: any) {
                console.error(`[Workflow] Execution error in step ${step.name}:`, error);
                throw error;
            }
        }

        console.log('[Workflow] Execution finished.');
        return this.context;
    }
}
