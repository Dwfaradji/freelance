import React from 'react';

import type { Metadata, ResolvingMetadata } from 'next';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

type Props = {
  params: { slug: string };
};

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { slug } = params;
  // Trouver les données du blog correspondant en utilisant le slug
  const product = blogData.find((blog) => slugify(blog.title) === slug);
  if (!product) {
    throw new Error('Blog not found');
  }
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.descriptionShort,
    alternates: {
      canonical: `https://www.devevoke.com/blog/${slugify(product.title)}`,
    },
    /* openGraph: {
      images: [product.img, ...previousImages],
    },*/
  };
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <> {children}</>;
}
