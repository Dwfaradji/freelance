import { test, expect } from '@playwright/test';

const COMPLETED_DIAGNOSTIC_SESSION = JSON.stringify({
  profile: {
    name: '',
    structureType: 'ime',
    size: '21-50',
    siteCount: '2-5',
    mobility: 'regularly',
    fleet: 'none',
  },
  answers: {
    q1: 'q1_c',
    q2: 'q2_b',
    q3: 'q3_c',
    q4: 'q4_c',
    q5: 'q5_b',
    q6: 'q6_c',
    q7: 'q7_c',
    q8: 'q8_b',
    q9: 'q9_c',
    q10: 'q10_c',
    q11: 'q11_b',
    q12: 'q12_c',
    q13: 'q13_c',
    q14: 'q14_c',
    q15: 'q15_b',
    q16: 'q16_c',
    q17: 'q17_b',
  },
});

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('devevoke_initialized', '1');
  });
});

test.describe('Formulaires spécialisés (Simulateur Flotte & Rapport Diagnostic)', () => {
  test('Formulaire Démo Simulateur Flotte : validation vide, rejet email personnel/jetable, normalisation et succès', async ({
    page,
  }) => {
    let apiCalls = 0;
    const capturedPayloads: Array<Record<string, unknown>> = [];

    await page.route('**/api/contact', async (route) => {
      apiCalls++;
      capturedPayloads.push(route.request().postDataJSON());
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 200, success: true, message: 'Votre message a bien été envoyé !' }),
      });
    });

    await page.goto('/logiciel-gestion-vehicules-medico-social');
    await page.getByRole('button', { name: /Estimer mes économies de flotte/i }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Parcours rapide jusqu'aux résultats du simulateur
    await dialog.getByRole('button', { name: /Calculer mes économies/i }).click();
    for (let i = 0; i < 7; i++) {
      await dialog.getByRole('button', { name: /^Continuer$/i }).click();
    }
    // Écran summary -> lancer le calcul
    await dialog.getByRole('button', { name: /Calculer mes économies/i }).click();

    // Attendre l'écran de résultats (calculating = 1050ms) puis ouvrir le formulaire de démo
    const demoBtn = dialog.getByRole('button', { name: /Demander une démo 14 jours/i });
    await expect(demoBtn).toBeVisible({ timeout: 5000 });
    await demoBtn.click();

    await expect(
      dialog.getByRole('heading', { name: /Testez Floticar gratuitement pendant 14 jours/i })
    ).toBeVisible();

    const submitBtn = dialog.getByRole('button', { name: /Demander ma démo gratuite/i });

    // 1. Soumission à vide -> erreurs requises affichées, 0 appel API
    await submitBtn.click();
    await expect(dialog.getByText(/Le prénom doit comporter au moins 2 caractères/i)).toBeVisible();
    await expect(dialog.getByText(/Veuillez saisir une adresse e-mail valide/i)).toBeVisible();
    await expect(dialog.getByText(/Veuillez confirmer votre accord/i)).toBeVisible();
    expect(apiCalls).toBe(0);

    // 2. Email personnel refusé (test@gmail.com)
    await dialog.locator('#sim-demo-firstname').fill('Jean');
    await dialog.locator('#sim-demo-lastname').fill('Martin');
    await dialog.locator('#sim-demo-org').fill('ADAPEI 35');
    await dialog.locator('#sim-demo-consent').check();
    await dialog.locator('#sim-demo-email').fill('test@gmail.com');
    await submitBtn.click();

    await expect(
      dialog.getByText(/Merci d'utiliser votre adresse e-mail professionnelle/i)
    ).toBeVisible();
    expect(apiCalls).toBe(0);

    // 3. Email jetable refusé (contact@yopmail.com)
    await dialog.locator('#sim-demo-email').fill('contact@yopmail.com');
    await submitBtn.click();
    await expect(
      dialog.getByText(/Les adresses e-mail temporaires ne sont pas acceptées/i)
    ).toBeVisible();
    expect(apiCalls).toBe(0);

    // 4. Email professionnel avec majuscules/espaces -> normalisé et envoyé
    await dialog.locator('#sim-demo-email').fill('  DIRECTION@ADAPEI-35.FR  ');
    await submitBtn.click();

    await expect(dialog.getByText(/Demande bien reçue/i)).toBeVisible();
    expect(apiCalls).toBe(1);
    expect(capturedPayloads[0]?.email).toBe('direction@adapei-35.fr');
    expect(capturedPayloads[0]?.business).toBe('ADAPEI 35');
  });

  test('Formulaire Rapport Diagnostic Numérique : validation vide, rejet email personnel, erreur serveur 500 et succès', async ({
    page,
  }) => {
    let apiCalls = 0;
    let shouldFail = true;
    const capturedPayloads: Array<Record<string, unknown>> = [];

    await page.route('**/api/contact', async (route) => {
      apiCalls++;
      capturedPayloads.push(route.request().postDataJSON());
      if (shouldFail) {
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Erreur interne temporaire lors de la génération.' }),
        });
      } else {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            status: 200,
            success: true,
            referenceId: 'DEV-2026-DIAG',
            message: 'Votre message a bien été envoyé !',
          }),
        });
      }
    });

    // Pré-remplir sessionStorage avec un diagnostic complet pour accéder directement aux résultats
    await page.addInitScript((sessionData) => {
      window.sessionStorage.setItem('devevoke_diagnostic_medicosocial_v2', sessionData);
    }, COMPLETED_DIAGNOSTIC_SESSION);

    await page.goto('/diagnostic-numerique');
    await page.getByRole('button', { name: /Consulter mes résultats/i }).click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Ouvrir l'écran de réception du rapport détaillé
    const reportBtn = dialog.getByRole('button', { name: /Recevoir mon rapport détaillé/i });
    await expect(reportBtn).toBeVisible();
    await reportBtn.click();

    await expect(
      dialog.getByRole('heading', { name: /Recevez votre rapport détaillé/i })
    ).toBeVisible();

    const submitBtn = dialog.getByRole('button', { name: /Transmettre et recevoir mon rapport/i });

    // 1. Soumission à vide -> erreurs champs obligatoires + RGPD
    await submitBtn.click();
    await expect(dialog.getByText(/Le prénom doit comporter au moins 2 caractères/i)).toBeVisible();
    await expect(dialog.getByText(/Le nom de l’association ou établissement est requis/i)).toBeVisible();
    await expect(dialog.getByText(/Veuillez saisir une adresse e-mail valide/i)).toBeVisible();
    await expect(dialog.getByText(/Veuillez accepter la transmission du rapport/i)).toBeVisible();
    expect(apiCalls).toBe(0);

    // 2. Email personnel refusé
    await dialog.locator('#diagnostic-firstname').fill('Sophie');
    await dialog.locator('#diagnostic-lastname').fill('Bernard');
    await dialog.locator('#diagnostic-organization').fill('IME Horizon');
    await dialog.locator('#diagnostic-consent-report').check();
    await dialog.locator('#diagnostic-email').fill('sophie.bernard@yahoo.fr');
    await submitBtn.click();

    await expect(
      dialog.getByText(/Merci d'utiliser votre adresse e-mail professionnelle/i)
    ).toBeVisible();
    expect(apiCalls).toBe(0);

    // 3. Email professionnel valide mais serveur renvoie 500 -> affiche l'erreur et conserve les données
    await dialog.locator('#diagnostic-email').fill('s.bernard@ime-horizon.org');
    await submitBtn.click();

    await expect(dialog.getByText(/Erreur interne temporaire/i)).toBeVisible();
    expect(apiCalls).toBe(1);
    await expect(dialog.locator('#diagnostic-firstname')).toHaveValue('Sophie');

    // 4. Retry réussi après rétablissement serveur
    shouldFail = false;
    await submitBtn.click();

    await expect(dialog.getByText(/Rapport bien transmis/i)).toBeVisible();
    expect(apiCalls).toBe(2);
    expect(capturedPayloads[1]?.email).toBe('s.bernard@ime-horizon.org');
    expect(capturedPayloads[1]?.business).toBe('IME Horizon');
    expect(typeof capturedPayloads[1]?.content).toBe('string');
  });
});
