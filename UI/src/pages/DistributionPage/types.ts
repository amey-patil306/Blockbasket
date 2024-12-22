import { z } from 'zod';
import { distributorFormSchema } from './schemas';

export interface BatchData {
  id: string;
  farmerName: string;
  farmerId: string;
  productType: string;
  quantity: number;
  collectionDate: string;
  status: 'pending' | 'processing' | 'completed';
}

export type DistributorFormData = z.infer<typeof distributorFormSchema>;