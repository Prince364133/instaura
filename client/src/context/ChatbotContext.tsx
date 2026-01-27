
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ChatbotContextType = {
    isOpen: boolean;
    initialMessage: string;
    openChatbot: (message?: string) => void;
    closeChatbot: () => void;
    toggleChatbot: () => void;
};

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialMessage, setInitialMessage] = useState("");

    const openChatbot = (message?: string) => {
        if (message) setInitialMessage(message);
        setIsOpen(true);
    };
    const closeChatbot = () => {
        setIsOpen(false);
        setInitialMessage(""); // Clear on close? Or keep until sent? Better clear.
    };
    const toggleChatbot = () => setIsOpen(prev => !prev);

    return (
        <ChatbotContext.Provider value={{ isOpen, initialMessage, openChatbot, closeChatbot, toggleChatbot }}>
            {children}
        </ChatbotContext.Provider>
    );
}

export function useChatbot() {
    const context = useContext(ChatbotContext);
    if (context === undefined) {
        throw new Error('useChatbot must be used within a ChatbotProvider');
    }
    return context;
}
