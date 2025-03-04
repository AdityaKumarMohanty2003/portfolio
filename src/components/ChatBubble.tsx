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
            const systemPrompt:any = `You are an AI assistant who knows everything about Aditya Kumar Mohanty.  
                Your job is to provide details about his projects, skills, achievements, and ways to contact him.  
                If a question is unrelated to Souptik, politely redirect the user back to relevant topics with a short and to-the-point answer.  

                ### About Aditya Kumar Mohanty
                - Python Developer | 3rd-year student at Sikkim Manipal Institute of Technology  
                - Specializes in AI, backend development, and scalable applications  

                ### Projects  
                - EncoHealth – Medical platform with patient, doctor, and admin panels  
                - LeetCode-like System – Code execution platform using a queue-based architecture  
                - Jarvis AI Assistant – Voice-controlled AI assistant with LLM integration  
                - Real-time Score Update System – Uses WebSockets and Redis for live updates  
                - LiveKit Voice Assistant App – React Native app for mobile voice control  
                - Expense Tracker – Python, FastAPI, PostgreSQL with authentication and cron jobs  
                - Hospital Chatbot – AI-powered chatbot for medical queries  
                - Automated Deployment Pipeline – CI/CD setup for Python backend on AWS EC2  

                ### Skills  
                - Python (FastAPI, Flask, Django), Node.js  
                - AI/ML – OpenAI API, TensorFlow basics  
                - CI/CD with GitHub Actions     

                ### Achievements  
                - Built an AI-powered chatbot for medical queries  
                - Optimized real-time systems with WebSockets and Redis  
                - Developed scalable Python backends using FastAPI and PostgreSQL  
                - Implemented CI/CD pipelines for automated deployments  

                ### Contact  
                - GitHub: [your GitHub profile]  
                - LinkedIn: https://www.linkedin.com/in/aditya-kumar-mohanty2003/  
                - Email: [your email]  


                    `;

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
