'use client';
import React from 'react';
import PricingHeader from '@/components/Pricing/pricingHeader';
import PricingMain from '@/components/Home/pricing';
import PricingFAQ from '@/components/Pricing/pricingFAQ';
import PricingCTA from '@/components/Pricing/pricingCTA';

const Page = () => {
  return (
    <div>
      <PricingHeader />
      <div className="mt-20">
        <PricingMain />
      </div>
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default Page;
