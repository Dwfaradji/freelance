/**
 * Types TypeScript strictement typés pour le Diagnostic de Maturité Numérique Médico-Social DevEvoke
 */

export type Dimension =
  | 'organization'
  | 'businessTools'
  | 'mobility'
  | 'data'
  | 'security'
  | 'management';

export type StructureType =
  | 'association_gestionnaire'
  | 'ime'
  | 'sessad'
  | 'savs_samsah'
  | 'esat_ea'
  | 'ehpad'
  | 'mas_fam'
  | 'foyer_habitat'
  | 'aide_domicile'
  | 'autre';

export type OrganizationSize =
  | '1-20'
  | '21-50'
  | '51-100'
  | '101-250'
  | '251-500'
  | '500+';

export type SiteCount = '1' | '2-5' | '6-10' | '11-30' | '30+';

export type MobilityLevel =
  | 'rarely'
  | 'occasionally'
  | 'regularly'
  | 'daily';

export type FleetSize =
  | 'none'
  | '1-5'
  | '6-15'
  | '16-50'
  | '50+';

export interface OrganizationProfile {
  structureType: StructureType;
  size: OrganizationSize;
  siteCount: SiteCount;
  mobility: MobilityLevel;
  fleet: FleetSize;
  name?: string;
}

export type MaturityLevelKey =
  | 'initial'
  | 'structuration'
  | 'transition'
  | 'maitrise'
  | 'avance';

export interface MaturityLevel {
  key: MaturityLevelKey;
  label: string;
  range: [number, number];
  badge: string;
  color: string;
  description: string;
}

export type RiskLevel = 'critical' | 'high' | 'medium' | 'low';

export interface DiagnosticRisk {
  id: string;
  level: RiskLevel;
  dimension: Dimension | 'fleet';
  title: string;
  description: string;
  recommendation: string;
  triggeredBy: string[];
}

export type Horizon = '30-days' | '3-months' | '6-months';

export type DevEvokeSolution =
  | 'customSoftware'
  | 'mobileApp'
  | 'automation'
  | 'integration'
  | 'fleet'
  | 'security';

export interface Recommendation {
  id: string;
  dimension: Dimension | 'fleet';
  title: string;
  description: string;
  action: string;
  impact: 1 | 2 | 3 | 4 | 5;
  effort: 1 | 2 | 3 | 4 | 5;
  urgency: 1 | 2 | 3 | 4 | 5;
  horizon: Horizon;
  priorityScore: number;
  relatedSolution?: DevEvokeSolution;
}

export interface Strength {
  id: string;
  dimension: Dimension;
  title: string;
  description: string;
}

export interface DiagnosticAnswerOption {
  id: string;
  label: string;
  score?: 0 | 1 | 2 | 3 | 4;
  detail?: string;
  isNotApplicable?: boolean;
}

export interface DiagnosticQuestion {
  id: string;
  dimension?: Dimension | 'fleet';
  label: string;
  subtitle?: string;
  weight: number;
  scored: boolean;
  options: DiagnosticAnswerOption[];
  condition?: (profile: OrganizationProfile) => boolean;
}

export interface FleetDiagnostic {
  score: number;
  level: string;
  hasFleet: boolean;
  risks: DiagnosticRisk[];
  recommendations: Recommendation[];
}

export interface DiagnosticReport {
  organization: OrganizationProfile;
  completedAt: string;
  globalScore: number;
  maturityLevel: MaturityLevel;
  dimensionScores: Record<Dimension, number>;
  activeDimensions: Dimension[];
  strengths: Strength[];
  risks: DiagnosticRisk[];
  riskCounts: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    total: number;
  };
  priorities: Recommendation[];
  quickWins: Recommendation[];
  roadmap: {
    thirtyDays: Recommendation[];
    threeMonths: Recommendation[];
    sixMonths: Recommendation[];
  };
  fleet?: FleetDiagnostic;
  relevantSolutions: DevEvokeSolution[];
  customSynthesis: string;
}
