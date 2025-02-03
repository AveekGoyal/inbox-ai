"use client";

import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppBackground } from "@/components/ui/shape-app-background";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#030303] relative">
      <AppBackground />
      <AppSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-6xl mx-auto py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
