import medical from '@/images/templates/medicalTemplate-1920.webp';
import medical2 from '@/images/templates/medical-2-1920.webp';
import medical3 from '@/images/templates/medical-3-1920.webp';
import medical4 from '@/images/templates/medical-4-1920.webp';
import medical5 from '@/images/templates/medical-5-1920.webp';
import medicalMobile from '@/images/templates/medicalTemplate-688.webp';

import yoga from '@/images/templates/yogaTemplate-1920.webp';
import yogaMobile from '@/images/templates/yogaTemplate-688.webp';
import yoga2 from '@/images/templates/yoga-2-1920.webp';
import yoga3 from '@/images/templates/yoga-3-1920.webp';
import yoga4 from '@/images/templates/yoga-4-1920.webp';
import yoga5 from '@/images/templates/yoga-5-1920.webp';

import realestate from '@/images/templates/real-estate-1-1920.webp';
import realestate4 from '@/images/templates/real-estate-4-1920.webp';

import lawyer from '@/images/templates/lawyer-1920.webp';
import lawyer5 from '@/images/templates/lawyer-5-1920.webp';

import gym3 from '@/images/templates/gym-3-1920.webp';
import restaurant2 from '@/images/templates/restaurant-2-1920.webp';

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

// const url = "https://www.devevoke.com";
// const url = "http://localhost:3000";

const articles: Article[] = [
  {
    id: 1,
    title: 'Portail Établissement Médico-Social 🏢',
    image: medical.src,
    imageMobile: medicalMobile.src,
    description: 'Une vitrine moderne et accessible pour votre établissement médico-social ou associatif. Navigation fluide par pôles d\'accompagnement et formulaire de contact sécurisé.',
    link: `/template/medical/medical-1/index.html`,
    date: '2024-06-04',
    type: 'Médico-Social & Santé',
  },
  {
    id: 2,
    title: 'Cabinet Dentaire & Orthodontie 🦷',
    image: medical2.src,
    imageMobile: medical2.src, // Using same for mobile placeholder
    description: 'Un design ultra-propre et clinique, inspirant l\'hygiène et le sourire. Intègre un portail patient pour la prise de rendez-vous et le suivi des soins.',
    link: `/template/medical/medical-2/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 3,
    title: 'Cabinet de Psychologie & Thérapie 🧠',
    image: medical3.src,
    imageMobile: medical3.src,
    description: 'Une ambiance très douce, chaleureuse et apaisante. Conçu spécifiquement pour les psychologues, psychiatres et professionnels de la santé mentale.',
    link: `/template/medical/medical-3/index.html`,
    date: '2024-06-04',
    type: 'Santé Mentale',
  },
  {
    id: 4,
    title: 'Pédiatrie & Maternité 🧸',
    image: medical4.src,
    imageMobile: medical4.src,
    description: 'Un environnement doux et rassurant pour les parents et les enfants. Idéal pour les pédiatres, sages-femmes et centres PMI.',
    link: `/template/medical/medical-4/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 5,
    title: 'Centre d\'Ophtalmologie & Vision 👁️',
    image: medical5.src,
    imageMobile: medical5.src,
    description: 'L\'alliance de la médecine et de la haute technologie. Un design net et contrasté pour l\'ophtalmologie, la chirurgie laser et l\'optique.',
    link: `/template/medical/medical-5/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 6,
    title: 'Sophrologie & Gestion du Stress 🧘‍♀️',
    image: yoga.src,
    imageMobile: yogaMobile.src,
    description: 'Un espace zen pour promouvoir les techniques de relaxation, de respiration et la gestion des risques psychosociaux (RPS).',
    link: `/template/yoga/yoga-1/index.html`,
    date: '2024-06-07',
    type: 'Bien-être & Prévention',
  },
  {
    id: 7,
    title: 'Centre de Rééducation & Balnéothérapie 💧',
    image: yoga2.src,
    imageMobile: yoga2.src,
    description: 'Un design centré sur la récupération corporelle et le soin par l\'eau. Parfait pour les centres de rééducation fonctionnelle.',
    link: `/template/yoga/yoga-2/index.html`,
    date: '2024-06-05',
    type: 'Paramédical & Soins',
  },
  {
    id: 8,
    title: 'Cabinet de Psychomotricité & Ergothérapie 🤸',
    image: yoga3.src,
    imageMobile: yoga3.src,
    description: 'Une ambiance dynamique, aérée et douce, parfaitement adaptée pour la rééducation motrice et cognitive.',
    link: `/template/yoga/yoga-3/index.html`,
    date: '2024-06-05',
    type: 'Paramédical & Soins',
  },
  {
    id: 9,
    title: 'Naturopathie & Médecines Alternatives 🌿',
    image: yoga4.src,
    imageMobile: yoga4.src,
    description: 'L\'équilibre au naturel. Un thème organique et végétal pensé pour les naturopathes et la phytothérapie clinique.',
    link: `/template/yoga/yoga-4/index.html`,
    date: '2024-06-05',
    type: 'Bien-être & Prévention',
  },
  {
    id: 10,
    title: 'Centre d\'Exploration du Sommeil 🌙',
    image: yoga5.src,
    imageMobile: yoga5.src,
    description: 'Un design crépusculaire en bleu nuit. Parfaitement adapté pour la somnologie, les thérapies de l\'insomnie et l\'apnée du sommeil.',
    link: `/template/yoga/yoga-5/index.html`,
    date: '2024-06-07',
    type: 'Santé Mentale',
  },
  {
    id: 11,
    title: 'EHPAD & Résidence Seniors Premium 🏡',
    image: realestate.src,
    imageMobile: realestate.src,
    description: 'Un portail chaleureux et prestigieux pour mettre en avant le cadre de vie, les soins apportés et faciliter le contact avec les familles.',
    link: `/template/real-estate/real-estate-1/index.html`,
    date: '2024-06-06',
    type: 'Médico-Social & EHPAD',
  },
  {
    id: 12,
    title: 'Résidence Autonomie Éco-Responsable 🌱',
    image: realestate4.src,
    imageMobile: realestate4.src,
    description: 'Mettez en valeur une approche intergénérationnelle et écologique de l\'habitat pour les seniors autonomes.',
    link: `/template/real-estate/real-estate-4/index.html`,
    date: '2024-06-06',
    type: 'Médico-Social & EHPAD',
  },
  {
    id: 13,
    title: 'Diététique & Nutrition Clinique 🥗',
    image: restaurant2.src,
    imageMobile: restaurant2.src,
    description: 'Design épuré et "healthy" pour les cabinets de diététique, l\'accompagnement nutritionnel et les troubles du comportement alimentaire.',
    link: `/template/restaurant/restaurant-2/index.html`,
    date: '2024-06-06',
    type: 'Paramédical & Soins',
  },
  {
    id: 14,
    title: 'Kinésithérapie du Sport & Ostéopathie 🏃‍♂️',
    image: gym3.src,
    imageMobile: gym3.src,
    description: 'Un design centré sur le mouvement, la récupération et la performance. Parfait pour la biomécanique et le sport de haut niveau.',
    link: `/template/gym/gym-3/index.html`,
    date: '2024-06-05',
    type: 'Paramédical & Soins',
  },
  {
    id: 15,
    title: 'Droit Médical & Consulting Santé ⚖️',
    image: lawyer.src,
    imageMobile: lawyer.src,
    description: 'Prestige et confidentialité. Idéal pour les cabinets d\'avocats spécialisés en droit de la santé, conformité RGPD ou consulting médico-social.',
    link: `/template/lawyer/lawyer-1/index.html`,
    date: '2024-06-07',
    type: 'E-Santé & Consulting',
  },
  {
    id: 16,
    title: 'Services d\'Aide à Domicile (SAAD) & SSIAD 🤝',
    image: lawyer5.src,
    imageMobile: lawyer5.src,
    description: 'Empathie et accompagnement. Un site pensé pour faciliter les démarches des aidants familiaux et coordonner l\'aide à la personne.',
    link: `/template/lawyer/lawyer-5/index.html`,
    date: '2024-06-06',
    type: 'Médico-Social & EHPAD',
  }
];

const data: any[] = [];
export { articles, data };
