"use client";

import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  DragStartEvent,
  DragEndEvent,
  defaultDropAnimationSideEffects,
  DropAnimation,
} from "@dnd-kit/core";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanCard } from "./KanbanCard";
import { useStore } from "@/store/useStore";
import { Lead, LeadStatus } from "@/types";

const COLUMNS: { id: LeadStatus; title: string }[] = [
  { id: "New", title: "New Leads" },
  { id: "Contacted", title: "Contacted" },
  { id: "Site Visit", title: "Site Visit" },
  { id: "Negotiation", title: "Negotiation" },
  { id: "Closed", title: "Closed" },
];

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
};

export function KanbanBoard() {
  const { leads, updateLeadStatus } = useStore();
  const [activeLead, setActiveLead] = useState<Lead | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function onDragStart(event: DragStartEvent) {
    const { active } = event;
    const lead = leads.find((l) => l.id === active.id);
    if (lead) {
      setActiveLead(lead);
    }
  }

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // If dropped over a column
    if (COLUMNS.some((col) => col.id === overId)) {
      const newStatus = overId as LeadStatus;
      if (activeLead && activeLead.status !== newStatus) {
        updateLeadStatus(activeId, newStatus);
      }
    } 
    // If dropped over another card
    else {
       const overLead = leads.find(l => l.id === overId);
       if (overLead && activeLead && activeLead.status !== overLead.status) {
           updateLeadStatus(activeId, overLead.status);
       }
    }

    setActiveLead(null);
  }

  if (!mounted) return null;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className="flex h-[calc(100vh-220px)] gap-4 overflow-x-auto pb-4">
        {COLUMNS.map((col) => (
          <KanbanColumn
            key={col.id}
            id={col.id}
            title={col.title}
            leads={leads.filter((l) => l.status === col.id)}
          />
        ))}
      </div>

      {createPortal(
        <DragOverlay dropAnimation={dropAnimation}>
          {activeLead ? <KanbanCard lead={activeLead} /> : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}
