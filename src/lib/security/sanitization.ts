/**
 * Utilitaires de sanitisation et d'échappement sécurisé pour DevEvoke.
 * Protège contre les injections XSS, injections d'en-têtes email et caractères de contrôle abusifs.
 */

/**
 * Échappe tous les caractères sensibles pour un rendu HTML sécurisé.
 * Empêche l'exécution de tout script (XSS) dans les emails HTML ou pages web.
 */
export function escapeHtml(str: string = ''): string {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/`/g, '&#96;');
}

/**
 * Nettoie une chaîne de caractères utilisateur :
 * - Supprime les caractères de contrôle non imprimables (sauf retours à la ligne et tabulations)
 * - Normalise les espaces multiples successifs
 * - Trim les espaces au début et à la fin
 * - Tronque à la longueur maximale autorisée si spécifiée
 */
export function sanitizeString(val: unknown, maxLength?: number): string {
  if (typeof val !== 'string') {
    return '';
  }

  // Supprimer les caractères de contrôle invisibles sauf \r, \n, \t
  let cleaned = val.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // Normaliser les retours chariots Windows (\r\n -> \n)
  cleaned = cleaned.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Normaliser les espaces consécutifs sur une même ligne
  cleaned = cleaned.replace(/[ \t]{2,}/g, ' ');

  // Trim
  cleaned = cleaned.trim();

  // Tronquer si longueur max définie
  if (maxLength && maxLength > 0 && cleaned.length > maxLength) {
    cleaned = cleaned.slice(0, maxLength);
  }

  return cleaned;
}

/**
 * Normalise une adresse email (trim, minuscule, suppression des espaces invisibles).
 */
export function normalizeEmail(email: unknown): string {
  if (typeof email !== 'string') {
    return '';
  }
  return email.trim().toLowerCase();
}

/**
 * Nettoie et normalise un numéro de téléphone.
 * Conserve uniquement les chiffres, les espaces et le signe '+' initial.
 */
export function normalizePhone(phone: unknown): string {
  if (typeof phone !== 'string') {
    return '';
  }
  const trimmed = phone.trim();
  // Ne garder que +, chiffres, espaces, tirets et points
  return trimmed.replace(/[^\d\s+\-.]/g, '').slice(0, 30);
}

/**
 * Supprime les retours à la ligne pour empêcher les attaques par injection
 * d'en-têtes email (CRLF injection dans Subject, To, From, etc.).
 */
export function stripCrlf(str: string = ''): string {
  return str.replace(/[\r\n]+/g, ' ').trim();
}
