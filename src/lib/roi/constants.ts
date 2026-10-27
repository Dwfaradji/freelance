import { FleetInputs, OrganizationType, Scenario, ScenarioAssumptions } from './types';

/**
 * Hypothèses de simulation pour les 3 scénarios.
 * Ces coefficients sont des hypothèses de modélisation indicatives et configurables.
 */
export const SCENARIOS: Record<Scenario, ScenarioAssumptions> = {
  prudent: {
    label: 'Prudent',
    description: 'Hypothèses conservatrices adaptées à une phase d’adoption progressive.',
    adminTimeReduction: 0.25,
    fuelSavingRate: 0.01,
    maintenanceSavingRate: 0.03,
    incidentReductionRate: 0.25,
    immobilisationReductionRate: 0.20,
  },
  realiste: {
    label: 'Réaliste',
    description: 'Scénario moyen constaté pour une flotte organisée avec processus standard.',
    adminTimeReduction: 0.40,
    fuelSavingRate: 0.02,
    maintenanceSavingRate: 0.06,
    incidentReductionRate: 0.50,
    immobilisationReductionRate: 0.40,
  },
  optimise: {
    label: 'Optimisé',
    description: 'Plein déploiement de la solution avec engagement actif des conducteurs.',
    adminTimeReduction: 0.55,
    fuelSavingRate: 0.04,
    maintenanceSavingRate: 0.10,
    incidentReductionRate: 0.70,
    immobilisationReductionRate: 0.60,
  },
};

/**
 * Coefficient appliqué uniquement sur le gain de temps administratif
 * selon l'organisation actuelle du gestionnaire.
 */
export const ORGANIZATION_FACTOR: Record<OrganizationType, number> = {
  paper: 1.15,
  excel: 1.10,
  multipleTools: 1.05,
  software: 0.75,
  unknown: 1.0,
};

/** Plafond strict sur la réduction du temps administratif : jamais plus de 70% */
export const MAX_ADMIN_REDUCTION = 0.70;

/** Semaines travaillées par an pour la gestion de flotte */
export const WEEKS_PER_YEAR = 52;

/**
 * Labels et descriptions des types d'organisation actuelle
 */
export const ORGANIZATION_OPTIONS: Array<{
  value: OrganizationType;
  label: string;
  badge: string;
  hint: string;
}> = [
  {
    value: 'paper',
    label: 'Papier / Carnets de bord',
    badge: '+15% gain admin',
    hint: 'Saisies manuelles multiples, reçus volants et relances physiques.',
  },
  {
    value: 'excel',
    label: 'Excel / Tableur',
    badge: '+10% gain admin',
    hint: 'Tableaux partagés, formules manuelles et mises à jour périodiques.',
  },
  {
    value: 'multipleTools',
    label: 'Plusieurs outils dispersés',
    badge: '+5% gain admin',
    hint: 'Emails, calendriers, dossiers partagés et notes éparses.',
  },
  {
    value: 'software',
    label: 'Autre logiciel de gestion',
    badge: 'Base standard',
    hint: 'Système existant à rationaliser ou moderniser.',
  },
  {
    value: 'unknown',
    label: 'Je ne sais pas exactement',
    badge: 'Neutre',
    hint: 'Hypothèse neutre sans pondération organisationnelle.',
  },
];

/**
 * Valeurs par défaut du simulateur
 */
export const DEFAULT_CONSUMPTION = 7.0; // 7 L / 100 km
export const DEFAULT_FUEL_PRICE = 1.80; // 1,80 € / L
export const DEFAULT_HOURLY_COST = 28; // 28 € / h chargé
export const DEFAULT_MAINTENANCE_PER_VEHICLE = 450; // 450 € / véhicule / an par défaut

export const DEFAULT_FLEET_INPUTS: FleetInputs = {
  vehicles: 8,
  drivers: 20,
  weeklyAdminHours: 6,
  hourlyCost: DEFAULT_HOURLY_COST,
  organizationType: 'excel',

  annualKmPerVehicle: 15000,
  fuelCalculationMode: 'estimated',
  annualFuelBudget: undefined,
  averageConsumption: DEFAULT_CONSUMPTION,
  fuelPrice: DEFAULT_FUEL_PRICE,

  annualMaintenanceBudget: 8 * DEFAULT_MAINTENANCE_PER_VEHICLE, // 3 600 €
  isMaintenanceCustom: false,

  annualIncidentCost: 600,
  annualAvoidableImmobilisations: 3,
  averageImmobilisationCost: 150,

  annualFloticarCost: undefined, // Aucun tarif fictif par défaut
};

/** Clé de stockage session */
export const STORAGE_KEY_ROI_SIMULATION = 'floticar_roi_simulation_v1';

/**
 * Tarification standard Floticar (de référence pour le calcul du ROI) :
 * 15 € HT / véhicule / mois.
 * Aucun coût caché, sans engagement.
 */
export const FLOTICAR_MONTHLY_PRICE_PER_VEHICLE = 15;

export function calculateFloticarAnnualCost(vehicleCount: number): number {
  const safeVehicles = Math.max(1, vehicleCount);
  return safeVehicles * FLOTICAR_MONTHLY_PRICE_PER_VEHICLE * 12;
}

/**
 * Plages kilométriques rapides avec valeur médiane représentative
 */
export const MILEAGE_PRESETS = [
  { id: 'under_10k', label: '< 10 000 km', value: 8000, hint: 'Petits trajets locaux' },
  { id: '10k_25k', label: '10 000 – 25 000 km', value: 17500, hint: 'Tournées départementales' },
  { id: '25k_50k', label: '25 000 – 50 000 km', value: 37500, hint: 'Flotte multi-établissements' },
  { id: '50k_100k', label: '50 000 – 100 000 km', value: 75000, hint: 'Usage intensif / tournées' },
  { id: '100k_250k', label: '100 000 – 250 000 km', value: 150000, hint: 'Grande flotte active' },
  { id: '250k_plus', label: '250 000 km +', value: 300000, hint: 'Parc inter-régional' },
];

/**
 * Plages budgétaires d'entretien annuel avec valeur médiane
 */
export const MAINTENANCE_PRESETS = [
  { id: 'under_2k', label: '< 2 000 €', value: 1500, hint: 'Flotte récente ou restreinte' },
  { id: '2k_5k', label: '2 000 – 5 000 €', value: 3500, hint: 'Révisions standards' },
  { id: '5k_10k', label: '5 000 – 10 000 €', value: 7500, hint: 'Entretien récurrent' },
  { id: '10k_25k', label: '10 000 – 25 000 €', value: 17500, hint: 'Parc mixte avec réparations' },
  { id: '25k_plus', label: '25 000 € +', value: 35000, hint: 'Flotte conséquente' },
];

/**
 * Paliers de temps administratif hebdomadaire
 */
export const ADMIN_HOURS_PRESETS = [
  { id: 'under_1h', label: "Moins d'1 heure", hours: 0.75, hint: 'Suivi rapide ou ponctuel' },
  { id: '1_2h', label: '1 à 2 heures', hours: 1.5, hint: 'Quelques relevés hebdomadaires' },
  { id: '2_4h', label: '2 à 4 heures', hours: 3.0, hint: 'Carnets papier et saisies régulières' },
  { id: '4_8h', label: '4 à 8 heures', hours: 6.0, hint: 'Relances, amendes, plannings et factures' },
  { id: '8h_plus', label: 'Plus de 8 heures', hours: 10.0, hint: 'Gestion administrative lourde et éclatée' },
];

/**
 * 12 difficultés fréquentes rencontrées sur le terrain
 */
export const FLEET_PROBLEMS: Array<{
  id: import('./types').FleetProblemId;
  label: string;
  description: string;
}> = [
  {
    id: 'maintenance',
    label: 'Suivi des entretiens & révisions',
    description: 'Oublis de vidanges, pièces d’usure et révisions périodiques.',
  },
  {
    id: 'technical_inspection',
    label: 'Contrôles techniques dépassés',
    description: 'Dates butoirs oubliées et risques d’amendes ou d’immobilisation.',
  },
  {
    id: 'mileage',
    label: 'Relevé kilométrique imprécis',
    description: 'Compteurs non relevés régulièrement ou illisibles dans les carnets.',
  },
  {
    id: 'fuel',
    label: 'Dépenses & cartes carburant',
    description: 'Tickets égarés, décalages de consommation et gestion des cartes.',
  },
  {
    id: 'receipts',
    label: 'Justificatifs & tickets perdus',
    description: 'Factures d’autoroute ou de lavage éparpillées entre les services.',
  },
  {
    id: 'vehicle_anomalies',
    label: 'Anomalies & pannes non signalées',
    description: 'Voyants allumés ou chocs découverts trop tard par le conducteur suivant.',
  },
  {
    id: 'drivers',
    label: 'Suivi des conducteurs & permis',
    description: 'Validité des permis, déclarations de sinistres et responsabilité.',
  },
  {
    id: 'vehicle_sharing',
    label: 'Partage & réservation des véhicules',
    description: 'Conflits de réservation, clés introuvables et planning chaotique.',
  },
  {
    id: 'excel_sheets',
    label: 'Tableaux Excel complexes à maintenir',
    description: 'Fichiers multiples déconnectés, erreurs de formule et doubles saisies.',
  },
  {
    id: 'lack_of_visibility',
    label: 'Manque de visibilité globale',
    description: 'Difficulté à consolider le coût réel par véhicule ou service.',
  },
  {
    id: 'admin_time',
    label: 'Temps administratif excessif',
    description: 'Heures gaspillées chaque semaine à relancer et saisir à la main.',
  },
  {
    id: 'none',
    label: 'Aucun problème majeur identifié',
    description: 'Flotte déjà sous contrôle, recherche d’optimisation complémentaire.',
  },
];

