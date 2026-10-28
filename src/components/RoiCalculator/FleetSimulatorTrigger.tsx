'use client';

import React from 'react';
import { FullFleetSimulationResult } from '@/lib/roi/types';
import { ArrowRight, Calculator, CheckCircle2, RotateCcw, Zap } from 'lucide-react';

interface FleetSimulatorTriggerProps {
  onOpen: () => void;
  onReset: () => void;
  hasStarted: boolean;
  simulation: FullFleetSimulationResult;
}

export default function FleetSimulatorTrigger({
  onOpen,
  onReset,
  hasStarted,
  simulation,
}: FleetSimulatorTriggerProps) {
  return (
    <div className="glass rounded-3xl p-6 sm:p-10 border border-secondary-500/30 shadow-2xl relative overflow-hidden text-left my-4">
      {/* Halo lumineux */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs uppercase font-mono font-bold text-secondary-400 tracking-wider px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20">
              Outil interactif • Floticar
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span>Simulation en 2 minutes</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Simulateur de gains & retour sur investissement
          </h3>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Évaluez concrètement le temps administratif et les dépenses que votre structure pourrait économiser grâce à une gestion dématérialisée et automatisée de votre parc de véhicules.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Heures administratives divisées</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-secondary-400 shrink-0" />
              <span>Alertes CT & révisions</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
              <span>Amortissement calculé</span>
            </div>
          </div>
        </div>

        {/* Bloc d'action / Aperçu */}
        <div className="w-full lg:w-auto shrink-0 flex flex-col items-stretch lg:items-end gap-3.5">
          {hasStarted ? (
            <div className="p-5 rounded-2xl bg-neutral-900/90 border border-secondary-500/30 text-left space-y-3 min-w-[280px]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-400 font-medium">Votre simulation</span>
                <span className="text-[10px] font-mono font-bold text-secondary-300 px-2 py-0.5 rounded bg-secondary-500/15">
                  {simulation.inputs.vehicles} véhicules
                </span>
              </div>
              <div>
                <div className="text-3xl font-black text-white font-mono">
                  +{simulation.annualGrossSaving.toLocaleString('fr-FR')} €
                </div>
                <div className="text-xs text-secondary-300 font-medium">
                  d'économies estimées / an
                </div>
              </div>
              <div className="pt-1 flex gap-2">
                <button
                  type="button"
                  onClick={onOpen}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-secondary-500 hover:bg-secondary-400 text-white font-bold text-xs transition-colors cursor-pointer text-center"
                >
                  Consulter mes résultats
                </button>
                <button
                  type="button"
                  onClick={onReset}
                  title="Recommencer la simulation"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-center lg:text-right">
              <button
                type="button"
                onClick={onOpen}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-secondary-500 hover:bg-secondary-400 text-white font-black text-sm sm:text-base transition-all duration-200 shadow-xl shadow-secondary-500/25 hover:scale-[1.02] cursor-pointer"
              >
                <Calculator className="w-5 h-5" />
                <span>Estimer mes économies de flotte</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="text-[11px] text-neutral-400">
                100% anonyme • Aucun formulaire commercial obligatoire
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
