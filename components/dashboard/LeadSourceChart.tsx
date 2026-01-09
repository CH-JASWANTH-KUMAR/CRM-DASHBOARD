"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Website", value: 400, color: "#4f46e5" }, // Indigo 600
  { name: "Referral", value: 300, color: "#8b5cf6" }, // Violet 500
  { name: "Walk-in", value: 300, color: "#10b981" }, // Emerald 500
  { name: "Social Media", value: 200, color: "#f59e0b" }, // Amber 500
];

export function LeadSourceChart() {
  return (
    <Card className="col-span-4 lg:col-span-2 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>Lead Source Distribution</CardTitle>
        <CardDescription>Where your leads are coming from</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#1e293b', fontWeight: 500 }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                formatter={(value) => <span className="text-slate-600 font-medium ml-1">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
