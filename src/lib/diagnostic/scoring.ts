import { DIMENSION_WEIGHTS, MATURITY_LEVELS } from './constants';
import { DIAGNOSTIC_QUESTIONS, getActiveQuestions } from './questions';
import {
  Dimension,
  FleetDiagnostic,
  MaturityLevel,
  MaturityLevelKey,
  OrganizationProfile,
} from './types';

/**
 * Calcule les scores par dimension de maturité (0 à 100).
 * Fonction pure, déterministe et indépendante de React.
 */
export function calculateDimensionScores(
  answers: Record<string, string>,
  profile: OrganizationProfile
): {
  dimensionScores: Record<Dimension, number>;
  activeDimensions: Dimension[];
} {
  const activeQuestions = getActiveQuestions(profile);

  const dimensions: Dimension[] = [
    'organization',
    'businessTools',
    'mobility',
    'data',
    'security',
    'management',
  ];

  const dimensionScores: Record<Dimension, number> = {
    organization: 0,
    businessTools: 0,
    mobility: 0,
    data: 0,
    security: 0,
    management: 0,
  };

  const activeDimensions: Dimension[] = [];

  for (const dim of dimensions) {
    const dimQuestions = activeQuestions.filter((q) => q.dimension === dim && q.scored);

    let rawScore = 0;
    let maxPossible = 0;
    let answeredCount = 0;

    for (const question of dimQuestions) {
      const selectedOptionId = answers[question.id];
      if (!selectedOptionId) continue;

      const option = question.options.find((opt) => opt.id === selectedOptionId);
      if (!option) continue;

      // Si l'option est déclarée non applicable (ex: Q5 DUI non applicable),
      // on l'exclut du calcul sans pénaliser la dimension
      if (option.isNotApplicable) {
        continue;
      }

      if (typeof option.score === 'number') {
        rawScore += option.score * question.weight;
        maxPossible += 4 * question.weight;
        answeredCount++;
      }
    }

    if (maxPossible > 0 && answeredCount > 0) {
      const calculated = Math.round((rawScore / maxPossible) * 100);
      dimensionScores[dim] = Math.max(0, Math.min(100, calculated));
      activeDimensions.push(dim);
    } else {
      dimensionScores[dim] = 0;
    }
  }

  return { dimensionScores, activeDimensions };
}

/**
 * Détermine le niveau de maturité à partir d'un score (0-100)
 */
export function getMaturityLevelForScore(score: number): MaturityLevel {
  const safeScore = Math.max(0, Math.min(100, Math.round(score)));

  let key: MaturityLevelKey = 'initial';
  if (safeScore >= 85) {
    key = 'avance';
  } else if (safeScore >= 65) {
    key = 'maitrise';
  } else if (safeScore >= 45) {
    key = 'transition';
  } else if (safeScore >= 25) {
    key = 'structuration';
  } else {
    key = 'initial';
  }

  return MATURITY_LEVELS[key];
}

/**
 * Calcule le score global de maturité numérique avec renormalisation des poids
 */
export function calculateGlobalMaturity(
  dimensionScores: Record<Dimension, number>,
  activeDimensions: Dimension[]
): {
  globalScore: number;
  maturityLevel: MaturityLevel;
} {
  if (activeDimensions.length === 0) {
    return {
      globalScore: 0,
      maturityLevel: MATURITY_LEVELS.initial,
    };
  }

  // Renormalisation des poids pour les dimensions actives
  const totalActiveWeight = activeDimensions.reduce((acc, dim) => {
    return acc + (DIMENSION_WEIGHTS[dim] ?? 0);
  }, 0);

  if (totalActiveWeight <= 0) {
    return {
      globalScore: 0,
      maturityLevel: MATURITY_LEVELS.initial,
    };
  }

  let weightedSum = 0;
  for (const dim of activeDimensions) {
    const score = dimensionScores[dim] ?? 0;
    const baseWeight = DIMENSION_WEIGHTS[dim] ?? 0;
    const normalizedWeight = baseWeight / totalActiveWeight;
    weightedSum += score * normalizedWeight;
  }

  const globalScore = Math.max(0, Math.min(100, Math.round(weightedSum)));
  const maturityLevel = getMaturityLevelForScore(globalScore);

  return {
    globalScore,
    maturityLevel,
  };
}

/**
 * Calcule le diagnostic spécifique au module Flotte (séparé du score global)
 */
export function calculateFleetDiagnostic(
  answers: Record<string, string>,
  profile: OrganizationProfile
): FleetDiagnostic | undefined {
  if (profile.fleet === 'none') {
    return undefined;
  }

  const fleetQuestions = DIAGNOSTIC_QUESTIONS.filter((q) => q.dimension === 'fleet');
  let rawScore = 0;
  let maxPossible = 0;

  for (const q of fleetQuestions) {
    const selectedOptionId = answers[q.id];
    if (!selectedOptionId) continue;

    const option = q.options.find((opt) => opt.id === selectedOptionId);
    if (!option || typeof option.score !== 'number') continue;

    rawScore += option.score * q.weight;
    maxPossible += 4 * q.weight;
  }

  const score = maxPossible > 0 ? Math.max(0, Math.min(100, Math.round((rawScore / maxPossible) * 100))) : 0;

  let level = 'Initial';
  if (score >= 75) level = 'Maîtrisé & Informatisé';
  else if (score >= 50) level = 'En transition';
  else if (score >= 30) level = 'Partiellement manuel';
  else level = 'Gestion papier / Excel dispersé';

  return {
    score,
    level,
    hasFleet: true,
    risks: [],
    recommendations: [],
  };
}
