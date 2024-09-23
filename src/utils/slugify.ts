export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD') // Normalise le texte en séparant les caractères diacritiques
    .replace(/[\u0300-\u036f]/g, '') // Supprime les diacritiques (accents)
    .toLowerCase()
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/[^\w\-]+/g, '') // Enlève tout ce qui n'est pas un mot ou un tiret
    .replace(/\-\-+/g, '-') // Remplace les doubles tirets par un seul
    .trim(); // Enlève les tirets au début et à la fin
}