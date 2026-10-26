'use client';
import React from 'react';
import Link from 'next/link';

import AboutHeader from '@/components/About/aboutHeader';
import AboutMore from '@/components/About/aboutMore';
import TeamSection from '@/components/About/team';
import AboutGrid from '@/components/About/aboutGrid';
import { AboutMethodology, AboutSecurity } from '@/components/About/aboutFeatures';

const Page = () => {
  return (
    <>
      <AboutHeader />
      <AboutMethodology />
      <AboutSecurity />
      <AboutMore />
      <TeamSection />
      <AboutGrid />
      
      {/* Call to Action Final */}
      <section className="py-24 px-4 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à moderniser vos outils numériques médico-sociaux ?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Échangeons sur vos défis d&apos;organisation, de coordination et de gestion. Découvrez comment DevEvoke conçoit des solutions numériques sur-mesure adaptées à vos équipes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex">
              Parler de votre projet →
            </Link>
            <Link href="/agence-digitale-medico-social" className="btn-secondary inline-flex">
              Notre expertise médico-sociale
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
