import {
  DEFAULT_CONSUMPTION,
  DEFAULT_FUEL_PRICE,
  FLOTICAR_MONTHLY_PRICE_PER_VEHICLE,
  MAX_ADMIN_REDUCTION,
  ORGANIZATION_FACTOR,
  SCENARIOS,
  WEEKS_PER_YEAR,
  calculateFloticarAnnualCost,
} from './constants';
import {
  AllScenariosResult,
  FleetInputs,
  FleetProblemId,
  FullFleetSimulationResult,
  PriorityLevier,
  RoiBreakdown,
  RoiResult,
  Scenario,
  SimulationAssumption,
  SimulationConfidence,
} from './types';

/**
 * Nettoie et valide un nombre pour éviter tout NaN, Infinity ou valeur négative.
 */
export function sanitizeNumber(value: unknown, fallback = 0, min = 0, max = Infinity): number {
  const num = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(num) || Number.isNaN(num)) {
    return fallback;
  }
  return Math.min(Math.max(num, min), max);
}

/**
 * Calcule l'estimation du budget carburant à partir du kilométrage, de la consommation et du prix au litre.
 */
export function calculateEstimatedFuelBudget(
  vehicles: number,
  annualKmPerVehicle: number,
  averageConsumption: number,
  fuelPrice: number
): number {
  const safeVehicles = sanitizeNumber(vehicles, 1, 1);
  const safeKm = sanitizeNumber(annualKmPerVehicle, 0, 0);
  const safeCons = sanitizeNumber(averageConsumption, DEFAULT_CONSUMPTION, 0);
  const safePrice = sanitizeNumber(fuelPrice, DEFAULT_FUEL_PRICE, 0);

  return (safeVehicles * safeKm * safeCons / 100) * safePrice;
}

/**
 * Moteur pur de calcul du ROI Floticar pour un scénario donné.
 *
 * Fonction pure :
 * - Aucun effet de bord
 * - Aucune dépendance à React
 * - Aucune requête réseau
 * - Totalement testable et déterministe
 */
export function calculateFleetROI(
  inputs: FleetInputs,
  scenario: Scenario = 'realiste',
  floticarAnnualCostOverride?: number
): RoiResult {
  // 1. Sanitisation stricte des entrées
  const vehicles = Math.max(1, Math.floor(sanitizeNumber(inputs.vehicles, 1, 1)));
  const drivers = Math.max(1, Math.floor(sanitizeNumber(inputs.drivers, 1, 1)));
  const weeklyAdminHours = sanitizeNumber(inputs.weeklyAdminHours, 0, 0, 168);
  const hourlyCost = sanitizeNumber(inputs.hourlyCost, 0, 0);
  const annualKmPerVehicle = sanitizeNumber(inputs.annualKmPerVehicle, 0, 0);
  const averageConsumption = sanitizeNumber(inputs.averageConsumption, DEFAULT_CONSUMPTION, 0);
  const fuelPrice = sanitizeNumber(inputs.fuelPrice, DEFAULT_FUEL_PRICE, 0);

  const annualMaintenanceBudget = sanitizeNumber(inputs.annualMaintenanceBudget, 0, 0);
  const annualIncidentCost = sanitizeNumber(inputs.annualIncidentCost, 0, 0);
  const annualAvoidableImmobilisations = sanitizeNumber(inputs.annualAvoidableImmobilisations, 0, 0);
  const averageImmobilisationCost = sanitizeNumber(inputs.averageImmobilisationCost, 0, 0);

  // 2. Récupération des hypothèses du scénario
  const assumptions = SCENARIOS[scenario] ?? SCENARIOS.realiste;
  const orgFactor = ORGANIZATION_FACTOR[inputs.organizationType] ?? 1.0;

  // 3. Calcul du temps administratif économisé
  // Plafonnement strict à MAX_ADMIN_REDUCTION (70%)
  const effectiveAdminReductionRate = Math.min(
    assumptions.adminTimeReduction * orgFactor,
    MAX_ADMIN_REDUCTION
  );

  const initialAdminHours = weeklyAdminHours * WEEKS_PER_YEAR;
  const savedAdminHours = initialAdminHours * effectiveAdminReductionRate;
  const adminSaving = savedAdminHours * hourlyCost;

  // 4. Calcul du carburant
  let calculatedFuelBudget = 0;
  if (inputs.fuelCalculationMode === 'known' && inputs.annualFuelBudget !== undefined && inputs.annualFuelBudget >= 0) {
    calculatedFuelBudget = sanitizeNumber(inputs.annualFuelBudget, 0, 0);
  } else {
    calculatedFuelBudget = calculateEstimatedFuelBudget(
      vehicles,
      annualKmPerVehicle,
      averageConsumption,
      fuelPrice
    );
  }
  const fuelSaving = calculatedFuelBudget * assumptions.fuelSavingRate;

  // 5. Calcul de l'entretien
  const maintenanceSaving = annualMaintenanceBudget * assumptions.maintenanceSavingRate;

  // 6. Calcul des incidents administratifs et pénalités évités
  const incidentSaving = annualIncidentCost * assumptions.incidentReductionRate;

  // 7. Calcul des immobilisations évitables
  const totalImmobilisationCost = annualAvoidableImmobilisations * averageImmobilisationCost;
  const immobilisationSaving = totalImmobilisationCost * assumptions.immobilisationReductionRate;

  // 8. Gain brut total
  const grossAnnualSaving =
    adminSaving + fuelSaving + maintenanceSaving + incidentSaving + immobilisationSaving;
  const monthlySaving = grossAnnualSaving / 12;

  const savingPerVehicle = vehicles > 0 ? grossAnnualSaving / vehicles : 0;
  const savingPerVehicleMonth = savingPerVehicle / 12;

  // 9. Coût Floticar et indicateurs ROI Net (si disponible)
  const candidateCost =
    floticarAnnualCostOverride !== undefined
      ? floticarAnnualCostOverride
      : inputs.annualFloticarCost;

  const floticarCost =
    typeof candidateCost === 'number' && candidateCost > 0
      ? sanitizeNumber(candidateCost, 0, 0)
      : undefined;

  let netAnnualSaving: number | undefined;
  let roi: number | undefined;
  let paybackMonths: number | undefined;

  if (floticarCost !== undefined && floticarCost > 0) {
    netAnnualSaving = grossAnnualSaving - floticarCost;
    roi = (netAnnualSaving / floticarCost) * 100;

    if (grossAnnualSaving > 0) {
      paybackMonths = (floticarCost / grossAnnualSaving) * 12;
    } else {
      paybackMonths = Infinity;
    }
  }

  const breakdown: RoiBreakdown = {
    initialAdminHours,
    savedAdminHours,
    effectiveAdminReductionRate,
    adminSaving,
    fuelSaving,
    maintenanceSaving,
    incidentSaving,
    immobilisationSaving,
    calculatedFuelBudget,
    totalImmobilisationCost,
  };

  return {
    scenario,
    breakdown,
    grossAnnualSaving,
    monthlySaving,
    savingPerVehicle,
    savingPerVehicleMonth,
    floticarAnnualCost: floticarCost,
    netAnnualSaving,
    roi,
    paybackMonths,
  };
}

/**
 * Calcule simultanément les 3 scénarios (Prudent, Réaliste, Optimisé)
 * et génère la fourchette d'estimation.
 */
export function calculateAllScenarios(
  inputs: FleetInputs,
  floticarAnnualCostOverride?: number
): AllScenariosResult {
  const prudent = calculateFleetROI(inputs, 'prudent', floticarAnnualCostOverride);
  const realiste = calculateFleetROI(inputs, 'realiste', floticarAnnualCostOverride);
  const optimise = calculateFleetROI(inputs, 'optimise', floticarAnnualCostOverride);

  return {
    prudent,
    realiste,
    optimise,
    minGrossSaving: prudent.grossAnnualSaving,
    maxGrossSaving: optimise.grossAnnualSaving,
  };
}

/**
 * Formate un montant en devise monétaire arrondie pour souligner le caractère estimatif (~5 940 €)
 */
export function formatEstimatedCurrency(
  value: number | undefined,
  options: {
    showApprox?: boolean;
    rounding?: 'auto' | 'ten' | 'hundred' | 'none';
    suffix?: string;
  } = {}
): string {
  if (value === undefined || !Number.isFinite(value)) {
    return '0 €';
  }

  const { showApprox = true, rounding = 'auto', suffix = '' } = options;

  let rounded = value;
  if (rounding === 'ten') {
    rounded = Math.round(value / 10) * 10;
  } else if (rounding === 'hundred') {
    rounded = Math.round(value / 100) * 100;
  } else if (rounding === 'auto') {
    // Si la valeur est > 1000 €, on arrondit à la dizaine la plus proche pour éviter la fausse précision
    if (Math.abs(value) >= 1000) {
      rounded = Math.round(value / 10) * 10;
    } else {
      rounded = Math.round(value);
    }
  }

  const formatted = Math.round(rounded).toLocaleString('fr-FR');
  const prefix = showApprox ? '~' : '';
  const full = `${prefix}${formatted} €${suffix ? ` ${suffix}` : ''}`;
  return full;
}

/**
 * Formate un nombre d'heures estimées (~125 h / an)
 */
export function formatEstimatedHours(hours: number | undefined): string {
  if (hours === undefined || !Number.isFinite(hours) || hours <= 0) {
    return '0 h';
  }
  const rounded = Math.round(hours);
  return `~${rounded.toLocaleString('fr-FR')} h`;
}

/**
 * Formate le délai d'amortissement / retour sur investissement
 */
export function formatPayback(paybackMonths?: number): string {
  if (paybackMonths === undefined || !Number.isFinite(paybackMonths) || paybackMonths <= 0) {
    return 'Délai d’amortissement non disponible';
  }
  if (paybackMonths > 12) {
    return 'Retour sur investissement supérieur à 12 mois';
  }
  const rounded = Math.max(1, Math.round(paybackMonths));
  return `Rentabilisé en ~${rounded} mois`;
}

/**
 * Construit le rapport complet de simulation pour la modal interactive Floticar.
 *
 * Fonction pure et déterministe :
 * - Calcule les coûts de la gestion actuelle
 * - Compare les 3 scénarios (actuel, optimisé, automatisé)
 * - Identifie le niveau de confiance selon les valeurs réelles vs estimées
 * - Génère les priorités d'action selon les problèmes rencontrés
 * - Rédige une synthèse sur-mesure et liste toutes les hypothèses de calcul
 */
export function buildFullFleetSimulation(
  inputs: FleetInputs,
  problems: FleetProblemId[] = []
): FullFleetSimulationResult {
  // 1. Détermination du coût logiciel de référence
  const floticarCost =
    inputs.annualFloticarCost !== undefined && inputs.annualFloticarCost > 0
      ? inputs.annualFloticarCost
      : calculateFloticarAnnualCost(inputs.vehicles);

  // 2. Calcul des 3 scénarios
  const allScenarios = calculateAllScenarios(inputs, floticarCost);
  const realiste = allScenarios.realiste;
  const optimise = allScenarios.optimise;

  // 3. Coût annuel actuel estimé
  const adminCost = inputs.weeklyAdminHours * WEEKS_PER_YEAR * inputs.hourlyCost;
  const fuelCost = realiste.breakdown.calculatedFuelBudget;
  const maintenanceCost = inputs.annualMaintenanceBudget;
  const incidentCost = inputs.annualIncidentCost;
  const immobilisationCost = inputs.annualAvoidableImmobilisations * inputs.averageImmobilisationCost;
  const totalCurrentCost = adminCost + fuelCost + maintenanceCost + incidentCost + immobilisationCost;

  // 4. Comparaison des scénarios
  const scenarios = {
    current: {
      id: 'current' as const,
      title: 'Situation actuelle',
      subtitle: 'Coût global annuel estimé avec votre organisation actuelle',
      cost: Math.round(totalCurrentCost),
      saving: 0,
    },
    optimized: {
      id: 'optimized' as const,
      title: 'Gestion optimisée',
      subtitle: 'Scénario moyen d’adoption avec processus rationalisés',
      cost: Math.max(0, Math.round(totalCurrentCost - realiste.grossAnnualSaving)),
      saving: Math.round(realiste.grossAnnualSaving),
      isRecommended: true,
    },
    automated: {
      id: 'automated' as const,
      title: 'Gestion automatisée',
      subtitle: 'Plein potentiel d’automatisation (QR code, alertes, dématérialisation)',
      cost: Math.max(0, Math.round(totalCurrentCost - optimise.grossAnnualSaving)),
      saving: Math.round(optimise.grossAnnualSaving),
    },
  };

  // 5. Indicateurs de confiance
  const isFuelCustom = inputs.fuelCalculationMode === 'known' && (inputs.annualFuelBudget ?? 0) > 0;
  const isMaintenanceCustom = inputs.isMaintenanceCustom;
  let confidence: SimulationConfidence = 'indicative';
  let confidenceReason = 'Estimation indicative basée sur les moyennes du secteur.';

  if (isFuelCustom && isMaintenanceCustom) {
    confidence = 'high';
    confidenceReason = 'Estimation précise basée sur vos budgets réels de carburant et d’entretien.';
  } else if (isFuelCustom || isMaintenanceCustom) {
    confidence = 'medium';
    confidenceReason = 'Estimation semi-personnalisée complétée par nos étalons de référence.';
  }

  // 6. Top 3 priorités d'action
  const priorities: PriorityLevier[] = [];
  const probSet = new Set(problems);

  if (probSet.has('technical_inspection') || probSet.has('maintenance') || inputs.vehicles >= 10) {
    priorities.push({
      number: '01',
      title: 'Sécuriser les échéances de contrôles et révisions',
      impact: 'Élevé',
      description: 'Programmer des alertes automatiques 30 et 15 jours avant les échéances de CT et vidanges.',
      action: 'Mettre en place un calendrier d’alertes centralisé avec notifications directes aux responsables.',
      horizon: '30 jours',
    });
  } else {
    priorities.push({
      number: '01',
      title: 'Réduire le temps passé aux saisies administratives',
      impact: 'Élevé',
      description: 'Éliminer la retranscription manuelle des carnets de bord papier dans vos tableurs.',
      action: 'Adopter la saisie directe sur smartphone via QR code au tableau de bord.',
      horizon: '30 jours',
    });
  }

  if (probSet.has('mileage') || probSet.has('receipts') || probSet.has('excel_sheets') || inputs.weeklyAdminHours >= 3) {
    priorities.push({
      number: '02',
      title: 'Dématérialiser les carnets de bord & tickets carburant',
      impact: 'Élevé',
      description: 'Fiabiliser les relevés kilométriques à chaque départ et retour de tournée ou de mission.',
      action: 'Remplacer les carnets physiques dans la boîte à gants par un formulaire mobile instantané.',
      horizon: '3 mois',
    });
  } else {
    priorities.push({
      number: '02',
      title: 'Rationaliser les consommations de carburant',
      impact: 'Moyen',
      description: 'Identifier les dérives de consommation et consolider les dépenses par carte carburant.',
      action: 'Rapprocher automatiquement les kilomètres parcourus et les volumes de carburant enregistrés.',
      horizon: '3 mois',
    });
  }

  if (probSet.has('vehicle_sharing') || probSet.has('drivers') || probSet.has('vehicle_anomalies')) {
    priorities.push({
      number: '03',
      title: 'Fluidifier le partage de véhicules et les anomalies',
      impact: 'Moyen',
      description: 'Éviter les conflits de réservation et signaler immédiatement un voyant allumé ou un choc.',
      action: 'Mettre à disposition des conducteurs un planning de réservation partagé et un bouton de signalement rapide.',
      horizon: '6 mois',
    });
  } else {
    priorities.push({
      number: '03',
      title: 'Automatiser le reporting de pilotage de votre flotte',
      impact: 'Modéré',
      description: 'Disposer d’indicateurs consolidés en temps réel sans devoir agréger des fichiers multiples.',
      action: 'Générer automatiquement les synthèses d’activité et bilans d’usage pour la direction.',
      horizon: '6 mois',
    });
  }

  // 7. Synthèse personnalisée
  const orgNameMap: Record<string, string> = {
    paper: 'des carnets papier',
    excel: 'des feuilles Excel',
    multipleTools: 'plusieurs outils distincts',
    software: 'un progiciel existant',
    unknown: 'vos démarches actuelles',
  };
  const orgText = orgNameMap[inputs.organizationType] ?? 'vos démarches actuelles';
  const narrative = `Avec ${inputs.vehicles} véhicule${inputs.vehicles > 1 ? 's' : ''} géré${inputs.vehicles > 1 ? 's' : ''} via ${orgText} et environ ${Math.round(inputs.annualKmPerVehicle).toLocaleString('fr-FR')} km parcourus par véhicule chaque année, votre premier gisement d’optimisation réside dans la rationalisation du temps administratif (~${Math.round(realiste.breakdown.savedAdminHours)} h économisables) et la prévention des anomalies d’entretien.`;

  // 8. Hypothèses
  const assumptions: SimulationAssumption[] = [
    {
      id: 'admin_reduction',
      label: 'Réduction du temps administratif',
      value: `${Math.round(realiste.breakdown.effectiveAdminReductionRate * 100)} %`,
      description: 'Gain de temps issu de la suppression des doubles saisies et relances manuelles.',
      source: 'Moyenne constatée sur les flottes médico-sociales et associatives équipées',
    },
    {
      id: 'hourly_cost',
      label: 'Coût horaire chargé de gestion',
      value: `${inputs.hourlyCost} € / heure`,
      description: 'Estimation du salaire chargé moyen d’un agent administratif ou responsable de site.',
      source: 'Hypothèse standard de modélisation (ajustable)',
    },
    {
      id: 'fuel_saving',
      label: 'Optimisation du carburant',
      value: `${(SCENARIOS.realiste.fuelSavingRate * 100).toFixed(1)} %`,
      description: 'Économie obtenue par un meilleur suivi des tournées et contrôle des consommations.',
      source: 'Étude sectorielle gestion de flotte légère',
    },
    {
      id: 'maintenance_saving',
      label: 'Économie sur la maintenance',
      value: `${(SCENARIOS.realiste.maintenanceSavingRate * 100).toFixed(1)} %`,
      description: 'Réduction des pannes lourdes grâce au respect strict des révisions constructeurs.',
      source: 'Étude sectorielle gestion de flotte légère',
    },
    {
      id: 'floticar_pricing',
      label: 'Tarif de référence Floticar',
      value: `${FLOTICAR_MONTHLY_PRICE_PER_VEHICLE} € HT / véhicule / mois`,
      description: 'Tarification standard de référence servant à calculer le retour sur investissement.',
      source: 'Grille tarifaire standard Floticar',
    },
  ];

  const paybackMonths =
    realiste.grossAnnualSaving > 0 ? (floticarCost / realiste.grossAnnualSaving) * 12 : Infinity;
  const netGain = realiste.grossAnnualSaving - floticarCost;
  const roiPercent = floticarCost > 0 ? (netGain / floticarCost) * 100 : 0;

  return {
    inputs,
    selectedProblems: problems,
    currentCost: {
      total: Math.round(totalCurrentCost),
      admin: Math.round(adminCost),
      fuel: Math.round(fuelCost),
      maintenance: Math.round(maintenanceCost),
      incidents: Math.round(incidentCost),
      immobilisation: Math.round(immobilisationCost),
    },
    scenarios,
    annualGrossSaving: Math.round(realiste.grossAnnualSaving),
    monthlyGrossSaving: Math.round(realiste.monthlySaving),
    savingRange: {
      min: Math.round(allScenarios.minGrossSaving),
      max: Math.round(allScenarios.maxGrossSaving),
    },
    savingPerVehicle: Math.round(realiste.savingPerVehicle),
    breakdown: {
      admin: Math.round(realiste.breakdown.adminSaving),
      fuel: Math.round(realiste.breakdown.fuelSaving),
      maintenance: Math.round(realiste.breakdown.maintenanceSaving),
      incidentsAndLosses: Math.round(
        realiste.breakdown.incidentSaving + realiste.breakdown.immobilisationSaving
      ),
    },
    roi: {
      annualSoftwareCost: Math.round(floticarCost),
      annualNetGain: Math.round(netGain),
      roiPercent: Math.round(roiPercent),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      monthlySoftwareCost: Math.round(floticarCost / 12),
    },
    confidence,
    confidenceReason,
    priorities,
    personalizedNarrative: narrative,
    assumptions,
    isFuelEstimated: !isFuelCustom,
    isMaintenanceEstimated: !isMaintenanceCustom,
  };
}
