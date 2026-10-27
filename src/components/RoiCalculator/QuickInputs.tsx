'use client';

import React from 'react';
import { ORGANIZATION_OPTIONS } from '@/lib/roi/constants';
import { FleetInputs, OrganizationType } from '@/lib/roi/types';
import { Car, Clock, HelpCircle, Layers, Users } from 'lucide-react';

interface QuickInputsProps {
  inputs: FleetInputs;
  onChange: (updates: Partial<FleetInputs>) => void;
}

export default function QuickInputs({ inputs, onChange }: QuickInputsProps) {
  const handleVehicleChange = (val: number) => {
    const safe = Math.max(1, Math.floor(val));
    // Si l'utilisateur n'a pas personnalisé le budget entretien, on l'ajuste proportionnellement
    if (!inputs.isMaintenanceCustom) {
      onChange({ vehicles: safe, annualMaintenanceBudget: safe * 450 });
    } else {
      onChange({ vehicles: safe });
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Nombre de véhicules */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition-colors">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="vehicle-slider" className="flex items-center gap-2 text-sm font-semibold text-white">
            <Car className="w-4 h-4 text-primary-400" />
            <span>Nombre de véhicules :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={1000}
              value={inputs.vehicles}
              onChange={(e) => handleVehicleChange(Number(e.target.value))}
              aria-label="Nombre de véhicules"
              className="w-20 px-2.5 py-1 text-right text-sm font-bold text-primary-300 bg-black/40 border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <span className="text-xs text-neutral-400 font-medium">véhicules</span>
          </div>
        </div>

        <input
          id="vehicle-slider"
          type="range"
          min={2}
          max={100}
          value={Math.min(inputs.vehicles, 100)}
          onChange={(e) => handleVehicleChange(Number(e.target.value))}
          aria-label="Ajuster le nombre de véhicules (slider)"
          className="w-full accent-primary-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
        />

        <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
          <span>2 véhicules</span>
          <span>50</span>
          <span>100 (ou saisie libre au-delà)</span>
        </div>
      </div>

      {/* 2. Nombre de conducteurs */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition-colors">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="driver-slider" className="flex items-center gap-2 text-sm font-semibold text-white">
            <Users className="w-4 h-4 text-primary-400" />
            <span>Nombre de conducteurs / utilisateurs :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={2000}
              value={inputs.drivers}
              onChange={(e) => onChange({ drivers: Math.max(1, Math.floor(Number(e.target.value))) })}
              aria-label="Nombre de conducteurs"
              className="w-20 px-2.5 py-1 text-right text-sm font-bold text-primary-300 bg-black/40 border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <span className="text-xs text-neutral-400 font-medium">conducteurs</span>
          </div>
        </div>

        <input
          id="driver-slider"
          type="range"
          min={1}
          max={200}
          value={Math.min(inputs.drivers, 200)}
          onChange={(e) => onChange({ drivers: Math.max(1, Math.floor(Number(e.target.value))) })}
          aria-label="Ajuster le nombre de conducteurs (slider)"
          className="w-full accent-primary-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
        />

        <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
          <span>1 conducteur</span>
          <span>100</span>
          <span>200+</span>
        </div>
      </div>

      {/* 3. Temps administratif hebdomadaire */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition-colors">
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="admin-hours-slider" className="flex items-center gap-2 text-sm font-semibold text-white">
            <Clock className="w-4 h-4 text-primary-400" />
            <span>Temps consacré à la gestion de la flotte par semaine :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              max={80}
              step={0.5}
              value={inputs.weeklyAdminHours}
              onChange={(e) => onChange({ weeklyAdminHours: Math.max(0, Number(e.target.value)) })}
              aria-label="Temps de gestion en heures par semaine"
              className="w-20 px-2.5 py-1 text-right text-sm font-bold text-primary-300 bg-black/40 border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <span className="text-xs text-neutral-400 font-medium">h / sem.</span>
          </div>
        </div>

        <p className="text-[11px] text-neutral-400 mb-3 flex items-start gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
          <span>
            Incluez le suivi des carnets, kilométrages, carburant, justificatifs, entretiens, contrôles techniques, anomalies et relances.
          </span>
        </p>

        <input
          id="admin-hours-slider"
          type="range"
          min={0}
          max={40}
          step={0.5}
          value={Math.min(inputs.weeklyAdminHours, 40)}
          onChange={(e) => onChange({ weeklyAdminHours: Math.max(0, Number(e.target.value)) })}
          aria-label="Ajuster le temps de gestion par semaine (slider)"
          className="w-full accent-primary-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
        />

        <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
          <span>0 h</span>
          <span>20 h</span>
          <span>40 h / semaine (saisie libre au-delà)</span>
        </div>
      </div>

      {/* 4. Organisation actuelle */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/20 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <Layers className="w-4 h-4 text-primary-400" />
            <span>Organisation actuelle du suivi :</span>
          </label>
          <span className="text-[11px] text-neutral-400">Pondère le potentiel de gain de temps</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-3">
          {ORGANIZATION_OPTIONS.map((opt) => {
            const isSelected = inputs.organizationType === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange({ organizationType: opt.value as OrganizationType })}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  isSelected
                    ? 'bg-primary-500/15 border-primary-500/50 shadow-md shadow-primary-500/10'
                    : 'bg-black/30 border-white/10 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                    {opt.label}
                  </span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-medium ${
                      isSelected
                        ? 'bg-primary-500/30 text-primary-200'
                        : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    {opt.badge}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400 leading-snug">
                  {opt.hint}
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[10px] text-neutral-400 mt-2.5 italic">
          * Note de modélisation : cet ajustement affine le gain de temps administratif estimé selon la maturité de vos outils. Il ne constitue pas une promesse absolue.
        </p>
      </div>
    </div>
  );
}
