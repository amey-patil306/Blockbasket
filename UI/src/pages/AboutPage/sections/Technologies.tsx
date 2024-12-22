import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { Database, Link, Server, Shield } from 'lucide-react';

const technologies = [
  {
    icon: Database,
    name: 'Blockchain',
    description: 'Ethereum-based distributed ledger for immutable record-keeping',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Link,
    name: 'Smart Contracts',
    description: 'Automated agreement execution and compliance verification',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Server,
    name: 'IPFS Storage',
    description: 'Decentralized storage for product data and documentation',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Shield,
    name: 'Web3.js',
    description: 'Secure interaction with blockchain infrastructure',
    color: 'bg-orange-100 text-orange-600',
  },
];

export function Technologies() {
  return (
    <SectionContainer id="technologies" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Core Technologies
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Built on cutting-edge blockchain and web technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white rounded-lg transform transition-transform group-hover:scale-105 shadow-lg" />
            <div className="relative p-6">
              <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                <tech.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-600">
                {tech.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}