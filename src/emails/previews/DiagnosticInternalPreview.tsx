import React from 'react';
import { DiagnosticInternalEmail } from '../templates/diagnostic/DiagnosticInternal';

const mockDiagnostic = {
  firstName: 'Valérie',
  lastName: 'Giraud',
  organization: 'EHPAD Les Chênes Verts',
  email: 'v.giraud@ehpad-chenes.fr',
  phone: '06 55 44 33 22',
  role: 'Directrice d’Établissement',
  structureType: 'EHPAD Associatif',
  siteCount: '2 résidences',
  globalScore: 78,
  maturityLevel: 'Élevé',
  criticalRisksCount: 1,
  criticalRisksSummary: [
    'Absence d’authentification multi-facteurs (MFA) sur la messagerie professionnelle',
    'Processus d’archivage réglementaire des dossiers usagers partiellement papier',
  ],
  topPriorities: [
    'Centralisation des carnets de bord et suivi de flotte',
    'Mise en place d’un portail famille sécurisé et conforme RGPD',
    'Sauvegarde immuable déportée contre les rançongiciels',
  ],
};

export default function DiagnosticInternalPreview() {
  return <DiagnosticInternalEmail data={mockDiagnostic} referenceId="DEV-20261027-DIAG" />;
}
