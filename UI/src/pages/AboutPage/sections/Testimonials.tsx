import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "BlockBasket has revolutionized how we manage our dairy supply chain. The transparency and efficiency gains are remarkable.",
    author: "John Smith",
    role: "Dairy Farm Owner",
    company: "Smith Family Farms",
    rating: 5,
  },
  {
    content: "The real-time tracking and quality monitoring features have helped us maintain the highest standards in our distribution network.",
    author: "Maria Garcia",
    role: "Operations Manager",
    company: "Fresh Dairy Logistics",
    rating: 5,
  },
  {
    content: "As a retailer, the ability to instantly verify product authenticity and trace its journey has been invaluable for our business.",
    author: "Robert Chen",
    role: "Store Manager",
    company: "Quality Foods Market",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <SectionContainer id="testimonials" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          What Our Users Say
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Real experiences from our valued partners
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-600 mb-6">
              "{testimonial.content}"
            </blockquote>
            <div className="border-t pt-4">
              <div className="font-semibold text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-sm text-gray-600">
                {testimonial.role}
              </div>
              <div className="text-sm text-blue-600">
                {testimonial.company}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}