"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Mail,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
const links = [
  {
    label: "Dashboard", 
    href: "/dashboard",
    icon: <LayoutDashboard className="text-white h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Email Summaries",
    href: "/summaries",
    icon: <Mail className="text-white h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "AI Chat",
    href: "/chat",
    icon: <MessageSquare className="text-white h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: <Bell className="text-white h-5 w-5 flex-shrink-0" />,
  },
];

const bottomLinks = [
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings className="text-white h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Logout",
    href: "/sign-out",
    icon: <LogOut className="text-white h-5 w-5 flex-shrink-0" />,
  },
];

export function AppSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="flex flex-col h-full bg-[#030303] border-r border-white/10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} className="text-white hover:text-white/80" />
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-white/10">
            {bottomLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} className="text-white hover:text-white/80" />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 whitespace-pre"
      >
        Inbox AI
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 flex-shrink-0" />
    </Link>
  );
};
