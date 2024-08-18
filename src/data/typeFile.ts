// Type file for the data
interface Picture {
  id: number;
  imageUrl: string;
  alt: string;
}

interface Item {
  title: string;
  link: string;
  scroll: boolean;
}

interface Project {
  id: number;
  title: string;
  image: string;
  alt: string;
  tech: string[];
  link: string;
}

interface Price {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  details: string[];
}

interface Lists {
  id: number;
  title: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  items: Lists[];
}

interface PageInfo {
  titleH1?: string;
  title?: string;
  text?: string;
}

interface Text {
  title: string;
  text: string;
}

interface BlogProps {
  id: string;
  title: string;
  descriptionShort: string;
  descriptionLong: Text[];
  img: any;
  alt: string;
  readingTime: number;
  category: string;
  date: string;
}

interface IFormData {
  nom: string;
  email: string;
  telephone: string;
  descriptionProjet: string;
  budgetEstime: string; // Renommé pour plus de clarté
  dateDebut: string;
  commentaires: string;
  budgetRange: string;
  maquette: string;
  cahier: string;
  projet: string;
  logo: string;
  images: string;
  textes: string;
  questions: Question[];
  siret?: number;
  radioSelections: { [key: string]: string };
  send: boolean;
}

interface Question {
  questionText: string; // Renommé pour plus de clarté
  type: string;
  id: string;
  label: string;
  label2: string;
}

export type {
  Picture,
  Item,
  Project,
  Price,
  Service,
  PageInfo,
  BlogProps,
  Question,
  IFormData
};
