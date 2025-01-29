"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import TextareaAutosize from 'react-textarea-autosize';
import { Send, Bot, User, Loader2 } from "lucide-react"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

const demoMessages: Message[] = [
  {
    id: 1,
    content: "Hi! I'm your email AI assistant. How can I help you today?",
    sender: "ai",
    timestamp: new Date(Date.now() - 3600000 * 2),
  },
  {
    id: 2,
    content: "Can you help me organize my inbox?",
    sender: "user",
    timestamp: new Date(Date.now() - 3600000 * 1.5),
  },
  {
    id: 3,
    content: "Of course! I can help you categorize emails, set priorities, and create summaries. Would you like me to start with your recent emails?",
    sender: "ai",
    timestamp: new Date(Date.now() - 3600000),
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(demoMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        content: "I'm analyzing your request and will help you with that shortly.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="container mx-auto p-6 h-[calc(100vh-6rem)]">
      <Card className="h-full flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex items-start gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar>
                    <AvatarFallback>
                      {message.sender === "ai" ? (
                        <Bot className="h-5 w-5" />
                      ) : (
                        <User className="h-5 w-5" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`flex flex-col space-y-2 ${
                      message.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[80%] ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">AI is typing...</span>
              </motion.div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <div className="flex items-end space-x-2">
            <div className="flex-1 relative">
              <TextareaAutosize
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                minRows={1}
                maxRows={5}
                className="w-full resize-none rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-3 pr-12 text-sm focus:outline-none"
              />
              <Button
                onClick={handleSend}
                disabled={!newMessage.trim()}
                className="absolute right-2 bottom-4 p-1.5 h-auto bg-transparent hover:bg-gray-100 text-blue-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift + Enter for new line</p>
        </div>
      </Card>
    </div>
  )
}