"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Lead, LeadStatus } from "@/types";
import { KanbanCard } from "./KanbanCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface KanbanColumnProps {
  id: LeadStatus;
  title: string;
  leads: Lead[];
}

export function KanbanColumn({ id, title, leads }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({ id });

  const totalValue = leads.reduce((sum, lead) => sum + lead.budget, 0);

  return (
    <div className="flex flex-col h-full min-w-[280px] w-[280px] bg-slate-100/50 rounded-lg border border-slate-200">
      <div className="p-3 border-b bg-white rounded-t-lg">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-sm text-slate-900">{title}</h3>
          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-medium">
            {leads.length}
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-medium">
          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(totalValue)}
        </p>
      </div>
      
      <ScrollArea className="flex-1 p-2">
        <SortableContext items={leads.map(l => l.id)} strategy={verticalListSortingStrategy}>
          <div ref={setNodeRef} className="min-h-[100px]">
            {leads.map((lead) => (
              <KanbanCard key={lead.id} lead={lead} />
            ))}
          </div>
        </SortableContext>
      </ScrollArea>
    </div>
  );
}
