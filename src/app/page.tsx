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
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';
import NewsLetters from '@/components/ui/Newsletters/newsLetters';

const Page = () => {
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <main className={'mx-auto md:container'}>
        <div className=" h-auto w-full">
          <Header />
          <FeatureSection />
          <Projects />
          <Offerings />
          <Pricing />
          <div className="mx-auto mt-8 max-w-7xl px-6 text-center lg:block">
            <Link href={'/tarifs'}>
              <Button
                colorClass="bg-gradient-to-r from-pink to-purple "
                title="Voir Nos Tarifs"
                textColor="text-white text-xl"
              ></Button>
            </Link>
          </div>
          <FeaturedTemplate />
          <Testimonial />
          <NewsLetters />
        </div>
      </main>
    </MyProvider>
  );
};

export default Page;
