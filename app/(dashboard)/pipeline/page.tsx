"use client";

import { KanbanBoard } from "@/components/pipeline/KanbanBoard";

export default function PipelinePage() {
  return (
    <div className="space-y-6 h-full">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Deal Pipeline</h2>
        <p className="text-muted-foreground">Track your deals from initial contact to closing.</p>
      </div>
      <KanbanBoard />
    </div>
  );
}
