import React from 'react';
import { FormField } from './FormField';
import type { SignUpFormData, FormErrors } from './types';

interface AccountFormProps {
  formData: SignUpFormData;
  errors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AccountForm({ formData, errors, onChange }: AccountFormProps) {
  return (
    <div className="space-y-6">
      <FormField
        label="Full Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={onChange}
        error={errors.name}
        placeholder="Enter your full name"
        autoComplete="name"
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
        placeholder="name@example.com"
        autoComplete="email"
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        error={errors.password}
        placeholder="Create a strong password"
        autoComplete="new-password"
      />

      <div className="text-sm text-gray-500">
        <p>Password requirements:</p>
        <ul className="list-disc list-inside mt-1">
          <li>At least 8 characters long</li>
          <li>Contains at least one number</li>
          <li>Contains at least one special character</li>
        </ul>
      </div>
    </div>
  );
}