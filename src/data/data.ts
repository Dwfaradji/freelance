// data file for the website
import { Project, Price, Service, PageInfo } from './typeFile';

import fenixSolutions from '@/images/projects/fenixSolutions-1920.webp';
import fenixSolutionsMobile from '@/images/projects/fenixSolutions-1920.webp';

import kellerWilliams from '@/images/projects/kw-1920.webp';
import kellerWilliamsMobile from '@/images/projects/kw-688.webp';

import gastronomicMenu from '@/images/projects/appGastronomic-home-1920.webp';
import gastronomicMenuMobile from '@/images/projects/appGastronomic-home-688.webp';

import floticar from '@/images/projects/floticar-1920.webp';
import floticarMobile from '@/images/projects/floticar-1920.webp';

//Project
const projects: Project[] = [
  {
    id: 0,
    title: 'MediSync',
    subtitle: 'Logiciel de Gestion EHPAD',
    description: `Devevoke a conçu une plateforme centralisée pour la gestion des soins et du personnel en EHPAD.`,
    details: `Notre mission : développer une application web sécurisée (HDS) permettant le suivi des constantes, la gestion des plannings soignants et la communication avec les familles.`,
    results: `Résultats : un gain de temps de 30% pour les soignants sur la partie administrative, améliorant directement la qualité de la prise en charge.`,
    image: String(fenixSolutions.src),
    imageMobile: String(fenixSolutionsMobile.src),
    alt: 'image du projet MediSync EHPAD',
    tech: ['React', ' Node', ' HDS', ' Chiffrement AES'],
    link: '#',
    type: 'Application Web Médicale'
  },
  {
    id: 1,
    title: 'TeleSoins+',
    subtitle: 'Application de Télémédecine',
    description: `Nous avons développé une plateforme sécurisée pour la consultation médicale à distance.`,
    details: `Notre mission : concevoir une application mobile et web facilitant la prise de rendez-vous, la visioconférence chiffrée de bout en bout et l'échange d'ordonnances sécurisées.`,
    results: `Résultats : une expérience patient optimisée, avec plus de 10 000 téléconsultations réalisées le premier mois de déploiement.`,
    image: String(kellerWilliams.src),
    imageMobile: String(kellerWilliamsMobile.src),
    alt: 'image du projet TeleSoins',
    tech: ['Next', ' WebRTC', ' Symfony', ' Docker'],
    link: '#',
    type: 'Application Mobile'
  },
  {
    id: 2,
    title: 'DPI Portail',
    subtitle: 'Dossier Patient Informatisé Partagé',
    description: `Devevoke a conçu une interface intuitive permettant aux cliniques de partager les dossiers médicaux entre professionnels de santé.`,
    details: `Notre mission : proposer une solution interopérable (HL7) et ergonomique pour visualiser l'historique médical, les résultats labo et les comptes-rendus.`,
    results: `Résultats : une coordination des soins accélérée et une réduction des erreurs liées à la perte d'information papier.`,
    image: String(gastronomicMenuMobile.src),
    imageMobile: String(gastronomicMenuMobile.src),
    alt: 'image du projet DPI',
    tech: ['Next.js', ' Tailwind CSS', ' HL7', ' API Santé'],
    link: '#',
    type: 'Plateforme e-Santé'
  },
  {
    id: 3,
    title: 'AmbuTrack',
    subtitle: 'Gestion de Flotte d\'Ambulances',
    description: `Devevoke a conçu une application SaaS intuitive permettant aux sociétés d'ambulances de gérer leurs courses en temps réel.`,
    details: `Notre mission : développer une interface de dispatch connectée aux systèmes hospitaliers pour le suivi des véhicules, des plannings et de la régulation.`,
    results: `Résultats : une centralisation des données optimale, permettant aux régulateurs de diviser par deux les temps d'attente.`,
    image: String(floticar.src),
    imageMobile: String(floticarMobile.src),
    alt: 'image du projet AmbuTrack',
    tech: ['React', ' Tailwind CSS', ' TypeScript', ' GPS API'],
    link: '#',
    type: 'SaaS Logistique Santé'
  },
];

// //Tarifs
const prices: Price[] = [
  {
    id: '1',
    title: 'Présence Digitale Santé',
    subtitle: 'Site Vitrine Etablissement',
    price: 'Sur Devis',
    description: `Un site vitrine performant et au design rassurant, idéal pour un EHPAD, une clinique ou un cabinet médical. 
      Cette formule inclut une conception sur-mesure, une présentation de l'équipe médicale, et une interface 100% accessible (RGAA).`,
    details: [
      'Design exclusif et rassurant (Santé UI)',
      'Développement ultra-rapide (Next.js)',
      'Respect des normes d\'accessibilité',
      'Mise en place de votre contenu',
      'Formulaire de contact sécurisé',
      'Optimisation SEO locale',
      'Nom de domaine et hébergement',
      'Conformité RGPD',
    ],
  },
  {
    id: '2',
    title: 'Portail Patient',
    subtitle: 'Espace Numérique Sécurisé',
    price: 'Sur Devis',
    description: `Une plateforme en ligne sécurisée permettant à vos patients d'accéder à leurs informations. Prise de RDV, partage de documents et formulaires de pré-admission.`,
    details: [
      'Interface patient optimisée',
      'Connexion sécurisée (MFA)',
      'Partage de documents chiffrés',
      'Module de prise de rendez-vous',
      'Hébergement certifié HDS',
      'Notification SMS / Email',
      'Design adaptatif Mobile-First',
      'Formation à l’utilisation',
    ],
  },
  {
    id: '3',
    title: 'Écosystème Soins',
    subtitle: 'Logiciel Métier & DPI',
    price: 'Sur Devis',
    description: `Digitalisez vos processus de soins avec un outil sur mesure. Centralisez les dossiers patients, automatisez la gestion des plannings soignants et boostez la coordination.`,
    details: [
      'Architecture logicielle sur mesure',
      'Bases de données de santé sécurisées',
      'Interopérabilité (API Santé)',
      'Gestion avancée des droits',
      'Traçabilité et logs des accès',
      'Support technique critique',
      'Respect strict de la CNIL',
      'Formation de vos équipes',
    ],
  },
  {
    id: '4',
    title: 'Scale-Up MedTech',
    subtitle: 'SaaS e-Santé Complexe',
    price: 'Sur Devis',
    description: `Vous avez l'idée de la prochaine grande startup MedTech ? Nous construisons l'architecture complète de votre SaaS santé. De la conception à la sécurité.`,
    details: [
      'Conception de l’architecture HDS',
      'Développement Full-Stack',
      'Protocoles de chiffrement',
      'Gestion complexe des utilisateurs',
      'Conception UX/UI centrée santé',
      'Tests d\'intrusion (Pentests)',
      'Déploiement sur serveurs souverains',
      'Accompagnement technico-légal',
    ],
  },
  {
    id: '5',
    title: 'Mobile Santé',
    subtitle: 'App Patient ou Soignant',
    price: 'Sur Devis',
    description: `Une application mobile native performante capable d'exploiter à 100% les capacités des smartphones en toute sécurité pour vos professionnels ou patients.`,
    details: [
      'Maquettage UX/UI dédié e-santé',
      'Développement React Native',
      'Notifications Push de rappels',
      'Bluetooth (objets connectés)',
      'Synchronisation sécurisée',
      'Gestion du mode Hors-ligne',
      'Déploiement App Store & Play',
      'Maintenance évolutive',
    ],
  },
];


const dataPriceOptions = [
  {
    title: 'Design UX/UI Santé',
    price: 'Sur Devis',
    description:
      "Dans la santé, l'interface doit être claire, accessible et rassurante. Nous créons des parcours pensés pour les soignants et les patients.",
    details: [
      'Élaboration charte médicale',
      'Design System sur Figma',
      'Maquettage haute fidélité',
      'Tests d\'utilisabilité',
      'Ergonomie logicielle métier',
    ],
  },
  {
    title: 'Audit de Sécurité',
    price: 'Sur Devis',
    description:
      "Assurez-vous que votre application respecte les normes critiques de l'e-santé avant son lancement.",
    details: [
      'Audit technique de sécurité',
      'Vérification du chiffrement',
      'Validation de l\'architecture HDS',
      'Analyse d\'impact (AIPD)',
      'Tests d\'intrusion',
    ],
  },
  {
    title: 'Interopérabilité',
    price: 'Sur Devis',
    description:
      "Connectez votre application à l'écosystème de santé national et systèmes tiers.",
    details: [
      'Connecteurs HL7 / FHIR',
      'Intégration annuaires (RPPS)',
      'Interopérabilité laboratoires',
      'Échange de documents',
      'IoT médical',
    ],
  },
  {
    title: 'Forfait Continuité (HDS)',
    price: 'Sur Devis',
    description:
      "Nous garantissons la disponibilité critique, la sécurité et la sauvegarde de vos données de santé.",
    details: [
      'Hébergement certifié HDS',
      'Sauvegardes chiffrées (PRA)',
      'Mises à jour critiques',
      'SLA de 99.9% et monitoring 24/7',
      'Assistance d\'urgence',
    ],
  },
];

// //Service
const services: Service[] = [
  {
    id: 0,
    title: 'Dossiers Patients Informatisés (DPI)',
    description: `Nous concevons des logiciels de Dossier Patient Informatisé sur-mesure. Centralisez les informations médicales, fluidifiez les transmissions entre soignants et sécurisez le parcours de soins.
Notre expertise nous permet de créer des interfaces ergonomiques, pensées pour faire gagner du temps aux équipes médicales tout en garantissant l'intégrité des données.`,

    items: [
      { id: 1, title: 'Centralisation' },
      { id: 2, title: 'Transmissions' },
      { id: 3, title: 'Traçabilité' },
    ],
  },
  {
    id: 1,
    title: "Applications Mobiles et Télémédecine",
    description: `Nous développons des applications mobiles natives et des plateformes de télémédecine sécurisées.
    Que ce soit pour le suivi à domicile, la téléconsultation ou la gestion de plannings, nous fournissons des outils fluides intégrant visioconférence et partage sécurisé.`,
    items: [
      { id: 1, title: 'Visioconférence' },
      { id: 2, title: 'IoT Santé' },
      { id: 3, title: 'Rappels de soins' },
    ],
  },
  {
    id: 2,
    title: 'Logiciels de Gestion pour EHPAD et Cliniques',
    description: `Digitalisez l'administration de votre établissement. Nos solutions ERP/SaaS médico-sociales couvrent la gestion des admissions, la facturation, les plannings du personnel et la communication avec les familles.`,
    items: [
      { id: 1, title: 'Gestion unifiée' },
      { id: 2, title: 'Ressources humaines' },
      { id: 3, title: 'Portail Familles' },
    ],
  },

  {
    id: 3,
    title: 'Hébergement HDS & Sécurité',
    description: `La protection des données de santé est une obligation légale et éthique. Nous gérons le déploiement de vos applications sur des serveurs souverains bénéficiant de la certification Hébergeur de Données de Santé (HDS).`,
    items: [
      { id: 1, title: 'Certification HDS' },
      { id: 2, title: 'Chiffrement AES' },
      { id: 3, title: 'Plan de Reprise' },
    ],
  },
  {
    id: 4,
    title: 'Interopérabilité et Normes',
    description: `Une application médicale isolée perd de sa valeur. Nous assurons l'interopérabilité de vos logiciels avec l'écosystème de santé national et les systèmes existants de votre établissement.`,
    items: [
      { id: 1, title: 'Standards HL7' },
      { id: 2, title: 'API Santé' },
      { id: 3, title: 'DMP & MSSanté' },
    ],
  },
  {
    id: 5,
    title: 'Conformité RGPD & Accessibilité',
    description: `Nous intégrons les contraintes légales dès la phase de conception (Privacy by design). Nos experts s'assurent que votre application respecte les recommandations de la CNIL concernant les données de santé.`,
    items: [
      { id: 1, title: 'Privacy by design' },
      { id: 2, title: 'Audits de sécurité' },
      { id: 3, title: 'Norme RGAA' },
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
    titleH1: "Processus de réalisation e-santé",
  },
  {
    title: 'Étape 1 : Cadrage Légal & Fonctionnel',
    text: `Le processus commence par un audit de vos besoins métiers et une analyse stricte des contraintes légales (CNIL, RGPD, Hébergement de Données de Santé). Nous définissons l'architecture et les protocoles de sécurité.`,
  },
  {
    title: 'Étape 2 : Conception et Sécurité (Privacy by Design)',
    text: `Nous réalisons les maquettes et concevons l'architecture technique en appliquant les principes de Privacy by Design. Les choix de chiffrement, d'anonymisation et de gestion des accès (RBAC) sont fixés.`,
  },
  {
    title: 'Étape 3 : Développement et Interopérabilité',
    text: `Nos développeurs experts construisent l'application en intégrant les standards de santé (HL7, FHIR, connecteurs DMP/MSSanté) pour garantir une intégration parfaite dans votre écosystème.`,
  },
  {
    title: 'Étape 4 : Tests d\'intrusion et Validation UX',
    text: `Avant tout déploiement, la solution subit des audits de sécurité (Pentests) et des tests d'utilisabilité par des professionnels de santé pour garantir la robustesse et l'ergonomie.`,
  },
  {
    title: 'Étape 5 : Déploiement en environnement certifié HDS',
    text: `La plateforme est déployée sur des serveurs souverains disposant de la certification Hébergeur de Données de Santé (HDS), garantissant une protection maximale.`,
  },
  {
    title: 'Étape 6 : Formation et Continuité',
    text: `Vos équipes soignantes sont formées à l'outil. Nous assurons ensuite un monitoring 24/7 et la maintenance évolutive de la solution.`,
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
    titleH1: 'Politique de confidentialité & Données de Santé',
  },
  {
    title: 'Introduction et Cadre Légal',
    text: 'La présente politique définit nos engagements en tant que Sous-Traitant au sens du RGPD. En concevant des logiciels pour les établissements de santé, Devevoke traite potentiellement des données à caractère personnel et des données de santé couvertes par le secret médical.',
  },
  {
    title: 'Hébergement HDS (Données de Santé)',
    text: 'Toutes les applications que nous déployons pour nos clients médicaux sont obligatoirement hébergées sur des serveurs disposant de la certification HDS (Hébergeur de Données de Santé) situés en France, garantissant la souveraineté et la sécurité absolue.',
  },
  {
    title: 'Engagement de Sous-Traitance (DPA)',
    text: 'Nous n\'utilisons jamais les données de santé pour notre propre compte. Nos accès sont limités aux stricts besoins de maintenance technique et de support, encadrés par des accords de confidentialité (NDA) rigoureux signés par tous nos collaborateurs.',
  },
  {
    title: 'Chiffrement et Sécurité',
    text: 'Toutes les données en transit et au repos sont chiffrées selon les standards industriels (AES-256). Nous appliquons des protocoles d\'anonymisation et de pseudonymisation pour les environnements de test.',
  },
  {
    title: 'Droits des patients (CNIL)',
    text: 'Bien que nous fournissions l\'outil technique, l\'établissement de santé reste le Responsable de Traitement. Nous avons conçu nos applications pour permettre aux Délégués à la Protection des Données (DPO) de répondre facilement aux demandes d\'accès, de portabilité ou d\'effacement des patients.',
  },
  {
    title: 'Contact DPO',
    text: 'Pour toute question relative à la sécurité ou à notre conformité, notre DPO est joignable à dpo@devevoke.com.',
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
