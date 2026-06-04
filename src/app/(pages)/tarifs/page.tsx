'use client';
import React from 'react';
import PricingHeader from '@/components/Pricing/pricingHeader';
import PricingMain from '@/components/Home/pricing';
import PricingFAQ from '@/components/Pricing/pricingFAQ';
import PricingCTA from '@/components/Pricing/pricingCTA';

const Page = () => {
  return (
    <div className="overflow-hidden">
      {/* 
        PricingHeader contains the Page Hero and the Additional Services (Maintenance & Hébergement).
        It is rendered at the top because it has the Hero.
      */}
      <PricingHeader />

      {/* 
        PricingMain contains the large Web Development Plans 
      */}
      <div className="mt-8 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Plans de <span className="text-gradient">Développement</span></h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Des formules conçues pour s'adapter à toutes les ambitions. De la vitrine essentielle à l'application métier complexe.
          </p>
        </div>
        <PricingMain />
      </div>

      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default Page;
