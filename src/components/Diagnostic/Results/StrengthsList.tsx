'use client';

import React from 'react';
import { Strength } from '@/lib/diagnostic/types';
import { Award, CheckCircle2 } from 'lucide-react';

interface StrengthsListProps {
  strengths: Strength[];
}

export default function StrengthsList({ strengths }: StrengthsListProps) {
  if (strengths.length === 0) return null;

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Vos principaux points forts</h4>
          <p className="text-xs text-neutral-400">Socles opérationnels et pratiques déjà bien installés</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
        {strengths.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-white/[0.02] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">{item.title}</h5>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.description}</p>
            </div>
            <div className="pt-3 mt-3 border-t border-white/5">
              <span className="text-[10px] text-emerald-400 font-mono font-medium">✓ Acquis solide</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
