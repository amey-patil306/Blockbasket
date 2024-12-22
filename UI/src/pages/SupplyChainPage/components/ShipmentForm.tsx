import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { shipmentSchema } from '../schemas';
import type { ShipmentFormData } from '../types';

interface ShipmentFormProps {
  selectedBatch?: { id: string };
  onSubmit: (data: ShipmentFormData) => void;
  onCancel: () => void;
}

export function ShipmentForm({ selectedBatch, onSubmit, onCancel }: ShipmentFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ShipmentFormData>({
    resolver: zodResolver(shipmentSchema),
    defaultValues: {
      batchId: selectedBatch?.id || '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-lg shadow p-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Batch ID</label>
        <input
          type="text"
          {...register('batchId')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          readOnly
        />
        {errors.batchId && (
          <p className="mt-1 text-sm text-red-600">{errors.batchId.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Shipment Details</label>
        <textarea
          {...register('shipmentDetails')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter shipment details including vehicle number, route, etc."
        />
        {errors.shipmentDetails && (
          <p className="mt-1 text-sm text-red-600">{errors.shipmentDetails.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Remarks</label>
        <textarea
          {...register('remarks')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Any additional notes or observations"
        />
        {errors.remarks && (
          <p className="mt-1 text-sm text-red-600">{errors.remarks.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Shipment'}
        </Button>
      </div>
    </form>
  );
}