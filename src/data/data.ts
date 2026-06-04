// data file for the website
import { Project, Price, Service, PageInfo } from './typeFile';

import fenixSolutions from '@/images/projects/fenixSolutions-1920.webp';
import fenixSolutionsMobile from '@/images/projects/fenixSolutions-1920.webp';

import kellerWilliams from '@/images/projects/kw-1920.webp';
import kellerWilliamsMobile from '@/images/projects/kw-688.webp';

import pizzeriaMenu from '@/images/projects/appPizza-home-1920.webp';
import pizzeriaMenuMobile from '@/images/projects/appPizza-home-688.webp';

import commApp from '@/images/projects/appCom-customers-1920.webp';
import commAppMobile from '@/images/projects/appCom-customers-1920.webp';

//Project
const projects: Project[] = [
  {
    id: 0,
    title: 'Fénix Solutions',
    subtitle: 'Création Carousel Youtube',
    description: `Devevoke a contribué à la création d'une plateforme de gestion des tâches collaboratives.`,
    details: `Notre mission : concevoir une application web flexible pour la gestion efficace des projets et des équipes, avec des fonctionnalités de chat en temps réel.`,
    results: `Résultats : une augmentation significative de la productivité des équipes, une meilleure communication et une gestion plus efficace des projets.`,
    image: String(fenixSolutions.src),
    imageMobile: String(fenixSolutionsMobile.src),
    alt: 'image du projet fenix solutions',
    tech: ['Vue3', ' Node', ' ApiRest'],
    link: 'https://www.fenixsolutions.fr/',
    type:'Application Web'
  },
  {
    id: 1,
    title: 'Keller Williams',
    subtitle: 'Création site web et application',
    description: `Nous avons contribué à la création d'une plateforme immobilière intuitive.`,
    details: `Notre mission : concevoir une plateforme conviviale pour les agents immobiliers, avec un tableau de bord personnalisable.`,
    results: `Résultats : une expérience utilisateur exceptionnelle, avec un tableau de bord permettant aux agents de modeler leur espace virtuel en toute simplicité.`,
    image: String(kellerWilliams.src),
    imageMobile: String(kellerWilliamsMobile.src),
    alt: 'image du projet keller williams',
    tech: ['Next', ' React', ' Symfony', ' Docker'],
    link: 'https://kwoxygene.fr/',
    type:'Application Web'
  },
  {
    id: 2,
    title: 'Pizzeria Menu',
    subtitle: 'Menu interactif pour Pizzeria',
    description: `Devevoke a conçu une application web intuitive permettant aux pizzerias de présenter un menu interactif à leurs clients, en tant que développeur Front-End.`,
    details: `Notre mission : proposer une solution moderne et élégante pour les pizzerias, leur permettant de digitaliser leur menu tout en offrant une expérience utilisateur fluide.`,
    results: `Résultats : une augmentation de l'engagement des clients grâce à une navigation fluide et une présentation visuellement attrayante des produits.`,

    image: String(pizzeriaMenu.src),
    imageMobile: String(pizzeriaMenuMobile.src),
    alt: 'image du projet pizzeria menu',
    tech: ['Next.js', ' Tailwind CSS', ' React.js', ' GitHub', ' Vercel'],
    link: 'https://restaurant-pizza-rho.vercel.app/',
    type:'Application Web'
  },
  {
    id: 3,
    title: 'Solutions Commerciales',
    subtitle: 'Application Interactive pour les Commerces',
    description: `Devevoke a développé une application web innovante permettant aux commerces de moderniser la présentation de leurs produits et services grâce à une interface interactive.`,
    details: `Notre mission : offrir aux entreprises une solution digitale clé en main, leur permettant de captiver leur clientèle avec un affichage moderne.`,
    results: `Résultats : une augmentation de la satisfaction et de la fidélité des clients grâce à une expérience utilisateur améliorée.`,
    image: String(commApp.src),
    imageMobile: String(commAppMobile.src),
    alt: 'image du projet pizzeria menu',
    tech: [
      'Next.js',
      ' Tailwind CSS',
      ' React.js',
      ' GitHub',
      ' Vercel',
      ' Sql',
    ],
    link: 'https://app-commercial.vercel.app/',
    type:'Application Web'
  },
];

// //Tarifs
const prices: Price[] = [
  {
    id: '1',
    title: 'Présence Digitale',
    subtitle: 'Site Vitrine Premium',
    price: '1 490 €',
    description: `Un site vitrine ultra-rapide et au design irréprochable. L'outil idéal pour imposer votre marque et convertir vos premiers visiteurs. 
      Cette formule inclut une conception sur-mesure, l'intégration Next.js/React, une optimisation de base pour le SEO et un rendu 100% responsive.`,
    details: [
      'Design exclusif et contemporain (SaaS UI)',
      'Développement ultra-rapide (Next.js)',
      'Animations fluides (Framer Motion)',
      'Mise en place de votre contenu',
      'Formulaire de contact dynamique',
      'Optimisation SEO technique',
      'Nom de domaine et hébergement 1 an',
      'Livraison en 2 à 4 semaines',
    ],
  },
  {
    id: '2',
    title: 'Commerce Propulsé',
    subtitle: 'Plateforme E-commerce',
    price: '3 500 €',
    description: `Une boutique en ligne conçue pour la conversion. Design attractif, paiements sécurisés et gestion des stocks fluide pour maximiser vos ventes. 
      Nous créons une expérience d'achat sans friction adaptée à votre identité de marque.`,
    details: [
      'Interface e-commerce optimisée pour la conversion',
      'Back-office de gestion des stocks et commandes',
      'Intégration de paiements sécurisés (Stripe, etc.)',
      'Création des premières fiches produits',
      'Optimisation SEO avancée',
      'Configuration des méthodes de livraison',
      'Design adaptatif Mobile-First',
      'Formation à l’utilisation du back-office',
    ],
  },
  {
    id: '3',
    title: 'Écosystème Interne',
    subtitle: 'CRM & Outils Métiers',
    price: '5 000 €',
    description: `Digitalisez vos processus avec un outil sur mesure. Centralisez vos données, automatisez vos tâches répétitives et boostez la productivité de vos équipes avec une interface conçue exactement pour vos besoins métiers.`,
    details: [
      'Architecture logicielle sur mesure',
      'Bases de données sécurisées et évolutives',
      'Tableaux de bord et statistiques analytiques',
      'Gestion avancée des droits utilisateurs',
      'Outils d’automatisation des tâches',
      'Support technique et maintenance',
      'Respect strict des normes RGPD',
      'Formation complète de vos équipes',
    ],
  },
  {
    id: '4',
    title: 'Scale-Up SaaS',
    subtitle: 'Plateforme Web Complexe',
    price: '10 000 €',
    description: `Vous avez l'idée de la prochaine grande startup ? Nous construisons l'architecture complète de votre SaaS. 
      De la conception de la base de données jusqu'à l'intégration de systèmes d'abonnements récurrents, nous livrons un produit prêt à scaler.`,
    details: [
      'Conception de l’architecture cloud',
      'Développement Full-Stack (Next.js / Node.js)',
      'Intégration des paiements récurrents (Stripe Billing)',
      'Gestion complète des utilisateurs (Auth)',
      'Conception UX/UI de l’application',
      'Tests de sécurité et de montée en charge',
      'Déploiement sur serveurs scalables (Vercel/AWS)',
      'Accompagnement CTO as a Service',
    ],
  },
  {
    id: '5',
    title: 'Mobile First',
    subtitle: 'Application iOS & Android',
    price: '12 000 €',
    description: `Une application mobile native (React Native) performante, fluide et capable d'exploiter à 100% les capacités des smartphones de vos utilisateurs. 
      Démarquez-vous sur l'App Store et Google Play avec une expérience irréprochable.`,
    details: [
      'Maquettage UX/UI dédié au mobile',
      'Développement React Native (iOS & Android)',
      'Intégration des notifications Push',
      'Fonctionnalités natives (Caméra, GPS, FaceID)',
      'Synchronisation avec un back-end',
      'Gestion du mode Hors-ligne',
      'Déploiement App Store et Google Play',
      'Maintenance évolutive',
    ],
  },
];


const dataPriceOptions = [
  {
    title: 'Branding & UI/UX Design',
    price: 'À partir de 1 500 €',
    description:
      "La première impression est cruciale. Nous créons une identité visuelle forte et des interfaces pensées pour convertir.",
    details: [
      'Création ou refonte de logo',
      'Élaboration de la charte graphique',
      'Design System complet sur Figma',
      'Maquettage UX/UI haute fidélité',
      'Recherche utilisateur et prototypage',
    ],
  },
  {
    title: 'Audit & SEO Avancé',
    price: 'À partir de 800 €',
    description:
      "Dominez les résultats Google. Nous analysons votre plateforme et mettons en place une stratégie d'acquisition durable.",
    details: [
      'Audit technique approfondi (Core Web Vitals)',
      'Étude concurrentielle et mots-clés',
      'Optimisation sémantique des contenus',
      'Stratégie de netlinking (Backlinks)',
      'Suivi de positionnement mensuel',
    ],
  },
  {
    title: 'Web3 & Blockchain',
    price: 'À partir de 15 000 €',
    description:
      "Intégrez les technologies décentralisées à votre entreprise. Smart contracts, NFTs, et DApps sécurisées.",
    details: [
      'Développement de Smart Contracts (Solidity)',
      'Création de DApps (Web3.js / Ethers.js)',
      'Intégration de wallets (MetaMask, WalletConnect)',
      'Audit de sécurité des contrats',
      'Déploiement sur Mainnet (Ethereum, Polygon)',
    ],
  },
  {
    title: 'Forfait Sérénité (Maintenance & Cloud)',
    price: '99€/Mois',
    description:
      "Reposez-vous sur une infrastructure robuste. Nous garantissons la disponibilité, la sécurité et l'évolution de votre plateforme.",
    details: [
      'Hébergement Cloud haute performance (AWS/Vercel)',
      'Sauvegardes automatiques quotidiennes',
      'Mises à jour de sécurité critiques',
      'SLA de 99.9% et monitoring 24/7',
      'Assistance technique prioritaire',
    ],
  },
];

// //Service
const services: Service[] = [
  {
    id: 0,
    title: 'Création et Refonte de sites web sur mesure',
    description: `Chez Devevoke, nous concevons des sites web personnalisés et modernes, parfaitement adaptés à vos besoins spécifiques. Que vous souhaitiez créer un tout nouveau site ou redynamiser un site existant, notre équipe met son expertise à votre service.
Nous nous chargeons de l’ensemble du processus, du design à la programmation, tout en optimisant votre site pour une expérience fluide et performante sur tous les appareils mobiles.  `,

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
    text: `Chez Devevoke, notre tarif journalier moyen (TJM) est de 600€. Ce tarif
        s'applique à une large gamme de projets, incluant la conception de sites web, 
        le développement d'applications web et l'intégration de systèmes tiers. 
        Le TJM couvre l'ensemble des étapes nécessaires au bon déroulement du projet : 
        planification, développement, tests, mise en production et communication avec le client. 
        Nous nous engageons à respecter les délais établis et à fournir un travail d'excellence à chaque étape.`,
  },
  {
    title: 'Tarif forfaitaire',
    text: `Devevoke propose également des tarifs forfaitaires adaptés à vos projets. 
        Ces tarifs sont établis en fonction de la complexité du projet, du temps estimé 
        pour le développement et de la valeur ajoutée pour votre entreprise. Une fois le prix forfaitaire défini, 
        celui-ci reste fixe, garantissant ainsi une transparence totale pour nos clients. 
        Nous veillons à ce que chaque projet soit livré dans les délais impartis, tout en maintenant un niveau 
        élevé de qualité.`,
  },
  {
    title: 'Forfaits personnalisés',
    text: `Pour les projets complexes ou nécessitant des solutions spécifiques, Devevoke propose des forfaits 
        personnalisés. Ces offres incluent souvent des fonctionnalités avancées telles que l'intégration de systèmes tiers, 
        l'ajout de pages supplémentaires, l'optimisation SEO, et bien plus encore. Les tarifs des forfaits 
        sont ajustés selon la portée du projet et les exigences spécifiques du client. Pour obtenir davantage 
        d'informations sur nos forfaits personnalisés, nous vous invitons à nous contacter.`,
  },
  {
    title: 'Devis personnalisé',
    text: `Chaque projet est unique, c'est pourquoi Devevoke offre des devis personnalisés adaptés 
        aux besoins spécifiques de chaque client. Lors de votre prise de contact, nous analyserons vos objectifs, 
        vos exigences et votre budget pour établir un devis clair et détaillé. Ce devis inclura une estimation du temps 
        nécessaire, les fonctionnalités prévues et le coût total du projet. Nous garantissons une transparence totale 
        afin que vous sachiez exactement ce que vous obtenez avant le lancement du projet.`,
  },
  {
    title: 'Modalités de paiement',
    text: `Chez Devevoke, nous adoptons des modalités de paiement flexibles et adaptées à vos besoins. 
        En règle générale, un acompte initial de 30 % est demandé à la commande, suivi du règlement 
        du solde à la livraison du projet. Ces modalités peuvent être ajustées selon vos préférences 
        et seront formalisées dans le contrat de services. Nous travaillons toujours dans une optique 
        de collaboration claire et respectueuse.`,
  },
];

const pageInfosProcess: PageInfo[] = [
  {
    titleH1: "Processus de réalisation de projets numériques",
  },
  {
    title: 'Étape 1 : Compréhension des besoins du client',
    text: `Le processus commence par une communication approfondie avec le client
          afin de comprendre ses objectifs, ses besoins et ses préférences pour le
          projet (site web, application mobile, SaaS, etc.). Il est crucial de poser 
          des questions pertinentes pour obtenir toutes les informations nécessaires.`,
  },
  {
    title: 'Étape 2 : Analyse et planification',
    text: `Sur la base des informations recueillies, une analyse approfondie des
          besoins du client est réalisée. Cette étape implique la définition des 
          fonctionnalités requises, la sélection des technologies appropriées 
          (par exemple, React Native pour une application mobile ou Next.js pour un site web), 
          et l’estimation du temps et des ressources nécessaires au projet.`,
  },
  {
    title: 'Étape 3 : Conception et prototypage',
    text: `Une fois la planification terminée, une maquette ou un prototype interactif
          est créé. Que ce soit pour un site web, une application mobile ou une plateforme SaaS,
          cela permet au client de visualiser le design et la structure du projet 
          avant de passer à la phase de développement.`,
  },
  {
    title: 'Étape 4 : Développement',
    text: `Cette phase consiste à utiliser les technologies appropriées pour construire
          le projet selon les spécifications convenues. Les performances, la compatibilité 
          avec différentes plateformes et la sécurité sont optimisées à chaque étape.`,
  },
  {
    title: 'Étape 5 : Tests et corrections',
    text: `Une fois le développement terminé, le projet est soumis à des tests approfondis 
          pour vérifier son bon fonctionnement, son accessibilité, et son adaptabilité 
          (par exemple, tests sur iOS et Android pour une application mobile). 
          Les éventuels problèmes ou bogues sont corrigés pour assurer une qualité optimale.`,
  },
  {
    title: 'Étape 6 : Livraison et déploiement',
    text: `Une fois le projet validé, il est livré au client. Nous vous accompagnons 
          pour déployer le projet : mise en ligne d'un site web, publication d'une 
          application sur les stores mobiles ou lancement d'une plateforme SaaS.`,
  },
  {
    title: 'Étape 7 : Maintenance et support',
    text: `Après la livraison, nous proposons des services de maintenance et de support 
          adaptés à vos besoins : résolution de problèmes techniques, mises à jour régulières, 
          surveillance des performances et accompagnement continu.`,
  },
  {
    title: 'Le travail bien fait',
    text: `Nous suivons un processus structuré pour garantir la satisfaction du client 
          et la qualité du travail fourni. Que ce soit pour un site web, une application mobile, 
          ou une solution SaaS, notre objectif est de créer une expérience fluide et professionnelle.`,
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
