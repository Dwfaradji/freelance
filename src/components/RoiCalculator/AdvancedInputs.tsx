'use client';

import React from 'react';
import { calculateEstimatedFuelBudget } from '@/lib/roi/calculator';
import { DEFAULT_CONSUMPTION, DEFAULT_FUEL_PRICE } from '@/lib/roi/constants';
import { FleetInputs } from '@/lib/roi/types';
import {
  AlertTriangle,
  BadgeEuro,
  Calculator,
  Car,
  Compass,
  DollarSign,
  Fuel,
  HelpCircle,
  Wrench,
} from 'lucide-react';

interface AdvancedInputsProps {
  inputs: FleetInputs;
  onChange: (updates: Partial<FleetInputs>) => void;
}

export default function AdvancedInputs({ inputs, onChange }: AdvancedInputsProps) {
  const estimatedFuel = Math.round(
    calculateEstimatedFuelBudget(
      inputs.vehicles,
      inputs.annualKmPerVehicle,
      inputs.averageConsumption,
      inputs.fuelPrice
    )
  );

  return (
    <div className="space-y-6 pt-6 border-t border-white/10">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-primary-400" />
            <span>Paramètres avancés de votre flotte</span>
          </h4>
          <p className="text-xs text-neutral-400">
            Ajustez ces valeurs pour obtenir une estimation hautement personnalisée de votre potentiel d’économies.
          </p>
        </div>
      </div>

      {/* 1. Kilométrage annuel moyen */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="km-slider" className="flex items-center gap-2 text-sm font-semibold text-white">
            <Compass className="w-4 h-4 text-primary-400" />
            <span>Kilométrage annuel moyen par véhicule :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1000}
              max={150000}
              step={500}
              value={inputs.annualKmPerVehicle}
              onChange={(e) =>
                onChange({ annualKmPerVehicle: Math.max(0, Number(e.target.value)) })
              }
              aria-label="Kilométrage annuel moyen par véhicule"
              className="w-24 px-2.5 py-1 text-right text-sm font-bold text-primary-300 bg-black/40 border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <span className="text-xs text-neutral-400 font-medium">km / an</span>
          </div>
        </div>

        <input
          id="km-slider"
          type="range"
          min={1000}
          max={80000}
          step={1000}
          value={Math.min(inputs.annualKmPerVehicle, 80000)}
          onChange={(e) =>
            onChange({ annualKmPerVehicle: Math.max(0, Number(e.target.value)) })
          }
          aria-label="Ajuster le kilométrage annuel moyen"
          className="w-full accent-primary-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
        />

        <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
          <span>1 000 km</span>
          <span>15 000 km (moyenne)</span>
          <span>80 000 km</span>
        </div>
      </div>

      {/* 2. Budget Carburant (2 méthodes) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <Fuel className="w-4 h-4 text-amber-400" />
            <span>Budget carburant annuel :</span>
          </label>

          {/* Toggle entre les 2 méthodes */}
          <div className="inline-flex p-1 rounded-xl bg-black/40 border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => onChange({ fuelCalculationMode: 'estimated' })}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                inputs.fuelCalculationMode === 'estimated'
                  ? 'bg-primary-500 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Calculer une approximation
            </button>
            <button
              type="button"
              onClick={() =>
                onChange({
                  fuelCalculationMode: 'known',
                  annualFuelBudget: inputs.annualFuelBudget ?? estimatedFuel,
                })
              }
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                inputs.fuelCalculationMode === 'known'
                  ? 'bg-primary-500 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Je connais mon budget
            </button>
          </div>
        </div>

        {inputs.fuelCalculationMode === 'estimated' ? (
          <div className="space-y-3 bg-black/30 p-3.5 rounded-xl border border-white/5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-primary-400" />
                Budget carburant calculé pour {inputs.vehicles} véhicules :
              </span>
              <span className="font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                ~{estimatedFuel.toLocaleString('fr-FR')} € / an
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/5">
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">
                  Consommation moyenne (L / 100 km) :
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={2}
                    max={25}
                    step={0.1}
                    value={inputs.averageConsumption}
                    onChange={(e) =>
                      onChange({ averageConsumption: Math.max(0, Number(e.target.value)) })
                    }
                    className="w-full px-2.5 py-1 text-sm text-white bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400"
                  />
                  <span className="text-xs text-neutral-400 whitespace-nowrap">L/100km</span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1">
                  Prix moyen estimé du carburant (€ / L) :
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0.5}
                    max={4}
                    step={0.05}
                    value={inputs.fuelPrice}
                    onChange={(e) =>
                      onChange({ fuelPrice: Math.max(0, Number(e.target.value)) })
                    }
                    className="w-full px-2.5 py-1 text-sm text-white bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400"
                  />
                  <span className="text-xs text-neutral-400 whitespace-nowrap">€ / L</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-neutral-400">
              * Formule : {inputs.vehicles} véh. × {inputs.annualKmPerVehicle.toLocaleString('fr-FR')} km × {inputs.averageConsumption} L/100 × {inputs.fuelPrice} €/L. <span className="text-primary-300">Estimation modifiable</span> (ne reflète pas le cours boursier en direct).
            </p>
          </div>
        ) : (
          <div className="space-y-2 bg-black/30 p-3.5 rounded-xl border border-white/5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-neutral-300">
                Budget carburant annuel total de la flotte :
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  step={100}
                  value={inputs.annualFuelBudget ?? 0}
                  onChange={(e) =>
                    onChange({ annualFuelBudget: Math.max(0, Number(e.target.value)) })
                  }
                  aria-label="Budget carburant annuel"
                  className="w-28 px-2.5 py-1 text-right text-sm font-bold text-amber-300 bg-black/40 border border-amber-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                <span className="text-xs text-neutral-400 font-medium">€ / an</span>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium inline-block">
              ✓ Montant déclaré pris en compte
            </span>
          </div>
        )}
      </div>

      {/* 3. Budget Entretien et Réparations */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10">
        <div className="flex justify-between items-center mb-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <Wrench className="w-4 h-4 text-cyan-400" />
            <span>Budget annuel entretien et réparations :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              step={100}
              value={inputs.annualMaintenanceBudget}
              onChange={(e) =>
                onChange({
                  annualMaintenanceBudget: Math.max(0, Number(e.target.value)),
                  isMaintenanceCustom: true,
                })
              }
              aria-label="Budget annuel entretien et réparations"
              className="w-28 px-2.5 py-1 text-right text-sm font-bold text-cyan-300 bg-black/40 border border-cyan-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <span className="text-xs text-neutral-400 font-medium">€ / an</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-neutral-400">
          <span>
            {inputs.isMaintenanceCustom ? (
              <span className="text-primary-300 font-medium">● Montant personnalisé</span>
            ) : (
              <span>Estimation indicative basée sur ~450 € / véhicule / an</span>
            )}
          </span>
          {inputs.isMaintenanceCustom && (
            <button
              type="button"
              onClick={() =>
                onChange({
                  annualMaintenanceBudget: inputs.vehicles * 450,
                  isMaintenanceCustom: false,
                })
              }
              className="text-primary-400 hover:underline text-[10px]"
            >
              Rétablir l'estimation
            </button>
          )}
        </div>
      </div>

      {/* 4. Coût horaire chargé */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10">
        <div className="flex justify-between items-center mb-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <BadgeEuro className="w-4 h-4 text-primary-400" />
            <span>Coût horaire chargé estimé :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={10}
              max={150}
              step={1}
              value={inputs.hourlyCost}
              onChange={(e) =>
                onChange({ hourlyCost: Math.max(0, Number(e.target.value)) })
              }
              aria-label="Coût horaire chargé estimé"
              className="w-20 px-2.5 py-1 text-right text-sm font-bold text-primary-300 bg-black/40 border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <span className="text-xs text-neutral-400 font-medium">€ / h</span>
          </div>
        </div>
        <p className="text-[11px] text-neutral-400 flex items-start gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
          <span>
            Utilisé uniquement pour convertir le temps administratif économisé en valeur économique valorisée.
          </span>
        </p>
      </div>

      {/* 5. Incidents administratifs, retards et pénalités */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10">
        <div className="flex justify-between items-center mb-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Coût annuel des oublis, retards et incidents administratifs :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              step={50}
              value={inputs.annualIncidentCost}
              onChange={(e) =>
                onChange({ annualIncidentCost: Math.max(0, Number(e.target.value)) })
              }
              aria-label="Coût annuel des incidents administratifs"
              className="w-24 px-2.5 py-1 text-right text-sm font-bold text-rose-300 bg-black/40 border border-rose-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <span className="text-xs text-neutral-400 font-medium">€ / an</span>
          </div>
        </div>
        <p className="text-[11px] text-neutral-400 leading-relaxed">
          Incluez : contrôles techniques tardifs, entretiens dépassés pénalisants, documents et justificatifs perdus, anomalies non tracées et relances administratives. (0 € autorisé).
        </p>
      </div>

      {/* 6. Immobilisations évitables */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <Car className="w-4 h-4 text-purple-400" />
            <span>Immobilisations de véhicules évitables :</span>
          </label>
          <span className="text-xs text-neutral-400">Pannes ou blocages prévisibles</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">
              Nombre d'immobilisations évitables par an :
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                max={50}
                value={inputs.annualAvoidableImmobilisations}
                onChange={(e) =>
                  onChange({
                    annualAvoidableImmobilisations: Math.max(0, Number(e.target.value)),
                  })
                }
                aria-label="Nombre d'immobilisations par an"
                className="w-full px-2.5 py-1 text-sm text-white bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
              <span className="text-xs text-neutral-400 whitespace-nowrap">par an</span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">
              Coût moyen estimé d'une immobilisation :
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                step={25}
                value={inputs.averageImmobilisationCost}
                onChange={(e) =>
                  onChange({
                    averageImmobilisationCost: Math.max(0, Number(e.target.value)),
                  })
                }
                aria-label="Coût moyen d'une immobilisation"
                className="w-full px-2.5 py-1 text-sm text-white bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
              <span className="text-xs text-neutral-400 whitespace-nowrap">€ / immob.</span>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-neutral-400 flex items-start gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
          <span>
            Exemple : organisation d’un véhicule de remplacement, temps administratif d’urgence, intervention ou déplacement reporté. Floticar contribue à les anticiper sans prétendre éliminer 100% des aléas mécaniques.
          </span>
        </p>
      </div>

      {/* 7. Coût Floticar annuel (optionnel pour calcul du ROI net) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-primary-500/20 space-y-2">
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Coût annuel Floticar estimé (optionnel) :</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              step={100}
              placeholder="Ex: 1 500"
              value={inputs.annualFloticarCost ?? ''}
              onChange={(e) => {
                const val = e.target.value;
                onChange({
                  annualFloticarCost: val === '' ? undefined : Math.max(0, Number(val)),
                });
              }}
              aria-label="Coût annuel Floticar en euros pour le calcul du ROI"
              className="w-28 px-2.5 py-1 text-right text-sm font-bold text-emerald-300 bg-black/40 border border-emerald-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 placeholder:text-neutral-400"
            />
            <span className="text-xs text-neutral-400 font-medium">€ HT / an</span>
          </div>
        </div>

        <p className="text-[11px] text-neutral-400 leading-relaxed">
          Si vous avez reçu une proposition ou souhaitez tester un budget cible, renseignez-le ici pour calculer votre <strong>gain net</strong>, votre <strong>ROI estimé</strong> et votre <strong>délai d’amortissement</strong>. Sans saisie, seules les économies brutes potentielles sont affichées.
        </p>
      </div>
    </div>
  );
}
