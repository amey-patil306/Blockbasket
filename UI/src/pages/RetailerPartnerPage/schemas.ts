import { z } from 'zod';

export const retailerFormSchema = z.object({
  supplierId: z.string()
    .min(1, 'Supplier ID is required')
    .min(3, 'Supplier ID must be at least 3 characters'),
  storeAddress: z.string()
    .min(1, 'Store address is required')
    .min(10, 'Please enter a complete store address'),
  pincode: z.string()
    .regex(/^\d{6}$/, 'Please enter a valid 6-digit pincode'),
  productQuantity: z.number()
    .min(0.1, 'Quantity must be greater than 0')
    .max(10000, 'Quantity cannot exceed 10,000 liters'),
  recordDate: z.string(),
  recordTime: z.string(),
});