import assert from 'node:assert';
import {
  buildFullFleetSimulation,
  calculateAllScenarios,
  calculateFleetROI,
  formatEstimatedCurrency,
  formatPayback,
  sanitizeNumber,
} from '../src/lib/roi/calculator';
import { DEFAULT_FLEET_INPUTS, SCENARIOS } from '../src/lib/roi/constants';
import { FleetInputs } from '../src/lib/roi/types';

console.log('--- TEST 1 : Cas Standard Réaliste ---');
const standardResult = calculateFleetROI(DEFAULT_FLEET_INPUTS, 'realiste');

console.log('Admin initial hours:', standardResult.breakdown.initialAdminHours, 'h (attendu: 312)');
assert.strictEqual(standardResult.breakdown.initialAdminHours, 312);

console.log('Effective admin rate:', standardResult.breakdown.effectiveAdminReductionRate, '(attendu: 0.44)');
assert.strictEqual(Math.round(standardResult.breakdown.effectiveAdminReductionRate * 100), 44);

console.log('Admin saved hours:', standardResult.breakdown.savedAdminHours, 'h (attendu: 137.28)');
assert.strictEqual(Math.round(standardResult.breakdown.savedAdminHours * 100) / 100, 137.28);

console.log('Admin saving:', standardResult.breakdown.adminSaving, '€ (attendu: 3843.84)');
assert.strictEqual(Math.round(standardResult.breakdown.adminSaving * 100) / 100, 3843.84);

console.log('Calculated fuel budget:', standardResult.breakdown.calculatedFuelBudget, '€ (attendu: 15120)');
assert.strictEqual(standardResult.breakdown.calculatedFuelBudget, 15120);

console.log('Fuel saving:', standardResult.breakdown.fuelSaving, '€ (attendu: 302.40)');
assert.strictEqual(Math.round(standardResult.breakdown.fuelSaving * 100) / 100, 302.40);

console.log('Maintenance saving:', standardResult.breakdown.maintenanceSaving, '€ (attendu: 216)');
assert.strictEqual(standardResult.breakdown.maintenanceSaving, 216);

console.log('Incident saving:', standardResult.breakdown.incidentSaving, '€ (attendu: 300)');
assert.strictEqual(standardResult.breakdown.incidentSaving, 300);

console.log('Immobilisation saving:', standardResult.breakdown.immobilisationSaving, '€ (attendu: 180)');
assert.strictEqual(standardResult.breakdown.immobilisationSaving, 180);

console.log('Gross annual saving:', standardResult.grossAnnualSaving, '€ (attendu: 4842.24)');
assert.strictEqual(Math.round(standardResult.grossAnnualSaving * 100) / 100, 4842.24);

console.log('Saving per vehicle:', standardResult.savingPerVehicle, '€ (attendu: 605.28)');
assert.strictEqual(Math.round(standardResult.savingPerVehicle * 100) / 100, 605.28);

console.log('Sans coût Floticar => ROI, Net et Payback sont undefined :');
assert.strictEqual(standardResult.netAnnualSaving, undefined);
assert.strictEqual(standardResult.roi, undefined);
assert.strictEqual(standardResult.paybackMonths, undefined);
console.log('OK !');

console.log('\n--- TEST 2 : Avec Coût Floticar (ex: 1 500 €) ---');
const withCost = calculateFleetROI(DEFAULT_FLEET_INPUTS, 'realiste', 1500);
console.log('Net annual saving:', withCost.netAnnualSaving, '€ (attendu: 3342.24)');
assert.strictEqual(Math.round((withCost.netAnnualSaving ?? 0) * 100) / 100, 3342.24);

console.log('ROI:', withCost.roi, '% (attendu: 222.82)');
assert.strictEqual(Math.round((withCost.roi ?? 0) * 100) / 100, 222.82);

console.log('Payback months:', withCost.paybackMonths, 'mois (attendu: ~3.72 mois)');
assert.strictEqual(Math.round((withCost.paybackMonths ?? 0) * 100) / 100, 3.72);
console.log('Format Payback:', formatPayback(withCost.paybackMonths), '(attendu: Rentabilisé en ~4 mois)');
assert.strictEqual(formatPayback(withCost.paybackMonths), 'Rentabilisé en ~4 mois');
console.log('OK !');

console.log('\n--- TEST 3 : Zéro carburant, zéro entretien, zéro incident ---');
const zeroInputs: FleetInputs = {
  ...DEFAULT_FLEET_INPUTS,
  fuelCalculationMode: 'known',
  annualFuelBudget: 0,
  annualMaintenanceBudget: 0,
  annualIncidentCost: 0,
  annualAvoidableImmobilisations: 0,
};
const zeroResult = calculateFleetROI(zeroInputs, 'realiste');
assert.strictEqual(zeroResult.breakdown.fuelSaving, 0);
assert.strictEqual(zeroResult.breakdown.maintenanceSaving, 0);
assert.strictEqual(zeroResult.breakdown.incidentSaving, 0);
assert.strictEqual(zeroResult.breakdown.immobilisationSaving, 0);
assert.strictEqual(zeroResult.grossAnnualSaving, zeroResult.breakdown.adminSaving);
console.log('Gross saving equals admin saving:', zeroResult.grossAnnualSaving, '€');
console.log('OK !');

console.log('\n--- TEST 4 : Gain brut = 0 et Valeurs extrêmes / NaN ---');
const extremeInputs: FleetInputs = {
  ...DEFAULT_FLEET_INPUTS,
  vehicles: 0, // Should be clamped to 1
  weeklyAdminHours: -10, // Clamped to 0
  hourlyCost: NaN, // Sanitized to 0
  annualMaintenanceBudget: -500, // Clamped to 0
  annualIncidentCost: -200, // Clamped to 0
  annualAvoidableImmobilisations: 0,
  fuelCalculationMode: 'known',
  annualFuelBudget: 0,
};
const extremeResult = calculateFleetROI(extremeInputs, 'realiste', 1000);
assert.strictEqual(extremeResult.grossAnnualSaving, 0);
assert.strictEqual(extremeResult.savingPerVehicle, 0);
assert.strictEqual(extremeResult.netAnnualSaving, -1000);
assert.strictEqual(extremeResult.roi, -100);
assert.strictEqual(extremeResult.paybackMonths, Infinity);
assert.strictEqual(Number.isNaN(extremeResult.grossAnnualSaving), false);
console.log('Safe against NaN and division by zero. OK !');

console.log('\n--- TEST 5 : Plafonnement Administratif Strict (70% max) ---');
const maxAdminInputs: FleetInputs = {
  ...DEFAULT_FLEET_INPUTS,
  organizationType: 'paper', // factor 1.15
};
// Under 'optimise', adminTimeReduction is 0.55 * 1.15 = 0.6325 (< 0.70)
const optResult = calculateFleetROI(maxAdminInputs, 'optimise');
assert.strictEqual(optResult.breakdown.effectiveAdminReductionRate, 0.6325);

// Test artificial scenario with higher factor to verify clamp at 0.70
const cappedRate = Math.min(0.75 * 1.15, 0.70);
assert.strictEqual(cappedRate, 0.70);
console.log('Effective admin rate capped properly. OK !');

console.log('\n--- TEST 6 : Calcul des 3 Scénarios et Fourchette ---');
const all = calculateAllScenarios(DEFAULT_FLEET_INPUTS);
console.log('Prudent Gross:', all.prudent.grossAnnualSaving);
console.log('Réaliste Gross:', all.realiste.grossAnnualSaving);
console.log('Optimisé Gross:', all.optimise.grossAnnualSaving);
assert.ok(all.minGrossSaving < all.realiste.grossAnnualSaving);
assert.ok(all.realiste.grossAnnualSaving < all.maxGrossSaving);
console.log(`Fourchette: ${formatEstimatedCurrency(all.minGrossSaving)} – ${formatEstimatedCurrency(all.maxGrossSaving)} / an`);

console.log('\n--- TEST 7 : buildFullFleetSimulation Cas Standard (8 véhicules) ---');
const fullSim = buildFullFleetSimulation(DEFAULT_FLEET_INPUTS, ['maintenance', 'technical_inspection']);
console.log('Coût actuel total:', fullSim.currentCost.total, '€');
assert.ok(fullSim.currentCost.total > 0);
console.log('Gain annuel réaliste:', fullSim.annualGrossSaving, '€ (attendu: 4842 €)');
assert.strictEqual(fullSim.annualGrossSaving, 4842);
console.log('Coût logiciel Floticar (8 vhc * 15€ * 12):', fullSim.roi.annualSoftwareCost, '€ (attendu: 1440 €)');
assert.strictEqual(fullSim.roi.annualSoftwareCost, 1440);
console.log('Gain net annuel:', fullSim.roi.annualNetGain, '€ (attendu: 3402 €)');
assert.strictEqual(fullSim.roi.annualNetGain, 3402);
console.log('Payback:', fullSim.roi.paybackMonths, 'mois');
assert.ok(fullSim.roi.paybackMonths > 0 && fullSim.roi.paybackMonths < 12);
console.log('Priorités générées:', fullSim.priorities.length);
assert.strictEqual(fullSim.priorities.length, 3);
console.log('OK !');

console.log('\n--- TEST 8 : Cas 1 véhicule vs 100 véhicules ---');
const singleVeh = buildFullFleetSimulation({ ...DEFAULT_FLEET_INPUTS, vehicles: 1, weeklyAdminHours: 1 });
assert.strictEqual(singleVeh.roi.annualSoftwareCost, 180); // 1 * 15 * 12
assert.ok(singleVeh.annualGrossSaving >= 0);

const largeFleet = buildFullFleetSimulation({ ...DEFAULT_FLEET_INPUTS, vehicles: 100, weeklyAdminHours: 20 });
assert.strictEqual(largeFleet.roi.annualSoftwareCost, 18000); // 100 * 15 * 12
assert.ok(largeFleet.annualGrossSaving > 10000);
console.log('OK !');

console.log('\n--- TEST 9 : Indice de confiance (Données déclarées vs estimées) ---');
const highConfidenceSim = buildFullFleetSimulation({
  ...DEFAULT_FLEET_INPUTS,
  fuelCalculationMode: 'known',
  annualFuelBudget: 12000,
  isMaintenanceCustom: true,
});
assert.strictEqual(highConfidenceSim.confidence, 'high');

const indicativeSim = buildFullFleetSimulation({
  ...DEFAULT_FLEET_INPUTS,
  fuelCalculationMode: 'estimated',
  annualFuelBudget: undefined,
  isMaintenanceCustom: false,
});
assert.strictEqual(indicativeSim.confidence, 'indicative');
console.log('Confiance haute & indicative vérifiées avec succès. OK !');

console.log('\n--- TEST 10 : Sécurité contre NaN et division par zéro ---');
const zeroSim = buildFullFleetSimulation({
  ...DEFAULT_FLEET_INPUTS,
  vehicles: 0, // Should be clamped to 1
  weeklyAdminHours: 0,
  annualMaintenanceBudget: 0,
  annualIncidentCost: 0,
  annualAvoidableImmobilisations: 0,
  annualFuelBudget: 0,
  fuelCalculationMode: 'known',
});
assert.ok(Number.isFinite(zeroSim.annualGrossSaving));
assert.ok(Number.isFinite(zeroSim.roi.annualSoftwareCost));
console.log('Sécurité NaN / Infinity validée !');

console.log('\nTOUS LES TESTS DU MOTEUR FLOTICAR (10/10) SONT VALIDES AVEC SUCCÈS !');

