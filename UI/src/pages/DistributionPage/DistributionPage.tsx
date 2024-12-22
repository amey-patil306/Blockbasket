import React, { useState } from 'react';
import { DistributorTable } from './components/DistributorTable';
import { DistributorForm } from './components/DistributorForm';
import { useAuthStore } from '@/store/authStore';
import { Navigate } from 'react-router-dom';
import type { BatchData } from './types';

export function DistributionPage() {
  const user = useAuthStore((state) => state.user);
  const [selectedBatch, setSelectedBatch] = useState<BatchData | null>(null);
  const [showForm, setShowForm] = useState(false);

  if (!user || user.role !== 'distributor') {
    return <Navigate to="/login" replace />;
  }

  const handleBatchSelect = (batch: BatchData) => {
    setSelectedBatch(batch);
    setShowForm(true);
  };

  const handleFormSubmit = async (data: any) => {
    console.log('Form submitted:', data);
    setShowForm(false);
    setSelectedBatch(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Distribution Management
          </h1>
          <p className="mt-2 text-gray-600">
            View and manage batch distributions
          </p>
        </div>

        {!showForm ? (
          <DistributorTable onSelectBatch={handleBatchSelect} />
        ) : (
          <DistributorForm
            batchId={selectedBatch?.id || ''}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false);
              setSelectedBatch(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
