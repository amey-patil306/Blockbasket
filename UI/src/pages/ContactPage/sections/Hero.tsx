import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-blue-600 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 rounded-full p-3">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            We value your feedback and are here to assist with any inquiries regarding BlockBasket. 
            Please feel free to reach out using the contact methods below.
          </p>
        </motion.div>
      </div>
    </div>
  );
}