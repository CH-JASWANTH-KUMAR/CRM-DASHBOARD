import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const activities = [
  {
    user: "Anjali Sharma",
    action: "added a new note to",
    target: "Rajesh Kumar",
    time: "2 hours ago",
    avatar: "https://i.pravatar.cc/150?u=anjali",
  },
  {
    user: "Rahul Verma",
    action: "moved lead",
    target: "Sneha Gupta",
    to: "Site Visit",
    time: "4 hours ago",
    avatar: "https://i.pravatar.cc/150?u=rahul",
  },
  {
    user: "System",
    action: "received new lead",
    target: "Amit Shah",
    time: "5 hours ago",
    avatar: "",
  },
  {
    user: "Priya Patel",
    action: "closed deal with",
    target: "Vikram Malhotra",
    time: "1 day ago",
    avatar: "https://i.pravatar.cc/150?u=priya",
  },
];

export function RecentActivity() {
  return (
    <Card className="col-span-4 lg:col-span-2 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates from your team</CardDescription>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <Avatar className="h-9 w-9 border border-slate-200">
                <AvatarImage src={activity.avatar} alt="Avatar" />
                <AvatarFallback className="bg-slate-100 text-slate-600">{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-900">{activity.user}</span> {activity.action} <span className="font-semibold text-primary">{activity.target}</span>
                  {activity.to && <span className="text-slate-600"> to <span className="font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-xs">{activity.to}</span></span>}
                </p>
                <p className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
