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

const pageMentionsLegales: PageInfo[] = [
  {
    titleH1: "Mentions légales",
  },
  {
    title: "Édition du site",
    text:
      "En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://www.devevoke.com/ l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:\n" +
      "Propriétaire du site : Faradji Boucif - Contact : contact@devevoke.com 06 18 23 76 62 - Adresse : 5 impasse des vergers.\n" +
      "Identification de l'entreprise : EI Faradji Boucif au capital social de € - SIREN : 87843895100013 - RCS ou RM : - Adresse postale : 5 impasse des vergers - \n" +
      "Directeur de la publication : Faradji boucif - Contact : dw.faradji66@yahoo.co.\n" +
      "Hébergeur : OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1 - Téléphone : 1007",
  },
  {
    title: " Propriété intellectuelle et contrefaçons.",
    text:
      "Faradji Boucif est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.\n" +
      "Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Faradji Boucif.\n" +
      "Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.\n",
  },
  {
    title: "Limitations de responsabilité.",
    text:
      "Faradji Boucif ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://www.devevoke.com/.\n" +
      "Faradji Boucif décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://www.devevoke.com/.\n" +
      "Faradji Boucif s’engage à sécuriser au mieux le site https://www.devevoke.com/, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.\n" +
      "Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Faradji Boucif se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.\n" +
      "Le cas échéant, Faradji Boucif se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).\n",
  },
  {
    title: " CNIL et gestion des données personnelles.",
    text:
      "Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site https://www.devevoke.com/ dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : - .\n" +
      "Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre https://www.devevoke.com/politique-confidentialité. [Consignes : ajoutez ici le lien hypertexte vers votre politique de confidentialité]",
  },
  {
    title: "Liens hypertextes et cookies.",
    text:
      "Le site https://www.devevoke.com/ contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers https://www.devevoke.com/.\n" +
      "La navigation sur le site https://www.devevoke.com/ est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.\n" +
      "Un cookie est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.\n" +
      "Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.\n" +
      "Les cookies sont enregistrés pour une durée maximale de 5 mois.\n" +
      "Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre https://www.devevoke.com/politique-confidentialité. [Consignes : ajoutez ici le lien hypertexte vers votre politique de confidentialité ou vers votre politique de cookies si vous en avez une (c'est le cas si vous utilisez Complianz)]\n",
  },
  {
    title: "Droit applicable et attribution de juridiction.",
    text: "Tout litige en relation avec l’utilisation du site https://www.devevoke.com/ est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Perpignan.\n",
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
  pageMentionsLegales,
};
