import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Powerful Features for Modern
              <span className="block text-blue-200">Supply Chain Management</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Discover how BlockBasket revolutionizes dairy supply chain management with cutting-edge blockchain technology and real-time tracking.
            </p>
            <div className="mt-8 flex justify-center space-x-6 text-sm">
              <div className="flex items-center text-blue-100">
                <Shield className="h-5 w-5 mr-2" />
                Blockchain Secured
              </div>
              <div className="flex items-center text-blue-100">
                <Zap className="h-5 w-5 mr-2" />
                Real-time Updates
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90" />
    </div>
  );
}