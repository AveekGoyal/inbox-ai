import Sidebar from './Sidebar';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
