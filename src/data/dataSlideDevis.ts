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

import Template from '@/components/SlideDevis/template/template';
import MultiColorPicker from '@/components/SlideDevis/multiColorPicker/multiColorPicker';
import MultiFontsChoice from '@/components/SlideDevis/multiFontsChoice';
import MultiCheckbox from '@/components/SlideDevis/multiCheckbox';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import image from 'next/image';

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
    title: 'Portail Clinique & Hôpital 🏥',
    image: medical.src,
    imageMobile: medicalMobile.src,
    description: 'Une vitrine rassurante pour votre établissement de santé. Navigation fluide par spécialités et module d\'admission en ligne sécurisé (HDS).',
    link: `/template/medical/medical-1/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
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

const data = [
  {
    title: 'Catalogue de Templates',
    content:
      "Votre empreinte en ligne définit votre succès. Conçus pour les visionnaires, nos 50 templates haut de gamme allient design avant-gardiste et conversions optimisées. Chaque modèle est une promesse d\'excellence, vous garantissant une présence numérique mémorable, parfaitement adaptée à votre secteur d\'activité.",
    ComponentType: Template,
    button: 'Modèles',
    icon: ColorLensIcon,
  },
  {
    title: 'Identité Visuelle & Couleurs',
    content:
      "Parce que votre marque est unique, votre site doit l\'être aussi. Accédez à une personnalisation colorimétrique infinie pour refléter fidèlement votre identité. Chaque nuance est pensée pour valoriser votre image de marque et susciter l\'émotion juste auprès de vos futurs clients.",
    ComponentType: MultiColorPicker,
    button: 'Couleurs',
  },
  {
    title: 'Typographie & Lisibilité',
    content:
      "La typographie est la voix de votre marque. Faites votre choix parmi une sélection rigoureuse de polices professionnelles. Qu\'il soit élégant, audacieux ou minimaliste, le lettrage de votre site sublimera votre message et offrira un confort de lecture optimal à vos visiteurs.",
    ComponentType: MultiFontsChoice,
    button: 'Typographie',
  },
  {
    title: 'Architecture du Site',
    content:
      "De la simple Landing Page (One-Page) ultra-performante au site vitrine complet multi-pages, choisissez la structure qui répond précisément à vos objectifs commerciaux. Une navigation fluide et intuitive pensée pour maximiser la rétention de vos utilisateurs.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['1 page', '2 pages', '3 pages', '4 pages ou plus'],
      page: 'Nombre_de_page',
      valueDefault: '1 page',
    },
    button: 'Architecture',
  },
  {
    title: 'Hébergement Sécurisé',
    content:
      "Profitez d\'une infrastructure cloud ultra-rapide et sécurisée. Nous garantissons des temps de chargement éclair, un certificat SSL (HTTPS) inclus et une disponibilité à 99,9%. Libérez-vous des contraintes techniques, nous propulsons votre site vers l\'excellence.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['1 an', '2 ans', '3 ans', "Sans hébergement"],
      page: 'Hebergement',
      valueDefault: '1 an',
    },
    button: 'Hébergement',
  },
  {
    title: 'Maintenance Proactive',
    content:
      "Votre temps est précieux, concentrez-vous sur votre cœur de métier. Notre équipe assure une veille technique constante, effectue les mises à jour de sécurité et optimise les performances de votre site pour qu\'il reste à la pointe de la technologie au fil des mois.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['1 mois', '6 mois', '1 an', 'Sans maintenance'],
      page: 'Maintenance',
      valueDefault: '1 mois',
    },
    button: 'Maintenance',
  },
  {
    title: 'Design 100% Sur-Mesure',
    content:
      "Vous avez une vision très précise qui dépasse nos templates ? Nos experts en UI/UX Design conçoivent et développent pour vous une interface totalement unique, pensée pixel par pixel pour captiver votre cible et écraser votre concurrence.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['Oui, projet sur-mesure', 'Non, template standard'],
      page: 'Personnalisation',
      valueDefault: 'Non, template standard',
    },
    button: 'Sur-Mesure',
  },
];

export { articles, data };
