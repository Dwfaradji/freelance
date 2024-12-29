'use client';
import React from 'react';
import Contact from '@/components/Contact/contact';
import { Fade } from 'react-awesome-reveal';

const Page = () => {
  return (
    <header>
      <h2 className="text-sm text-white opacity-50">Contact</h2>
      <Fade cascade direction="up" triggerOnce>
        <h1 className="mt-2 bg-gradient-to-t from-pink to-purple font-poppins text-2xl font-bold text-gradient lg:text-4xl xl:text-7xl">
          Travaillons ensemble
        </h1>
      </Fade>
      <Contact />
    </header>
  );
};

export default Page;
