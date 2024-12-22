import React from 'react';
import { Link } from 'react-router-dom';
import { Milk } from 'lucide-react';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Milk className="h-8 w-8 text-blue-600 transition-colors group-hover:text-blue-700" />
        <div className="absolute inset-0 bg-blue-600/10 rounded-full scale-110 group-hover:scale-125 transition-transform" />
      </motion.div>
      <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        BlockBasket
      </span>
    </Link>
  );
}