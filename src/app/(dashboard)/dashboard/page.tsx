"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Inbox,
  AlertCircle,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ArrowUpRightFromSquare,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const stats = [
  {
    name: "Unread Emails",
    value: "12",
    icon: Inbox,
    change: "+2.5%",
    description: "vs. yesterday",
  },
  {
    name: "Urgent",
    value: "3",
    icon: AlertCircle,
    change: "-14%",
    description: "vs. last week",
  },
  {
    name: "Pending",
    value: "8",
    icon: Clock,
    change: "+5%",
    description: "vs. yesterday",
  },
  {
    name: "Resolved",
    value: "24",
    icon: CheckCircle,
    change: "+18%",
    description: "vs. last week",
  },
]

const recentEmails = [
  {
    id: 1,
    subject: "Project Update Meeting",
    sender: "Sarah Johnson",
    preview: "Hi team, just following up on our discussion...",
    time: "10:30 AM",
    urgent: true,
    category: "Meeting",
    summary: "Meeting Discussion Points:\n- Project timeline review\n- Resource allocation updates\n- Risk assessment findings\n\nAction Items:\n1. Update project schedule\n2. Schedule follow-up meetings\n3. Share resource allocation plan",
  },
  {
    id: 2,
    subject: "Q4 Report Draft",
    sender: "Mike Chen",
    preview: "Please review the attached Q4 report draft...",
    time: "9:15 AM",
    urgent: false,
    category: "Report",
    summary: "Report Overview:\n- Q4 performance metrics\n- Key achievements highlighted\n- Areas for improvement\n\nNext Steps:\n1. Review draft by Friday\n2. Incorporate feedback\n3. Prepare final version",
  },
  {
    id: 3,
    subject: "Client Presentation Tomorrow",
    sender: "Emily Rodriguez",
    preview: "The final version of the client presentation...",
    time: "8:45 AM",
    urgent: true,
    category: "Client",
    summary: "Presentation Details:\n- Product roadmap overview\n- Implementation timeline\n- Cost breakdown\n\nPreparation Tasks:\n1. Review all slides\n2. Prepare talking points\n3. Test presentation setup",
  },
]

export default function Dashboard() {
  const [expandedEmail, setExpandedEmail] = useState<number | null>(null);

  const handleEmailClick = (emailId: number) => {
    setExpandedEmail(expandedEmail === emailId ? null : emailId);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your emails today.</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-sm text-muted-foreground flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1 text-green-400" />
                <span>Email activity up 12% this week</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Your email activity has increased compared to last week</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="flex items-center p-6">
              <div className="rounded-full bg-primary/10 p-2 mr-4">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <div className="flex items-baseline mt-1">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <span className={`ml-2 text-xs ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Emails</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEmails.map((email) => (
                <motion.div
                  key={email.id}
                  className="p-4 rounded-lg border cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => handleEmailClick(email.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {email.urgent && <Badge variant="destructive">Urgent</Badge>}
                      <Badge variant="secondary">{email.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{email.time}</span>
                      <div className="h-8 w-8 flex items-center justify-center">
                        {expandedEmail === email.id ? (
                          <ChevronUp className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2 text-sm font-medium">{email.subject}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">From: {email.sender}</p>
                  <p className="mt-2 text-sm line-clamp-2 text-muted-foreground">{email.preview}</p>
                  
                  <AnimatePresence>
                    {expandedEmail === email.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 pt-4 border-t"
                      >
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                                <h4 className="text-sm font-semibold text-gray-900">AI Summary</h4>
                              </div>
                              <Button variant="default" size="sm">
                                <ArrowUpRightFromSquare className="h-4 w-4 mr-1" />
                                View Full Email
                              </Button>
                            </div>
                            
                            <div className="space-y-4 text-sm text-gray-600">
                              {email.summary?.split('\n\n').map((section, index) => {
                                const [title, ...items] = section.split('\n');
                                return (
                                  <div key={index} className="space-y-2">
                                    <h5 className="font-medium text-gray-900">{title}</h5>
                                    <ul className="list-none space-y-1.5">
                                      {items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-2">
                                          {item.startsWith('-') ? (
                                            <>
                                              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2"></div>
                                              <span>{item.substring(2)}</span>
                                            </>
                                          ) : item.match(/^\d+\./) ? (
                                            <>
                                              <span className="font-medium text-blue-600 min-w-[1.5rem]">
                                                {item.split('.')[0]}.
                                              </span>
                                              <span>{item.substring(item.indexOf('.') + 2)}</span>
                                            </>
                                          ) : (
                                            <span>{item}</span>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
      </div>
    </div>
  )
}
