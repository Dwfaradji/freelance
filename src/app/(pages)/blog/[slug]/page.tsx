import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPage from '@/components/Blog/blogPage';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData.find((blog) => slugify(blog.title) === slug);

  if (!blog) {
    return {
      title: 'Article introuvable | DevEvoke',
      description: "Cet article n'existe pas ou a été supprimé.",
    };
  }

  const url = `https://www.devevoke.com/blog/${slug}`;

  // Les images importées dans Next.js via Next/Image ou Webpack (ex: article1.src) 
  // renvoient un chemin relatif en production, on s'assure d'avoir l'URL absolue.
  const imageUrl = blog.img?.startsWith('http') ? blog.img : `https://www.devevoke.com${blog.img}`;

  return {
    title: `${blog.title} | Blog DevEvoke`,
    description: blog.metaDescription || blog.descriptionShort,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription || blog.descriptionShort,
      url: url,
      type: 'article',
      publishedTime: blog.date,
      authors: ['DevEvoke'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.alt || blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.metaDescription || blog.descriptionShort,
      images: [imageUrl],
    },
  };
}

const Page = ({ params }: Props) => {
  const { slug } = React.use(params);
  const blog = blogData.find((blog) => slugify(blog.title) === slug);

  if (!blog) {
    notFound();
  }

  const imageUrl = blog.img?.startsWith('http') ? blog.img : `https://www.devevoke.com${blog.img}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.metaDescription || blog.descriptionShort,
    image: imageUrl,
    datePublished: blog.date || '2024-01-01',
    author: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DevEvoke',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.devevoke.com/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.devevoke.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPage blog={blog} />
    </>
  );
};

export default Page;
