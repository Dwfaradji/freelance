'use client';

import React from 'react';
import { Recommendation } from '@/lib/diagnostic/types';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

interface RoadmapSectionProps {
  roadmap: {
    thirtyDays: Recommendation[];
    threeMonths: Recommendation[];
    sixMonths: Recommendation[];
  };
}

export default function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  const steps = [
    {
      period: '0 – 30 jours',
      badge: 'Sécurisation immédiate',
      badgeClass: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
      items: roadmap.thirtyDays,
      description: 'Résorption des risques critiques et déploiement des actions rapides.',
    },
    {
      period: '1 – 3 mois',
      badge: 'Structuration métier',
      badgeClass: 'text-primary-300 bg-primary-500/10 border-primary-500/20',
      items: roadmap.threeMonths,
      description: 'Remplacement des tableurs, applications mobiles nomades et procédures.',
    },
    {
      period: '3 – 6 mois',
      badge: 'Intégration & Pilotage',
      badgeClass: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
      items: roadmap.sixMonths,
      description: 'Connecteurs API, automatisation des flux et consolidation multi-sites.',
    },
  ];

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
          <Calendar className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xl font-extrabold text-white">Votre feuille de route progressive</h4>
          <p className="text-xs text-neutral-400">
            Un plan d'action réaliste et séquencé dans le temps pour vos équipes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((col, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-sm font-bold text-white">{col.period}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${col.badgeClass}`}>
                  {col.badge}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 mb-4">{col.description}</p>

              {col.items.length === 0 ? (
                <p className="text-xs text-neutral-500 italic">Aucun chantier critique sur cette période.</p>
              ) : (
                <ul className="space-y-2.5 text-xs">
                  {col.items.map((item) => (
                    <li
                      key={item.id}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2 text-neutral-300 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
