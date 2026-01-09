import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { LeadDrawer } from "@/components/leads/LeadDrawer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10 h-full bg-slate-50">
        <Header />
        <div className="p-6 h-full">
          {children}
        </div>
      </main>
      <LeadDrawer />
    </div>
  );
}
