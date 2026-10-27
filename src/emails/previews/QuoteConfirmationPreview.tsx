import React from 'react';
import { QuoteConfirmationEmail } from '../templates/quote/QuoteConfirmation';

const mockQuote = {
  firstName: 'Claire',
  lastName: 'Moreau',
  business: 'Santé Solidaire Association',
  email: 'claire.moreau@sante-solidaire.fr',
  phone: '06 98 76 54 32',
  projectType: 'Application Web & Mobile Nomade',
  budget: '25 000 € - 50 000 €',
  delay: '2 à 3 mois',
  description: 'Nous souhaitons équiper 60 professionnels nomades d’une solution moderne avec synchronisation hors-ligne et hébergement sécurisé ISO 27001.',
};

export default function QuoteConfirmationPreview() {
  return <QuoteConfirmationEmail data={mockQuote} referenceId="DEV-20261027-QUOTE" />;
}
