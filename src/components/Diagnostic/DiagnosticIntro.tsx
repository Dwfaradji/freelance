'use client';

import React from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Lock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface DiagnosticIntroProps {
  onStart: () => void;
}

export default function DiagnosticIntro({ onStart }: DiagnosticIntroProps) {
  return (
    <div className="glass rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-center sm:text-left">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto sm:mx-0">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Diagnostic Gratuit & Indépendant • Secteur Médico-Social</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Évaluez la maturité numérique de votre établissement
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
          Identifiez en quelques minutes vos forces, vos risques et les priorités numériques de votre organisation. Obtenez une feuille de route concrète avant toute démarche commerciale.
        </p>

        {/* 5 Points de réassurance clés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 text-left">
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white">Environ 4 minutes</p>
              <p className="text-[11px] text-neutral-400">≈ 17 à 20 questions selon votre profil</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
            <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white">Résultat immédiat</p>
              <p className="text-[11px] text-neutral-400">Score, radar et plan d'action sans inscription</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white">Strictement confidentiel</p>
              <p className="text-[11px] text-neutral-400">Aucune donnée usager requise ni collectée</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={onStart}
            className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary-500/25 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Commencer mon diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-xs text-neutral-400">
            Gratuit • Sans engagement • Pensé pour IME, SESSAD, ESAT, EHPAD et Associations
          </span>
        </div>
      </div>
    </div>
  );
}
