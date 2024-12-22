import React from 'react';
import { RetailerForm } from './components/RetailerForm';
import { PageHeader } from './components/PageHeader';

export function RetailerPartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RetailerForm />
      </main>
    </div>
  );
}