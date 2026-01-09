import { create } from 'zustand';
import { Lead, Agent, Note } from '@/types';
import { MOCK_LEADS, MOCK_AGENTS } from './mockData';

interface StoreState {
  leads: Lead[];
  agents: Agent[];
  selectedLeadId: string | null;
  setSelectedLeadId: (id: string | null) => void;
  updateLeadStatus: (leadId: string, status: Lead['status']) => void;
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'notes'>) => void;
  addNote: (leadId: string, note: Omit<Note, 'id' | 'createdAt'>) => void;
}

export const useStore = create<StoreState>((set) => ({
  leads: MOCK_LEADS,
  agents: MOCK_AGENTS,
  selectedLeadId: null,
  setSelectedLeadId: (id) => set({ selectedLeadId: id }),
  addLead: (lead) =>
    set((state) => ({
      leads: [
        {
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          notes: [],
          ...lead,
        },
        ...state.leads,
      ],
    })),
  updateLeadStatus: (leadId, status) =>
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === leadId ? { ...lead, status } : lead
      ),
    })),
  addNote: (leadId, note) =>
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              notes: [
                ...lead.notes,
                {
                  id: Math.random().toString(36).substr(2, 9),
                  createdAt: new Date().toISOString(),
                  ...note,
                },
              ],
            }
          : lead
      ),
    })),
}));
