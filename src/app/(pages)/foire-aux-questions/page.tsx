import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import PricingFAQ from '@/components/Pricing/pricingFAQ';
import { Fade } from '@/components/ui/Fade';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LegalNavSwitcher from '@/components/PagesInfo/LegalNavSwitcher';

export default function FoireAuxQuestionsPage() {
  return (
    <div className="overflow-hidden min-h-screen pb-24">
      {/* Fil d'Ariane & Navigation */}
      <Breadcrumb
        items={[{ label: 'Foire Aux Questions (FAQ)' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />
      <LegalNavSwitcher />

      {/* Hero Header */}
      <header className="mx-auto mb-16 mt-8 text-center px-4 max-w-4xl">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs sm:text-sm font-semibold mb-6">
            <HelpCircle className="size-4" />
            <span>Réponses & Accompagnement</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Foire Aux Questions <span className="text-highlight">Solutions & Méthode</span>
          </h1>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Retrouvez les réponses à vos questions sur la conception de logiciels métier sur-mesure, le développement de plateformes SaaS, les applications mobiles nomades, l’hébergement souverain en France et la conformité RGPD.
          </p>
        </Fade>
      </header>

      {/* Main FAQ Accordion Container */}
      <section aria-label="Questions fréquentes" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <PricingFAQ />
      </section>

      {/* Call to action & Direct contact */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass border border-white/10 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold">
              <MessageSquare className="size-3.5 text-primary-400" />
              <span>Vous avez une question spécifique ?</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              DevEvoke est à votre écoute
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
              Chaque entreprise, association ou structure possède des processus uniques. Échangeons directement avec le fondateur pour évaluer la faisabilité et le cadrage de votre projet.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-primary-500/20 hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Poser votre question</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/diagnostic-numerique"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
              >
                Faire le diagnostic gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
