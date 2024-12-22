import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Store, MapPin, Package, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { retailerFormSchema } from '../schemas';
import type { RetailerFormData } from '../types';

export function RetailerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RetailerFormData>({
    resolver: zodResolver(retailerFormSchema),
    defaultValues: {
      recordDate: new Date().toISOString().split('T')[0],
      recordTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  });

  const onSubmit = async (data: RetailerFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      // Handle success (e.g., show success message, redirect)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Supplier Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Store className="h-5 w-5 mr-2 text-blue-600" />
            Supplier Information
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="supplierId" className="block text-sm font-medium text-gray-700">
                Supplier ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="supplierId"
                {...register('supplierId')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter supplier ID"
              />
              {errors.supplierId && (
                <p className="mt-1 text-sm text-red-600">{errors.supplierId.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Store Location */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            Store Location
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="storeAddress" className="block text-sm font-medium text-gray-700">
                Store Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="storeAddress"
                {...register('storeAddress')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter complete store address"
              />
              {errors.storeAddress && (
                <p className="mt-1 text-sm text-red-600">{errors.storeAddress.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                {...register('pincode')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter 6-digit pincode"
              />
              {errors.pincode && (
                <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Package className="h-5 w-5 mr-2 text-blue-600" />
            Product Details
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-700">
                Product Quantity (Liters) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="productQuantity"
                {...register('productQuantity', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter quantity in liters"
                min="0"
                step="0.1"
              />
              {errors.productQuantity && (
                <p className="mt-1 text-sm text-red-600">{errors.productQuantity.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Record Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-blue-600" />
            Record Information
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="recordDate" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="recordDate"
                {...register('recordDate')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="recordTime" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="recordTime"
                {...register('recordTime')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Partner Information'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}