/**
 * Fonctions de normalisation et de formatage des données pour les emails DevEvoke.
 * Prévient l'affichage de valeurs indésirables ("undefined", "null") et garantit
 * une typographie française soignée.
 */

/**
 * Formate un prénom et nom sans jamais afficher "undefined" ou "null".
 */
export function formatName(firstName?: string | null, lastName?: string | null): string {
  const first = (firstName || '').trim();
  const last = (lastName || '').trim();

  if (first && last) return `${first} ${last}`;
  if (first) return first;
  if (last) return last;
  return 'Client';
}

/**
 * Formate une formule de salutation personnalisée.
 */
export function formatSalutation(firstName?: string | null): string {
  const clean = (firstName || '').trim();
  if (!clean || clean.toLowerCase() === 'undefined' || clean.toLowerCase() === 'null') {
    return 'Bonjour,';
  }
  return `Bonjour ${clean},`;
}

/**
 * Formate le nom d'entreprise ou association.
 */
export function formatCompany(company?: string | null): string {
  const clean = (company || '').trim();
  if (!clean || clean.toLowerCase() === 'undefined' || clean.toLowerCase() === 'null') {
    return 'Non précisé';
  }
  return clean;
}

/**
 * Formate un numéro de téléphone avec une typographie lisible.
 */
export function formatPhone(phone?: string | null): string {
  const clean = (phone || '').trim();
  if (!clean || clean.toLowerCase() === 'undefined' || clean.toLowerCase() === 'null') {
    return 'Non renseigné';
  }

  // Formatage standard français si 10 chiffres (06 12 34 56 78)
  const digitsOnly = clean.replace(/\D/g, '');
  if (digitsOnly.length === 10 && digitsOnly.startsWith('0')) {
    return digitsOnly.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }

  return clean;
}

/**
 * Formate un montant monétaire en euros avec espace insécable (ex : 12 500 €).
 */
export function formatCurrency(amount: number | string | null | undefined): string {
  if (amount === null || amount === undefined || amount === '') {
    return 'Non précisé';
  }

  const numericValue = typeof amount === 'string' ? parseFloat(amount.replace(/[^\d.-]/g, '')) : amount;
  if (isNaN(numericValue)) {
    return String(amount);
  }

  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(numericValue);
}

/**
 * Formate une date en français (ex : 27 octobre 2026).
 */
export function formatDate(dateInput?: Date | string | number | null): string {
  if (!dateInput) {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date());
  }

  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(d.getTime())) {
    return String(dateInput);
  }

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

/**
 * Formate un pourcentage (ex : 45 %).
 */
export function formatPercentage(value: number | string | null | undefined): string {
  if (value === null || value === undefined || value === '') {
    return '0 %';
  }
  const num = typeof value === 'string' ? parseFloat(value.replace(/[^\d.-]/g, '')) : value;
  if (isNaN(num)) return String(value);
  return `${num.toLocaleString('fr-FR')} %`;
}

/**
 * Formate un nombre standard avec séparateur de milliers français.
 */
export function formatNumber(value: number | string | null | undefined): string {
  if (value === null || value === undefined || value === '') {
    return '0';
  }
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return String(value);
  return new Intl.NumberFormat('fr-FR').format(num);
}

/**
 * Supprime les balises HTML pour produire une chaîne brute lisible.
 */
export function stripHtml(html: string = ''): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<\/td>/gi, ' | ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#96;/g, '`')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}
