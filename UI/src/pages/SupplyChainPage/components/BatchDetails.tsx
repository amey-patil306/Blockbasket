import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Truck, Info } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BatchData } from '../types';

interface BatchDetailsProps {
  batch: BatchData;
  onClose: () => void;
}

export function BatchDetails({ batch, onClose }: BatchDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-xl font-semibold leading-6 text-gray-900">
                Batch #{batch.id} Details
              </h3>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-2 h-4 w-4" />
                      Farmer Details
                    </div>
                    <div className="mt-1">
                      <p className="text-sm font-medium text-gray-900">{batch.farmerName}</p>
                      <p className="text-sm text-gray-500">ID: {batch.farmerId}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-2 h-4 w-4" />
                      Collection Date
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {formatDate(batch.collectionDate)}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Info className="mr-2 h-4 w-4" />
                      Quality Parameters
                    </div>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm text-gray-900">
                        Fat Content: <span className="font-medium">{batch.fatContent}%</span>
                      </p>
                      <p className="text-sm text-gray-900">
                        SNF: <span className="font-medium">{batch.snf}%</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Truck className="mr-2 h-4 w-4" />
                      Quantity
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900">
                      {batch.quantity} Liters
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-2 h-4 w-4" />
                      Status
                    </div>
                    <span className={`mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                      ${batch.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        batch.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'}`}
                    >
                      {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}