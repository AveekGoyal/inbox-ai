import { cn } from "@/lib/utils";
import {
  IconClock,
  IconMail,
  IconBrain,
  IconAlertCircle,
  IconInbox,
  IconMessageDots,
  IconRefresh,
  IconShieldLock,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Time-based Summaries",
      description:
        "Organize emails into morning, afternoon, and evening digests for better focus and productivity.",
      icon: <IconClock className="w-8 h-8" />,
    },
    {
      title: "Smart Urgency Detection",
      description:
        "AI-powered analysis flags urgent emails using advanced NLP and user-defined rules.",
      icon: <IconAlertCircle className="w-8 h-8" />,
    },
    {
      title: "Intelligent Organization",
      description:
        "Automatically categorize and prioritize emails to keep your inbox clean and manageable.",
      icon: <IconInbox className="w-8 h-8" />,
    },
    {
      title: "Email Query Chatbot",
      description: 
        "Natural language search across your emails with semantic understanding and context.",
      icon: <IconMessageDots className="w-8 h-8" />,
    },
    {
      title: "Memory System",
      description:
        "Smart tracking of unresolved emails and follow-ups across multiple summaries.",
      icon: <IconBrain className="w-8 h-8" />,
    },
    {
      title: "Gmail Integration",
      description:
        "Seamless integration with Gmail for real-time email processing and management.",
      icon: <IconMail className="w-8 h-8" />,
    },
    {
      title: "Follow-up Reminders",
      description:
        "Automated reminders for pending actions with customizable time intervals.",
      icon: <IconRefresh className="w-8 h-8" />,
    },
    {
      title: "Secure Authentication",
      description:
        "Protected access with Google OAuth and encrypted data storage in Supabase.",
      icon: <IconShieldLock className="w-8 h-8" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-white/10 py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white/60">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-white/40 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/60 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
