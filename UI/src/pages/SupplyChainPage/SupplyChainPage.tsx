import React, { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { Navigate } from 'react-router-dom';
import { BatchTable } from './components/BatchTable';
import { BatchDetails } from './components/BatchDetails';
import { DistributorForm } from './components/DistributorForm';
import { useSupplyChain } from './hooks/useSupplyChain';
import type { BatchData, DistributorFormData } from './types';

export function SupplyChainPage() {
  const user = useAuthStore((state) => state.user);
  const { batches, handleDistributorSubmit } = useSupplyChain();
  const [selectedBatch, setSelectedBatch] = useState<BatchData | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);

  if (!user || user.role !== 'distributor') {
    return <Navigate to="/login" replace />;
  }

  const handleBatchSelect = (batch: BatchData) => {
    setSelectedBatch(batch);
    setShowDetails(true);
  };

  const handleDetailsClose = () => {
    setShowDetails(false);
  };

  const handleFormSubmit = async (data: DistributorFormData) => {
    await handleDistributorSubmit(data);
    setShowForm(false);
    setSelectedBatch(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Supply Chain Management</h1>
          <p className="mt-2 text-gray-600">Manage batch shipments and track deliveries</p>
        </div>

        <BatchTable 
          batches={batches} 
          onSelectBatch={handleBatchSelect}
        />

        {showDetails && selectedBatch && (
          <BatchDetails
            batch={selectedBatch}
            onClose={() => {
              handleDetailsClose();
              setShowForm(true);
            }}
          />
        )}

        {showForm && selectedBatch && (
          <DistributorForm
            batchId={selectedBatch.id}
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