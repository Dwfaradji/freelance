import { test, expect } from '@playwright/test';

const VIEWPORTS = [
  { name: 'Mobile SE (375x667)', width: 375, height: 667 },
  { name: 'Mobile Moderne (390x844)', width: 390, height: 844 },
  { name: 'Tablette (768x1024)', width: 768, height: 1024 },
  { name: 'Desktop (1440x900)', width: 1440, height: 900 },
];

const KEY_PAGES = [
  '/',
  '/services',
  '/tarifs',
  '/contact',
  '/diagnostic-numerique',
  '/logiciel-gestion-vehicules-medico-social',
];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('devevoke_initialized', '1');
  });
});

test.describe('Responsive & Navigation Mobile (Multi-Viewports)', () => {
  for (const vp of VIEWPORTS) {
    test(`Absence de débordement horizontal (overflow-x) en ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });

      for (const route of KEY_PAGES) {
        await page.goto(route);
        await expect(page.locator('h1').first()).toBeVisible();

        const hasHorizontalOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth;
        });
        expect(
          hasHorizontalOverflow,
          `Débordement horizontal détecté sur ${route} en ${vp.name}`
        ).toBe(false);
      }
    });
  }

  test('Menu Burger Mobile (375x667) : ouverture, fermeture, liens et CTA mobile', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const openBtn = page.getByRole('button', { name: /Ouvrir le menu/i });
    await expect(openBtn).toBeVisible();
    await openBtn.click();

    const closeBtn = page.getByRole('button', { name: /Fermer le menu/i });
    await expect(closeBtn).toBeVisible();
    await expect(closeBtn).toHaveAttribute('aria-expanded', 'true');

    // Vérifier les liens du menu mobile
    const servicesLink = page.getByRole('link', { name: /Nos Expertises & Services/i });
    await expect(servicesLink).toBeVisible();
    await expect(page.getByRole('link', { name: /Diagnostic Numérique Gratuit/i }).first()).toBeVisible();

    // Fermer puis rouvrir le menu
    await closeBtn.click();
    await expect(openBtn).toBeVisible();

    await openBtn.click();
    await servicesLink.click();
    await expect(page).toHaveURL(/\/services$/);
  });

  test('Formulaire de contact et Modale utilisables sur Mobile (390x844)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    // 1. Formulaire de contact sur mobile
    await page.goto('/contact');
    const submitBtn = page.getByRole('button', { name: /Transmettre mon projet/i });
    await submitBtn.scrollIntoViewIfNeeded();
    await expect(submitBtn).toBeVisible();

    await page.getByLabel('Prénom *').fill('Claire');
    await page.getByLabel('Email professionnel *').fill('claire@gmail.com');
    await submitBtn.click();

    await expect(
      page.getByText(/Merci d'utiliser votre adresse e-mail professionnelle/i)
    ).toBeVisible();

    // Vérification du message serveur Hunter (test@test.fr) sur iPhone (390x844) et Android (360x800)
    for (const mobileVp of [
      { label: 'iPhone', width: 390, height: 844 },
      { label: 'Android', width: 360, height: 800 },
    ]) {
      await page.setViewportSize({ width: mobileVp.width, height: mobileVp.height });
      await page.getByLabel('Prénom *').fill('Claire');
      await page.getByLabel('Entreprise / Organisation *').fill('Association Horizon');
      await page.getByLabel('Email professionnel *').fill('test@test.fr');
      await page
        .getByLabel('Description de votre besoin ou contexte *')
        .fill('Projet de refonte extranet médico-social.');
      const checkbox = page.getByRole('checkbox');
      if (!(await checkbox.isChecked())) {
        await checkbox.check();
      }

      await submitBtn.scrollIntoViewIfNeeded();
      await submitBtn.click();

      const errorAlert = page.locator('#email-error');
      await expect(errorAlert).toBeVisible();
      await expect(errorAlert).toHaveAttribute('role', 'alert');
      await expect(errorAlert).toContainText(
        "Cette adresse e-mail n'a pas pu être vérifiée."
      );
      await expect(page.getByLabel('Email professionnel *')).toHaveAttribute(
        'aria-describedby',
        'email-error'
      );

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      );
      expect(overflow, `Pas d'overflow horizontal sur ${mobileVp.label}`).toBe(false);
    }

    // 2. Modale Tarifs sur mobile : bouton fermer accessible
    await page.goto('/tarifs');
    const offerBtn = page.getByRole('button', { name: /En savoir plus sur la/i }).first();
    await offerBtn.scrollIntoViewIfNeeded();
    await offerBtn.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    const closeBtn = dialog.getByRole('button', { name: /^Fermer$/i });
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();
    await expect(dialog).toBeHidden();
  });
});
