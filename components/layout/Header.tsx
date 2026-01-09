import { Bell, Search, User, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./MobileSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AddLeadSheet } from "@/components/leads/AddLeadSheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <div className="border-b border-slate-200/60 p-4 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="flex items-center gap-4">
        <MobileSidebar />
        <div className="hidden md:flex items-center relative w-72 transition-all focus-within:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="Search leads, properties..." 
            className="pl-10 bg-slate-100/50 border-transparent focus:bg-white focus:border-primary/20 rounded-full transition-all duration-300" 
          />
        </div>
        <div className="hidden md:block">
          <AddLeadSheet />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 rounded-full transition-colors">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
        </Button>
        
        <div className="h-8 w-px bg-slate-200 mx-2 hidden md:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-slate-100 rounded-full pl-2 pr-4 py-1 h-auto">
              <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="text-left hidden md:block">
                <p className="text-sm font-semibold text-slate-700 leading-none">Aditya Roy</p>
                <p className="text-xs text-slate-500 mt-1">Sales Head</p>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
