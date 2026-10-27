'use client';

import React from 'react';
import Link from 'next/link';
import {
  formatEstimatedCurrency,
  formatEstimatedHours,
  formatPayback,
} from '@/lib/roi/calculator';
import { SCENARIOS } from '@/lib/roi/constants';
import { AllScenariosResult, RoiResult } from '@/lib/roi/types';
import {
  AlertTriangle,
  ArrowRight,
  Car,
  CheckCircle2,
  Clock,
  Fuel,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
} from 'lucide-react';

interface ResultsCardProps {
  currentResult: RoiResult;
  allScenarios: AllScenariosResult;
  onOpenAdvanced?: () => void;
}

export default function ResultsCard({
  currentResult,
  allScenarios,
  onOpenAdvanced,
}: ResultsCardProps) {
  const { breakdown, grossAnnualSaving, monthlySaving, savingPerVehicle, floticarAnnualCost } =
    currentResult;
  const scenarioConfig = SCENARIOS[currentResult.scenario];

  return (
    <div className="rounded-3xl bg-neutral-900/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Halo subtil en arrière-plan */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* En-tête de la carte */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Économies potentielles estimées</span>
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
            {scenarioConfig.label}
          </span>
        </div>

        {/* Chiffre principal */}
        <div className="space-y-1 mb-4">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 tracking-tight">
            +{formatEstimatedCurrency(grossAnnualSaving, { showApprox: true, rounding: 'auto' })}
            <span className="text-xl sm:text-2xl font-semibold text-emerald-300/80"> / an</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-300">
            <span>
              Soit environ <strong className="text-white font-semibold">{formatEstimatedCurrency(monthlySaving, { showApprox: true, rounding: 'auto' })}</strong> / mois
            </span>
            <span className="text-neutral-400">•</span>
            <span>
              <strong className="text-white font-semibold">{formatEstimatedCurrency(savingPerVehicle, { showApprox: true, rounding: 'auto' })}</strong> / véhicule / an
            </span>
          </div>
        </div>

        {/* Fourchette potentielle */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300 space-y-1 mb-6">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-neutral-400">Fourchette selon scénarios :</span>
            <span className="font-semibold text-primary-300">
              {formatEstimatedCurrency(allScenarios.minGrossSaving, { rounding: 'auto' })} à {formatEstimatedCurrency(allScenarios.maxGrossSaving, { rounding: 'auto' })} / an
            </span>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-1.5 overflow-hidden flex">
            <div className="bg-primary-500/40 h-full w-1/3" title="Scénario Prudent" />
            <div className="bg-primary-400 h-full w-1/3" title="Scénario Réaliste" />
            <div className="bg-emerald-400 h-full w-1/3" title="Scénario Optimisé" />
          </div>
        </div>

        {/* Décomposition du gain */}
        <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
            Décomposition indicative du gain annuel
          </span>

          {/* Temps administratif */}
          {breakdown.adminSaving > 0 && (
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <span className="flex items-center gap-2 text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-primary-400" />
                <span>Temps administratif valorisé :</span>
              </span>
              <div className="text-right">
                <span className="font-bold text-white block">
                  +{formatEstimatedCurrency(breakdown.adminSaving, { showApprox: true, rounding: 'auto' })} / an
                </span>
                <span className="text-[10px] text-primary-300 font-mono">
                  {formatEstimatedHours(breakdown.savedAdminHours)} récupérées / an
                </span>
              </div>
            </div>
          )}

          {/* Carburant */}
          {breakdown.fuelSaving > 0 && (
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <span className="flex items-center gap-2 text-neutral-300">
                <Fuel className="w-3.5 h-3.5 text-amber-400" />
                <span>Économie potentielle carburant :</span>
              </span>
              <span className="font-bold text-white">
                +{formatEstimatedCurrency(breakdown.fuelSaving, { showApprox: true, rounding: 'auto' })} / an
              </span>
            </div>
          )}

          {/* Entretien */}
          {breakdown.maintenanceSaving > 0 && (
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <span className="flex items-center gap-2 text-neutral-300">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>Optimisation potentielle entretien :</span>
              </span>
              <span className="font-bold text-white">
                +{formatEstimatedCurrency(breakdown.maintenanceSaving, { showApprox: true, rounding: 'auto' })} / an
              </span>
            </div>
          )}

          {/* Incidents / retards */}
          {breakdown.incidentSaving > 0 && (
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <span className="flex items-center gap-2 text-neutral-300">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>Oublis & pénalités évités :</span>
              </span>
              <span className="font-bold text-white">
                +{formatEstimatedCurrency(breakdown.incidentSaving, { showApprox: true, rounding: 'auto' })} / an
              </span>
            </div>
          )}

          {/* Immobilisations */}
          {breakdown.immobilisationSaving > 0 && (
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <span className="flex items-center gap-2 text-neutral-300">
                <Car className="w-3.5 h-3.5 text-purple-400" />
                <span>Immobilisations évitables réduites :</span>
              </span>
              <span className="font-bold text-white">
                +{formatEstimatedCurrency(breakdown.immobilisationSaving, { showApprox: true, rounding: 'auto' })} / an
              </span>
            </div>
          )}
        </div>

        {/* Section ROI Net si le coût Floticar est fourni */}
        {floticarAnnualCost && floticarAnnualCost > 0 && currentResult.netAnnualSaving !== undefined ? (
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-primary-950/40 via-neutral-900 to-black border border-primary-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-primary-300 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-primary-400" />
                <span>Rentabilité nette & ROI</span>
              </span>
              <span className="text-[10px] text-neutral-400">Calcul transparent</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs border-y border-white/5 py-2.5">
              <div>
                <span className="text-neutral-400 text-[11px] block">Gain brut estimé :</span>
                <span className="font-semibold text-white">
                  +{formatEstimatedCurrency(grossAnnualSaving, { showApprox: false })}
                </span>
              </div>
              <div className="text-right">
                <span className="text-neutral-400 text-[11px] block">Coût Floticar :</span>
                <span className="font-semibold text-rose-300">
                  −{formatEstimatedCurrency(floticarAnnualCost, { showApprox: false })}
                </span>
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-xs font-bold text-emerald-400 block uppercase">
                  Gain net annuel :
                </span>
                <span className="text-2xl font-extrabold text-white">
                  {formatEstimatedCurrency(currentResult.netAnnualSaving, { showApprox: true })}
                  <span className="text-xs font-normal text-neutral-400"> / an</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-neutral-400 block">ROI estimé :</span>
                <span className="text-lg font-black text-emerald-400">
                  +{Math.round(currentResult.roi ?? 0)} %
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-primary-200 bg-primary-500/10 px-3 py-1.5 rounded-lg border border-primary-500/20">
              <Zap className="w-3.5 h-3.5 text-primary-400 shrink-0" />
              <span className="font-medium">{formatPayback(currentResult.paybackMonths)}</span>
            </div>
          </div>
        ) : (
          <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-neutral-400 flex items-center justify-between">
            <span>Vous souhaitez simuler votre gain net & ROI ?</span>
            {onOpenAdvanced && (
              <button
                type="button"
                onClick={onOpenAdvanced}
                className="text-primary-400 hover:text-primary-300 font-medium underline shrink-0 cursor-pointer"
              >
                Indiquer un tarif cible
              </button>
            )}
          </div>
        )}
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2.5 pt-4 border-t border-white/10">
        <Link
          href="/demande-demo"
          className="btn-primary w-full py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 cursor-pointer"
        >
          <span>Tester avec vos données réelles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/contact"
          className="w-full py-2.5 text-xs text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Échanger avec un conseiller sur votre parc</span>
        </Link>
      </div>
    </div>
  );
}
