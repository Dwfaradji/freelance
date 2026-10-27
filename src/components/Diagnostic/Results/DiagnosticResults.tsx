'use client';

import React, { useState } from 'react';
import { DIAGNOSTIC_DISCLAIMER } from '@/lib/diagnostic/constants';
import { DiagnosticReport } from '@/lib/diagnostic/types';
import {
  ArrowRight,
  Download,
  FileText,
  Printer,
  RotateCcw,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import GlobalScoreCard from './GlobalScoreCard';
import MaturityRadar from './MaturityRadar';
import PrintableReport from './PrintableReport';
import QuickWins from './QuickWins';
import RelevantSolutions from './RelevantSolutions';
import ReportModal from './ReportModal';
import RiskList from './RiskList';
import RoadmapSection from './RoadmapSection';
import StrengthsList from './StrengthsList';
import TopPriorities from './TopPriorities';

interface DiagnosticResultsProps {
  report: DiagnosticReport;
  onReset: () => void;
}

export default function DiagnosticResults({ report, onReset }: DiagnosticResultsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Score Global & Niveau de maturité */}
      <GlobalScoreCard
        globalScore={report.globalScore}
        maturityLevel={report.maturityLevel}
        customSynthesis={report.customSynthesis}
        organizationName={report.organization.name}
      />

      {/* 2. Graphique Radar & Répartition par dimension */}
      <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
          <div>
            <h4 className="text-xl font-extrabold text-white">Votre profil de maturité</h4>
            <p className="text-xs text-neutral-400">
              Visualisation radar des 6 dimensions clés de votre établissement
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-primary py-2.5 px-4 text-xs font-bold inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-md shadow-primary-500/20"
          >
            <FileText className="w-4 h-4" />
            <span>Recevoir mon rapport détaillé</span>
          </button>
        </div>

        <MaturityRadar dimensionScores={report.dimensionScores} />
      </div>

      {/* 3. Points forts */}
      <StrengthsList strengths={report.strengths} />

      {/* 4. Points de vigilance & risques indépendants */}
      <RiskList risks={report.risks} riskCounts={report.riskCounts} />

      {/* 5. Vos 3 priorités calculées */}
      <TopPriorities priorities={report.priorities} />

      {/* 6. Quick Wins (Actions rapides à fort impact) */}
      <QuickWins quickWins={report.quickWins} />

      {/* 7. Feuille de route (30j / 3m / 6m) */}
      <RoadmapSection roadmap={report.roadmap} />

      {/* 8. Solutions DevEvoke pertinentes */}
      <RelevantSolutions solutions={report.relevantSolutions} />

      {/* 9. Encart Lead Capture & Demande de Rapport */}
      <div className="glass rounded-3xl p-8 sm:p-10 border border-primary-500/40 text-center space-y-4 relative overflow-hidden shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold text-primary-400 tracking-wider">
            Restitution Personnalisée
          </span>
          <h4 className="text-2xl sm:text-3xl font-black text-white">
            Souhaitez-vous échanger sur ces résultats avec un architecte ?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Consultez votre rapport au format PDF ou planifiez un échange conseil de 20 minutes pour confronter ces priorités à vos contraintes budgétaires et organisationnelles.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn-primary w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-primary-500/25"
            >
              <span>Consulter / Télécharger mon rapport complet</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 10. Disclaimer légal et méthodologique */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-neutral-400 leading-relaxed flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
        <p>
          <strong>Avertissement :</strong> {DIAGNOSTIC_DISCLAIMER}
        </p>
      </div>

      {/* Recommencer */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Recommencer le diagnostic avec d'autres paramètres</span>
        </button>
      </div>

      {/* Modal interactif STYLE MODAL */}
      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        report={report}
      />

      {/* Version imprimable injectée en arrière-plan (active en print) */}
      <PrintableReport report={report} />
    </div>
  );
}
