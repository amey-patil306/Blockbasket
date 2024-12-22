import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <SectionContainer id="cta" className="bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Transform Your Supply Chain?
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          Join BlockBasket today and be part of the future of dairy supply chain management.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-blue-700 px-8 py-3 text-lg font-medium w-full sm:w-auto"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-blue-100">
          No credit card required • Free trial available • Cancel anytime
        </p>
      </div>
    </SectionContainer>
  );
}