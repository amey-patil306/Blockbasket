import { z } from 'zod';

export const distributorFormSchema = z.object({
  batchId: z.string().min(1, 'Batch ID is required'),
  senderAddress: z.string().min(5, 'Sender address must be at least 5 characters'),
  receiverAddress: z.string().min(5, 'Receiver address must be at least 5 characters'),
  transportationMode: z.enum(['truck', 'rail', 'air']),
  receivingDate: z.string().min(1, 'Receiving date is required'),
  receivingTime: z.string().min(1, 'Receiving time is required'),
  shippingDate: z.string().min(1, 'Shipping date is required'),
  shippingTime: z.string().min(1, 'Shipping time is required'),
  receivingLocation: z.string().min(3, 'Receiving location must be at least 3 characters'),
  receivingPincode: z.string().regex(/^\d{6}$/, 'Invalid pincode format'),
  shippingLocation: z.string().min(3, 'Shipping location must be at least 3 characters'),
  shippingPincode: z.string().regex(/^\d{6}$/, 'Invalid pincode format'),
  additionalInfo: z.string().max(500, 'Additional information must not exceed 500 characters').optional(),
});