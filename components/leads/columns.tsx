"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Lead } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { useStore } from "@/store/useStore";

const ActionsCell = ({ lead }: { lead: Lead }) => {
  const { setSelectedLeadId } = useStore();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(lead.id)}>
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setSelectedLeadId(lead.id)}>View Details</DropdownMenuItem>
        <DropdownMenuItem>Edit Lead</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Contact",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-sm font-medium">{row.original.email}</span>
        <span className="text-xs text-muted-foreground">{row.original.phone}</span>
      </div>
    ),
  },
  {
    accessorKey: "budget",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Budget
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("budget"));
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === 'Closed' ? 'success' : status === 'Negotiation' ? 'warning' : 'outline'}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "temperature",
    header: "Temp",
    cell: ({ row }) => {
      const temp = row.getValue("temperature") as string;
      let color = "bg-slate-100 text-slate-600";
      if (temp === "Hot") color = "bg-slate-900 text-white";
      if (temp === "Warm") color = "bg-emerald-100 text-emerald-800";
      
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
          {temp}
        </span>
      );
    },
  },
  {
    accessorKey: "nextFollowUp",
    header: "Follow Up",
    cell: ({ row }) => {
      const date = new Date(row.getValue("nextFollowUp"));
      return <div>{format(date, "MMM d, yyyy")}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionsCell lead={row.original} />,
  },
];
