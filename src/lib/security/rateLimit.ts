/**
 * Système de Rate Limiting en mémoire avec fenêtre glissante.
 * Protège les endpoints DevEvoke contre les abus, attaques par déni de service (DoS) et spam automatisé.
 */

interface RateLimitRecord {
  timestamps: number[];
}

interface RateLimitConfig {
  /** Nombre maximal de requêtes autorisées dans la fenêtre */
  maxRequests: number;
  /** Durée de la fenêtre en millisecondes */
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
}

// Configurations par défaut par type d'action
export const FORM_SECURITY_LIMITS: Record<string, RateLimitConfig> = {
  contact: {
    maxRequests: 5,
    windowMs: 10 * 60 * 1000, // 5 requêtes / 10 minutes
  },
  demo: {
    maxRequests: 5,
    windowMs: 10 * 60 * 1000, // 5 requêtes / 10 minutes
  },
  diagnostic: {
    maxRequests: 5,
    windowMs: 10 * 60 * 1000, // 5 requêtes / 10 minutes
  },
  simulator: {
    maxRequests: 5,
    windowMs: 10 * 60 * 1000, // 5 requêtes / 10 minutes
  },
  newsletter: {
    maxRequests: 3,
    windowMs: 10 * 60 * 1000, // 3 requêtes / 10 minutes
  },
  default: {
    maxRequests: 5,
    windowMs: 10 * 60 * 1000,
  },
};

class RateLimiter {
  private store = new Map<string, RateLimitRecord>();
  private lastCleanup = Date.now();
  private readonly cleanupIntervalMs = 5 * 60 * 1000; // Nettoyage toutes les 5 min

  /**
   * Vérifie si la requête est autorisée et incrémente le compteur.
   */
  public check(identifier: string, formType: string = 'default'): RateLimitResult {
    // Si désactivé explicitement pour les tests
    if (process.env.RATE_LIMIT_DISABLED === 'true') {
      return {
        success: true,
        limit: 999,
        remaining: 999,
        resetSeconds: 0,
      };
    }

    const now = Date.now();
    this.maybeCleanup(now);

    const config = FORM_SECURITY_LIMITS[formType] || FORM_SECURITY_LIMITS.default;
    const key = `${formType}:${identifier}`;
    const windowStart = now - config.windowMs;

    let record = this.store.get(key);
    if (!record) {
      record = { timestamps: [] };
      this.store.set(key, record);
    }

    // Filtrer les requêtes hors de la fenêtre courante
    record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

    const oldestTimestamp = record.timestamps[0] ?? now;
    const resetSeconds = Math.max(0, Math.ceil((oldestTimestamp + config.windowMs - now) / 1000));

    if (record.timestamps.length >= config.maxRequests) {
      return {
        success: false,
        limit: config.maxRequests,
        remaining: 0,
        resetSeconds,
      };
    }

    record.timestamps.push(now);

    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - record.timestamps.length,
      resetSeconds,
    };
  }

  /**
   * Réinitialise le stockage (utile pour les tests automatisés).
   */
  public reset(): void {
    this.store.clear();
  }

  /**
   * Nettoie périodiquement les entrées expirées pour libérer la mémoire.
   */
  private maybeCleanup(now: number): void {
    if (now - this.lastCleanup < this.cleanupIntervalMs) {
      return;
    }
    this.lastCleanup = now;

    const maxWindow = Math.max(...Object.values(FORM_SECURITY_LIMITS).map((c) => c.windowMs));
    const oldestAllowed = now - maxWindow;

    for (const [key, record] of this.store.entries()) {
      record.timestamps = record.timestamps.filter((ts) => ts > oldestAllowed);
      if (record.timestamps.length === 0) {
        this.store.delete(key);
      }
    }
  }
}

// Singleton en mémoire
export const rateLimiter = new RateLimiter();

/**
 * Extrait l'IP client d'une requête Next.js de manière robuste.
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // Prend la première IP dans la chaîne de proxies
    const firstIp = forwardedFor.split(',')[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp.trim();

  return '127.0.0.1';
}
