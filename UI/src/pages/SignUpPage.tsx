import React from 'react';
import { SignUpForm } from '@/components/auth/SignUpForm';

export function SignUpPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SignUpForm />
    </div>
  );
}