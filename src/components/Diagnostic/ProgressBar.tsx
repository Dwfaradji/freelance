'use client';

import React from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  dimensionLabel: string;
}

export default function ProgressBar({
  currentIndex,
  totalQuestions,
  dimensionLabel,
}: ProgressBarProps) {
  const percent = Math.min(100, Math.round(((currentIndex + 1) / totalQuestions) * 100));

  return (
    <div className="space-y-2 mb-6">
      <div className="flex items-center justify-between text-xs text-neutral-400">
        <span className="uppercase font-bold text-primary-400 tracking-wider">
          Question {currentIndex + 1} sur {totalQuestions} • {dimensionLabel}
        </span>
        <span className="font-mono text-neutral-300 font-semibold">{percent}% complété</span>
      </div>

      <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-emerald-400 rounded-full"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
