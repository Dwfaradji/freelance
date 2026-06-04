'use client';
import React from 'react';
import { pageInfosProcess } from '@/data/data';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'motion/react';
import Link from 'next/link';

const icons = [
  // Étape 1 : Compréhension
  <svg key="1" className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  // Étape 2 : Analyse
  <svg key="2" className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  // Étape 3 : Conception
  <svg key="3" className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  // Étape 4 : Développement
  <svg key="4" className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  // Étape 5 : Tests
  <svg key="5" className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // Étape 6 : Livraison
  <svg key="6" className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  // Étape 7 : Maintenance
  <svg key="7" className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
];

const ProcessPage = () => {
  // Enlève le premier élément qui est juste le grand titre (titleH1), et le dernier élément (conclusion) pour les étapes
  const titleObj = pageInfosProcess[0];
  const steps = pageInfosProcess.slice(1, pageInfosProcess.length - 1);
  const conclusion = pageInfosProcess[pageInfosProcess.length - 1];

  return (
    <div className="overflow-hidden pb-24">
      {/* Hero Header */}
      <header className="mx-auto mb-20 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Méthodologie</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            Notre Processus de{' '}
            <span className="text-gradient drop-shadow-sm">
              Réalisation
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            De l'idée initiale à la mise en ligne, découvrez comment nous transformons vos ambitions en produits digitaux performants à travers une approche structurée et transparente.
          </p>
        </Fade>
      </header>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Ligne verticale (Timeline) au centre pour Desktop, à gauche pour Mobile */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/0 via-primary-500/20 to-primary-500/0 transform md:-translate-x-1/2 hidden sm:block" />

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const stepNumber = index + 1;
            // On nettoie le titre (ex: "Étape 1 : Compréhension...")
            const cleanTitle = step.title?.replace(/^Étape \d+\s*:\s*/i, '') || '';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Contenu (Texte) */}
                <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end text-left md:text-right' : 'md:justify-start text-left'}`}>
                  <div className={`glass rounded-3xl p-8 border border-white/5 shadow-xl max-w-md relative group hover:border-primary-500/30 hover:glass-strong transition-all duration-300 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                      {cleanTitle}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Point central (Icon) */}
                <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-14 rounded-full bg-surface border border-primary-500/30 shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10 hidden sm:flex">
                  {icons[index] || icons[0]}
                </div>
                
                {/* Espace vide pour l'alignement sur l'autre côté (Desktop) */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Conclusion & CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
        <Fade direction="up" triggerOnce>
          <div className="glass rounded-3xl p-10 sm:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">
              {conclusion?.title || "Prêt à démarrer ?"}
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
              {conclusion?.text || "Notre objectif est de créer une expérience fluide et professionnelle."}
            </p>
            <Link href="/contact" className="btn-primary inline-flex relative z-10">
              Parlez-nous de votre projet
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProcessPage;
