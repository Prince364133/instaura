
export interface WorkflowContext {
    userId?: string;
    message: string;
    history?: any[];

    // Extracted data
    intent?: string;
    keywords?: string[];

    // Data fetched during execution
    retrievedContext?: string;

    // Final output
    response?: string;

    [key: string]: any; // Allow flexible data passing
}

export interface WorkflowResult {
    success: boolean;
    data?: any;
    error?: string;
}

export interface WorkflowStep {
    name: string;
    execute(context: WorkflowContext): Promise<WorkflowResult>;
}
