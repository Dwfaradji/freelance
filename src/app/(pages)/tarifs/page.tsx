'use client';
import React from 'react';
import PricingHeader from '@/components/Pricing/pricingHeader';
import PricingMain from '@/components/Home/pricing';
import PricingFAQ from '@/components/Pricing/pricingFAQ';
import PricingCTA from '@/components/Pricing/pricingCTA';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

const Page = () => {
  return (
    <div>
      <PricingHeader />
      <div className="mt-20">
        <PricingMain />
      </div>
      <div className=" mt-6 text-center">
        <Link href={'/foire-aux-questions'}>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple  "
            title="Consulter la F.A.Q"
            textColor="text-gradient text-xl"
          ></Button>
        </Link>
      </div>
      <PricingCTA />
    </div>
  );
};

export default Page;
