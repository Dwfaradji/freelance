'use client';

import React from 'react';
import {
  CalendarCheck,
  CheckCircle2,
  FileText,
  Shield,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export default function OperationalBenefits() {
  const benefits = [
    {
      icon: <CalendarCheck className="w-4 h-4 text-primary-400" />,
      title: 'Suivi centralisé des échéances',
      desc: 'Contrôles techniques, vidanges et révisions planifiés à temps pour éviter les dépassements.',
    },
    {
      icon: <FileText className="w-4 h-4 text-teal-400" />,
      title: 'Justificatifs & carnets dématérialisés',
      desc: 'Fin des tickets perdus et des classeurs papier éparpillés entre plusieurs sites.',
    },
    {
      icon: <Smartphone className="w-4 h-4 text-cyan-400" />,
      title: 'Remontées terrain simplifiées',
      desc: 'Les conducteurs signalent les anomalies ou kilométrages directement depuis leur smartphone.',
    },
    {
      icon: <Shield className="w-4 h-4 text-emerald-400" />,
      title: 'Meilleure traçabilité du parc',
      desc: 'Historique clair des usages, attributions et états des véhicules en cas de contrôle ou litige.',
    },
  ];

  return (
    <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-primary-400" />
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
          Bénéfices opérationnels & conformité
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">{item.title}</h5>
              <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
