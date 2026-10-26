'use client';

import React from 'react';
import Link from 'next/link';
import Contact from '@/components/Contact/contact';
import { Fade } from 'react-awesome-reveal';

const Page = () => {
  return (
    <div className="overflow-hidden min-h-screen pt-20 pb-24">
      <header className="mx-auto mb-16 mt-8 text-center px-4 max-w-4xl">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">
            Votre Projet Médico-Social
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Concevons ensemble la{' '}
            <span className="text-highlight">
              solution numérique
            </span>{' '}
            de votre établissement
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Associations gestionnaires, IME, SESSAD, ESAT, EHPAD, MAS, FAM : échangez directement avec nos architectes logiciels pour cadrer votre projet de logiciel métier, d’application mobile nomade ou le déploiement de Floticar.
          </p>
        </Fade>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Contact />
      </div>

      {/* Quick Links Section */}
      <section aria-label="Ressources complémentaires" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <Link
            href="/foire-aux-questions"
            className="p-5 rounded-2xl glass border border-white/5 hover:border-primary-500/30 hover:bg-white/5 transition-all group"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-400 block mb-1">
              Des questions ?
            </span>
            <span className="text-sm font-bold text-white group-hover:text-primary-300 transition-colors">
              Consulter notre FAQ →
            </span>
          </Link>

          <Link
            href="/demande-demo"
            className="p-5 rounded-2xl glass border border-white/5 hover:border-secondary-500/30 hover:bg-white/5 transition-all group"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-400 block mb-1">
              Floticar
            </span>
            <span className="text-sm font-bold text-white group-hover:text-secondary-300 transition-colors">
              Démonstration 14 jours →
            </span>
          </Link>

          <Link
            href="/diagnostic-numerique"
            className="p-5 rounded-2xl glass border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-all group"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
              Auto-évaluation
            </span>
            <span className="text-sm font-bold text-white group-hover:text-accent transition-colors">
              Diagnostic gratuit (3 min) →
            </span>
          </Link>

          <Link
            href="/tarifs"
            className="p-5 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 hover:bg-white/5 transition-all group"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              Budgets & forfaits
            </span>
            <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Consulter nos tarifs →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
