'use client';
import React, { useMemo, useState, useEffect } from 'react';
import { Fade } from '@/components/ui/Fade';
import Link from 'next/link';
import Image from 'next/image';
import { BlogProps } from '@/data/typeFile';
import ButtonNetwork from '@/components/ui/ButtonNetwork/buttonNetwork';
import myPhoto from '@/images/about/photo-profil-1920.webp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface PropsBlogPage {
  blog: BlogProps;
}

const BlogPage = ({ blog }: PropsBlogPage) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const currentIndex = useMemo(() => {
    return blogData.findIndex((b) => b.id === blog.id || b.title === blog.title);
  }, [blog]);

  const prevBlog = currentIndex > 0 ? blogData[currentIndex - 1] : null;
  const nextBlog = currentIndex >= 0 && currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;
  const formattedDate = useMemo(() => {
    return blog ? new Date(blog.date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';
  }, [blog]);

  return (
    <article className="min-h-screen pb-24 relative">
      {/* Barre de progression de lecture */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-[72px] left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 origin-left z-40"
      />

      {/* Fil d'Ariane & Retour rapide au sommet */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <Breadcrumb
          items={[
            { label: 'Ressources & Guides', href: '/blog' },
            { label: blog.title },
          ]}
          backLink={{ href: '/blog', label: 'Retour aux articles' }}
        />
      </div>

      {/* Hero de l'article */}
      <header className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex flex-col justify-end mt-2">
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

        {/* Navigation Inter-Articles (Précédent / Suivant) */}
        <nav aria-label="Navigation entre articles" className="mt-20 pt-10 border-t border-white/10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevBlog ? (
              <Link
                href={`/blog/${slugify(prevBlog.title)}`}
                className="group p-5 rounded-2xl glass border border-white/5 hover:border-primary-500/30 hover:bg-white/5 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-1.5 text-xs text-primary-400 font-semibold mb-2">
                  <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Article précédent</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-primary-300 transition-colors line-clamp-2">
                  {prevBlog.title}
                </h3>
              </Link>
            ) : (
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] opacity-40 flex items-center justify-center text-xs text-neutral-500">
                Premier article du blog
              </div>
            )}

            {nextBlog ? (
              <Link
                href={`/blog/${slugify(nextBlog.title)}`}
                className="group p-5 rounded-2xl glass border border-white/5 hover:border-primary-500/30 hover:bg-white/5 transition-all flex flex-col justify-between text-right"
              >
                <div className="flex items-center justify-end gap-1.5 text-xs text-primary-400 font-semibold mb-2">
                  <span>Article suivant</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-primary-300 transition-colors line-clamp-2">
                  {nextBlog.title}
                </h3>
              </Link>
            ) : (
              <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] opacity-40 flex items-center justify-center text-xs text-neutral-500">
                Dernier article publié
              </div>
            )}
          </div>

          <div className="flex justify-center pt-4">
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass border border-white/10 hover:border-primary-500/40 hover:bg-white/10 text-white font-medium text-sm transition-all group"
            >
              <BookOpen className="size-4 text-primary-400" />
              <span>Consulter tous les articles du blog</span>
            </Link>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default BlogPage;