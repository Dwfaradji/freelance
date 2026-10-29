import React from 'react';
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
      <article className="group relative overflow-hidden rounded-3xl glass border border-white/5 transition-all duration-300 hover:border-white/10 hover:glass-strong hover:-translate-y-1 shadow-lg">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 overflow-hidden md:h-full md:min-h-[400px]">
            <Image
              src={latestPost.img}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
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

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <Image
                  src={myPhoto}
                  alt="Auteur Boucif Faradji"
                  className="size-10 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">Boucif Faradji</p>
                  <p className="text-xs text-muted">{formattedDate}</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
                Lire l'article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogHeader;
