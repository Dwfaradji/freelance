import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('devevoke_initialized', '1');
  });
});

test.describe('P0 — Formulaire de Contact (/contact) : Validation, Emails Pro, États & Sécurité', () => {
  test('Formulaire vide : bloque l’envoi, affiche les erreurs sur les champs requis et n’appelle pas l’API', async ({
    page,
  }) => {
    let apiCalls = 0;
    await page.route('**/api/contact', async (route) => {
      apiCalls++;
      await route.continue();
    });

    await page.goto('/contact');
    await page.getByRole('button', { name: /Transmettre mon projet/i }).click();

    await expect(page.getByText('Le prénom est requis')).toBeVisible();
    await expect(page.getByText('L’entreprise ou organisation est requise')).toBeVisible();
    await expect(page.getByText('Veuillez saisir une adresse e-mail valide.')).toBeVisible();
    await expect(page.getByText('La description de votre besoin est requise')).toBeVisible();
    await expect(
      page.getByText('Veuillez accepter les conditions pour transmettre votre demande')
    ).toBeVisible();

    await expect(page.getByLabel('Prénom *')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.getByLabel('Entreprise / Organisation *')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.getByLabel('Email professionnel *')).toHaveAttribute('aria-invalid', 'true');
    expect(apiCalls).toBe(0);
  });

  test('Valeurs incorrectes : champs trop courts et e-mails malformés bloqués côté client', async ({
    page,
  }) => {
    let apiCalls = 0;
    await page.route('**/api/contact', async (route) => {
      apiCalls++;
      await route.continue();
    });

    await page.goto('/contact');

    await page.getByLabel('Prénom *').fill('A');
    await page.getByLabel('Entreprise / Organisation *').fill('B');
    await page.getByLabel('Email professionnel *').fill('abc@entreprise');
    await page.getByLabel('Description de votre besoin ou contexte *').fill('abc');
    await page.getByRole('checkbox').check();

    await page.getByRole('button', { name: /Transmettre mon projet/i }).click();

    await expect(page.getByText('Le prénom doit comporter au moins 2 caractères')).toBeVisible();
    await expect(
      page.getByText('Le nom de structure doit comporter au moins 2 caractères')
    ).toBeVisible();
    await expect(page.getByText('Veuillez saisir une adresse e-mail valide.')).toBeVisible();
    await expect(
      page.getByText('Veuillez préciser votre demande (minimum 5 caractères)')
    ).toBeVisible();
    expect(apiCalls).toBe(0);
  });

  test('Emails personnels refusés (Gmail, Outlook, Yahoo, iCloud, Orange, Free) avec message explicite', async ({
    page,
  }) => {
    let apiCalls = 0;
    await page.route('**/api/contact', async (route) => {
      apiCalls++;
      await route.continue();
    });

    await page.goto('/contact');
    await page.getByLabel('Prénom *').fill('Stéphane');
    await page.getByLabel('Entreprise / Organisation *').fill('IME Exemple');
    await page
      .getByLabel('Description de votre besoin ou contexte *')
      .fill('Nous souhaitons créer un logiciel métier sur mesure pour nos équipes.');
    await page.getByRole('checkbox').check();

    const rejectedEmails = [
      'test@gmail.com',
      'test@hotmail.com',
      'test@outlook.com',
      'test@outlook.fr',
      'test@yahoo.com',
      'test@yahoo.fr',
      'test@icloud.com',
      'test@orange.fr',
      'test@free.fr',
    ];

    for (const email of rejectedEmails) {
      await page.getByLabel('Email professionnel *').fill(email);
      await page.getByRole('button', { name: /Transmettre mon projet/i }).click();
      await expect(
        page.getByText("Merci d'utiliser votre adresse e-mail professionnelle.")
      ).toBeVisible();
    }

    // Test d'un email jetable
    await page.getByLabel('Email professionnel *').fill('contact@yopmail.com');
    await page.getByRole('button', { name: /Transmettre mon projet/i }).click();
    await expect(
      page.getByText('Les adresses e-mail temporaires ne sont pas acceptées.')
    ).toBeVisible();

    expect(apiCalls).toBe(0);
  });

  test('Soumission valide + Normalisation (" CONTACT@ENTREPRISE.FR ") + État loading + Succès', async ({
    page,
  }) => {
    let capturedPayload: Record<string, unknown> | null = null;

    await page.route('**/api/contact', async (route) => {
      capturedPayload = route.request().postDataJSON();
      // Léger délai contrôlé pour observer l'état "Envoi en cours..."
      await new Promise((resolve) => setTimeout(resolve, 250));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          status: 200,
          message: 'EMAIL_SENT',
          referenceId: 'DEV-20261028-TEST',
          requestId: 'req_test_valid',
        }),
      });
    });

    await page.goto('/contact');
    await page.getByLabel('Prénom *').fill('Claire');
    await page.getByLabel('Nom', { exact: true }).fill('Morel');
    await page.getByLabel('Entreprise / Organisation *').fill('Association Médico-Sociale Horizon');
    await page.getByLabel('Email professionnel *').fill('  CONTACT@ENTREPRISE.FR  ');
    await page
      .getByLabel('Description de votre besoin ou contexte *')
      .fill('Création d’un portail métier multi-sites pour nos 5 établissements ESMS.');
    await page.getByRole('checkbox').check();

    const submitButton = page.getByRole('button', { name: /Transmettre mon projet/i });
    await submitButton.click();

    // Vérifier l'état loading pendant la requête
    await expect(page.getByRole('button', { name: /Envoi en cours/i })).toBeDisabled();

    // Vérifier l'état succès final
    await expect(
      page.getByText('Votre demande de projet a bien été transmise à notre équipe.')
    ).toBeVisible();
    await expect(page.getByText('DEV-20261028-TEST')).toBeVisible();

    expect(capturedPayload).not.toBeNull();
    expect((capturedPayload as any).email).toBe('contact@entreprise.fr');
  });

  test('Double-clic rapide : n’envoie qu’une seule requête vers /api/contact', async ({ page }) => {
    let apiCalls = 0;

    await page.route('**/api/contact', async (route) => {
      apiCalls++;
      await new Promise((resolve) => setTimeout(resolve, 300));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          status: 200,
          message: 'EMAIL_SENT',
          referenceId: 'DEV-20261028-DBLC',
        }),
      });
    });

    await page.goto('/contact');
    await page.getByLabel('Prénom *').fill('Laurent');
    await page.getByLabel('Entreprise / Organisation *').fill('SESSAD Occitanie');
    await page.getByLabel('Email professionnel *').fill('direction@sessad-occitanie.fr');
    await page
      .getByLabel('Description de votre besoin ou contexte *')
      .fill('Application mobile pour nos éducateurs en tournée.');
    await page.getByRole('checkbox').check();

    const submitButton = page.getByRole('button', { name: /Transmettre mon projet/i });
    await submitButton.dblclick();

    await expect(
      page.getByText('Votre demande de projet a bien été transmise à notre équipe.')
    ).toBeVisible();
    expect(apiCalls).toBe(1);
  });

  test('Erreur serveur (500) et Erreur réseau : aucun crash React, message propre et possibilité de réessayer', async ({
    page,
  }) => {
    let attempt = 0;
    await page.route('**/api/contact', async (route) => {
      attempt++;
      if (attempt === 1) {
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({
            success: false,
            status: 500,
            message: 'EMAIL_SENDING_FAILED',
            error:
              'Une erreur est survenue lors de l’envoi de votre demande. Veuillez réessayer dans quelques instants.',
          }),
        });
      } else if (attempt === 2) {
        await route.abort('failed');
      } else {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            success: true,
            status: 200,
            message: 'EMAIL_SENT',
            referenceId: 'DEV-20261028-RTRY',
          }),
        });
      }
    });

    await page.goto('/contact');
    await page.getByLabel('Prénom *').fill('Marc');
    await page.getByLabel('Entreprise / Organisation *').fill('ADAPEI 66');
    await page.getByLabel('Email professionnel *').fill('responsable@adapei.fr');
    await page
      .getByLabel('Description de votre besoin ou contexte *')
      .fill('Refonte de notre extranet associatif et automatisation des plannings.');
    await page.getByRole('checkbox').check();

    const submitButton = page.getByRole('button', { name: /Transmettre mon projet/i });

    // Tentative 1 -> Erreur 500
    await submitButton.click();
    await expect(
      page.getByText(/Une erreur est survenue lors de l’envoi de votre demande/i)
    ).toBeVisible();
    await expect(submitButton).toBeEnabled();

    // Tentative 2 -> Coupure réseau
    await submitButton.click();
    await expect(page.getByText(/Erreur de connexion/i)).toBeVisible();
    await expect(submitButton).toBeEnabled();

    // Tentative 3 -> Succès après réessai
    await submitButton.click();
    await expect(
      page.getByText('Votre demande de projet a bien été transmise à notre équipe.')
    ).toBeVisible();
  });

  test('Hunter Email Verifier (Section 28) : refuse test@test.fr, toto@tata.com, disposable, unknown, accept_all, timeout puis accepte contact@entreprise.fr', async ({
    page,
  }) => {
    await page.goto('/contact');

    await page.getByLabel('Prénom *').fill('Sophie');
    await page.getByLabel('Nom', { exact: true }).fill('Bernard');
    await page.getByLabel('Entreprise / Organisation *').fill('IME Les Glycines');
    await page
      .getByLabel('Description de votre besoin ou contexte *')
      .fill('Mise en place d’un portail numérique sécurisé pour notre établissement médico-social.');
    await page.getByRole('checkbox').check();

    const emailInput = page.getByLabel('Email professionnel *');
    const submitButton = page.getByRole('button', { name: /Transmettre mon projet/i });

    // 1. Saisir test@test.fr -> Hunter retourne invalid côté serveur -> Refusé, 0 appel Resend
    await emailInput.fill('test@test.fr');
    await submitButton.click();

    const unverifiedMsg =
      "Cette adresse e-mail n'a pas pu être vérifiée. Vérifiez votre adresse ou utilisez une autre adresse professionnelle.";
    await expect(page.getByText(unverifiedMsg)).toBeVisible();
    await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
    await expect(emailInput).toHaveAttribute('aria-describedby', 'email-error');
    await expect(page.locator('#email-error')).toHaveAttribute('role', 'alert');
    await expect(submitButton).toBeEnabled();

    // 2. Saisir toto@tata.com -> Hunter retourne invalid -> Refusé
    await emailInput.fill('toto@tata.com');
    await submitButton.click();
    await expect(page.getByText(unverifiedMsg)).toBeVisible();

    // 3. Saisir test@temporary-mail.example -> Hunter retourne disposable -> Refusé
    await emailInput.fill('test@temporary-mail.example');
    await submitButton.click();
    await expect(
      page.getByText('Les adresses e-mail temporaires ne sont pas acceptées.')
    ).toBeVisible();

    // 4. Saisir unknown@entreprise.fr -> Hunter retourne unknown -> Refusé
    await emailInput.fill('unknown@entreprise.fr');
    await submitButton.click();
    await expect(page.getByText(unverifiedMsg)).toBeVisible();

    // 5. Saisir accept-all@entreprise.fr -> Hunter retourne accept_all -> Refusé
    await emailInput.fill('accept-all@entreprise.fr');
    await submitButton.click();
    await expect(page.getByText(unverifiedMsg)).toBeVisible();

    // 6. Saisir timeout@entreprise.fr -> Hunter timeout / indisponible -> Message propre 503
    await emailInput.fill('timeout@entreprise.fr');
    await submitButton.click();
    await expect(
      page.getByText(
        'La vérification de votre adresse e-mail est momentanément indisponible. Veuillez réessayer dans quelques instants.'
      )
    ).toBeVisible();
    await expect(submitButton).toBeEnabled();

    // 7. Saisir contact@entreprise.fr -> Hunter retourne valid -> Succès & Appel Resend simulé
    await emailInput.fill('contact@entreprise.fr');
    await submitButton.click();

    await expect(
      page.getByText('Votre demande de projet a bien été transmise à notre équipe.')
    ).toBeVisible();
    await expect(page.getByText(/DEV-\d{8}-[A-Z0-9]{4}/)).toBeVisible();
  });
});

