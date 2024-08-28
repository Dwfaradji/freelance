// utils/slugify.ts
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // remplace les espaces par des tirets
    .replace(/[^\w\-]+/g, '') // enlève tout ce qui n'est pas un mot ou un tiret
    .replace(/\-\-+/g, '-') // remplace les doubles tirets par un seul
    .trim(); // enlève les tirets au début et à la fin
}
