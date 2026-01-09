import { KPIGrid } from "@/components/dashboard/KPIGrid";
import { LeadSourceChart } from "@/components/dashboard/LeadSourceChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your sales pipeline and performance.</p>
      </div>
      
      <KPIGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <LeadSourceChart />
        <RecentActivity />
      </div>
    </div>
  );
}
