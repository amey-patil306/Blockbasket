import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { DistributorFormData } from '../types';

interface DistributorFormProps {
  batchId: string;
  onSubmit: (data: DistributorFormData) => void;
  onCancel: () => void;
}

export function DistributorForm({ batchId, onSubmit, onCancel }: DistributorFormProps) {
  const [formData, setFormData] = useState<DistributorFormData>({
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
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DistributorFormData, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof DistributorFormData, string>> = {};

    if (!formData.senderAddress) {
      newErrors.senderAddress = 'Sender address is required';
    }
    if (!formData.receiverAddress) {
      newErrors.receiverAddress = 'Receiver address is required';
    }
    if (!formData.shippingDate) {
      newErrors.shippingDate = 'Shipping date is required';
    }
    if (!formData.shippingTime) {
      newErrors.shippingTime = 'Shipping time is required';
    }
    if (!formData.receivingPincode?.match(/^\d{6}$/)) {
      newErrors.receivingPincode = 'Invalid pincode format';
    }
    if (!formData.shippingPincode?.match(/^\d{6}$/)) {
      newErrors.shippingPincode = 'Invalid pincode format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof DistributorFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Batch ID</label>
          <input
            type="text"
            name="batchId"
            value={formData.batchId}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Transportation Mode</label>
          <select
            name="transportationMode"
            value={formData.transportationMode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="truck">Truck</option>
            <option value="rail">Rail</option>
            <option value="air">Air</option>
          </select>
        </div>

        {/* Form fields continued... */}
        {/* Add similar blocks for other fields */}

        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Information</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Any additional notes or comments..."
          />
          {errors.additionalInfo && (
            <p className="mt-1 text-sm text-red-600">{errors.additionalInfo}</p>
          )}
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