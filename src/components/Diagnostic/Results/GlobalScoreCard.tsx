'use client';

import React from 'react';
import { MaturityLevel } from '@/lib/diagnostic/types';
import { Award, BarChart3, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface GlobalScoreCardProps {
  globalScore: number;
  maturityLevel: MaturityLevel;
  customSynthesis: string;
  organizationName?: string;
}

export default function GlobalScoreCard({
  globalScore,
  maturityLevel,
  customSynthesis,
  organizationName,
}: GlobalScoreCardProps) {
  return (
    <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Synthèse textuelle */}
        <div className="space-y-3 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-primary-400" />
            <span>Synthèse d'auto-évaluation médico-sociale</span>
          </div>

          {organizationName && (
            <h4 className="text-sm font-semibold text-primary-300">
              Établissement : {organizationName}
            </h4>
          )}

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Niveau : {maturityLevel.label}
            </h3>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${maturityLevel.color} text-black uppercase tracking-wider shadow`}
            >
              {maturityLevel.badge}
            </span>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
            {maturityLevel.description}
          </p>

          <div className="pt-2 text-xs text-neutral-400 italic border-t border-white/5 leading-relaxed">
            « {customSynthesis} »
          </div>
        </div>

        {/* Chiffre du Score global */}
        <div className="shrink-0 flex flex-col items-center justify-center w-40 h-40 sm:w-44 sm:h-44 rounded-3xl bg-neutral-900/90 border border-primary-500/30 shadow-2xl relative group">
          <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-emerald-400 drop-shadow-[0_4px_16px_rgba(56,189,248,0.3)]">
            {globalScore}
          </div>
          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">
            sur 100
          </div>
          <div className="absolute -bottom-3 px-3 py-0.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-[10px] text-primary-300 font-mono">
            Score global
          </div>
        </div>
      </div>
    </div>
  );
}
