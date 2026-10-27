'use client';

import React from 'react';
import { FullFleetSimulationResult } from '@/lib/roi/types';

interface FleetSimulatorPrintableProps {
  simulation: FullFleetSimulationResult;
}

export default function FleetSimulatorPrintable({ simulation }: FleetSimulatorPrintableProps) {
  const {
    inputs,
    currentCost,
    scenarios,
    annualGrossSaving,
    monthlyGrossSaving,
    savingPerVehicle,
    breakdown,
    roi,
    priorities,
    personalizedNarrative,
    assumptions,
    confidence,
  } = simulation;

  return (
    <div
      id="printable-diagnostic-report"
      className="hidden print:block text-black bg-white p-8 max-w-[210mm] mx-auto font-sans leading-relaxed text-xs"
    >
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm 15mm 15mm 15mm;
          }
          html, body {
            background: #ffffff !important;
            background-color: #ffffff !important;
            color: #111827 !important;
            overflow: visible !important;
            height: auto !important;
          }
          header, footer, nav, main, aside, button, .no-print {
            display: none !important;
          }
          * {
            scrollbar-width: none !important;
          }
          *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .page-break {
            page-break-after: always;
            break-after: page;
          }
          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      {/* EN-TÊTE DU RAPPORT */}
      <div className="border-b-2 border-sky-600 pb-4 mb-6 flex justify-between items-start">
        <div>
          <span className="text-sky-700 font-bold uppercase text-[10px] tracking-wider block">
            Floticar • Solution SaaS de Gestion de Flotte (par DevEvoke)
          </span>
          <h1 className="text-xl font-black text-gray-900 mt-1">
            Simulation Économique & Retour sur Investissement
          </h1>
          <p className="text-gray-600 text-[11px] mt-0.5">
            Flotte de <strong>{inputs.vehicles} véhicule{inputs.vehicles > 1 ? 's' : ''}</strong> • {Math.round(inputs.annualKmPerVehicle).toLocaleString('fr-FR')} km/véhicule/an • Organisation : {inputs.organizationType}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-sky-700">
            +{annualGrossSaving.toLocaleString('fr-FR')} € / an
          </div>
          <span className="text-[10px] font-bold uppercase bg-gray-100 px-2 py-0.5 rounded text-gray-800">
            ≈ {monthlyGrossSaving.toLocaleString('fr-FR')} € / mois
          </span>
        </div>
      </div>

      {/* SYNTHÈSE EXÉCUTIVE */}
      <div className="avoid-break mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-1.5">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
            1. Synthèse Économique Personnalisée
          </h2>
          <span className="text-[10px] font-semibold text-gray-600">
            Indice de confiance : {confidence === 'high' ? 'Élevé' : confidence === 'medium' ? 'Moyen' : 'Indicatif'}
          </span>
        </div>
        <p className="text-gray-800 text-xs italic bg-white p-3 rounded border border-gray-200 leading-relaxed">
          « {personalizedNarrative} »
        </p>
      </div>

      {/* COMPARAISON DES 3 SCÉNARIOS */}
      <div className="avoid-break mb-6">
        <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
          2. Comparaison des Niveaux de Gestion
        </h2>
        <table className="w-full border-collapse border border-gray-200 text-xs">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2 font-bold">Scénario</th>
              <th className="border border-gray-200 p-2 font-bold">Hypothèse</th>
              <th className="border border-gray-200 p-2 font-bold text-right">Coût Annuel Estimé</th>
              <th className="border border-gray-200 p-2 font-bold text-right">Économie Brute</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="border border-gray-200 p-2 font-semibold text-gray-900">
                {scenarios.current.title}
              </td>
              <td className="border border-gray-200 p-2 text-gray-600 text-[11px]">
                {scenarios.current.subtitle}
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-gray-900">
                {scenarios.current.cost.toLocaleString('fr-FR')} €
              </td>
              <td className="border border-gray-200 p-2 text-right text-gray-500 font-mono">
                —
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-sky-50/50">
              <td className="border border-gray-200 p-2 font-semibold text-sky-900">
                {scenarios.optimized.title} (Recommandé)
              </td>
              <td className="border border-gray-200 p-2 text-gray-600 text-[11px]">
                {scenarios.optimized.subtitle}
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-gray-900">
                {scenarios.optimized.cost.toLocaleString('fr-FR')} €
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-emerald-700">
                +{scenarios.optimized.saving.toLocaleString('fr-FR')} €
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="border border-gray-200 p-2 font-semibold text-gray-900">
                {scenarios.automated.title}
              </td>
              <td className="border border-gray-200 p-2 text-gray-600 text-[11px]">
                {scenarios.automated.subtitle}
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-gray-900">
                {scenarios.automated.cost.toLocaleString('fr-FR')} €
              </td>
              <td className="border border-gray-200 p-2 text-right font-mono font-bold text-emerald-700">
                +{scenarios.automated.saving.toLocaleString('fr-FR')} €
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DÉCOMPOSITION DES GAINS */}
      <div className="avoid-break mb-6">
        <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
          3. Décomposition des Postes d'Économies (Scénario Réaliste)
        </h2>
        <div className="grid grid-cols-4 gap-2.5">
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 uppercase font-semibold block">Temps administratif</span>
            <div className="text-base font-bold text-gray-900 mt-0.5">+{breakdown.admin.toLocaleString('fr-FR')} €</div>
            <p className="text-[10px] text-gray-600 mt-1">Relevés et saisies manuelles supprimés.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 uppercase font-semibold block">Carburant</span>
            <div className="text-base font-bold text-gray-900 mt-0.5">+{breakdown.fuel.toLocaleString('fr-FR')} €</div>
            <p className="text-[10px] text-gray-600 mt-1">Suivi régulier et contrôle des dérives.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 uppercase font-semibold block">Entretien & Révisions</span>
            <div className="text-base font-bold text-gray-900 mt-0.5">+{breakdown.maintenance.toLocaleString('fr-FR')} €</div>
            <p className="text-[10px] text-gray-600 mt-1">Respect strict des vidanges et révisions.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 uppercase font-semibold block">Oublis & Amendes</span>
            <div className="text-base font-bold text-gray-900 mt-0.5">+{breakdown.incidentsAndLosses.toLocaleString('fr-FR')} €</div>
            <p className="text-[10px] text-gray-600 mt-1">Alertes CT et réduction des immobilisations.</p>
          </div>
        </div>
      </div>

      {/* RETOUR SUR INVESTISSEMENT FLOTICAR */}
      <div className="avoid-break mb-6 p-4 rounded-lg border border-sky-200 bg-sky-50/40">
        <h2 className="text-sm font-bold text-sky-950 mb-2 uppercase tracking-wide">
          4. Rentabilité & Retour sur Investissement
        </h2>
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="p-2 bg-white rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Investissement estimé</span>
            <span className="text-sm font-extrabold text-gray-900">{roi.annualSoftwareCost.toLocaleString('fr-FR')} € / an</span>
            <span className="text-[9px] text-gray-500 block">({roi.monthlySoftwareCost} € / mois)</span>
          </div>
          <div className="p-2 bg-white rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Gain brut annuel</span>
            <span className="text-sm font-extrabold text-gray-900">+{annualGrossSaving.toLocaleString('fr-FR')} €</span>
            <span className="text-[9px] text-gray-500 block">(~{savingPerVehicle.toLocaleString('fr-FR')} € / vhc)</span>
          </div>
          <div className="p-2 bg-white rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Gain net potentiel</span>
            <span className="text-sm font-extrabold text-emerald-700">+{roi.annualNetGain.toLocaleString('fr-FR')} € / an</span>
            <span className="text-[9px] text-gray-500 block">(Après coût logiciel)</span>
          </div>
          <div className="p-2 bg-white rounded border border-gray-200">
            <span className="text-[10px] text-gray-500 block">Seuil de rentabilité</span>
            <span className="text-sm font-extrabold text-sky-700">~{roi.paybackMonths} mois</span>
            <span className="text-[9px] text-gray-500 block">(Amortissement rapide)</span>
          </div>
        </div>
      </div>

      {/* TOP 3 PRIORITÉS */}
      <div className="avoid-break mb-6">
        <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
          5. Leviers d'Action Prioritaires
        </h2>
        <div className="space-y-2">
          {priorities.map((item) => (
            <div key={item.number} className="p-2.5 rounded border border-gray-200 bg-white avoid-break">
              <div className="flex justify-between items-center mb-0.5">
                <span className="font-bold text-gray-900 text-xs">
                  {item.number}. {item.title}
                </span>
                <span className="text-[10px] text-gray-600 font-mono">
                  Horizon : {item.horizon} • Impact : {item.impact}
                </span>
              </div>
              <p className="text-gray-600 text-[11px]">{item.description}</p>
              <p className="text-sky-800 text-[11px] font-semibold mt-1">
                Action recommandée : {item.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* HYPOTHÈSES DOCUMENTÉES */}
      <div className="avoid-break pt-4 mt-6 border-t border-gray-200 text-[10px] text-gray-500 space-y-1.5">
        <p>
          <strong>Hypothèses du modèle :</strong> Taux horaire administratif chargé : {inputs.hourlyCost} €/h • Tarification de référence Floticar : 15 € HT/véhicule/mois.
        </p>
        <p>
          <strong>Avertissement légal :</strong> Ce simulateur est un outil d'aide à la décision financière et organisationnelle. Les résultats constituent des estimations indicatives basées sur vos paramètres et ne sauraient constituer une garantie contractuelle d'économies.
        </p>
        <p>
          Document édité par <strong>DevEvoke</strong> (éditeur de Floticar) • Contact : contact@devevoke.com • www.devevoke.com
        </p>
      </div>
    </div>
  );
}
