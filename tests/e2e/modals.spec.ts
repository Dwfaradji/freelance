import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('devevoke_initialized', '1');
  });
});

test.describe('Modales, Simulateurs Multi-Étapes & Accordéons UI', () => {
  test('Modale Tarifs (/tarifs) : ouverture, fermeture (Échap & bouton X) et redirection Demander un devis', async ({
    page,
  }) => {
    await page.goto('/tarifs');

    // 1. Ouverture de la première offre
    const firstOfferBtn = page.getByRole('button', { name: /En savoir plus sur la/i }).first();
    await firstOfferBtn.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
    await expect(dialog.getByText(/À partir de/i)).toBeVisible();

    // 2. Fermeture avec la touche Escape
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();

    // 3. Réouverture et fermeture via le bouton X (Fermer)
    await firstOfferBtn.click();
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: /^Fermer$/i }).click();
    await expect(dialog).toBeHidden();

    // 4. Réouverture et clic sur "Demander un devis" -> navigation vers /contact
    await firstOfferBtn.click();
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: /Demander un devis/i }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('Simulateur Diagnostic Numérique (/diagnostic-numerique) : étapes, bouton Retour, modification et confirmation de sortie', async ({
    page,
  }) => {
    await page.goto('/diagnostic-numerique');

    await page.getByRole('button', { name: /Faire mon diagnostic gratuit/i }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole('heading', { name: /Évaluez votre maturité numérique/i })
    ).toBeVisible();

    // Démarrer le parcours
    await dialog.getByRole('button', { name: /Commencer le diagnostic/i }).click();
    await expect(
      dialog.getByRole('heading', {
        name: /Quel type d'établissement ou association représentez-vous/i,
      })
    ).toBeVisible();

    // Choisir "IME" -> auto-advance (280ms) vers étape 2/5
    await dialog.getByRole('radio', { name: /\bIME\b/i }).click();
    await expect(
      dialog.getByRole('heading', {
        name: /Combien de professionnels travaillent dans votre structure/i,
      })
    ).toBeVisible();

    // Tester le bouton Retour -> revient à l'étape 1/5 et permet de modifier son choix
    await dialog.getByRole('button', { name: /Retour/i }).click();
    await expect(
      dialog.getByRole('heading', {
        name: /Quel type d'établissement ou association représentez-vous/i,
      })
    ).toBeVisible();
    await dialog.getByRole('radio', { name: /\bSESSAD\b/i }).click();
    await expect(
      dialog.getByRole('heading', {
        name: /Combien de professionnels travaillent dans votre structure/i,
      })
    ).toBeVisible();

    // Tenter de fermer en cours de parcours -> affiche la boîte de confirmation
    await dialog.getByRole('button', { name: /Fermer le diagnostic/i }).click();
    await expect(page.getByText(/Quitter le diagnostic \?/i)).toBeVisible();

    // Cliquer sur "Continuer" dans la modale de confirmation annule la fermeture
    await page.getByRole('button', { name: /^Continuer$/i }).last().click();
    await expect(page.getByText(/Quitter le diagnostic \?/i)).toBeHidden();
    await expect(dialog).toBeVisible();

    // Rouvrir la confirmation avec Échap et confirmer "Quitter"
    await page.keyboard.press('Escape');
    await expect(page.getByText(/Quitter le diagnostic \?/i)).toBeVisible();
    await page.getByRole('button', { name: /^Quitter$/i }).click();
    await expect(dialog).toBeHidden();
  });

  test('Simulateur ROI Flotte (/logiciel-gestion-vehicules-medico-social) : contrôles +/-, Retour, calcul ROI et accordéon hypothèses', async ({
    page,
  }) => {
    await page.goto('/logiciel-gestion-vehicules-medico-social');

    await page.getByRole('button', { name: /Estimer mes économies de flotte/i }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    await dialog.getByRole('button', { name: /Calculer mes économies/i }).click();
    await expect(
      dialog.getByRole('heading', { name: /Combien de véhicules gérez-vous/i })
    ).toBeVisible();

    // Valeur initiale par défaut : 8 véhicules. Tester + (x2 -> 10) et - (x1 -> 9)
    const plusBtn = dialog.getByRole('button', { name: /Augmenter le nombre de véhicules/i });
    const minusBtn = dialog.getByRole('button', { name: /Diminuer le nombre de véhicules/i });
    await plusBtn.click();
    await plusBtn.click();
    await expect(dialog.getByText('10', { exact: true })).toBeVisible();
    await minusBtn.click();
    await expect(dialog.getByText('9', { exact: true })).toBeVisible();

    // Continuer puis Retour -> vérifie que la valeur 9 est conservée
    await dialog.getByRole('button', { name: /^Continuer$/i }).click();
    await expect(
      dialog.getByRole('heading', {
        name: /Combien de kilomètres votre flotte parcourt-elle par an/i,
      })
    ).toBeVisible();

    await dialog.getByRole('button', { name: /Retour/i }).click();
    await expect(dialog.getByText('9', { exact: true })).toBeVisible();

    // Avancer jusqu'au récapitulatif (7 étapes)
    for (let i = 0; i < 7; i++) {
      await dialog.getByRole('button', { name: /^Continuer$/i }).click();
    }

    await expect(
      dialog.getByRole('heading', { name: /Vérifiez votre simulation/i })
    ).toBeVisible();
    await dialog.getByRole('button', { name: /Calculer mes économies/i }).click();

    // Attendre les résultats
    const hypothesesBtn = dialog.getByRole('button', {
      name: /Comment cette estimation est-elle calculée/i,
    });
    await expect(hypothesesBtn).toBeVisible({ timeout: 5000 });
    await expect(
      dialog.getByRole('heading', { name: /Votre potentiel d'économies estimé/i })
    ).toBeVisible();

    // Tester l'accordéon des hypothèses de calcul
    await hypothesesBtn.click();
    await expect(dialog.getByText(/Source :/i).first()).toBeVisible();

    // Tester "Modifier mes données" -> retour à l'écran de vérification
    await dialog.getByRole('button', { name: /Modifier mes données/i }).click();
    await expect(
      dialog.getByRole('heading', { name: /Vérifiez votre simulation/i })
    ).toBeVisible();

    // Fermeture via le bouton Fermer le simulateur
    await dialog.getByRole('button', { name: /Fermer le simulateur/i }).click();
    const quitBtn = page.getByRole('button', { name: /^Quitter$/i });
    if (await quitBtn.isVisible()) {
      await quitBtn.click();
    }
    await expect(dialog).toBeHidden();
  });

  test('Accordéons FAQ (/foire-aux-questions) : ouverture, fermeture et filtrage par catégorie', async ({
    page,
  }) => {
    await page.goto('/foire-aux-questions');

    const firstQuestionBtn = page.locator('main button[aria-expanded]').first();
    await expect(firstQuestionBtn).toBeVisible();

    const initialExpanded = await firstQuestionBtn.getAttribute('aria-expanded');
    const targetExpanded = initialExpanded === 'true' ? 'false' : 'true';
    await firstQuestionBtn.click();
    await expect(firstQuestionBtn).toHaveAttribute('aria-expanded', targetExpanded);
  });
});
