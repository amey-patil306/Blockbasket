import React from 'react';
import { Hero } from './sections/Hero';
import { CoreFeatures } from './sections/CoreFeatures';
import { DetailedFeatures } from './sections/DetailedFeatures';
import { UseCases } from './sections/UseCases';
import { Comparison } from './sections/Comparison';
import { CallToAction } from './sections/CallToAction';

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <CoreFeatures />
      <DetailedFeatures />
      <UseCases />
      <Comparison />
      <CallToAction />
    </div>
  );
}