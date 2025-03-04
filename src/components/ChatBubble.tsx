/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent } from "react";
import { Send, Bot, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    ChatBubble,
    ChatBubbleAvatar,
    ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {promptAI} from '@/data/data.jsx'

// API Key for Google Gemini (Replace with your key)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(API_KEY);

export default function Chat() {
    const [messages, setMessages] = useState([
        { id: 1, content: "Hello! Ask me anything about Aditya Kumar Mohanty and his projects.", sender: "ai" },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Function to send message and get AI response
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message to chat
        const userMessage = { id: messages.length + 1, content: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const systemPrompt:any = {promptAI}

            // Generate AI Response
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const result = await model.generateContent([systemPrompt, input]);
            const response = await result.response;
            const aiResponse = await response.text();

            // Add AI response to chat
            const botMessage = { id: messages.length + 2, content: aiResponse, sender: "ai" };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages((prev) => [
                ...prev,
                { id: messages.length + 2, content: "Oops! Something went wrong.", sender: "ai" },
            ]);
        }

        setIsLoading(false);
    };

    return (
        <div className="max-h-screen relative">
            <ExpandableChat size="lg" position="bottom-right" icon={<Bot className="h-6 w-6" />}>
                <ExpandableChatHeader className="flex-col text-center justify-center">
                    <h1 className="text-xl font-semibold">Chat with AI ✨</h1>
                    <p className="text-sm text-muted-foreground">Ask about Souptik and his projects</p>
                </ExpandableChatHeader>

                <ExpandableChatBody>
                    <ChatMessageList>
                        {messages.map((message) => (
                            <ChatBubble key={message.id} variant={message.sender === "user" ? "sent" : "received"}>
                                <ChatBubbleAvatar
                                    className="h-8 w-8 shrink-0"
                                    src={
                                        message.sender === "user"
                                            ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                                            : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                                    }
                                    fallback={message.sender === "user" ? "US" : "AI"}
                                />
                                <ChatBubbleMessage variant={message.sender === "user" ? "sent" : "received"}>
                                    {message.content}
                                </ChatBubbleMessage>
                            </ChatBubble>
                        ))}

                        {isLoading && (
                            <ChatBubble variant="received">
                                <ChatBubbleAvatar
                                    className="h-8 w-8 shrink-0"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                                    fallback="AI"
                                />
                                <ChatBubbleMessage isLoading />
                            </ChatBubble>
                        )}
                    </ChatMessageList>
                </ExpandableChatBody>

                <ExpandableChatFooter>
                    <form onSubmit={handleSubmit} className="relative flex items-center rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1">
                        <ChatInput
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me about Aditya..."
                            className="flex-1 min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                        />
                        <Button type="submit" size="sm" className="ml-2 flex gap-1.5">
                            Send
                            <CornerDownLeft className="size-4" />
                        </Button>
                    </form>
                </ExpandableChatFooter>
            </ExpandableChat>
        </div>
    );
}
