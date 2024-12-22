import React from 'react';
import { Button } from '@/components/ui/button';
import type { DistributorFormData } from '../types';

interface DistributorFormProps {
  batchId: string;
  onSubmit: (data: DistributorFormData) => void;
  onCancel: () => void;
}

export function DistributorForm({ batchId, onSubmit, onCancel }: DistributorFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: DistributorFormData = {
      batchId,
      senderAddress: '',
      receiverAddress: '',
      transportationMode: 'truck',
      receivingDate: new Date().toISOString().split('T')[0],
      receivingTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      shippingDate: '',
      shippingTime: '',
      receivingLocation: '',
      receivingPincode: '',
      shippingLocation: '',
      shippingPincode: '',
      additionalInfo: ''
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Batch ID</label>
          <input
            type="text"
            value={batchId}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Transportation Mode</label>
          <select
            defaultValue="truck"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="truck">Truck</option>
            <option value="rail">Rail</option>
            <option value="air">Air</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Submit to Administrator
        </Button>
      </div>
    </form>
  );
}