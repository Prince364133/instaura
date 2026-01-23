
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChatbot } from '@/context/ChatbotContext';
import { Input } from '@/components/ui/input';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function ChatbotModal() {
    const { isOpen, closeChatbot } = useChatbot();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! I'm Yash, your strategic intelligence assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch('http://localhost:5678/webhook/f37d4b7b-1824-4aad-91f0-c24563e2af34', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputValue })
            });

            let responseText = "I'm sorry, I couldn't process that.";

            try {
                const data = await response.json();
                responseText = data.output || data.message || data.text || JSON.stringify(data);
            } catch (e) {
                // If response is not JSON, use text
                responseText = await response.text();
            }

            const botResponse: Message = {
                id: Date.now().toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);

        } catch (error) {
            console.error('Error sending message:', error);
            const errorResponse: Message = {
                id: Date.now().toString(),
                text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorResponse]);
            setIsTyping(false);
        }


    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                    className="fixed bottom-4 right-4 z-[9999] w-full max-w-sm md:w-[400px] md:bottom-8 md:right-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[500px] max-h-[80vh]"
                >
                    {/* Header */}
                    <div className="bg-brand-red p-4 text-white flex justify-between items-center shadow-md">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                <Bot size={24} />
                            </div>
                            <div>
                                <h3 className="font-raleway font-bold text-lg">Talk to YAS</h3>
                                <span className="text-xs text-red-100 flex items-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                    Online
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={closeChatbot}
                            className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl px-4 text-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-brand-red text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex space-x-1 items-center">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 focus-visible:ring-brand-red"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="bg-brand-red hover:bg-red-700 text-white shrink-0"
                                disabled={!inputValue.trim() || isTyping}
                            >
                                <Send size={18} />
                            </Button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
