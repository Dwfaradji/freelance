'use client';
import React from 'react';
import { motion } from 'motion/react';
import BlogHeader from '../Blog/blogHeader';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import { slugify } from '@/utils/slugify';

const BlogHome = () => {
  // Trier les articles par date et prendre les 3 suivants (après le 1er qui est dans BlogHeader)
  const sortedPosts = [...blogData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const nextPosts = sortedPosts.slice(1, 4);

  return (
    <section id="section6" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="section-label mb-4">Actualités & Insights</span>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
              Derniers{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 drop-shadow-sm">
                articles
              </span>
            </h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 shrink-0">
            Tous les articles
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Article principal (À la une) */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <BlogHeader />
          </motion.div>
        </div>

        {/* Grille des 3 articles suivants */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nextPosts.map((post, index) => {
            const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <Link href={`/blog/${slugify(post.title)}`} key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="group flex flex-col h-full overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] transition-all duration-500 md:hover:-translate-y-2 hover:border-white/10 hover:bg-white/[0.04] shadow-lg hover:shadow-primary-500/10"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-semibold tracking-wide uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-4">
                      <span>{formattedDate}</span>
                      <span className="size-1 rounded-full bg-gray-600"></span>
                      <span>{post.readingTime} min</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3 mb-6 flex-grow">
                      {post.descriptionShort}
                    </p>
                    
                    {/* Read More Link */}
                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary-400 transition-colors">
                      Lire la suite
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BlogHome;
