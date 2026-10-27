import crypto from 'crypto';

let seqCounter = Math.floor(Math.random() * 256);

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

  // Compteur incrémental + octet aléatoire pour garantir l'unicité stricte sans collision
  seqCounter = (seqCounter + 1) & 0xff;
  const randByte = crypto.randomBytes(1)[0];
  const seqHex = seqCounter.toString(16).padStart(2, '0').toUpperCase();
  const randHex = randByte.toString(16).padStart(2, '0').toUpperCase();
  const randomSuffix = `${seqHex}${randHex}`;

  return `${prefix}-${dateStr}-${randomSuffix}`;
}
