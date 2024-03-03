'use client';
import Testimonial from '@/components/Home/testimonial';
import Pricing from '@/components/Home/pricing';
import FeaturedTemplate from '@/components/Home/featuredTemplate';
import FeatureSection from '@/components/Home/featureSection';
import Projects from '@/components/Home/projects';
import Offerings from '@/components/Home/offerings';
import Header from '@/components/Home/header';
import React from 'react';
import { MyProvider } from '@/context/context';
import { initialState, reducer } from '@/context/reducer';

const Page = () => {
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <main>
        <div className="h-auto w-full">
          <Header />
          <FeatureSection />
          <Projects />
          <Offerings />
          <Testimonial />
          <Pricing />
          <FeaturedTemplate />
        </div>
      </main>
    </MyProvider>
  );
};

export default Page;
