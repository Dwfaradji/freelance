import React from 'react';
import { DemoConfirmationEmail } from '../templates/demo/DemoConfirmation';

const mockDemo = {
  firstName: 'Antoine',
  lastName: 'Lemoine',
  business: 'IME Les Glycines',
  email: 'a.lemoine@ime-glycines.fr',
  phone: '06 11 22 33 44',
  role: 'Responsable des Moyens Généraux',
  establishmentType: 'IME (Institut Médico-Éducatif)',
  vehicleCount: '14 véhicules',
  demoFocus: 'Floticar (Gestion de Flotte & Carnets de bord)',
  preferredSlot: 'Mardi 10h00 - 10h30',
  notes: 'Besoin de suivre les contrôles techniques, les plannings et l’affectation des véhicules.',
};

export default function DemoConfirmationPreview() {
  return <DemoConfirmationEmail data={mockDemo} referenceId="DEV-20261027-DEMO" />;
}
