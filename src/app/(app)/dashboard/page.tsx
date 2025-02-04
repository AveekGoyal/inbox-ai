"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Inbox, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
];

const urgentEmails = [
  {
    id: 1,
    subject: "Critical: Server Downtime Alert",
    sender: "devops@company.com",
    preview: "Our main production server is experiencing high latency...",
    time: "5 mins ago",
    summary: "Server Status Alert:\n\n1. Production server CPU usage at 95%\n2. Response time increased by 300%\n3. Affecting 3 key microservices\n4. DevOps team investigating root cause\n\nImmediate action required to prevent service disruption.",
    completed: false,
  },
  {
    id: 2,
    subject: "Urgent: Client Meeting Rescheduled",
    sender: "client.success@company.com",
    preview: "The strategic planning meeting with Enterprise Client has been moved...",
    time: "15 mins ago",
    summary: "Meeting Update Details:\n\n1. Meeting moved to 2:00 PM today\n2. Client CEO will be joining\n3. New agenda items added\n4. Presentation needs updates\n\nPlease confirm availability and update materials accordingly.",
    completed: false,
  },
  {
    id: 3,
    subject: "IMMEDIATE: Security Vulnerability Found",
    sender: "security@company.com",
    preview: "Our security scan has detected a critical vulnerability in...",
    time: "30 mins ago",
    summary: "Security Alert Details:\n\n1. Critical vulnerability in authentication system\n2. Potential data exposure risk\n3. Temporary fix implemented\n4. Full patch needed within 24 hours\n\nSecurity team requests immediate review and approval of proposed fixes.",
    completed: false,
  }
];

export default function Dashboard() {
  const [expandedEmail, setExpandedEmail] = useState<number | null>(null);
  const [completedEmails, setCompletedEmails] = useState<number[]>([]);

  const handleMarkAsCompleted = (emailId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedEmails(prev => 
      prev.includes(emailId) 
        ? prev.filter(id => id !== emailId)
        : [...prev, emailId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          Dashboard
        </h1>
        <p className="text-white/80 mt-1">
          Overview of your email activity
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.name}
            className="bg-[#030303] border-white/10 p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/80">
                {stat.name}
              </span>
              <stat.icon className="h-5 w-5 text-white/40" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-white/40">
                <span
                  className={stat.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"}
                >
                  {stat.change}
                </span>{" "}
                {stat.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-[#030303] border-white/10">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Urgent Emails</h2>
          <div className="space-y-4">
            {urgentEmails.map((email) => (
              <div
                key={email.id}
                className="rounded-lg bg-white/[0.02] border border-white/5"
              >
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => setExpandedEmail(expandedEmail === email.id ? null : email.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-white">
                          {email.subject}
                        </h4>
                        <Badge className="bg-rose-500/10 text-rose-500 hover:bg-rose-500/20">
                          Urgent
                        </Badge>
                      </div>
                      <p className="text-sm text-white/60">
                        {email.sender}
                      </p>
                      <p className="text-sm text-white/40">
                        {email.preview}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm text-white/40">
                        {email.time}
                      </span>
                      {expandedEmail === email.id ? (
                        <ChevronUp className="h-5 w-5 text-white/40" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white/40" />
                      )}
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedEmail === email.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 pt-4 border-t border-white/5"
                      >
                        <div className="space-y-4">
                          <div className="text-white/80 whitespace-pre-wrap">
                            {email.summary}
                          </div>
                          <div className="flex justify-between items-center">
                            <Button
                              variant="outline"
                              size="sm"
                              className={`transition-colors ${
                                completedEmails.includes(email.id)
                                  ? "bg-green-500/20 border-green-500/30 text-green-500 hover:bg-green-500/30 hover:border-green-500/40"
                                  : "bg-white/5 border-white/10 text-white hover:bg-green-500/10 hover:border-green-500/20 hover:text-green-500"
                              }`}
                              onClick={(e) => handleMarkAsCompleted(email.id, e)}
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              {completedEmails.includes(email.id) ? "Completed" : "Mark as Completed"}
                            </Button>
                            <Button
                              variant="outline"
                              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                // Handle view full email
                                console.log("View full email:", email.id);
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Full Email
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
