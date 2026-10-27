import React from 'react';
import { QuoteInternalEmail } from '../templates/quote/QuoteInternal';

const mockQuote = {
  firstName: 'Claire',
  lastName: 'Moreau',
  business: 'Santé Solidaire Association',
  email: 'claire.moreau@sante-solidaire.fr',
  phone: '06 98 76 54 32',
  role: 'Directrice des Opérations',
  establishmentType: 'Établissement médico-social',
  siteCount: '4 sites',
  projectType: 'Application Web & Mobile Nomade',
  budget: '25 000 € - 50 000 €',
  delay: '2 à 3 mois',
  description: 'Nous souhaitons équiper 60 professionnels nomades d’une solution moderne avec synchronisation hors-ligne et hébergement sécurisé ISO 27001.',
};

export default function QuoteInternalPreview() {
  return <QuoteInternalEmail data={mockQuote} referenceId="DEV-20261027-QUOTE" />;
}
