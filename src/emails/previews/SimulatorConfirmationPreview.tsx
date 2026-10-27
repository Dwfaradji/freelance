import React from 'react';
import { SimulatorConfirmationEmail } from '../templates/simulator/SimulatorConfirmation';

const mockSimulator = {
  firstName: 'Benoît',
  lastName: 'Roussel',
  business: 'Association Transport Solidaire 66',
  email: 'b.roussel@transportsolidaire66.org',
  phone: '06 77 88 99 00',
  vehicles: 25,
  annualSavings: 8500,
  roiPercentage: 340,
  paybackMonths: 3.5,
  fullSimulationSummary: '25 véhicules • Économie annuelle estimée : 8 500 € • ROI : 340 % • Payback : 3,5 mois',
};

export default function SimulatorConfirmationPreview() {
  return <SimulatorConfirmationEmail data={mockSimulator} referenceId="DEV-20261027-SIMU" />;
}
