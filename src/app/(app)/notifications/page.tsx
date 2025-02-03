"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, Clock, AlertCircle, Check, X } from "lucide-react";
import { motion } from "framer-motion";

const notifications = [
  {
    id: 1,
    type: "summary",
    title: "Morning Email Summary Ready",
    description: "Your morning email summary for today is now available.",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "urgent",
    title: "Urgent Email Detected",
    description: "New urgent email from client@company.com about Project X.",
    time: "15 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "reminder",
    title: "Follow-up Reminder",
    description: "Don't forget to respond to the budget approval email.",
    time: "1 hour ago",
    unread: false,
  },
  {
    id: 4,
    type: "summary",
    title: "Evening Summary Ready",
    description: "Your evening email summary for yesterday is available.",
    time: "12 hours ago",
    unread: false,
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "summary":
      return <Mail className="h-5 w-5" />;
    case "urgent":
      return <AlertCircle className="h-5 w-5" />;
    case "reminder":
      return <Clock className="h-5 w-5" />;
    default:
      return <Bell className="h-5 w-5" />;
  }
};

const getIconBackground = (type: string) => {
  switch (type) {
    case "summary":
      return "bg-blue-500/10 text-blue-500";
    case "urgent":
      return "bg-rose-500/10 text-rose-500";
    case "reminder":
      return "bg-amber-500/10 text-amber-500";
    default:
      return "bg-white/10 text-white";
  }
};

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Notifications
          </h1>
          <p className="text-white/80 mt-1">
            Stay updated with your email activity
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            <Check className="h-4 w-4 mr-2" />
            Mark all as read
          </Button>
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            <X className="h-4 w-4 mr-2" />
            Clear all
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notification, idx) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="bg-[#030303] border-white/10 p-4">
              <div className="flex items-start gap-4">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${getIconBackground(
                    notification.type
                  )}`}
                >
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-white">
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <Badge className="bg-blue-500/10 text-blue-500">
                          New
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-white/40">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-white/60 mt-1">{notification.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
