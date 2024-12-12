// data file for the website
import { Project, Price, Service, PageInfo } from './typeFile';

import fenixSolutions from '@/images/projects/fenixSolutions.webp';
import kellerWilliams from '@/images/projects/kw.webp';
import pizzeriaMenu from '@/images/projects/appPizza-home-1920.webp';
import commApp from '@/images/projects/appCom-customers-1920.webp';

//Project
const projects: Project[] = [
  {
    id: 0,
    title: 'Fénix Solutions',
    subtitle: 'Création Carousel Youtube',
    description: `En tant que développeur Full-Stack, j'ai contribué à la création d'une plateforme de gestion des tâches collaboratives.`,
    details: `Notre mission : concevoir une application web flexible pour la gestion efficace des projets et des équipes, avec des fonctionnalités de chat en temps réel.`,
    results: `Résultats : une augmentation significative de la productivité des équipes, une meilleure communication et une gestion plus efficace des projets.`,
    image: String(fenixSolutions.src),
    alt: 'image du projet fenix solutions',
    tech: ['Vue3,', ' Node,', ' ApiRest'],
    link: 'https://www.fenixsolutions.fr/',
  },
  {
    id: 1,
    title: 'Keller Williams',
    subtitle: 'Création site web et application',
    description: `En tant que développeur Front-End, j'ai contribué à la création d'une plateforme immobilière intuitive.`,
    details: `Notre mission : concevoir une plateforme conviviale pour les agents immobiliers, avec un tableau de bord personnalisable.`,
    results: `Résultats : une expérience utilisateur exceptionnelle, avec un tableau de bord permettant aux agents de modeler leur espace virtuel en toute simplicité.`,

    image: String(kellerWilliams.src),
    alt: 'image du projet keller williams',
    tech: ['Next,', ' React,', ' Symfony,', ' Docker'],
    link: 'https://kwoxygene.fr/',
  },
  {
    id: 2,
    title: 'Pizzeria Menu',
    subtitle: 'Menu interactif pour Pizzeria',
    description: `En tant que développeur Front-End, j'ai conçu une application web intuitive permettant aux pizzerias de présenter un menu interactif à leurs clients.`,
    details: `Notre mission : proposer une solution moderne et élégante pour les pizzerias, leur permettant de digitaliser leur menu tout en offrant une expérience utilisateur fluide.`,
    results: `Résultats : une augmentation de l'engagement des clients grâce à une navigation fluide et une présentation visuellement attrayante des produits.`,

    image: String(pizzeriaMenu.src),
    alt: 'image du projet pizzeria menu',
    tech: ['Next.js', 'Tailwind CSS', 'React.js', 'GitHub', 'Vercel'],
    link: '"https://restaurant-pizza-rho.vercel.app/"',
  },
  {
    id: 3,
    title: 'Solutions Commerciales',
    subtitle: 'Application Interactive pour les Commerces',
    description: `En tant que développeur Front-End, j'ai conçu une application web innovante qui permet aux commerces de moderniser leur présentation de produits et services grâce à une interface interactive.`,
    details: `Notre mission : offrir aux entreprises une solution digitale clé en main, leur permettant de captiver leur clientèle avec un affichage moderne.`,
    results: `Résultats : une augmentation de la satisfaction et de la fidélité des clients grâce à une expérience utilisateur améliorée.`,

    image: String(commApp.src),
    alt: 'image du projet pizzeria menu',
    tech: ['Next.js', 'Tailwind CSS', 'React.js', 'GitHub', 'Vercel', 'Sql'],
    link: 'https://app-commercial.vercel.app/',
  },
];

// // images du header background
// const picturesCarousel: Picture = {
//   id: 1,
//   imageUrl: images.pictureHeader,
//   alt: "image d'arrière plan",
// };
// //Navigation
// const navItems: Item[] = [
//   { title: "Accueil", link: "accueil", scroll: true },
//   { title: "Projet", link: "project", scroll: true },
//   { title: "Tarif", link: "tarif", scroll: true },
//   { title: "Contact", link: "contact", scroll: true },
//   { title: "Services", link: "services", scroll: true },
//   { title: "A propos", link: "About", scroll: true },
//   { title: "Blog", link: "blog", scroll: false },
// ];

// //Tarifs
const prices: Price[] = [
  {
    id: '1',
    title: 'Formule Essentielle',
    subtitle: 'Site Vitrine',
    price: '999 €',
    description: `Un site vitrine professionnel et moderne pour valoriser votre entreprise. 
      Cette formule inclut une conception personnalisée, l'intégration HTML/CSS ou WordPress, 
      la gestion de contenu, l'optimisation de base pour le SEO, et l'intégration des réseaux sociaux. 
      Idéal pour renforcer votre présence en ligne avec un site attrayant et engageant.`,
    details: [
      'Charte graphique basée sur une maquette pré-définie',
      'Palette de couleurs personnalisée',
      'Domaine et hébergement inclus',
      'Adresse e-mail professionnelle pendant 12 mois',
      'Interface administrateur',
      'Site responsive (compatible tous supports)',
      'Mise en place du contenu (textes et images)',
      'Formulaire de contact',
      'Liens vers les réseaux sociaux',
      'Optimisation SEO basique',
      'Statistiques de visite',
      'Mise en ligne du site',
      'Formation à l’utilisation du site',
    ],
  },
  {
    id: '2',
    title: 'Formule Premium',
    subtitle: 'Site E-commerce',
    price: '3 000 €',
    description: `Lancez votre boutique en ligne avec un site e-commerce complet et optimisé. 
      Cette formule comprend un design attractif, un panier d'achat intuitif, des options de paiement sécurisé, 
      la gestion des stocks, et l'intégration des solutions de livraison. Maximisez vos ventes grâce à un site 
      puissant et ergonomique.`,
    details: [
      'Charte graphique sur mesure',
      'Proposition de logo',
      'Domaine, hébergement et e-mail inclus pour 12 mois',
      'Installation et configuration des plugins nécessaires',
      'Site responsive (adapté à tous les supports)',
      'Mise en place du contenu (textes et images)',
      'Formulaire de contact et carte interactive',
      'Liens de partage sur les réseaux sociaux',
      'Optimisation SEO avancée',
      'Statistiques de performance',
      'Mise en ligne de la boutique',
      'Formation à l’utilisation de l’interface',
    ],
  },
  {
    id: '3',
    title: 'Formule Pro',
    subtitle: 'CRM sur mesure',
    price: '4 999 €',
    description: `Améliorez vos relations clients avec un CRM sur mesure. 
      Conçu pour centraliser et automatiser la gestion de vos interactions, cette solution vous aide à mieux organiser 
      vos ventes, fidéliser vos clients, et analyser vos performances pour maximiser vos résultats.`,
    details: [
      'Analyse des besoins et personnalisation',
      'Conception d’une base de données client',
      'Outils pour suivre les prospects et opportunités',
      'Automatisation des campagnes marketing',
      'Tableaux de bord et reporting détaillés',
      'Outils pour gérer le support client (tickets, requêtes)',
      'Sécurisation des données clients',
      'Formation à l’utilisation du CRM',
      'Support technique et maintenance',
    ],
  },
  {
    id: '4',
    title: 'Formule SaaS',
    subtitle: 'Plateformes complètes',
    price: '9 999 €',
    description: `Créez une plateforme SaaS puissante, intuitive et évolutive. Cette formule inclut 
      le développement complet de solutions adaptées à vos objectifs, avec des outils avancés pour répondre 
      aux besoins de vos utilisateurs.`,
    details: [
      'Analyse des besoins et définition des fonctionnalités',
      'Conception de l’interface utilisateur',
      'Développement front-end et back-end',
      'Intégration d’API et de bases de données',
      'Gestion des abonnements et paiements récurrents',
      'Sécurité avancée des données',
      'Tests fonctionnels et de charge',
      'Mise en production sur serveurs dédiés',
      'Documentation utilisateur et technique',
      'Support technique 24/7',
      'Maintenance évolutive et mises à jour',
      "Formation à l'utilisation de la plateforme",
    ],
  },
  {
    id: '5',
    title: 'Formule Blockchain',
    subtitle: 'Application Web3',
    price: ' 15 000€',
    description: `Transformez vos idées en réalité avec une application blockchain innovante. 
      Idéale pour les projets NFT, DeFi, ou DAO, cette solution intègre les dernières technologies 
      décentralisées, avec un focus sur les smart contracts et la sécurité.`,
    details: [
      'Analyse des besoins et définition de l’architecture blockchain',
      'Développement de smart contracts personnalisés',
      'Audit de sécurité des smart contracts',
      'Intégration Web3 (MetaMask, WalletConnect)',
      'Tests sur testnet',
      'Déploiement sur mainnet',
      'Documentation technique détaillée',
      'Formation à l’utilisation de la solution',
      'Support et maintenance post-déploiement',
      'Optimisation des coûts en gas',
      'Interface utilisateur Web3 intuitive',
      'Intégration IPFS (si nécessaire)',
      'Monitoring et mises à jour',
    ],
  },
];

const dataPriceOptions = [
  {
    title: 'Maintenance',
    price: '49€/Mois',
    description:
      "Chez DevEvoke, nous comprenons l'importance de maintenir votre site web en parfait état. Nos forfaits sont là pour vous simplifier la vie",
    details: [
      'Mises à jour régulières du système et des plugins',
      'Sauvegardes automatiques régulières',
      ' Assistance prioritaire par e-mail',
      'Analyse de la sécurité et protection contre les menaces potentielles',
    ],
  },
  {
    title: 'Hébergement',
    price: '50€/An',
    description:
      "Confiez l'hébergement de votre site web à DevEvoke et profitez d'une solution fiable, sécurisée et performante pour votre présence en ligne.",
    details: [
      'Stabilité et Fiabilité',
      'Performances Optimales',
      'Sécurité Avancée',
      'Support Expert',
    ],
  },
];

// //Service
const services: Service[] = [
  {
    id: 0,
    title: 'Création et Refonte de sites web sur mesure',
    description: `Confiez-nous votre site web ! En tant que développeurs web freelance,
    nous concevons des sites personnalisés et modernes, adaptés à vos besoins spécifiques.
    Que vous souhaitiez créer un nouveau site ou donner un coup de neuf à votre site existant,
    nous sommes là pour vous.
    Nous nous occupons du design, de la programmation et de l'optimisation pour les appareils mobiles.
      `,

    items: [
      { id: 1, title: 'WordPress, React & NextJs 13' },
      {
        id: 2,
        title: 'Design responsive, Tailwind CSS',
      },
      { id: 3, title: 'Certifié W3C, SEO' },
    ],
  },
  {
    id: 1,
    title: "Développement d'applications personnalisées et performantes",
    description: `Nous sommes spécialisés dans le développement d'applications web sur mesure,
    utilisant les dernières technologies et frameworks. DevEvoke vous accompagne
    de la conception à la mise en œuvre, en intégrant des fonctionnalités avancées et une interface utilisateur intuitive.
    Que vous ayez besoin d'une application de gestion,
    d'une plateforme e-commerce, d'un outil collaboratif ou d'une blockchain, nous concevons des solutions adaptées à vos besoins`,
    items: [
      { id: 1, title: 'React & NextJs 13, Web3' },
      {
        id: 2,
        title: 'Symfony 5 & PHP 8',
      },
      { id: 3, title: 'MongoDB & MySQL' },
    ],
  },
  {
    id: 2,
    title: 'Optimisation et référencement pour une visibilité maximale',
    description: `Améliorez le classement de votre site web grâce à notre expertise en optimisation et référencement.
    Nous utilisons des techniques avancées pour optimiser les balises, le contenu et les mots clés, afin de générer un
    trafic qualifié. Notre objectif est d'augmenter votre visibilité sur les moteurs de recherche, notamment Google, en
    mettant en place des stratégies de création de liens efficaces. Contactez-nous dès maintenant pour discuter de votre
    projet de référencement et propulsez votre site web vers de nouveaux sommets.`,
    items: [
      { id: 1, title: 'Audit de référencement' },
      { id: 2, title: 'Optimisation de référencement' },
      { id: 3, title: 'Suivi de référencement' },
    ],
  },

  {
    id: 3,
    title: 'Hébergement',
    description: `Maximisez la visibilité de votre site internet grâce à notre service d'hébergement de qualité.
     Bénéficiez d'un hébergement sécurisé et performant adapté aux besoins spécifiques de votre site, favorisant
      ainsi un meilleur référencement et une expérience utilisateur optimale.`,
    items: [
      { id: 1, title: 'Qualité, sécurité, adaptation' },
      { id: 2, title: 'Hébergement optimal' },
      { id: 3, title: 'Service sur mesure' },
    ],
  },
  {
    id: 4,
    title: 'Maintenance',
    description: `Assurez la stabilité et la performance de votre site internet grâce à notre service de maintenance
     professionnelle. Notre équipe expérimentée veille à la mise à jour régulière de votre site, à la correction des
      bugs et à la résolution rapide des problèmes techniques, assurant ainsi un fonctionnement fluide et sans interruption.`,
    items: [
      { id: 1, title: 'Essentielle pour votre site' },
      { id: 2, title: 'Adaptée à vos besoins' },
      { id: 3, title: 'Bon fonctionnement assuré' },
    ],
  },
  {
    id: 5,
    title: 'Formation',
    description: `Gagnez en autonomie et en confiance dans la gestion de votre site internet grâce à notre programme de
    formation personnalisée. Apprenez les techniques de gestion de contenu, le référencement, l'optimisation des performances
    et d'autres compétences essentielles pour vous démarquer et réussir en ligne.`,
    items: [
      { id: 1, title: 'Autonomie garantie' },
      { id: 2, title: 'Gestion de site simplifiée' },
      { id: 3, title: 'Compétences acquises' },
    ],
  },
];

//Pages footer information
const pageInfosPrice: PageInfo[] = [
  {
    titleH1: 'Tarifs pour les services de développement web',
  },
  {
    title: 'Tarif journalier',
    text: `Mon tjm standard est de 600€ Ce tarif journalier est
        applicable à tous les projets de développement web, y compris la
        conception de sites web, le développement d'applications web et
        l'intégration de systèmes tiers. Le tarif journalier est calculé en
        fonction du temps total passé sur le projet, y compris la communication
        avec le client, la planification, le développement, les tests et la mise
        en production du site web. Je m'assure de respecter les délais convenus
        et de fournir un travail de haute qualité à chaque étape du processus.`,
  },
  {
    title: 'Tarif forfaitaire',
    text: `Je propose également des forfaits pour les projets de développement web. Le prix forfaitaire est
        calculé en fonction de la complexité du projet, du temps estimé pour le développement et de la
        valeur ajoutée pour le client. Le prix forfaitaire est fixé avant le début du projet et ne change pas
        pendant le développement. Je m'assure de respecter les délais convenus et de fournir un travail
        de haute qualité à chaque étape du processus.`,
  },
  {
    title: 'Forfaits personnalisés',
    text: `Je propose également des forfaits
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
    title: 'Devis personnalisé',
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
    title: 'Modalités de paiement',
    text: `Les modalités de paiement sont flexibles et peuvent être convenues avec
          chaque client en fonction de ses préférences. Généralement, je demande
          un acompte initial avant de commencer le projet, suivi de paiements
          échelonnés à des étapes clés du développement. Les modalités de paiement
          précises seront discutées et formalisées dans le contrat de services.`,
  },
];

const pageInfosProcess: PageInfo[] = [
  {
    titleH1: "Processus de réalisation d'un site web",
  },
  {
    title: 'Étape 1 : Compréhension des besoins du client',
    text: `Le processus commence par une communication approfondie avec le client
          afin de comprendre ses objectifs, ses besoins et ses préférences pour le
          site web. Il est important de poser des questions pertinentes pour
          obtenir toutes les informations nécessaires.`,
  },
  {
    title: 'Étape 2 : Analyse et planification',
    text: `Sur la base des informations recueillies, le développeur freelance
          effectue une analyse approfondie des besoins du client. Cette étape
          implique la définition des fonctionnalités requises, la sélection des
          technologies appropriées et l'estimation du temps et des ressources
          nécessaires pour le projet. `,
  },
  {
    title: 'Étape 3 : Conception et prototypage',
    text: `Une fois la planification terminée, le développeur freelance crée une
          maquette ou un prototype du site web. Cela permet au client de
          visualiser le design, la disposition et la structure du site avant de
          passer à la phase de développement.`,
  },

  {
    title: 'Étape 4 : Développement du site web',
    text: `Dans cette phase, le développeur freelance utilise les langages de
          programmation et les technologies appropriées pour créer le site web
          selon les spécifications convenues. Il assure également l'optimisation
          des performances, la compatibilité avec les navigateurs et la prise en
          compte des bonnes pratiques en matière de sécurité.`,
  },
  {
    title: 'Étape 5 : Tests et corrections',
    text: `Une fois le développement terminé, le site web est soumis à des tests
          approfondis pour vérifier son bon fonctionnement, son accessibilité et
          sa convivialité. Si des problèmes ou des bogues sont identifiés, des
          corrections sont apportées pour garantir la qualité du site final.`,
  },
  {
    title: 'Étape 6 : Livraison et déploiement',
    text: `Une fois que le site web est testé et validé, il est prêt à être livré
          au client. Le développeur freelance peut aider le client à déployer le
          site sur un serveur ou un hébergement web, en s'assurant que tout est
          configuré correctement pour une mise en ligne réussie.`,
  },
  {
    title: 'Étape 7 : Maintenance et support',
    text: `Après la livraison du site web, le développeur freelance peut proposer
          des services de maintenance et de support supplémentaires. Cela peut
          inclure la résolution des problèmes techniques, les mises à jour du
          site, la surveillance de la sécurité et l'assistance continue au client
          en cas de besoin.`,
  },
  {
    title: 'Le travail bien fait',
    text: `Le processus de réalisation d'un site web en tant que développeur
          freelance, suivre un processus structuré pour la réalisation d'un site
          web est essentiel pour garantir la satisfaction du client et la qualité
          du travail fourni. En comprenant les besoins du client, en planifiant
          soigneusement, en concevant, en développant, en testant et en livrant le
          site web, vous créez une expérience fluide et professionnelle.`,
  },
];
const lienPolitiqueConfidentialite = `<a href='https://www.devevoke.com/politique-confidentialite'>politique de confidentialité</a>`;
const pageMentionsLegales: PageInfo[] = [
  {
    titleH1: 'Mentions légales',
  },

  {
    title: 'Édition du site',
    text: "En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://www.devevoke.com/ l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi: Propriétaire du site : Faradji Boucif - Contact : contact@devevoke.com 06 18 23 76 62 - Adresse : 5 impasse des vergers. Identification de l'entreprise : EI Faradji Boucif au capital social de € - SIREN : 87843895100013 - RCS ou RM : - Adresse postale : 5 impasse des vergers - Directeur de la publication : Faradji boucif - Contact : dw.faradji66@yahoo.co. Hébergeur : OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1 - Téléphone : 1007",
  },
  {
    title: 'Propriété intellectuelle et contrefaçons.',
    text: 'Faradji Boucif est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Faradji Boucif. Toute non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.',
  },
  {
    title: 'Limitations de responsabilité.',
    text: 'Faradji Boucif ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://www.devevoke.com/. Faradji Boucif décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://www.devevoke.com/. Faradji Boucif s’engage à sécuriser au mieux le site https://www.devevoke.com/, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu. Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Faradji Boucif se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Faradji Boucif se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).',
  },
  {
    title: 'CNIL et gestion des données personnelles.',
    text: "Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site https://www.devevoke.com/ dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : -. Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre.",
  },
  {
    title: 'Liens hypertextes et cookies.',
    text: `Le site https://www.devevoke.com/ contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers https://www.devevoke.com/. La navigation sur le site https://www.devevoke.com/ est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple. Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement. Les cookies sont enregistrés pour une durée maximale de 5 mois. Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre ${lienPolitiqueConfidentialite}.`,
  },
  {
    title: 'Droit applicable et attribution de juridiction.',
    text: 'Tout litige en relation avec l’utilisation du site https://www.devevoke.com/ est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Perpignan.',
  },
];

const politiqueConfidentialite: PageInfo[] = [
  {
    titleH1: 'Politique de confidentialité',
  },
  {
    title: 'Introduction',
    text: 'La présente politique de confidentialité a pour but de vous informer de la manière dont nous traitons vos données personnelles lorsque vous utilisez notre site web ou nos services. Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles conformément à la réglementation en vigueur.',
  },
  {
    title: 'Données collectées',
    text: `Lorsque vous utilisez notre site web ou nos services, nous sommes susceptibles de collecter les données personnelles suivantes :
- Informations de base : nom, prénom, adresse e-mail, numéro de téléphone, adresse postale.
- Données de connexion : adresse IP, type de navigateur, système d'exploitation, date et heure de connexion.
- Données de contenu : contenu que vous publiez sur notre site web ou nos services, tels que des commentaires, des photos ou des vidéos.
- Données de navigation : pages que vous visitez sur notre site web, liens sur lesquels vous cliquez.`,
  },
  {
    title: 'Utilisation des données',
    text: `Les données personnelles que nous collectons sont utilisées aux fins suivantes :
- Fournir et améliorer nos services : nous utilisons vos données pour vous fournir les services que vous avez demandés et pour améliorer l'expérience utilisateur.
- Communiquer avec vous : nous utilisons vos données pour vous contacter par e-mail, par téléphone ou par courrier postal afin de vous fournir des informations sur nos services ou pour répondre à vos questions.
- Analyser les données : nous utilisons des outils d'analyse pour collecter des informations sur l'utilisation de notre site web et de nos services. Ces informations nous permettent d'améliorer nos services et de vous proposer des contenus plus pertinents.
- Sécurité et prévention des fraudes : nous utilisons vos données pour garantir la sécurité de notre site web et de nos services et pour prévenir les fraudes.`,
  },
  {
    title: 'Partage des données',
    text: `Nous ne partageons vos données personnelles avec des tiers que dans les cas suivants :
- Avec votre consentement : nous ne partageons vos données personnelles avec des tiers qu'avec votre consentement explicite.
- Avec des prestataires de services : nous partageons vos données personnelles avec des prestataires de services qui nous aident à fournir nos services, tels que des hébergeurs web ou des sociétés de marketing.
- Pour des raisons légales : nous pouvons être amenés à partager vos données personnelles si la loi nous l'impose ou si nous pensons de bonne foi qu'il est nécessaire de le faire pour protéger nos droits ou ceux de tiers.`,
  },
  {
    title: 'Conservation des données',
    text: "Nous conservons vos données personnelles pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées. Nous pouvons également conserver vos données personnelles pendant une période plus longue si la loi nous l'impose ou si nous pensons de bonne foi qu'il est nécessaire de le faire pour protéger nos droits ou ceux de tiers.",
  },
  {
    title: 'Vos droits',
    text: `Vous disposez de plusieurs droits en ce qui concerne vos données personnelles, notamment :
- Le droit d'accès : vous avez le droit de demander l'accès à vos données personnelles que nous détenons.
- Le droit de rectification : vous avez le droit de demander la rectification de vos données personnelles si elles sont inexactes ou incomplètes.
- Le droit à l'effacement : vous avez le droit de demander l'effacement de vos données personnelles dans certains cas.
- Le droit de limitation du traitement : vous avez le droit de demander la limitation du traitement de vos données personnelles dans certains cas.
- Le droit d'opposition : vous avez le droit de vous opposer au traitement de vos données personnelles dans certains cas.
- Le droit à la portabilité des données : vous avez le droit de recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine, et de les transmettre à un autre responsable du traitement.`,
  },
  {
    title: 'Contactez-nous',
    text: `Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante :
- Devevoke
- contact@devevoke.com
- 04 34 29 76 40`,
  },
  {
    title: 'Modifications de la politique de confidentialité',
    text: 'Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Nous vous informerons de toute modification importante en publiant un avis sur notre site web ou en vous envoyant un e-mail.',
  },
  {
    title: 'Date de la dernière mise à jour',
    text: 'Date de la dernière mise à jour : 18-08-2024',
  },
  {
    title: 'Acceptation de la politique de confidentialité',
    text: 'En utilisant notre site web ou nos services, vous acceptez la présente politique de confidentialité.',
  },
];

export {
  projects,
  services,
  prices,
  dataPriceOptions,
  pageInfosPrice,
  pageInfosProcess,
  pageMentionsLegales,
  politiqueConfidentialite,
};
