import {
  Dimension,
  FleetSize,
  MaturityLevel,
  MaturityLevelKey,
  MobilityLevel,
  OrganizationSize,
  SiteCount,
  StructureType,
} from './types';

/**
 * Pondération officielle des dimensions pour le calcul du score global
 * Sécurité (0.23) et Données (0.18) sont priorisées. Total = 1.00
 */
export const DIMENSION_WEIGHTS: Record<Dimension, number> = {
  organization: 0.15,
  businessTools: 0.17,
  mobility: 0.12,
  data: 0.18,
  security: 0.23,
  management: 0.15,
};

/**
 * Libellés UI et métadonnées des dimensions
 */
export const DIMENSION_METADATA: Record<
  Dimension,
  { label: string; shortLabel: string; description: string; icon: string }
> = {
  organization: {
    label: 'Organisation & processus',
    shortLabel: 'Organisation',
    description: 'Gestion des flux administratifs, documentation et limitation des doubles saisies.',
    icon: 'Building2',
  },
  businessTools: {
    label: 'Outils métier',
    shortLabel: 'Outils métier',
    description: 'Adéquation du DUI et des applications logicielles aux pratiques réelles des équipes.',
    icon: 'Layers',
  },
  mobility: {
    label: 'Mobilité terrain',
    shortLabel: 'Mobilité',
    description: 'Facilité d’accès aux dossiers et saisie déportée lors des tournées et visites.',
    icon: 'Smartphone',
  },
  data: {
    label: 'Données & interopérabilité',
    shortLabel: 'Données',
    description: 'Circulation des informations entre logiciels, synchronisations et absence de silos.',
    icon: 'Database',
  },
  security: {
    label: 'Cybersécurité & protection des données',
    shortLabel: 'Sécurité',
    description: 'Gouvernance des comptes, politique de sauvegarde, gestion des départs et chartes.',
    icon: 'Shield',
  },
  management: {
    label: 'Pilotage & reporting',
    shortLabel: 'Pilotage',
    description: 'Capacité de la direction à consolider les indicateurs et décider sans délai excessif.',
    icon: 'BarChart3',
  },
};

/**
 * Les 5 niveaux de maturité numérique
 */
export const MATURITY_LEVELS: Record<MaturityLevelKey, MaturityLevel> = {
  initial: {
    key: 'initial',
    label: 'Initial',
    range: [0, 24],
    badge: 'Fondations à poser',
    color: 'from-amber-400 to-rose-500',
    description:
      'Les usages numériques restent principalement manuels ou dispersés. Plusieurs fondations prioritaires doivent être structurées pour fiabiliser le quotidien des équipes.',
  },
  structuration: {
    key: 'structuration',
    label: 'En structuration',
    range: [25, 44],
    badge: 'Structuration en cours',
    color: 'from-amber-400 to-amber-500',
    description:
      'Certains outils existent mais les processus restent fragmentés et fortement dépendants des pratiques individuelles. Une formalisation d’ensemble est nécessaire.',
  },
  transition: {
    key: 'transition',
    label: 'En transition',
    range: [45, 64],
    badge: 'Digitalisation engagée',
    color: 'from-blue-400 to-indigo-500',
    description:
      'La digitalisation est engagée, mais plusieurs silos, ressaisies ou processus manuels limitent encore l’efficacité et le confort de travail des professionnels.',
  },
  maitrise: {
    key: 'maitrise',
    label: 'Maîtrisé',
    range: [65, 84],
    badge: 'Socle robuste',
    color: 'from-emerald-400 to-teal-400',
    description:
      'Le socle numérique est structuré et fonctionnel. Les principaux leviers de progrès concernent désormais l’interopérabilité, l’automatisation fine et le pilotage consolidé.',
  },
  avance: {
    key: 'avance',
    label: 'Avancé',
    range: [85, 100],
    badge: 'Maturité avancée',
    color: 'from-emerald-300 to-cyan-300',
    description:
      'L’organisation dispose d’un environnement numérique mature et peut se concentrer sur l’optimisation continue, l’interopérabilité fluide et l’ergonomie terrain.',
  },
};

/**
 * Options pour l'étape Profil (non notée)
 */
export const STRUCTURE_OPTIONS: Array<{ value: StructureType; label: string; hint: string }> = [
  {
    value: 'association_gestionnaire',
    label: 'Association gestionnaire multi-établissements',
    hint: 'Siège, coordination centrale et pilotage multi-sites.',
  },
  {
    value: 'ime',
    label: 'IME (Institut Médico-Éducatif)',
    hint: 'Enfance et adolescence avec besoins éducatifs et thérapeutiques.',
  },
  {
    value: 'sessad',
    label: 'SESSAD / SSAD',
    hint: 'Interventions régulières en milieu ordinaire, école et domicile.',
  },
  {
    value: 'savs_samsah',
    label: 'SAVS / SAMSAH',
    hint: 'Accompagnement à l’autonomie et soins en logement et en ville.',
  },
  {
    value: 'esat_ea',
    label: 'ESAT / Entreprise Adaptée',
    hint: 'Activités d’ateliers, plannings de production et suivi médico-social.',
  },
  {
    value: 'ehpad',
    label: 'EHPAD / Résidence autonomie',
    hint: 'Continuité des soins 24h/24, résidents et transmissions quotidiennes.',
  },
  {
    value: 'mas_fam',
    label: 'MAS / FAM',
    hint: 'Accueil médicalisé, hébergement et dépendance importante.',
  },
  {
    value: 'foyer_habitat',
    label: 'Foyer d’hébergement / Habitat partagé',
    hint: 'Vie collective, plannings d’éducateurs et coordination de proximité.',
  },
  {
    value: 'aide_domicile',
    label: 'Service d’aide / accompagnement à domicile',
    hint: 'Tournées d’intervenants, planning dynamique et feuilles d’heures.',
  },
  {
    value: 'autre',
    label: 'Autre structure sociale ou médico-sociale',
    hint: 'Accueil de jour, coordination de parcours ou dispositif expérimental.',
  },
];

export const SIZE_OPTIONS: Array<{ value: OrganizationSize; label: string }> = [
  { value: '1-20', label: '1 à 20 professionnels' },
  { value: '21-50', label: '21 à 50 professionnels' },
  { value: '51-100', label: '51 à 100 professionnels' },
  { value: '101-250', label: '101 à 250 professionnels' },
  { value: '251-500', label: '251 à 500 professionnels' },
  { value: '500+', label: 'Plus de 500 professionnels' },
];

export const SITE_OPTIONS: Array<{ value: SiteCount; label: string }> = [
  { value: '1', label: '1 site unique' },
  { value: '2-5', label: '2 à 5 sites' },
  { value: '6-10', label: '6 à 10 sites' },
  { value: '11-30', label: '11 à 30 sites' },
  { value: '30+', label: 'Plus de 30 sites' },
];

export const MOBILITY_OPTIONS: Array<{ value: MobilityLevel; label: string; hint: string }> = [
  { value: 'rarely', label: 'Rarement', hint: 'Équipes principalement basées sur site fixe.' },
  {
    value: 'occasionally',
    label: 'Occasionnellement',
    hint: 'Déplacements ponctuels pour réunions ou bilans extérieurs.',
  },
  {
    value: 'regularly',
    label: 'Régulièrement',
    hint: 'Une partie des équipes intervient chaque semaine hors établissement.',
  },
  {
    value: 'daily',
    label: 'Quotidiennement',
    hint: 'Le travail en tournée ou à domicile constitue le cœur de métier.',
  },
];

export const FLEET_OPTIONS: Array<{ value: FleetSize; label: string }> = [
  { value: 'none', label: 'Non (aucun véhicule de service géré)' },
  { value: '1-5', label: 'Oui, 1 à 5 véhicules' },
  { value: '6-15', label: 'Oui, 6 à 15 véhicules' },
  { value: '16-50', label: 'Oui, 16 à 50 véhicules' },
  { value: '50+', label: 'Oui, plus de 50 véhicules' },
];

export const STORAGE_KEY_DIAGNOSTIC = 'devevoke_diagnostic_medicosocial_v2';

export const DIAGNOSTIC_DISCLAIMER =
  'Ce diagnostic est un outil d’auto-évaluation établi à partir des réponses fournies. Il permet d’identifier des tendances et des points de vigilance, mais ne constitue ni un audit de cybersécurité, ni un audit juridique, ni une validation de conformité RGPD.';
