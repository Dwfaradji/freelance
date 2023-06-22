// Type file for the data
interface Picture {
  id: number;
  imageUrl: string;
  alt: string;
}

interface Item {
  title: string;
  link: string;
}

interface Project {
  id: number;
  title: string;
  image: string;
  alt: string;
  tech: string[];
}

interface Price {
  id: number;
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

export type { Picture, Item, Project, Price, Service, PageInfo };
