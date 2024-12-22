import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Clock, MapPin, Package, Info } from 'lucide-react';

const qrFeatures = [
  {
    icon: Clock,
    title: 'Shipment Time',
    description: 'Track exact shipment departure and arrival times',
  },
  {
    icon: MapPin,
    title: 'Location Tracking',
    description: 'View sender and receiver locations in real-time',
  },
  {
    icon: Package,
    title: 'Product Details',
    description: 'Access comprehensive product information instantly',
  },
  {
    icon: Info,
    title: 'Quality Parameters',
    description: 'Monitor temperature, freshness, and quality metrics',
  },
];

export function DetailedFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              QR Code Integration
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Scan product QR codes to instantly access detailed information about your dairy products. From origin to current location, every detail at your fingertips.
            </p>
            <div className="mt-8">
              <div className="relative w-full max-w-xs mx-auto lg:mx-0">
                <div className="aspect-w-1 aspect-h-1 bg-white rounded-xl shadow-lg p-8">
                  <QrCode className="w-full h-full text-blue-600" />
                </div>
                <motion.div
                  className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-600 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {qrFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative"
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <div className="h-full bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {feature.title}
                        </h3>
                        <AnimatePresence>
                          {hoveredFeature === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 text-sm text-gray-600"
                            >
                              {feature.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}