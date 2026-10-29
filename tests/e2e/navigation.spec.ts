import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('devevoke_initialized', '1');
  });
});

test.describe('P0 — Navigation principale, parcours critiques & intégrité des liens', () => {
  test('Parcours Accueil → Services → Contact et retour Accueil via le logo', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('pageerror', (err) => consoleErrors.push(err.message));

    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/médico-social/i);

    // Ouvrir le menu Expertises et aller sur Tous les services
    const nav = page.getByRole('navigation', { name: 'Navigation principale' });
    await nav.getByRole('button', { name: 'Expertises' }).click();
    await nav.getByRole('link', { name: /Tous les services/i }).click();

    await expect(page).toHaveURL(/\/services$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Expertises/i);

    // Cliquer sur le CTA vers Contact
    await page.getByRole('link', { name: /Parler de votre projet/i }).first().click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/solution digitale/i);

    // Retour à l'accueil via le logo du header
    await nav.getByRole('link', { name: /Retour à l'accueil de DevEvoke/i }).click();
    await expect(page).toHaveURL(/\/$/);
    expect(consoleErrors).toEqual([]);
  });

  test('Parcours Accueil → Solutions médico-sociales → Sous-secteur IME → Contact', async ({ page }) => {
    await page.goto('/');

    // Cliquer sur le CTA secondaire du Hero vers /solutions-medico-social
    await page.getByRole('link', { name: /Découvrir nos solutions médico-sociales/i }).click();
    await expect(page).toHaveURL(/\/solutions-medico-social$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Naviguer vers la page dédiée IME via la barre sectorielle MedicoSocialNavSwitcher
    await page.getByRole('link', { name: 'IME', exact: true }).first().click();
    await expect(page).toHaveURL(/\/solutions-medico-social\/ime$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/IME/i);

    // Cliquer sur le CTA vers Contact
    await page.getByRole('link', { name: /Contacter un conseiller IME/i }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test('Parcours Navigation → Réalisations → Étude de cas Floticar → CTA', async ({ page }) => {
    await page.goto('/');

    const nav = page.getByRole('navigation', { name: 'Navigation principale' });
    await nav.getByRole('link', { name: 'Réalisations', exact: true }).click();
    await expect(page).toHaveURL(/\/realisations$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Projets & réalisations/i);

    // Ouvrir l'étude de cas Floticar
    await page.locator('article').filter({ hasText: 'Floticar' }).getByRole('link', { name: /Découvrir le projet/i }).click();
    await expect(page).toHaveURL(/\/realisations\/floticar$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Floticar/i);
  });

  test('Liens du Footer : présence et navigation vers les pages piliers médico-sociales et légales', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');

    await expect(footer.getByRole('link', { name: 'Agence Digitale Médico-Social' })).toHaveAttribute(
      'href',
      '/agence-digitale-medico-social'
    );
    await expect(footer.getByRole('link', { name: 'Solutions Médico-Sociales' })).toHaveAttribute(
      'href',
      '/solutions-medico-social'
    );
    await expect(footer.getByRole('link', { name: 'Développement Logiciel ESMS' })).toHaveAttribute(
      'href',
      '/developpement-logiciel-medico-social'
    );
    await expect(footer.getByRole('link', { name: 'Transformation Numérique ESMS' })).toHaveAttribute(
      'href',
      '/medico-social'
    );

    await footer.getByRole('link', { name: 'Mentions Légales' }).click();
    await expect(page).toHaveURL(/\/mentions-legal$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('Contrôle d’intégrité des routes internes stratégiques (aucune 404 ni 500, aucun crash JS)', async ({ page }) => {
    const criticalRoutes = [
      '/',
      '/agence-digitale-medico-social',
      '/medico-social',
      '/solutions-medico-social',
      '/solutions-medico-social/associations',
      '/solutions-medico-social/ime',
      '/solutions-medico-social/sessad',
      '/solutions-medico-social/esat',
      '/solutions-medico-social/ehpad',
      '/developpement-logiciel-medico-social',
      '/services',
      '/developpement-web',
      '/application-mobile',
      '/developpement-saas',
      '/solutions-metier',
      '/automatisation',
      '/securite-et-conformite',
      '/templates',
      '/diagnostic-numerique',
      '/realisations',
      '/realisations/floticar',
      '/logiciel-gestion-vehicules-medico-social',
      '/a-propos',
      '/tarifs',
      '/foire-aux-questions',
      '/blog',
      '/contact',
      '/mentions-legal',
      '/politique-confidentialite',
      '/cgv',
    ];

    const pageErrors: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    for (const route of criticalRoutes) {
      const response = await page.goto(route);
      expect(response?.status(), `La route ${route} doit retourner HTTP 200`).toBe(200);
      await expect(
        page.getByRole('heading', { level: 1 }).first(),
        `La route ${route} doit afficher un H1 visible`
      ).toBeVisible();
    }

    expect(pageErrors).toEqual([]);
  });
});

