'use client';

import React from 'react';
import { Recommendation } from '@/lib/diagnostic/types';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

interface QuickWinsProps {
  quickWins: Recommendation[];
}

export default function QuickWins({ quickWins }: QuickWinsProps) {
  if (quickWins.length === 0) return null;

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Actions rapides à fort impact (« Quick Wins »)</h4>
          <p className="text-xs text-neutral-400">
            Chantiers à résultat rapide avec un effort de mise en œuvre minimal
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
        {quickWins.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Effort faible • Impact rapide
                </span>
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-white leading-snug mb-1">
                {item.title}
              </h5>
              <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                {item.action}
              </p>
            </div>
            <div className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1">
              <span>Horizon immédiat (0–30j)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
