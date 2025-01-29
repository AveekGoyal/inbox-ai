'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  CheckCircleIcon,
  ArchiveBoxIcon,
  TrashIcon,
  FlagIcon,
  ClockIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/solid';
import { 
  StarIcon,
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailSummary {
  id: number;
  subject: string;
  sender: string;
  preview: string;
  date: string;
  category: string;
  isStarred: boolean;
  isRead: boolean;
  timeOfDay: 'morning' | 'afternoon' | 'evening';
  priority?: 'high' | 'medium' | 'low';
  summary?: string;
}

const demoEmails: EmailSummary[] = [
  {
    id: 1,
    subject: "Weekly Team Updates - Product Development",
    sender: "Sarah Johnson",
    preview: "Here's a summary of this week's progress on the mobile app development...",
    date: "10:30 AM",
    category: "Work",
    isStarred: true,
    isRead: false,
    timeOfDay: 'morning',
    priority: 'high',
    summary: "Key points from this week's development:\n- Mobile app UI redesign completed\n- Backend API integration at 80%\n- New feature implementation started\n- Team velocity increased by 15%\n\nAction items:\n1. Review the new UI designs\n2. Schedule API review meeting\n3. Update project timeline",
  },
  {
    id: 2,
    subject: "Client Meeting Follow-up",
    sender: "Michael Chen",
    preview: "Thank you for your time today. As discussed in our meeting...",
    date: "2:15 PM",
    category: "Client",
    isStarred: false,
    isRead: true,
    timeOfDay: 'afternoon',
    priority: 'medium',
    summary: "Meeting outcomes:\n- Client approved the new design direction\n- Budget increase approved for Q2\n- Timeline extended by 2 weeks\n\nNext steps:\n1. Send updated project plan\n2. Schedule weekly check-ins\n3. Prepare resource allocation plan",
  },
  {
    id: 3,
    subject: "Project Timeline Update",
    sender: "Emily Rodriguez",
    preview: "I've updated the project timeline based on our latest sprint review...",
    date: "4:45 PM",
    category: "Work",
    isStarred: false,
    isRead: false,
    timeOfDay: 'afternoon',
    priority: 'high',
    summary: "Changes to the project timeline:\n- New deadline for Q2: June 15th\n- Adjusted milestones for Q3\n- Added buffer for unexpected delays\n\nAction items:\n1. Review the updated timeline\n2. Provide feedback by end of week\n3. Update project plan accordingly",
  },
  {
    id: 4,
    subject: "Evening Status Report",
    sender: "David Kim",
    preview: "Here's today's status report for the ongoing development tasks...",
    date: "6:30 PM",
    category: "Report",
    isStarred: true,
    isRead: true,
    timeOfDay: 'evening',
    priority: 'low',
    summary: "Today's progress:\n- Completed task A\n- Made progress on task B\n- Started task C\n\nTomorrow's goals:\n1. Finish task B\n2. Make progress on task C\n3. Review task A",
  },
];

const timeSlots = [
  { key: 'morning', title: 'Morning', icon: SunIcon, color: 'text-orange-600' },
  { key: 'afternoon', title: 'Afternoon', icon: SunIcon, color: 'text-blue-600' },
  { key: 'evening', title: 'Evening', icon: MoonIcon, color: 'text-indigo-600' },
] as const;

export default function Summaries() {
  const [emails, setEmails] = useState(demoEmails);
  const [refreshing, setRefreshing] = useState(false);
  const [expandedEmail, setExpandedEmail] = useState<number | null>(null);

  const toggleStar = (emailId: number) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, isStarred: !email.isStarred } : email
    ));
  };

  const toggleRead = (emailId: number) => {
    setEmails(emails.map(email => 
      email.id === emailId ? { ...email, isRead: !email.isRead } : email
    ));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const handleEmailClick = (emailId: number) => {
    setExpandedEmail(expandedEmail === emailId ? null : emailId);
    if (!emails.find(e => e.id === emailId)?.isRead) {
      setEmails(emails.map(email =>
        email.id === emailId ? { ...email, isRead: true } : email
      ));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Email Summaries</h1>
          <p className="text-gray-500">Your emails organized by time of day</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            className={`${refreshing ? 'animate-spin' : ''}`}
          >
            <ArrowPathIcon className="h-4 w-4 mr-1" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <ArchiveBoxIcon className="h-4 w-4 mr-1" />
            Archive
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {timeSlots.map(({ title, key, icon: Icon, color }) => {
          const sectionEmails = emails.filter(email => email.timeOfDay === key);
          if (sectionEmails.length === 0) return null;

          return (
            <div key={key} className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 ${color}`} />
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                <Badge variant="secondary" className="ml-2">
                  {sectionEmails.length} emails
                </Badge>
              </div>
              <div className="grid gap-4">
                {sectionEmails.map((email) => (
                  <Card 
                    key={email.id} 
                    className={`hover:shadow-md transition-shadow cursor-pointer ${
                      !email.isRead ? 'bg-blue-50/30' : ''
                    }`}
                    onClick={() => handleEmailClick(email.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 -ml-1.5"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleStar(email.id);
                                    }}
                                  >
                                    <StarIcon
                                      className={`h-4 w-4 ${
                                        email.isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                                      }`}
                                    />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  {email.isStarred ? 'Remove star' : 'Star this email'}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <h3 className="font-medium text-gray-900 truncate">
                              {email.subject}
                            </h3>
                            {email.priority && (
                              <FlagIcon 
                                className={`h-4 w-4 ${getPriorityColor(email.priority)}`} 
                              />
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 gap-2">
                            <span className="font-medium truncate">{email.sender}</span>
                            <span className="text-gray-400">·</span>
                            <span className="flex items-center gap-1">
                              <ClockIcon className="h-4 w-4" />
                              {email.date}
                            </span>
                            <Badge variant="outline" className="ml-2">
                              {email.category}
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            {email.preview}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleRead(email.id);
                            }}
                          >
                            <CheckCircleIcon className={`h-4 w-4 ${email.isRead ? 'text-green-500' : 'text-gray-500'}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              // deleteEmail(email.id);
                            }}
                          >
                            <TrashIcon className="h-4 w-4 text-gray-500" />
                          </Button>
                          <div className="h-8 w-8 flex items-center justify-center">
                            {expandedEmail === email.id ? (
                              <ChevronUpIcon className="h-4 w-4 text-gray-500" />
                            ) : (
                              <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </div>
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
                                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}