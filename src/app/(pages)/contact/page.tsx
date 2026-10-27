'use client';

import React from 'react';
import Link from 'next/link';
import Contact from '@/components/Contact/contact';
import { Fade } from '@/components/ui/Fade';

const Page = () => {
  return (
    <div className="overflow-hidden min-h-screen pt-20 pb-24">
      <header className="mx-auto mb-16 mt-8 text-center px-4 max-w-4xl">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">
            Échange Direct avec le Fondateur
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Concevons ensemble la{' '}
            <span className="text-highlight">
              solution digitale
            </span>{' '}
            pensée pour votre métier
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Entreprises, TPE, PME, startups, associations ou structures médico-sociales : échangez directement avec le fondateur et développeur pour cadrer votre projet de logiciel métier, d’application mobile, de plateforme SaaS ou d’automatisation.
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
            href="/realisations"
            className="p-5 rounded-2xl glass border border-white/5 hover:border-secondary-500/30 hover:bg-white/5 transition-all group"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary-400 block mb-1">
              Savoir-faire
            </span>
            <span className="text-sm font-bold text-white group-hover:text-secondary-300 transition-colors">
              Nos Réalisations →
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
