import React from 'react';
import { Store } from 'lucide-react';

export function PageHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Partner Information
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Complete your retail partner profile to join our dairy supply chain network
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Store className="h-12 w-12 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}