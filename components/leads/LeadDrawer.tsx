"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { useStore } from "@/store/useStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Calendar, IndianRupee, User, Send } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

export function LeadDrawer() {
  const { leads, selectedLeadId, setSelectedLeadId, addNote } = useStore();
  const [noteContent, setNoteContent] = useState("");

  const lead = leads.find((l) => l.id === selectedLeadId);

  const handleClose = () => {
    setSelectedLeadId(null);
  };

  const handleAddNote = () => {
    if (!lead || !noteContent.trim()) return;
    addNote(lead.id, {
      content: noteContent,
      author: "You", // Mock current user
    });
    setNoteContent("");
  };

  if (!lead) return null;

  return (
    <Sheet open={!!lead} onOpenChange={(open) => !open && handleClose()}>
      <SheetContent className="w-full sm:max-w-xl p-0 overflow-hidden flex flex-col">
        <div className="p-6 pb-2 bg-slate-50 border-b">
          <SheetHeader className="mb-4 text-left">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                  <AvatarFallback className="text-lg bg-brand-navy text-white">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <SheetTitle className="text-2xl font-bold text-slate-900">{lead.name}</SheetTitle>
                  <SheetDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="bg-white">{lead.status}</Badge>
                    <Badge variant={lead.temperature === 'Hot' ? 'destructive' : lead.temperature === 'Warm' ? 'warning' : 'secondary'}>
                      {lead.temperature}
                    </Badge>
                  </SheetDescription>
                </div>
              </div>
            </div>
          </SheetHeader>
          
          <div className="flex gap-2 mb-4">
            <Button className="flex-1 bg-brand-navy hover:bg-brand-navy/90">
              <Phone className="h-4 w-4 mr-2" /> Call
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="h-4 w-4 mr-2" /> Email
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-6 space-y-8">
            {/* Details Grid */}
            <section>
              <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Lead Details</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center"><Mail className="h-3 w-3 mr-1"/> Email</label>
                  <p className="text-sm font-medium">{lead.email}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center"><Phone className="h-3 w-3 mr-1"/> Phone</label>
                  <p className="text-sm font-medium">{lead.phone}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center"><IndianRupee className="h-3 w-3 mr-1"/> Budget</label>
                  <p className="text-sm font-medium">
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(lead.budget)}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center"><MapPin className="h-3 w-3 mr-1"/> Interest</label>
                  <p className="text-sm font-medium">{lead.propertyInterest}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center"><User className="h-3 w-3 mr-1"/> Source</label>
                  <p className="text-sm font-medium">{lead.source}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground flex items-center"><Calendar className="h-3 w-3 mr-1"/> Next Follow-up</label>
                  <p className="text-sm font-medium text-brand-gold font-semibold">
                    {format(new Date(lead.nextFollowUp), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Notes Timeline */}
            <section>
              <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Activity & Notes</h3>
              <div className="space-y-6 relative pl-4 border-l-2 border-slate-100 ml-2">
                {lead.notes.map((note) => (
                  <div key={note.id} className="relative">
                    <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300 ring-4 ring-white" />
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-sm text-slate-700">{note.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-medium text-slate-900">{note.author}</span>
                        <span className="text-xs text-muted-foreground">{format(new Date(note.createdAt), 'MMM d, h:mm a')}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {lead.notes.length === 0 && (
                  <p className="text-sm text-muted-foreground italic">No notes yet.</p>
                )}
              </div>
            </section>
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <Input 
              placeholder="Add a note..." 
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
            />
            <Button size="icon" onClick={handleAddNote} className="bg-brand-navy">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
