'use client';

import React from 'react';
import { SCENARIOS } from '@/lib/roi/constants';
import { Scenario } from '@/lib/roi/types';
import { Info } from 'lucide-react';

interface ScenarioSelectorProps {
  selectedScenario: Scenario;
  onSelectScenario: (scenario: Scenario) => void;
}

export default function ScenarioSelector({
  selectedScenario,
  onSelectScenario,
}: ScenarioSelectorProps) {
  const scenarioKeys: Scenario[] = ['prudent', 'realiste', 'optimise'];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
          <span>Hypothèse de simulation</span>
        </label>
        <span className="text-[11px] text-neutral-400">
          Scénario actif : <strong className="text-primary-300">{SCENARIOS[selectedScenario].label}</strong>
        </span>
      </div>

      <div
        role="tablist"
        aria-label="Sélectionnez un scénario de simulation"
        className="grid grid-cols-3 p-1 rounded-xl bg-neutral-900/90 border border-white/10"
      >
        {scenarioKeys.map((key) => {
          const isSelected = selectedScenario === key;
          const config = SCENARIOS[key];

          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectScenario(key)}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                isSelected
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{config.label}</span>
              <span
                className={`text-[10px] font-normal hidden sm:inline ${
                  isSelected ? 'text-primary-100' : 'text-neutral-400'
                }`}
              >
                {key === 'prudent' && '−25% admin'}
                {key === 'realiste' && '−40% admin'}
                {key === 'optimise' && '−55% admin'}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-[11px] text-neutral-400 flex items-start gap-1.5 mt-1 leading-relaxed">
        <Info className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
        <span>
          {SCENARIOS[selectedScenario].description}{' '}
          <span className="text-neutral-400">Les résultats sont indicatifs et dépendent de votre utilisation réelle.</span>
        </span>
      </p>
    </div>
  );
}
