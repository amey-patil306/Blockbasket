import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, FileCheck, QrCode } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Blockchain Integration',
    description: 'Secure and immutable record-keeping ensures complete transparency and trust among all stakeholders. Every transaction is cryptographically secured and permanently recorded.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    icon: Activity,
    title: 'Real-Time Tracking',
    description: 'Monitor product location, temperature, and quality parameters in real-time throughout the supply chain. Instant alerts for any deviations from optimal conditions.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: FileCheck,
    title: 'Smart Contracts',
    description: 'Automated compliance verification and transaction processing through secure smart contracts. Reduces paperwork and ensures all parties meet their obligations.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: QrCode,
    title: 'QR Code Access',
    description: 'Instant access to comprehensive product information through QR code scanning. Track shipment details, routes, and product quality with a single scan.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export function CoreFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Core Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Powerful tools designed for modern supply chain management
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-start space-x-6">
                <div className={`${feature.bgColor} ${feature.color} p-3 rounded-lg`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}