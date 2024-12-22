import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { NavigationItem } from './types';

interface NavLinkProps extends NavigationItem {
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

export function NavLink({ name, href, icon: Icon, onClick, variant = 'desktop' }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  const baseStyles = cn(
    "relative font-medium transition-colors",
    variant === 'desktop' ? "text-sm px-3 py-2" : "text-base px-4 py-2",
    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
  );

  return (
    <Link
      to={href}
      className={cn(
        baseStyles,
        "group flex items-center space-x-2 rounded-md"
      )}
      onClick={onClick}
    >
      {Icon && <Icon className={cn("transition-colors", variant === 'desktop' ? "h-4 w-4" : "h-5 w-5")} />}
      <span>{name}</span>
      {isActive && (
        <motion.div
          layoutId={`nav-indicator-${variant}`}
          className="absolute inset-0 rounded-md bg-blue-50 -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}