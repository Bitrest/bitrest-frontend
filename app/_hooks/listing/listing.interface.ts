/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Listing {
  _id: string;
  listingId: string;
  title: string;
  description: string;
  price: number;
  delegateId: string;
  category: string;
  status?: string;
  networkName: string;
  totalSupply: number;
  documents?: string[];
  reserve: number;
  mainCount: number;
  priorityStageIds?: any[];
  roi: number;
  returnPotential: number;
  duration: number;
  propertyType: string;
  launchDate: string;
  closeDate: string;
  partners: string[];
  propertyLocation: string;
  images: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
