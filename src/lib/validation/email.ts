/**
 * Module centralisé de validation des adresses e-mail professionnelles pour DevEvoke.
 *
 * Responsabilités :
 * - Normalisation stricte (espaces, caractères invisibles, casse)
 * - Validation syntaxique conforme RFC 5321 / 5322 (longueur, structure, TLD)
 * - Extraction sécurisée du domaine
 * - Détection des fournisseurs d'e-mails personnels / grand public (free providers)
 * - Détection des fournisseurs d'e-mails temporaires / jetables (disposable domains)
 * - Messages d'erreur UX en français clairs et homogènes entre client et serveur
 */

export const MAX_EMAIL_LENGTH = 254;
export const MIN_EMAIL_LENGTH = 5;
export const MAX_LOCAL_PART_LENGTH = 64;
export const MAX_DOMAIN_LENGTH = 253;
export const MAX_DOMAIN_LABEL_LENGTH = 63;

/**
 * Messages d'erreur orientés UX (en français, destinés à l'interface utilisateur).
 */
export const EMAIL_VALIDATION_MESSAGES = {
  INVALID_SYNTAX: 'Veuillez saisir une adresse e-mail valide.',
  FREE_PROVIDER: "Merci d'utiliser votre adresse e-mail professionnelle.",
  DISPOSABLE_PROVIDER: 'Les adresses e-mail temporaires ne sont pas acceptées.',
} as const;

/**
 * Codes d'erreur internes (pour la télémétrie, les logs serveur et les tests).
 */
export type EmailValidationErrorCode =
  | 'EMAIL_REQUIRED'
  | 'INVALID_EMAIL_SYNTAX'
  | 'FREE_EMAIL_PROVIDER'
  | 'DISPOSABLE_EMAIL_DOMAIN'
  | 'INVALID_EMAIL_DOMAIN_DNS';

export interface EmailValidationResult {
  isValid: boolean;
  normalizedEmail: string;
  domain: string | null;
  code?: EmailValidationErrorCode;
  message?: string;
}

/**
 * Liste centralisée et maintenable des fournisseurs de messagerie grand public / personnels.
 * Ces domaines sont refusés sur les formulaires B2B de DevEvoke.
 */
export const FREE_EMAIL_PROVIDERS: ReadonlySet<string> = new Set([
  // Google
  'gmail.com',
  'googlemail.com',

  // Microsoft
  'outlook.com',
  'outlook.fr',
  'outlook.be',
  'outlook.ch',
  'outlook.de',
  'outlook.es',
  'outlook.it',
  'outlook.co.uk',
  'hotmail.com',
  'hotmail.fr',
  'hotmail.be',
  'hotmail.ch',
  'hotmail.de',
  'hotmail.es',
  'hotmail.it',
  'hotmail.co.uk',
  'live.com',
  'live.fr',
  'live.be',
  'live.co.uk',
  'msn.com',

  // Yahoo
  'yahoo.com',
  'yahoo.fr',
  'yahoo.be',
  'yahoo.ch',
  'yahoo.de',
  'yahoo.es',
  'yahoo.it',
  'yahoo.co.uk',
  'yahoo.ca',
  'ymail.com',
  'rocketmail.com',

  // Apple
  'icloud.com',
  'me.com',
  'mac.com',

  // AOL
  'aol.com',
  'aol.fr',

  // Proton
  'proton.me',
  'protonmail.com',
  'protonmail.ch',
  'pm.me',

  // GMX & Mail.com
  'gmx.com',
  'gmx.fr',
  'gmx.de',
  'gmx.net',
  'gmx.at',
  'gmx.ch',
  'mail.com',
  'email.com',

  // FAI Français & Européens grand public
  'orange.fr',
  'wanadoo.fr',
  'free.fr',
  'aliceadsl.fr',
  'libertysurf.fr',
  'sfr.fr',
  'neuf.fr',
  'club-internet.fr',
  'cegetel.net',
  'bbox.fr',
  'numericable.fr',
  'noos.fr',
  'laposte.net',
  'voila.fr',
  'skynet.be',
  'bluewin.ch',

  // Autres webmails personnels courants
  'zoho.com',
  'zohomail.eu',
  'yandex.com',
  'yandex.ru',
  'mail.ru',
  'tutanota.com',
  'tuta.io',
  'tuta.com',
  'hushmail.com',
]);

/**
 * Liste centralisée et maintenable des domaines d'e-mails jetables / temporaires.
 */
export const DISPOSABLE_EMAIL_DOMAINS: ReadonlySet<string> = new Set([
  // Yopmail & alias connus
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'cool.fr.nf',
  'jetable.fr.nf',
  'courriel.fr.nf',
  'moncourrier.fr.nf',
  'monemail.fr.nf',
  'monmail.fr.nf',
  'hide.biz.st',
  'mymail.infos.st',

  // Mailinator
  'mailinator.com',
  'mailinator.net',
  'mailinator.org',
  'mailinator2.com',
  'sogetthis.com',
  'mailinater.com',

  // Guerrilla Mail
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'guerrillamail.biz',
  'guerrillamail.de',
  'guerrillamail.info',
  'guerrillamailblock.com',
  'grr.la',
  'sharklasers.com',
  'pokemail.net',
  'spam4.me',

  // Temp-mail & variantes
  'temp-mail.org',
  'temp-mail.io',
  'temp-mail.ru',
  'tempmail.com',
  'tempmail.net',
  'tempmail.org',
  'tempmail.plus',
  'tempmail.de',
  'tempmailo.com',
  'tempail.com',
  'tempinbox.com',
  'mytemp.email',
  'mailtemp.info',

  // 10MinuteMail & variantes
  '10minutemail.com',
  '10minutemail.net',
  '10minutemail.org',
  '10minutemail.co.za',
  '20minutemail.com',
  'minutemail.com',

  // TrashMail & Jetable
  'trashmail.com',
  'trashmail.fr',
  'trashmail.net',
  'trashmail.org',
  'trashmail.me',
  'trash-mail.com',
  'jetable.org',
  'jetable.com',
  'jetable.net',

  // Autres services jetables répandus
  'maildrop.cc',
  'mailnesia.com',
  'mailcatch.com',
  'mailexpire.com',
  'mailforspam.com',
  'mailnull.com',
  'mailsac.com',
  'mohmal.com',
  'getnada.com',
  'nada.email',
  'abyssmail.com',
  'boximail.com',
  'dropmail.me',
  'fakeinbox.com',
  'fakemailgenerator.com',
  'throwawaymail.com',
  'dispostable.com',
  'getairmail.com',
  'mintemail.com',
  'burnermail.io',
  'inboxkitten.com',
  'spamgourmet.com',
  'incognitomail.com',
  'crazymailing.com',
  'emailondeck.com',
  'harakirimail.com',
  'maildu.de',
  'wegwerfmail.de',
  'tempmailaddress.com',
]);

const LOCAL_PART_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
const DOMAIN_LABEL_REGEX = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
const TLD_REGEX = /^(?:[a-z]{2,63}|xn--[a-z0-9]{2,59})$/;

/**
 * Normalise une adresse e-mail :
 * - Convertit les entrées non-chaînes en chaîne vide
 * - Supprime les espaces invisibles (zero-width) et les espaces en début/fin
 * - Passe l'adresse en minuscules
 */
export function normalizeEmail(email: unknown): string {
  if (typeof email !== 'string') {
    return '';
  }
  return email
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .trim()
    .toLowerCase();
}

/**
 * Vérifie rigoureusement la syntaxe d'une adresse e-mail :
 * - Longueur bornée entre 5 et 254 caractères
 * - Aucun caractère d'espacement ou de contrôle (anti-CRLF injection)
 * - Exactement un caractère '@'
 * - Partie locale valide (1..64 car., pas de point initial/final ou double point)
 * - Domaine valide (labels conformes DNS, TLD alphabétique ou punycode d'au moins 2 caractères)
 */
export function isValidEmailSyntax(email: unknown): boolean {
  const normalized = normalizeEmail(email);

  if (
    normalized.length < MIN_EMAIL_LENGTH ||
    normalized.length > MAX_EMAIL_LENGTH
  ) {
    return false;
  }

  // Rejeter tout espace, retour chariot, saut de ligne ou caractère de contrôle
  if (/[\s\r\n\x00-\x1F\x7F]/.test(normalized)) {
    return false;
  }

  const atIndex = normalized.indexOf('@');
  if (atIndex <= 0 || atIndex !== normalized.lastIndexOf('@')) {
    return false;
  }

  const localPart = normalized.slice(0, atIndex);
  const domainPart = normalized.slice(atIndex + 1);

  // Validation de la partie locale
  if (
    localPart.length === 0 ||
    localPart.length > MAX_LOCAL_PART_LENGTH ||
    localPart.startsWith('.') ||
    localPart.endsWith('.') ||
    localPart.includes('..') ||
    !LOCAL_PART_REGEX.test(localPart)
  ) {
    return false;
  }

  return isValidDomainSyntax(domainPart);
}

/**
 * Vérifie qu'une chaîne correspond à un nom de domaine valide (avec au moins un TLD).
 */
export function isValidDomainSyntax(domain: string): boolean {
  if (
    !domain ||
    domain.length < 3 ||
    domain.length > MAX_DOMAIN_LENGTH ||
    domain.startsWith('.') ||
    domain.endsWith('.') ||
    domain.includes('..')
  ) {
    return false;
  }

  const labels = domain.split('.');
  if (labels.length < 2) {
    return false;
  }

  for (const label of labels) {
    if (
      label.length === 0 ||
      label.length > MAX_DOMAIN_LABEL_LENGTH ||
      !DOMAIN_LABEL_REGEX.test(label)
    ) {
      return false;
    }
  }

  const tld = labels[labels.length - 1];
  if (!tld || !TLD_REGEX.test(tld)) {
    return false;
  }

  return true;
}

/**
 * Extrait proprement le domaine d'une adresse e-mail normalisée.
 * Retourne `null` si l'adresse est malformée.
 */
export function getEmailDomain(email: unknown): string | null {
  if (!isValidEmailSyntax(email)) {
    return null;
  }
  const normalized = normalizeEmail(email);
  const atIndex = normalized.lastIndexOf('@');
  return normalized.slice(atIndex + 1);
}

/**
 * Permet d'accepter soit une adresse e-mail complète (`user@domain.com`),
 * soit directement un domaine (`domain.com`) dans `isFreeEmailProvider` et `isDisposableEmail`.
 */
function resolveDomainInput(domainOrEmail: unknown): string | null {
  if (typeof domainOrEmail !== 'string') {
    return null;
  }
  const cleaned = normalizeEmail(domainOrEmail);
  if (!cleaned) {
    return null;
  }
  if (cleaned.includes('@')) {
    return getEmailDomain(cleaned);
  }
  return isValidDomainSyntax(cleaned) ? cleaned : null;
}

/**
 * Vérifie si un domaine correspond exactement à un domaine de la liste,
 * ou en est un sous-domaine direct (ex: `mail.yopmail.com` -> `yopmail.com`).
 * Ne bloque JAMAIS par correspondance partielle de mot (ex: `ime-free.fr` reste autorisé).
 */
function matchesDomainBlacklist(
  domain: string,
  blacklist: ReadonlySet<string>
): boolean {
  if (blacklist.has(domain)) {
    return true;
  }

  const parts = domain.split('.');
  for (let i = 1; i < parts.length - 1; i++) {
    const parentDomain = parts.slice(i).join('.');
    if (blacklist.has(parentDomain)) {
      return true;
    }
  }

  return false;
}

/**
 * Détermine si le domaine (ou l'adresse e-mail) appartient à un fournisseur grand public / gratuit.
 */
export function isFreeEmailProvider(domainOrEmail: unknown): boolean {
  const domain = resolveDomainInput(domainOrEmail);
  if (!domain) {
    return false;
  }
  return matchesDomainBlacklist(domain, FREE_EMAIL_PROVIDERS);
}

/**
 * Détermine si le domaine (ou l'adresse e-mail) appartient à un service d'e-mails jetables / temporaires.
 */
export function isDisposableEmail(domainOrEmail: unknown): boolean {
  const domain = resolveDomainInput(domainOrEmail);
  if (!domain) {
    return false;
  }
  return matchesDomainBlacklist(domain, DISPOSABLE_EMAIL_DOMAINS);
}

/**
 * Analyse complète d'une adresse e-mail pour les formulaires B2B DevEvoke.
 * Retourne la validité, l'adresse normalisée, le domaine, le code d'erreur éventuel et le message UX en français.
 */
export function validateProfessionalEmail(email: unknown): EmailValidationResult {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    return {
      isValid: false,
      normalizedEmail: '',
      domain: null,
      code: 'EMAIL_REQUIRED',
      message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
    };
  }

  if (!isValidEmailSyntax(normalizedEmail)) {
    return {
      isValid: false,
      normalizedEmail,
      domain: null,
      code: 'INVALID_EMAIL_SYNTAX',
      message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
    };
  }

  const domain = getEmailDomain(normalizedEmail);
  if (!domain) {
    return {
      isValid: false,
      normalizedEmail,
      domain: null,
      code: 'INVALID_EMAIL_SYNTAX',
      message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
    };
  }

  // 1. Vérifier en priorité les e-mails temporaires / jetables
  if (isDisposableEmail(domain)) {
    return {
      isValid: false,
      normalizedEmail,
      domain,
      code: 'DISPOSABLE_EMAIL_DOMAIN',
      message: EMAIL_VALIDATION_MESSAGES.DISPOSABLE_PROVIDER,
    };
  }

  // 2. Vérifier les fournisseurs grand public / personnels
  if (isFreeEmailProvider(domain)) {
    return {
      isValid: false,
      normalizedEmail,
      domain,
      code: 'FREE_EMAIL_PROVIDER',
      message: EMAIL_VALIDATION_MESSAGES.FREE_PROVIDER,
    };
  }

  return {
    isValid: true,
    normalizedEmail,
    domain,
  };
}

/**
 * Booléen rapide indiquant si une adresse e-mail est syntaxiquement valide et professionnelle.
 */
export function isProfessionalEmail(email: unknown): boolean {
  return validateProfessionalEmail(email).isValid;
}

