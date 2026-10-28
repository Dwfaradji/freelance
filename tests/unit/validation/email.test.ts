import assert from 'node:assert';
import {
  EMAIL_VALIDATION_MESSAGES,
  getEmailDomain,
  isDisposableEmail,
  isFreeEmailProvider,
  isProfessionalEmail,
  normalizeEmail,
  validateProfessionalEmail,
} from '../../../src/lib/validation/email';
import {
  clearHunterVerificationCache,
  getRecordedHunterCallCount,
  hashEmailForCache,
  verifyProfessionalEmail,
} from '../../../src/lib/email/verifyProfessionalEmail';
import { professionalEmailSchema } from '../../../src/lib/forms/schemas';

console.log('================================================================');
console.log('🧪 TESTS UNITAIRES : VALIDATION DES E-MAILS PROFESSIONNELS (B2B)');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;

function test(name: string, fn: () => void) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

// 1. Adresses professionnelles devant être acceptées
test('Accepte les adresses e-mail professionnelles légitimes (entreprises, ESMS, associations)', () => {
  const validProEmails = [
    'contact@devevoke.com',
    'direction@association-medico-sociale.fr',
    'prenom.nom@entreprise.fr',
    'contact@ime-exemple.fr',
    'contact@cabinet-medical.fr',
    'responsable@adapei.fr',
    'dsi@sessad-occitanie.org',
    'accueil@ehpad-les-pins.asso.fr',
    'equipe+projet@fondation-sante.eu',
    'contact@mygmail-consulting.fr', // Domaine personnalisé contenant le sous-mot "gmail"
    'direction@free-medicosocial.fr', // Domaine personnalisé contenant "free"
  ];

  for (const email of validProEmails) {
    const result = validateProfessionalEmail(email);
    assert.strictEqual(
      result.isValid,
      true,
      `L'adresse professionnelle "${email}" devrait être acceptée`
    );
    assert.strictEqual(result.code, undefined);
    assert.strictEqual(result.message, undefined);
    assert.strictEqual(isProfessionalEmail(email), true);

    const zodParse = professionalEmailSchema.safeParse(email);
    assert.strictEqual(
      zodParse.success,
      true,
      `professionalEmailSchema devrait valider "${email}"`
    );
  }
});

// 2. Fournisseurs grand public / personnels devant être refusés
test('Refuse tous les fournisseurs grand public (Gmail, Outlook, Hotmail, Yahoo, iCloud, Orange, Free, etc.)', () => {
  const rejectedPersonalEmails = [
    'test@gmail.com',
    'test@googlemail.com',
    'test@hotmail.com',
    'test@hotmail.fr',
    'test@outlook.com',
    'test@outlook.fr',
    'test@live.com',
    'test@live.fr',
    'test@msn.com',
    'test@yahoo.com',
    'test@yahoo.fr',
    'test@ymail.com',
    'test@icloud.com',
    'test@me.com',
    'test@mac.com',
    'test@aol.com',
    'test@proton.me',
    'test@protonmail.com',
    'test@gmx.com',
    'test@gmx.fr',
    'test@mail.com',
    'test@orange.fr',
    'test@wanadoo.fr',
    'test@free.fr',
    'test@sfr.fr',
    'test@neuf.fr',
    'test@laposte.net',
  ];

  for (const email of rejectedPersonalEmails) {
    const result = validateProfessionalEmail(email);
    assert.strictEqual(
      result.isValid,
      false,
      `L'adresse personnelle "${email}" doit être refusée`
    );
    assert.strictEqual(result.code, 'FREE_EMAIL_PROVIDER');
    assert.strictEqual(
      result.message,
      EMAIL_VALIDATION_MESSAGES.FREE_PROVIDER
    );
    assert.strictEqual(isFreeEmailProvider(email), true);
    assert.strictEqual(isProfessionalEmail(email), false);

    const zodParse = professionalEmailSchema.safeParse(email);
    assert.strictEqual(zodParse.success, false);
    assert.strictEqual(
      zodParse.error?.issues[0]?.message,
      EMAIL_VALIDATION_MESSAGES.FREE_PROVIDER
    );
  }
});

// 3. Adresses jetables / temporaires devant être refusées
test('Refuse les fournisseurs d’e-mails temporaires / jetables', () => {
  const disposableEmails = [
    'temp@yopmail.com',
    'temp@yopmail.fr',
    'user@mailinator.com',
    'user@guerrillamail.com',
    'user@10minutemail.com',
    'user@tempmail.com',
    'user@temp-mail.org',
    'user@trashmail.com',
    'user@sharklasers.com',
    'user@jetable.org',
    'user@maildrop.cc',
  ];

  for (const email of disposableEmails) {
    const result = validateProfessionalEmail(email);
    assert.strictEqual(
      result.isValid,
      false,
      `L'adresse jetable "${email}" doit être refusée`
    );
    assert.strictEqual(result.code, 'DISPOSABLE_EMAIL_DOMAIN');
    assert.strictEqual(result.message, EMAIL_VALIDATION_MESSAGES.DISPOSABLE_PROVIDER);
    assert.strictEqual(isDisposableEmail(email), true);
    assert.strictEqual(isProfessionalEmail(email), false);
  }
});

// 4. Normalisation (espaces, majuscules, caractères invisibles)
test('Normalise correctement les espaces et la casse (ex: " CONTACT@ENTREPRISE.FR ")', () => {
  const raw = '  CONTACT@ENTREPRISE.FR  ';
  assert.strictEqual(normalizeEmail(raw), 'contact@entreprise.fr');
  assert.strictEqual(getEmailDomain(raw), 'entreprise.fr');

  const validation = validateProfessionalEmail(raw);
  assert.strictEqual(validation.isValid, true);
  assert.strictEqual(validation.normalizedEmail, 'contact@entreprise.fr');
  assert.strictEqual(validation.domain, 'entreprise.fr');

  const zodParse = professionalEmailSchema.safeParse(raw);
  assert.strictEqual(zodParse.success, true);
  assert.strictEqual(zodParse.data, 'contact@entreprise.fr');

  // Vérifie que la normalisation ne permet pas de contourner le blocage Gmail
  const messyPersonal = '  TEST@GMAIL.COM  ';
  const personalValidation = validateProfessionalEmail(messyPersonal);
  assert.strictEqual(personalValidation.isValid, false);
  assert.strictEqual(personalValidation.code, 'FREE_EMAIL_PROVIDER');
});

// 5. E-mails malformés et cas limites
test('Rejette systématiquement les e-mails malformés, vides ou hors limites RFC', () => {
  const malformedInputs: unknown[] = [
    'abc',
    'abc@',
    '@entreprise.fr',
    'abc@entreprise',
    'abc@@entreprise.fr',
    '',
    '    ',
    null,
    undefined,
    12345,
    '.contact@entreprise.fr',
    'contact.@entreprise.fr',
    'prenom..nom@entreprise.fr',
    'contact@-entreprise.fr',
    'contact@entreprise-.fr',
    'contact@entreprise..fr',
    'contact@entreprise.123',
    'contact@entreprise.c',
    'contact\r\n@entreprise.fr',
    `${'a'.repeat(65)}@entreprise.fr`,
    `contact@${'a'.repeat(250)}.fr`,
  ];

  for (const input of malformedInputs) {
    const result = validateProfessionalEmail(input);
    assert.strictEqual(
      result.isValid,
      false,
      `L'entrée malformée "${String(input).slice(0, 30)}" doit être rejetée`
    );
    assert.ok(
      result.code === 'INVALID_EMAIL_SYNTAX' || result.code === 'EMAIL_REQUIRED',
      `Code d'erreur inattendu: ${result.code}`
    );
    assert.strictEqual(
      result.message,
      EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX
    );
    assert.strictEqual(getEmailDomain(input), null);
    assert.strictEqual(isProfessionalEmail(input), false);
  }
});

// ============================================================================
// 6. TESTS UNITAIRES HUNTER EMAIL VERIFIER (SECTION 26)
// ============================================================================
async function testAsync(name: string, fn: () => Promise<void>) {
  totalTests++;
  try {
    clearHunterVerificationCache();
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

async function runHunterUnitTests() {
  console.log('\n--- Vérification Serveur Hunter Email Verifier (Section 26) ---');

  // Test 1 : test@test.fr -> Hunter { status: "invalid" } -> REJECT
  await testAsync('Test 1 (Section 26) : test@test.fr avec Hunter { status: "invalid" } -> REJECT', async () => {
    const result = await verifyProfessionalEmail('test@test.fr', {
      hunterVerifier: async () => ({ status: 'invalid' }),
    });
    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.status, 'invalid');
    assert.strictEqual(
      result.userMessage,
      "Cette adresse e-mail n'a pas pu être vérifiée. Vérifiez votre adresse ou utilisez une autre adresse professionnelle."
    );
  });

  // Test 2 : toto@tata.com -> Hunter { status: "invalid" } -> REJECT
  await testAsync('Test 2 (Section 26) : toto@tata.com avec Hunter { status: "invalid" } -> REJECT', async () => {
    const result = await verifyProfessionalEmail('toto@tata.com', {
      hunterVerifier: async () => ({ status: 'invalid' }),
    });
    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.status, 'invalid');
    assert.strictEqual(
      result.userMessage,
      "Cette adresse e-mail n'a pas pu être vérifiée. Vérifiez votre adresse ou utilisez une autre adresse professionnelle."
    );
  });

  // Test 3 : contact@entreprise.fr -> Hunter { status: "valid", score: 100, webmail: false, disposable: false, mx_records: true, smtp_check: true } -> ACCEPT
  await testAsync('Test 3 (Section 26) : contact@entreprise.fr avec Hunter valid (score 100) -> ACCEPT', async () => {
    const result = await verifyProfessionalEmail('  CONTACT@ENTREPRISE.FR  ', {
      hunterVerifier: async () => ({
        status: 'valid',
        score: 100,
        webmail: false,
        disposable: false,
        mx_records: true,
        smtp_check: true,
      }),
    });
    assert.strictEqual(result.valid, true);
    assert.strictEqual(result.normalizedEmail, 'contact@entreprise.fr');
    assert.strictEqual(result.status, 'valid');
    assert.strictEqual(result.score, 100);
  });

  // Test 4 : contact@gmail.com -> REJECT (bloqué localement sans consommer de crédit Hunter)
  await testAsync('Test 4 (Section 26) : contact@gmail.com -> REJECT (sans appel Hunter)', async () => {
    const result = await verifyProfessionalEmail('contact@gmail.com', {
      hunterVerifier: async () => {
        throw new Error('Hunter ne doit pas être appelé pour gmail.com');
      },
    });
    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.status, 'personal');
    assert.strictEqual(
      result.userMessage,
      "Merci d'utiliser votre adresse e-mail professionnelle."
    );
    assert.strictEqual(getRecordedHunterCallCount(), 0);
  });

  // Test 5 : test@temporary-mail.example -> Hunter { status: "disposable", disposable: true } -> REJECT
  await testAsync('Test 5 (Section 26) : test@temporary-mail.example avec Hunter { status: "disposable", disposable: true } -> REJECT', async () => {
    const result = await verifyProfessionalEmail('test@temporary-mail.example', {
      hunterVerifier: async () => ({
        status: 'disposable',
        disposable: true,
      }),
    });
    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.status, 'disposable');
    assert.strictEqual(
      result.userMessage,
      'Les adresses e-mail temporaires ne sont pas acceptées.'
    );
  });

  // Test 6 : contact@entreprise.fr -> Hunter { status: "accept_all" } -> REJECT
  await testAsync('Test 6 (Section 26) : contact@entreprise.fr avec Hunter { status: "accept_all" } -> REJECT (politique stricte)', async () => {
    const result = await verifyProfessionalEmail('contact@entreprise.fr', {
      hunterVerifier: async () => ({
        status: 'accept_all',
      }),
    });
    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.status, 'accept_all');
    assert.strictEqual(
      result.userMessage,
      "Cette adresse e-mail n'a pas pu être vérifiée. Vérifiez votre adresse ou utilisez une autre adresse professionnelle."
    );
  });

  // Test 7 : Hunter { status: "unknown" } -> REJECT
  await testAsync('Test 7 (Section 26) : contact@entreprise.fr avec Hunter { status: "unknown" } -> REJECT', async () => {
    const result = await verifyProfessionalEmail('contact@entreprise.fr', {
      hunterVerifier: async () => ({
        status: 'unknown',
      }),
    });
    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.status, 'unknown');
    assert.strictEqual(
      result.userMessage,
      "Cette adresse e-mail n'a pas pu être vérifiée. Vérifiez votre adresse ou utilisez une autre adresse professionnelle."
    );
  });

  // Test 8 : Adresses génériques B2B (contact@, info@, direction@, secretariat@, administration@) acceptées si Hunter = valid
  await testAsync('Section 13 : Accepte les adresses génériques B2B (contact@, info@, direction@, secretariat@, administration@) validées par Hunter', async () => {
    const genericEmails = [
      'contact@entreprise.fr',
      'info@entreprise.fr',
      'direction@association.org',
      'secretariat@ime.fr',
      'administration@sessad.fr',
    ];

    for (const email of genericEmails) {
      const res = await verifyProfessionalEmail(email, {
        hunterVerifier: async () => ({
          status: 'valid',
          score: 95,
          regexp: true,
          disposable: false,
          webmail: false,
          mx_records: true,
          smtp_check: true,
        }),
      });
      assert.strictEqual(res.valid, true, `${email} doit être accepté`);
      assert.strictEqual(res.status, 'valid');
    }
  });

  // Test 9 : Score Hunter inférieur au seuil HUNTER_MIN_SCORE (80) -> REJECT
  await testAsync('Section 12 : Refuse une adresse dont le score Hunter est inférieur à HUNTER_MIN_SCORE (ex: 55 < 80)', async () => {
    const res = await verifyProfessionalEmail('contact@risque.fr', {
      minScore: 80,
      hunterVerifier: async () => ({
        status: 'valid',
        score: 55,
        regexp: true,
        disposable: false,
        webmail: false,
        mx_records: true,
      }),
    });
    assert.strictEqual(res.valid, false);
    assert.strictEqual(res.status, 'invalid');
    assert.strictEqual(res.reason, 'hunter_score_below_threshold');
  });

  // Test 10 : Timeout / erreur Hunter -> status = "error", message propre en français
  await testAsync('Section 16 : Timeout ou indisponibilité Hunter -> status "error" et message utilisateur non-technique', async () => {
    const res = await verifyProfessionalEmail('contact@entreprise.fr', {
      apiKey: 'test_key',
      timeoutMs: 25,
      fetchFn: ((_url: string, init?: RequestInit) =>
        new Promise((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () => {
            const abortErr = new Error('The operation was aborted');
            abortErr.name = 'AbortError';
            reject(abortErr);
          });
        })) as typeof fetch,
    });
    assert.strictEqual(res.valid, false);
    assert.strictEqual(res.status, 'error');
    assert.strictEqual(res.reason, 'hunter_timeout');
    assert.strictEqual(
      res.userMessage,
      'La vérification de votre adresse e-mail est momentanément indisponible. Veuillez réessayer dans quelques instants.'
    );
  });

  // Test 11 : Hachage SHA-256 RGPD du cache (ne contient jamais l'email en clair)
  await testAsync('Section 21 & 22 : hashEmailForCache produit un condensat SHA-256 irréversible sans e-mail en clair', async () => {
    const rawEmail = 'prenom.nom@entreprise.fr';
    const digest = hashEmailForCache(rawEmail);
    assert.strictEqual(digest.length, 64);
    assert.ok(!digest.includes('prenom'));
    assert.ok(!digest.includes('entreprise'));
  });

  console.log('\n================================================================');
  console.log(`🎉 TESTS UNITAIRES EMAIL : ${passedTests}/${totalTests} RÉUSSIS`);
  console.log('================================================================\n');
}

void runHunterUnitTests();
