import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <div className="bg-blue-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join BlockBasket today and experience the future of dairy supply chain management.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/register">
              <Button
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-blue-700 px-8 py-3 text-lg font-medium"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-100">
            No credit card required • Free trial available • Cancel anytime
          </p>
        </motion.div>
      </div>
    </div>
  );
}