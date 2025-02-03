"use client";

import { Card } from "@/components/ui/card";
import { Mail, Star, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const summaries = [
  {
    id: 1,
    time: "Morning Summary",
    date: "Today, 9:00 AM",
    total: 12,
    important: 3,
    emails: [
      {
        subject: "Q1 Marketing Strategy Review",
        sender: "marketing@company.com",
        preview: "Team, please review the attached Q1 marketing strategy document...",
        time: "8:45 AM",
        important: true,
      },
      {
        subject: "Client Meeting Follow-up",
        sender: "client.success@company.com",
        preview: "Thank you for attending today's meeting. Here are the key points...",
        time: "8:30 AM",
        important: false,
      },
    ],
  },
  {
    id: 2,
    time: "Previous Evening",
    date: "Yesterday, 6:00 PM",
    total: 8,
    important: 2,
    emails: [
      {
        subject: "Project Timeline Update",
        sender: "pm@company.com",
        preview: "Here's the updated project timeline with the new milestones...",
        time: "5:45 PM",
        important: true,
      },
      {
        subject: "Team Sync Notes",
        sender: "team.lead@company.com",
        preview: "Notes from today's team sync meeting are attached...",
        time: "5:30 PM",
        important: false,
      },
    ],
  },
];

export default function Summaries() {
  const [expandedSummary, setExpandedSummary] = useState<number | null>(null);

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

      <div className="grid gap-4 md:grid-cols-3">
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
        <Card className="bg-[#030303] border-white/10 p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
              <Clock className="h-6 w-6 text-white/80" />
            </div>
            <div>
              <p className="text-sm text-white/60">Response Time</p>
              <p className="text-2xl font-bold text-white">2.5h</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
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
                    {summary.emails.map((email, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-white/[0.02] border border-white/5"
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
                            <p className="text-sm text-white/40 mt-2">
                              {email.preview}
                            </p>
                          </div>
                          <span className="text-sm text-white/40">
                            {email.time}
                          </span>
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
