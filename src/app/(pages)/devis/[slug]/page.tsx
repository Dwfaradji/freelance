'use client';

import React from 'react';
import FormulaireDevis from '@/components/SlideDevis/formDevis';
import { prices } from '@/data/data';
import { slugify } from '@/utils/slugify';
import { motion } from 'motion/react';
import { Fade } from 'react-awesome-reveal';

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
  const { slug } = React.use(params);

  const devis = prices.find((devis) => slugify(devis.title) === slug);

  if (!devis) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-center">
        <div className="glass p-12 rounded-3xl border border-white/10">
          <h1 className="text-3xl font-bold text-white mb-4">Devis introuvable</h1>
          <p className="text-muted">La formule que vous cherchez n'existe pas ou plus.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de la page de devis */}
        <header className="text-center mb-16">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <span className="section-label mb-4 inline-block">Demande de devis</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              {devis.title}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-secondary-400 mb-6">
              {devis.subtitle}
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Vous avez fait un excellent choix ! Remplissez le formulaire ci-dessous pour nous parler de votre projet. 
              Notre équipe analysera votre demande et vous recontactera sous 48h.
            </p>
          </Fade>
        </header>

        {/* Conteneur du formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FormulaireDevis hrefLink={'/tarifs'} />
        </motion.div>

      </div>
    </div>
  );
}