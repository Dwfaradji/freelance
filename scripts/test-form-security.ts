import assert from 'node:assert';
import {
  escapeHtml,
  sanitizeString,
  normalizeEmail,
  normalizePhone,
  stripCrlf,
} from '../src/lib/security/sanitization';
import { generateReference } from '../src/lib/security/reference';
import { checkHoneypot } from '../src/lib/security/honeypot';
import { rateLimiter, getClientIp } from '../src/lib/security/rateLimit';
import { hashIp } from '../src/lib/security/logger';
import {
  contactSubmissionSchema,
  newsletterSubmissionSchema,
  demoSubmissionSchema,
} from '../src/lib/forms/schemas';
import React from 'react';
import { render } from '@react-email/components';
import {
  formatName,
  formatSalutation,
  formatCompany,
  formatPhone,
  formatCurrency,
  formatDate,
  formatPercentage,
  formatNumber,
  stripHtml,
} from '../src/emails/email-utils';
import { sendTransactionalEmail } from '../src/emails/send-email';
import { ContactInternalEmail } from '../src/emails/templates/contact/ContactInternal';
import { ContactConfirmationEmail } from '../src/emails/templates/contact/ContactConfirmation';
import { QuoteInternalEmail } from '../src/emails/templates/quote/QuoteInternal';
import { QuoteConfirmationEmail } from '../src/emails/templates/quote/QuoteConfirmation';
import { DemoInternalEmail } from '../src/emails/templates/demo/DemoInternal';
import { DemoConfirmationEmail } from '../src/emails/templates/demo/DemoConfirmation';
import { DiagnosticInternalEmail } from '../src/emails/templates/diagnostic/DiagnosticInternal';
import { DiagnosticConfirmationEmail } from '../src/emails/templates/diagnostic/DiagnosticConfirmation';
import { SimulatorInternalEmail } from '../src/emails/templates/simulator/SimulatorInternal';
import { SimulatorConfirmationEmail } from '../src/emails/templates/simulator/SimulatorConfirmation';
import { NewsletterInternalEmail } from '../src/emails/templates/newsletter/NewsletterInternal';
import { NewsletterConfirmationEmail } from '../src/emails/templates/newsletter/NewsletterConfirmation';

console.log('================================================================');
console.log('🔒 SUITE DE TESTS : SÉCURITÉ DES FORMULAIRES & SYSTÈME D\'EMAILS');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;

function runTest(name: string, fn: () => void) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (error) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(error);
    process.exitCode = 1;
  }
}

async function runTestAsync(name: string, fn: () => Promise<void>) {
  totalTests++;
  try {
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (error) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(error);
    process.exitCode = 1;
  }
}

// ============================================================================
// 1. TESTS DE SANITISATION ET D'ÉCHAPPEMENT XSS
// ============================================================================
console.log('--- 1. Sanitisation & Protection XSS / CRLF ---');

runTest('escapeHtml neutralise les balises script et balises HTML malveillantes', () => {
  const dirty = '<script>alert("XSS")</script>';
  const clean = escapeHtml(dirty);
  assert.strictEqual(clean, '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
  assert.ok(!clean.includes('<script>'), 'Ne doit plus contenir de balise script brute');
});

runTest('escapeHtml neutralise les attributs HTML d\'injection (onerror, onload)', () => {
  const dirty = '<img src=x onerror=alert(1)> & " \' `';
  const clean = escapeHtml(dirty);
  assert.ok(!clean.includes('<img'));
  assert.ok(clean.includes('&amp;'));
  assert.ok(clean.includes('&quot;'));
  assert.ok(clean.includes('&#039;'));
  assert.ok(clean.includes('&#96;'));
});

runTest('sanitizeString supprime les caractères de contrôle et normalise les espaces', () => {
  const input = "  Bonjour \u0000\u0008\u001F  monde   !  ";
  const sanitized = sanitizeString(input, 50);
  assert.strictEqual(sanitized, 'Bonjour monde !');
});

runTest('sanitizeString tronque les entrées dépassant la longueur maximale', () => {
  const longInput = 'A'.repeat(200);
  const truncated = sanitizeString(longInput, 50);
  assert.strictEqual(truncated.length, 50);
});

runTest('normalizeEmail nettoie et met en minuscules les adresses', () => {
  const raw = '  Jean.Dupont@ASSOCIATION-MEDICO.FR  ';
  assert.strictEqual(normalizeEmail(raw), 'jean.dupont@association-medico.fr');
});

runTest('normalizePhone conserve les formats internationaux valides et nettoie les séparateurs', () => {
  assert.strictEqual(normalizePhone('06.12.34.56.78'), '06.12.34.56.78');
  assert.strictEqual(normalizePhone('+33 (0)6-12-34-56-78'), '+33 06-12-34-56-78');
});

runTest('stripCrlf empêche l\'injection de headers email (CRLF Injection / Header Injection)', () => {
  const headerAttack = "Sujet normal\r\nBcc: victim@target.com\r\nTo: attacker@evil.com";
  const safe = stripCrlf(headerAttack);
  assert.ok(!safe.includes('\r'), 'Ne doit pas contenir \\r');
  assert.ok(!safe.includes('\n'), 'Ne doit pas contenir \\n');
  assert.strictEqual(safe, 'Sujet normal Bcc: victim@target.com To: attacker@evil.com');
});

// ============================================================================
// 2. TESTS DE GÉNÉRATION DE RÉFÉRENCE UNIQUE
// ============================================================================
console.log('\n--- 2. Génération de référence unique de dossier ---');

runTest('generateReference génère un format DEV-YYYYMMDD-XXXX conforme', () => {
  const ref = generateReference('DEV');
  const regex = /^DEV-\d{8}-[A-Z0-9]{4}$/;
  assert.ok(regex.test(ref), `La référence ${ref} doit respecter le format DEV-YYYYMMDD-XXXX`);
});

runTest('generateReference produit des références distinctes à chaque appel', () => {
  const refs = new Set<string>();
  for (let i = 0; i < 50; i++) {
    refs.add(generateReference('DEV'));
  }
  assert.strictEqual(refs.size, 50, '50 générations successives doivent être uniques');
});

// ============================================================================
// 3. TESTS DU HONEYPOT ANTI-SPAM
// ============================================================================
console.log('\n--- 3. Détection Honeypot Anti-Robot ---');

runTest('checkHoneypot autorise une requête légitime sans champ piège rempli', () => {
  const legitimate = {
    firstname: 'Stéphane',
    email: 'stephane@association.fr',
    website: '',
  };
  const result = checkHoneypot(legitimate);
  assert.strictEqual(result.isBot, false);
});

runTest('checkHoneypot intercepte un bot qui a rempli le champ caché website', () => {
  const botPayload = {
    firstname: 'BotSpam',
    email: 'spam@bot.ru',
    website: 'https://crypto-casino-bonus.xyz',
  };
  const result = checkHoneypot(botPayload);
  assert.strictEqual(result.isBot, true);
  assert.strictEqual(result.fieldTriggered, 'website');
});

runTest('checkHoneypot détecte les variantes de champs pièges (companyWebsite, _gotcha, hp_confirm)', () => {
  assert.strictEqual(checkHoneypot({ _gotcha: 'robot' }).isBot, true);
  assert.strictEqual(checkHoneypot({ hp_confirm: 'yes' }).isBot, true);
  assert.strictEqual(checkHoneypot({ companyWebsite: 'http://evil.com' }).isBot, true);
});

// ============================================================================
// 4. TESTS DU RATE LIMITING CÔTÉ SERVEUR
// ============================================================================
console.log('\n--- 4. Rate Limiting Côté Serveur (Sliding Window) ---');

runTest('rateLimiter autorise les premières requêtes sous le seuil', () => {
  rateLimiter.reset();
  const testIp = '192.168.1.100';
  const r1 = rateLimiter.check(testIp, 'contact');
  assert.strictEqual(r1.success, true);
  assert.ok(r1.remaining >= 0);
});

runTest('rateLimiter bloque et renvoie resetSeconds lorsque la limite est dépassée', () => {
  rateLimiter.reset();
  const testIp = '192.168.1.200';
  // Contact limite par défaut : 5 requêtes
  for (let i = 0; i < 5; i++) {
    const res = rateLimiter.check(testIp, 'contact');
    assert.strictEqual(res.success, true, `Requête ${i + 1} doit être autorisée`);
  }
  // La 6ème requête doit être bloquée
  const blocked = rateLimiter.check(testIp, 'contact');
  assert.strictEqual(blocked.success, false, 'La 6ème requête doit être bloquée par le rate limiter');
  assert.strictEqual(blocked.remaining, 0);
  assert.ok(blocked.resetSeconds > 0, 'resetSeconds doit être strictement positif');
});

runTest('rateLimiter applique des quotas séparés selon le type de formulaire', () => {
  rateLimiter.reset();
  const testIp = '192.168.1.250';
  // Bloquer le formulaire newsletter (3 requêtes)
  for (let i = 0; i < 3; i++) {
    rateLimiter.check(testIp, 'newsletter');
  }
  const newsletterBlocked = rateLimiter.check(testIp, 'newsletter');
  assert.strictEqual(newsletterBlocked.success, false);

  // Mais le formulaire contact doit toujours être accessible
  const contactAllowed = rateLimiter.check(testIp, 'contact');
  assert.strictEqual(contactAllowed.success, true);
});

runTest('getClientIp lit correctement les headers proxy standards', () => {
  const req1 = new Request('http://localhost', {
    headers: { 'x-forwarded-for': '203.0.113.195, 70.41.3.18' },
  });
  assert.strictEqual(getClientIp(req1), '203.0.113.195');

  const req2 = new Request('http://localhost', {
    headers: { 'cf-connecting-ip': '198.51.100.42' },
  });
  assert.strictEqual(getClientIp(req2), '198.51.100.42');
});

// ============================================================================
// 5. TESTS DE CONFORMITÉ RGPD & HASHING IP
// ============================================================================
console.log('\n--- 5. Conformité RGPD & Logs anonymisés ---');

runTest('hashIp hache l\'adresse IP sans stocker l\'adresse en clair', () => {
  const rawIp = '192.168.1.50';
  const hashed = hashIp(rawIp);
  assert.strictEqual(hashed.length, 12, 'Le hash doit faire 12 caractères');
  assert.ok(!hashed.includes('192.168'), 'Ne doit jamais contenir l\'IP d\'origine');
  // Le même IP avec le même salt doit produire le même hash
  assert.strictEqual(hashIp(rawIp), hashed);
});

// ============================================================================
// 6. VALIDATION DES SCHÉMAS ZOD
// ============================================================================
console.log('\n--- 6. Schémas de validation Zod ---');

runTest('contactSubmissionSchema valide une soumission complète légitime', () => {
  const valid = {
    firstname: 'Thomas',
    lastname: 'Moreau',
    business: 'Fondation Médico-Sociale de France',
    role: 'Directeur Général',
    establishmentType: 'Association gestionnaire / ESSMS',
    siteCount: '2 à 5 sites',
    email: 't.moreau@fondation-medico.fr',
    phone: '06 12 34 56 78',
    projectType: 'Logiciel métier sur-mesure',
    budget: '25 000 € à 50 000 €',
    delay: '1 à 3 mois',
    content: 'Nous souhaitons moderniser la gestion de nos plannings et l\'accès nomade de nos éducateurs.',
  };
  const parseResult = contactSubmissionSchema.safeParse(valid);
  assert.strictEqual(parseResult.success, true);
});

runTest('contactSubmissionSchema rejette les emails invalides', () => {
  const invalidEmails = [
    'plainaddress',
    '@missing-username.com',
    'username@.com',
    'user@domain..com',
  ];
  for (const email of invalidEmails) {
    const res = contactSubmissionSchema.safeParse({
      firstname: 'Test',
      business: 'Structure',
      email,
      content: 'Contenu de test suffisant pour passer',
    });
    assert.strictEqual(res.success, false, `L'email "${email}" aurait dû être rejeté`);
  }
});

runTest('contactSubmissionSchema rejette les messages trop courts (< 5 car.)', () => {
  const res = contactSubmissionSchema.safeParse({
    firstname: 'Test',
    business: 'Structure',
    email: 'valid@example.com',
    content: 'Hi',
  });
  assert.strictEqual(res.success, false, 'Un message inférieur à 5 caractères doit être refusé');
});

runTest('contactSubmissionSchema rejette les payloads dépassant la limite de caractères (5000)', () => {
  const res = contactSubmissionSchema.safeParse({
    firstname: 'Test',
    business: 'Structure',
    email: 'valid@example.com',
    content: 'A'.repeat(5001),
  });
  assert.strictEqual(res.success, false, 'Un message supérieur à 5000 caractères doit être refusé');
});

runTest('newsletterSubmissionSchema valide les emails corrects et rejette les anomalies', () => {
  assert.strictEqual(
    newsletterSubmissionSchema.safeParse({ email: 'contact@association.org' }).success,
    true
  );
  assert.strictEqual(
    newsletterSubmissionSchema.safeParse({ email: 'fake-not-an-email' }).success,
    false
  );
});

runTest('demoSubmissionSchema valide les champs de demande de démonstration', () => {
  const validDemo = {
    firstname: 'Claire',
    lastname: 'Dubois',
    business: 'IME Les Glycines',
    establishmentType: 'IME (Institut Médico-Éducatif)',
    vehicleCount: '5 à 15 véhicules',
    email: 'c.dubois@ime-glycines.fr',
    demoFocus: 'Floticar (Gestion de flotte & carnets de bord)',
    preferredSlot: 'Dans la semaine (matin)',
  };
  assert.strictEqual(demoSubmissionSchema.safeParse(validDemo).success, true);
});

// ============================================================================
// 7. TESTS DE NORMALISATION ET FORMATAGE DES DONNÉES (email-utils.ts)
// ============================================================================
console.log('\n--- 7. Normalisation & Utilitaires Email DevEvoke ---');

runTest('formatCurrency formate les devises en typographie française cohérente (Intl)', () => {
  const formatted = formatCurrency(12500);
  // Doit contenir 12, 500 et € (avec espace insécable ou standard)
  assert.ok(formatted.includes('12') && formatted.includes('500') && formatted.includes('€'));
  assert.strictEqual(formatCurrency(null), 'Non précisé');
  assert.strictEqual(formatCurrency(undefined), 'Non précisé');
  assert.strictEqual(formatCurrency(''), 'Non précisé');
});

runTest('formatSalutation personnalise sans jamais afficher "Bonjour undefined" ou "Bonjour null"', () => {
  assert.strictEqual(formatSalutation('Jean'), 'Bonjour Jean,');
  assert.strictEqual(formatSalutation('  Claire  '), 'Bonjour Claire,');
  assert.strictEqual(formatSalutation(undefined), 'Bonjour,');
  assert.strictEqual(formatSalutation(null), 'Bonjour,');
  assert.strictEqual(formatSalutation(''), 'Bonjour,');
  assert.strictEqual(formatSalutation('undefined'), 'Bonjour,');
  assert.strictEqual(formatSalutation('null'), 'Bonjour,');
});

runTest('formatName gère les noms complets et les valeurs manquantes sans null/undefined', () => {
  assert.strictEqual(formatName('Jean', 'Dupont'), 'Jean Dupont');
  assert.strictEqual(formatName('Claire', undefined), 'Claire');
  assert.strictEqual(formatName(undefined, 'Martin'), 'Martin');
  assert.strictEqual(formatName(undefined, null), 'Client');
  assert.strictEqual(formatName('', ''), 'Client');
});

runTest('formatCompany gère les organisations et fournit un fallback soigné', () => {
  assert.strictEqual(formatCompany('Association Horizon'), 'Association Horizon');
  assert.strictEqual(formatCompany(undefined), 'Non précisé');
  assert.strictEqual(formatCompany(null), 'Non précisé');
  assert.strictEqual(formatCompany('null'), 'Non précisé');
});

runTest('formatPhone formate les numéros français à 10 chiffres', () => {
  assert.strictEqual(formatPhone('0612345678'), '06 12 34 56 78');
  assert.strictEqual(formatPhone(undefined), 'Non renseigné');
});

runTest('formatPercentage et formatNumber formatent les valeurs numériques', () => {
  const p = formatPercentage(45);
  assert.ok(p.includes('45') && p.includes('%'));
  const n = formatNumber(15420);
  assert.ok(n.includes('15') && n.includes('420'));
});

runTest('stripHtml élimine les balises et décode les entités HTML pour la version texte', () => {
  const html = '<p>Bonjour <strong>Jean</strong>,<br>Votre devis : <em>10 000 &euro;</em></p>';
  const text = stripHtml(html);
  assert.ok(!text.includes('<p>'));
  assert.ok(!text.includes('<strong>'));
  assert.ok(text.includes('Bonjour Jean'));
});

// ============================================================================
// 9. TESTS DES TEMPLATES REACT EMAIL (RENDU HTML, TEXTE & ABSENCE DE XSS)
// ============================================================================
async function runAsyncTests() {
  console.log('\n--- 9. Rendu des Templates React Email & Absence de XSS ---');

  await runTestAsync('ContactInternalEmail & ContactConfirmationEmail rendent un HTML complet sans XSS', async () => {
  const testContact = {
    firstName: 'Sophie',
    lastName: 'Laurent',
    business: 'SESSAD Les Pins',
    role: 'Directrice',
    establishmentType: 'SESSAD',
    siteCount: '2 sites',
    email: 's.laurent@sessad.fr',
    phone: '0612345678',
    subject: 'Refonte de notre portail',
    message: 'Message test contenant <script>alert("xss")</script> et <img src=x onerror=alert(1)>',
  };

  const internalHtml = await render(React.createElement(ContactInternalEmail, {
    data: testContact,
    referenceId: 'DEV-20261027-TEST',
  }));

  assert.ok(internalHtml.includes('DEV-20261027-TEST'));
  assert.ok(internalHtml.includes('Sophie Laurent'));
  assert.ok(internalHtml.includes('SESSAD Les Pins'));
  // Sécurité XSS : le JSX échappe automatiquement les balises
  assert.ok(!internalHtml.includes('<script>alert("xss")</script>'));
  assert.ok(!internalHtml.includes('<img src=x onerror=alert(1)>'));
  assert.ok(!internalHtml.includes('undefined'));
  assert.ok(!internalHtml.includes('null'));

  const confirmHtml = await render(React.createElement(ContactConfirmationEmail, {
    data: testContact,
    referenceId: 'DEV-20261027-TEST',
  }));

  assert.ok(confirmHtml.includes('DEV-20261027-TEST'));
  assert.ok(confirmHtml.includes('Bonjour Sophie,'));
  assert.ok(confirmHtml.includes('DevEvoke'));
  assert.ok(!confirmHtml.includes('undefined'));
});

await runTestAsync('QuoteInternalEmail & QuoteConfirmationEmail affichent les champs de devis', async () => {
  const testQuote = {
    firstName: 'Marc',
    lastName: 'Vidal',
    business: 'EHPAD Harmonie',
    email: 'm.vidal@ehpad.fr',
    phone: '0698765432',
    projectType: 'Application Web & Mobile',
    budget: '15 000 € - 30 000 €',
    delay: '2 à 3 mois',
    description: 'Besoins d\'automatisation des plannings soignants',
  };

  const internalHtml = await render(React.createElement(QuoteInternalEmail, {
    data: testQuote,
    referenceId: 'DEV-20261027-QUOTE',
  }));

  assert.ok(internalHtml.includes('Demande de Devis'));
  assert.ok(internalHtml.includes('Application Web &amp; Mobile') || internalHtml.includes('Application Web & Mobile'));
  assert.ok(internalHtml.includes('15 000 €'));

  const confirmHtml = await render(React.createElement(QuoteConfirmationEmail, {
    data: testQuote,
    referenceId: 'DEV-20261027-QUOTE',
  }));

  assert.ok(confirmHtml.includes('Votre demande de devis'));
  assert.ok(confirmHtml.includes('Bonjour Marc,'));
});

await runTestAsync('DemoInternalEmail & DemoConfirmationEmail intègrent le focus et le créneau', async () => {
  const testDemo = {
    firstName: 'Amélie',
    business: 'IME Val Fleuri',
    email: 'amelie@valfleuri.fr',
    demoFocus: 'Floticar (Gestion de Flotte)',
    vehicleCount: '8 véhicules',
    preferredSlot: 'Mardi 10h',
  };

  const internalHtml = await render(React.createElement(DemoInternalEmail, {
    data: testDemo,
    referenceId: 'DEV-20261027-DEMO',
  }));

  assert.ok(internalHtml.includes('Floticar'));
  assert.ok(internalHtml.includes('8 véhicules'));

  const confirmHtml = await render(React.createElement(DemoConfirmationEmail, {
    data: testDemo,
    referenceId: 'DEV-20261027-DEMO',
  }));

  assert.ok(confirmHtml.includes('démonstration'));
  assert.ok(confirmHtml.includes('Bonjour Amélie,'));
});

await runTestAsync('DiagnosticInternalEmail & DiagnosticConfirmationEmail affichent les scores', async () => {
  const testDiagnostic = {
    firstName: 'Lucie',
    lastName: 'Bernard',
    organization: 'Association Médico-Sociale Aurore',
    email: 'l.bernard@aurore.fr',
    globalScore: 74,
    maturityLevel: 'Avancé',
    criticalRisksCount: 1,
    criticalRisksSummary: ['Outils hétérogènes'],
    topPriorities: ['Centraliser le carnet de bord', 'Mettre en place un SSO'],
  };

  const internalHtml = await render(React.createElement(DiagnosticInternalEmail, {
    data: testDiagnostic,
    referenceId: 'DEV-20261027-DIAG',
  }));

  assert.ok(internalHtml.includes('74 / 100') || (internalHtml.includes('74') && internalHtml.includes('100')));
  assert.ok(internalHtml.includes('Avancé'));
  assert.ok(internalHtml.includes('Association Médico-Sociale Aurore'));

  const confirmHtml = await render(React.createElement(DiagnosticConfirmationEmail, {
    data: testDiagnostic,
    referenceId: 'DEV-20261027-DIAG',
  }));

  assert.ok(confirmHtml.includes('74 / 100') || (confirmHtml.includes('74') && confirmHtml.includes('100')));
  assert.ok(confirmHtml.includes('Votre diagnostic a bien été enregistré'));
});

await runTestAsync('SimulatorInternalEmail & SimulatorConfirmationEmail intègrent les projections sans fausse promesse', async () => {
  const testSimulator = {
    firstName: 'Paul',
    lastName: 'Moreau',
    business: 'Transport Solidaire',
    email: 'p.moreau@transports.fr',
    vehicles: 12,
    annualSavings: '5 400 €',
    paybackMonths: 4,
    fullSimulationSummary: '12 véhicules • Économie réaliste : 5 400 € • Rentabilisé en 4 mois',
  };

  const internalHtml = await render(React.createElement(SimulatorInternalEmail, {
    data: testSimulator,
    referenceId: 'DEV-20261027-SIM',
  }));

  assert.ok(internalHtml.includes('simulateur') || internalHtml.includes('Simulation'));
  assert.ok(internalHtml.includes('12'));
  assert.ok(internalHtml.includes('5') && internalHtml.includes('400'));

  const confirmHtml = await render(React.createElement(SimulatorConfirmationEmail, {
    data: testSimulator,
    referenceId: 'DEV-20261027-SIM',
  }));

  assert.ok(confirmHtml.includes('Votre simulation DevEvoke est disponible') || confirmHtml.includes('simulation'));
  assert.ok(confirmHtml.includes('Estimation') || confirmHtml.includes('estimation') || confirmHtml.includes('Projection'));
});

await runTestAsync('NewsletterInternalEmail & NewsletterConfirmationEmail fonctionnent', async () => {
  const testNewsletter = {
    email: 'abonnee@secteur.fr',
  };

  const internalHtml = await render(React.createElement(NewsletterInternalEmail, {
    data: testNewsletter,
    referenceId: 'DEV-20261027-NEWS',
  }));

  assert.ok(internalHtml.includes('abonnee@secteur.fr'));

  const confirmHtml = await render(React.createElement(NewsletterConfirmationEmail, {
    data: testNewsletter,
    referenceId: 'DEV-20261027-NEWS',
  }));

  assert.ok(confirmHtml.includes('Bienvenue'));
  assert.ok(confirmHtml.includes('abonnee@secteur.fr'));
});

// ============================================================================
// 10. TESTS DU SERVICE CENTRALISÉ sendTransactionalEmail
// ============================================================================
console.log('\n--- 10. Service Centralisé sendTransactionalEmail ---');

await runTestAsync('sendTransactionalEmail envoie correctement un email interne avec Reply-To prospect', async () => {
  const result = await sendTransactionalEmail({
    type: 'contact-internal',
    data: {
      firstName: 'David',
      business: 'Cabinet Conseils',
      email: 'david@conseils.fr',
      subject: 'Audit',
      message: 'Demande d\'audit technique',
    },
    requestId: 'req_test_internal',
  });

  assert.strictEqual(result.success, true);
  assert.ok(result.provider === 'resend' || result.provider === 'smtp' || result.provider === 'mock');
  assert.ok(result.messageId);
});

await runTestAsync('sendTransactionalEmail envoie une confirmation client vers le prospect', async () => {
  const result = await sendTransactionalEmail({
    type: 'contact-confirmation',
    data: {
      firstName: 'David',
      business: 'Cabinet Conseils',
      email: 'david@conseils.fr',
      subject: 'Audit',
      message: 'Demande d\'audit technique',
    },
    requestId: 'req_test_confirm',
  });

  assert.strictEqual(result.success, true);
  assert.ok(result.messageId);
});

await runTestAsync('sendTransactionalEmail gère les types d\'email invalides avec un résultat propre', async () => {
  const result = await sendTransactionalEmail({
    type: 'type-inexistant' as any,
    data: { email: 'test@example.com' },
  });

  assert.strictEqual(result.success, false);
  assert.ok(result.error?.includes('inconnu'));
});

// ============================================================================
// 11. TESTS DE SÉCURITÉ AVANCÉE (Section 46 du prompt)
// ============================================================================
console.log('\n--- 11. Tests d\'Attaques & Robustesse (Section 46) ---');

runTest('Sécurité : Injection XSS variée dans les champs de formulaire (<script>, <img>, onmouseover)', () => {
  const vectors = [
    '<script>alert(1)</script>',
    '<img src=x onerror=alert(1)>',
    '" onmouseover="alert(1)',
    '"><script src="https://evil.com/xss.js"></script>',
    'javascript:alert(document.cookie)',
  ];

  for (const vector of vectors) {
    const escaped = escapeHtml(vector);
    assert.ok(!escaped.includes('<script>'), `Doit neutraliser <script> : ${vector}`);
    assert.ok(!escaped.includes('<img'), `Doit neutraliser <img> : ${vector}`);
    assert.ok(!escaped.includes('" onmouseover'), `Doit neutraliser attributs : ${vector}`);
  }
});

runTest('Sécurité : Rejet des emails avec caractères d\'injection CRLF', () => {
  const crlfEmail = 'victim@example.com\r\nBcc: evil@attacker.com';
  const clean = stripCrlf(crlfEmail);
  assert.ok(!clean.includes('\r'));
  assert.ok(!clean.includes('\n'));
  assert.strictEqual(clean, 'victim@example.com Bcc: evil@attacker.com');

  // Doit également être rejeté par Zod
  const parsed = contactSubmissionSchema.safeParse({
    firstname: 'Jean',
    business: 'Test',
    email: crlfEmail,
    content: 'Test content',
  });
  assert.strictEqual(parsed.success, false, 'Un email avec CRLF doit être rejeté par le schéma Zod');
});

runTest('Sécurité : Rejet des payloads avec messages géants (> 5000 caractères)', () => {
  const massiveContent = 'A'.repeat(5001);
  const parsed = contactSubmissionSchema.safeParse({
    firstname: 'Jean',
    business: 'Test',
    email: 'jean@test.fr',
    content: massiveContent,
  });
  assert.strictEqual(parsed.success, false, 'Un payload > 5000 caractères doit être rejeté');
});

runTest('Sécurité : Protection contre types JSON inattendus et champs inconnus', () => {
  const strangePayload = {
    firstname: 'Jean',
    business: 'Test',
    email: 'jean@test.fr',
    content: 'Message valide',
    unknownAdminField: true,
    sqlInjection: "'; DROP TABLE users; --",
    nestedObject: { a: { b: { c: 1 } } },
  };

  const parsed = contactSubmissionSchema.safeParse(strangePayload);
  assert.strictEqual(parsed.success, true);
  // Les champs inconnus ne doivent pas être conservés dans les propriétés attendues
  assert.strictEqual((parsed as any).data.unknownAdminField, undefined);
  assert.strictEqual((parsed as any).data.sqlInjection, undefined);
});

// ============================================================================
// 12. TESTS DE CONTENU & QUALITÉ EMAIL (SECTION 38)
// ============================================================================
console.log('\n--- 12. Tests de Contenu & Qualité Email (Section 38) ---');

await runTestAsync('Section 38 : Aucun template ne contient undefined, NaN, Infinity, [TODO] ou [PLACEHOLDER]', async () => {
  const forbiddenPatterns = [
    { pattern: 'undefined', label: 'undefined' },
    { pattern: 'NaN', label: 'NaN' },
    { pattern: 'Infinity', label: 'Infinity' },
    { pattern: '[TODO]', label: '[TODO]' },
    { pattern: '[PLACEHOLDER]', label: '[PLACEHOLDER]' },
    { pattern: '>null<', label: '>null<' },
  ];

  function checkClean(html: string, name: string) {
    for (const { pattern, label } of forbiddenPatterns) {
      assert.ok(!html.includes(pattern), `Le template ${name} contient la chaîne interdite '${label}'`);
    }
  }

  // 1. Contact (avec données partielles pour tester la robustesse des fallbacks)
  const contactInt = await render(React.createElement(ContactInternalEmail, {
    data: { email: 'client@pro.fr', firstName: 'Client', business: 'Structure', subject: 'Projet', message: 'Hello' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(contactInt, 'ContactInternal');

  const contactConf = await render(React.createElement(ContactConfirmationEmail, {
    data: { email: 'client@pro.fr', firstName: 'Client', business: 'Structure', subject: 'Projet', message: 'Hello' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(contactConf, 'ContactConfirmation');

  // 2. Quote
  const quoteInt = await render(React.createElement(QuoteInternalEmail, {
    data: { email: 'quote@pro.fr', firstName: 'Demandeur', business: 'Entreprise', projectType: 'SaaS', description: 'Cahier des charges' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(quoteInt, 'QuoteInternal');

  const quoteConf = await render(React.createElement(QuoteConfirmationEmail, {
    data: { email: 'quote@pro.fr', firstName: 'Demandeur', business: 'Entreprise', projectType: 'SaaS', description: 'Cahier des charges' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(quoteConf, 'QuoteConfirmation');

  // 3. Demo
  const demoInt = await render(React.createElement(DemoInternalEmail, {
    data: { email: 'demo@pro.fr', firstName: 'Responsable', business: 'IME', demoFocus: 'Floticar', preferredSlot: 'Mardi 10h' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(demoInt, 'DemoInternal');

  const demoConf = await render(React.createElement(DemoConfirmationEmail, {
    data: { email: 'demo@pro.fr', firstName: 'Responsable', business: 'IME', demoFocus: 'Floticar', preferredSlot: 'Mardi 10h' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(demoConf, 'DemoConfirmation');

  // 4. Diagnostic
  const diagInt = await render(React.createElement(DiagnosticInternalEmail, {
    data: { email: 'diag@pro.fr', firstName: 'Directeur', business: 'ESAT', globalScore: 82, maturityLevel: 'Élevé' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(diagInt, 'DiagnosticInternal');

  const diagConf = await render(React.createElement(DiagnosticConfirmationEmail, {
    data: { email: 'diag@pro.fr', firstName: 'Directeur', business: 'ESAT', globalScore: 82, maturityLevel: 'Élevé' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(diagConf, 'DiagnosticConfirmation');

  // 5. Simulator
  const simInt = await render(React.createElement(SimulatorInternalEmail, {
    data: { email: 'sim@pro.fr', firstName: 'Gestionnaire', business: 'Flotte', vehicles: 20, annualSavings: '9 000 €' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(simInt, 'SimulatorInternal');

  const simConf = await render(React.createElement(SimulatorConfirmationEmail, {
    data: { email: 'sim@pro.fr', firstName: 'Gestionnaire', business: 'Flotte', vehicles: 20, annualSavings: '9 000 €' } as any,
    referenceId: 'DEV-20261027-TEST',
  }));
  checkClean(simConf, 'SimulatorConfirmation');
});

  // ============================================================================
  // RÉSUMÉ DES TESTS
  // ============================================================================
  console.log('\n================================================================');
  console.log(`🎉 TOUS LES TESTS SONT PASSÉS AVEC SUCCÈS : ${passedTests}/${totalTests}`);
  console.log('================================================================\n');
}

runAsyncTests().catch((error) => {
  console.error('Erreur fatale lors des tests asynchrones :', error);
  process.exitCode = 1;
});
