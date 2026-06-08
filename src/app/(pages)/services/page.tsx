'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

import ServiceList from '@/components/Services/ServiceList';
import ProcessTimeline from '@/components/Services/ProcessTimeline';

const Page = () => {
  return (
    <>
      <header className="mx-auto mb-16 text-center mt-8 px-4">
        <Fade direction="up" triggerOnce>
          <span className="section-label mb-4 inline-block">Savoir-faire technologique</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Notre expertise{' '}
            <span className="text-gradient drop-shadow-sm">
              e-Santé
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            DevEvoke propose une ingénierie logicielle pointue dédiée à la santé. De l'interopérabilité (HL7) à l'hébergement HDS Zero Trust, nous sécurisons chaque aspect de votre SI Hospitalier.
          </p>
        </Fade>
      </header>

      {/* Détail des services (Glassmorphism Layout) */}
      <ServiceList />

      {/* Méthodologie (Timeline en 7 étapes) */}
      <ProcessTimeline />

      {/* Call to Action Final */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Besoin de sécuriser votre SI ?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Contactez nos architectes pour auditer votre infrastructure, concevoir votre Dossier Patient ou préparer votre certification HDS.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Démarrer mon projet santé →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
