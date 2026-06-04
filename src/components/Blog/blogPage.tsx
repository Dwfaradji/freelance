'use client';
import React, { useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Image from 'next/image';
import { BlogProps } from '@/data/typeFile';
import ButtonNetwork from '@/components/ui/ButtonNetwork/buttonNetwork';
import myPhoto from '@/images/about/photo-profil-1920.webp';

interface PropsBlogPage {
  blog: BlogProps;
}

const BlogPage = ({ blog }: PropsBlogPage) => {
  const formattedDate = useMemo(() => {
    return blog ? new Date(blog.date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';
  }, [blog]);

  return (
    <article className="min-h-screen pb-24">
      {/* Hero de l'article */}
      <header className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex flex-col justify-end">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            priority
            src={blog.img}
            alt={blog.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                DevEvoke
              </span>
              <span className="text-sm font-medium text-muted-light">{formattedDate}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {blog.title}
            </h1>

            {/* Auteur & Partage */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <Image
                  priority
                  width={48}
                  height={48}
                  src={myPhoto}
                  alt="Boucif Faradji"
                  className="size-12 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <h3 className="font-semibold text-white">Boucif Faradji</h3>
                  <p className="text-sm text-muted-light">Fondateur DevEvoke</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-light hidden sm:block">Partager cet article</span>
                <ButtonNetwork url={blog} />
              </div>
            </div>
          </Fade>
        </div>
      </header>

      {/* Corps de l'article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <p className="text-xl md:text-2xl text-primary-200 font-medium leading-relaxed mb-12">
          {blog.descriptionShort}
        </p>

        <div className="space-y-12">
          {blog.descriptionLong?.map((val, i) => (
            <Fade direction="up" fraction={0.2} triggerOnce key={i}>
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-primary-500 pl-4">
                  {val.title}
                </h2>
                <p className="text-muted leading-relaxed text-lg">
                  {val.text}
                </p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Bouton Retour */}
        <div className="mt-20 pt-10 border-t border-white/10 flex justify-center">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-white/10 hover:border-white/20 hover:glass-strong text-white font-medium transition-all group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour aux articles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPage;