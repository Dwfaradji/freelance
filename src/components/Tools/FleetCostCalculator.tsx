'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Clock, Euro, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function FleetCostCalculator() {
  const [vehicleCount, setVehicleCount] = useState<number>(8);
  const [driverCount, setDriverCount] = useState<number>(20);
  const [hourlyCost, setHourlyCost] = useState<number>(28); // Coût horaire moyen chargé éducateur/gestionnaire
  const [unidentifiedFines, setUnidentifiedFines] = useState<number>(3); // Amendes non imputables par an

  // Calculs :
  // 1. Temps administratif perdu : ~45 min / semaine / véhicule en carnet papier, planning et suivi mécanique
  const hoursLostPerYear = Math.round(vehicleCount * 0.75 * 46); // 46 semaines
  const adminCostLostPerYear = Math.round(hoursLostPerYear * hourlyCost);

  // 2. Coût des pannes imprévues & pénalités / amendes majorées non imputées
  // En moyenne 150€ par amende majorée non imputée + 400€ de retards de vidange/révision par an par tranche de 5 véhicules
  const finesAndOvercostPerYear = Math.round(unidentifiedFines * 180 + (vehicleCount * 120));

  // Économies potentielles avec Floticar (réduction de 80% du temps administratif + élimination des amendes non imputées)
  const totalPotentialSavings = Math.round(adminCostLostPerYear * 0.75 + finesAndOvercostPerYear * 0.85);

  return (
    <div className="glass rounded-3xl p-6 sm:p-10 border border-primary-500/30 shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs uppercase font-semibold text-primary-400 tracking-wider">
            Simulateur Gratuit
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Calculateur de gains sur votre flotte médico-sociale
          </h3>
        </div>
      </div>

      <p className="text-sm text-muted mb-8 leading-relaxed">
        Ajustez les curseurs ci-dessous selon la taille de votre parc automobile pour estimer le coût caché de la gestion papier et les économies débloquées par Floticar.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-6">
          {/* Véhicules */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
              <span>Nombre de véhicules :</span>
              <span className="text-primary-400 font-bold text-base px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                {vehicleCount} véhicules
              </span>
            </div>
            <input
              type="range"
              min={2}
              max={50}
              value={vehicleCount}
              onChange={(e) => setVehicleCount(Number(e.target.value))}
              className="w-full accent-primary-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
              <span>2</span>
              <span>25</span>
              <span>50+</span>
            </div>
          </div>

          {/* Conducteurs */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
              <span>Nombre de conducteurs / éducateurs :</span>
              <span className="text-primary-400 font-bold text-base px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                {driverCount} conducteurs
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={150}
              value={driverCount}
              onChange={(e) => setDriverCount(Number(e.target.value))}
              className="w-full accent-primary-500 cursor-pointer"
            />
          </div>

          {/* Amendes & litiges */}
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
              <span>Amendes / litiges non identifiés par an :</span>
              <span className="text-primary-400 font-bold text-base px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                {unidentifiedFines} par an
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={20}
              value={unidentifiedFines}
              onChange={(e) => setUnidentifiedFines(Number(e.target.value))}
              className="w-full accent-primary-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-surface border border-white/10 flex flex-col justify-between h-full space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Gain estimé annuel
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mt-1 mb-2">
              +{totalPotentialSavings.toLocaleString('fr-FR')} € / an
            </div>
            <p className="text-xs text-muted">
              Soit environ {Math.round(totalPotentialSavings / 12).toLocaleString('fr-FR')} € d’économies directes et indirectes par mois.
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-white/5 text-xs text-gray-300">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-muted">
                <Clock className="w-3.5 h-3.5 text-primary-400" />
                Heures de saisie économisées :
              </span>
              <span className="font-bold text-white">~{Math.round(hoursLostPerYear * 0.75)} h / an</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-muted">
                <Euro className="w-3.5 h-3.5 text-secondary-400" />
                Dépassements & pénalités évités :
              </span>
              <span className="font-bold text-white">~{Math.round(finesAndOvercostPerYear * 0.85)} € / an</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Sécurité juridique :
              </span>
              <span className="font-bold text-emerald-400">Permis & CT à 100%</span>
            </div>
          </div>

          <Link
            href="/demande-demo"
            className="btn-primary w-full py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>Tester avec vos données réelles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
