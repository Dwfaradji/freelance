'use client';

import React from 'react';
import RoiCalculator from '@/components/RoiCalculator/RoiCalculator';
import { FleetInputs } from '@/lib/roi/types';

interface FleetCostCalculatorProps {
  initialInputs?: Partial<FleetInputs>;
  defaultFloticarAnnualCost?: number;
  className?: string;
}

/**
 * Composant de compatibilité descendante.
 * Réutilise et encapsule le nouveau RoiCalculator modulaire et typé.
 */
export default function FleetCostCalculator(props: FleetCostCalculatorProps) {
  return <RoiCalculator {...props} />;
}
