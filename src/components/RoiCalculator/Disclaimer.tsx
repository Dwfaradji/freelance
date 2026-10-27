'use client';

import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-neutral-400 leading-relaxed flex items-start gap-2.5">
      <ShieldAlert className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
      <p>
        <strong>Avertissement :</strong> Les résultats de ce simulateur sont des estimations basées sur les informations renseignées et sur les hypothèses du scénario sélectionné. Ils ne constituent pas une garantie d’économies. Les résultats réels peuvent varier selon la composition du parc, les usages, l’organisation interne et l’utilisation effective de Floticar.
      </p>
    </div>
  );
}
