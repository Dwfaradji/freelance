'use client';

import React from 'react';
import { DiagnosticQuestion } from '@/lib/diagnostic/types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface QuestionStepProps {
  question: DiagnosticQuestion;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  isLast: boolean;
}

export default function QuestionStep({
  question,
  selectedOptionId,
  onSelectOption,
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  isLast,
}: QuestionStepProps) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className="space-y-6">
      {/* Question title and subtitle */}
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-snug">
          {question.label}
        </h3>
        {question.subtitle && (
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {question.subtitle}
          </p>
        )}
      </div>

      {/* Options list */}
      <div
        role="radiogroup"
        aria-label={question.label}
        className="space-y-3"
      >
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionId === option.id;
          const letter = letters[idx] ?? String(idx + 1);

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectOption(option.id)}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 group flex items-start gap-3.5 sm:gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                isSelected
                  ? 'bg-primary-500/20 border-primary-500 text-white shadow-lg shadow-primary-500/10'
                  : 'bg-neutral-900/50 border-white/10 text-neutral-300 hover:bg-neutral-800/80 hover:border-white/20'
              }`}
            >
              {/* Radio badge */}
              <div
                className={`w-7 h-7 rounded-xl shrink-0 mt-0.5 border flex items-center justify-center font-bold text-xs transition-colors ${
                  isSelected
                    ? 'border-primary-400 bg-primary-500 text-white'
                    : 'border-white/20 bg-black/30 text-neutral-400 group-hover:border-primary-400 group-hover:text-white'
                }`}
              >
                {isSelected ? <CheckCircle2 className="w-4 h-4" /> : <span>{letter}</span>}
              </div>

              {/* Text */}
              <div className="flex-1">
                <p
                  className={`text-sm sm:text-base font-semibold leading-snug ${
                    isSelected ? 'text-white' : 'text-neutral-200 group-hover:text-primary-300'
                  } transition-colors`}
                >
                  {option.label}
                </p>
                {option.detail && (
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {option.detail}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canGoPrev}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Question précédente</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!canGoNext}
          className="btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-primary-500/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <span>{isLast ? 'Consulter mes résultats' : 'Question suivante'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
