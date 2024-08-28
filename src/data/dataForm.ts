import { Question } from '@/data/typeFile';

const questions: Question[] = [
  // Définition des questions ici...
  {
    questionText: 'Êtes vous un particulier ou un professionnel?',
    type: 'radio',
    id: 'typeClient',
    label: 'Particulier',
    label2: 'Professionnel',
  },
  {
    questionText: 'Ce projet est il existant ?',
    type: 'radio',
    id: 'projet',
    label: 'Oui',
    label2: 'Non',
  },
  {
    questionText: 'Avez vous une maquette?',
    type: 'radio',
    id: 'maquette',
    label: 'Oui',
    label2: 'Non',
  },

  {
    questionText: 'Avez vous un cahier des charges?',
    type: 'radio',
    id: 'cahier',
    label: 'Oui',
    label2: 'Non',
  },
  {
    questionText: 'Avez vous un logo?',
    type: 'radio',
    id: 'logo',
    label: 'Oui',
    label2: 'Non',
  },
  {
    questionText: 'Avez vous des images ou videos à nous fournir ?',
    type: 'radio',
    id: 'images',
    label: 'Oui',
    label2: 'Non',
  },
  {
    questionText:
      'Avez vous des textes de présentation de votre activité à nous fournir ?',
    type: 'radio',
    id: 'textPresentation',
    label: 'Oui',
    label2: 'Non',
  },
  {
    questionText:
      'Avez vous des textes de vos produits et services à nous fournir ?',
    type: 'radio',
    id: 'textServices',
    label: 'Oui',
    label2: 'Non',
  },
];
export default questions;
