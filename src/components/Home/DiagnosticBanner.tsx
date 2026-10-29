import React from 'react';
import Link from 'next/link';
import { BarChart3, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function DiagnosticBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 border border-primary-500/30 shadow-[0_0_80px_rgba(59,130,246,0.15)] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                Outil Gratuit Décideurs &amp; Dirigeants
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Quel est le niveau de{' '}
                <span className="text-highlight">
                  maturité numérique
                </span>{' '}
                de votre organisation ?
              </h2>

              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
                Répondez à quelques questions concrètes sur vos outils internes, vos processus terrain et votre gestion administrative. Obtenez votre score instantané et un plan d’action priorisé.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-400" />
                  3 minutes chrono
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Résultat sans inscription
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary-400" />
                  100% confidentiel
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <Link
                href="/diagnostic-numerique"
                className="btn-primary text-center justify-center text-sm sm:text-base py-4 px-8 shadow-xl shadow-primary-500/20"
              >
                <span>Lancer le diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-center justify-center text-xs sm:text-sm py-3 px-6"
              >
                Parler directement à un architecte logiciel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
