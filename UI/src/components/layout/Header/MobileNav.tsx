import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NavLink } from './NavLink';
import type { Navigation } from './types';

interface MobileNavProps {
  navigation: Navigation;
  isAuthenticated: boolean;
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function MobileNav({ navigation, isAuthenticated, isOpen, onClose, onLogout }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-2 space-y-1">
            {isAuthenticated ? (
              <>
                {navigation.authenticated.map((item) => (
                  <NavLink
                    key={item.name}
                    {...item}
                    variant="mobile"
                    onClick={onClose}
                  />
                ))}
                <button
                  className="flex w-full items-center space-x-2 px-4 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                {navigation.common.map((item) => (
                  <NavLink
                    key={item.name}
                    {...item}
                    variant="mobile"
                    onClick={onClose}
                  />
                ))}
                <div className="px-4 py-3 space-y-2">
                  <Link to="/login" className="block w-full" onClick={onClose}>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register" className="block w-full" onClick={onClose}>
                    <Button className="w-full shadow-md hover:shadow-lg transition-shadow">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}