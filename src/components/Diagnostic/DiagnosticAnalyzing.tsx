'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface DiagnosticAnalyzingProps {
  onFinish: () => void;
}

export default function DiagnosticAnalyzing({ onFinish }: DiagnosticAnalyzingProps) {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'Évaluation des 6 dimensions de maturité...',
    'Détection des points de vigilance & risques...',
    'Génération de votre plan d’action personnalisé...',
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStepIndex(1), 350);
    const timer2 = setTimeout(() => setStepIndex(2), 700);
    const finishTimer = setTimeout(() => onFinish(), 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 sm:p-12 my-auto max-w-xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Pulsing circle graphic */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary-500/20 animate-ping opacity-40" />
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary-600 to-cyan-400 p-0.5 shadow-2xl shadow-primary-500/30">
          <div className="w-full h-full bg-neutral-950 rounded-2xl flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Calcul en cours</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Analyse de vos réponses...
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
          Nous calculons votre niveau de maturité, identifions vos points de vigilance et formalisons vos priorités d'action.
        </p>
      </div>

      {/* Checklist items */}
      <div className="w-full max-w-sm space-y-2.5 text-left text-xs bg-neutral-900/60 p-4 rounded-2xl border border-white/5">
        {steps.map((text, idx) => {
          const isDone = idx < stepIndex;
          const isCurrent = idx === stepIndex;

          return (
            <div
              key={idx}
              className={`flex items-center gap-2.5 transition-colors duration-200 ${
                isDone
                  ? 'text-emerald-300'
                  : isCurrent
                  ? 'text-white font-semibold'
                  : 'text-neutral-400'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : isCurrent ? (
                <div className="w-4 h-4 rounded-full border-2 border-primary-400 border-t-transparent animate-spin shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-neutral-700 shrink-0" />
              )}
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
