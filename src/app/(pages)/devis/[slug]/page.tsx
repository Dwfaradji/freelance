'use client';

import React from 'react';
import Contact from '@/components/Contact/contact';
import { prices } from '@/data/data';
import { slugify } from '@/utils/slugify';
import { motion } from 'motion/react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

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
          <Link href="/tarifs" className="mt-6 inline-block btn-primary px-6 py-3">
            Retour aux tarifs
          </Link>
        </div>
      </div>
    );
  }

  const prefilledMessage = `Bonjour, je souhaite vous contacter pour démarrer un projet concernant l'offre "${devis.title}".\n\nVoici quelques détails supplémentaires sur mon besoin : `;

  return (
    <div className="relative min-h-[100svh] py-24 md:py-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-primary-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.15] pointer-events-none z-0 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de la page de devis */}
        <header className="text-center mb-16 sm:mb-20">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <Link href="/tarifs" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-8">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Retour aux tarifs
            </Link>
            
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold tracking-wide uppercase mb-4">
                Devis sur-mesure
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Offre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">{devis.title}</span>
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6 max-w-3xl mx-auto">
              {devis.subtitle}
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              Vous avez fait un excellent choix ! Remplissez le formulaire ci-dessous pour nous parler de votre projet. 
              Notre équipe analysera votre demande et vous recontactera sous 48h avec une proposition adaptée.
            </p>
          </Fade>
        </header>

        {/* Conteneur du formulaire unifié */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Composant Contact Réutilisable */}
          <Contact 
            prefilledMessage={prefilledMessage} 
            hideImage={true} 
            title="Votre Demande" 
            subtitle="Parlez-nous de votre projet"
            description="Laissez-nous vos coordonnées et un maximum de détails sur votre projet. Nous reviendrons vers vous très rapidement."
          />
        </motion.div>

        {/* Section de réassurance sous le formulaire */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          <div className="glass p-6 rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4 text-primary-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-white font-bold mb-2">Réponse sous 48h</h3>
            <p className="text-sm text-gray-400">Nous étudions votre projet rapidement pour vous faire un premier retour.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-full bg-secondary-500/20 flex items-center justify-center mx-auto mb-4 text-secondary-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-white font-bold mb-2">Sans Engagement</h3>
            <p className="text-sm text-gray-400">La demande de devis est gratuite et ne vous engage à rien.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 text-green-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            </div>
            <h3 className="text-white font-bold mb-2">Qualité Garantie</h3>
            <p className="text-sm text-gray-400">Notre priorité absolue est la réussite de votre projet.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}