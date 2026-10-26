import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-primary-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold">
          <Calendar className="size-3.5" />
          <span>Échange de Cadrage Sans Engagement</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Parlons de votre projet numérique
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Que vous ayez un cahier des charges précis, un besoin d'automatisation ou simplement l'envie de moderniser vos outils, échangeons lors d'un atelier préalable de 30 minutes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl shadow-primary-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Planifier un échange de cadrage</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/diagnostic-numerique"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all text-center"
          >
            Faire le diagnostic numérique d'abord
          </Link>
        </div>

        {/* Guarantees */}
        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-neutral-400">
          <span>• Réponse garantie sous 24 à 48h ouvrées</span>
          <span>• Confidentialité stricte des échanges (NDA)</span>
          <span>• Accompagnement par un architecte logiciel</span>
        </div>
      </div>
    </section>
  );
}
