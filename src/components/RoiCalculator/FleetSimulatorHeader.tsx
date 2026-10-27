'use client';

import React from 'react';
import { Car, X } from 'lucide-react';

interface FleetSimulatorHeaderProps {
  currentStepNumber: number;
  totalStepsCount: number;
  onCloseRequest: () => void;
  showCloseButton?: boolean;
}

export default function FleetSimulatorHeader({
  currentStepNumber,
  totalStepsCount,
  onCloseRequest,
  showCloseButton = true,
}: FleetSimulatorHeaderProps) {
  const progressPercent = Math.min(
    100,
    Math.max(5, Math.round((currentStepNumber / totalStepsCount) * 100))
  );

  return (
    <header className="px-4 sm:px-8 pt-[max(1rem,env(safe-area-inset-top))] pb-3.5 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md shrink-0 relative z-20">
      <div className="flex items-center justify-between gap-4">
        {/* Identité Marque Floticar */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-secondary-500/15 border border-secondary-500/30 text-secondary-400 flex items-center justify-center shrink-0 shadow-inner">
            <Car className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-white tracking-wide">
                Floticar
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-xs text-neutral-300 font-medium">
                Simulateur de gains
              </span>
            </div>
            <div className="text-[11px] text-neutral-400 font-mono">
              Étape {currentStepNumber} sur {totalStepsCount}
            </div>
          </div>
        </div>

        {/* Bouton de Fermeture */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onCloseRequest}
            aria-label="Fermer le simulateur"
            className="size-11 min-h-[44px] min-w-[44px] rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Barre de progression fine */}
      <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-secondary-500 via-primary-500 to-emerald-400 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
}
