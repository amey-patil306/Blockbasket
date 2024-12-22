import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Zap, 
  Shield, 
  Star, 
  Users, 
  Clock, 
  Bot, 
  Headphones,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small-scale farmers and businesses',
    price: {
      monthly: 29,
      annually: 290,
    },
    features: [
      'Product registration and tracking',
      'Basic QR code generation',
      'Up to 50 blockchain records/month',
      'Email support',
      'Mobile app access',
      'Basic analytics dashboard',
    ],
    icon: Shield,
    color: 'emerald',
  },
  {
    name: 'Standard',
    description: 'Ideal for medium-sized suppliers and distributors',
    price: {
      monthly: 79,
      annually: 790,
    },
    features: [
      'All Basic features',
      'Advanced tracking and analytics',
      'Smart contract integration',
      'Detailed QR code history',
      'Priority email and chat support',
      'API access',
      'Custom reports',
      'Team collaboration tools',
    ],
    icon: Zap,
    color: 'blue',
    popular: true,
  },
  {
    name: 'Premium',
    description: 'For large-scale businesses and supply chain networks',
    price: {
      monthly: 199,
      annually: 1990,
    },
    features: [
      'All Standard features',
      'Unlimited blockchain storage',
      'AI-powered insights',
      'Custom smart contracts',
      'Real-time alerts',
      'Dedicated account manager',
      '24/7 priority support',
      'Advanced security features',
      'Custom integrations',
    ],
    icon: Star,
    color: 'purple',
  },
];

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. For enterprise plans, we can also accommodate other payment methods.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required during the trial period.',
  },
  {
    question: 'What happens if I exceed my monthly record limit?',
    answer: 'You\'ll receive a notification when you\'re close to your limit. You can either upgrade your plan or purchase additional records as needed.',
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annually'>('monthly');
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your supply chain needs
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center items-center space-x-4">
            <span 
              className={cn(
                "text-sm font-medium",
                billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly')}
              className={cn(
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                billingCycle === 'annually' ? 'bg-blue-600' : 'bg-gray-200'
              )}
            >
              <span className={cn(
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                billingCycle === 'annually' ? 'translate-x-5' : 'translate-x-0'
              )} />
            </button>
            <span 
              className={cn(
                "text-sm font-medium",
                billingCycle === 'annually' ? 'text-gray-900' : 'text-gray-500'
              )}
            >
              Annually
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={cn(
                "relative bg-white rounded-2xl shadow-lg overflow-hidden",
                plan.popular && "ring-2 ring-blue-500"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-20 h-20 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-blue-500 text-white text-xs font-semibold py-1 right-[-35px] top-[15px] w-[170px] text-center">
                    Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <plan.icon className={`h-8 w-8 text-${plan.color}-500`} />
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                    </span>
                    <span className="ml-1 text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link to="/register">
                    <Button
                      className={cn(
                        "w-full",
                        plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                      )}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Plan */}
        <div className="mt-16">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
                alt="Enterprise background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative px-8 py-12 md:px-12 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Enterprise Plan</h3>
                  <p className="mt-4 text-lg text-gray-300">
                    Custom solutions for large organizations with complex supply chain needs.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                      { icon: Users, text: 'Unlimited users and teams' },
                      { icon: Bot, text: 'Custom AI model training' },
                      { icon: Clock, text: 'Dedicated infrastructure' },
                      { icon: Headphones, text: 'White-glove onboarding' },
                    ].map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-center text-gray-300">
                        <Icon className="h-5 w-5 mr-3" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center lg:text-right">
                  <p className="text-white text-lg font-medium">Contact us for pricing</p>
                  <Link to="/contact">
                    <Button className="mt-4 bg-white text-gray-900 hover:bg-gray-100">
                      Talk to Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{ backgroundColor: expandedFaq === index ? 'rgb(249, 250, 251)' : 'white' }}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}