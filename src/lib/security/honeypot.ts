/**
 * Protection Anti-Spam par Honeypot (champs pièges pour robots).
 * Les humains ne voient pas ces champs (masqués en CSS / accessibilité).
 * Les robots les remplissent automatiquement.
 */

const HONEYPOT_FIELD_NAMES = [
  'website',
  'companyWebsite',
  'hp_confirm',
  '_gotcha',
  'faxNumber',
] as const;

/**
 * Vérifie si le payload contient un champ honeypot renseigné.
 * Si oui, la requête provient très probablement d'un robot spammeur.
 */
export function checkHoneypot(data: Record<string, unknown>): { isBot: boolean; fieldTriggered?: string } {
  if (!data || typeof data !== 'object') {
    return { isBot: false };
  }

  for (const field of HONEYPOT_FIELD_NAMES) {
    const val = data[field];
    if (typeof val === 'string' && val.trim().length > 0) {
      return { isBot: true, fieldTriggered: field };
    }
  }

  return { isBot: false };
}
