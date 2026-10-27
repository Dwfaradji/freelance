'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

interface DiagnosticFooterProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  estimatedTimeLeft?: string;
  nextButtonLabel?: string;
  prevButtonLabel?: string;
}

export default function DiagnosticFooter({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  isLastQuestion,
  estimatedTimeLeft,
  nextButtonLabel,
  prevButtonLabel = 'Retour',
}: DiagnosticFooterProps) {
  return (
    <footer className="px-5 sm:px-8 py-3.5 border-t border-white/10 bg-neutral-900/95 backdrop-blur-md shrink-0 flex items-center justify-between gap-4 relative z-20 pb-[max(0.875rem,env(safe-area-inset-bottom))]">
      {/* Bouton Retour */}
      {canGoPrev ? (
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 rounded-lg px-2.5 py-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{prevButtonLabel}</span>
        </button>
      ) : (
        <div className="w-16" />
      )}

      {/* Temps restant indicatif */}
      {estimatedTimeLeft && (
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400">
          <Clock className="w-3.5 h-3.5 text-primary-400 shrink-0" />
          <span>{estimatedTimeLeft}</span>
        </div>
      )}

      {/* Bouton Continuer / Terminer */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-primary-500/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        <span>
          {nextButtonLabel
            ? nextButtonLabel
            : isLastQuestion
            ? 'Voir mon diagnostic'
            : 'Continuer'}
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </footer>
  );
}
