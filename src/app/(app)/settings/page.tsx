"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Mail,
  Clock,
  Moon,
  Sun,
  Smartphone,
  Shield,
  Save,
  User,
} from "lucide-react";
import { useState } from "react";

interface TimeSlot {
  id: string;
  label: string;
  time: string;
  enabled: boolean;
}

export default function Settings() {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    { id: "morning", label: "Morning", time: "09:00", enabled: true },
    { id: "afternoon", label: "Afternoon", time: "13:00", enabled: true },
    { id: "evening", label: "Evening", time: "17:00", enabled: true },
  ]);

  const toggleTimeSlot = (id: string) => {
    setTimeSlots(slots =>
      slots.map(slot =>
        slot.id === id ? { ...slot, enabled: !slot.enabled } : slot
      )
    );
  };

  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          Settings
        </h1>
        <p className="text-white/80 mt-1">
          Customize your email assistant preferences
        </p>
      </div>

      <div className="grid gap-6">
        {/* Email Summary Settings */}
        <Card className="bg-[#030303] border-white/10 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
              <Mail className="h-5 w-5 text-white/80" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Email Summaries</h2>
              <p className="text-white/60 text-sm">Configure your summary schedule</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-white/60" />
                  <div>
                    <p className="text-white font-medium">{slot.label} Summary</p>
                    <p className="text-white/60 text-sm">Delivered at {slot.time}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleTimeSlot(slot.id)}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    slot.enabled ? "bg-blue-500" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                      slot.enabled ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-[#030303] border-white/10 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
              <Bell className="h-5 w-5 text-white/80" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Notifications</h2>
              <p className="text-white/60 text-sm">Manage your notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Email Summaries", description: "Get notified when new summaries are ready" },
              { label: "Urgent Emails", description: "Receive alerts for urgent emails" },
              { label: "Follow-up Reminders", description: "Get reminded about pending responses" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5"
              >
                <div>
                  <p className="text-white font-medium">{item.label}</p>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
                <button
                  className="w-12 h-6 rounded-full bg-blue-500 relative"
                >
                  <div
                    className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white translate-x-6"
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Display Settings */}
        <Card className="bg-[#030303] border-white/10 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
              <Sun className="h-5 w-5 text-white/80" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Display</h2>
              <p className="text-white/60 text-sm">Customize your visual preferences</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-white/60" />
                <div>
                  <p className="text-white font-medium">Dark Mode</p>
                  <p className="text-white/60 text-sm">Toggle dark mode on/off</p>
                </div>
              </div>
              <button
                className="w-12 h-6 rounded-full bg-blue-500 relative"
              >
                <div
                  className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white translate-x-6"
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Account Settings */}
        <Card className="bg-[#030303] border-white/10 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
              <User className="h-5 w-5 text-white/80" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Account</h2>
              <p className="text-white/60 text-sm">Manage your account settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white font-medium">Connected Email</p>
                  <p className="text-white/60 text-sm">user@example.com</p>
                </div>
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  Change
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Account Type</p>
                  <p className="text-white/60 text-sm">Free Plan</p>
                </div>
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  Upgrade
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button className="bg-white/10 hover:bg-white/20 text-white">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
