import { MetadataRoute } from 'next';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.devevoke.com';

  // Canonical Static Routes (200 OK only, no redirects, no noindex duplicates)
  const staticRoutes: MetadataRoute.Sitemap = [
    // Page d'accueil & Identité Agence
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },

    // Pôle Sectoriel Médico-Social & Pages Piliers Stratégiques
    { url: `${baseUrl}/agence-digitale-medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/solutions-medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/developpement-logiciel-medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/solutions-medico-social/associations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/ime`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/sessad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/esat`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/ehpad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Les 6 Piliers d'Ingénierie & Expertises
    { url: `${baseUrl}/developpement-web`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.90 },
    { url: `${baseUrl}/application-mobile`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.90 },
    { url: `${baseUrl}/developpement-saas`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.90 },
    { url: `${baseUrl}/solutions-metier`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.90 },
    { url: `${baseUrl}/automatisation`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.90 },
    { url: `${baseUrl}/securite-et-conformite`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Réalisations, Solutions Éditées & Études de Cas
    { url: `${baseUrl}/realisations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${baseUrl}/realisations/floticar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.80 },
    { url: `${baseUrl}/logiciel-gestion-vehicules-medico-social`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.80 },

    // Outils & Diagnostic
    { url: `${baseUrl}/diagnostic-numerique`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.90 },

    // Services, Agence & Contact
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${baseUrl}/templates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.80 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/tarifs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.80 },

    // Blog & Ressources
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },

    // Informations complémentaires & Légales
    { url: `${baseUrl}/foire-aux-questions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.70 },
    { url: `${baseUrl}/info-procedure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.65 },
    { url: `${baseUrl}/politique-confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.40 },
    { url: `${baseUrl}/cgv`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.40 },
    { url: `${baseUrl}/mentions-legal`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.40 },
  ];

  // Dynamic Blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogData.map((blog) => ({
    url: `${baseUrl}/blog/${slugify(blog.title)}`,
    lastModified: new Date(blog.date || new Date()),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
