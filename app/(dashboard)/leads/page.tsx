"use client";

import { LeadsTable } from "@/components/leads/LeadsTable";
import { columns } from "@/components/leads/columns";
import { useStore } from "@/store/useStore";

export default function LeadsPage() {
  const { leads } = useStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Leads Management</h2>
        <p className="text-muted-foreground">View and manage all your potential clients.</p>
      </div>
      <LeadsTable columns={columns} data={leads} />
    </div>
  );
}
