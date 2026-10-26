'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

import ServiceList from '@/components/Services/ServiceList';
import ProcessTimeline from '@/components/Services/ProcessTimeline';

const Page = () => {
  return (
    <>
      <header className="mx-auto mb-16 text-center mt-8 px-4 max-w-4xl">
        <Fade direction="up" triggerOnce>
          <span className="section-label mb-4 inline-block">Ingénierie & Transformation Numérique</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nos Services{' '}
            <span className="text-highlight">
              Médico-Sociaux
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            DevEvoke accompagne les associations gestionnaires, IME, SESSAD, ESAT et EHPAD dans la conception d’outils numériques performants : logiciels métiers sur-mesure, applications mobiles nomades, gestion de flotte automobile (Floticar) et automatisations administratives.
          </p>
        </Fade>
      </header>

      {/* Détail des services (Glassmorphism Layout) */}
      <ServiceList />

      {/* Méthodologie (Timeline en étapes) */}
      <ProcessTimeline />

      {/* Call to Action Final */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
          <span className="section-label mb-3 inline-block">Échangeons sur vos besoins</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Un projet numérique pour votre établissement ?
          </h2>
          <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Échangez directement avec nos architectes logiciels pour cadrer votre besoin, évaluer la faisabilité technique et recevoir une proposition adaptée à votre budget associatif.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex text-sm font-semibold">
              Parler de votre projet →
            </Link>
            <Link href="/diagnostic-numerique" className="btn-outline inline-flex text-sm font-medium">
              Diagnostic numérique gratuit (3 min)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
