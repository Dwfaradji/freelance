'use client';

import React from 'react';
import { Recommendation } from '@/lib/diagnostic/types';
import { ArrowRight, CheckCircle2, Flame, Target } from 'lucide-react';

interface TopPrioritiesProps {
  priorities: Recommendation[];
}

export default function TopPriorities({ priorities }: TopPrioritiesProps) {
  if (priorities.length === 0) return null;

  const formatHorizon = (horizon: Recommendation['horizon']) => {
    switch (horizon) {
      case '30-days':
        return 'Horizon : 0 – 30 jours';
      case '3-months':
        return 'Horizon : 1 – 3 mois';
      case '6-months':
        return 'Horizon : 3 – 6 mois';
    }
  };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-primary-500/30 space-y-6 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
          <Target className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xl font-extrabold text-white">Vos 3 priorités d'action</h4>
          <p className="text-xs text-neutral-400">
            Hiérarchisées selon l'impact organisationnel, l'urgence et l'effort de mise en œuvre
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {priorities.map((item, index) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-primary-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
          >
            <div>
              {/* Badge numéro & horizon */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="w-6 h-6 rounded-lg bg-primary-500 text-white font-black text-xs flex items-center justify-center shadow-md shadow-primary-500/30">
                  {index + 1}
                </span>
                <span className="text-[11px] font-mono text-primary-300 bg-primary-500/10 px-2 py-0.5 rounded-full border border-primary-500/20">
                  {formatHorizon(item.horizon)}
                </span>
              </div>

              <h5 className="text-sm font-bold text-white group-hover:text-primary-300 transition-colors leading-snug mb-2">
                {item.title}
              </h5>

              {/* Métriques Impact / Effort */}
              <div className="flex items-center gap-2 text-[10px] text-neutral-400 mb-3">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                  Impact : {item.impact >= 4 ? 'Très élevé' : 'Élevé'}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                  Effort : {item.effort <= 2 ? 'Faible' : item.effort === 3 ? 'Modéré' : 'Structurant'}
                </span>
              </div>

              {/* Pourquoi ? */}
              <div className="text-xs text-neutral-300 mb-3 leading-relaxed">
                <span className="font-semibold text-white block text-[11px] mb-0.5">
                  Pourquoi cette priorité ?
                </span>
                {item.description}
              </div>
            </div>

            {/* Action recommandée */}
            <div className="pt-3 border-t border-white/5 text-xs text-neutral-300 bg-black/40 -mx-5 -mb-5 p-4 rounded-b-2xl">
              <span className="font-semibold text-emerald-400 text-[11px] block mb-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Action concrète recommandée :
              </span>
              <p className="text-neutral-200 leading-snug">{item.action}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
