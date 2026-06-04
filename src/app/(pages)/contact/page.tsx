'use client';
import React from 'react';
import Contact from '@/components/Contact/contact';
import { Fade } from 'react-awesome-reveal';

const Page = () => {
  return (
    <div className="overflow-hidden">
      <header className="mx-auto mb-16 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Contact</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Travaillons{' '}
            <span className="text-gradient drop-shadow-sm">
              ensemble
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Prêt à concrétiser vos idées ? Laissez-nous un message et découvrez comment nous pouvons transformer votre vision en réalité.
          </p>
        </Fade>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
