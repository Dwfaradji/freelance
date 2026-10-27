/**
 * Types TypeScript strictement typés pour le moteur de calcul du Simulateur de ROI Floticar
 */

export type Scenario = 'prudent' | 'realiste' | 'optimise';

export type OrganizationType =
  | 'paper'
  | 'excel'
  | 'multipleTools'
  | 'software'
  | 'unknown';

export interface ScenarioAssumptions {
  label: string;
  description: string;
  adminTimeReduction: number;
  fuelSavingRate: number;
  maintenanceSavingRate: number;
  incidentReductionRate: number;
  immobilisationReductionRate: number;
}

export interface FleetInputs {
  /** Nombre de véhicules dans la flotte (min 1, slider 2-100+) */
  vehicles: number;
  /** Nombre de conducteurs / utilisateurs (min 1, slider 1-200+) */
  drivers: number;

  /** Temps total consacré à la gestion de flotte par semaine (en heures) */
  weeklyAdminHours: number;
  /** Coût horaire chargé estimé de la personne en charge (en €/h) */
  hourlyCost: number;

  /** Organisation actuelle du suivi de flotte */
  organizationType: OrganizationType;

  // --- PARAMÈTRES AVANCÉS ---
  /** Kilométrage annuel moyen par véhicule (en km/an) */
  annualKmPerVehicle: number;

  /** Mode de calcul du carburant : soit budget déclaré, soit calculé */
  fuelCalculationMode: 'known' | 'estimated';
  /** Budget carburant annuel déclaré (en €) */
  annualFuelBudget?: number;
  /** Consommation moyenne estimée (en L/100 km) pour estimation automatique */
  averageConsumption: number;
  /** Prix du carburant estimé (en €/L) pour estimation automatique */
  fuelPrice: number;

  /** Budget annuel d'entretien et réparations (en €) */
  annualMaintenanceBudget: number;
  /** Si le budget entretien a été saisi manuellement ou généré par défaut */
  isMaintenanceCustom: boolean;

  /** Coût annuel estimé des oublis, retards, pénalités et incidents administratifs (en €) */
  annualIncidentCost: number;

  /** Nombre d'immobilisations évitables par an */
  annualAvoidableImmobilisations: number;
  /** Coût moyen d'une immobilisation (en €) */
  averageImmobilisationCost: number;

  /** Coût annuel d'abonnement Floticar si renseigné / configuré (en €) */
  annualFloticarCost?: number;
}

export interface RoiBreakdown {
  /** Heures administratives annuelles passées avant Floticar */
  initialAdminHours: number;
  /** Heures administratives économisées par an */
  savedAdminHours: number;
  /** Taux de réduction administratif effectif appliqué (après facteur d'organisation et cap) */
  effectiveAdminReductionRate: number;

  /** Économie valorisée sur le temps administratif (€/an) */
  adminSaving: number;
  /** Économie potentielle sur le carburant (€/an) */
  fuelSaving: number;
  /** Économie potentielle sur l'entretien (€/an) */
  maintenanceSaving: number;
  /** Économie potentielle sur les incidents/oubli administratifs (€/an) */
  incidentSaving: number;
  /** Économie potentielle sur les immobilisations évitables (€/an) */
  immobilisationSaving: number;

  /** Budget carburant annuel retenu pour le calcul (€/an) */
  calculatedFuelBudget: number;
  /** Coût annuel des immobilisations avant Floticar (€/an) */
  totalImmobilisationCost: number;
}

export interface RoiResult {
  /** Hypothèses du scénario retenu */
  scenario: Scenario;
  /** Détails poste par poste */
  breakdown: RoiBreakdown;

  /** Gain brut potentiel annuel (€/an) */
  grossAnnualSaving: number;
  /** Gain brut potentiel mensuel (€/mois) */
  monthlySaving: number;

  /** Économie brute moyenne par véhicule et par an (€/véhicule/an) */
  savingPerVehicle: number;
  /** Économie brute moyenne par véhicule et par mois (€/véhicule/mois) */
  savingPerVehicleMonth: number;

  // Données ROI Net (uniquement si le coût Floticar est disponible et > 0)
  floticarAnnualCost?: number;
  /** Gain net annuel = Gain brut - Coût Floticar annuel */
  netAnnualSaving?: number;
  /** ROI = (Gain net / Coût Floticar) * 100 */
  roi?: number;
  /** Délai d'amortissement en mois = (Coût Floticar / Gain brut) * 12 */
  paybackMonths?: number;
}

export interface AllScenariosResult {
  prudent: RoiResult;
  realiste: RoiResult;
  optimise: RoiResult;
  /** Fourchette min/max de gain brut annuel */
  minGrossSaving: number;
  maxGrossSaving: number;
}

// -------------------------------------------------------------
// NOUVEAUX TYPES POUR LE SIMULATEUR INTERACTIF FLOTICAR (MODAL)
// -------------------------------------------------------------

export type FleetProblemId =
  | 'maintenance'
  | 'technical_inspection'
  | 'mileage'
  | 'fuel'
  | 'receipts'
  | 'vehicle_anomalies'
  | 'drivers'
  | 'vehicle_sharing'
  | 'excel_sheets'
  | 'lack_of_visibility'
  | 'admin_time'
  | 'none';

export interface FleetProblemOption {
  id: FleetProblemId;
  label: string;
  description: string;
}

export type SimulationConfidence = 'high' | 'medium' | 'indicative';

export interface ScenarioComparison {
  id: 'current' | 'optimized' | 'automated';
  title: string;
  subtitle: string;
  cost: number;
  saving: number;
  isRecommended?: boolean;
}

export interface PriorityLevier {
  number: '01' | '02' | '03';
  title: string;
  impact: 'Élevé' | 'Moyen' | 'Modéré';
  description: string;
  action: string;
  horizon: '30 jours' | '3 mois' | '6 mois';
}

export interface SimulationAssumption {
  id: string;
  label: string;
  value: string;
  description: string;
  source: string;
}

export interface FullFleetSimulationResult {
  inputs: FleetInputs;
  selectedProblems: FleetProblemId[];

  /** Décomposition des coûts annuels de la gestion actuelle */
  currentCost: {
    total: number;
    admin: number;
    fuel: number;
    maintenance: number;
    incidents: number;
    immobilisation: number;
  };

  /** Comparaison des 3 scénarios */
  scenarios: {
    current: ScenarioComparison;
    optimized: ScenarioComparison;
    automated: ScenarioComparison;
  };

  /** Potentiel d'économies annuelles et mensuelles (scénario réaliste recommandé) */
  annualGrossSaving: number;
  monthlyGrossSaving: number;
  savingRange: {
    min: number;
    max: number;
  };
  savingPerVehicle: number;

  /** Décomposition des gains par grand poste */
  breakdown: {
    admin: number;
    fuel: number;
    maintenance: number;
    incidentsAndLosses: number;
  };

  /** Indicateurs ROI & Seuil de rentabilité (basés sur le tarif Floticar standard) */
  roi: {
    annualSoftwareCost: number;
    annualNetGain: number;
    roiPercent: number;
    paybackMonths: number;
    monthlySoftwareCost: number;
  };

  /** Indice de confiance de la simulation */
  confidence: SimulationConfidence;
  confidenceReason: string;

  /** Top 3 leviers prioritaires */
  priorities: PriorityLevier[];

  /** Synthèse textuelle personnalisée */
  personalizedNarrative: string;

  /** Hypothèses documentées */
  assumptions: SimulationAssumption[];

  /** Drapeaux de données estimées vs réelles */
  isFuelEstimated: boolean;
  isMaintenanceEstimated: boolean;
}

