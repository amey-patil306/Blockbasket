import React from 'react';
import { Hero } from './sections/Hero';
import { Mission } from './sections/Mission';
import { Features } from './sections/Features';
import { Workflow } from './sections/Workflow';
import { Stakeholders } from './sections/Stakeholders';
import { Technologies } from './sections/Technologies';
import { Impact } from './sections/Impact';
import { Team } from './sections/Team';
import { Testimonials } from './sections/Testimonials';
import { CallToAction } from './sections/CallToAction';
import { Navigation } from './components/Navigation';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Features />
        <Workflow />
        <Stakeholders />
        <Technologies />
        <Impact />
        <Team />
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  );
}