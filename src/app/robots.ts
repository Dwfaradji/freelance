import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/api/'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.devevoke.com/sitemap.xml',
  };
}
