import crypto from 'node:crypto';
import {
  EMAIL_VALIDATION_MESSAGES,
  getEmailDomain,
  isDisposableEmail,
  isFreeEmailProvider,
  isValidEmailSyntax,
  normalizeEmail as baseNormalizeEmail,
} from '@/lib/validation/email';

/**
 * Service centralisé de vérification d'adresses e-mail professionnelles (B2B) avec Hunter Email Verifier.
 *
 * Pipeline de sécurité (Sections 4 à 24 & 33) :
 * 1. Normalisation (trim, minuscules, suppression des caractères invisibles)
 * 2. Validation syntaxique stricte (longueur, RFC 5321/5322, extraction du domaine)
 * 3. Blocage immédiat des fournisseurs personnels (Gmail, Outlook, Yahoo, iCloud, Orange, Free...)
 * 4. Blocage immédiat des domaines jetables / temporaires connus (Yopmail, Mailinator, Temp-Mail...)
 * 5. Vérification serveur via Hunter Email Verifier API (`GET https://api.hunter.io/v2/email-verifier`)
 *    avec timeout AbortController, cache mémoire haché SHA-256 (RGPD) et minimisation des données
 * 6. Application de la politique métier stricte DevEvoke avant tout appel à Resend
 */

export type ProfessionalEmailVerificationStatus =
  | 'valid'
  | 'invalid'
  | 'personal'
  | 'disposable'
  | 'accept_all'
  | 'unknown'
  | 'error';

export type ProfessionalEmailVerification = {
  valid: boolean;
  normalizedEmail: string;
  status: ProfessionalEmailVerificationStatus;
  score?: number;
  reason?: string;
  userMessage?: string;
};

export interface HunterEmailVerifierData {
  status?:
    | 'valid'
    | 'invalid'
    | 'accept_all'
    | 'webmail'
    | 'disposable'
    | 'unknown'
    | string;
  result?: string;
  score?: number;
  email?: string;
  regexp?: boolean;
  gibberish?: boolean;
  disposable?: boolean;
  webmail?: boolean;
  mx_records?: boolean;
  smtp_server?: boolean;
  smtp_check?: boolean;
  accept_all?: boolean;
  block?: boolean;
}

export interface HunterApiEnvelope {
  data?: HunterEmailVerifierData;
  errors?: Array<{ id?: string; code?: number; details?: string }>;
}

export interface VerifyProfessionalEmailOptions {
  apiKey?: string;
  enabled?: boolean;
  timeoutMs?: number;
  minScore?: number;
  allowAcceptAll?: boolean;
  bypassCache?: boolean;
  fetchFn?: typeof fetch;
  hunterVerifier?: (
    email: string
  ) => Promise<HunterEmailVerifierData | HunterApiEnvelope> | HunterEmailVerifierData | HunterApiEnvelope;
}

const HUNTER_API_ENDPOINT = 'https://api.hunter.io/v2/email-verifier';
const DEFAULT_TIMEOUT_MS = 10_000;
const DEFAULT_MIN_SCORE = 80;
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes
const MAX_CACHE_ENTRIES = 1000;
const CACHE_HASH_SALT = 'devevoke_hunter_cache_v1';

interface CachedVerificationEntry {
  valid: boolean;
  status: ProfessionalEmailVerificationStatus;
  score?: number;
  reason?: string;
  userMessage?: string;
  expiresAt: number;
}

/**
 * Cache mémoire serveur indexé exclusivement par `SHA-256(normalizedEmail)`.
 * Conformité RGPD (Section 21) : aucune adresse e-mail en clair n'est stockée dans le cache.
 */
const verificationCache = new Map<string, CachedVerificationEntry>();

type HunterMockHandler = (
  email: string
) =>
  | Promise<HunterEmailVerifierData | HunterApiEnvelope>
  | HunterEmailVerifierData
  | HunterApiEnvelope;

let customHunterMockHandler: HunterMockHandler | null = null;
let recordedHunterCallCount = 0;

export function setHunterMockHandler(handler: HunterMockHandler | null): void {
  customHunterMockHandler = handler;
}

export function getRecordedHunterCallCount(): number {
  return recordedHunterCallCount;
}

export function clearHunterVerificationCache(): void {
  verificationCache.clear();
  recordedHunterCallCount = 0;
}

/**
 * Hache une adresse e-mail normalisée avec SHA-256 pour le cache et les logs techniques.
 * Ne permet jamais de reconstruire l'adresse e-mail d'origine (RGPD Sections 21 & 23).
 */
export function hashEmailForCache(normalizedEmail: string): string {
  return crypto
    .createHash('sha256')
    .update(`${normalizedEmail}:${CACHE_HASH_SALT}`)
    .digest('hex');
}

/**
 * Étape 1 — Normalisation de l'adresse e-mail (Section 5).
 */
export function normalizeEmail(email: unknown): string {
  return baseNormalizeEmail(email);
}

/**
 * Étape 1b — Validation syntaxique et extraction du domaine (Section 5).
 */
export function validateSyntax(email: unknown): {
  valid: boolean;
  normalizedEmail: string;
  domain: string | null;
} {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail || !isValidEmailSyntax(normalizedEmail)) {
    return {
      valid: false,
      normalizedEmail,
      domain: null,
    };
  }

  const domain = getEmailDomain(normalizedEmail);
  if (!domain) {
    return {
      valid: false,
      normalizedEmail,
      domain: null,
    };
  }

  return {
    valid: true,
    normalizedEmail,
    domain,
  };
}

/**
 * Étape 2a — Vérifie si l'adresse ou le domaine appartient à un fournisseur personnel / webmail grand public (Section 6).
 */
export function checkPersonalProvider(domainOrEmail: unknown): boolean {
  return isFreeEmailProvider(domainOrEmail);
}

/**
 * Étape 2b — Vérifie si l'adresse ou le domaine appartient à un service d'e-mail jetable / temporaire.
 */
export function checkDisposable(domainOrEmail: unknown): boolean {
  return isDisposableEmail(domainOrEmail);
}

function resolveMinScore(override?: number): number {
  if (typeof override === 'number' && !Number.isNaN(override)) {
    return override;
  }
  const envVal = process.env.HUNTER_MIN_SCORE;
  if (envVal) {
    const parsed = Number.parseInt(envVal, 10);
    if (!Number.isNaN(parsed) && parsed >= 0 && parsed <= 100) {
      return parsed;
    }
  }
  return DEFAULT_MIN_SCORE;
}

function resolveTimeoutMs(override?: number): number {
  if (typeof override === 'number' && override > 0) {
    return override;
  }
  const envVal = process.env.HUNTER_EMAIL_VERIFICATION_TIMEOUT_MS;
  if (envVal) {
    const parsed = Number.parseInt(envVal, 10);
    if (!Number.isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return DEFAULT_TIMEOUT_MS;
}

function resolveAllowAcceptAll(override?: boolean): boolean {
  if (typeof override === 'boolean') {
    return override;
  }
  return process.env.HUNTER_ALLOW_ACCEPT_ALL === 'true';
}

function isAutomatedTestEnvironment(): boolean {
  return (
    process.env.EMAIL_TEST_MODE === 'true' || process.env.NODE_ENV === 'test'
  );
}

/**
 * Simulateur déterministe utilisé uniquement en environnement de test automatisé (Playwright / Integration)
 * lorsqu'aucun mock explicite ni clé API réelle n'est fourni.
 */
function simulateHunterInTestMode(
  normalizedEmail: string
): HunterEmailVerifierData {
  const [localPart, domain = ''] = normalizedEmail.split('@');

  // Simulation d'erreur / timeout Hunter pour les tests E2E & intégration
  if (
    localPart === 'timeout' ||
    localPart === 'hunter-error' ||
    domain === 'timeout-hunter.fr' ||
    domain === 'hunter-error.fr'
  ) {
    throw new Error('HUNTER_SIMULATED_TIMEOUT');
  }

  // Simulation de domaine jetable détecté par Hunter
  if (
    domain === 'temporary-mail.example' ||
    domain.endsWith('.temporary-mail.example') ||
    localPart === 'disposable'
  ) {
    return {
      status: 'disposable',
      score: 0,
      regexp: true,
      gibberish: false,
      disposable: true,
      webmail: false,
      mx_records: true,
      smtp_server: false,
      smtp_check: false,
      accept_all: false,
      block: true,
    };
  }

  // Simulation de statut accept_all
  if (
    localPart === 'accept_all' ||
    localPart === 'accept-all' ||
    domain === 'accept-all.fr' ||
    domain === 'accept-all-domain.fr'
  ) {
    return {
      status: 'accept_all',
      score: 72,
      regexp: true,
      gibberish: false,
      disposable: false,
      webmail: false,
      mx_records: true,
      smtp_server: true,
      smtp_check: false,
      accept_all: true,
      block: false,
    };
  }

  // Simulation de statut unknown
  if (
    localPart === 'unknown' ||
    domain === 'unknown.fr' ||
    domain === 'unknown-domain.fr'
  ) {
    return {
      status: 'unknown',
      score: 40,
      regexp: true,
      gibberish: false,
      disposable: false,
      webmail: false,
      mx_records: true,
      smtp_server: false,
      smtp_check: false,
      accept_all: false,
      block: false,
    };
  }

  // Simulation d'adresses / domaines factices ou invalides (ex: test@test.fr, toto@tata.com)
  const invalidTestDomains = new Set([
    'test.fr',
    'test.com',
    'test.org',
    'test.net',
    'tata.com',
    'tata.fr',
    'toto.fr',
    'toto.com',
    'invalid.fr',
    'invalid.com',
    'invalid-domain.fr',
    'fake.fr',
    'fake.com',
    'azerty.fr',
    'azerty.com',
    'qwerty.fr',
    'qwerty.com',
    'example.com',
    'example.fr',
    'example.org',
    'example.net',
    'no-mail.example',
  ]);

  if (
    invalidTestDomains.has(domain) ||
    localPart === 'invalid' ||
    normalizedEmail === 'test@test.fr' ||
    normalizedEmail === 'toto@tata.com'
  ) {
    return {
      status: 'invalid',
      score: 0,
      regexp: true,
      gibberish: false,
      disposable: false,
      webmail: false,
      mx_records: false,
      smtp_server: false,
      smtp_check: false,
      accept_all: false,
      block: false,
    };
  }

  // Adresse professionnelle B2B valide en mode test
  return {
    status: 'valid',
    score: 100,
    regexp: true,
    gibberish: false,
    disposable: false,
    webmail: false,
    mx_records: true,
    smtp_server: true,
    smtp_check: true,
    accept_all: false,
    block: false,
  };
}

function unwrapHunterPayload(
  raw: HunterEmailVerifierData | HunterApiEnvelope
): HunterEmailVerifierData | null {
  if (!raw || typeof raw !== 'object') {
    return null;
  }
  if ('data' in raw && raw.data && typeof raw.data === 'object') {
    return raw.data;
  }
  if ('status' in raw || 'disposable' in raw || 'webmail' in raw || 'score' in raw) {
    return raw as HunterEmailVerifierData;
  }
  return null;
}

/**
 * Étape 3 — Appel serveur vers Hunter Email Verifier API (Section 7).
 * - Utilise exclusivement `GET https://api.hunter.io/v2/email-verifier`
 * - Envoie uniquement `email` et `api_key` (minimisation RGPD Section 22)
 * - Protégé par `AbortController` et timeout configurable (`HUNTER_EMAIL_VERIFICATION_TIMEOUT_MS`)
 */
export async function verifyWithHunter(
  normalizedEmail: string,
  options: VerifyProfessionalEmailOptions = {}
): Promise<
  | { ok: true; data: HunterEmailVerifierData }
  | { ok: false; reason: string }
> {
  recordedHunterCallCount++;

  const activeMock = options.hunterVerifier ?? customHunterMockHandler;
  if (activeMock) {
    try {
      const mockResponse = await activeMock(normalizedEmail);
      const unwrapped = unwrapHunterPayload(mockResponse);
      if (!unwrapped) {
        return { ok: false, reason: 'invalid_hunter_payload' };
      }
      return { ok: true, data: unwrapped };
    } catch {
      return { ok: false, reason: 'hunter_request_failed' };
    }
  }

  // En mode test automatisé (EMAIL_TEST_MODE=true / NODE_ENV=test) sans fetchFn injecté,
  // utiliser le simulateur déterministe pour ne jamais consommer de vrais crédits Hunter.
  if (!options.fetchFn && isAutomatedTestEnvironment()) {
    try {
      const simulated = simulateHunterInTestMode(normalizedEmail);
      return { ok: true, data: simulated };
    } catch {
      return { ok: false, reason: 'hunter_timeout' };
    }
  }

  const apiKey = (options.apiKey ?? process.env.HUNTER_API_KEY ?? '').trim();
  if (!apiKey) {
    return { ok: false, reason: 'missing_hunter_api_key' };
  }

  const timeoutMs = resolveTimeoutMs(options.timeoutMs);
  const fetchImpl = options.fetchFn ?? fetch;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    // Minimisation RGPD (Section 22) : seuls `email` et `api_key` sont transmis à Hunter
    const url = new URL(HUNTER_API_ENDPOINT);
    url.searchParams.set('email', normalizedEmail);
    url.searchParams.set('api_key', apiKey);

    const response = await fetchImpl(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      signal: controller.signal,
      cache: 'no-store',
    });

    if (!response.ok) {
      return {
        ok: false,
        reason: `hunter_http_${response.status}`,
      };
    }

    const json = (await response.json()) as HunterApiEnvelope | HunterEmailVerifierData;
    const data = unwrapHunterPayload(json);
    if (!data) {
      return {
        ok: false,
        reason: 'invalid_hunter_response',
      };
    }

    return { ok: true, data };
  } catch (error: unknown) {
    if (
      error &&
      typeof error === 'object' &&
      'name' in error &&
      (error as { name: string }).name === 'AbortError'
    ) {
      return { ok: false, reason: 'hunter_timeout' };
    }
    return { ok: false, reason: 'hunter_network_error' };
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Étape 4 — Analyse de la réponse Hunter et application de la politique métier DevEvoke (Sections 8 à 15).
 *
 * Politique d'acceptation par défaut :
 * - `status === "valid"`
 * - `disposable === false`
 * - `webmail === false`
 * - `regexp === true`
 * - `mx_records === true`
 * - `score >= HUNTER_MIN_SCORE` (défaut : 80)
 *
 * Les adresses génériques B2B (`contact@`, `info@`, `direction@`, `secretariat@`, `administration@`)
 * sont explicitement autorisées dès lors que Hunter confirme leur validité (Section 13).
 */
export function validateHunterResult(
  normalizedEmail: string,
  hunterData: HunterEmailVerifierData,
  options: VerifyProfessionalEmailOptions = {}
): ProfessionalEmailVerification {
  const status = hunterData.status;
  const score =
    typeof hunterData.score === 'number' ? hunterData.score : undefined;
  const minScore = resolveMinScore(options.minScore);
  const allowAcceptAll = resolveAllowAcceptAll(options.allowAcceptAll);

  // 1. Adresse temporaire / jetable signalée par Hunter
  if (hunterData.disposable === true || status === 'disposable') {
    return {
      valid: false,
      normalizedEmail,
      status: 'disposable',
      score,
      reason: 'hunter_disposable',
      userMessage: EMAIL_VALIDATION_MESSAGES.DISPOSABLE_PROVIDER,
    };
  }

  // 2. Webmail / adresse personnelle signalée par Hunter
  if (hunterData.webmail === true || status === 'webmail') {
    return {
      valid: false,
      normalizedEmail,
      status: 'personal',
      score,
      reason: 'hunter_webmail',
      userMessage: EMAIL_VALIDATION_MESSAGES.FREE_PROVIDER,
    };
  }

  // 3. Statut explicitement invalide, bloqué, charabia (gibberish), regex invalide ou absence de MX
  if (
    status === 'invalid' ||
    hunterData.block === true ||
    hunterData.gibberish === true ||
    hunterData.regexp === false ||
    hunterData.mx_records === false
  ) {
    return {
      valid: false,
      normalizedEmail,
      status: 'invalid',
      score,
      reason:
        status === 'invalid'
          ? 'hunter_status_invalid'
          : hunterData.mx_records === false
          ? 'hunter_missing_mx'
          : 'hunter_rejected_flags',
      userMessage: EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL,
    };
  }

  // 4. Statut accept_all (refusé par défaut sauf si HUNTER_ALLOW_ACCEPT_ALL=true)
  if (status === 'accept_all' || (hunterData.accept_all === true && status !== 'valid')) {
    if (!allowAcceptAll) {
      return {
        valid: false,
        normalizedEmail,
        status: 'accept_all',
        score,
        reason: 'hunter_accept_all_rejected',
        userMessage: EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL,
      };
    }

    if (score !== undefined && score < minScore) {
      return {
        valid: false,
        normalizedEmail,
        status: 'accept_all',
        score,
        reason: 'hunter_low_score',
        userMessage: EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL,
      };
    }

    return {
      valid: true,
      normalizedEmail,
      status: 'valid',
      score,
    };
  }

  // 5. Statut unknown (refusé systématiquement — Section 15)
  if (status === 'unknown') {
    return {
      valid: false,
      normalizedEmail,
      status: 'unknown',
      score,
      reason: 'hunter_status_unknown',
      userMessage: EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL,
    };
  }

  // 6. Seul le statut "valid" peut être accepté
  if (status !== 'valid') {
    return {
      valid: false,
      normalizedEmail,
      status: 'invalid',
      score,
      reason: 'hunter_unrecognized_status',
      userMessage: EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL,
    };
  }

  // 7. Vérification du seuil de score Hunter (Section 12)
  if (score !== undefined && score < minScore) {
    return {
      valid: false,
      normalizedEmail,
      status: 'invalid',
      score,
      reason: 'hunter_score_below_threshold',
      userMessage: EMAIL_VALIDATION_MESSAGES.UNVERIFIED_PROFESSIONAL,
    };
  }

  return {
    valid: true,
    normalizedEmail,
    status: 'valid',
    score,
  };
}

function getCachedVerification(
  normalizedEmail: string
): ProfessionalEmailVerification | null {
  const hashKey = hashEmailForCache(normalizedEmail);
  const entry = verificationCache.get(hashKey);
  if (!entry) {
    return null;
  }
  if (entry.expiresAt <= Date.now()) {
    verificationCache.delete(hashKey);
    return null;
  }
  return {
    valid: entry.valid,
    normalizedEmail,
    status: entry.status,
    score: entry.score,
    reason: entry.reason,
    userMessage: entry.userMessage,
  };
}

function setCachedVerification(result: ProfessionalEmailVerification): void {
  // Ne jamais mettre en cache une erreur technique transitoire (timeout / 5xx)
  if (result.status === 'error') {
    return;
  }

  if (verificationCache.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = verificationCache.keys().next().value;
    if (oldestKey) {
      verificationCache.delete(oldestKey);
    }
  }

  const hashKey = hashEmailForCache(result.normalizedEmail);
  verificationCache.set(hashKey, {
    valid: result.valid,
    status: result.status,
    score: result.score,
    reason: result.reason,
    userMessage: result.userMessage,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
}

/**
 * Fonction principale centralisée de vérification d'une adresse e-mail professionnelle (Section 4).
 *
 * Exécute dans l'ordre strict :
 * `normalizeEmail` -> `validateSyntax` -> `checkDisposable` -> `checkPersonalProvider` -> `verifyWithHunter` -> `validateHunterResult`
 */
export async function verifyProfessionalEmail(
  email: unknown,
  options: VerifyProfessionalEmailOptions = {}
): Promise<ProfessionalEmailVerification> {
  // 1. Normalisation & Validation syntaxique locale
  const syntaxResult = validateSyntax(email);
  if (!syntaxResult.valid || !syntaxResult.domain) {
    return {
      valid: false,
      normalizedEmail: syntaxResult.normalizedEmail,
      status: 'invalid',
      reason: syntaxResult.normalizedEmail
        ? 'invalid_syntax'
        : 'email_required',
      userMessage: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
    };
  }

  const { normalizedEmail, domain } = syntaxResult;

  // 2. Détection locale des domaines temporaires / jetables (sans consommer de crédit Hunter)
  if (checkDisposable(domain)) {
    return {
      valid: false,
      normalizedEmail,
      status: 'disposable',
      reason: 'local_disposable_domain',
      userMessage: EMAIL_VALIDATION_MESSAGES.DISPOSABLE_PROVIDER,
    };
  }

  // 3. Détection locale des fournisseurs personnels / grand public (sans consommer de crédit Hunter)
  if (checkPersonalProvider(domain)) {
    return {
      valid: false,
      normalizedEmail,
      status: 'personal',
      reason: 'local_personal_provider',
      userMessage: EMAIL_VALIDATION_MESSAGES.FREE_PROVIDER,
    };
  }

  // 4. Vérification de l'activation Hunter
  const verificationEnabled =
    options.enabled ??
    process.env.HUNTER_EMAIL_VERIFICATION_ENABLED !== 'false';

  if (
    !verificationEnabled &&
    !options.hunterVerifier &&
    !customHunterMockHandler
  ) {
    return {
      valid: true,
      normalizedEmail,
      status: 'valid',
      reason: 'hunter_verification_disabled',
    };
  }

  // 5. Consultation du cache serveur SHA-256 (si non contourné)
  const useCache =
    !options.bypassCache &&
    !options.hunterVerifier &&
    !options.fetchFn &&
    customHunterMockHandler === null;

  if (useCache) {
    const cached = getCachedVerification(normalizedEmail);
    if (cached) {
      return cached;
    }
  }

  // 6. Appel Hunter Email Verifier API
  const hunterResponse = await verifyWithHunter(normalizedEmail, options);
  if (!hunterResponse.ok) {
    return {
      valid: false,
      normalizedEmail,
      status: 'error',
      reason: hunterResponse.reason,
      userMessage: EMAIL_VALIDATION_MESSAGES.VERIFICATION_UNAVAILABLE,
    };
  }

  // 7. Validation métier du résultat Hunter
  const decision = validateHunterResult(
    normalizedEmail,
    hunterResponse.data,
    options
  );

  if (useCache) {
    setCachedVerification(decision);
  }

  return decision;
}

