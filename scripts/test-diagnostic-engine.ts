import assert from 'node:assert';
import { getActiveQuestions } from '../src/lib/diagnostic/questions';
import { buildDiagnosticReport } from '../src/lib/diagnostic/report';
import { OrganizationProfile } from '../src/lib/diagnostic/types';

console.log('=== DÉBUT DES TESTS DU MOTEUR DE DIAGNOSTIC MÉDICO-SOCIAL ===\n');

const baseProfileNoFleet: OrganizationProfile = {
  structureType: 'ime',
  size: '21-50',
  siteCount: '1',
  mobility: 'regularly',
  fleet: 'none',
  name: 'IME Exemple Test',
};

const baseProfileWithFleet: OrganizationProfile = {
  structureType: 'association_gestionnaire',
  size: '101-250',
  siteCount: '6-10',
  mobility: 'daily',
  fleet: '16-50',
  name: 'Association Gestionnaire Test',
};

// --- TEST 1 : Vérification du nombre de questions selon profil ---
console.log('--- TEST 1 : Questions conditionnelles selon flotte ---');
const activeNoFleet = getActiveQuestions(baseProfileNoFleet);
assert.strictEqual(activeNoFleet.length, 17, 'Profil sans flotte doit avoir exactement 17 questions');

const activeWithFleet = getActiveQuestions(baseProfileWithFleet);
assert.strictEqual(activeWithFleet.length, 20, 'Profil avec flotte doit avoir exactement 20 questions');
console.log('OK ! Sans flotte : 17 questions, Avec flotte : 20 questions.');

// --- TEST 2 : Cas tout au minimum (toutes les réponses = 0) ---
console.log('\n--- TEST 2 : Cas Tout au minimum (score 0) ---');
const minAnswers: Record<string, string> = {};
for (const q of activeNoFleet) {
  const opt0 = q.options.find((o) => o.score === 0);
  if (opt0) minAnswers[q.id] = opt0.id;
}
const minReport = buildDiagnosticReport(baseProfileNoFleet, minAnswers);
console.log('Global score min:', minReport.globalScore, '(attendu: 0)');
assert.strictEqual(minReport.globalScore, 0);
assert.strictEqual(minReport.maturityLevel.key, 'initial');
console.log('Risques critiques détectés au minimum :', minReport.riskCounts.critical);
assert.ok(minReport.riskCounts.critical >= 2, 'Doit détecter au moins 2 risques critiques (mots de passe + sauvegarde)');
console.log('OK !');

// --- TEST 3 : Cas tout au maximum (toutes les réponses = 4) ---
console.log('\n--- TEST 3 : Cas Tout au maximum (score 100) ---');
const maxAnswers: Record<string, string> = {};
for (const q of activeNoFleet) {
  const opt4 = q.options.find((o) => o.score === 4);
  if (opt4) maxAnswers[q.id] = opt4.id;
}
const maxReport = buildDiagnosticReport(baseProfileNoFleet, maxAnswers);
console.log('Global score max:', maxReport.globalScore, '(attendu: 100)');
assert.strictEqual(maxReport.globalScore, 100);
assert.strictEqual(maxReport.maturityLevel.key, 'avance');
assert.strictEqual(maxReport.riskCounts.critical, 0);
assert.strictEqual(maxReport.riskCounts.high, 0);
console.log('OK !');

// --- TEST 4 : Cas tout au milieu (toutes les réponses = 2) ---
console.log('\n--- TEST 4 : Cas Tout au milieu (score 50) ---');
const midAnswers: Record<string, string> = {};
for (const q of activeNoFleet) {
  const opt2 = q.options.find((o) => o.score === 2);
  if (opt2) midAnswers[q.id] = opt2.id;
}
const midReport = buildDiagnosticReport(baseProfileNoFleet, midAnswers);
console.log('Global score mid:', midReport.globalScore, '(attendu: 50)');
assert.strictEqual(midReport.globalScore, 50);
assert.strictEqual(midReport.maturityLevel.key, 'transition');
console.log('OK !');

// --- TEST 5 : Question non applicable (Q5 DUI na) ---
console.log('\n--- TEST 5 : Question non applicable (Q5 non applicable) ---');
const naAnswers = { ...maxAnswers, q5: 'q5_na' };
const naReport = buildDiagnosticReport(baseProfileNoFleet, naAnswers);
console.log('Business tools score with Q5 non-applicable:', naReport.dimensionScores.businessTools, '(attendu: 100)');
assert.strictEqual(naReport.dimensionScores.businessTools, 100);
assert.strictEqual(naReport.globalScore, 100);
console.log('OK ! La question non applicable n’a pas pénalisé le score.');

// --- TEST 6 : Sécurité excellente mais outils faibles (Indépendance) ---
console.log('\n--- TEST 6 : Sécurité excellente (100) mais outils faibles (0) ---');
const mixedAnswers = {
  ...minAnswers,
  q12: 'q12_e', // Security 4
  q13: 'q13_e', // Security 4
  q14: 'q14_e', // Security 4
  q15: 'q15_e', // Security 4
};
const mixedReport = buildDiagnosticReport(baseProfileNoFleet, mixedAnswers);
console.log('Security score:', mixedReport.dimensionScores.security, '(attendu: 100)');
console.log('Business tools score:', mixedReport.dimensionScores.businessTools, '(attendu: 0)');
assert.strictEqual(mixedReport.dimensionScores.security, 100);
assert.strictEqual(mixedReport.dimensionScores.businessTools, 0);
console.log('OK ! Dimensions indépendantes.');

// --- TEST 7 : Règle Floticar (uniquement si flotte présente ET score flotte < 65) ---
console.log('\n--- TEST 7 : Déclenchement ciblé de la recommandation Floticar ---');
// Cas A : Sans flotte => Floticar ne doit JAMAIS apparaître
const recsNoFleet = minReport.relevantSolutions;
assert.ok(!recsNoFleet.includes('fleet'), 'Floticar ne doit pas être proposé sans flotte');

// Cas B : Avec flotte et score flotte bas => Floticar DOIT apparaître
const fleetLowAnswers: Record<string, string> = {
  ...minAnswers,
  q18: 'q18_a', // Papier (0)
  q19: 'q19_a', // Papier (0)
  q20: 'q20_a', // Aucun signalement (0)
};
const reportWithLowFleet = buildDiagnosticReport(baseProfileWithFleet, fleetLowAnswers);
assert.ok(
  reportWithLowFleet.relevantSolutions.includes('fleet'),
  'Floticar doit être proposé avec flotte et score bas'
);
assert.strictEqual(reportWithLowFleet.fleet?.hasFleet, true);

// Cas C : Avec flotte mais gestion déjà avancée (score 100) => Floticar non proposé
const fleetHighAnswers: Record<string, string> = {
  ...minAnswers,
  q18: 'q18_e', // Avancé (4)
  q19: 'q19_e', // Avancé (4)
  q20: 'q20_e', // Avancé (4)
};
const reportWithHighFleet = buildDiagnosticReport(baseProfileWithFleet, fleetHighAnswers);
assert.ok(
  !reportWithHighFleet.relevantSolutions.includes('fleet'),
  'Floticar ne doit pas être forcé si la gestion de flotte est déjà maîtrisée'
);
console.log('OK ! Conditionnement Floticar strictement respecté.');

// --- TEST 8 : Vérification de neutralité du profil de l'établissement ---
console.log('\n--- TEST 8 : Neutralité du profil (aucun point attribué) ---');
const reportSmallIME = buildDiagnosticReport(
  { ...baseProfileNoFleet, structureType: 'ime', size: '1-20', siteCount: '1' },
  midAnswers
);
const reportBigAssoc = buildDiagnosticReport(
  { ...baseProfileNoFleet, structureType: 'association_gestionnaire', size: '500+', siteCount: '30+' },
  midAnswers
);
assert.strictEqual(
  reportSmallIME.globalScore,
  reportBigAssoc.globalScore,
  'Le score global doit être strictement identique quelles que soient la taille ou la structure'
);
console.log('OK ! Score identique : 50/100 pour le petit IME et la grande association.');

console.log('\n=== TOUS LES 8 TESTS DU MOTEUR SONT VALIDES AVEC SUCCÈS ! ===');
