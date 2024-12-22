import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Truck, Store, Users } from 'lucide-react';

const useCases = [
  {
    icon: Tractor,
    role: 'Farmers',
    features: [
      'Record milk collection data',
      'Monitor quality parameters',
      'Track payments and invoices',
      'Generate QR codes for batches',
    ],
  },
  {
    icon: Truck,
    role: 'Distributors',
    features: [
      'Real-time route optimization',
      'Temperature monitoring',
      'Delivery confirmation',
      'Quality verification',
    ],
  },
  {
    icon: Store,
    role: 'Retailers',
    features: [
      'Verify product authenticity',
      'Track inventory levels',
      'Monitor delivery schedules',
      'Access product history',
    ],
  },
  {
    icon: Users,
    role: 'Consumers',
    features: [
      'Scan QR codes for info',
      'View product journey',
      'Check quality certificates',
      'Verify authenticity',
    ],
  },
];

export function UseCases() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features by Role
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tailored functionality for every stakeholder in the supply chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <useCase.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {useCase.role}
                </h3>
                <ul className="space-y-2 text-left w-full">
                  {useCase.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}