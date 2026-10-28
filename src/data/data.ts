// data file for the website
import { Project, Price, Service, PageInfo } from './typeFile';

import floticar from '@/images/projects/floticar-dashboard.png';
import floticarMobile from '@/images/projects/floticar-dashboard.png';

// Project
const projects: Project[] = [
  {
    id: 0,
    title: 'Floticar',
    subtitle: 'Plateforme SaaS de Gestion de Flotte Automobile',
    description: `Plateforme SaaS conçue par DevEvoke pour dématérialiser le suivi des véhicules associatifs : carnets de bord par QR code sans installation, alertes automatiques et tableau de bord de direction.`,
    details: `Problématique : carnets de bord papier égarés, amendes non imputables, retards de contrôles techniques et litiges de sinistres. Notre réponse : application mobile PWA accessible par QR code sans installation, alertes automatiques et tableau de bord centralisé pour la direction.`,
    results: `Démonstration concrète du savoir-faire DevEvoke en conception et développement de produit SaaS de A à Z.`,
    image: String(floticar.src),
    imageMobile: String(floticarMobile.src),
    alt: 'Logiciel Floticar gestion de flotte automobile développé par DevEvoke',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'PWA'],
    link: '/realisations/floticar',
    type: 'Étude de cas SaaS',
  },
  {
    id: 1,
    title: 'Logiciel Métier & Gestion Opérationnelle',
    subtitle: 'Centralisation des Données & Remplacement de Tableurs Excel',
    description: `Outil interne sur-mesure pour centraliser les informations d'activité, fluidifier les circuits de validation et remplacer les classeurs Excel instables.`,
    details: `Problématique : prolifération de fichiers Excel désynchronisés, risques d'erreurs humaines et temps perdu à consolider les bilans opérationnels. Notre réponse : application web réactive, base de données relationnelle sécurisée et tableaux de bord de pilotage en temps réel.`,
    results: `Bénéfices : gain de temps immédiat sur les tâches administratives, fiabilité totale des indicateurs et adoption naturelle par les équipes.`,
    image: '/images/home/esat_workshop_activity.jpg',
    imageMobile: '/images/home/esat_workshop_activity.jpg',
    alt: 'Logiciel métier sur-mesure et tableau de bord opérationnel',
    tech: ['Next.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    link: '/solutions-metier',
    type: 'Logiciel Métier Sur-Mesure',
  },
  {
    id: 2,
    title: 'Application Mobile Nomade & Mode Hors-Ligne',
    subtitle: 'Outil Tactile pour Professionnels en Déplacement',
    description: `Application web et mobile conçue pour faciliter le travail des équipes de terrain avec saisie rapide et fonctionnement déconnecté.`,
    details: `Problématique : perte de temps en double saisie le soir, manque d'accès aux plannings lors des déplacements et interventions en zones blanches sans réseau. Notre réponse : interface tactile épurée, saisie rapide et mode consultation/saisie 100% hors-ligne avec synchronisation automatique.`,
    results: `Bénéfices : réduction drastique de la charge mentale administrative, transmissions sécurisées conformes RGPD et fluidité d'intervention.`,
    image: '/images/home/sessad_field_educator.jpg',
    imageMobile: '/images/home/sessad_field_educator.jpg',
    alt: 'Application mobile professionnelle en mode déconnecté',
    tech: ['Next.js', 'React Native', 'PWA Offline', 'TypeScript'],
    link: '/application-mobile',
    type: 'Application Mobile',
  },
  {
    id: 3,
    title: 'Portail Web & Espace Collaboratif Sécurisé',
    subtitle: 'Plateforme Web & Transmissions Centralisées',
    description: `Plateforme web sécurisée facilitant les échanges, la mise à disposition de documents et la coordination entre collaborateurs et usagers.`,
    details: `Problématique : dispersion des communications par email, absence d'espace centralisé et ruptures de transmission. Notre réponse : portail web sur-mesure hébergé sur infrastructure souveraine en France avec contrôle strict des accès par rôles (RBAC).`,
    results: `Bénéfices : traçabilité complète des échanges, conformité RGPD native et communication fluide et transparente.`,
    image: '/images/home/ehpad_coordination_life.jpg',
    imageMobile: '/images/home/ehpad_coordination_life.jpg',
    alt: 'Portail web sécurisé et espace professionnel',
    tech: ['Next.js', 'React', 'Chiffrement AES-256', 'Hébergement France'],
    link: '/developpement-web',
    type: 'Plateforme Web & Portail',
  },
];

// //Tarifs
const prices: Price[] = [
  {
    id: '1',
    title: 'Site Web & Plateforme Vitrine',
    subtitle: 'Présence Digitale & Performance',
    price: 'Sur Devis',
    description: `Un site web moderne, rapide et conforme aux normes d'accessibilité. Présentation soignée de votre entreprise ou organisation, référencement naturel optimisé et formulaires qualifiés.`,
    details: [
      'Design exclusif et soigné (Tailwind CSS)',
      'Développement rapide et performant (Next.js)',
      'Optimisation SEO technique et sémantique',
      'Formulaires de contact qualifiés et sécurisés',
      'Tableau de bord et administration intuitive',
      'Nom de domaine et hébergement souverain en France',
      'Conformité stricte au RGPD',
      'Maintenance et support réactif',
    ],
  },
  {
    id: '2',
    title: 'Application Web & Espace Client',
    subtitle: 'Portail Métier Sécurisé',
    price: 'Sur Devis',
    description: `Une plateforme web sécurisée facilitant les échanges avec vos clients, adhérents ou partenaires. Espace connecté, partage de documents et suivi en temps réel.`,
    details: [
      'Authentification sécurisée et gestion des rôles',
      'Partage de documents et espace collaboratif',
      'Tableaux de bord d’activité et indicateurs',
      'Design adaptatif Mobile, Tablette et Desktop',
      'Notifications automatiques e-mail et alertes',
      'Hébergement cloud souverain en France',
      'Chiffrement des données sensibles',
      'Accompagnement et mise en main',
    ],
  },
  {
    id: '3',
    title: 'Logiciel Métier Sur-Mesure',
    subtitle: 'Centralisation & Productivité',
    price: 'Sur Devis',
    description: `Conception d’outils internes adaptés à vos flux de travail réels. Suppression des fichiers Excel dispersés, suivi d'activité et consolidation multi-sites pour la direction.`,
    details: [
      'Architecture logicielle sur-mesure',
      'Bases de données relationnelles sécurisées (PostgreSQL)',
      'Circuits de validation et alertes automatiques',
      'Gestion cloisonnée des droits utilisateurs (RBAC)',
      'Traçabilité et journalisation des actions',
      'Support technique et maintenance évolutive',
      'Conformité rigoureuse aux préconisations CNIL',
      'Accompagnement personnalisé des équipes',
    ],
  },
  {
    id: '4',
    title: 'Plateforme SaaS Sur-Mesure',
    subtitle: 'Produit Numérique Multi-Organisations',
    price: 'Sur Devis',
    description: `Conception de plateformes SaaS complètes. À l'image de Floticar (notre solution de gestion de flotte), nous développons des outils web centralisés, robustes et évolutifs.`,
    details: [
      'Architecture cloud moderne et évolutive (multi-tenant)',
      'Portail multi-organisations et gestion fine des droits',
      'Interfaces intuitives et ergonomie moderne',
      'API REST / GraphQL sécurisées',
      'Intégration de paiements ou facturation',
      'Hébergement souverain en France et conformité RGPD',
      'Maintenance préventive et surveillance 24/7',
      'Accompagnement à l’évolution du produit',
    ],
  },
  {
    id: '5',
    title: 'Application Mobile Professionnelle',
    subtitle: 'Outil Nomade & Équipes Terrain',
    price: 'Sur Devis',
    description: `Application web et mobile pensée pour les professionnels nomades. Saisie rapide d'interventions, consultation de plannings et fonctionnement hors-ligne garanti.`,
    details: [
      'Développement React Native ou PWA',
      'Fonctionnement déconnecté (mode hors-ligne)',
      'Synchronisation sécurisée au retour du réseau',
      'Saisie rapide de comptes-rendus et fiches de suivi',
      'Signature électronique et prise de photos terrain',
      'Déploiement fluide sur smartphones et tablettes',
      'Maintenance et support continu',
      'Hébergement sécurisé des flux',
    ],
  },
];

const dataPriceOptions = [
  {
    title: 'Design UX/UI & Ergonomie Métier',
    price: 'Sur Devis',
    description:
      "Des interfaces simples, contrastées et intuitives, pensées pour réduire la charge mentale des utilisateurs et faciliter l'adoption immédiate.",
    details: [
      'Ateliers de cadrage fonctionnel avec les équipes',
      'Design System modulaire et accessible',
      'Maquettage interactif haute fidélité',
      'Tests d’ergonomie en conditions réelles',
      'Clarté cognitive et parcours simplifiés',
    ],
  },
  {
    title: 'Audit de Sécurité & RGPD',
    price: 'Sur Devis',
    description:
      "Vérification des bonnes pratiques de cybersécurité web et de conformité aux préconisations de la CNIL avant mise en production.",
    details: [
      'Audit de sécurité applicative',
      'Vérification du chiffrement (HTTPS / TLS 1.3)',
      'Contrôle des flux et minimisation des données',
      'Recommandations de sécurisation des accès',
      'Conformité et bonnes pratiques de protection',
    ],
  },
  {
    title: 'Intégration & Connecteurs API Métiers',
    price: 'Sur Devis',
    description:
      "Connectez vos nouvelles applications aux logiciels administratifs, de comptabilité ou de gestion déjà en place dans votre organisation.",
    details: [
      'Conception d’API REST sécurisées',
      'Connecteurs d’export et d’import automatique',
      'Élimination des doubles saisies',
      'Synchronisation des plannings et flux de données',
      'Tableaux de bord de consolidation',
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
      'Surveillance proactive et disponibilité 99.9%',
      'Assistance technique directe et réactive',
    ],
  },
];

// //Service
const services: Service[] = [
  {
    id: 0,
    title: 'Développement Web Sur-Mesure',
    description: `Nous concevons des sites vitrines modernes, plateformes web, applications web complexes, espaces clients et tableaux de bord de pilotage. Chaque projet bénéficie d'une architecture Next.js pérenne, d'un design soigné et d'un référencement naturel optimisé.`,
    items: [
      { id: 1, title: 'Sites vitrines & plateformes' },
      { id: 2, title: 'Espaces clients & dashboards' },
      { id: 3, title: 'Développement sur-mesure Next.js' },
    ],
  },
  {
    id: 1,
    title: 'Applications Mobiles iOS & Android',
    description: `Nous développons des applications mobiles professionnelles (React Native / Expo) pensées pour les équipes de terrain et les utilisateurs nomades : ergonomie soignée, fonctionnement hors-ligne (mode déconnecté) et synchronisation fluide.`,
    items: [
      { id: 1, title: 'Applications iOS & Android' },
      { id: 2, title: 'Outils terrain & mode hors-ligne' },
      { id: 3, title: 'Connexion aux plateformes SaaS' },
    ],
  },
  {
    id: 2,
    title: 'Conception & Développement SaaS',
    description: `DevEvoke conçoit des produits SaaS de leur réflexion initiale jusqu'à leur mise en production : architecture cloud multi-organisations, API REST/GraphQL, authentification sécurisée, gestion fine des rôles et permissions (RBAC) et maintenance continue.`,
    items: [
      { id: 1, title: 'Architecture multi-tenant' },
      { id: 2, title: 'API sécurisées & Authentification' },
      { id: 3, title: 'Déploiement cloud & maintenance' },
    ],
  },
  {
    id: 3,
    title: 'Solutions Métier & Outils Internes',
    description: `Nous créons des logiciels métier sur mesure pour digitaliser vos processus opérationnels. Remplacez définitivement les fichiers Excel dispersés, centralisez vos informations stratégiques et dotez vos équipes d'outils internes fiables.`,
    items: [
      { id: 1, title: 'Remplacement de tableurs Excel' },
      { id: 2, title: 'Digitalisation des processus' },
      { id: 3, title: 'Outils internes & tableaux de bord' },
    ],
  },
  {
    id: 4,
    title: 'Automatisation des Processus',
    description: `Éliminez les tâches manuelles répétitives et les doubles saisies grâce à des circuits d'automatisation sur mesure. Nous connectons vos outils existants via API, automatisons la génération de rapports et fluidifions vos flux de données.`,
    items: [
      { id: 1, title: 'Suppression double saisie' },
      { id: 2, title: 'Connecteurs API sur-mesure' },
      { id: 3, title: 'Génération automatique de rapports' },
    ],
  },
  {
    id: 5,
    title: 'Hébergement Souverain & Maintenance',
    description: `Nous prenons en charge le déploiement de vos solutions sur des infrastructures cloud souveraines situées en France (ISO 27001), la conformité stricte au RGPD, la surveillance proactive 24/7, les sauvegardes quotidiennes et la maintenance évolutive.`,
    items: [
      { id: 1, title: 'Hébergement France (ISO 27001)' },
      { id: 2, title: 'Sauvegardes chiffrées & RGPD' },
      { id: 3, title: 'Maintenance préventive & support' },
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
    titleH1: "Processus d’accompagnement et de conception",
  },
  {
    title: 'Étape 1 : Cadrage des Besoins & Immersion Métier',
    text: `Nous analysons vos processus internes, vos outils existants et vos contraintes organisationnelles. Nous définissons ensemble un cahier des charges pragmatique et le périmètre exact des développements.`,
  },
  {
    title: 'Étape 2 : Conception UX & Ergonomie sur-mesure',
    text: `Nous réalisons les maquettes des interfaces en appliquant les principes d'accessibilité (RGAA) et de Privacy by Design pour simplifier le travail des utilisateurs.`,
  },
  {
    title: 'Étape 3 : Développement Full-Stack Sur-Mesure',
    text: `DevEvoke développe l'application (Next.js, TypeScript, React) avec une architecture propre, maintenable et connectée à vos outils existants via API.`,
  },
  {
    title: 'Étape 4 : Tests Utilisateurs & Validation Terrain',
    text: `Avant le déploiement général, la solution est testée en conditions réelles avec vos utilisateurs pour s’assurer de sa fluidité et corriger les retours d’usage.`,
  },
  {
    title: 'Étape 5 : Déploiement Cloud Sécurisé en France',
    text: `La plateforme est déployée sur des serveurs souverains situés en France avec certificats HTTPS, sauvegardes automatisées et sécurité renforcée.`,
  },
  {
    title: 'Étape 6 : Accompagnement & Maintenance Pérenne',
    text: `Vos équipes sont accompagnées pour la prise en main. DevEvoke assure la maintenance proactive, le support technique et les évolutions futures.`,
  },
];
const lienPolitiqueConfidentialite = `<a href='https://www.devevoke.com/politique-confidentialite'>politique de confidentialité</a>`;
const pageMentionsLegales: PageInfo[] = [
  {
    titleH1: 'Mentions légales',
  },

  {
    title: 'Édition du site',
    text: "En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://www.devevoke.com/ l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi : Propriétaire du site : Faradji Boucif (DevEvoke) - Contact : contact@devevoke.com - Téléphone : 06 18 23 76 62 - Adresse : 5 impasse des vergers, 66000 Perpignan. Identification de l'entreprise : EI Faradji Boucif - SIRET : 878 438 951 00013 - Directeur de la publication : Faradji Boucif - Contact : contact@devevoke.com. Hébergeur : OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1 - Téléphone : 1007.",
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
    text: `Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée et du Règlement Général sur la Protection des Données (RGPD), l’utilisateur du site https://www.devevoke.com/ dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à contact@devevoke.com. Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), consultez notre ${lienPolitiqueConfidentialite}.`,
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
    text: "La présente politique définit nos engagements relatifs à la collecte et au traitement des données personnelles via le site https://www.devevoke.com/. En tant qu'agence digitale spécialisée dans la conception de solutions numériques et logicielles sur mesure, DevEvoke veille au respect strict du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.",
  },
  {
    title: 'Hébergement Souverain et Sécurité',
    text: "Le site web DevEvoke ainsi que les données transmises via nos formulaires de contact sont hébergés sur des infrastructures situées en France et en Union Européenne, garantissant la souveraineté et la conformité aux normes européennes de protection des données.",
  },
  {
    title: 'Données collectées et finalités',
    text: "Les données recueillies (nom, prénom, organisation, fonction, email professionnel, téléphone, description de besoin) ont pour unique finalité le traitement des demandes de devis, de démonstration, de diagnostic numérique ou d'inscription à la newsletter B2B. Elles ne sont en aucun cas cédées ou revendues à des tiers.",
  },
  {
    title: 'Vérification des adresses e-mail professionnelles et lutte contre la fraude (Art. 6.1.f RGPD)',
    text: "Afin de garantir la fiabilité des échanges B2B, prévenir les abus et protéger nos formulaires contre le spam et la fraude (base légale : intérêt légitime de DevEvoke au sens de l'article 6.1.f du RGPD), l'adresse e-mail professionnelle saisie lors de la soumission d'un formulaire fait l'objet d'une vérification technique de délivrabilité côté serveur via notre sous-traitant spécialisé Hunter Web Services Inc. (encadré par un accord de traitement des données — Data Processing Addendum / DPA — conforme au RGPD). Conformément au principe de minimisation des données (article 5.1.c du RGPD), seule l'adresse e-mail est transmise lors de cette vérification : aucun nom, prénom, numéro de téléphone, nom d'établissement ou contenu de message n'est communiqué à ce prestataire. Aucune adresse e-mail n'est conservée en clair dans nos caches techniques (empreintes cryptographiques SHA-256 uniquement) ni dans nos journaux de sécurité.",
  },
  {
    title: 'Sous-traitants techniques et registre des traitements',
    text: "L'acheminement sécurisé des notifications et confirmations par e-mail est assuré par notre prestataire d'envoi transactionnel Resend, et la vérification de validité des adresses e-mail professionnelles par Hunter Web Services Inc. Ces traitements sont consignés dans le registre des activités de traitement de DevEvoke et encadrés par des clauses contractuelles de protection des données (DPA).",
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
    text: "Pour toute question relative à la gestion de vos données ou pour toute demande d'exercice de vos droits, DevEvoke est joignable à contact@devevoke.com.",
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
