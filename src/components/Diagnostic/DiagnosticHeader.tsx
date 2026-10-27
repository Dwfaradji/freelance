'use client';

import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface DiagnosticHeaderProps {
  currentStepNumber: number;
  totalStepsCount: number;
  currentPhaseKey: 'profile' | 'organization' | 'businessTools' | 'data' | 'security' | 'results' | 'report';
  onCloseRequest: () => void;
  showCloseButton?: boolean;
}

export default function DiagnosticHeader({
  currentStepNumber,
  totalStepsCount,
  currentPhaseKey,
  onCloseRequest,
  showCloseButton = true,
}: DiagnosticHeaderProps) {
  const percent = totalStepsCount > 0 ? Math.min(100, Math.round((currentStepNumber / totalStepsCount) * 100)) : 0;

  const phases: Array<{ key: string; label: string }> = [
    { key: 'profile', label: 'Profil' },
    { key: 'organization', label: 'Organisation' },
    { key: 'businessTools', label: 'Outils' },
    { key: 'data', label: 'Données' },
    { key: 'security', label: 'Sécurité' },
    { key: 'results', label: 'Résultats' },
  ];

  return (
    <header className="px-4 sm:px-8 pt-[max(1rem,env(safe-area-inset-top))] pb-3.5 border-b border-white/10 bg-neutral-900/95 backdrop-blur-md shrink-0 flex flex-col gap-3 relative z-20">
      <div className="flex items-center justify-between gap-4">
        {/* Brand & Module title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black text-white tracking-tight uppercase flex items-center gap-1.5">
              <span>DevEvoke</span>
              <span className="text-primary-400 font-normal">•</span>
              <span className="text-neutral-300 font-medium normal-case">Diagnostic médico-social</span>
            </span>
            <span className="text-[10px] text-neutral-400">
              {currentPhaseKey === 'results' || currentPhaseKey === 'report' ? (
                <span className="text-emerald-400 font-medium">Restitution & Recommandations</span>
              ) : (
                <span>Étape {currentStepNumber} sur {totalStepsCount}</span>
              )}
            </span>
          </div>
        </div>

        {/* Phase navigation indicator (desktop only) */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-neutral-400">
          {phases.map((phase, idx) => {
            const isActive = currentPhaseKey === phase.key;
            return (
              <React.Fragment key={phase.key}>
                <span
                  className={`px-2 py-0.5 rounded-lg transition-colors text-[11px] ${
                    isActive
                      ? 'bg-primary-500/20 text-primary-300 font-semibold border border-primary-500/30'
                      : 'text-neutral-400'
                  }`}
                >
                  {phase.label}
                </span>
                {idx < phases.length - 1 && <span className="text-neutral-400 text-[10px]">→</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Close button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onCloseRequest}
            aria-label="Fermer le diagnostic"
            className="size-11 min-h-[44px] min-w-[44px] rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-emerald-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  );
}
