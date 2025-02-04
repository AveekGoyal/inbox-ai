"use client";

import { Card } from "@/components/ui/card";
import { Mail, Star, ChevronDown, ChevronUp, ExternalLink, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const summaries = [
  {
    id: "morning",
    time: "Morning Summary",
    date: "Today, 9:00 AM",
    total: 12,
    important: 3,
    emails: [
      {
        id: 1,
        subject: "Q1 Marketing Strategy Review",
        sender: "marketing@company.com",
        preview: "Team, please review the attached Q1 marketing strategy document...",
        time: "8:45 AM",
        important: true,
        summary: "The Q1 marketing strategy focuses on three key initiatives:\n\n1. Launch of new product line in March\n2. Social media campaign targeting Gen Z\n3. Partnership with influencers\n\nKey metrics include increasing brand awareness by 25% and generating 1000 qualified leads.",
      },
      {
        id: 2,
        subject: "Client Meeting Follow-up",
        sender: "client.success@company.com",
        preview: "Thank you for attending today's meeting. Here are the key points...",
        time: "8:30 AM",
        important: false,
        summary: "Meeting outcomes:\n\n1. Client approved the new design direction\n2. Timeline extended by 2 weeks\n3. Additional budget approved for extra features\n4. Next review scheduled for Feb 15th",
      },
    ],
  },
  {
    id: "afternoon",
    time: "Afternoon Summary",
    date: "Today, 2:00 PM",
    total: 8,
    important: 2,
    emails: [
      {
        id: 3,
        subject: "Project Timeline Update",
        sender: "pm@company.com",
        preview: "Here's the updated project timeline with the new milestones...",
        time: "1:45 PM",
        important: true,
        summary: "Project timeline updates:\n\n1. Development phase extended to March 1st\n2. QA testing starts March 5th\n3. Beta release scheduled for March 15th\n4. Production deployment planned for April 1st",
      },
      {
        id: 4,
        subject: "Team Sync Notes",
        sender: "team.lead@company.com",
        preview: "Notes from today's team sync meeting are attached...",
        time: "1:30 PM",
        important: false,
        summary: "Team sync highlights:\n\n1. All sprints are on track\n2. New team member joining next week\n3. Technical debt review scheduled\n4. Team building event planned for month-end",
      },
    ],
  },
  {
    id: "evening",
    time: "Evening Summary",
    date: "Today, 6:00 PM",
    total: 6,
    important: 1,
    emails: [
      {
        id: 5,
        subject: "Budget Approval Required",
        sender: "finance@company.com",
        preview: "Please review and approve the updated Q1 budget...",
        time: "5:45 PM",
        important: true,
        summary: "Budget update details:\n\n1. Q1 budget increased by 15%\n2. New allocations for marketing campaigns\n3. Additional headcount approved\n4. ROI projections updated",
      },
      {
        id: 6,
        subject: "Weekly Analytics Report",
        sender: "analytics@company.com",
        preview: "Here's your weekly analytics report with key metrics...",
        time: "5:30 PM",
        important: false,
        summary: "Analytics highlights:\n\n1. Website traffic up 20%\n2. Conversion rate improved to 3.5%\n3. Mobile engagement increased\n4. New user registration trend positive",
      },
    ],
  },
];

export default function Summaries() {
  const [expandedSummary, setExpandedSummary] = useState<string | null>(null);
  const [expandedEmail, setExpandedEmail] = useState<number | null>(null);
  const [seenEmails, setSeenEmails] = useState<number[]>([]);

  const handleMarkAsSeen = (emailId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSeenEmails(prev => 
      prev.includes(emailId) 
        ? prev.filter(id => id !== emailId)
        : [...prev, emailId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          Email Summaries
        </h1>
        <p className="text-white/80 mt-1">
          Your emails organized into convenient time-based summaries
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-[#030303] border-white/10 p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
              <Mail className="h-6 w-6 text-white/80" />
            </div>
            <div>
              <p className="text-sm text-white/60">Total Emails</p>
              <p className="text-2xl font-bold text-white">156</p>
            </div>
          </div>
        </Card>
        <Card className="bg-[#030303] border-white/10 p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
              <Star className="h-6 w-6 text-white/80" />
            </div>
            <div>
              <p className="text-sm text-white/60">Important</p>
              <p className="text-2xl font-bold text-white">23</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4">
        {summaries.map((summary) => (
          <Card key={summary.id} className="bg-[#030303] border-white/10">
            <div
              className="p-6 cursor-pointer"
              onClick={() => setExpandedSummary(expandedSummary === summary.id ? null : summary.id)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {summary.time}
                  </h3>
                  <p className="text-sm text-white/60">{summary.date}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-white/60">Total</p>
                      <p className="text-lg font-semibold text-white">
                        {summary.total}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-white/60">Important</p>
                      <p className="text-lg font-semibold text-white">
                        {summary.important}
                      </p>
                    </div>
                  </div>
                  {expandedSummary === summary.id ? (
                    <ChevronUp className="h-5 w-5 text-white/40" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-white/40" />
                  )}
                </div>
              </div>
              <AnimatePresence>
                {expandedSummary === summary.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 space-y-4"
                  >
                    {summary.emails.map((email) => (
                      <div
                        key={email.id}
                        className="rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        <div
                          className="p-4 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedEmail(expandedEmail === email.id ? null : email.id);
                          }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium text-white">
                                  {email.subject}
                                </h4>
                                {email.important && (
                                  <Badge className="bg-rose-500/10 text-rose-500 hover:bg-rose-500/20">
                                    Important
                                  </Badge>
                                )}
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
                                        seenEmails.includes(email.id)
                                          ? "bg-green-500/20 border-green-500/30 text-green-500 hover:bg-green-500/30 hover:border-green-500/40"
                                          : "bg-white/5 border-white/10 text-white hover:bg-green-500/10 hover:border-green-500/20 hover:text-green-500"
                                      }`}
                                      onClick={(e) => handleMarkAsSeen(email.id, e)}
                                    >
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      {seenEmails.includes(email.id) ? "Seen" : "Mark as Seen"}
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
