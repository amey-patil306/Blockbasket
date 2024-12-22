import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { Users, Tractor, Truck, Store, UserCheck } from 'lucide-react';

const stakeholders = [
  {
    icon: Tractor,
    title: 'Farmers',
    description: 'Direct producers who register and track their milk production',
  },
  {
    icon: Truck,
    title: 'Distributors',
    description: 'Transportation and logistics partners ensuring proper handling',
  },
  {
    icon: Store,
    title: 'Retailers',
    description: 'Store owners and dairy product sellers',
  },
  {
    icon: UserCheck,
    title: 'Consumers',
    description: 'End users who benefit from verified product quality',
  },
];

export function Stakeholders() {
  return (
    <SectionContainer id="stakeholders" className="bg-gray-50">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
          <Users className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Stakeholders</h2>
        <p className="mt-4 text-xl text-gray-600">
          Connecting every participant in the dairy supply chain
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stakeholders.map((stakeholder, index) => (
          <motion.div
            key={stakeholder.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <stakeholder.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stakeholder.title}
              </h3>
              <p className="text-gray-600">{stakeholder.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}