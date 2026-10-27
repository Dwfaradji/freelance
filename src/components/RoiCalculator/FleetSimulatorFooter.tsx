'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

interface FleetSimulatorFooterProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  nextLabel?: string;
  estimatedTimeLeft?: string;
}

export default function FleetSimulatorFooter({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  nextLabel = 'Continuer',
  estimatedTimeLeft = '≈ 2 min restantes',
}: FleetSimulatorFooterProps) {
  return (
    <footer className="px-5 sm:px-8 py-4 border-t border-white/10 bg-neutral-950/95 backdrop-blur-md shrink-0 flex items-center justify-between gap-4 relative z-20">
      {/* Bouton Retour */}
      {canGoPrev ? (
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </button>
      ) : (
        <div className="w-16" />
      )}

      {/* Indicateur de temps discret */}
      {estimatedTimeLeft && (
        <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-400">
          <Clock className="w-3.5 h-3.5" />
          <span>{estimatedTimeLeft}</span>
        </div>
      )}

      {/* Bouton Continuer / Valider */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className={`inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-lg ${
          canGoNext
            ? 'bg-secondary-500 hover:bg-secondary-400 text-white shadow-secondary-500/20 hover:scale-[1.02]'
            : 'bg-white/10 text-neutral-400 cursor-not-allowed opacity-50'
        }`}
      >
        <span>{nextLabel}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </footer>
  );
}
