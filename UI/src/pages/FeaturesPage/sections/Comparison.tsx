import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  'Blockchain Security',
  'Real-time Tracking',
  'Smart Contracts',
  'QR Code Integration',
  'Temperature Monitoring',
  'Quality Verification',
  'Payment Automation',
  'Supply Chain Analytics',
];

export function Comparison() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose BlockBasket?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Compare our features with traditional supply chain management
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <div className="grid grid-cols-3 gap-4 py-4 bg-gray-100 rounded-t-lg px-4">
            <div className="text-sm font-medium text-gray-500">Feature</div>
            <div className="text-sm font-medium text-blue-600 text-center">BlockBasket</div>
            <div className="text-sm font-medium text-gray-500 text-center">Traditional System</div>
          </div>

          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 gap-4 py-4 bg-white rounded-lg px-4"
            >
              <div className="text-sm text-gray-900">{feature}</div>
              <div className="flex justify-center">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex justify-center">
                <X className="h-5 w-5 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}