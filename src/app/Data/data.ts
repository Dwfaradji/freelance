// Data file for the website
// import images from "@/Assets/Gallery";
import { Picture, Item, Project, Price, Service, PageInfo } from "./typeFile";
import images from "@/app/Assets/Gallery";

//Project
const projects: Project[] = [
  {
    id: 1,
    title: "Application Web",
    image: String(images.groupomania),
    alt: "image du projet groupomania",
    tech: ["VUE.JS", "NODE.JS", "EXPRESS"],
  },
  {
    id: 2,
    title: "Site Vitrine",
    image: String(images.reservia),
    alt: "image du projet reservia",
    tech: ["HTML", "CSS", "SASS"],
  },
  {
    id: 3,
    title: "E-commerce",
    image: String(images.kanap),
    alt: "image du projet kanap",
    tech: ["REACT.JS"],
  },
  {
    id: 4,
    title: "Application Web",
    image: String(images.piquante),
    alt: "image du projet piquante",
    tech: ["MONGO DB", "NODE.JS", "EXPRESS"],
  },
  {
    id: 5,
    title: "Référencement",
    image: String(images.chouetteAgence),
    alt: "image du projet chouette agence",
    tech: ["SEO"],
  },
  {
    id: 6,
    title: "E-commerce",
    image: String(images.ohmyfood),
    alt: "image du projet ohmyfood",
    tech: ["REACT.JS", "SASS"],
  },
  {
    id: 7,
    title: "Site Vitrine",
    image: String(images.gameOne),
    alt: "image du projet game one",
    tech: ["JS"],
  },
  {
    id: 8,
    title: "Site Vitrine",
    image: String(images.fishEyes),
    alt: "image du projet fish eyes",
    tech: ["REACT.JS"],
  },
  {
    id: 9,
    title: "Site Vitrine",
    image: String(images.kasa),
    alt: "image du projet kasa",
    tech: ["REACT.JS"],
  },
];
// images du header background
const picturesCarousel: Picture = {
  id: 1,
  imageUrl: images.pictureHeader,
  alt: "image d'arrière plan",
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

//Pages footer information
const pageInfosPrice: PageInfo[] = [
  {
    titleH1: "Tarifs pour les services de développement web",
  },
  {
    title: "Tarif journalier",
    text: `Mon tjm standard est de 350€ Ce tarif horaire est
        applicable à tous les projets de développement web, y compris la
        conception de sites web, le développement d'applications web et
        l'intégration de systèmes tiers. Le tarif horaire est calculé en
        fonction du temps total passé sur le projet, y compris la communication
        avec le client, la planification, le développement, les tests et la mise
        en production du site web. Je m'assure de respecter les délais convenus
        et de fournir un travail de haute qualité à chaque étape du processus.`,
  },
  {
    title: "Tarif forfaitaire",
    text: `Je propose également des forfaits pour les projets de développement web. Le prix forfaitaire est
        calculé en fonction de la complexité du projet, du temps estimé pour le développement et de la
        valeur ajoutée pour le client. Le prix forfaitaire est fixé avant le début du projet et ne change pas
        pendant le développement. Je m'assure de respecter les délais convenus et de fournir un travail
        de haute qualité à chaque étape du processus.`,
  },
  {
    title: "Forfaits personnalisés",
    text: `En plus du tarif horaire, je propose également des forfaits
          personnalisés pour des projets plus importants ou des besoins
          spécifiques. Les forfaits sont conçus pour offrir une solution complète
          et incluent généralement des fonctionnalités supplémentaires telles que
          l'intégration de systèmes tiers, la création de pages supplémentaires,
          l'optimisation du référencement, etc. Les tarifs des forfaits peuvent
          varier en fonction de la portée du projet et des exigences spécifiques
          du client. Pour plus d'informations sur les forfaits disponibles, veuillez
          me contacter.`,
  },
  {
    title: "Devis personnalisé",
    text: `Chaque projet est unique, c'est pourquoi je propose des devis
          personnalisés en fonction des besoins spécifiques de chaque client.
          Lorsque vous me contactez pour discuter de votre projet, je prendrai en
          compte vos exigences, vos objectifs et votre budget pour vous fournir un
          devis détaillé et transparent. Le devis comprendra une estimation du
          temps nécessaire, les fonctionnalités incluses et le coût total du
          projet. Je m'assure de fournir des devis précis et transparents afin que
          vous sachiez exactement ce que vous obtenez et combien cela vous coûtera
          avant de commencer le projet.
          `,
  },
  {
    title: "Modalités de paiement",
    text: `Les modalités de paiement sont flexibles et peuvent être convenues avec
          chaque client en fonction de ses préférences. Généralement, je demande
          un acompte initial avant de commencer le projet, suivi de paiements
          échelonnés à des étapes clés du développement. Les modalités de paiement
          précises seront discutées et formalisées dans le contrat de services.`,
  },
  {
    title: "Contactez-moi",
    text: `Je suis fier d'offrir des tarifs compétitifs et transparents à mes
          clients tout en maintenant un niveau élevé de qualité et de
          satisfaction. N'hésitez pas à me contacter pour discuter de votre projet
          et obtenir un devis personnalisé. Je suis impatient de travailler avec
          vous pour donner vie à votre vision sur le web.`,
  },
];

const pageInfosProcess: PageInfo[] = [
  {
    titleH1: "Processus de réalisation d'un site web",
  },
  {
    title: "Étape 1 : Compréhension des besoins du client",
    text: `Le processus commence par une communication approfondie avec le client
          afin de comprendre ses objectifs, ses besoins et ses préférences pour le
          site web. Il est important de poser des questions pertinentes pour
          obtenir toutes les informations nécessaires.`,
  },
  {
    title: "Étape 2 : Analyse et planification",
    text: `Sur la base des informations recueillies, le développeur freelance
          effectue une analyse approfondie des besoins du client. Cette étape
          implique la définition des fonctionnalités requises, la sélection des
          technologies appropriées et l'estimation du temps et des ressources
          nécessaires pour le projet.`,
  },
  {
    title: "Étape 3 : Conception et prototypage",
    text: `Une fois la planification terminée, le développeur freelance crée une
          maquette ou un prototype du site web. Cela permet au client de
          visualiser le design, la disposition et la structure du site avant de
          passer à la phase de développement.`,
  },

  {
    title: "Étape 4 : Développement du site web",
    text: `Dans cette phase, le développeur freelance utilise les langages de
          programmation et les technologies appropriées pour créer le site web
          selon les spécifications convenues. Il assure également l'optimisation
          des performances, la compatibilité avec les navigateurs et la prise en
          compte des bonnes pratiques en matière de sécurité.`,
  },
  {
    title: "Étape 5 : Tests et corrections",
    text: `Une fois le développement terminé, le site web est soumis à des tests
          approfondis pour vérifier son bon fonctionnement, son accessibilité et
          sa convivialité. Si des problèmes ou des bogues sont identifiés, des
          corrections sont apportées pour garantir la qualité du site final.`,
  },
  {
    title: "Étape 6 : Livraison et déploiement",
    text: `Une fois que le site web est testé et validé, il est prêt à être livré
          au client. Le développeur freelance peut aider le client à déployer le
          site sur un serveur ou un hébergement web, en s'assurant que tout est
          configuré correctement pour une mise en ligne réussie.`,
  },
  {
    title: "Étape 7 : Maintenance et support",
    text: `Après la livraison du site web, le développeur freelance peut proposer
          des services de maintenance et de support supplémentaires. Cela peut
          inclure la résolution des problèmes techniques, les mises à jour du
          site, la surveillance de la sécurité et l'assistance continue au client
          en cas de besoin.`,
  },
  {
    title: "Conclusion",
    text: `Le processus de réalisation d'un site web en tant que développeur
          freelance, suivre un processus structuré pour la réalisation d'un site
          web est essentiel pour garantir la satisfaction du client et la qualité
          du travail fourni. En comprenant les besoins du client, en planifiant
          soigneusement, en concevant, en développant, en testant et en livrant le
          site web, vous créez une expérience fluide et professionnelle.`,
  },
];

export {
  services,
  projects,
  prices,
  navItems,
  picturesCarousel,
  pageInfosPrice,
  pageInfosProcess,
};
