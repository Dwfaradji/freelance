'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface SimulatorOptionCardProps {
  label: string;
  description?: string;
  badge?: string;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  isMultiSelect?: boolean;
}

export default function SimulatorOptionCard({
  label,
  description,
  badge,
  selected,
  onClick,
  disabled = false,
  className = '',
  isMultiSelect = false,
}: SimulatorOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      role={isMultiSelect ? 'checkbox' : 'radio'}
      aria-checked={selected}
      className={`group w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-secondary-400/50 ${
        selected
          ? 'bg-secondary-500/10 border-secondary-400/80 shadow-[0_0_25px_rgba(14,165,233,0.18)]'
          : 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 hover:border-white/20'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 pr-2">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={`text-sm sm:text-base font-bold transition-colors ${
                selected ? 'text-white' : 'text-neutral-200 group-hover:text-white'
              }`}
            >
              {label}
            </span>
            {badge && (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-secondary-500/15 border border-secondary-500/30 text-secondary-300">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-neutral-400 group-hover:text-neutral-300 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Check Indicator */}
        <div
          className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
            selected
              ? 'bg-secondary-500 border-secondary-400 text-white scale-100 shadow-md'
              : 'border-white/20 bg-white/5 text-transparent scale-95 group-hover:border-white/40'
          }`}
        >
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      </div>
    </button>
  );
}
