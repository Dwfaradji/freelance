'use client';
import Testimonial from '@/components/Home/testimonial';
import Pricing from '@/components/Home/pricing';
import FeaturedBlog from '@/components/Home/featuredBlog';
import FeatureSection from '@/components/Home/featureSection';
import Projects from '@/components/Home/projects';
import Offerings from '@/components/Home/offerings';
import Header from '@/components/Home/header';
import Modal from "@/components/ui/Modal/modal";
import { prices } from "@/data/data";
import React from "react";

const Page = () => {
  return (
    <main>

      <div className="h-auto w-full">
        <Header />
        <FeatureSection />
        <Projects />
        <Offerings />
        <Testimonial />
        <Pricing />
        <FeaturedBlog />

      </div>
    </main>
  );
};

export default Page;
