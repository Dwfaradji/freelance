import crypto from 'crypto';

/**
 * Génère une référence unique et professionnelle pour chaque soumission de formulaire DevEvoke.
 * Format : DEV-YYYYMMDD-XXXX (ex: DEV-20261027-A8B9)
 */
export function generateReference(prefix: string = 'DEV'): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;

  // 4 caractères hexadécimaux aléatoires cryptographiquement sûrs
  const randomSuffix = crypto.randomBytes(2).toString('hex').toUpperCase();

  return `${prefix}-${dateStr}-${randomSuffix}`;
}
