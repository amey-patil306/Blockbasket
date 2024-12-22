import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, DollarSign, UserCheck } from 'lucide-react';

const impacts = [
  {
    metric: '99.9%',
    label: 'Traceability',
    description: 'Of products can be traced to their source',
    icon: TrendingUp,
    color: 'text-blue-600',
  },
  {
    metric: '85%',
    label: 'Fraud Reduction',
    description: 'Decrease in reported quality issues',
    icon: ShieldCheck,
    color: 'text-green-600',
  },
  {
    metric: '40%',
    label: 'Cost Savings',
    description: 'Reduction in operational overhead',
    icon: DollarSign,
    color: 'text-yellow-600',
  },
  {
    metric: '95%',
    label: 'Trust Score',
    description: 'Consumer confidence rating',
    icon: UserCheck,
    color: 'text-purple-600',
  },
];

export function Impact() {
  return (
    <SectionContainer id="impact" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Impact</h2>
        <p className="mt-4 text-xl text-gray-600">
          Measurable improvements in the dairy supply chain
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impacts.map((impact, index) => (
          <motion.div
            key={impact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg text-center"
          >
            <div className="inline-flex items-center justify-center p-2 bg-gray-50 rounded-full mb-4">
              <impact.icon className={`h-6 w-6 ${impact.color}`} />
            </div>
            <div className={`text-4xl font-bold ${impact.color} mb-2`}>
              {impact.metric}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {impact.label}
            </h3>
            <p className="text-gray-600">{impact.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}