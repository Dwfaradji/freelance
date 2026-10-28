import { DIAGNOSTIC_QUESTIONS } from './questions';
import { DiagnosticRisk, OrganizationProfile, RiskLevel } from './types';

function getOptionScore(questionId: string, answerId?: string): number | undefined {
  if (!answerId) return undefined;
  const question = DIAGNOSTIC_QUESTIONS.find((q) => q.id === questionId);
  const option = question?.options.find((opt) => opt.id === answerId);
  return option?.score;
}

/**
 * Moteur indépendant de détection des risques et points de vigilance.
 * Ne dépend pas du score global : une organisation avec un score élevé peut
 * tout de même présenter un risque critique de cybersécurité.
 */
export function detectRisks(
  answers: Record<string, string>,
  profile: OrganizationProfile
): DiagnosticRisk[] {
  const risks: DiagnosticRisk[] = [];

  const q2Score = getOptionScore('q2', answers.q2);
  const q3Score = getOptionScore('q3', answers.q3);
  const q7Score = getOptionScore('q7', answers.q7);
  const q9Score = getOptionScore('q9', answers.q9);
  const q10Score = getOptionScore('q10', answers.q10);
  const q12Score = getOptionScore('q12', answers.q12);
  const q13Score = getOptionScore('q13', answers.q13);
  const q14Score = getOptionScore('q14', answers.q14);
  const q15Score = getOptionScore('q15', answers.q15);
  const q16Score = getOptionScore('q16', answers.q16);
  const q17Score = getOptionScore('q17', answers.q17);
  const q18Score = getOptionScore('q18', answers.q18);
  const q19Score = getOptionScore('q19', answers.q19);

  // ----------------------------------------------------
  // 1. RISQUES CRITIQUES (SÉCURITÉ & DONNÉES)
  // ----------------------------------------------------

  // Règle 1 : Comptes ou mots de passe partagés
  if (q12Score === 0) {
    risks.push({
      id: 'shared_accounts',
      level: 'critical',
      dimension: 'security',
      title: 'Comptes ou mots de passe partagés',
      description:
        'L’utilisation de comptes collectifs empêche toute traçabilité des accès et expose les données à des consultations non autorisées.',
      recommendation:
        'Mettre en place sans délai des comptes individuels nominatifs et organiser les droits selon les fonctions réelles.',
      triggeredBy: ['q12'],
    });
  }

  // Règle 2 : Aucune sauvegarde clairement identifiée
  if (q13Score === 0) {
    risks.push({
      id: 'no_backup',
      level: 'critical',
      dimension: 'security',
      title: 'Absence de sauvegarde identifiée',
      description:
        'Sans sauvegarde supervisée, un rançongiciel ou une panne matérielle peut entraîner la perte irréversible de l’historique des dossiers et documents administratifs.',
      recommendation:
        'Mettre en œuvre immédiatement une procédure de sauvegarde automatisée, externalisée et tester la restauration des données clés.',
      triggeredBy: ['q13'],
    });
  }

  // Règle combinée : Gouvernance des accès défaillante (Q12 faible + Q15 faible)
  if (q12Score !== undefined && q15Score !== undefined && q12Score <= 1 && q15Score <= 1) {
    // Si pas déjà couvert par shared_accounts
    if (!risks.some((r) => r.id === 'shared_accounts')) {
      risks.push({
        id: 'access_governance',
        level: 'critical',
        dimension: 'security',
        title: 'Gouvernance des accès et départs vulnérable',
        description:
          'La combinaison d’accès peu individualisés et d’une absence de procédure formalisée lors des départs de professionnels crée une faille majeure de confidentialité.',
        recommendation:
          'Formaliser une check-list systématique de clôture de comptes lors de chaque départ ou changement d’affectation.',
        triggeredBy: ['q12', 'q15'],
      });
    }
  }

  // ----------------------------------------------------
  // 2. RISQUES ÉLEVÉS (OPÉRATIONNELS & SÉCURITÉ)
  // ----------------------------------------------------

  // Règle 3 : Sauvegardes manuelles occasionnelles
  if (q13Score === 1) {
    risks.push({
      id: 'fragile_backup',
      level: 'high',
      dimension: 'security',
      title: 'Sauvegardes manuelles et restauration non testée',
      description:
        'Les sauvegardes manuelles sur support externe présentent un risque élevé d’oubli, de corruption ou de dégradation physique.',
      recommendation:
        'Automatiser le calendrier des sauvegardes vers un hébergement souverain sécurisé avec monitoring des alertes.',
      triggeredBy: ['q13'],
    });
  }

  // Règle 4 : Départs salariés sans procédure d'accès
  if (q15Score === 0 && !risks.some((r) => r.id === 'access_governance')) {
    risks.push({
      id: 'uncontrolled_offboarding',
      level: 'high',
      dimension: 'security',
      title: 'Absence de révocation systématique des accès lors des départs',
      description:
        'Des anciens salariés ou stagiaires conservent potentiellement des accès actifs aux dossiers et espaces partagés de l’organisation.',
      recommendation:
        'Mettre en place un protocole d’offboarding RH/IT avec révocation horodatée des accès et récupération des équipements.',
      triggeredBy: ['q15'],
    });
  }

  // Règle 5 : Multiples ressaisies manuelles chronophages
  if (q2Score !== undefined && q2Score <= 1) {
    risks.push({
      id: 'duplicate_entry',
      level: 'high',
      dimension: 'organization',
      title: 'Ressaisies manuelles multiples et chronophages',
      description:
        'La ressaisie des mêmes données entre plusieurs supports engendre un risque élevé d’erreurs et consomme un temps précieux aux équipes de terrain.',
      recommendation:
        'Connecter les outils ou mettre en place une saisie unique à la source avec synchronisation automatique.',
      triggeredBy: ['q2'],
    });
  }

  // Règle 6 : Silos de données et fragmentation
  if (q9Score !== undefined && q9Score <= 1) {
    risks.push({
      id: 'data_silos',
      level: 'high',
      dimension: 'data',
      title: 'Fragmentation de l’information en silos étanches',
      description:
        'Les équipes travaillent sur des bases disparates, provoquant des décalages d’informations entre services administratifs et éducatifs.',
      recommendation:
        'Centraliser les référentiels clés dans une base partagée accessible selon les habilitations.',
      triggeredBy: ['q9'],
    });
  }

  // Règle combinée 7 : Système d'information morcelé (Q9 <= 1 + Q10 <= 1 + Q16 <= 1)
  if (
    q9Score !== undefined &&
    q10Score !== undefined &&
    q16Score !== undefined &&
    q9Score <= 1 &&
    q10Score <= 1 &&
    q16Score <= 1
  ) {
    risks.push({
      id: 'fragmented_information_system',
      level: 'high',
      dimension: 'data',
      title: 'Système d’information morcelé sans passerelles logicielles',
      description:
        'L’absence d’échanges automatiques et la dépendance aux tableurs compliquent le pilotage et alourdissent la charge mentale des cadres.',
      recommendation:
        'Mettre en place un plan de convergence logicielle avec des connecteurs API ou une interface métier unifiée.',
      triggeredBy: ['q9', 'q10', 'q16'],
    });
  }

  // Règle 8 : Mobilité terrain déconnectée
  if (
    (profile.mobility === 'regularly' || profile.mobility === 'daily') &&
    q7Score !== undefined &&
    q7Score <= 1
  ) {
    risks.push({
      id: 'mobility_disconnect',
      level: 'high',
      dimension: 'mobility',
      title: 'Saisie de terrain différée sur papier ou équipement personnel',
      description:
        'Pour des équipes régulièrement en mobilité, l’absence d’outil nomade adapté retarde les transmissions et expose les fiches papier à la perte ou à l’indiscrétion.',
      recommendation:
        'Déployer une application mobile professionnelle ergonomique utilisable hors-ligne pour les transmissions rapides.',
      triggeredBy: ['q7'],
    });
  }

  // Règle 9 : Risque de conformité sur la flotte de véhicules
  if (profile.fleet !== 'none' && q19Score !== undefined && q19Score <= 1) {
    risks.push({
      id: 'fleet_compliance_risk',
      level: 'high',
      dimension: 'fleet',
      title: 'Suivi manuel des entretiens et contrôles techniques des véhicules',
      description:
        'Le suivi papier ou mémoire des véhicules expose l’association à des dépassements de contrôles techniques, engageant la responsabilité civile et pénale de l’employeur.',
      recommendation:
        'Automatiser le calendrier des révisions et le contrôle périodique des permis avec alertes prédictives.',
      triggeredBy: ['q19'],
    });
  }

  // ----------------------------------------------------
  // 3. RISQUES MODÉRÉS (PERFORMANCES & ORGANISATION)
  // ----------------------------------------------------

  // Règle 10 : Gestion de flotte sur cahier ou Excel
  if (profile.fleet !== 'none' && q18Score !== undefined && q18Score <= 1) {
    risks.push({
      id: 'fleet_paper_gap',
      level: 'medium',
      dimension: 'fleet',
      title: 'Gestion de flotte artisanale sur cahier de bord ou tableur',
      description:
        'Absence de visibilité en temps réel sur la disponibilité des véhicules et surcoûts d’exploitation évitables.',
      recommendation:
        'Moderniser le carnet de bord grâce à une solution numérique simple d’accès pour les conducteurs.',
      triggeredBy: ['q18'],
    });
  }

  // Règle 11 : Procédures non documentées
  if (q3Score !== undefined && q3Score <= 1) {
    risks.push({
      id: 'undocumented_processes',
      level: 'medium',
      dimension: 'organization',
      title: 'Procédures numériques non formalisées',
      description:
        'Forte vulnérabilité aux départs et aux absences des collaborateurs clés détenant seuls la connaissance des outils.',
      recommendation:
        'Rédiger des guides pratiques synthétiques pour les principaux processus métiers.',
      triggeredBy: ['q3'],
    });
  }

  // Règle 12 : Charte et politique de sécurité absentes
  if (q14Score !== undefined && q14Score <= 1) {
    risks.push({
      id: 'no_formal_security_policy',
      level: 'medium',
      dimension: 'security',
      title: 'Sensibilisation et politique de sécurité informelles',
      description:
        'Les équipes méconnaissent les bons réflexes (phishing, gestion des pièces jointes, verrouillage des sessions).',
      recommendation:
        'Diffuser une charte informatique pédagogique et organiser des rappels réguliers lors des réunions d’équipe.',
      triggeredBy: ['q14'],
    });
  }

  // Règle 13 : Délais de consolidation décisionnels trop longs
  if (q17Score !== undefined && q17Score <= 1) {
    risks.push({
      id: 'slow_decision_making',
      level: 'medium',
      dimension: 'management',
      title: 'Temps excessif de consolidation des données de pilotage',
      description:
        'La direction générale perd plusieurs jours pour agréger les bilans annuels ou les états financiers et RH.',
      recommendation:
        'Structurer des tableaux de bord consolidés alimentés automatiquement par les applications métiers.',
      triggeredBy: ['q17'],
    });
  }

  // Trier par criticité décroissante : critical -> high -> medium -> low
  const levelWeights: Record<RiskLevel, number> = {
    critical: 4,
    high: 3,
    medium: 2,
    low: 1,
  };

  return risks.sort((a, b) => levelWeights[b.level] - levelWeights[a.level]);
}
