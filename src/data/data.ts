// data file for the website
import { Project, Price, Service, PageInfo } from './typeFile';

import floticar from '@/images/projects/floticar-dashboard.png';
import floticarMobile from '@/images/projects/floticar-dashboard.png';

// Project
const projects: Project[] = [
  {
    id: 0,
    title: 'Floticar',
    subtitle: 'Logiciel SaaS de Gestion de Flotte Automobile Associative',
    description: `Solution conçue et éditée par DevEvoke pour résoudre les difficultés de gestion de parc des associations gestionnaires, IME et SESSAD.`,
    details: `Problématique : carnets de bord papier égarés, amendes non imputables, retards de contrôles techniques et litiges de sinistres. Notre réponse : application mobile PWA accessible par QR code sans installation, alertes automatiques et tableau de bord centralisé pour la direction.`,
    results: `Bénéfices : dématérialisation immédiate des carnets kilométriques, traçabilité exhaustive des conducteurs et conformité réglementaire des contrôles techniques.`,
    image: String(floticar.src),
    imageMobile: String(floticarMobile.src),
    alt: 'Logiciel Floticar gestion de flotte automobile médico-sociale',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'PWA'],
    link: '/realisations/floticar',
    type: 'Étude de cas SaaS',
  },
  {
    id: 1,
    title: 'Application Nomade SESSAD',
    subtitle: 'Outil Mobile & Mode Déconnecté pour Éducateurs en Tournée',
    description: `Application web et mobile conçue pour faciliter le quotidien des professionnels nomades en service d'éducation spéciale et de soins à domicile.`,
    details: `Problématique : perte de temps en double saisie le soir, dispersion des comptes-rendus d'interventions et accès difficile aux plannings lors des déplacements. Notre réponse : interface mobile tactile épurée, saisie rapide et mode consultation/saisie 100% hors-ligne avec synchronisation automatique.`,
    results: `Bénéfices : réduction drastique de la charge mentale administrative, transmissions sécurisées conformes RGPD et meilleure réactivité d'accompagnement.`,
    image: '/images/home/sessad_field_educator.jpg',
    imageMobile: '/images/home/sessad_field_educator.jpg',
    alt: 'Éducatrice spécialisée en intervention SESSAD',
    tech: ['Next.js', 'PWA Offline', 'TypeScript', 'Tailwind CSS'],
    link: '/solutions-medico-social/sessad',
    type: 'Application Mobile Nomade',
  },
  {
    id: 2,
    title: 'Plateforme d’Ateliers & Production ESAT',
    subtitle: 'Pilotage de Production & Suivi Personnalisé des Travailleurs',
    description: `Plateforme métier sur-mesure pour coordonner les activités économiques des ateliers et le suivi médico-social des travailleurs en situation de handicap.`,
    details: `Problématique : concilier les impératifs de production (menuiserie, sous-traitance, espaces verts) avec les plannings personnalisés des usagers sans alourdir le travail des moniteurs d'atelier. Notre réponse : application tactile sur tablette d'atelier, pointage simplifié et consolidation administrative.`,
    results: `Bénéfices : visibilité en temps réel sur la production, traçabilité des livraisons et suivi des compétences sans friction.`,
    image: '/images/home/esat_workshop_activity.jpg',
    imageMobile: '/images/home/esat_workshop_activity.jpg',
    alt: 'Moniteur d’atelier et travailleurs en ESAT',
    tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tablettes Atelier'],
    link: '/solutions-medico-social/esat',
    type: 'Logiciel Métier Sur-Mesure',
  },
  {
    id: 3,
    title: 'Portail de Coordination & Familles EHPAD',
    subtitle: 'Transmissions d’Équipes & Cahier de Liaison Numérique',
    description: `Espace numérique centralisant les transmissions des équipes et facilitant les échanges transparents et chaleureux avec les proches des résidents.`,
    details: `Problématique : ruptures de communication entre équipes de jour et de nuit, et sentiment d'éloignement des familles face au manque d'informations quotidiennes. Notre réponse : portail sécurisé hébergé sur infrastructure souveraine conforme RGPD, avec fil d'actualités et documents partagés.`,
    results: `Bénéfices : sérénité renforcée pour les familles, transmissions sécurisées et adoption intuitive par les équipes soignantes et d'animation.`,
    image: '/images/home/ehpad_coordination_life.jpg',
    imageMobile: '/images/home/ehpad_coordination_life.jpg',
    alt: 'Animatrice en EHPAD avec une résidente sur tablette numérique',
    tech: ['Next.js', 'React', 'Chiffrement AES', 'Hébergement France'],
    link: '/solutions-medico-social/ehpad',
    type: 'Portail Sécurisé & Lien Social',
  },
];

// //Tarifs
const prices: Price[] = [
  {
    id: '1',
    title: 'Site Web & Portail Établissement',
    subtitle: 'Présence Institutionnelle & Information',
    price: 'Sur Devis',
    description: `Un site web accessible (RGAA), moderne et rassurant, pensé pour un IME, un ESAT, un EHPAD ou une association gestionnaire. Présentation des pôles, démarches familles et recrutement.`,
    details: [
      'Design exclusif et accessible (Normes RGAA)',
      'Développement rapide et performant (Next.js)',
      'Présentation des structures et pôles d’accompagnement',
      'Espace recrutement & offres d’emploi',
      'Formulaire de contact qualifié et sécurisé',
      'Optimisation SEO médico-sociale',
      'Nom de domaine et hébergement souverain en France',
      'Conformité stricte au RGPD',
    ],
  },
  {
    id: '2',
    title: 'Portail Usagers & Familles',
    subtitle: 'Espace Numérique Sécurisé',
    price: 'Sur Devis',
    description: `Une plateforme web sécurisée facilitant les échanges entre l'établissement, les personnes accompagnées et leurs proches. Cahier de liaison, plannings d'activités et formulaires administratifs.`,
    details: [
      'Interface intuitive adaptée aux familles',
      'Connexion sécurisée avec gestion des droits',
      'Partage de documents et comptes-rendus',
      'Planning des activités et actualités du pôle',
      'Hébergement cloud souverain en France',
      'Notifications e-mail / SMS automatiques',
      'Design adaptatif Mobile & Tablette',
      'Formation des équipes administratives',
    ],
  },
  {
    id: '3',
    title: 'Logiciel Métier Sur-Mesure',
    subtitle: 'Centralisation & Automatisation',
    price: 'Sur Devis',
    description: `Conception d’outils internes adaptés à vos protocoles d’accompagnement. Suppression des fichiers Excel dispersés, suivi d'activité et consolidation multi-sites pour la direction.`,
    details: [
      'Architecture logicielle sur-mesure',
      'Bases de données relationnelles sécurisées',
      'Circuits de validation et alertes automatiques',
      'Gestion cloisonnée des droits utilisateurs (RBAC)',
      'Traçabilité et journalisation des actions',
      'Support technique et maintenance évolutive',
      'Conformité rigoureuse aux préconisations CNIL',
      'Formation complète des équipes',
    ],
  },
  {
    id: '4',
    title: 'SaaS & Plateforme Sur-Mesure',
    subtitle: 'Outil Métier Dédié & Multi-Établissements',
    price: 'Sur Devis',
    description: `Conception de plateformes SaaS adaptées à vos besoins professionnels spécifiques. À l'image de Floticar (notre solution de gestion de flotte pour associations), nous développons des outils web centralisés, robustes et sécurisés.`,
    details: [
      'Architecture cloud moderne et évolutive',
      'Portail multi-établissements et gestion des droits',
      'Interfaces intuitives pour le personnel de terrain',
      'Tableaux de bord d’analyse et de pilotage',
      'API ouvertes et synchronisation de données',
      'Hébergement souverain en France et conformité RGPD',
      'Maintenance préventive et support réactif',
      'Formation et accompagnement des utilisateurs',
    ],
  },
  {
    id: '5',
    title: 'Application Mobile Terrain',
    subtitle: 'Outil Nomade Équipes en Tournée',
    price: 'Sur Devis',
    description: `Application web et mobile pensée pour les professionnels nomades (SESSAD, SAVS, SAMSAH). Saisie rapide des interventions, plannings de tournée et fonctionnement hors-ligne.`,
    details: [
      'Conception UX/UI optimisée pour le terrain',
      'Développement PWA ou React Native',
      'Fonctionnement déconnecté (mode hors-ligne)',
      'Synchronisation sécurisée au retour du réseau',
      'Saisie rapide de comptes-rendus de visite',
      'Signature électronique et validation sur place',
      'Déploiement fluide sur smartphones et tablettes',
      'Maintenance et support continu',
    ],
  },
];

const dataPriceOptions = [
  {
    title: 'Design UX/UI Médico-Social',
    price: 'Sur Devis',
    description:
      "Des interfaces simples, contrastées et accessibles (RGAA), pensées pour réduire la charge mentale des professionnels de terrain et faciliter l'adoption.",
    details: [
      'Ateliers de co-conception avec les équipes',
      'Design System modulaire et accessible',
      'Maquettage haute fidélité sur Figma',
      'Tests utilisateurs en conditions réelles',
      'Ergonomie logicielle métier épurée',
    ],
  },
  {
    title: 'Audit de Sécurité & RGPD',
    price: 'Sur Devis',
    description:
      "Vérification des bonnes pratiques de cybersécurité web et de conformité aux préconisations de la CNIL avant mise en service.",
    details: [
      'Audit de sécurité applicative',
      'Vérification du chiffrement (HTTPS / TLS 1.3)',
      'Contrôle des flux et de la minimisation des données',
      'Recommandations de sécurisation des accès',
      'Accompagnement registre des traitements',
    ],
  },
  {
    title: 'Intégration & API Métiers',
    price: 'Sur Devis',
    description:
      "Connectez vos nouveaux outils aux logiciels administratifs, de comptabilité ou de paie déjà en place dans l'association.",
    details: [
      'Conception d’API REST sécurisées',
      'Connecteurs d’export et d’import automatique',
      'Élimination des doubles saisies',
      'Synchronisation des plannings et présences',
      'Tableaux de bord de consolidation DSI / DG',
    ],
  },
  {
    title: 'Forfait Maintenance & Sécurité Cloud',
    price: 'Sur Devis',
    description:
      "Garantissez la disponibilité, la pérennité et les mises à jour régulières de vos applications dans la durée.",
    details: [
      'Hébergement cloud souverain en France (ISO 27001)',
      'Sauvegardes quotidiennes externalisées',
      'Mises à jour de sécurité préventives',
      'Disponibilité 99.9% et surveillance proactive',
      'Assistance technique réactive',
    ],
  },
];

// //Service
const services: Service[] = [
  {
    id: 0,
    title: 'Logiciels Métiers & Outils Internes',
    description: `Nous concevons des logiciels métiers sur-mesure pour les associations et établissements médico-sociaux. Centralisez les informations opérationnelles, fluidifiez le suivi d'activité et supprimez la dépendance aux tableurs Excel dispersés.`,
    items: [
      { id: 1, title: 'Centralisation des données' },
      { id: 2, title: 'Circuits de validation' },
      { id: 3, title: 'Reporting de direction' },
    ],
  },
  {
    id: 1,
    title: 'Applications Mobiles & Outils Terrain',
    description: `Nous développons des applications mobiles adaptées aux professionnels nomades (SESSAD, SAVS, SAMSAH). Vos équipes accèdent à leur planning de tournée et saisissent leurs comptes-rendus d'intervention même en zone sans réseau.`,
    items: [
      { id: 1, title: 'Mode Hors-Ligne' },
      { id: 2, title: 'Plannings de tournée' },
      { id: 3, title: 'Comptes-rendus rapides' },
    ],
  },
  {
    id: 2,
    title: 'Gestion de Flotte Automobile (Floticar)',
    description: `Solution SaaS développée par DevEvoke pour dématérialiser la gestion des véhicules associatifs : carnets de bord par QR code sur smartphone, alertes de contrôle technique et d'entretien, suivi des conducteurs et zéro amende non imputée.`,
    items: [
      { id: 1, title: 'Carnet de bord par QR code' },
      { id: 2, title: 'Alertes Contrôles Techniques' },
      { id: 3, title: 'Gestion des conducteurs' },
    ],
  },
  {
    id: 3,
    title: 'Hébergement Souverain & Sécurité Web',
    description: `La protection des données associatives et le respect du RGPD sont au cœur de nos réalisations. Vos solutions sont hébergées sur des infrastructures cloud souveraines situées en France avec sauvegardes chiffrées quotidiennes.`,
    items: [
      { id: 1, title: 'Hébergement France' },
      { id: 2, title: 'Chiffrement AES-256' },
      { id: 3, title: 'Conformité RGPD' },
    ],
  },
  {
    id: 4,
    title: 'Automatisation & Dématérialisation',
    description: `Réduisez la charge administrative des équipes en automatisant la génération de documents, les bilans périodiques et la synchronisation entre logiciels, sans investissement lourd.`,
    items: [
      { id: 1, title: 'Suppression double saisie' },
      { id: 2, title: 'Exports & Rapports DSI' },
      { id: 3, title: 'Connecteurs API' },
    ],
  },
  {
    id: 5,
    title: 'Sites Web & Portails Établissements',
    description: `Nous concevons des sites vitrines institutionnels et portails d'information conformes aux règles d'accessibilité (RGAA) pour valoriser votre établissement et faciliter les démarches des familles.`,
    items: [
      { id: 1, title: 'Accessibilité RGAA' },
      { id: 2, title: 'Portail démarches familles' },
      { id: 3, title: 'Espace recrutement' },
    ],
  },
];

//Pages footer information
const pageInfosPrice: PageInfo[] = [
  {
    titleH1: 'Modalités d\'accompagnement et tarification DevEvoke',
  },
  {
    title: 'Accompagnement au forfait ou sur devis',
    text: `Chez DevEvoke, nous privilégions une tarification transparente et forfaitaire pour la conception de solutions logicielles, plateformes SaaS, applications mobiles et sites web médico-sociaux. Chaque projet débute par un cadrage fonctionnel précis permettant d'établir un devis ferme et engageant, garantissant la maîtrise complète de votre budget sans mauvaise surprise.`,
  },
  {
    title: 'Assistance technique & régie experte',
    text: `Pour les missions de conseil, d'audit technique, d'architecture ou d'interventions ciblées au sein de vos équipes, DevEvoke propose également des modalités d'intervention au temps passé. Nous définissons ensemble le périmètre d'intervention, le rythme et les livrables attendus pour une souplesse opérationnelle totale.`,
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
    titleH1: "Processus d’accompagnement médico-social",
  },
  {
    title: 'Étape 1 : Cadrage des Besoins & Immersion',
    text: `Nous analysons vos processus internes, vos outils existants et vos contraintes organisationnelles. Nous définissons ensemble un cahier des charges pragmatique et le périmètre des développements.`,
  },
  {
    title: 'Étape 2 : Conception UX & Ergonomie Métier',
    text: `Nous réalisons les maquettes des interfaces en appliquant les principes d'accessibilité (RGAA) et de Privacy by Design pour simplifier le travail des équipes.`,
  },
  {
    title: 'Étape 3 : Développement Full-Stack Sur-Mesure',
    text: `Nos développeurs construisent l'application (Next.js, TypeScript, React) avec une architecture propre, maintenable et connectée à vos outils existants via API.`,
  },
  {
    title: 'Étape 4 : Tests Utilisateurs & Validation Terrain',
    text: `Avant le déploiement général, la solution est testée en conditions réelles avec vos professionnels pour s’assurer de sa fluidité et corriger les retours d’usage.`,
  },
  {
    title: 'Étape 5 : Déploiement Cloud Sécurisé en France',
    text: `La plateforme est déployée sur des serveurs souverains situés en France avec certificats HTTPS, sauvegardes automatisées et sécurité renforcée.`,
  },
  {
    title: 'Étape 6 : Formation des Équipes & Maintenance Pérenne',
    text: `Vos équipes sont accompagnées pour la prise en main. Nous assurons la maintenance proactive, le support technique et les évolutions futures.`,
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
    titleH1: 'Politique de confidentialité & Protection des Données',
  },
  {
    title: 'Introduction et Engagements RGPD',
    text: "La présente politique définit nos engagements relatifs à la collecte et au traitement des données personnelles via le site https://www.devevoke.com/. En tant qu'agence digitale spécialisée dans les solutions numériques pour le secteur médico-social, DevEvoke veille au respect strict du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.",
  },
  {
    title: 'Hébergement Souverain et Sécurité',
    text: "Le site web DevEvoke ainsi que les données transmises via nos formulaires de contact sont hébergés sur des infrastructures situées en France et en Union Européenne, garantissant la souveraineté et la conformité aux normes européennes de protection des données.",
  },
  {
    title: 'Données collectées et finalités',
    text: "Les données recueillies (nom, prénom, organisation, fonction, email, téléphone, description de besoin) ont pour unique finalité le traitement des demandes de devis, de démonstration ou de prise de contact commercial. Elles ne sont en aucun cas cédées ou revendues à des tiers.",
  },
  {
    title: 'Chiffrement et Sécurité des Échanges',
    text: "Toutes les communications sur notre site sont protégées par le protocole HTTPS (TLS 1.3). Les soumissions de formulaires font l'objet d'un contrôle de sécurité applicatif contre le spam et les injections.",
  },
  {
    title: 'Vos Droits (Accès, Rectification, Suppression)',
    text: "Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, de limitation et d'effacement de vos données personnelles. Vous pouvez exercer ce droit à tout moment en écrivant à contact@devevoke.com.",
  },
  {
    title: 'Contact Protection des Données',
    text: "Pour toute question relative à la gestion de vos données ou pour toute demande d'exercice de vos droits, notre équipe est joignable à contact@devevoke.com.",
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
