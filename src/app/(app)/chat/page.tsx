"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Send, Bot, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AutoResizeTextarea } from "@/components/ui/auto-resize-textarea";

const suggestions = [
  "Find all emails from client@company.com",
  "Show me important emails from last week",
  "Summarize today's meetings",
  "Find invoices from Vendor X",
];

const sampleMessages = [
  {
    role: "assistant",
    content: "Hello! I'm your AI email assistant. How can I help you today?",
  },
  {
    role: "user",
    content: "Can you find emails about the Q1 marketing campaign?",
  },
  {
    role: "assistant",
    content: "I found 3 emails about the Q1 marketing campaign:\n\n1. \"Q1 Campaign Kickoff\" from marketing@company.com (2 days ago)\n2. \"Campaign Assets Review\" from design@company.com (yesterday)\n3. \"Q1 Marketing Budget Update\" from finance@company.com (3 hours ago)\n\nWould you like me to summarize any of these emails?",
  },
];

export default function Chat() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          AI Chat
        </h1>
        <p className="text-white/80 mt-1">
          Ask questions about your emails and get instant answers
        </p>
      </div>

      <div className="flex-1 flex gap-6">
        <div className="flex-1 flex flex-col">
          <Card className="flex-1 bg-[#030303] border-white/10 p-6 overflow-y-auto">
            <div className="space-y-6">
              {sampleMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex gap-4 ${
                    msg.role === "assistant" ? "" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 ${
                      msg.role === "assistant" ? "" : "bg-white/10"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="h-4 w-4 text-white/80" />
                    ) : (
                      <User className="h-4 w-4 text-white/80" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                      msg.role === "assistant"
                        ? "bg-white/5 text-white/80"
                        : "bg-gradient-to-r from-indigo-300/10 via-white/10 to-rose-300/10 text-white"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
          <div className="mt-4 flex gap-4">
            <Card className="flex-1 bg-[#030303] border-white/10 p-2">
              <div className="flex items-start gap-2">
                <Search className="h-5 w-5 mt-2 text-white/40" />
                <AutoResizeTextarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about your emails... (Press Enter to send, Shift+Enter for new line)"
                  className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none min-h-[40px] py-2"
                  maxHeight={200}
                />
                <Button
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white mt-1"
                  onClick={handleSend}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <Card className="w-64 shrink-0 bg-[#030303] border-white/10 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Suggestions</h3>
          <div className="space-y-2">
            {suggestions.map((suggestion, idx) => (
              <Button
                key={idx}
                variant="outline"
                className="w-full justify-start text-left text-sm bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white whitespace-normal h-auto py-2"
                onClick={() => setMessage(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
