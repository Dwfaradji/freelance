'use client';

import React from 'react';
import { DiagnosticRisk, RiskLevel } from '@/lib/diagnostic/types';
import { AlertCircle, AlertTriangle, ShieldAlert } from 'lucide-react';

interface RiskListProps {
  risks: DiagnosticRisk[];
  riskCounts: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    total: number;
  };
}

export default function RiskList({ risks, riskCounts }: RiskListProps) {
  const getBadgeStyle = (level: RiskLevel) => {
    switch (level) {
      case 'critical':
        return {
          label: 'Critique',
          classes: 'bg-rose-500/15 border-rose-500/40 text-rose-300',
          iconColor: 'text-rose-400',
        };
      case 'high':
        return {
          label: 'Élevé',
          classes: 'bg-amber-500/15 border-amber-500/40 text-amber-300',
          iconColor: 'text-amber-400',
        };
      case 'medium':
        return {
          label: 'Modéré',
          classes: 'bg-yellow-500/15 border-yellow-500/40 text-yellow-300',
          iconColor: 'text-yellow-400',
        };
      default:
        return {
          label: 'Faible',
          classes: 'bg-neutral-500/15 border-neutral-500/40 text-neutral-300',
          iconColor: 'text-neutral-400',
        };
    }
  };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Points de vigilance identifiés</h4>
            <p className="text-xs text-neutral-400">
              Analyse indépendante de vos pratiques actuelles
            </p>
          </div>
        </div>

        {/* Badges de décompte par criticité */}
        <div className="flex items-center gap-2 text-xs">
          {riskCounts.critical > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-medium">
              🔴 {riskCounts.critical} critique{riskCounts.critical > 1 ? 's' : ''}
            </span>
          )}
          {riskCounts.high > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium">
              🟠 {riskCounts.high} élevé{riskCounts.high > 1 ? 's' : ''}
            </span>
          )}
          {riskCounts.medium > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 font-medium">
              🟡 {riskCounts.medium} modéré{riskCounts.medium > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {risks.length === 0 ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
          Aucun point de vigilance critique ou élevé détecté d’après vos réponses. Vos pratiques fondamentales sont bien cadrées.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {risks.map((risk) => {
            const badge = getBadgeStyle(risk.level);
            return (
              <div
                key={risk.id}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${badge.classes}`}
                    >
                      Priorité {badge.label}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold text-white leading-snug mb-1.5">
                    {risk.title}
                  </h5>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {risk.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-xs text-neutral-400 bg-white/[0.02] -mx-5 -mb-5 p-4 rounded-b-2xl">
                  <span className="text-[11px] font-semibold text-primary-300 block mb-0.5">
                    Recommandation métier :
                  </span>
                  <span className="text-neutral-200">{risk.recommendation}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
