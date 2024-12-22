import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { Shield, Activity, FileCheck, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Blockchain Integration',
    description: 'Immutable records ensure data integrity and trust throughout the supply chain.',
  },
  {
    icon: Activity,
    title: 'Real-time Tracking',
    description: 'Monitor product location and conditions in real-time for optimal quality control.',
  },
  {
    icon: FileCheck,
    title: 'Smart Contracts',
    description: 'Automated compliance and agreement execution for seamless operations.',
  },
  {
    icon: QrCode,
    title: 'QR Code Access',
    description: 'Instant access to comprehensive product information via QR code scanning.',
  },
];

export function Features() {
  return (
    <SectionContainer id="features" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Key Features
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Innovative solutions for modern dairy supply chain challenges
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}