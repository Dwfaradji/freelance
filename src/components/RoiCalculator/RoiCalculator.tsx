'use client';

import React from 'react';
import { FleetInputs } from '@/lib/roi/types';
import FleetSimulatorTool from './FleetSimulatorTool';

export interface RoiCalculatorProps {
  initialInputs?: Partial<FleetInputs>;
  defaultFloticarAnnualCost?: number;
  className?: string;
}

/**
 * Simulateur de gains Floticar (Refonte UX Modal par étapes).
 * Encapsule FleetSimulatorTool avec transitions slides, calcul déterministe
 * et rendu modal immersif sans formulaire lourd.
 */
export default function RoiCalculator(props: RoiCalculatorProps) {
  return <FleetSimulatorTool {...props} />;
}
