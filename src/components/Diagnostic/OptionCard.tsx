'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface OptionCardProps {
  id: string;
  label: string;
  detail?: string;
  badge?: string;
  isSelected: boolean;
  onSelect: () => void;
  indexKey?: string | number;
}

export default function OptionCard({
  label,
  detail,
  badge,
  isSelected,
  onSelect,
  indexKey,
}: OptionCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onSelect}
      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 group flex items-start gap-3.5 sm:gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 select-none ${
        isSelected
          ? 'bg-primary-500/15 border-primary-500 text-white shadow-lg shadow-primary-500/15 scale-[1.01]'
          : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:bg-neutral-800/80 hover:border-white/20 hover:scale-[1.005]'
      }`}
    >
      {/* Indicator icon / badge */}
      <div
        className={`w-7 h-7 rounded-xl shrink-0 mt-0.5 border flex items-center justify-center font-bold text-xs transition-colors duration-150 ${
          isSelected
            ? 'border-primary-400 bg-primary-500 text-white shadow-sm'
            : 'border-white/20 bg-black/40 text-neutral-400 group-hover:border-primary-400/60 group-hover:text-white'
        }`}
      >
        {isSelected ? (
          <CheckCircle2 className="w-4 h-4 text-white" />
        ) : (
          <span>{indexKey ?? '○'}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p
            className={`text-sm sm:text-base font-semibold leading-snug ${
              isSelected ? 'text-white font-bold' : 'text-neutral-200 group-hover:text-primary-300'
            } transition-colors`}
          >
            {label}
          </p>
          {badge && (
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 border ${
                isSelected
                  ? 'bg-primary-500/20 text-primary-200 border-primary-500/30'
                  : 'bg-white/5 text-neutral-400 border-white/10'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {detail && (
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            {detail}
          </p>
        )}
      </div>
    </button>
  );
}
