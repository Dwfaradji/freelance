'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';
import myPhoto from '@/images/about/photo-profil-688.webp';

const BlogHeader = () => {
  const sortedPosts = [...blogData].sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestPost = sortedPosts[0];
  const formattedDate = new Date(latestPost.date).toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <Link href={`/blog/${slugify(latestPost.title)}`}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 overflow-hidden md:h-full md:min-h-[360px]">
            <Image
              src={latestPost.img}
              width={600}
              height={400}
              alt={latestPost.alt}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-surface)]/30 md:block hidden" />
          </div>

          {/* Contenu */}
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <span className="section-label">À la une</span>

            <h2 className="mt-2 text-2xl font-bold text-white leading-tight lg:text-3xl group-hover:text-gradient transition-all"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              {latestPost.title}
            </h2>

            <p className="mt-4 text-sm text-muted leading-relaxed line-clamp-3">
              {latestPost.descriptionShort}
            </p>

            {/* Auteur + Date */}
            <div className="mt-6 flex items-center gap-3">
              <Image
                width={36}
                height={36}
                className="size-9 rounded-full object-cover ring-2 ring-primary/20"
                src={myPhoto.src}
                alt="Auteur"
                sizes="36px"
              />
              <div>
                <p className="text-sm font-medium text-white">Boucif Faradji</p>
                <p className="text-xs text-muted">{formattedDate}</p>
              </div>
            </div>

            {/* Lien */}
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-secondary-400 transition-colors">
              Lire l'article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogHeader;
