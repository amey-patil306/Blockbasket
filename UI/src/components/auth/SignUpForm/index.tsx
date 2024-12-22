import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SignUpSteps } from './SignUpSteps';
import { SocialSignUp } from './SocialSignUp';
import { AccountForm } from './AccountForm';
import { ProfileForm } from './ProfileForm';
import { validateForm } from './validation';
import { useAuthStore } from '@/store/authStore';
import type { SignUpFormData, FormErrors } from './types';

const steps = [
  {
    number: 1,
    title: 'Create Account',
    description: 'Set up your login credentials',
  },
  {
    number: 2,
    title: 'Complete Profile',
    description: 'Tell us about your business',
  },
];

const initialFormData: SignUpFormData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'farmer',
  companyName: '',
  phoneNumber: '',
  acceptTerms: false,
};

export function SignUpForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SignUpFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep = (step: number) => {
    const stepFields = step === 1 
      ? ['name', 'email', 'password'] 
      : ['companyName', 'phoneNumber'];
    
    const stepErrors = validateForm(formData);
    const currentErrors: FormErrors = {};
    
    stepFields.forEach(field => {
      if (stepErrors[field as keyof FormErrors]) {
        currentErrors[field as keyof FormErrors] = stepErrors[field as keyof FormErrors];
      }
    });

    return currentErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      login({
        id: '1',
        name: formData.name,
        role: formData.role,
      });
      navigate('/dashboard');
    } catch (error) {
      setErrors({ email: 'An error occurred during registration' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <SignUpSteps currentStep={currentStep} steps={steps} />

        <div className="flex-1 max-w-2xl">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentStep === 1 ? 'Create Your Account' : 'Complete Your Profile'}
              </h2>
              <p className="mt-2 text-gray-600">
                {currentStep === 1 
                  ? 'Join BlockBasket to start managing your supply chain efficiently.'
                  : 'Tell us about your business to personalize your experience.'}
              </p>
            </div>

            {currentStep === 1 && (
              <div className="mb-8">
                <SocialSignUp />
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentStep === 1 ? (
                    <AccountForm
                      formData={formData}
                      errors={errors}
                      onChange={handleChange}
                    />
                  ) : (
                    <ProfileForm
                      formData={formData}
                      errors={errors}
                      onChange={handleChange}
                      onRoleChange={(role) => setFormData(prev => ({ ...prev, role }))}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="button"
                  className="ml-auto"
                  onClick={currentStep === steps.length ? handleSubmit : handleNext}
                  disabled={isSubmitting}
                >
                  {currentStep === steps.length 
                    ? (isSubmitting ? 'Creating Account...' : 'Create Account')
                    : 'Continue'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}