"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, UserCircle2, KanbanSquare, PieChart, SlidersHorizontal, Globe, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Leads",
    icon: UserCircle2,
    href: "/leads",
    color: "text-violet-500",
  },
  {
    label: "Pipeline",
    icon: KanbanSquare,
    href: "/pipeline",
    color: "text-pink-700",
  },
  {
    label: "Reports",
    icon: PieChart,
    href: "/reports",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: SlidersHorizontal,
    href: "/settings",
    color: "text-emerald-500",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white border-r border-slate-800">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Webb<span className="text-primary">Heads</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 ease-in-out",
                pathname === route.href ? "text-white bg-white/10 shadow-sm" : "text-slate-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3 transition-colors", pathname === route.href ? "text-primary" : "text-slate-400 group-hover:text-white")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3">
        <Card className="bg-gradient-to-br from-indigo-600 to-violet-600 border-none text-white shadow-lg">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Zap className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Pro Plan
            </CardTitle>
            <CardDescription className="text-indigo-100 text-xs">
              Unlock advanced features
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button size="sm" variant="secondary" className="w-full text-indigo-600 font-bold shadow-sm hover:shadow-md transition-all">
              Upgrade Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
