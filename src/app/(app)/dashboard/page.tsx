"use client";

import { Card } from "@/components/ui/card";
import { Inbox, AlertCircle, Clock, CheckCircle } from "lucide-react";

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

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          Dashboard
        </h1>
        <p className="text-white/80 mt-1">
          Here&apos;s an overview of your email activity
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-[#030303] border-white/10 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Recent Summaries
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-16 rounded-lg bg-white/[0.05] animate-pulse"
              />
            ))}
          </div>
        </Card>

        <Card className="bg-[#030303] border-white/10 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            Priority Emails
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-16 rounded-lg bg-white/[0.05] animate-pulse"
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
