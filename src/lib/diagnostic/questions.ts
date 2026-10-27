import { DiagnosticQuestion, OrganizationProfile } from './types';

/**
 * Bibliothèque complète des 17 questions principales + 3 questions conditionnelles Flotte
 */
export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // ==========================================
  // 1. ORGANISATION & PROCESSUS
  // ==========================================
  {
    id: 'q1',
    dimension: 'organization',
    label: 'Comment sont gérés vos principaux processus administratifs ?',
    subtitle: 'Circulation des demandes, validations, feuilles d’heures et suivis internes.',
    weight: 1.2,
    scored: true,
    options: [
      { id: 'q1_a', label: 'Principalement sur support papier', score: 0 },
      { id: 'q1_b', label: 'Mélange de papier et de fichiers bureautiques non partagés', score: 1 },
      { id: 'q1_c', label: 'Outils numériques distincts selon les services sans standardisation', score: 2 },
      { id: 'q1_d', label: 'Processus majoritairement numériques et structurés', score: 3 },
      { id: 'q1_e', label: 'Processus numériques intégrés et automatisés lorsque pertinent', score: 4 },
    ],
  },
  {
    id: 'q2',
    dimension: 'organization',
    label: 'Les mêmes informations doivent-elles être ressaisies dans plusieurs outils ?',
    subtitle: 'Exemple : saisie sur carnet papier puis réencodage dans un tableur ou un portail.',
    weight: 1.3,
    scored: true,
    options: [
      { id: 'q2_a', label: 'Très souvent (ressaisies quasi quotidiennes)', score: 0 },
      { id: 'q2_b', label: 'Régulièrement sur plusieurs processus clés', score: 1 },
      { id: 'q2_c', label: 'Parfois, lors de passerelles entre certains services', score: 2 },
      { id: 'q2_d', label: 'Rarement, la plupart des données sont mutualisées', score: 3 },
      { id: 'q2_e', label: 'Pratiquement jamais, les données sont saisies à la source', score: 4 },
    ],
  },
  {
    id: 'q3',
    dimension: 'organization',
    label: 'Vos procédures numériques sont-elles documentées et connues des équipes ?',
    subtitle: 'Transmission des pratiques lors des arrivées de nouveaux professionnels.',
    weight: 0.8,
    scored: true,
    options: [
      { id: 'q3_a', label: 'Non, les pratiques reposent sur les habitudes individuelles', score: 0 },
      { id: 'q3_b', label: 'Très peu, quelques fiches informelles existent', score: 1 },
      { id: 'q3_c', label: 'Partiellement, sur les processus critiques uniquement', score: 2 },
      { id: 'q3_d', label: 'Oui, pour l’ensemble des processus importants', score: 3 },
      { id: 'q3_e', label: 'Oui, documentées, accessibles et régulièrement mises à jour', score: 4 },
    ],
  },

  // ==========================================
  // 2. OUTILS MÉTIER
  // ==========================================
  {
    id: 'q4',
    dimension: 'businessTools',
    label: 'Comment décririez-vous votre environnement logiciel ?',
    subtitle: 'Niveau d’intégration et de pérennité des outils utilisés au quotidien.',
    weight: 1.4,
    scored: true,
    options: [
      { id: 'q4_a', label: 'Beaucoup de papier, d’Excel et de formulaires Word éparpillés', score: 0 },
      { id: 'q4_b', label: 'Plusieurs outils indépendants sans passerelle entre eux', score: 1 },
      { id: 'q4_c', label: 'Un logiciel métier principal complété par plusieurs outils annexes', score: 2 },
      { id: 'q4_d', label: 'Un écosystème numérique structuré et maîtrisé par les équipes', score: 3 },
      { id: 'q4_e', label: 'Des outils intégrés avec échanges automatisés de données', score: 4 },
    ],
  },
  {
    id: 'q5',
    dimension: 'businessTools',
    label: 'Votre DUI ou logiciel métier répond-il réellement aux usages quotidiens des équipes ?',
    subtitle: 'Facilité d’appropriation par les éducateurs, soignants ou coordinateurs.',
    weight: 1.2,
    scored: true,
    options: [
      { id: 'q5_a', label: 'Très peu, le logiciel est perçu comme une contrainte lourde', score: 0 },
      { id: 'q5_b', label: 'Partiellement, plusieurs fonctionnalités clés sont délaissées', score: 1 },
      { id: 'q5_c', label: 'Globalement oui, mais avec plusieurs contournements informels', score: 2 },
      { id: 'q5_d', label: 'Oui, dans la majorité des situations professionnelles', score: 3 },
      { id: 'q5_e', label: 'Oui, et il s’intègre harmonieusement avec nos autres outils', score: 4 },
      { id: 'q5_na', label: 'Non applicable (notre structure n’utilise pas de DUI)', isNotApplicable: true },
    ],
  },
  {
    id: 'q6',
    dimension: 'businessTools',
    label: 'Lorsque vous avez un besoin spécifique non couvert, comment le gérez-vous ?',
    subtitle: 'Gestion d’un planning complexe, suivi d’admissions, ateliers, transport, etc.',
    weight: 0.8,
    scored: true,
    options: [
      { id: 'q6_a', label: 'Papier, post-its ou mémoire individuelle', score: 0 },
      { id: 'q6_b', label: 'Fichier Excel ou document bureautique partagé', score: 1 },
      { id: 'q6_c', label: 'Souscription d’un outil SaaS indépendant supplémentaire', score: 2 },
      { id: 'q6_d', label: 'Outil métier adapté ou développement dédié sur mesure', score: 3 },
      { id: 'q6_e', label: 'Solution intégrée à notre système d’information avec échanges de données', score: 4 },
    ],
  },

  // ==========================================
  // 3. MOBILITÉ TERRAIN
  // ==========================================
  {
    id: 'q7',
    dimension: 'mobility',
    label: 'Comment les professionnels saisissent-ils les informations lorsqu’ils sont sur le terrain ?',
    subtitle: 'En visite à domicile, école, entreprise ou déplacement extérieur.',
    weight: 1.4,
    scored: true,
    options: [
      { id: 'q7_a', label: 'Prise de notes papier puis ressaisie différée au bureau', score: 0 },
      { id: 'q7_b', label: 'Notes personnelles / téléphone personnel puis saisie ultérieure', score: 1 },
      { id: 'q7_c', label: 'Ordinateur portable ou portail web complexe peu adapté au terrain', score: 2 },
      { id: 'q7_d', label: 'Application mobile ou tablette adaptée aux usages nomades', score: 3 },
      { id: 'q7_e', label: 'Application dédiée avec synchronisation et mode hors-ligne lorsque nécessaire', score: 4 },
    ],
  },
  {
    id: 'q8',
    dimension: 'mobility',
    label: 'Les professionnels peuvent-ils accéder facilement aux informations nécessaires en mobilité ?',
    subtitle: 'Coordonnées d’urgence, fiches de suivi, plannings de tournée.',
    weight: 1.1,
    scored: true,
    options: [
      { id: 'q8_a', label: 'Non, les informations restent inaccessibles hors de l’établissement', score: 0 },
      { id: 'q8_b', label: 'Très difficilement (appels aux collègues, impressions papier préalables)', score: 1 },
      { id: 'q8_c', label: 'Partiellement (accès à distance possible mais peu pratique)', score: 2 },
      { id: 'q8_d', label: 'Oui, de manière sécurisée depuis un équipement professionnel', score: 3 },
      { id: 'q8_e', label: 'Oui, avec une expérience fluide pensée pour les usages de terrain', score: 4 },
    ],
  },

  // ==========================================
  // 4. DONNÉES & INTEROPÉRABILITÉ
  // ==========================================
  {
    id: 'q9',
    dimension: 'data',
    label: 'Les informations sont-elles réparties entre plusieurs logiciels ou fichiers sans synchronisation ?',
    subtitle: 'Fragmentation de la donnée entre RH, plannings, dossiers usagers et comptabilité.',
    weight: 1.4,
    scored: true,
    options: [
      { id: 'q9_a', label: 'Oui, énormément : l’information est très morcelée', score: 0 },
      { id: 'q9_b', label: 'Oui, régulièrement : plusieurs bases vivent en parallèle', score: 1 },
      { id: 'q9_c', label: 'Quelques silos subsistent entre certains services', score: 2 },
      { id: 'q9_d', label: 'Peu de silos : les outils principaux partagent les données clés', score: 3 },
      { id: 'q9_e', label: 'Les échanges sont largement structurés et synchronisés automatiquement', score: 4 },
    ],
  },
  {
    id: 'q10',
    dimension: 'data',
    label: 'Vos logiciels peuvent-ils échanger des données entre eux ?',
    subtitle: 'Passerelles automatisées, imports/exports ou connecteurs API.',
    weight: 1.3,
    scored: true,
    options: [
      { id: 'q10_a', label: 'Non, aucun échange automatisé possible', score: 0 },
      { id: 'q10_b', label: 'Principalement via des exports et imports manuels de fichiers CSV/Excel', score: 1 },
      { id: 'q10_c', label: 'Quelques intégrations ponctuelles existent', score: 2 },
      { id: 'q10_d', label: 'Plusieurs flux de données sont automatisés', score: 3 },
      { id: 'q10_e', label: 'Architecture d’intégration structurée avec API et connecteurs dédiés', score: 4 },
    ],
  },
  {
    id: 'q11',
    dimension: 'data',
    label: 'Pouvez-vous facilement obtenir une vision consolidée de l’activité ?',
    subtitle: 'Taux d’occupation, heures réalisées, suivi budgétaire ou alertes transverses.',
    weight: 1.1,
    scored: true,
    options: [
      { id: 'q11_a', label: 'Non, c’est impossible sans un travail lourd et complexe', score: 0 },
      { id: 'q11_b', label: 'Seulement après de longues consolidations manuelles sous tableur', score: 1 },
      { id: 'q11_c', label: 'Partiellement : vision disponible sur certains périmètres uniquement', score: 2 },
      { id: 'q11_d', label: 'Oui, via des tableaux de bord réguliers et fiabilisés', score: 3 },
      { id: 'q11_e', label: 'Oui, avec des indicateurs consolidés en temps réel facilement accessibles', score: 4 },
    ],
  },

  // ==========================================
  // 5. CYBERSÉCURITÉ & PROTECTION DES DONNÉES
  // ==========================================
  {
    id: 'q12',
    dimension: 'security',
    label: 'Comment sont gérés les comptes utilisateurs et les accès aux logiciels ?',
    subtitle: 'Individualisation des accès et gestion des permissions selon les rôles.',
    weight: 1.6,
    scored: true,
    options: [
      { id: 'q12_a', label: 'Des comptes ou mots de passe sont partagés entre plusieurs professionnels', score: 0 },
      { id: 'q12_b', label: 'Comptes individuels mais la gestion reste peu formalisée', score: 1 },
      { id: 'q12_c', label: 'Comptes individuels avec des règles de sécurité minimales', score: 2 },
      { id: 'q12_d', label: 'Comptes individuels avec gestion structurée des droits par profil', score: 3 },
      { id: 'q12_e', label: 'Gestion structurée, authentification multifacteur (MFA) et revues régulières', score: 4 },
    ],
  },
  {
    id: 'q13',
    dimension: 'security',
    label: 'Comment sont gérées les sauvegardes des données importantes de l’établissement ?',
    subtitle: 'Données administratives, dossiers et historiques d’activité.',
    weight: 1.8,
    scored: true,
    options: [
      { id: 'q13_a', label: 'Pas de sauvegarde clairement identifiée ou connue de la direction', score: 0 },
      { id: 'q13_b', label: 'Sauvegardes manuelles occasionnelles sur support externe (clé, disque)', score: 1 },
      { id: 'q13_c', label: 'Sauvegardes régulières mais la procédure de restauration est rarement testée', score: 2 },
      { id: 'q13_d', label: 'Sauvegardes automatisées, externalisées et supervisées', score: 3 },
      { id: 'q13_e', label: 'Sauvegardes automatisées, restaurations périodiquement testées et plan documenté', score: 4 },
    ],
  },
  {
    id: 'q14',
    dimension: 'security',
    label: 'Votre organisation dispose-t-elle d’une politique formalisée sur la sécurité des données ?',
    subtitle: 'Sensibilisation des équipes, charte informatique, gestion de la confidentialité.',
    weight: 1.5,
    scored: true,
    options: [
      { id: 'q14_a', label: 'Non, aucune politique ni consigne formalisée', score: 0 },
      { id: 'q14_b', label: 'Quelques consignes informelles transmises oralement', score: 1 },
      { id: 'q14_c', label: 'Documentation partielle ou charte ancienne peu relayée', score: 2 },
      { id: 'q14_d', label: 'Politique formalisée, connue des équipes et intégrée à l’accueil', score: 3 },
      { id: 'q14_e', label: 'Politique formalisée, revue périodiquement et accompagnée de contrôles réguliers', score: 4 },
    ],
  },
  {
    id: 'q15',
    dimension: 'security',
    label: 'Comment gérez-vous le départ ou le changement de fonction d’un professionnel ?',
    subtitle: 'Désactivation des comptes, récupération du matériel et révocation des droits.',
    weight: 1.4,
    scored: true,
    options: [
      { id: 'q15_a', label: 'Aucune procédure particulière (les accès peuvent rester actifs)', score: 0 },
      { id: 'q15_b', label: 'Traitement au cas par cas selon les signalements', score: 1 },
      { id: 'q15_c', label: 'Procédure existante mais son application n’est pas systématique', score: 2 },
      { id: 'q15_d', label: 'Désactivation et modification des accès systématiquement organisées', score: 3 },
      { id: 'q15_e', label: 'Processus formalisé avec check-list, traçabilité et revue périodique des droits', score: 4 },
    ],
  },

  // ==========================================
  // 6. PILOTAGE & REPORTING
  // ==========================================
  {
    id: 'q16',
    dimension: 'management',
    label: 'Comment la direction suit-elle les principaux indicateurs d’activité ?',
    subtitle: 'Rapports d’activité, suivi CPOM, taux de présence, charge de travail.',
    weight: 1.2,
    scored: true,
    options: [
      { id: 'q16_a', label: 'Principalement de manière manuelle et réactive', score: 0 },
      { id: 'q16_b', label: 'Tableaux Excel construits ponctuellement à la demande', score: 1 },
      { id: 'q16_c', label: 'Rapports réguliers mais semi-automatisés nécessitant des retraitements', score: 2 },
      { id: 'q16_d', label: 'Tableaux de bord structurés mis à jour à fréquence régulière', score: 3 },
      { id: 'q16_e', label: 'Indicateurs consolidés, fiabilisés et directement accessibles à la direction', score: 4 },
    ],
  },
  {
    id: 'q17',
    dimension: 'management',
    label: 'Combien de temps faut-il pour consolider les informations nécessaires à une décision importante ?',
    subtitle: 'Réponse à un appel à projet, bilan d’activité CPOM, arbitrage budgétaire.',
    weight: 1.0,
    scored: true,
    options: [
      { id: 'q17_a', label: 'Plusieurs jours de recherche et de compilation manuelle', score: 0 },
      { id: 'q17_b', label: 'Une journée environ pour regrouper les données nécessaires', score: 1 },
      { id: 'q17_c', label: 'Quelques heures pour extraire et vérifier les informations', score: 2 },
      { id: 'q17_d', label: 'Quelques minutes grâce à des tableaux de bord préconfigurés', score: 3 },
      { id: 'q17_e', label: 'Les données consolidées sont disponibles directement en temps réel', score: 4 },
    ],
  },

  // ==========================================
  // MODULE CONDITIONNEL : FLOTTE AUTOMOBILE
  // (uniquement si profile.fleet !== 'none')
  // ==========================================
  {
    id: 'q18',
    dimension: 'fleet',
    label: 'Comment suivez-vous l’utilisation de vos véhicules de service ?',
    subtitle: 'Carnets de bord, réservations, relevés kilométriques.',
    weight: 1.0,
    scored: true,
    condition: (profile: OrganizationProfile) => profile.fleet !== 'none',
    options: [
      { id: 'q18_a', label: 'Cahiers papier ou fiches de bord manuscrites dans chaque véhicule', score: 0 },
      { id: 'q18_b', label: 'Tableau Excel mis à jour manuellement de façon périodique', score: 1 },
      { id: 'q18_c', label: 'Calendrier partagé (Outlook/Google) sans suivi de l’état ni des kilomètres', score: 2 },
      { id: 'q18_d', label: 'Logiciel spécialisé de gestion de parc automobile', score: 3 },
      { id: 'q18_e', label: 'Gestion centralisée avec remontées terrain en temps réel et alertes automatiques', score: 4 },
    ],
  },
  {
    id: 'q19',
    dimension: 'fleet',
    label: 'Comment suivez-vous les entretiens, contrôles techniques et anomalies des véhicules ?',
    subtitle: 'Échéances mécaniques, révisions, validité des contrôles techniques.',
    weight: 1.2,
    scored: true,
    condition: (profile: OrganizationProfile) => profile.fleet !== 'none',
    options: [
      { id: 'q19_a', label: 'Principalement de mémoire, par constat visuel ou sur carnet papier', score: 0 },
      { id: 'q19_b', label: 'Tableau Excel ou rappels d’agenda mis à jour manuellement', score: 1 },
      { id: 'q19_c', label: 'Plusieurs outils dispersés ou rappels des garages prestataires', score: 2 },
      { id: 'q19_d', label: 'Système centralisé avec alertes préventives sur les échéances', score: 3 },
      { id: 'q19_e', label: 'Suivi centralisé avec alertes automatiques, historique complet et signalement conducteur', score: 4 },
    ],
  },
  {
    id: 'q20',
    dimension: 'fleet',
    label: 'Les conducteurs peuvent-ils signaler facilement une anomalie ou transmettre un justificatif ?',
    subtitle: 'Voyant allumé, rayure, ticket de carburant ou contrôle de permis.',
    weight: 0.8,
    scored: true,
    condition: (profile: OrganizationProfile) => profile.fleet !== 'none',
    options: [
      { id: 'q20_a', label: 'Non, aucune procédure de signalement simple n’est mise en place', score: 0 },
      { id: 'q20_b', label: 'Par oral, téléphone, SMS ou note volante déposée au secrétariat', score: 1 },
      { id: 'q20_c', label: 'Par email ou formulaire générique sans lien avec l’historique du véhicule', score: 2 },
      { id: 'q20_d', label: 'Interface numérique dédiée accessible aux conducteurs', score: 3 },
      { id: 'q20_e', label: 'Application mobile dédiée avec photos, géolocalisation et liaison directe au véhicule', score: 4 },
    ],
  },
];

/**
 * Retourne les questions actives en fonction du profil de l'organisation
 */
export function getActiveQuestions(profile: OrganizationProfile): DiagnosticQuestion[] {
  return DIAGNOSTIC_QUESTIONS.filter((q) => {
    if (!q.condition) return true;
    return q.condition(profile);
  });
}
