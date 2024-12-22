import { z } from 'zod';
import { retailerFormSchema } from './schemas';

export type RetailerFormData = z.infer<typeof retailerFormSchema>;