'use client';

import React from 'react';
import { DIAGNOSTIC_DISCLAIMER, DIMENSION_METADATA } from '@/lib/diagnostic/constants';
import { DiagnosticReport } from '@/lib/diagnostic/types';

interface PrintableReportProps {
  report: DiagnosticReport;
}

export default function PrintableReport({ report }: PrintableReportProps) {
  const {
    organization,
    completedAt,
    globalScore,
    maturityLevel,
    dimensionScores,
    activeDimensions,
    strengths,
    risks,
    priorities,
    quickWins,
    roadmap,
    fleet,
    customSynthesis,
  } = report;

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
      <div className="border-b-2 border-primary-600 pb-4 mb-6 flex justify-between items-start">
        <div>
          <span className="text-primary-700 font-bold uppercase text-[10px] tracking-wider block">
            DevEvoke • Ingénierie & Solutions Numériques Médico-Sociales
          </span>
          <h1 className="text-xl font-black text-gray-900 mt-1">
            Rapport de Diagnostic de Maturité Numérique
          </h1>
          <p className="text-gray-600 text-[11px] mt-0.5">
            Structure : <strong>{organization.name || 'Établissement médico-social'}</strong> ({organization.structureType}) • {completedAt}
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-primary-700">{globalScore}/100</div>
          <span className="text-[10px] font-bold uppercase bg-gray-100 px-2 py-0.5 rounded text-gray-800">
            {maturityLevel.label}
          </span>
        </div>
      </div>

      {/* SYNTHÈSE EXÉCUTIVE */}
      <div className="avoid-break mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h2 className="text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wide">
          1. Synthèse Exécutive
        </h2>
        <p className="text-gray-700 text-xs leading-relaxed mb-2">
          {maturityLevel.description}
        </p>
        <p className="text-gray-800 text-xs italic bg-white p-2.5 rounded border border-gray-200">
          « {customSynthesis} »
        </p>
      </div>

      {/* SCORES PAR DIMENSION */}
      <div className="avoid-break mb-6">
        <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
          2. Profil de Maturité par Dimension
        </h2>
        <table className="w-full border-collapse border border-gray-200 text-xs">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2 font-bold">Dimension</th>
              <th className="border border-gray-200 p-2 font-bold w-24 text-right">Score</th>
              <th className="border border-gray-200 p-2 font-bold">Constat & Analyse</th>
            </tr>
          </thead>
          <tbody>
            {activeDimensions.map((dim) => {
              const score = dimensionScores[dim] ?? 0;
              const meta = DIMENSION_METADATA[dim];
              return (
                <tr key={dim} className="border-b border-gray-200">
                  <td className="border border-gray-200 p-2 font-semibold text-gray-900">
                    {meta.label}
                  </td>
                  <td className="border border-gray-200 p-2 text-right font-mono font-bold text-primary-700">
                    {score} / 100
                  </td>
                  <td className="border border-gray-200 p-2 text-gray-600 text-[11px]">
                    {meta.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* POINTS FORTS */}
      {strengths.length > 0 && (
        <div className="avoid-break mb-6">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
            3. Vos Principaux Points Forts
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {strengths.map((item) => (
              <div key={item.id} className="p-3 bg-gray-50 rounded border border-gray-200">
                <h3 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h3>
                <p className="text-gray-600 text-[11px] leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SAUT DE PAGE PROPRE */}
      <div className="page-break" />

      {/* POINTS DE VIGILANCE */}
      <div className="avoid-break mb-6">
        <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
          4. Points de Vigilance & Risques Identifiés
        </h2>
        {risks.length === 0 ? (
          <p className="text-xs text-gray-600">Aucun risque critique identifié.</p>
        ) : (
          <div className="space-y-2.5">
            {risks.map((risk) => (
              <div
                key={risk.id}
                className="p-3 rounded border border-gray-200 bg-white avoid-break"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-gray-900 text-xs">{risk.title}</span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-800">
                    Niveau : {risk.level}
                  </span>
                </div>
                <p className="text-gray-600 text-[11px] mb-1.5">{risk.description}</p>
                <p className="text-primary-800 text-[11px] font-semibold bg-gray-50 p-1.5 rounded">
                  Recommandation : {risk.recommendation}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* VOS 3 PRIORITÉS */}
      <div className="avoid-break mb-6">
        <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
          5. Top 3 Priorités d'Action
        </h2>
        <div className="space-y-3">
          {priorities.map((item, idx) => (
            <div key={item.id} className="p-3 rounded border border-gray-200 bg-gray-50 avoid-break">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-gray-900 text-xs">
                  {idx + 1}. {item.title}
                </span>
                <span className="text-[10px] text-gray-600 font-mono">
                  Horizon : {item.horizon === '30-days' ? '30 jours' : item.horizon === '3-months' ? '3 mois' : '6 mois'}
                </span>
              </div>
              <p className="text-gray-700 text-[11px] mb-1">{item.description}</p>
              <p className="text-gray-900 font-semibold text-[11px]">
                Action : {item.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FEUILLE DE ROUTE */}
      <div className="avoid-break mb-6">
        <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
          6. Plan d'Action Sequencé
        </h2>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="border border-gray-200 p-3 rounded bg-white">
            <h3 className="font-bold text-gray-900 mb-1 border-b pb-1">0 – 30 jours</h3>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-700">
              {roadmap.thirtyDays.map((r) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 p-3 rounded bg-white">
            <h3 className="font-bold text-gray-900 mb-1 border-b pb-1">1 – 3 mois</h3>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-700">
              {roadmap.threeMonths.map((r) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 p-3 rounded bg-white">
            <h3 className="font-bold text-gray-900 mb-1 border-b pb-1">3 – 6 mois</h3>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-700">
              {roadmap.sixMonths.map((r) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* DISCLAIMER & CONTACT */}
      <div className="avoid-break pt-4 mt-6 border-t border-gray-200 text-[10px] text-gray-500 space-y-2">
        <p>
          <strong>Avertissement :</strong> {DIAGNOSTIC_DISCLAIMER}
        </p>
        <p>
          Document édité par <strong>DevEvoke</strong> • Agence digitale spécialisée secteur médico-social • Contact : contact@devevoke.com • www.devevoke.com
        </p>
      </div>
    </div>
  );
}
