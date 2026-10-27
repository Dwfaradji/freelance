import {
  buildRoadmap,
  detectRelevantSolutions,
  detectStrengths,
  generateRecommendations,
  getQuickWins,
  getTopPriorities,
} from './recommendations';
import { detectRisks } from './riskEngine';
import {
  calculateDimensionScores,
  calculateFleetDiagnostic,
  calculateGlobalMaturity,
} from './scoring';
import { DiagnosticReport, OrganizationProfile } from './types';

/**
 * Génère une synthèse personnalisée et déterministe selon le profil et les constats
 */
export function generateCustomSynthesis(
  profile: OrganizationProfile,
  globalScore: number,
  risksCount: { critical: number; high: number }
): string {
  const isMultiSite = profile.siteCount !== '1';
  const isMobile = profile.mobility === 'regularly' || profile.mobility === 'daily';
  const hasFleet = profile.fleet !== 'none';

  let text = '';

  if (globalScore >= 75) {
    text =
      'Votre structure bénéficie d’un socle numérique solide et de pratiques professionnelles structurées. ';
  } else if (globalScore >= 50) {
    text =
      'Votre organisation a déjà engagé des démarches de digitalisation notables, mais plusieurs processus manuels ou cloisonnés freinent encore l’efficacité collective. ';
  } else {
    text =
      'Votre organisation repose encore largement sur des outils bureautiques dispersés ou des démarches papier. ';
  }

  if (isMultiSite) {
    text +=
      'La gestion multi-sites accentue le besoin de centralisation des données afin d’éviter les décalages d’information entre les établissements et le siège. ';
  }

  if (isMobile) {
    text +=
      'Le travail quotidien des équipes en mobilité nécessite des outils nomades adaptés et sécurisés pour éviter les doubles saisies au retour de tournée. ';
  }

  if (hasFleet) {
    text +=
      'La présence d’une flotte de véhicules constitue un poste d’attention réglementaire et financier direct pour votre organisation. ';
  }

  if (risksCount.critical > 0) {
    text +=
      'La priorité absolue doit être accordée à la résorption des points de vigilance critiques identifiés en matière de sécurité et de gouvernance des accès.';
  } else if (risksCount.high > 0) {
    text +=
      'Les actions à fort impact identifiées vous permettront de sécuriser rapidement vos opérations tout en libérant du temps d’accompagnement.';
  } else {
    text +=
      'Les prochaines étapes concernent l’interopérabilité fine, l’automatisation des tâches récurrentes et le reporting consolidé.';
  }

  return text.trim();
}

/**
 * Source unique de vérité : construit l'objet DiagnosticReport complet
 * partagé à 100% entre l'affichage écran, l'exportation PDF et les emails.
 */
export function buildDiagnosticReport(
  profile: OrganizationProfile,
  answers: Record<string, string>
): DiagnosticReport {
  // 1. Calcul des scores par dimension
  const { dimensionScores, activeDimensions } = calculateDimensionScores(answers, profile);

  // 2. Calcul du score global et niveau
  const { globalScore, maturityLevel } = calculateGlobalMaturity(dimensionScores, activeDimensions);

  // 3. Calcul du diagnostic flotte conditionnel
  const fleet = calculateFleetDiagnostic(answers, profile);

  // 4. Détection des risques
  const risks = detectRisks(answers, profile);

  // Décompte par sévérité
  const riskCounts = {
    critical: risks.filter((r) => r.level === 'critical').length,
    high: risks.filter((r) => r.level === 'high').length,
    medium: risks.filter((r) => r.level === 'medium').length,
    low: risks.filter((r) => r.level === 'low').length,
    total: risks.length,
  };

  // 5. Génération et tri des recommandations
  const allRecommendations = generateRecommendations(profile, answers, dimensionScores, risks);
  const priorities = getTopPriorities(allRecommendations);
  const quickWins = getQuickWins(allRecommendations);
  const roadmap = buildRoadmap(allRecommendations);

  // 6. Détection des points forts
  const strengths = detectStrengths(dimensionScores, answers);

  // 7. Solutions DevEvoke pertinentes
  const relevantSolutions = detectRelevantSolutions(profile, dimensionScores, fleet?.score, risks);

  // 8. Synthèse personnalisée
  const customSynthesis = generateCustomSynthesis(profile, globalScore, riskCounts);

  const completedAt = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return {
    organization: profile,
    completedAt,
    globalScore,
    maturityLevel,
    dimensionScores,
    activeDimensions,
    strengths,
    risks,
    riskCounts,
    priorities,
    quickWins,
    roadmap,
    fleet,
    relevantSolutions,
    customSynthesis,
  };
}
