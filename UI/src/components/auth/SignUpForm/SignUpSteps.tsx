import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface SignUpStepsProps {
  currentStep: number;
  steps: Step[];
}

export function SignUpSteps({ currentStep, steps }: SignUpStepsProps) {
  return (
    <div className="hidden lg:block w-full max-w-xs">
      <div className="sticky top-24">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sign Up Steps</h3>
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start">
              <div className="relative">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: currentStep >= step.number ? '#3b82f6' : '#e5e7eb',
                    scale: currentStep === step.number ? 1.1 : 1,
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                >
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </motion.div>
                {step.number < steps.length && (
                  <div className="absolute left-4 top-8 w-px h-12 bg-gray-200" />
                )}
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}