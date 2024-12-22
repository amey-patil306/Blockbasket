export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'farmer' | 'distributor' | 'retailer';
  companyName: string;
  phoneNumber: string;
  acceptTerms: boolean;
}

export type FormErrors = Partial<Record<keyof SignUpFormData, string>>;