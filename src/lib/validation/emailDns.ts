import dns from 'node:dns/promises';
import type { MxRecord } from 'node:dns';
import {
  EMAIL_VALIDATION_MESSAGES,
  getEmailDomain,
  isValidDomainSyntax,
} from './email';

/**
 * Vérification DNS / MX côté serveur pour les domaines e-mail professionnels.
 *
 * Principes de conception (Sections 7 & 10) :
 * - Strictement exécuté côté serveur (aucun appel DNS navigateur)
 * - Timeout court (par défaut 2 000 ms) pour ne jamais dégrader le temps de réponse
 * - Cache mémoire avec TTL pour éviter les requêtes DNS redondantes
 * - Gestion explicite et résiliente (fail-open) si le service DNS est indisponible
 * - Aucun contact direct avec un serveur SMTP
 */

export type DnsVerificationStatus =
  | 'MX_FOUND'
  | 'A_RECORD_FALLBACK'
  | 'NULL_MX_REJECTED'
  | 'DOMAIN_NOT_FOUND'
  | 'NO_MAIL_RECORDS'
  | 'DNS_TIMEOUT'
  | 'DNS_UNAVAILABLE'
  | 'SKIPPED'
  | 'INVALID_DOMAIN';

export interface DnsVerificationResult {
  /** Indique si le formulaire est autorisé à poursuivre */
  allowed: boolean;
  /** Indique si des enregistrements MX ou A/AAAA valides ont été confirmés */
  hasMailRecords: boolean;
  status: DnsVerificationStatus;
  domain: string | null;
  mxRecords?: string[];
  message?: string;
}

export interface DnsResolverAdapter {
  resolveMx(hostname: string): Promise<MxRecord[]>;
  resolve4(hostname: string): Promise<string[]>;
  resolve6(hostname: string): Promise<string[]>;
}

export interface VerifyEmailDomainDnsOptions {
  /** Délai maximal en millisecondes avant abandon de la requête DNS (défaut : 2000 ms) */
  timeoutMs?: number;
  /**
   * Si `true`, bloque également les domaines qui retournent `ENOTFOUND` / `NO_MAIL_RECORDS`.
   * Par défaut (`false` ou contrôlé par `ENFORCE_STRICT_DNS_MX=true`), seuls les domaines
   * déclarant explicitement un Null MX (RFC 7505 : `0 .`) sont bloqués afin de ne jamais
   * rejeter par erreur une petite structure ou un domaine personnalisé en cours de configuration.
   */
  strict?: boolean;
  /** Adaptateur DNS injectable pour les tests unitaires */
  resolver?: DnsResolverAdapter;
  /** Désactive l'utilisation du cache mémoire (utile pour les tests) */
  bypassCache?: boolean;
}

interface CachedDnsEntry {
  result: DnsVerificationResult;
  expiresAt: number;
}

const DNS_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const DEFAULT_DNS_TIMEOUT_MS = 2000;
const dnsCache = new Map<string, CachedDnsEntry>();

class DnsTimeoutError extends Error {
  public readonly code = 'ETIMEOUT';
  constructor(timeoutMs: number) {
    super(`DNS query timed out after ${timeoutMs}ms`);
    this.name = 'DnsTimeoutError';
  }
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new DnsTimeoutError(timeoutMs));
    }, timeoutMs);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((err: unknown) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

function extractDomain(emailOrDomain: string): string | null {
  const cleaned = emailOrDomain.trim().toLowerCase();
  if (cleaned.includes('@')) {
    return getEmailDomain(cleaned);
  }
  return isValidDomainSyntax(cleaned) ? cleaned : null;
}

function getDnsErrorCode(error: unknown): string {
  if (
    error &&
    typeof error === 'object' &&
    'code' in error &&
    typeof (error as { code: unknown }).code === 'string'
  ) {
    return (error as { code: string }).code;
  }
  return 'UNKNOWN';
}

/**
 * Vérifie les enregistrements DNS (MX puis fallback A/AAAA selon RFC 5321) d'un domaine e-mail.
 */
export async function verifyEmailDomainDns(
  emailOrDomain: string,
  options: VerifyEmailDomainDnsOptions = {}
): Promise<DnsVerificationResult> {
  const domain = extractDomain(emailOrDomain);
  if (!domain) {
    return {
      allowed: false,
      hasMailRecords: false,
      status: 'INVALID_DOMAIN',
      domain: null,
      message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
    };
  }

  if (process.env.EMAIL_DNS_CHECK_ENABLED === 'false') {
    return {
      allowed: true,
      hasMailRecords: true,
      status: 'SKIPPED',
      domain,
    };
  }

  const strict =
    options.strict ?? process.env.ENFORCE_STRICT_DNS_MX === 'true';
  const timeoutMs = options.timeoutMs ?? DEFAULT_DNS_TIMEOUT_MS;
  const resolver: DnsResolverAdapter = options.resolver ?? dns;
  const cacheKey = `${domain}:${strict ? 'strict' : 'lenient'}`;

  if (!options.bypassCache && !options.resolver) {
    const cached = dnsCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.result;
    }
  }

  let result: DnsVerificationResult;

  try {
    const mxRecords = await withTimeout(resolver.resolveMx(domain), timeoutMs);

    if (Array.isArray(mxRecords) && mxRecords.length > 0) {
      // RFC 7505 : un unique enregistrement MX avec exchange '.' ou '' signifie "Null MX" (le domaine refuse tout e-mail)
      const validExchanges = mxRecords
        .map((r) => (r.exchange || '').trim().replace(/\.$/, ''))
        .filter((ex) => ex.length > 0);

      if (validExchanges.length === 0) {
        result = {
          allowed: false,
          hasMailRecords: false,
          status: 'NULL_MX_REJECTED',
          domain,
          mxRecords: [],
          message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
        };
      } else {
        result = {
          allowed: true,
          hasMailRecords: true,
          status: 'MX_FOUND',
          domain,
          mxRecords: validExchanges,
        };
      }
    } else {
      result = await checkAddressFallback(domain, resolver, timeoutMs, strict);
    }
  } catch (err: unknown) {
    const code = getDnsErrorCode(err);

    if (code === 'ENODATA') {
      // Le domaine existe mais n'a pas d'enregistrement MX explicite : fallback A / AAAA (RFC 5321 section 5.1)
      result = await checkAddressFallback(domain, resolver, timeoutMs, strict);
    } else if (code === 'ENOTFOUND' || code === 'EBADNAME') {
      result = {
        allowed: !strict,
        hasMailRecords: false,
        status: 'DOMAIN_NOT_FOUND',
        domain,
        ...(strict ? { message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX } : {}),
      };
    } else if (err instanceof DnsTimeoutError || code === 'ETIMEOUT') {
      // Comportement explicite fail-open en cas de timeout DNS pour ne pas bloquer le prospect
      result = {
        allowed: true,
        hasMailRecords: false,
        status: 'DNS_TIMEOUT',
        domain,
      };
    } else {
      // Indisponibilité temporaire du résolveur DNS (ESERVFAIL, ECONNREFUSED, EAI_AGAIN, etc.) -> fail-open
      result = {
        allowed: true,
        hasMailRecords: false,
        status: 'DNS_UNAVAILABLE',
        domain,
      };
    }
  }

  if (!options.bypassCache && !options.resolver) {
    dnsCache.set(cacheKey, {
      result,
      expiresAt: Date.now() + DNS_CACHE_TTL_MS,
    });
  }

  return result;
}

async function checkAddressFallback(
  domain: string,
  resolver: DnsResolverAdapter,
  timeoutMs: number,
  strict: boolean
): Promise<DnsVerificationResult> {
  try {
    const [ipv4Result, ipv6Result] = await withTimeout(
      Promise.allSettled([resolver.resolve4(domain), resolver.resolve6(domain)]),
      timeoutMs
    );

    const hasIpv4 =
      ipv4Result.status === 'fulfilled' &&
      Array.isArray(ipv4Result.value) &&
      ipv4Result.value.length > 0;
    const hasIpv6 =
      ipv6Result.status === 'fulfilled' &&
      Array.isArray(ipv6Result.value) &&
      ipv6Result.value.length > 0;

    if (hasIpv4 || hasIpv6) {
      return {
        allowed: true,
        hasMailRecords: true,
        status: 'A_RECORD_FALLBACK',
        domain,
      };
    }

    return {
      allowed: !strict,
      hasMailRecords: false,
      status: 'NO_MAIL_RECORDS',
      domain,
      ...(strict ? { message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX } : {}),
    };
  } catch (err: unknown) {
    const code = getDnsErrorCode(err);
    if (err instanceof DnsTimeoutError || code === 'ETIMEOUT') {
      return {
        allowed: true,
        hasMailRecords: false,
        status: 'DNS_TIMEOUT',
        domain,
      };
    }
    return {
      allowed: true,
      hasMailRecords: false,
      status: 'DNS_UNAVAILABLE',
      domain,
    };
  }
}

export function clearEmailDnsCache(): void {
  dnsCache.clear();
}

