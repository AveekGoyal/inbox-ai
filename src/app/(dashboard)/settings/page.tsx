'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  BellIcon,
  KeyIcon,
  UserIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const settingSections = [
  {
    id: 'account',
    title: 'Account Settings',
    icon: UserIcon,
    description: 'Manage your account details and preferences',
    settings: [
      {
        id: 'profile',
        name: 'Profile Information',
        description: 'Update your name and contact details',
        action: 'Edit',
        type: 'button',
      },
      {
        id: 'email',
        name: 'Email Address',
        description: 'john@example.com',
        action: 'Change',
        type: 'button',
      },
      {
        id: 'password',
        name: 'Password',
        description: 'Last changed 3 months ago',
        action: 'Update',
        type: 'button',
      },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: BellIcon,
    description: 'Configure how you want to be notified',
    settings: [
      {
        id: 'emailNotifs',
        name: 'Email Notifications',
        description: 'Get notified about new emails and mentions',
        type: 'toggle',
        enabled: true,
      },
      {
        id: 'summaryNotifs',
        name: 'Daily Summary',
        description: 'Receive a daily summary of your email activity',
        type: 'toggle',
        enabled: true,
      },
      {
        id: 'urgentNotifs',
        name: 'Urgent Alerts',
        description: 'Get immediate notifications for urgent emails',
        type: 'toggle',
        enabled: false,
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    icon: ShieldCheckIcon,
    description: 'Manage your security preferences',
    settings: [
      {
        id: 'twoFactor',
        name: 'Two-Factor Authentication',
        description: 'Add an extra layer of security',
        type: 'toggle',
        enabled: false,
      },
      {
        id: 'dataSharing',
        name: 'Data Sharing',
        description: 'Control how your data is used',
        action: 'Manage',
        type: 'button',
      },
      {
        id: 'devices',
        name: 'Connected Devices',
        description: '2 devices connected',
        action: 'View',
        type: 'button',
      },
    ],
  },
];

export default function Settings() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    emailNotifs: true,
    summaryNotifs: true,
    urgentNotifs: false,
    twoFactor: false,
  });

  const handleToggle = (id: string) => {
    setToggles(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="grid gap-6">
        {settingSections.map((section) => (
          <Card key={section.id} className="bg-white">
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-50">
                  <section.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 mt-1">
                    {section.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-4">
                {section.settings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-900">
                        {setting.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {setting.description}
                      </p>
                    </div>
                    {setting.type === 'toggle' ? (
                      <Switch
                        checked={toggles[setting.id]}
                        onCheckedChange={() => handleToggle(setting.id)}
                      />
                    ) : (
                      <Button variant="outline" size="sm">
                        {setting.action}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-white">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-red-50">
                <KeyIcon className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Danger Zone
                </CardTitle>
                <CardDescription className="text-gray-500 mt-1">
                  Irreversible account actions
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50/50">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    Delete Account
                  </p>
                  <p className="text-sm text-gray-500">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}