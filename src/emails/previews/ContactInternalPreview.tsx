import React from 'react';
import { ContactInternalEmail } from '../templates/contact/ContactInternal';

const mockContact = {
  firstName: 'Jean',
  lastName: 'Dupont',
  business: 'Exemple SAS',
  email: 'jean.dupont@exemple-sas.fr',
  phone: '06 12 34 56 78',
  role: 'Directeur Général',
  establishmentType: 'PME Industrielle',
  siteCount: '2 sites',
  subject: 'Développement d’une plateforme SaaS de gestion',
  message: 'Bonjour l’équipe DevEvoke, nous souhaitons automatiser nos processus de gestion et concevoir un portail client sur-mesure.',
};

export default function ContactInternalPreview() {
  return <ContactInternalEmail data={mockContact} referenceId="DEV-20261027-A7K4P" />;
}
