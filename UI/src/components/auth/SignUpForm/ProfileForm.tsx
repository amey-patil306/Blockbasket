import React from 'react';
import { FormField } from './FormField';
import { RoleSelector } from './RoleSelector';
import type { SignUpFormData, FormErrors } from './types';

interface ProfileFormProps {
  formData: SignUpFormData;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleChange: (role: 'farmer' | 'distributor' | 'retailer') => void;
}

export function ProfileForm({ formData, errors, onChange, onRoleChange }: ProfileFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Your Role</h3>
        <RoleSelector value={formData.role} onChange={onRoleChange} />
      </div>

      <FormField
        label="Company Name"
        name="companyName"
        type="text"
        value={formData.companyName}
        onChange={onChange}
        error={errors.companyName}
        placeholder="Your company name"
      />

      <FormField
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        value={formData.phoneNumber}
        onChange={onChange}
        error={errors.phoneNumber}
        placeholder="+1 (555) 000-0000"
        autoComplete="tel"
      />
    </div>
  );
}