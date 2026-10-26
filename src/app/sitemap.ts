import { MetadataRoute } from 'next';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.devevoke.com';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    // Page d'accueil & Positionnement Agence
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/agence-digitale-medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/secteurs/medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },

    // Hub Solutions & Piliers Numériques Dédiés
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/solutions-medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/developpement-logiciel-medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/logiciel-gestion-vehicules-medico-social`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/solutions/site-web`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/application-web`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/application-mobile`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/logiciel-metier`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/saas-sur-mesure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/automatisation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/solutions/outils-metier`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // Hub Réalisations & Étude de Cas Floticar
    { url: `${baseUrl}/realisations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/realisations/floticar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Solutions par Établissement Médico-Social
    { url: `${baseUrl}/solutions-medico-social/ime`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/sessad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/esat`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/ehpad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/solutions-medico-social/associations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Outils & Démonstrations
    { url: `${baseUrl}/diagnostic-numerique`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/demande-demo`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Expertise Technique, Sécurité & Tarifs
    { url: `${baseUrl}/securite-et-conformite`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tarifs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/templates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog & Contenu
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },

    // Informations complémentaires & Légales
    { url: `${baseUrl}/foire-aux-questions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/info-procedure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/info-tarif`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/politique-confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/cgv`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/mentions-legal`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
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
