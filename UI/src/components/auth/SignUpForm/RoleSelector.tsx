import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Truck, Store } from 'lucide-react';

const roles = [
  { id: 'farmer', label: 'Farmer', icon: Tractor },
  { id: 'distributor', label: 'Distributor', icon: Truck },
  { id: 'retailer', label: 'Retailer', icon: Store },
] as const;

interface RoleSelectorProps {
  value: string;
  onChange: (role: 'farmer' | 'distributor' | 'retailer') => void;
}

export function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {roles.map((role) => (
        <motion.button
          key={role.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onChange(role.id)}
          className={`relative p-4 rounded-lg border-2 transition-colors ${
            value === role.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <role.icon className={`h-8 w-8 ${
              value === role.id ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <span className={`font-medium ${
              value === role.id ? 'text-blue-700' : 'text-gray-700'
            }`}>
              {role.label}
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}