export type LeadStatus = 'New' | 'Contacted' | 'Site Visit' | 'Negotiation' | 'Closed';
export type LeadTemperature = 'Hot' | 'Warm' | 'Cold';

export interface Note {
  id: string;
  content: string;
  createdAt: string; // ISO date
  author: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  budget: number;
  propertyInterest: string; // e.g. "2BHK Apartment"
  source: 'Website' | 'Referral' | 'Walk-in' | 'Social Media';
  temperature: LeadTemperature;
  status: LeadStatus;
  assignedAgentId: string;
  nextFollowUp: string; // ISO date
  notes: Note[];
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  avatar: string;
  email: string;
}
