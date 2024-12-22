import { 
  BarChart2, 
  Truck, 
  Users, 
  Settings,
  Info,
  Star,
  DollarSign,
  Phone,
  LayoutDashboard
} from 'lucide-react';
import type { Navigation } from './types';

export const navigation: Navigation = {
  common: [
    { name: 'About', href: '/about', icon: Info },
    { name: 'Features', href: '/features', icon: Star },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Contact', href: '/contact', icon: Phone },
  ],
  authenticated: [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart2 },
    { name: 'Supply Chain', href: '/supply-chain', icon: Truck },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Admin', href: '/admin', icon: LayoutDashboard },
  ],
};