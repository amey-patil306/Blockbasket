import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Factory, Truck, Store } from 'lucide-react';

const steps = [
  { icon: Tractor, label: 'Collection', description: 'Milk collection from farmers' },
  { icon: Factory, label: 'Processing', description: 'Quality testing and processing' },
  { icon: Truck, label: 'Distribution', description: 'Transport to distribution centers' },
  { icon: Store, label: 'Delivery', description: 'Final delivery to retailers' },
];

export function SupplyChainFlow() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Supply Chain Flow</h2>
      
      <div className="relative">
        <div className="absolute top-12 left-4 right-4 h-0.5 bg-blue-100" />
        
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{step.label}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}