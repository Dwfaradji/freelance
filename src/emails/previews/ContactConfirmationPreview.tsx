import React from 'react';
import { ContactConfirmationEmail } from '../templates/contact/ContactConfirmation';

const mockContact = {
  firstName: 'Jean',
  lastName: 'Dupont',
  business: 'Exemple SAS',
  email: 'jean.dupont@exemple-sas.fr',
  phone: '06 12 34 56 78',
  subject: 'Développement d’une plateforme SaaS de gestion',
  message: 'Bonjour l’équipe DevEvoke, nous souhaitons automatiser nos processus de gestion et concevoir un portail client sur-mesure.',
};

export default function ContactConfirmationPreview() {
  return <ContactConfirmationEmail data={mockContact} referenceId="DEV-20261027-A7K4P" />;
}
