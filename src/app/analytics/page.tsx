'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  EnvelopeIcon,
  ClockIcon,
  TagIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Emails',
    value: '2,345',
    change: '+12.3%',
    trend: 'up',
    icon: EnvelopeIcon,
    description: 'vs. last month',
  },
  {
    name: 'Response Time',
    value: '1.2h',
    change: '-25.2%',
    trend: 'down',
    icon: ClockIcon,
    description: 'vs. last month',
  },
  {
    name: 'Categories',
    value: '12',
    change: '+2',
    trend: 'up',
    icon: TagIcon,
    description: 'new this month',
  },
];

const categories = [
  { name: 'Work', count: 450, percentage: 45 },
  { name: 'Personal', count: 230, percentage: 23 },
  { name: 'Finance', count: 180, percentage: 18 },
  { name: 'Social', count: 140, percentage: 14 },
];

const timeDistribution = [
  { time: 'Morning', percentage: 35 },
  { time: 'Afternoon', percentage: 45 },
  { time: 'Evening', percentage: 20 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-500 mt-1">Email activity insights and trends</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name} className="bg-white hover:bg-gray-50/80 transition-colors">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <stat.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.name}</CardTitle>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${
                    stat.trend === 'up' 
                      ? 'bg-green-50 text-green-700' 
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  <span className="flex items-center">
                    {stat.trend === 'up' ? (
                      <ArrowTrendingUpIcon className="w-3 h-3 mr-1" />
                    ) : (
                      <ArrowTrendingDownIcon className="w-3 h-3 mr-1" />
                    )}
                    {stat.change}
                  </span>
                </Badge>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Category Distribution */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="bg-white">
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Category Distribution</CardTitle>
            <CardDescription className="text-gray-500">Email volume by category</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{category.name}</span>
                    <span className="text-gray-500">{category.count} emails</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Distribution */}
        <Card className="bg-white">
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Time Distribution</CardTitle>
            <CardDescription className="text-gray-500">Email activity by time of day</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {timeDistribution.map((slot) => (
                <div key={slot.time} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{slot.time}</span>
                    <span className="text-gray-500">{slot.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        slot.time === 'Morning' 
                          ? 'bg-blue-500' 
                          : slot.time === 'Afternoon'
                          ? 'bg-orange-500'
                          : 'bg-indigo-500'
                      }`}
                      style={{ width: `${slot.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}