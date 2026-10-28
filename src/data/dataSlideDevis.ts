import etablissementMedicoSocial from '@/images/templates/etablissement-medico-social-1920.webp';
import etablissementMedicoSocialMobile from '@/images/templates/etablissement-medico-social-688.webp';
import cabinetDentaire from '@/images/templates/cabinet-dentaire-orthodontie-1920.webp';
import psychologieTherapie from '@/images/templates/psychologie-therapie-1920.webp';
import pediatrieMaternite from '@/images/templates/pediatrie-maternite-1920.webp';
import ophtalmologieVision from '@/images/templates/ophtalmologie-vision-1920.webp';

import sophrologieStress from '@/images/templates/sophrologie-gestion-stress-1920.webp';
import sophrologieStressMobile from '@/images/templates/sophrologie-gestion-stress-688.webp';
import reeducationBalneo from '@/images/templates/reeducation-balneotherapie-1920.webp';
import psychomotriciteErgo from '@/images/templates/psychomotricite-ergotherapie-1920.webp';
import naturopathie from '@/images/templates/naturopathie-medecines-douces-1920.webp';
import explorationSommeil from '@/images/templates/exploration-sommeil-somnologie-1920.webp';

import ehpadResidence from '@/images/templates/ehpad-residence-seniors-1920.webp';
import residenceAutonomie from '@/images/templates/residence-autonomie-seniors-1920.webp';

import droitMedical from '@/images/templates/droit-medical-consulting-sante-1920.webp';
import aideADomicile from '@/images/templates/aide-a-domicile-saad-ssiad-1920.webp';

import kinesitherapieSport from '@/images/templates/kinesitherapie-sport-osteopathie-1920.webp';
import dietetiqueNutrition from '@/images/templates/dietetique-nutrition-clinique-1920.webp';

interface Article {
  id: number;
  title: string;
  image: string;
  imageMobile: string;
  description: string;
  link: string;
  date: string;
  type: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Portail Établissement Médico-Social 🏢',
    image: etablissementMedicoSocial.src,
    imageMobile: etablissementMedicoSocialMobile.src,
    description: 'Une vitrine moderne et accessible pour votre établissement médico-social ou associatif. Navigation fluide par pôles d\'accompagnement et formulaire de contact sécurisé.',
    link: `/templates/etablissement-medico-social.html`,
    date: '2024-06-04',
    type: 'Médico-Social & Santé',
  },
  {
    id: 2,
    title: 'Cabinet Dentaire & Orthodontie 🦷',
    image: cabinetDentaire.src,
    imageMobile: cabinetDentaire.src,
    description: 'Un design ultra-propre et clinique, inspirant l\'hygiène et le sourire. Intègre un portail patient pour la prise de rendez-vous et le suivi des soins.',
    link: `/templates/cabinet-dentaire-orthodontie.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 3,
    title: 'Cabinet de Psychologie & Thérapie 🧠',
    image: psychologieTherapie.src,
    imageMobile: psychologieTherapie.src,
    description: 'Une ambiance très douce, chaleureuse et apaisante. Conçu spécifiquement pour les psychologues, psychiatres et professionnels de la santé mentale.',
    link: `/templates/psychologie-therapie.html`,
    date: '2024-06-04',
    type: 'Santé Mentale',
  },
  {
    id: 4,
    title: 'Pédiatrie & Maternité 🧸',
    image: pediatrieMaternite.src,
    imageMobile: pediatrieMaternite.src,
    description: 'Un environnement doux et rassurant pour les parents et les enfants. Idéal pour les pédiatres, sages-femmes et centres PMI.',
    link: `/templates/pediatrie-maternite.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 5,
    title: 'Centre d\'Ophtalmologie & Vision 👁️',
    image: ophtalmologieVision.src,
    imageMobile: ophtalmologieVision.src,
    description: 'L\'alliance de la médecine et de la haute technologie. Un design net et contrasté pour l\'ophtalmologie, la chirurgie laser et l\'optique.',
    link: `/templates/ophtalmologie-vision.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 6,
    title: 'Sophrologie & Gestion du Stress 🧘‍♀️',
    image: sophrologieStress.src,
    imageMobile: sophrologieStressMobile.src,
    description: 'Un espace zen pour promouvoir les techniques de relaxation, de respiration et la gestion des risques psychosociaux (RPS).',
    link: `/templates/sophrologie-gestion-stress.html`,
    date: '2024-06-07',
    type: 'Bien-être & Prévention',
  },
  {
    id: 7,
    title: 'Centre de Rééducation & Balnéothérapie 💧',
    image: reeducationBalneo.src,
    imageMobile: reeducationBalneo.src,
    description: 'Un design centré sur la récupération corporelle et le soin par l\'eau. Parfait pour les centres de rééducation fonctionnelle.',
    link: `/templates/reeducation-balneotherapie.html`,
    date: '2024-06-05',
    type: 'Paramédical & Soins',
  },
  {
    id: 8,
    title: 'Cabinet de Psychomotricité & Ergothérapie 🤸',
    image: psychomotriciteErgo.src,
    imageMobile: psychomotriciteErgo.src,
    description: 'Une ambiance dynamique, aérée et douce, parfaitement adaptée pour la rééducation motrice et cognitive.',
    link: `/templates/psychomotricite-ergotherapie.html`,
    date: '2024-06-05',
    type: 'Paramédical & Soins',
  },
  {
    id: 9,
    title: 'Naturopathie & Médecines Alternatives 🌿',
    image: naturopathie.src,
    imageMobile: naturopathie.src,
    description: 'L\'équilibre au naturel. Un thème organique et végétal pensé pour les naturopathes et la phytothérapie clinique.',
    link: `/templates/naturopathie-medecines-douces.html`,
    date: '2024-06-05',
    type: 'Bien-être & Prévention',
  },
  {
    id: 10,
    title: 'Centre d\'Exploration du Sommeil 🌙',
    image: explorationSommeil.src,
    imageMobile: explorationSommeil.src,
    description: 'Un design crépusculaire en bleu nuit. Parfaitement adapté pour la somnologie, les thérapies de l\'insomnie et l\'apnée du sommeil.',
    link: `/templates/exploration-sommeil-somnologie.html`,
    date: '2024-06-07',
    type: 'Santé Mentale',
  },
  {
    id: 11,
    title: 'EHPAD & Résidence Seniors Premium 🏡',
    image: ehpadResidence.src,
    imageMobile: ehpadResidence.src,
    description: 'Un portail chaleureux et prestigieux pour mettre en avant le cadre de vie, les soins apportés et faciliter le contact avec les familles.',
    link: `/templates/ehpad-residence-seniors.html`,
    date: '2024-06-06',
    type: 'Médico-Social & EHPAD',
  },
  {
    id: 12,
    title: 'Résidence Autonomie Éco-Responsable 🌱',
    image: residenceAutonomie.src,
    imageMobile: residenceAutonomie.src,
    description: 'Mettez en valeur une approche intergénérationnelle et écologique de l\'habitat pour les seniors autonomes.',
    link: `/templates/residence-autonomie-seniors.html`,
    date: '2024-06-06',
    type: 'Médico-Social & EHPAD',
  },
  {
    id: 13,
    title: 'Diététique & Nutrition Clinique 🥗',
    image: dietetiqueNutrition.src,
    imageMobile: dietetiqueNutrition.src,
    description: 'Design épuré et "healthy" pour les cabinets de diététique, l\'accompagnement nutritionnel et les troubles du comportement alimentaire.',
    link: `/templates/dietetique-nutrition-clinique.html`,
    date: '2024-06-06',
    type: 'Paramédical & Soins',
  },
  {
    id: 14,
    title: 'Kinésithérapie du Sport & Ostéopathie 🏃‍♂️',
    image: kinesitherapieSport.src,
    imageMobile: kinesitherapieSport.src,
    description: 'Un design centré sur le mouvement, la récupération et la performance. Parfait pour la biomécanique et le sport de haut niveau.',
    link: `/templates/kinesitherapie-sport-osteopathie.html`,
    date: '2024-06-05',
    type: 'Paramédical & Soins',
  },
  {
    id: 15,
    title: 'Droit Médical & Consulting Santé ⚖️',
    image: droitMedical.src,
    imageMobile: droitMedical.src,
    description: 'Prestige et confidentialité. Idéal pour les cabinets d\'avocats spécialisés en droit de la santé, conformité RGPD ou consulting médico-social.',
    link: `/templates/droit-medical-consulting-sante.html`,
    date: '2024-06-07',
    type: 'E-Santé & Consulting',
  },
  {
    id: 16,
    title: 'Services d\'Aide à Domicile (SAAD) & SSIAD 🤝',
    image: aideADomicile.src,
    imageMobile: aideADomicile.src,
    description: 'Empathie et accompagnement. Un site pensé pour faciliter les démarches des aidants familiaux et coordonner l\'aide à la personne.',
    link: `/templates/aide-a-domicile-saad-ssiad.html`,
    date: '2024-06-06',
    type: 'Médico-Social & EHPAD',
  }
];

export { articles };
