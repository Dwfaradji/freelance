import React from 'react';
import Link from 'next/link';
import { BarChart3, Calendar, ArrowRight } from 'lucide-react';

const PricingCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden mb-16">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
        <span className="section-label mb-4 inline-block">Cadrage Budgétaire & Accompagnement</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Besoin d’aide pour dimensionner votre projet ?
        </h2>
        <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Chaque association ou établissement médico-social dispose de contraintes propres (nombre de sites, tournées terrain, taille de flotte). Évaluez vos priorités grâce à notre outil d’auto-évaluation ou réservez un échange de cadrage gratuit de 30 minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/diagnostic-numerique" className="btn-primary inline-flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            <span>Faire le diagnostic gratuit (3 min)</span>
          </Link>
          <Link href="/demande-demo" className="btn-outline inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Démonstration Floticar</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
