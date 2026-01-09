"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Lead } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarClock, IndianRupee } from "lucide-react";
import { format } from "date-fns";
import { useStore } from "@/store/useStore";

interface KanbanCardProps {
  lead: Lead;
}

export function KanbanCard({ lead }: KanbanCardProps) {
  const { setSelectedLeadId } = useStore();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: lead.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="mb-3 touch-none">
      <Card 
        onClick={() => setSelectedLeadId(lead.id)}
        className="cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow border-l-1 border-l-brand-navy"
      >
        <CardHeader className="p-3 pb-0">
          <div className="flex justify-between items-start">
            <CardTitle className="text-sm font-semibold text-slate-900">
              {lead.name}
            </CardTitle>
            <Badge variant={lead.temperature === 'Hot' ? 'destructive' : lead.temperature === 'Warm' ? 'warning' : 'secondary'} className="text-[10px] px-1 py-0 h-5">
              {lead.temperature}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground truncate">{lead.propertyInterest}</p>
        </CardHeader>
        <CardContent className="p-3 pt-2">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <div className="flex items-center">
              <IndianRupee className="h-3 w-3 mr-1 text-emerald-600" />
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(lead.budget)}
            </div>
            <div className="flex items-center">
              <CalendarClock className="h-3 w-3 mr-1 text-slate-400" />
              {format(new Date(lead.nextFollowUp), 'MMM d')}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t">
            <span className="text-[10px] text-slate-400">Source: {lead.source}</span>
            <Avatar className="h-5 w-5">
              <AvatarFallback className="text-[8px]">AG</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
