import design from '@/images/templates/design_interieur.webp';
import energy from '@/images/templates/energyTemplate.webp';
import hairdresser from '@/images/templates/hairdresser.webp';
import medical from '@/images/templates/medicalTemplate.webp';
import organic from '@/images/templates/organic-farm.webp';
import yoga from '@/images/templates/yogaTemplate.webp';
import Template from '@/components/SlideDevis/template/template';
import MultiColorPicker from '@/components/SlideDevis/multiColorPicker/multiColorPicker';
import MultiFontsChoice from '@/components/SlideDevis/multiFontsChoice';
import MultiCheckbox from '@/components/SlideDevis/multiCheckbox';
import ColorLensIcon from '@mui/icons-material/ColorLens';

interface Article {
  id: number;
  title: string;
  image: any;
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
    title: 'Clinique Bien-Être ⚕️',
    image: medical,
    description:
      'Créez un site web professionnel et rassurant pour votre clinique médicale avec ce template intuitif et personnalisable.',
    link: `/template/mediplus/index.html/`,
    date: '2024-03-04',
    type: 'Santé',
  },
  {
    id: 2,
    title: 'Éveil Intérieur ‍♀️',
    image: yoga,
    description:
      'Trouvez votre équilibre intérieur et explorez votre potentiel avec ce template conçu pour les yogis de tous niveaux.',
    link: `/template/yoga/index.html/`,
    date: '2024-02-25',
    type: 'Détente',
  },
  {
    id: 3,
    title: 'Éco-Futur',
    image: energy,
    description:
      "Engagez-vous dans la transition écologique et donnez vie à votre projet d'énergie renouvelable avec ce template dynamique et informatif.",
    link: `/template/renewableEnergy/index.html/`,
    date: '2024-02-20',

    type: 'Energies renouvelable',
  },
  {
    id: 4,
    title: 'Studio Créatif',
    image: design,
    description:
      'Exprimez votre vision unique et présentez votre entreprise avec style grâce à ce template flexible et adaptable à tous les domaines du design.',
    link: `/template/design-interieur/index.html`,
    date: '2024-02-27',

    type: 'design',
  },
  {
    id: 5,
    title: 'Terre nourricière',
    image: organic,
    description:
      'Valorisez votre exploitation agricole et partagez votre passion avec ce template authentique et convivial.',
    link: `/template/organic-farm/index.html`,
    date: '2024-03-04',

    type: 'Agriculture',
  },
  {
    id: 6,
    title: 'Salon Tendance ‍♀',
    image: hairdresser,
    description:
      'Mettez en valeur votre talent et attirez de nouveaux clients avec ce template élégant et moderne dédié aux professionnels de la coiffure.',
    link: `/template/hairdresser/index.html`,
    date: '2024-03-03',
    type: 'Coiffure',
  },
];

const data = [
  {
    title: 'Template',
    content:
      "Dans l'univers professionnel actuel, votre empreinte en ligne définit le succès. Conçus pour les visionnaires, nos templates allient design avant-gardiste, fonctionnalité impeccable et flexibilité totale, vous équipant pour vous distinguer. Explorez une collection où chaque modèle est une promesse d'excellence et d'adaptabilité, garantissant que votre présence en ligne soit non seulement remarquée, mais mémorable. Faites le choix de l'excellence professionnelle dès aujourd'hui.",
    ComponentType: Template,
    button: 'Template',
    icon: ColorLensIcon,
  },
  {
    title: 'Couleur',
    content:
      "Définissez le succès dans le monde professionnel avec nos templates sur-mesure : design avant-gardiste, fonctionnalité sans faille, et une adaptabilité exceptionnelle, incluant la personnalisation complète des couleurs pour refléter votre identité unique. Chaque choix est une promesse d'excellence, assurant que votre présence en ligne ne soit pas seulement vue, mais ressentie. Embrassez l'excellence professionnelle et la personnalisation totale dès maintenant.",
    ComponentType: MultiColorPicker,
    button: 'Couleur',
  },

  {
    title: 'Fonts',
    content:
      "Dans le paysage numérique actuel, marquez votre différence avec nos templates conçus pour les professionnels exigeants. Offrant un design moderne, une fonctionnalité sans faille et une adaptabilité remarquable, nos templates vous permettent de personnaliser entièrement la police de caractères pour qu'elle parle véritablement de votre marque. Chaque templates est une invitation à l'excellence, assurant que votre présence en ligne soit distincte et mémorable. Embrassez une identité visuelle qui vous est propre dès aujourd'hui.",
    ComponentType: MultiFontsChoice,
    button: 'Fonts',
  },
  {
    title: 'Nombre de page',
    content:
      "Élevez votre présence en ligne avec nos templates sur mesure, conçus pour les professionnels à la recherche d'excellence. Dotés d'un design moderne, d'une fonctionnalité irréprochable, et d'une adaptabilité inégalée, nos templates vous offrent la liberté de définir le nombre de app, vous permettant ainsi de créer un site qui s'adapte parfaitement à votre contenu et reflète fidèlement votre identité de marque. Chaque templates est une promesse d'impact et de distinction. Personnalisez votre site jusqu'au nombre de app et démarquez-vous dès aujourd'hui.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['1', '2', '3', '4 ou plus'],
      page: 'Nombre_de_page',
      valueDefault: '1',
    },
    button: 'Page',
  },
  {
    title: 'Hébergement',
    content:
      "Découvrez la synergie parfaite entre design exceptionnel et performance inégalée avec nos templates et notre service d'hébergement dédié aux professionnels. Conçus pour transcender les attentes, nos templates modernes, fonctionnels et entièrement personnalisables, associés à une solution d'hébergement fiable et sécurisée, garantissent que votre site ne se contente pas d'exister, mais excelle en ligne. Profitez de la liberté de modeler votre site à l'image de votre marque, tout en bénéficiant d'une infrastructure d'hébergement de premier plan. Faites le choix d'une présence en ligne sans compromis et propulsez votre projet vers de nouveaux sommets dès aujourd'hui.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['1 an', '2 ans', '3 ans', "Pas d'hébergement"],
      page: 'Hebergement',
      valueDefault: '1 an',
    },
    button: 'Hébergement',
  },
  {
    title: 'Maintenance',
    content:
      "Chez Devevoke, nous comprenons que votre temps en tant que professionnel est précieux. C'est pourquoi notre service de maintenance de sites web est conçu pour vous offrir la tranquillité d'esprit. Nous prenons en charge la maintenance proactive, la surveillance continue, et les mises à jour nécessaires pour que votre site reste optimal, sécurisé, et à jour, vous libérant ainsi de toute préoccupation technique. Laissez Devevoke s'occuper de votre présence en ligne pendant que vous vous concentrez sur ce que vous savez faire de mieux.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['1 mois', '6 mois', '1 an', 'Pas de maintenance'],
      page: 'Maintenance',
      valueDefault: '1 mois',
    },
    button: 'Maintenance',
  },
  {
    title: 'Personnalisation',
    content:
      "Chez Devevoke, nous transformons votre vision en réalité avec des sites web entièrement personnalisés. Comprendre vos besoins uniques est notre priorité, ce qui nous permet de concevoir et développer des solutions sur mesure qui captent l'essence de votre marque et répondent précisément à vos objectifs. Profitez d'une expérience de personnalisation sans précédent, où chaque aspect de votre site, de la conception à la fonctionnalité, est façonné pour vous distinguer. Choisissez Devevoke pour une présence en ligne qui transcende le standard et reflète véritablement votre identité professionnelle.",
    ComponentType: MultiCheckbox,
    props: {
      options: ['Oui', 'Non'],
      page: 'Personnalisation',
      valueDefault: 'Non',
    },
    button: 'Personnalisation',
  },
];

export { articles, data };
