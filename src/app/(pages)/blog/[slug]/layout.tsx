import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

type Props = {
  params: { slug: string };
};

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = params;

  // Trouver les données du blog correspondant en utilisant le slug
  const blog = blogData.find((blog) => slugify(blog.title) === slug);

  // Gestion d'erreur : Si le blog n'est pas trouvé
  if (!blog) {
    return {
      title: 'Article introuvable',
      description: 'Cet article n’existe pas ou a été supprimé.',
    };
  }

  // Récupérer les images précédemment définies (si elles existent)
  const previousImages = (await parent).openGraph?.images || [];

  // Générer les métadonnées pour la page de blog
  return {
    title: blog.title,
    description: blog.descriptionShort || 'Découvrez cet article sur notre blog.',
    alternates: {
      canonical: `https://www.devevoke.com/blog/${slugify(blog.title)}`, // Lien canonique pour SEO
    },
    openGraph: {
      title: blog.title,
      description: blog.descriptionShort || 'Lisez cet article sur Devevoke.',
      url: `https://www.devevoke.com/blog/${slugify(blog.title)}`,
      images: [blog.img, ...previousImages], // Ajout des images dans OpenGraph
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.descriptionShort || 'Découvrez cet article sur notre blog.',
      site: `https://www.devevoke.com/blog/${slugify(blog.title)}`,
      images: [blog.img],
    },
  };
};

// Composant de layout qui encapsule la page
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
