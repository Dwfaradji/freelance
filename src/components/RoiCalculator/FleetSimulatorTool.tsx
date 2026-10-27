'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { buildFullFleetSimulation } from '@/lib/roi/calculator';
import { DEFAULT_FLEET_INPUTS, STORAGE_KEY_ROI_SIMULATION } from '@/lib/roi/constants';
import { FleetInputs, FleetProblemId } from '@/lib/roi/types';
import FleetSimulatorModal from './FleetSimulatorModal';
import FleetSimulatorTrigger from './FleetSimulatorTrigger';

interface FleetSimulatorToolProps {
  initialInputs?: Partial<FleetInputs>;
  defaultFloticarAnnualCost?: number;
  className?: string;
}

export default function FleetSimulatorTool({
  initialInputs,
  defaultFloticarAnnualCost,
  className = '',
}: FleetSimulatorToolProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputs, setInputs] = useState<FleetInputs>(() => ({
    ...DEFAULT_FLEET_INPUTS,
    ...initialInputs,
    ...(defaultFloticarAnnualCost ? { annualFloticarCost: defaultFloticarAnnualCost } : {}),
  }));
  const [selectedProblems, setSelectedProblems] = useState<FleetProblemId[]>([
    'maintenance',
    'technical_inspection',
  ]);
  const [hasStarted, setHasStarted] = useState(false);

  // Restauration de session client
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = window.sessionStorage.getItem(STORAGE_KEY_ROI_SIMULATION);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed === 'object') {
            if (parsed.inputs) setInputs((prev) => ({ ...prev, ...parsed.inputs }));
            if (parsed.problems) setSelectedProblems(parsed.problems);
            if (parsed.hasStarted) setHasStarted(parsed.hasStarted);
          }
        }
      }
    } catch {
      // Ignorer silencieusement
    }
  }, []);

  // Sauvegarde session client
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem(
          STORAGE_KEY_ROI_SIMULATION,
          JSON.stringify({
            inputs,
            problems: selectedProblems,
            hasStarted,
          })
        );
      }
    } catch {
      // Ignorer
    }
  }, [inputs, selectedProblems, hasStarted]);

  // Calcul du résultat complet de la simulation
  const simulation = useMemo(() => {
    return buildFullFleetSimulation(inputs, selectedProblems);
  }, [inputs, selectedProblems]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setHasStarted(true);
    if (typeof window !== 'undefined' && 'gtag' in window) {
      try {
        (window as unknown as { gtag: (type: string, name: string) => void }).gtag(
          'event',
          'fleet_simulator_opened'
        );
      } catch {
        // Ignorer
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputsChange = (updates: Partial<FleetInputs>) => {
    setInputs((prev) => ({ ...prev, ...updates }));
    setHasStarted(true);
  };

  const handleProblemsChange = (problems: FleetProblemId[]) => {
    setSelectedProblems(problems);
    setHasStarted(true);
  };

  const handleReset = () => {
    setInputs({
      ...DEFAULT_FLEET_INPUTS,
      ...initialInputs,
      ...(defaultFloticarAnnualCost ? { annualFloticarCost: defaultFloticarAnnualCost } : {}),
    });
    setSelectedProblems(['maintenance', 'technical_inspection']);
    setHasStarted(false);
    try {
      if (typeof window !== 'undefined') {
        window.sessionStorage.removeItem(STORAGE_KEY_ROI_SIMULATION);
      }
    } catch {
      // Ignorer
    }
  };

  return (
    <div className={className}>
      {/* 1. Carte interactive de déclenchement sur la page */}
      <FleetSimulatorTrigger
        onOpen={handleOpenModal}
        onReset={handleReset}
        hasStarted={hasStarted}
        simulation={simulation}
      />

      {/* 2. Mini-application interactive en modal par étape */}
      <FleetSimulatorModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        inputs={inputs}
        onInputsChange={handleInputsChange}
        selectedProblems={selectedProblems}
        onProblemsChange={handleProblemsChange}
        onReset={handleReset}
        simulation={simulation}
      />
    </div>
  );
}
