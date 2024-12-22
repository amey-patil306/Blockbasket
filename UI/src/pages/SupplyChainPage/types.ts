import { z } from 'zod';
import { distributorFormSchema } from './schemas';

export interface BatchData {
  id: string;
  farmerName: string;
  farmerId: string;
  quantity: number;
  fatContent: number;
  snf: number;
  collectionDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type DistributorFormData = z.infer<typeof distributorFormSchema>;

export interface Batch {
  id: string;
  farmerId: string;
  farmerName: string;
  timestamp: string;
  quantity: number;
  quality: {
    fatContent: number;
    snf: number;
  };
  status: 'pending' | 'approved' | 'rejected';
  region?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}