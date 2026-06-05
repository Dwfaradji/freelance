import design from '@/images/templates/design_interieur-1920.webp';
import design2 from '@/images/templates/design-2-1920.webp';
import design3 from '@/images/templates/design-3-1920.webp';
import design4 from '@/images/templates/design-4-1920.webp';
import design5 from '@/images/templates/design-5-1920.webp';
import designMobile from '@/images/templates/design_interieur-688.webp';

import plumber from '@/images/templates/plumber-1920.webp';
import plumber2 from '@/images/templates/plumber-2-1920.webp';
import plumber3 from '@/images/templates/plumber-3-1920.webp';
import plumber4 from '@/images/templates/plumber-4-1920.webp';
import plumber5 from '@/images/templates/plumber-5-1920.webp';
import restaurant from '@/images/templates/restaurant-1920.webp';
import restaurant2 from '@/images/templates/restaurant-2-1920.webp';
import restaurant3 from '@/images/templates/restaurant-3-1920.webp';
import restaurant4 from '@/images/templates/restaurant-4-1920.webp';
import restaurant5 from '@/images/templates/restaurant-5-1920.webp';
import realestate from '@/images/templates/real-estate-1-1920.webp';
import realestate2 from '@/images/templates/real-estate-2-1920.webp';
import realestate3 from '@/images/templates/real-estate-3-1920.webp';
import realestate4 from '@/images/templates/real-estate-4-1920.webp';
import realestate5 from '@/images/templates/real-estate-5-1920.webp';
import gym from '@/images/templates/gym-1920.webp';
import gym2 from '@/images/templates/gym-2-1920.webp';
import gym3 from '@/images/templates/gym-3-1920.webp';
import gym4 from '@/images/templates/gym-4-1920.webp';
import gym5 from '@/images/templates/gym-5-1920.webp';
import lawyer from '@/images/templates/lawyer-1920.webp';
import lawyer2 from '@/images/templates/lawyer-2-1920.webp';
import lawyer3 from '@/images/templates/lawyer-3-1920.webp';
import lawyer4 from '@/images/templates/lawyer-4-1920.webp';
import lawyer5 from '@/images/templates/lawyer-5-1920.webp';
import photo from '@/images/templates/photo-1920.webp';
import photo2 from '@/images/templates/photo-2-1920.webp';
import photo3 from '@/images/templates/photo-3-1920.webp';
import photo4 from '@/images/templates/photo-4-1920.webp';
import photo5 from '@/images/templates/photo-5-1920.webp';

import energy from '@/images/templates/energyTemplate-1920.webp';
import energy2 from '@/images/templates/energy-2-1920.webp';
import energy3 from '@/images/templates/energy-3-1920.webp';
import energy4 from '@/images/templates/energy-4-1920.webp';
import energy5 from '@/images/templates/energy-5-1920.webp';
import energyMobile from '@/images/templates/energyTemplate-688.webp';

import hairdresser from '@/images/templates/hairdresser-1920.webp';
import hairdresser2 from '@/images/templates/hairdresser-2-1920.webp';
import hairdresser3 from '@/images/templates/hairdresser-3-1920.webp';
import hairdresser4 from '@/images/templates/hairdresser-4-1920.webp';
import hairdresser5 from '@/images/templates/hairdresser-5-1920.webp';
import hairdresserMobile from '@/images/templates/hairdresser-688.webp';

import medical from '@/images/templates/medicalTemplate-1920.webp';
import medical2 from '@/images/templates/medical-2-1920.webp';
import medical3 from '@/images/templates/medical-3-1920.webp';
import medical4 from '@/images/templates/medical-4-1920.webp';
import medical5 from '@/images/templates/medical-5-1920.webp';
import medicalMobile from '@/images/templates/medicalTemplate-688.webp';

import organic from '@/images/templates/organic-farm-1920.webp';
import organic2 from '@/images/templates/organic-farm-2-1920.webp';
import organic3 from '@/images/templates/organic-farm-3-1920.webp';
import organic4 from '@/images/templates/organic-farm-4-1920.webp';
import organic5 from '@/images/templates/organic-farm-5-1920.webp';
import organicMobile from '@/images/templates/organic-farm-688.webp';

import yoga from '@/images/templates/yogaTemplate-1920.webp';
import yoga2 from '@/images/templates/yoga-2-1920.webp';
import yoga3 from '@/images/templates/yoga-3-1920.webp';
import yoga4 from '@/images/templates/yoga-4-1920.webp';
import yoga5 from '@/images/templates/yoga-5-1920.webp';
import yogaMobile from '@/images/templates/yogaTemplate-688.webp';

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
    title: 'Santé & Médical - Modèle 1 (Clinique Bien-Être) ⚕️',
    image: medical.src,
    imageMobile: medicalMobile.src,
    description:
      'Une vitrine en ligne rassurante et ultra-professionnelle pour votre cabinet médical ou paramédical, avec présentation de vos spécialités.',
    link: `/template/medical/medical-1/index.html`,
    date: '2024-03-04',
    type: 'Santé & Médical',
  },
  {
    id: 2,
    title: 'Beauté & Bien-être - Modèle 1 (Éveil Intérieur) 🧘‍♀️',
    image: yoga.src,
    imageMobile: yogaMobile.src,
    description:
      'Une atmosphère zen et apaisante conçue spécifiquement pour les studios de yoga, thérapeutes et centres de développement personnel.',
    link: `/template/yoga/yoga-1/index.html`,
    date: '2024-02-25',
    type: 'Beauté & Bien-être',
  },
  {
    id: 3,
    title: 'Énergie & Écologie - Modèle 1 (Éco-Futur) ⚡',
    image: energy.src,
    imageMobile: energyMobile.src,
    description:
      "Incarnez la transition énergétique. Un design percutant et engagé pour les entreprises spécialisées dans les énergies renouvelables et durables.",
    link: `/template/energy/energy-1/index.html`,
    date: '2024-02-20',

    type: 'Entreprise & B2B',
  },
  {
    id: 4,
    title: 'Créatif & Design',
    image: design.src,
    imageMobile: designMobile.src,
    description:
      "Laissez votre créativité s'exprimer avec un portfolio immersif et audacieux, idéal pour les agences de communication, designers et architectes.",
    link: `/template/design-interieur/design-interieur-1/index.html`,
    date: '2024-02-27',

    type: 'Créatif & Design',
  },
  {
    id: 5,
    title: 'Agriculture & Nature - Modèle 1 (Terre Nourricière) 🌾',
    image: organic.src,
    imageMobile: organicMobile.src,
    description:
      'Connectez vos clients à la terre avec une plateforme authentique et chaleureuse, pensée pour les exploitations agricoles et les ventes directes.',
    link: `/template/organic/organic-farm-1/index.html`,
    date: '2024-03-04',

    type: 'Agriculture & Nature',
  },
  {
    id: 6,
    title: 'Coiffure & Beauté - Modèle 1 (Salon Tendance) ✂️',
    image: hairdresser.src,
    imageMobile: hairdresserMobile.src,
    description:
      'Attirez une nouvelle clientèle grâce à un site élégant et moderne, mettant en valeur votre savoir-faire en coiffure et esthétique.',
    link: `/template/hairdresser/hairdresser-1/index.html`,
    date: '2024-03-03',
    type: 'Beauté & Bien-être',
  },
  {
    id: 7,
    title: 'Artisanat - Modèle 1 (Plombier Express) 🔧',
    image: plumber.src,
    imageMobile: plumber.src,
    description:
      'Inscrivez votre entreprise dans la réactivité. Un site vitrine direct et efficace pour gérer les urgences et rassurer vos clients.',
    link: `/template/plumber/plumber-1/index.html`,
    date: '2024-06-04',
    type: 'Artisanat',
  },
  {
    id: 8,
    title: 'Restauration - Modèle 1 (Le Gourmet) 🍽️',
    image: restaurant.src,
    imageMobile: restaurant.src,
    description:
      'Mettez l\'eau à la bouche de vos futurs clients avec un design élégant, un menu interactif et un module de réservation intégré.',
    link: `/template/restaurant/restaurant-1/index.html`,
    date: '2024-06-04',
    type: 'Restauration',
  },
  {
    id: 9,
    title: 'Immobilier - Modèle 1 (Agence Premium) 🏠',
    image: realestate.src,
    imageMobile: realestate.src,
    description:
      'Sublimez vos biens immobiliers sous leur meilleur jour avec un design épuré, des galeries photos premium et une navigation fluide.',
    link: `/template/real-estate/real-estate-1/index.html`,
    date: '2024-06-04',
    type: 'Immobilier',
  },
  {
    id: 10,
    title: 'Sport & Coaching - Modèle 1 (Gym Club Fitness) 💪',
    image: gym.src,
    imageMobile: gym.src,
    description:
      'Boostez vos inscriptions avec une plateforme dynamique présentant vos coachs de haut niveau, vos plannings de cours et vos équipements.',
    link: `/template/gym/gym-1/index.html`,
    date: '2024-06-04',
    type: 'Sport & Fitness',
  },
  {
    id: 11,
    title: 'Conseil & Juridique - Modèle 1 (Cabinet d\'Avocats) ⚖️',
    image: lawyer.src,
    imageMobile: lawyer.src,
    description:
      'Inspirez autorité, confiance et discrétion. Une plateforme stricte et prestigieuse pour les cabinets juridiques et conseils en affaires.',
    link: `/template/lawyer/lawyer-1/index.html`,
    date: '2024-06-04',
    type: 'Juridique',
  },
  {
    id: 12,
    title: 'Photographie - Modèle 1 (Studio Photo) 📸',
    image: photo.src,
    imageMobile: photo.src,
    description:
      'Laissez parler vos images avec un portfolio visuel saisissant en très haute définition, idéal pour les photographes professionnels et créateurs.',
    link: `/template/photography/photography-1/index.html`,
    date: '2024-06-04',
    type: 'Photographie',
  },
  {
    id: 13,
    title: 'Restaurant - Modèle 2 (Bistronomie) 🌿',
    image: restaurant2.src,
    imageMobile: restaurant2.src,
    description:
      'Un design épuré, très lumineux et contemporain, conçu spécifiquement pour la restauration "healthy", végétalienne ou la bistronomie moderne.',
    link: `/template/restaurant/restaurant-2/index.html`,
    date: '2024-06-04',
    type: 'Restauration',
  },
  {
    id: 14,
    title: 'Restaurant - Modèle 3 (La Trattoria) 🍕',
    image: restaurant3.src,
    imageMobile: restaurant3.src,
    description:
      'Une ambiance familiale, chaleureuse et rustique, idéale pour une pizzeria ou un restaurant de spécialités traditionnelles.',
    link: `/template/restaurant/restaurant-3/index.html`,
    date: '2024-06-04',
    type: 'Restauration',
  },
  {
    id: 15,
    title: 'Restaurant - Modèle 4 (Tokyo Nights) 🍜',
    image: restaurant4.src,
    imageMobile: restaurant4.src,
    description:
      'Un design cyberpunk urbain avec des néons et des contrastes forts. Parfait pour de la street-food asiatique ou un bar de nuit.',
    link: `/template/restaurant/restaurant-4/index.html`,
    date: '2024-06-04',
    type: 'Restauration',
  },
  {
    id: 16,
    title: 'Restaurant - Modèle 5 (Le Brunch) ☕',
    image: restaurant5.src,
    imageMobile: restaurant5.src,
    description:
      'Un style très bohème, doux et déstructuré avec des polices manuscrites, spécialement créé pour les coffee shops et les brunchs.',
    link: `/template/restaurant/restaurant-5/index.html`,
    date: '2024-06-04',
    type: 'Restauration',
  },
  {
    id: 17,
    title: 'Design Intérieur - Modèle 2 (Nördik) 🤍',
    image: design2.src,
    imageMobile: design2.src,
    description:
      'Un design scandinave ultra minimaliste, axé sur la lumière, le blanc pur et le bois clair. Très épuré.',
    link: `/template/design-interieur/design-interieur-2/index.html`,
    date: '2024-06-04',
    type: 'Design Intérieur',
  },
  {
    id: 18,
    title: 'Design Intérieur - Modèle 3 (Maison Gatsby) 🥂',
    image: design3.src,
    imageMobile: design3.src,
    description:
      'Inspiration Art Déco et Luxe. Un univers sombre avec du noir profond, des touches dorées et des polices majestueuses.',
    link: `/template/design-interieur/design-interieur-3/index.html`,
    date: '2024-06-04',
    type: 'Design Intérieur',
  },
  {
    id: 19,
    title: 'Design Intérieur - Modèle 4 (Maison Bohème) 🌿',
    image: design4.src,
    imageMobile: design4.src,
    description:
      'Un style très organique, doux et arrondi. Des couleurs terracotta, sable et lin pour une ambiance apaisante.',
    link: `/template/design-interieur/design-interieur-4/index.html`,
    date: '2024-06-04',
    type: 'Design Intérieur',
  },
  {
    id: 20,
    title: 'Design Intérieur - Modèle 5 (Raw Studio) 🏗️',
    image: design5.src,
    imageMobile: design5.src,
    description:
      'L\'esprit Loft Industriel : brut de décoffrage, béton, typographie de codeur et couleurs très contrastées (Jaune/Noir).',
    link: `/template/design-interieur/design-interieur-5/index.html`,
    date: '2024-06-04',
    type: 'Design Intérieur',
  },
  {
    id: 21,
    title: 'Gym & Fitness - Modèle 2 (Iron & Sweat) 🏋️',
    image: gym2.src,
    imageMobile: gym2.src,
    description:
      'L\'intensité à l\'état pur. Un thème sombre, agressif, rouge et noir, pensé pour les box de Crossfit ou l\'haltérophilie.',
    link: `/template/gym/gym-2/index.html`,
    date: '2024-06-04',
    type: 'Sport & Fitness',
  },
  {
    id: 22,
    title: 'Gym & Fitness - Modèle 3 (Zen Flow) 🧘',
    image: gym3.src,
    imageMobile: gym3.src,
    description:
      'Un havre de paix. Design très doux, lumineux et aérien. Parfait pour les studios de Yoga, de Pilates ou de bien-être.',
    link: `/template/gym/gym-3/index.html`,
    date: '2024-06-04',
    type: 'Sport & Fitness',
  },
  {
    id: 23,
    title: 'Gym & Fitness - Modèle 4 (Neon Ride) 🚴',
    image: gym4.src,
    imageMobile: gym4.src,
    description:
      'Rapide et électrique. Un mode sombre avec des néons cyan, idéal pour les studios de Spinning et de RPM.',
    link: `/template/gym/gym-4/index.html`,
    date: '2024-06-04',
    type: 'Sport & Fitness',
  },
  {
    id: 24,
    title: 'Gym & Fitness - Modèle 5 (Elite Performance) 🏅',
    image: gym5.src,
    imageMobile: gym5.src,
    description:
      'Le luxe du coaching privé. Des couleurs bleu nuit et or pour une approche haut de gamme du personal training.',
    link: `/template/gym/gym-5/index.html`,
    date: '2024-06-04',
    type: 'Sport & Fitness',
  },
  {
    id: 25,
    title: 'Coiffure & Beauté - Modèle 2 (The Barber Shop) 💈',
    image: hairdresser2.src,
    imageMobile: hairdresser2.src,
    description:
      'Un style très masculin, vintage et old-school. Idéal pour les barbiers traditionnels avec ses tons cuir, noir et laiton.',
    link: `/template/hairdresser/hairdresser-2/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 26,
    title: 'Coiffure & Beauté - Modèle 3 (Color Studio) 🌈',
    image: hairdresser3.src,
    imageMobile: hairdresser3.src,
    description:
      'Ultra pop et vibrant. Un design pensé pour les salons de coiffure modernes spécialisés en colorations extravagantes et balayages.',
    link: `/template/hairdresser/hairdresser-3/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 27,
    title: 'Coiffure & Beauté - Modèle 4 (Haute Coiffure) ✨',
    image: hairdresser4.src,
    imageMobile: hairdresser4.src,
    description:
      'Le luxe absolu. Un design en noir et blanc très épuré, digne des plus grands magazines de mode. Pour visagistes haut de gamme.',
    link: `/template/hairdresser/hairdresser-4/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 28,
    title: 'Coiffure & Beauté - Modèle 5 (L\'Atelier Végétal) 🌿',
    image: hairdresser5.src,
    imageMobile: hairdresser5.src,
    description:
      'Une ambiance 100% naturelle et apaisante. Développé spécifiquement pour les salons utilisant des colorations bio et des soins végétaux.',
    link: `/template/hairdresser/hairdresser-5/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 29,
    title: 'Juridique - Modèle 2 (Modern Tech Law) 💻',
    image: lawyer2.src,
    imageMobile: lawyer2.src,
    description:
      'L\'avocat 2.0. Un design épuré, très "Silicon Valley", parfait pour les cabinets spécialisés en IP/IT, RGPD et startups.',
    link: `/template/lawyer/lawyer-2/index.html`,
    date: '2024-06-04',
    type: 'Juridique',
  },
  {
    id: 30,
    title: 'Juridique - Modèle 3 (The Defender) ⚖️',
    image: lawyer3.src,
    imageMobile: lawyer3.src,
    description:
      'Autorité et combativité. Un thème pénaliste avec des couleurs rouge et noir très tranchées, inspirant force et détermination.',
    link: `/template/lawyer/lawyer-3/index.html`,
    date: '2024-06-04',
    type: 'Juridique',
  },
  {
    id: 31,
    title: 'Juridique - Modèle 4 (Heritage Legal) 🏛️',
    image: lawyer4.src,
    imageMobile: lawyer4.src,
    description:
      'L\'élégance intemporelle. Un thème vert anglais et or pour les notaires, cabinets prestigieux et le droit patrimonial.',
    link: `/template/lawyer/lawyer-4/index.html`,
    date: '2024-06-04',
    type: 'Juridique',
  },
  {
    id: 32,
    title: 'Juridique - Modèle 5 (Family Counsel) 🕊️',
    image: lawyer5.src,
    imageMobile: lawyer5.src,
    description:
      'Empathie et écoute. Un univers très doux (beige, lin) idéal pour le droit de la famille et l\'accompagnement des particuliers.',
    link: `/template/lawyer/lawyer-5/index.html`,
    date: '2024-06-04',
    type: 'Juridique',
  },
  {
    id: 33,
    title: 'Santé & Médical - Modèle 2 (Dental Care) 🦷',
    image: medical2.src,
    imageMobile: medical2.src,
    description:
      'Un design ultra-propre, blanc et bleu, inspirant la pureté et l\'hygiène. Idéal pour les chirurgiens-dentistes et l\'orthodontie.',
    link: `/template/medical/medical-2/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 34,
    title: 'Santé & Médical - Modèle 3 (Therapy & Mind) 🧠',
    image: medical3.src,
    imageMobile: medical3.src,
    description:
      'Une ambiance très douce et rassurante avec des tons chaleureux. Conçu spécifiquement pour les psychologues et thérapeutes.',
    link: `/template/medical/medical-3/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 35,
    title: 'Santé & Médical - Modèle 4 (Little Patients) 🧸',
    image: medical4.src,
    imageMobile: medical4.src,
    description:
      'Un thème pédiatrique doux et légèrement ludique (jaune et bleu ciel) pour rassurer les parents tout en restant très professionnel.',
    link: `/template/medical/medical-4/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 36,
    title: 'Santé & Médical - Modèle 5 (Vision Clinic) 👁️',
    image: medical5.src,
    imageMobile: medical5.src,
    description:
      'L\'alliance de la médecine et de la haute technologie. Un design très net et contrasté pour l\'ophtalmologie et la chirurgie laser.',
    link: `/template/medical/medical-5/index.html`,
    date: '2024-06-04',
    type: 'Santé & Médical',
  },
  {
    id: 37,
    title: 'Agriculture & Nature - Modèle 2 (Artisan Fromager) 🧀',
    image: organic2.src,
    imageMobile: organic2.src,
    description:
      'L\'amour du terroir. Un design rustique, chaleureux (bois, jaune beurre) pensé pour les producteurs laitiers et les fromageries.',
    link: `/template/organic/organic-farm-2/index.html`,
    date: '2024-06-04',
    type: 'Agriculture & Nature',
  },
  {
    id: 38,
    title: 'Agriculture & Nature - Modèle 3 (Domaine Viticole) 🍷',
    image: organic3.src,
    imageMobile: organic3.src,
    description:
      'Prestige et élégance. Une ambiance bordeaux et or pour présenter un vignoble, des millésimes et proposer des dégustations.',
    link: `/template/organic/organic-farm-3/index.html`,
    date: '2024-06-04',
    type: 'Agriculture & Nature',
  },
  {
    id: 39,
    title: 'Agriculture & Nature - Modèle 4 (Panier Bio) 🥕',
    image: organic4.src,
    imageMobile: organic4.src,
    description:
      'Du champ à l\'assiette. Un modèle moderne et dynamique, parfait pour le maraîchage, les AMAP et la livraison de paniers de légumes.',
    link: `/template/organic/organic-farm-4/index.html`,
    date: '2024-06-04',
    type: 'Agriculture & Nature',
  },
  {
    id: 40,
    title: 'Agriculture & Nature - Modèle 5 (Ferme Pédagogique) 🌻',
    image: organic5.src,
    imageMobile: organic5.src,
    description:
      'Ludique et familial. Un design joyeux pour l\'agrotourisme, les fermes pédagogiques ou la cueillette en libre-service.',
    link: `/template/organic/organic-farm-5/index.html`,
    date: '2024-06-04',
    type: 'Agriculture & Nature',
  },
  {
    id: 41,
    title: 'Photographie - Modèle 2 (Wedding Memories) 💍',
    image: photo2.src,
    imageMobile: photo2.src,
    description:
      'L\'élégance du mariage. Un design fin, romantique et lumineux, parfait pour mettre en valeur des photos de couples et de cérémonies.',
    link: `/template/photography/photography-2/index.html`,
    date: '2024-06-04',
    type: 'Photographie',
  },
  {
    id: 42,
    title: 'Photographie - Modèle 3 (Urban & Street) 🏙️',
    image: photo3.src,
    imageMobile: photo3.src,
    description:
      'Le pouls de la ville. Un thème sombre, contrasté et percutant, idéal pour le reportage de rue, l\'architecture et l\'urbex.',
    link: `/template/photography/photography-3/index.html`,
    date: '2024-06-04',
    type: 'Photographie',
  },
  {
    id: 43,
    title: 'Photographie - Modèle 4 (Wild Nature) 🌲',
    image: photo4.src,
    imageMobile: photo4.src,
    description:
      'L\'appel de la nature. Un portfolio immersif et majestueux en grand format pour les photographes paysagistes et animaliers.',
    link: `/template/photography/photography-4/index.html`,
    date: '2024-06-04',
    type: 'Photographie',
  },
  {
    id: 44,
    title: 'Photographie - Modèle 5 (Fashion Editorial) 👠',
    image: photo5.src,
    imageMobile: photo5.src,
    description:
      'L\'avant-garde de la mode. Une présentation asymétrique, colorée et très tendance, digne des plus grands magazines.',
    link: `/template/photography/photography-5/index.html`,
    date: '2024-06-04',
    type: 'Photographie',
  },
  {
    id: 45,
    title: 'Artisanat - Modèle 2 (Électricien) ⚡',
    image: plumber2.src,
    imageMobile: plumber2.src,
    description:
      'L\'énergie sous contrôle. Un design bleu nuit et jaune électrique très moderne, parfait pour l\'électricité générale et la domotique.',
    link: `/template/plumber/plumber-2/index.html`,
    date: '2024-06-04',
    type: 'Artisanat',
  },
  {
    id: 46,
    title: 'Artisanat - Modèle 3 (Menuiserie & Rénovation) 🪚',
    image: plumber3.src,
    imageMobile: plumber3.src,
    description:
      'L\'élégance du sur-mesure. Une ambiance bois et noir, très classe, pour les agenceurs, menuisiers et architectes d\'intérieur.',
    link: `/template/plumber/plumber-3/index.html`,
    date: '2024-06-04',
    type: 'Artisanat',
  },
  {
    id: 47,
    title: 'Artisanat - Modèle 4 (Maçonnerie) 🧱',
    image: plumber4.src,
    imageMobile: plumber4.src,
    description:
      'Des fondations solides. Un thème massif et robuste en orange et gris béton, idéal pour le gros œuvre et les entreprises générales.',
    link: `/template/plumber/plumber-4/index.html`,
    date: '2024-06-04',
    type: 'Artisanat',
  },
  {
    id: 48,
    title: 'Artisanat - Modèle 5 (Paysagiste) 🌿',
    image: plumber5.src,
    imageMobile: plumber5.src,
    description:
      'La beauté de l\'extérieur. Un design aéré, frais et naturel pour mettre en valeur les créations des paysagistes et jardiniers.',
    link: `/template/plumber/plumber-5/index.html`,
    date: '2024-06-04',
    type: 'Artisanat',
  },
  {
    id: 49,
    title: 'Beauté & Bien-être - Modèle 2 (Spa & Détente) 💆‍♀️',
    image: yoga2.src,
    imageMobile: yoga2.src,
    description:
      'L\'art du lâcher-prise. Un design luxueux, aux tons marron glacé et or, pour la balnéothérapie et les massages.',
    link: `/template/yoga/yoga-2/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 50,
    title: 'Beauté & Bien-être - Modèle 3 (Pilates Studio) 🤸‍♀️',
    image: yoga3.src,
    imageMobile: yoga3.src,
    description:
      'Le mouvement en fluidité. Une ambiance dynamique et aérée en rose poudré, parfaite pour le Pilates et la gym douce.',
    link: `/template/yoga/yoga-3/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 51,
    title: 'Beauté & Bien-être - Modèle 4 (Naturopathie) 🌿',
    image: yoga4.src,
    imageMobile: yoga4.src,
    description:
      'L\'équilibre au naturel. Un thème "green" en vert sauge et écru, pensé pour les naturopathes et la médecine douce.',
    link: `/template/yoga/yoga-4/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 52,
    title: 'Beauté & Bien-être - Modèle 5 (Retraite Spirituelle) 🌙',
    image: yoga5.src,
    imageMobile: yoga5.src,
    description:
      'L\'appel de l\'âme. Un design profondément mystique en bleu nuit, idéal pour l\'introspection et la méditation.',
    link: `/template/yoga/yoga-5/index.html`,
    date: '2024-06-04',
    type: 'Beauté & Bien-être',
  },
  {
    id: 53,
    title: 'Énergie & Écologie - Modèle 2 (Solaire Pro) ☀️',
    image: energy2.src,
    imageMobile: energy2.src,
    description:
      'L\'énergie de demain. Un design très lumineux et pro (bleu/jaune) parfait pour les installateurs de panneaux photovoltaïques.',
    link: `/template/energy/energy-2/index.html`,
    date: '2024-06-04',
    type: 'Énergie & Écologie',
  },
  {
    id: 54,
    title: 'Énergie & Écologie - Modèle 3 (Éco-Rénovation) 🍃',
    image: energy3.src,
    imageMobile: energy3.src,
    description:
      'Des factures allégées. Une ambiance douce et rassurante en vert pomme pour l\'isolation et les pompes à chaleur.',
    link: `/template/energy/energy-3/index.html`,
    date: '2024-06-04',
    type: 'Énergie & Écologie',
  },
  {
    id: 55,
    title: 'Énergie & Écologie - Modèle 4 (Wind Power) 🌬️',
    image: energy4.src,
    imageMobile: energy4.src,
    description:
      'Capter l\'invisible. Un modèle très "Corporate/B2B" en bleu clair et blanc, idéal pour les grands projets éoliens.',
    link: `/template/energy/energy-4/index.html`,
    date: '2024-06-04',
    type: 'Énergie & Écologie',
  },
  {
    id: 56,
    title: 'Énergie & Écologie - Modèle 5 (Zero Waste) ♻️',
    image: energy5.src,
    imageMobile: energy5.src,
    description:
      'Rien ne se perd. Un design engagé et impactant (vert forêt / kraft) pour le recyclage et l\'économie circulaire.',
    link: `/template/energy/energy-5/index.html`,
    date: '2024-06-04',
    type: 'Énergie & Écologie',
  },
  {
    id: 57,
    title: 'Immobilier - Modèle 2 (Luxury Estates) ✨',
    image: realestate2.src,
    imageMobile: realestate2.src,
    description:
      'L\'art de vivre à la française. Un design très luxueux en noir profond et or, idéal pour les biens d\'exception et villas de prestige.',
    link: `/template/real-estate/real-estate-2/index.html`,
    date: '2024-06-04',
    type: 'Immobilier',
  },
  {
    id: 58,
    title: 'Immobilier - Modèle 3 (Urban Lofts) 🏭',
    image: realestate3.src,
    imageMobile: realestate3.src,
    description:
      'Trouvez votre prochain spot. Un style industriel en rouge brique et anthracite pour les lofts urbains et appartements atypiques.',
    link: `/template/real-estate/real-estate-3/index.html`,
    date: '2024-06-04',
    type: 'Immobilier',
  },
  {
    id: 59,
    title: 'Immobilier - Modèle 4 (Green Homes) 🌱',
    image: realestate4.src,
    imageMobile: realestate4.src,
    description:
      'Habiter demain en harmonie avec la nature. Une approche éco-responsable pour l\'immobilier neuf et écologique.',
    link: `/template/real-estate/real-estate-4/index.html`,
    date: '2024-06-04',
    type: 'Immobilier',
  },
  {
    id: 60,
    title: 'Immobilier - Modèle 5 (Coastal Living) 🌊',
    image: realestate5.src,
    imageMobile: realestate5.src,
    description:
      'Réveillez-vous face à la mer. Une ambiance bord de mer apaisante pour les propriétés côtières et résidences de vacances.',
    link: `/template/real-estate/real-estate-5/index.html`,
    date: '2024-06-04',
    type: 'Immobilier',
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
