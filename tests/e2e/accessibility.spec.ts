import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('devevoke_initialized', '1');
  });
});

test.describe('Accessibilité Essentielle, Navigation Clavier & Captures Visuelles Ciblées', () => {
  test('Association des <label>, attributs aria-invalid et role="alert" sur les formulaires', async ({
    page,
  }) => {
    await page.goto('/contact');

    // Tous les champs du formulaire principal sont résolus via leur <label> accessible
    const firstNameInput = page.getByLabel('Prénom *');
    const lastNameInput = page.getByLabel('Nom', { exact: true });
    const orgInput = page.getByLabel('Entreprise / Organisation *');
    const roleInput = page.getByLabel('Votre fonction');
    const emailInput = page.getByLabel('Email professionnel *');
    const phoneInput = page.getByLabel('Téléphone direct');
    const projectTypeSelect = page.getByLabel('Nature du projet');
    const messageTextarea = page.getByLabel('Description de votre besoin ou contexte *');

    await expect(firstNameInput).toBeVisible();
    await expect(lastNameInput).toBeVisible();
    await expect(orgInput).toBeVisible();
    await expect(roleInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    await expect(projectTypeSelect).toBeVisible();
    await expect(messageTextarea).toBeVisible();

    // Déclencher les erreurs de validation pour vérifier aria-invalid="true" et role="alert"
    await emailInput.fill('invalide@gmail.com');
    await page.getByRole('button', { name: /Transmettre mon projet/i }).click();

    await expect(firstNameInput).toHaveAttribute('aria-invalid', 'true');
    await expect(orgInput).toHaveAttribute('aria-invalid', 'true');
    await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    await expect(emailInput).toHaveAttribute('aria-describedby', 'email-error');
    await expect(messageTextarea).toHaveAttribute('aria-invalid', 'true');

    const alerts = page.locator('[role="alert"]');
    expect(await alerts.count()).toBeGreaterThanOrEqual(4);
  });

  test('Navigation au clavier : Tab / Shift+Tab entre les champs du formulaire et Escape sur modale', async ({
    page,
  }) => {
    await page.goto('/contact');

    const firstNameInput = page.locator('#firstname');
    await expect(firstNameInput).toBeVisible();
    await firstNameInput.click();
    await expect(firstNameInput).toBeFocused();

    // Tab -> #lastname
    await page.keyboard.press('Tab');
    await expect(page.locator('#lastname')).toBeFocused();

    // Tab -> #business
    await page.keyboard.press('Tab');
    await expect(page.locator('#business')).toBeFocused();

    // Shift+Tab -> retour sur #lastname
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('#lastname')).toBeFocused();

    // Vérifier la fermeture clavier Escape sur une modale
    await page.goto('/tarifs');
    await page.getByRole('button', { name: /En savoir plus sur la/i }).first().click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });

  test('Images avec attribut alt et boutons/liens avec nom accessible sur les pages principales', async ({
    page,
  }) => {
    const pagesToInspect = ['/', '/services', '/realisations', '/a-propos', '/contact'];

    for (const route of pagesToInspect) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('h1').first()).toBeVisible();

      // Vérifier que toutes les images ont un attribut alt défini
      const imagesWithoutAlt = await page.locator('img:not([alt])').count();
      expect(imagesWithoutAlt, `Image sans attribut alt sur ${route}`).toBe(0);

      // Vérifier que tous les boutons ont un texte ou un aria-label
      const unnamedButtons = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.filter((btn) => {
          const text = (btn.textContent || '').trim();
          const ariaLabel = btn.getAttribute('aria-label') || '';
          const ariaLabelledBy = btn.getAttribute('aria-labelledby') || '';
          return !text && !ariaLabel && !ariaLabelledBy;
        }).length;
      });
      expect(unnamedButtons, `Bouton sans nom accessible sur ${route}`).toBe(0);
    }
  });

  test('Captures visuelles ciblées (Accueil, Contact, Simulateur & Mobile)', async ({ page }) => {
    // 1. Desktop Accueil
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
    await page.screenshot({ path: 'test-results/screenshots/home-desktop.png' });

    // 2. Desktop Formulaire Contact avec états d'erreur
    await page.goto('/contact');
    await page.getByLabel('Email professionnel *').fill('contact@gmail.com');
    await page.getByRole('button', { name: /Transmettre mon projet/i }).click();
    await expect(
      page.getByText(/Merci d'utiliser votre adresse e-mail professionnelle/i)
    ).toBeVisible();
    await page.screenshot({ path: 'test-results/screenshots/contact-validation-desktop.png' });

    // 3. Mobile Menu ouvert
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.getByRole('button', { name: /Ouvrir le menu/i }).click();
    await expect(page.getByRole('button', { name: /Fermer le menu/i })).toBeVisible();
    await page.screenshot({ path: 'test-results/screenshots/mobile-menu.png' });
  });
});
