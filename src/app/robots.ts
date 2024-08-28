import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/public/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/public/'],
      },
    ],
    sitemap: 'https://www.devevoke.com/sitemap.xml',
  };
}
