import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Mail } from 'lucide-react';

const socialButtons = [
  {
    name: 'Email',
    icon: Mail,
    bgColor: 'bg-white',
    textColor: 'text-gray-700',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-50',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    bgColor: 'bg-[#1877F2]',
    textColor: 'text-white',
    borderColor: 'border-transparent',
    hoverBg: 'hover:bg-[#1666D9]',
  },
  {
    name: 'GitHub',
    icon: Github,
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    borderColor: 'border-transparent',
    hoverBg: 'hover:bg-black',
  },
];

interface SocialButtonProps {
  name: string;
  icon: React.ElementType;
  bgColor: string;
  textColor: string;
  borderColor: string;
  hoverBg: string;
  onClick: () => void;
}

function SocialButton({ 
  name, 
  icon: Icon, 
  bgColor, 
  textColor, 
  borderColor, 
  hoverBg,
  onClick 
}: SocialButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`w-full flex items-center justify-center px-4 py-2.5 border ${borderColor} 
        rounded-md shadow-sm ${bgColor} ${textColor} ${hoverBg} 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition-colors duration-200`}
    >
      <Icon className="w-5 h-5" />
      <span className="ml-3">Continue with {name}</span>
    </motion.button>
  );
}

export function SocialSignUp() {
  const handleSocialLogin = (provider: string) => {
    // Implement social login logic here
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="space-y-3">
      {socialButtons.map((button) => (
        <SocialButton
          key={button.name}
          {...button}
          onClick={() => handleSocialLogin(button.name)}
        />
      ))}
    </div>
  );
}