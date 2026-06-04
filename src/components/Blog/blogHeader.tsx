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
        className="group relative overflow-hidden rounded-3xl glass border border-white/5 transition-all duration-500 hover:border-white/10 hover:glass-strong shadow-lg"
      >
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 overflow-hidden md:h-full md:min-h-[400px]">
            <Image
              src={latestPost.img}
              width={800}
              height={600}
              alt={latestPost.alt}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 md:block hidden" />
          </div>

          {/* Contenu */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider w-fit mb-6">
              <span className="size-1.5 rounded-full bg-primary-400 animate-pulse"></span>
              À la une
            </span>

            <h2 className="text-3xl font-bold text-white leading-tight lg:text-4xl group-hover:text-primary-400 transition-colors">
              {latestPost.title}
            </h2>

            <p className="mt-6 text-base text-muted leading-relaxed line-clamp-3">
              {latestPost.descriptionShort}
            </p>

            {/* Auteur + Date */}
            <div className="mt-8 flex items-center gap-4">
              <Image
                width={40}
                height={40}
                className="size-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-primary/30 transition-all"
                src={myPhoto.src}
                alt="Auteur"
                sizes="40px"
              />
              <div>
                <p className="text-sm font-semibold text-white">Boucif Faradji</p>
                <p className="text-xs text-muted-light mt-0.5">{formattedDate}</p>
              </div>
            </div>

            {/* Lien */}
            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary-400 group-hover:text-primary-300 transition-colors">
              Lire l'article complet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
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
