import { Agent, Lead } from "@/types";

export const MOCK_AGENTS: Agent[] = [
  { id: '1', name: 'Anjali Sharma', email: 'anjali.s@primeestate.in', avatar: 'https://i.pravatar.cc/150?u=anjali' },
  { id: '2', name: 'Rahul Verma', email: 'rahul.v@primeestate.in', avatar: 'https://i.pravatar.cc/150?u=rahul' },
  { id: '3', name: 'Priya Patel', email: 'priya.p@primeestate.in', avatar: 'https://i.pravatar.cc/150?u=priya' },
];

export const MOCK_LEADS: Lead[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh.k@gmail.com',
    phone: '+91 98765 43210',
    budget: 25000000, // 2.5 Cr
    propertyInterest: '3BHK in Bandra West',
    source: 'Website',
    temperature: 'Hot',
    status: 'Negotiation',
    assignedAgentId: '1',
    nextFollowUp: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    notes: [
      { id: 'n1', content: 'Client is very interested in the sea-facing unit. Wants to negotiate on the parking charges.', createdAt: new Date(Date.now() - 86400000 * 2).toISOString(), author: 'Anjali Sharma' }
    ]
  },
  {
    id: '2',
    name: 'Sneha Gupta',
    email: 'sneha.g@outlook.com',
    phone: '+91 99887 76655',
    budget: 45000000, // 4.5 Cr
    propertyInterest: 'Villa in Whitefield',
    source: 'Referral',
    temperature: 'Warm',
    status: 'Site Visit',
    assignedAgentId: '2',
    nextFollowUp: new Date(Date.now() + 86400000 * 2).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    notes: [
        { id: 'n2', content: 'Liked the layout but concerned about the distance from the main road.', createdAt: new Date(Date.now() - 86400000 * 1).toISOString(), author: 'Rahul Verma' }
    ]
  },
  {
    id: '3',
    name: 'Amit Shah',
    email: 'amit.shah88@yahoo.com',
    phone: '+91 91234 56789',
    budget: 8500000, // 85 L
    propertyInterest: 'Studio in Koramangala',
    source: 'Social Media',
    temperature: 'Cold',
    status: 'New',
    assignedAgentId: '3',
    nextFollowUp: new Date(Date.now() - 86400000).toISOString(), // Overdue
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    notes: []
  },
  {
    id: '4',
    name: 'Vikram Malhotra',
    email: 'v.malhotra@corporate.com',
    phone: '+91 98111 22233',
    budget: 120000000, // 12 Cr
    propertyInterest: 'Farmhouse in Chattarpur',
    source: 'Walk-in',
    temperature: 'Hot',
    status: 'Closed',
    assignedAgentId: '1',
    nextFollowUp: new Date(Date.now() + 86400000 * 7).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 20).toISOString(),
    notes: [
        { id: 'n3', content: 'Token amount received. Documentation in progress.', createdAt: new Date(Date.now() - 86400000 * 1).toISOString(), author: 'Anjali Sharma' }
    ]
  },
  {
    id: '5',
    name: 'Arjun Singh',
    email: 'arjun.singh@gmail.com',
    phone: '+91 98222 33444',
    budget: 15000000, // 1.5 Cr
    propertyInterest: 'Row House in Pune',
    source: 'Website',
    temperature: 'Warm',
    status: 'Contacted',
    assignedAgentId: '2',
    nextFollowUp: new Date(Date.now() + 86400000 * 3).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    notes: []
  },
  {
    id: '6',
    name: 'Meera Reddy',
    email: 'meera.r@hotmail.com',
    phone: '+91 98444 55666',
    budget: 11000000, // 1.1 Cr
    propertyInterest: '2BHK in Thane',
    source: 'Referral',
    temperature: 'Hot',
    status: 'Site Visit',
    assignedAgentId: '3',
    nextFollowUp: new Date(Date.now() + 86400000).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 8).toISOString(),
    notes: []
  },
  {
    id: '7',
    name: 'Karthik Iyer',
    email: 'karthik.iyer@gmail.com',
    phone: '+91 98777 88999',
    budget: 9500000, // 95 L
    propertyInterest: 'Apartment in Salt Lake',
    source: 'Website',
    temperature: 'Cold',
    status: 'New',
    assignedAgentId: '1',
    nextFollowUp: new Date(Date.now() + 86400000 * 5).toISOString(),
    createdAt: new Date(Date.now()).toISOString(),
    notes: []
  },
  {
    id: '8',
    name: 'Zara Khan',
    email: 'zara.k@designstudio.com',
    phone: '+91 98999 00111',
    budget: 55000000, // 5.5 Cr
    propertyInterest: 'Penthouse in Jubilee Hills',
    source: 'Social Media',
    temperature: 'Warm',
    status: 'Negotiation',
    assignedAgentId: '2',
    nextFollowUp: new Date(Date.now() + 86400000 * 2).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 15).toISOString(),
    notes: [
        { id: 'n4', content: 'Asking for a 5% discount on the base price.', createdAt: new Date(Date.now() - 86400000 * 3).toISOString(), author: 'Rahul Verma' }
    ]
  }
];
