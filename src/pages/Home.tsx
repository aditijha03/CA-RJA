import React from 'react';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Industries } from '../sections/Industries';
import { SuccessMetrics } from '../sections/SuccessMetrics';
import { Testimonials } from '../sections/Testimonials';
import { Insights } from '../sections/Insights';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Editorial Hero Section */}
      <Hero />

      {/* Corporate Services directory */}
      <Services />

      {/* About Manifesto Block */}
      <WhyChooseUs />

      {/* Interactive Markets/Industries Section */}
      <Industries />

      {/* Success Metrics & Dashboard Section */}
      <SuccessMetrics />

      {/* Testimonials & Endorsements Section */}
      <Testimonials />

      {/* Insights Publications Section */}
      <Insights />


    </div>
  );
};
