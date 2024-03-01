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

export type { Picture, Item, Project, Price, Service, PageInfo, BlogProps };
