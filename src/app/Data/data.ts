// Data file for the website
// import images from "@/Assets/Gallery";
import { Picture, Item, Project, Price, Service } from "./typeFile";
import images from "@/app/Assets/Gallery";

//Project
const projects: Project[] = [
  {
    id: 1,
    title: "Application Web",
    image: String(images.groupomania),
    tech: ["VUE.JS", "NODE.JS", "EXPRESS", "MYSQL"],
  },
  {
    id: 2,
    title: "Site Vitrine",
    image: String(images.reservia),
    tech: ["HTML", "CSS", "SASS"],
  },
  {
    id: 3,
    title: "E-commerce",
    image: String(images.kanap),
    tech: ["REACT.JS"],
  },
  {
    id: 4,
    title: "Application Web",
    image: String(images.piquante),
    tech: ["MONGO DB", "NODE.JS", "EXPRESS"],
  },
  {
    id: 5,
    title: "Référencement",
    image: String(images.chouetteAgence),
    tech: ["SEO"],
  },
  {
    id: 6,
    title: "E-commerce",
    image: String(images.ohmyfood),
    tech: ["REACT.JS", "SASS"],
  },
  {
    id: 7,
    title: "Site Vitrine",
    image: String(images.gameOne),
    tech: ["JS"],
  },
  {
    id: 8,
    title: "Site Vitrine",
    image: String(images.fishEyes),
    tech: ["REACT.JS"],
  },
  {
    id: 9,
    title: "Site Vitrine",
    image: String(images.kasa),
    tech: ["REACT.JS"],
  },
];
// images du header background
const picturesCarousel: Picture = {
  id: 1,
  imageUrl: images.pictureHeader,
};
//Navigation
const navItems: Item[] = [
  { title: "Accueil", link: "home" },
  { title: "A propos", link: "about" },
  { title: "Projet", link: "project" },
  { title: "Services", link: "services" },
  { title: "Contact", link: "contact" },
  { title: "Tarif", link: "tarif" },
];

//Tarifs
const prices: Price[] = [
  {
    id: 0,
    title: "Formule Essentielle",
    subtitle: "Site Vitrine",
    price: "999€",
    description: `Obtenez un site vitrine professionnel et moderne qui mettra en valeur votre
            entreprise. Cette formule comprend la conception personnalisée, l'intégration HTML/CSS,
            la gestion de contenu, l'optimisation SEO de base et l'intégration des médias sociaux.
            Augmentez votre visibilité en ligne avec un site vitrine convaincant et engageant. `,
    details: [
      "Charte graphique à partir d'une maquette pré-définie",
      "Sélection d'une palette de couleur",
      "Domaine + hébergement",
      "e-mail pendant 12 mois",
      "Interface administrateur",
      "STANDARD",
      "Site responsive (adapté tous supports)",
      "Mise en place du contenu (textes & images)",
      "Formulaire de contact",
      "Liens de partage sur les réseaux sociaux",
      "Optimisation du référencement",
      "Statistiques de visite",
      "Mise en ligne du site",
      "Formation utilisation du site",
    ],
  },
  {
    id: 1,
    title: "Formule Premium",
    subtitle: "Site E-commerce",
    price: "2499€",
    description: `Lancez votre boutique en ligne avec cette formule complète. Nous concevrons et
                            développerons un site e-commerce attractif et convivial, doté de fonctionnalités
                            avancées telles que le panier d'achat, les options de paiement sécurisé, la gestion des
                            stocks et l'intégration des plateformes de livraison. Maximisez vos ventes en ligne avec
                            un site e-commerce puissant et optimisé pour le référencement.`,
    details: [
      "Charte graphique personnalisée",
      "Proposition de logo",
      "Domaine + hébergement + e-mail pendant 12 mois",
      "Installation & configuration des plugins choisis",
      "Site responsive (adapté tous supports)",
      "Mise en place du contenu (textes & images)",
      "Formulaire de contact & Map",
      "Liens de partage sur les réseaux sociaux",
      "Optimisation du référencement et des performances",
      "Statistiques de visite",
      "Mise en ligne du site",
      "Formation utilisation du site",
    ],
  },
  {
    id: 2,
    title: "Formule Pro",
    subtitle: "Application Web",
    price: "4999€",
    description: `Obtenez une application sur mesure pour votre entreprise. Notre équipe d'experts
                            développera une application web ou mobile avec des fonctionnalités personnalisées
                            répondant à vos besoins spécifiques. Nous nous assurerons que votre application est
                            conviviale, réactive et optimisée pour une expérience utilisateur exceptionnelle. Faites
                            passer votre entreprise au niveau supérieur avec une application moderne et performante. `,
    details: [
      "Étude des besoins et spécifications",
      "Conception de l'architecture de l'application",
      "Design de l'interface utilisateur",
      "Développement du front-end",
      "Développement du back-end",
      "Intégration de bases de données",
      "Mise en place de fonctionnalités avancées",
      "Tests et débogage",
      "Optimisation des performances",
      "Compatibilité multiplateforme",
      "Sécurité de l'application",
      "Mise en production de l'application",
      "Support et maintenance",
      "Formation à l'utilisation de l'application",
    ],
  },
];
//Service
const services: Service[] = [
  {
    id: 0,
    title: "Design de site internet",
    description: ` Le design de votre site internet est réalisé sur mesure et répond aux standards web du W3C.
                Il est optimisé pour le référencement naturel (SEO) et est adapté à tous les supports (ordinateur, tablette, smartphone).`,

    items: [
      { id: 1, title: "Maquette Figma" },
      {
        id: 2,
        title: "Design responsive (adaptable ordinateur, tablette, smartphone)",
      },
    ],
  },
  {
    id: 1,
    title: "Développement d'application mobile",
    description: `Le développement d’application mobile est indispensable pour améliorer la visibilité de ses activités. 
            Le développement de votre application mobile est réalisé avec soin et répond aux standards web du W3C.`,
    items: [
      { id: 1, title: "HTML5 & CSS3" },
      {
        id: 2,
        title: String(
          "Design responsive (adaptable ordinateur, tablette, smartphone)"
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Référencement (SEO)",
    description: `Le référencement naturel (SEO) est un service qui permet d’augmenter la visibilité de votre
                        site internet sur les moteurs de recherche. Il s’agit d’un service gratuit qui permet d’obtenir
                        des résultats sur le long terme.`,
    items: [
      { id: 1, title: "Audit de référencement" },
      { id: 2, title: "Optimisation de référencement" },
      { id: 3, title: "Suivi de référencement" },
    ],
  },

  {
    id: 3,
    title: "Hébergement",
    description: `L’hébergement de votre site internet est un service indispensable pour que votre site soit
                        accessible sur internet. Nous vous proposons un hébergement de qualité, sécurisé et adapté à vos
                        besoins.`,
    items: [
      { id: 1, title: "Hébergement de qualité" },
      { id: 2, title: "Hébergement sécurisé" },
      { id: 3, title: "Hébergement adapté à vos besoins" },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    description: `La maintenance de votre site internet est un service indispensable pour garantir le bon
                        fonctionnement de votre site internet. Nous vous proposons un service de maintenance adapté à vos
                        besoins.`,
    items: [
      { id: 1, title: "Maintenance de qualité" },
      { id: 2, title: "Maintenance sécurisée" },
      { id: 3, title: "Maintenance adaptée à vos besoins" },
    ],
  },
  {
    id: 5,
    title: "Formation",
    description: `La formation est un service qui vous permet d’être autonome dans la gestion de votre site
                        internet. Nous vous proposons une formation adaptée à vos besoins.`,
    items: [
      { id: 1, title: "Formation de qualité" },
      { id: 2, title: "Formation sécurisée" },
      { id: 3, title: "Formation adaptée à vos besoins" },
    ],
  },
];

export { services, projects, prices, navItems, picturesCarousel };
