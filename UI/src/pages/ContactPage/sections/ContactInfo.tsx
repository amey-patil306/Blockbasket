import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  HelpCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@blockbasket.com',
    href: 'mailto:support@blockbasket.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: '123 Innovation Drive, Silicon Valley, CA 94025',
    href: 'https://maps.google.com',
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-6">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              className="flex items-start space-x-4 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <method.icon className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">{method.title}</p>
                <p>{method.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Clock className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Operating Hours</h3>
        </div>
        <div className="space-y-2 text-gray-600">
          <p>Monday - Friday: 9 AM to 6 PM EST</p>
          <p>Saturday: 10 AM to 2 PM EST</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Support Resources */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <HelpCircle className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Need Help?</h3>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Check out our support resources for quick answers to common questions.
          </p>
          <div className="space-y-2">
            <Link to="/faqs" className="block text-blue-600 hover:text-blue-700">
              → Frequently Asked Questions
            </Link>
            <Link to="/docs" className="block text-blue-600 hover:text-blue-700">
              → Documentation
            </Link>
            <Link to="/help" className="block text-blue-600 hover:text-blue-700">
              → Knowledge Base
            </Link>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="text-gray-400 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{social.label}</span>
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}