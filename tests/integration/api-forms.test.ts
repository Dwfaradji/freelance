import assert from 'node:assert';
import { POST as postContact } from '../../src/app/api/contact/route';
import { POST as postNewsletter } from '../../src/app/api/newsletters/route';
import { rateLimiter } from '../../src/lib/security/rateLimit';
import {
  clearRecordedEmailCalls,
  getRecordedEmailCalls,
  setEmailMockHandler,
} from '../../src/emails/send-email';
import {
  clearHunterVerificationCache,
  setHunterMockHandler,
} from '../../src/lib/email/verifyProfessionalEmail';
import { EMAIL_VALIDATION_MESSAGES } from '../../src/lib/validation/email';

process.env.EMAIL_TEST_MODE = 'true';

console.log('================================================================');
console.log('🔌 TESTS D\'INTÉGRATION : ENDPOINTS SERVEUR & MOCK RESEND');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;

async function testAsync(name: string, fn: () => Promise<void>) {
  totalTests++;
  try {
    rateLimiter.reset();
    clearRecordedEmailCalls();
    clearHunterVerificationCache();
    setEmailMockHandler(null);
    setHunterMockHandler(null);
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(err);
    process.exitCode = 1;
  } finally {
    setEmailMockHandler(null);
    setHunterMockHandler(null);
  }
}

async function runIntegrationSuite() {
  // 1. Données invalides -> Resend = 0 appel
  await testAsync('Données invalides (champs requis manquants ou trop courts) -> 400 & Resend 0 appel', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.1',
      },
      body: JSON.stringify({
        firstname: 'A',
        business: '',
        email: 'contact@devevoke.com',
        content: 'abc',
      }),
    });

    const res = await postContact(req);
    const json = await res.json();

    assert.strictEqual(res.status, 400);
    assert.strictEqual(json.success, false);
    assert.strictEqual(
      getRecordedEmailCalls().length,
      0,
      'Resend ne doit jamais être appelé sur des données invalides'
    );
  });

  // 2. Email personnel (contournement UI direct sur /api/contact et /api/newsletters) -> Resend = 0 appel
  await testAsync('Email personnel (gmail, outlook, yahoo, icloud, orange, free) -> 400 & Resend 0 appel', async () => {
    const personalEmails = [
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

    for (let i = 0; i < personalEmails.length; i++) {
      const email = personalEmails[i];
      const reqContact = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-forwarded-for': `203.0.113.${10 + i}`,
        },
        body: JSON.stringify({
          firstname: 'Marie',
          lastname: 'Laurent',
          business: 'Association Médico-Sociale',
          email,
          content: 'Tentative de contournement direct de la validation client.',
        }),
      });

      const resContact = await postContact(reqContact);
      const jsonContact = await resContact.json();
      assert.strictEqual(resContact.status, 400);
      assert.strictEqual(jsonContact.success, false);
      assert.strictEqual(jsonContact.message, 'FREE_EMAIL_PROVIDER');
      assert.strictEqual(
        jsonContact.error,
        EMAIL_VALIDATION_MESSAGES.FREE_PROVIDER
      );

      const reqNl = new Request('http://localhost:3000/api/newsletters', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-forwarded-for': `203.0.113.${50 + i}`,
        },
        body: JSON.stringify({ email }),
      });

      const resNl = await postNewsletter(reqNl);
      const jsonNl = await resNl.json();
      assert.strictEqual(resNl.status, 400);
      assert.strictEqual(jsonNl.success, false);
      assert.strictEqual(
        jsonNl.error,
        EMAIL_VALIDATION_MESSAGES.FREE_PROVIDER
      );
    }

    assert.strictEqual(
      getRecordedEmailCalls().length,
      0,
      'Aucun appel Resend ne doit avoir lieu pour des adresses personnelles'
    );
  });

  // 3. Email jetable -> Resend = 0 appel
  await testAsync('Email temporaire / jetable (yopmail.com) -> 400 & Resend 0 appel', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.99',
      },
      body: JSON.stringify({
        firstname: 'Lucas',
        business: 'IME Les Oliviers',
        email: 'lucas@yopmail.com',
        content: 'Test avec fournisseur jetable.',
      }),
    });

    const res = await postContact(req);
    const json = await res.json();

    assert.strictEqual(res.status, 400);
    assert.strictEqual(json.success, false);
    assert.strictEqual(json.message, 'DISPOSABLE_EMAIL_DOMAIN');
    assert.strictEqual(json.error, EMAIL_VALIDATION_MESSAGES.DISPOSABLE_PROVIDER);
    assert.strictEqual(getRecordedEmailCalls().length, 0);
  });

  // 4. Honeypot déclenché -> Resend = 0 appel
  await testAsync('Honeypot rempli (bot anti-spam) -> réponse feinte & Resend 0 appel', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.100',
      },
      body: JSON.stringify({
        firstname: 'SpamBot',
        business: 'Bot Corp',
        email: 'contact@devevoke.com',
        content: 'Message automatique généré par un robot.',
        website: 'https://malicious-spam.example',
      }),
    });

    const res = await postContact(req);
    const json = await res.json();

    assert.strictEqual(res.status, 200);
    assert.strictEqual(json.success, true);
    assert.ok(String(json.referenceId).startsWith('BOT-'));
    assert.strictEqual(
      getRecordedEmailCalls().length,
      0,
      'Resend ne doit jamais être appelé lorsqu’un honeypot est déclenché'
    );
  });

  // 5. Rate limit dépassé -> HTTP 429 & Resend = 0 appel
  await testAsync('Rate limit dépassé -> HTTP 429, Retry-After & Resend 0 appel lors du blocage', async () => {
    const ip = '203.0.113.120';

    // Consommer le quota pour l'IP (5 requêtes max sur 'contact')
    for (let i = 0; i < 5; i++) {
      rateLimiter.check(ip, 'contact');
    }

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': ip,
      },
      body: JSON.stringify({
        firstname: 'Sophie',
        business: 'SESSAD Horizon',
        email: 'contact@devevoke.com',
        content: 'Nouvelle demande après dépassement du quota.',
      }),
    });

    const res = await postContact(req);
    const json = await res.json();

    assert.strictEqual(res.status, 429);
    assert.strictEqual(json.success, false);
    assert.strictEqual(json.message, 'RATE_LIMIT_EXCEEDED');
    assert.ok(res.headers.get('Retry-After'));
    assert.strictEqual(
      getRecordedEmailCalls().length,
      0,
      'Resend ne doit jamais être appelé lorsque le rate limit bloque la requête'
    );
  });

  // 6. Formulaire valide -> Envoi transactionnel simulé avec vérification des données transmises
  await testAsync('Formulaire valide -> HTTP 200, appel Resend simulé et payload vérifié', async () => {
    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.150',
      },
      body: JSON.stringify({
        firstname: 'Stéphane',
        lastname: 'Martin',
        business: 'Association ADAPEI',
        role: 'Directeur Général',
        email: '  CONTACT@DEVEVOKE.COM  ',
        phone: '06 12 34 56 78',
        projectType: 'Logiciel métier sur-mesure',
        content: 'Nous souhaitons digitaliser le suivi éducatif et logistique de nos 4 établissements.',
        rgpdConsent: true,
        website: '',
      }),
    });

    const res = await postContact(req);
    const json = await res.json();

    assert.strictEqual(res.status, 200);
    assert.strictEqual(json.success, true);
    assert.strictEqual(json.message, 'EMAIL_SENT');
    assert.ok(/^DEV-\d{8}-[A-Z0-9]{4}$/.test(json.referenceId));

    const calls = getRecordedEmailCalls();
    // 1 soumission transactionnelle déclenche l'email interne + l'email de confirmation client
    assert.strictEqual(calls.length, 2);

    const internalCall = calls.find((c) => c.type === 'contact-internal');
    const confirmationCall = calls.find((c) => c.type === 'contact-confirmation');

    assert.ok(internalCall, 'L’email interne doit avoir été préparé');
    assert.ok(confirmationCall, 'L’email de confirmation prospect doit avoir été préparé');
    assert.strictEqual(internalCall.replyTo, 'contact@devevoke.com');
    assert.strictEqual(confirmationCall.to, 'contact@devevoke.com');
    assert.strictEqual(internalCall.referenceId, json.referenceId);
    assert.ok(internalCall.text.includes('Stéphane'));
    assert.ok(internalCall.text.includes('Association ADAPEI'));
  });

  // 7. Simulation d'erreur serveur (500) -> message propre sans fuite de détails techniques
  await testAsync('Erreur serveur simulée (500) -> message propre sans fuite de stack trace ou clé API', async () => {
    setEmailMockHandler(async () => ({
      success: false,
      provider: 'mock',
      error: 'Simulated internal Resend provider outage',
    }));

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.180',
      },
      body: JSON.stringify({
        firstname: 'Claire',
        business: 'IME Les Pins',
        email: 'contact@devevoke.com',
        content: 'Demande de devis pour refonte extranet médico-social.',
      }),
    });

    const res = await postContact(req);
    const json = await res.json();

    assert.strictEqual(res.status, 500);
    assert.strictEqual(json.success, false);
    assert.strictEqual(json.message, 'EMAIL_SENDING_FAILED');
    assert.ok(!JSON.stringify(json).includes('Simulated internal Resend'));
    assert.ok(!JSON.stringify(json).includes('re_'));
  });

  // 8. Section 19 & 27 : Protection anti-bypass sur POST /api/contact avec test@test.fr et toto@tata.com -> 400 & Resend = 0 appel
  await testAsync('Section 19 & 27 : Hunter invalid (test@test.fr, toto@tata.com) -> HTTP 400 & Resend 0 appel', async () => {
    setHunterMockHandler(async () => ({ status: 'invalid' }));

    for (const fakeProEmail of ['test@test.fr', 'toto@tata.com']) {
      const req = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-forwarded-for': '203.0.113.200',
        },
        body: JSON.stringify({
          firstname: 'Thomas',
          business: 'Association Test',
          email: fakeProEmail,
          content: 'Tentative directe API avec domaine inexistant ou boîte invalide.',
        }),
      });

      const res = await postContact(req);
      const json = await res.json();

      assert.strictEqual(res.status, 400);
      assert.strictEqual(json.success, false);
      assert.strictEqual(json.message, 'EMAIL_VERIFICATION_INVALID');
      assert.strictEqual(
        json.error,
        EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL
      );
      assert.deepStrictEqual(json.fieldErrors?.email, [
        EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL,
      ]);
    }

    assert.strictEqual(
      getRecordedEmailCalls().length,
      0,
      'Resend ne doit JAMAIS être appelé lorsque Hunter retourne invalid'
    );
  });

  // 9. Section 27 : Hunter accept_all & unknown -> HTTP 400 & Resend = 0 appel
  await testAsync('Section 27 : Hunter accept_all et unknown -> HTTP 400 & Resend 0 appel', async () => {
    for (const status of ['accept_all', 'unknown'] as const) {
      setHunterMockHandler(async () => ({ status }));

      const req = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-forwarded-for': '203.0.113.205',
        },
        body: JSON.stringify({
          firstname: 'Nadia',
          business: 'ESMS Solidarité',
          email: `contact-${status}@entreprise.fr`,
          content: 'Demande de contact avec domaine accept_all ou unknown.',
        }),
      });

      const res = await postContact(req);
      const json = await res.json();

      assert.strictEqual(res.status, 400);
      assert.strictEqual(json.success, false);
      assert.strictEqual(
        json.error,
        EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL
      );
    }

    assert.strictEqual(
      getRecordedEmailCalls().length,
      0,
      'Resend ne doit JAMAIS être appelé lorsque Hunter retourne accept_all ou unknown'
    );
  });

  // 10. Section 16 & 27 : Hunter indisponible / timeout -> HTTP 503 & Resend = 0 appel (Test CRITIQUE)
  await testAsync('Section 16 & 27 (CRITIQUE) : Hunter indisponible / timeout -> HTTP 503, message propre & Resend 0 appel', async () => {
    setHunterMockHandler(async () => {
      throw new Error('Hunter API HTTP 500 / Timeout');
    });

    const req = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.210',
      },
      body: JSON.stringify({
        firstname: 'Olivier',
        business: 'IME Les Cèdres',
        email: 'contact@entreprise.fr',
        content: 'Demande pendant une indisponibilité temporaire de Hunter.',
      }),
    });

    const res = await postContact(req);
    const json = await res.json();

    assert.strictEqual(res.status, 503);
    assert.strictEqual(json.success, false);
    assert.strictEqual(json.message, 'EMAIL_VERIFICATION_UNAVAILABLE');
    assert.strictEqual(
      json.error,
      EMAIL_VALIDATION_MESSAGES.VERIFICATION_UNAVAILABLE
    );
    // Vérifier qu'aucun détail technique Hunter n'est exposé à l'utilisateur
    assert.ok(!JSON.stringify(json).includes('Hunter'));
    assert.ok(!JSON.stringify(json).includes('Timeout'));
    assert.strictEqual(
      getRecordedEmailCalls().length,
      0,
      'Resend ne doit JAMAIS être appelé lorsque Hunter est indisponible'
    );
  });

  // 11. Section 18 : POST /api/newsletters protégé par Hunter Email Verifier
  await testAsync('Section 18 : POST /api/newsletters refuse test@test.fr via Hunter et n’appelle pas Resend', async () => {
    setHunterMockHandler(async () => ({ status: 'invalid' }));

    const req = new Request('http://localhost:3000/api/newsletters', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.220',
      },
      body: JSON.stringify({
        email: 'test@test.fr',
      }),
    });

    const res = await postNewsletter(req);
    const json = await res.json();

    assert.strictEqual(res.status, 400);
    assert.strictEqual(json.success, false);
    assert.strictEqual(
      json.error,
      EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL
    );
    assert.strictEqual(getRecordedEmailCalls().length, 0);
  });

  console.log('\n================================================================');
  console.log(`🎉 TESTS D'INTÉGRATION API : ${passedTests}/${totalTests} RÉUSSIS`);
  console.log('================================================================\n');
}

runIntegrationSuite().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
