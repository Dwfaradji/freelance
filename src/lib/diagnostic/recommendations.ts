import {
  DevEvokeSolution,
  DiagnosticRisk,
  Dimension,
  Horizon,
  OrganizationProfile,
  Recommendation,
  Strength,
} from './types';

/**
 * Bibliothèque complète de recommandations ciblées
 */
export const RECOMMENDATION_CATALOG: Array<
  Omit<Recommendation, 'priorityScore'> & {
    condition: (
      profile: OrganizationProfile,
      answers: Record<string, string>,
      dimensionScores: Record<Dimension, number>,
      risks: DiagnosticRisk[]
    ) => boolean;
  }
> = [
  // 1. Sauvegardes et résilience
  {
    id: 'rec_backup_plan',
    dimension: 'security',
    title: 'Automatiser les sauvegardes et tester la restauration',
    description:
      'Sécuriser les données de l’établissement face aux cybermenaces et défaillances techniques.',
    action:
      'Déployer une sauvegarde automatique externalisée chiffrée et planifier un test semestriel de restauration des données clés.',
    impact: 5,
    effort: 2,
    urgency: 5,
    horizon: '30-days',
    relatedSolution: 'security',
    condition: (_, __, ___, risks) => risks.some((r) => r.id === 'no_backup' || r.id === 'fragile_backup'),
  },

  // 2. Gestion des comptes et départs
  {
    id: 'rec_access_governance',
    dimension: 'security',
    title: 'Individualiser les comptes et formaliser les sorties de personnel',
    description:
      'Garantir que chaque action informatique est traçable et que les accès sont immédiatement révoqués lors des départs.',
    action:
      'Supprimer tous les comptes partagés, attribuer des identifiants uniques et instaurer une check-list obligatoire d’offboarding RH.',
    impact: 5,
    effort: 2,
    urgency: 4,
    horizon: '30-days',
    relatedSolution: 'security',
    condition: (_, __, ___, risks) =>
      risks.some(
        (r) =>
          r.id === 'shared_accounts' ||
          r.id === 'uncontrolled_offboarding' ||
          r.id === 'access_governance'
      ),
  },

  // 3. Suppression des doubles saisies
  {
    id: 'rec_eliminate_duplicate_entries',
    dimension: 'organization',
    title: 'Supprimer les ressaisies manuelles entre outils et formulaires',
    description:
      'Alléger la charge mentale des professionnels et redonner du temps utile auprès des personnes accompagnées.',
    action:
      'Cartographier les 3 formulaires les plus ressaisis et mettre en place une liaison directe ou un formulaire numérique source unique.',
    impact: 4,
    effort: 2,
    urgency: 4,
    horizon: '30-days',
    relatedSolution: 'automation',
    condition: (_, __, ___, risks) => risks.some((r) => r.id === 'duplicate_entry'),
  },

  // 4. Outil mobile terrain déconnecté
  {
    id: 'rec_mobile_field_app',
    dimension: 'mobility',
    title: 'Équiper les intervenants d’une application mobile métier adaptée',
    description:
      'Permettre la saisie des transmissions, fiches de suivi et signatures directement chez les familles ou en déplacement.',
    action:
      'Déployer une application mobile ergonomique fonctionnant en mode dégradé/hors-ligne pour éliminer les fiches papier volantes.',
    impact: 4,
    effort: 3,
    urgency: 4,
    horizon: '3-months',
    relatedSolution: 'mobileApp',
    condition: (profile, __, scores, risks) =>
      (profile.mobility === 'regularly' || profile.mobility === 'daily') &&
      (scores.mobility < 65 || risks.some((r) => r.id === 'mobility_disconnect')),
  },

  // 5. Remplacement des fichiers Excel dispersés
  {
    id: 'rec_custom_business_tool',
    dimension: 'businessTools',
    title: 'Remplacer les fichiers tableurs éparpillés par un outil métier centralisé',
    description:
      'Fiabiliser les plannings, admissions ou suivis d’ateliers non couverts de façon satisfaisante par le logiciel principal.',
    action:
      'Concevoir une interface web dédiée sur mesure, intuitive et interconnectée avec votre système existant.',
    impact: 4,
    effort: 3,
    urgency: 3,
    horizon: '3-months',
    relatedSolution: 'customSoftware',
    condition: (_, answers, scores) =>
      scores.businessTools < 60 || answers.q4 === 'q4_a' || answers.q6 === 'q6_a' || answers.q6 === 'q6_b',
  },

  // 6. Connecteurs et interopérabilité des données
  {
    id: 'rec_data_connectors',
    dimension: 'data',
    title: 'Interconnecter les logiciels clés pour décloisonner les données',
    description:
      'Éviter les imports/exports manuels hebdomadaires entre le logiciel de paie, le planning et le dossier usager.',
    action:
      'Mettre en place des passerelles automatisées (API ou imports planifiés sécurisés) entre vos différents progiciels.',
    impact: 4,
    effort: 3,
    urgency: 3,
    horizon: '3-months',
    relatedSolution: 'integration',
    condition: (_, __, scores, risks) =>
      scores.data < 60 || risks.some((r) => r.id === 'data_silos' || r.id === 'fragmented_information_system'),
  },

  // 7. Tableaux de bord de direction automatisés
  {
    id: 'rec_consolidated_dashboard',
    dimension: 'management',
    title: 'Automatiser la consolidation des indicateurs d’activité et CPOM',
    description:
      'Donner à la direction générale et aux cadres une visibilité temps réel sur le taux d’activité, l’occupation et les alertes.',
    action:
      'Structurer un tableau de bord de pilotage multi-sites connecté à vos bases, réduisant le temps de reporting de plusieurs jours à quelques minutes.',
    impact: 4,
    effort: 3,
    urgency: 3,
    horizon: '6-months',
    relatedSolution: 'customSoftware',
    condition: (_, answers, scores) =>
      scores.management < 65 || answers.q16 === 'q16_a' || answers.q16 === 'q16_b' || answers.q17 === 'q17_a',
  },

  // 8. Gestion informatisée de flotte automobile (Floticar)
  {
    id: 'rec_fleet_automation',
    dimension: 'fleet',
    title: 'Informatiser le suivi des véhicules, révisions et permis de conduire',
    description:
      'Sécuriser la conformité réglementaire de la flotte et fluidifier les réservations pour les équipes éducatives.',
    action:
      'Remplacer les carnets de bord papier par une solution de gestion de flotte digitale avec alertes de maintenance et relevés kilométriques mobiles.',
    impact: 4,
    effort: 2,
    urgency: 4,
    horizon: '30-days',
    relatedSolution: 'fleet',
    condition: (profile, _, __, risks) =>
      profile.fleet !== 'none' &&
      risks.some((r) => r.id === 'fleet_compliance_risk' || r.id === 'fleet_paper_gap'),
  },

  // 9. Charte informatique et sensibilisation des professionnels
  {
    id: 'rec_security_charter',
    dimension: 'security',
    title: 'Formaliser une charte informatique et sensibiliser les équipes',
    description:
      'Développer une culture partagée de vigilance face aux tentatives d’hameçonnage et aux erreurs de manipulation.',
    action:
      'Diffuser une charte simple et visuelle rappelant les bonnes pratiques de sécurité au quotidien (mots de passe, messagerie, déconnexion).',
    impact: 3,
    effort: 1,
    urgency: 3,
    horizon: '30-days',
    relatedSolution: 'security',
    condition: (_, __, ___, risks) => risks.some((r) => r.id === 'no_formal_security_policy'),
  },

  // 10. Documentation des procédures clés
  {
    id: 'rec_document_procedures',
    dimension: 'organization',
    title: 'Documenter les procédures numériques clés pour sécuriser les transitions',
    description:
      'Éviter la dépendance critique envers un collaborateur unique pour les opérations informatiques récurrentes.',
    action:
      'Créer un espace documentaire partagé regroupant les fiches réflexes pas-à-pas pour les processus administratifs majeurs.',
    impact: 3,
    effort: 2,
    urgency: 2,
    horizon: '3-months',
    relatedSolution: 'automation',
    condition: (_, __, ___, risks) => risks.some((r) => r.id === 'undocumented_processes'),
  },
];

/**
 * Calcule le score de priorité d'une recommandation :
 * priorityScore = (impact * 0.45) + (urgency * 0.40) + ((6 - effort) * 0.15)
 */
export function calculatePriorityScore(
  impact: number,
  effort: number,
  urgency: number
): number {
  return Number(((impact * 0.45) + (urgency * 0.40) + ((6 - effort) * 0.15)).toFixed(2));
}

/**
 * Génère et filtre les recommandations adaptées aux réponses du diagnostic
 */
export function generateRecommendations(
  profile: OrganizationProfile,
  answers: Record<string, string>,
  dimensionScores: Record<Dimension, number>,
  risks: DiagnosticRisk[]
): Recommendation[] {
  const matching = RECOMMENDATION_CATALOG.filter((item) =>
    item.condition(profile, answers, dimensionScores, risks)
  );

  const formatted: Recommendation[] = matching.map((item) => ({
    id: item.id,
    dimension: item.dimension,
    title: item.title,
    description: item.description,
    action: item.action,
    impact: item.impact,
    effort: item.effort,
    urgency: item.urgency,
    horizon: item.horizon,
    priorityScore: calculatePriorityScore(item.impact, item.effort, item.urgency),
    relatedSolution: item.relatedSolution,
  }));

  // Tri par score de priorité décroissant
  return formatted.sort((a, b) => b.priorityScore - a.priorityScore);
}

/**
 * Extrait le Top 3 des priorités d'action
 */
export function getTopPriorities(recommendations: Recommendation[]): Recommendation[] {
  return recommendations.slice(0, 3);
}

/**
 * Extrait les Quick Wins : recommandations à fort impact (>=4) et faible effort (<=2), max 3
 */
export function getQuickWins(recommendations: Recommendation[]): Recommendation[] {
  return recommendations
    .filter((r) => r.impact >= 4 && r.effort <= 2)
    .slice(0, 3);
}

/**
 * Construit la feuille de route structurée par horizon temporel
 */
export function buildRoadmap(recommendations: Recommendation[]): {
  thirtyDays: Recommendation[];
  threeMonths: Recommendation[];
  sixMonths: Recommendation[];
} {
  return {
    thirtyDays: recommendations.filter((r) => r.horizon === '30-days'),
    threeMonths: recommendations.filter((r) => r.horizon === '3-months'),
    sixMonths: recommendations.filter((r) => r.horizon === '6-months'),
  };
}

/**
 * Détecte les points forts réels de l'établissement (max 3)
 */
export function detectStrengths(
  dimensionScores: Record<Dimension, number>,
  answers: Record<string, string>
): Strength[] {
  const strengths: Strength[] = [];

  if (dimensionScores.security >= 65) {
    strengths.push({
      id: 'strength_security',
      dimension: 'security',
      title: 'Pratiques de cybersécurité structurées',
      description:
        'L’organisation démontre une attention établie à l’individualisation des accès et à la protection des données sensibles.',
    });
  }

  if (dimensionScores.organization >= 65) {
    strengths.push({
      id: 'strength_org',
      dimension: 'organization',
      title: 'Processus administratifs digitalisés',
      description:
        'Les équipes ont largement dépassé le stade du papier pour organiser les validations et circulations d’informations.',
    });
  }

  if (dimensionScores.data >= 65) {
    strengths.push({
      id: 'strength_data',
      dimension: 'data',
      title: 'Décloisonnement des données et vision consolidée',
      description:
        'Les échanges entre outils sont en bonne voie et permettent d’agréger l’activité sans consolidation manuelle excessive.',
    });
  }

  if (dimensionScores.mobility >= 65) {
    strengths.push({
      id: 'strength_mobility',
      dimension: 'mobility',
      title: 'Maturité des usages en mobilité',
      description:
        'Les professionnels nomades disposent d’accès adaptés sur le terrain limitant les reports de charge au bureau.',
    });
  }

  if (dimensionScores.businessTools >= 65) {
    strengths.push({
      id: 'strength_tools',
      dimension: 'businessTools',
      title: 'Adéquation des outils informatiques aux pratiques',
      description:
        'Les logiciels utilisés répondent globalement aux contraintes quotidiennes sans prolifération de fichiers parallèles.',
    });
  }

  if (dimensionScores.management >= 65) {
    strengths.push({
      id: 'strength_mgmt',
      dimension: 'management',
      title: 'Pilotage réactif et disponibilité des indicateurs',
      description:
        'La gouvernance bénéficie de tableaux de bord structurés permettant de prendre des décisions éclairées sans délai.',
    });
  }

  // Si moins de points forts découverts, on met en avant la démarche d'auto-évaluation
  if (strengths.length === 0) {
    strengths.push({
      id: 'strength_commitment',
      dimension: 'organization',
      title: 'Volonté de structuration et lucidité opérationnelle',
      description:
        'La réalisation de ce diagnostic témoigne d’une démarche proactive de la direction pour identifier les chantiers prioritaires.',
    });
  }

  return strengths.slice(0, 3);
}

/**
 * Détecte les solutions DevEvoke strictement pertinentes, sans forcing commercial
 */
export function detectRelevantSolutions(
  profile: OrganizationProfile,
  dimensionScores: Record<Dimension, number>,
  fleetScore?: number,
  risks: DiagnosticRisk[] = []
): DevEvokeSolution[] {
  const solutions = new Set<DevEvokeSolution>();

  // Sécurité
  if (dimensionScores.security < 65 || risks.some((r) => r.dimension === 'security' && (r.level === 'critical' || r.level === 'high'))) {
    solutions.add('security');
  }

  // Outils métiers sur-mesure
  if (dimensionScores.businessTools < 60 || dimensionScores.management < 60) {
    solutions.add('customSoftware');
  }

  // Automatisation
  if (dimensionScores.organization < 60 || risks.some((r) => r.id === 'duplicate_entry')) {
    solutions.add('automation');
  }

  // Interopérabilité / Intégration
  if (dimensionScores.data < 60 || risks.some((r) => r.id === 'data_silos' || r.id === 'fragmented_information_system')) {
    solutions.add('integration');
  }

  // Application mobile (uniquement si équipes mobiles régulières)
  if ((profile.mobility === 'regularly' || profile.mobility === 'daily') && dimensionScores.mobility < 65) {
    solutions.add('mobileApp');
  }

  // Floticar : UNIQUEMENT si l'établissement possède une flotte ET que le score flotte est < 65
  if (profile.fleet !== 'none' && fleetScore !== undefined && fleetScore < 65) {
    solutions.add('fleet');
  }

  return Array.from(solutions);
}
