import React from 'react';
import { Target, Eye } from 'lucide-react';
import { SectionContainer } from '../components/SectionContainer';

export function Mission() {
  return (
    <SectionContainer id="mission" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-600">
            To eliminate fraud and inefficiency in the dairy supply chain through 
            blockchain technology, ensuring fair practices and quality products for 
            all stakeholders.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Eye className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-600">
            A future where every drop of milk can be traced to its source, ensuring 
            complete transparency, fair trade, and consumer trust in the dairy industry.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}