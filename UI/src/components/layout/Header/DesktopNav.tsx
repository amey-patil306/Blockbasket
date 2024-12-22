import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from './NavLink';
import type { Navigation } from './types';

interface DesktopNavProps {
  navigation: Navigation;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export function DesktopNav({ navigation, isAuthenticated, onLogout }: DesktopNavProps) {
  return (
    <div className="hidden md:flex md:items-center md:space-x-6">
      {isAuthenticated ? (
        <>
          {navigation.authenticated.map((item) => (
            <NavLink key={item.name} {...item} />
          ))}
          <Button
            variant="ghost"
            className="flex items-center space-x-1 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            onClick={onLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </>
      ) : (
        <>
          {navigation.common.map((item) => (
            <NavLink key={item.name} {...item} />
          ))}
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button 
                variant="outline" 
                className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="shadow-md hover:shadow-lg transition-shadow">
                Get Started
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}