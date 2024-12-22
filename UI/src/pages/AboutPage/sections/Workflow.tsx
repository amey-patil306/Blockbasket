import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { Milk, Truck, Store, QrCode, Check } from 'lucide-react';

const steps = [
  {
    icon: Milk,
    title: 'Product Registration',
    description: 'Farmers register milk batches with quality parameters',
  },
  {
    icon: Truck,
    title: 'Supply Chain Tracking',
    description: 'Real-time monitoring of product movement and conditions',
  },
  {
    icon: Store,
    title: 'Retail Distribution',
    description: 'Secure handoff to authorized retail partners',
  },
  {
    icon: QrCode,
    title: 'Consumer Verification',
    description: 'End users scan QR codes to verify product authenticity',
  },
];

export function Workflow() {
  return (
    <SectionContainer id="workflow" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
        <p className="mt-4 text-xl text-gray-600">
          A seamless process from farm to consumer
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-12 left-4 right-4 h-0.5 bg-blue-100 lg:left-8 lg:right-8" />
        
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}