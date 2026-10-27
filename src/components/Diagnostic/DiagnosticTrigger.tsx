'use client';

import React from 'react';
import { DiagnosticReport } from '@/lib/diagnostic/types';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  Lock,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface DiagnosticTriggerProps {
  onOpen: () => void;
  onReset: () => void;
  hasStarted: boolean;
  hasCompleted: boolean;
  report?: DiagnosticReport;
}

export default function DiagnosticTrigger({
  onOpen,
  onReset,
  hasStarted,
  hasCompleted,
  report,
}: DiagnosticTriggerProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass rounded-3xl p-8 sm:p-12 border border-primary-500/30 shadow-2xl relative overflow-hidden text-center sm:text-left">
        {/* Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Outil d'évaluation interactif • Médico-Social</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {hasCompleted
                ? 'Votre diagnostic est prêt'
                : hasStarted
                ? 'Reprenez votre diagnostic en cours'
                : 'Évaluez votre maturité numérique'}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
              {hasCompleted && report
                ? `Votre score de maturité calculé est de ${report.globalScore}/100 (${report.maturityLevel.label}). Consultez votre synthèse, vos priorités et votre feuille de route personnalisée.`
                : 'Identifiez en quelques minutes vos forces, vos points de vigilance et vos priorités d’action grâce à notre questionnaire guidé étape par étape.'}
            </p>

            {/* Badges de réassurance */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-300">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary-400" />
                ≈ 4 minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                Score & Radar immédiats
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-secondary-400" />
                Aucune donnée usager
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-center sm:items-start lg:items-end">
            <button
              type="button"
              onClick={onOpen}
              className="btn-primary w-full sm:w-auto px-7 py-4 text-sm font-bold flex items-center justify-center gap-2.5 shadow-xl shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>
                {hasCompleted
                  ? 'Consulter mes résultats'
                  : hasStarted
                  ? 'Continuer mon diagnostic'
                  : 'Faire mon diagnostic gratuit'}
              </span>
            </button>

            {hasStarted && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Recommencer à zéro</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
