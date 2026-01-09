import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, CalendarCheck, CheckCircle2, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Total Leads",
    value: "2,543",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Active Deals",
    value: "45",
    change: "+5.2%",
    trend: "up",
    icon: Building,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
  {
    title: "Site Visits",
    value: "12",
    change: "-2.4%",
    trend: "down",
    icon: CalendarCheck,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Closed Deals",
    value: "8",
    change: "+18.2%",
    trend: "up",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
];

export function KPIGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group overflow-hidden relative">
          <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-full -mr-8 -mt-8 opacity-10 transition-transform group-hover:scale-110", stat.bgColor.replace('100', '500'))} />
          
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-semibold text-slate-500">
              {stat.title}
            </CardTitle>
            <div className={cn("p-2.5 rounded-xl transition-colors", stat.bgColor)}>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
            <div className="flex items-center mt-2">
              <span className={cn(
                "text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1",
                stat.trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
              )}>
                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </span>
              <span className="text-xs text-slate-400 ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
