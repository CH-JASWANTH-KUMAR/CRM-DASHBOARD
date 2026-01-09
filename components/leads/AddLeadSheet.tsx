"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useStore } from "@/store/useStore";

export function AddLeadSheet() {
  const addLead = useStore((state) => state.addLead);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    propertyInterest: "",
    status: "New" as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      budget: Number(formData.budget),
      propertyInterest: formData.propertyInterest,
      status: "New",
      assignedAgentId: "1", // Default to first agent
      temperature: "Warm", // Default
      source: "Walk-in", // Default
      nextFollowUp: new Date().toISOString(),
    });
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: "",
      propertyInterest: "",
      status: "New",
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300">
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Customer</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget (₹)</Label>
            <Input
              id="budget"
              type="number"
              required
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">Property Interest</Label>
            <Input
              id="interest"
              required
              placeholder="e.g. 3BHK in Bandra"
              value={formData.propertyInterest}
              onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
            />
          </div>
          <SheetFooter className="pt-4">
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Create Customer
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
