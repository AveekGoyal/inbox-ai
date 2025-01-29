import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Email AI Agent',
  description: 'AI-powered email assistant that organizes your Gmail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-8">
              <div className="bg-white rounded-2xl h-[calc(100vh-4rem)] overflow-auto p-8 shadow-sm">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
