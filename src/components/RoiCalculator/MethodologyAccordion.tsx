'use client';

import React, { useState } from 'react';
import { MAX_ADMIN_REDUCTION, SCENARIOS } from '@/lib/roi/constants';
import { Scenario } from '@/lib/roi/types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface MethodologyAccordionProps {
  scenario: Scenario;
}

export default function MethodologyAccordion({ scenario }: MethodologyAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentAssumptions = SCENARIOS[scenario];

  return (
    <div className="rounded-2xl bg-neutral-900/30 border border-white/5 overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full p-4 text-left flex items-center justify-between text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-2 font-medium">
          <HelpCircle className="w-4 h-4 text-primary-400" />
          <span>Comment est calculée cette estimation ?</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 pb-4 pt-1 text-xs text-neutral-300 space-y-3 border-t border-white/5">
          <p className="leading-relaxed">
            Votre simulation repose sur un modèle d’évaluation financière transparent et modulable. Elle agrège 5 postes d’économies potentielles :
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li>
              <strong className="text-white">Temps administratif :</strong> {52} semaines × vos heures hebdomadaires × taux de réduction du scénario (ajusté selon votre organisation actuelle, plafonné strictement à {Math.round(MAX_ADMIN_REDUCTION * 100)}%) × coût horaire chargé.
            </li>
            <li>
              <strong className="text-white">Carburant :</strong> budget carburant (déclaré ou calculé sur la base de vos kilomètres, de la consommation et du coût du litre) × taux d'optimisation des tournées et suivi des dérives.
            </li>
            <li>
              <strong className="text-white">Entretien & réparations :</strong> optimisation préventive sur votre budget d'entretien grâce aux alertes d’échéances et à la détection précoce d’anomalies.
            </li>
            <li>
              <strong className="text-white">Incidents & retards administratifs :</strong> diminution des coûts liés aux contrôles techniques tardifs, documents égarés, relances et pénalités.
            </li>
            <li>
              <strong className="text-white">Immobilisations évitables :</strong> réduction du coût d’immobilisation de véhicules grâce à un meilleur entretien préventif et un planning fluide.
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] space-y-1">
            <span className="font-semibold text-primary-300 block">
              Hypothèses appliquées pour le scénario « {currentAssumptions.label} » :
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-neutral-300 pt-1">
              <div>• Temps admin : −{Math.round(currentAssumptions.adminTimeReduction * 100)}% (avant pondération)</div>
              <div>• Carburant : −{Math.round(currentAssumptions.fuelSavingRate * 100)}%</div>
              <div>• Entretien : −{Math.round(currentAssumptions.maintenanceSavingRate * 100)}%</div>
              <div>• Incidents : −{Math.round(currentAssumptions.incidentReductionRate * 100)}%</div>
              <div>• Immobilisations : −{Math.round(currentAssumptions.immobilisationReductionRate * 100)}%</div>
            </div>
          </div>

          <p className="text-[10px] text-neutral-400 italic">
            * Ces taux représentent des hypothèses de modélisation couramment observées lors de l’informatisation d’une flotte. Ils ne constituent pas un engagement contractuel ni une garantie d’économie.
          </p>
        </div>
      )}
    </div>
  );
}
