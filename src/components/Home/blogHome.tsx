import React from 'react';
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
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-label mb-4">Actualités &amp; Insights</span>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
              Derniers{' '}
              <span className="text-highlight">
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
        </div>

        {/* Article principal (À la une) */}
        <div className="mb-12">
          <BlogHeader />
        </div>

        {/* 3 articles suivants */}
        <div className="grid md:grid-cols-3 gap-8">
          {nextPosts.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
              year: 'numeric', month: 'short', day: 'numeric',
            });
            return (
              <div key={post.id}>
                <Link href={`/blog/${slugify(post.title)}`}>
                  <article className="group flex flex-col h-full rounded-2xl glass border border-white/5 overflow-hidden hover:border-white/15 hover:glass-strong transition-all duration-300 hover:-translate-y-1">
                    {/* Image Container */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6">
                      <div className="flex items-center justify-between text-xs text-muted mb-3">
                        <span>{formattedDate}</span>
                        <span>{post.readingTime} min</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-6 flex-grow">
                        {post.descriptionShort}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors pt-4 border-t border-white/5 mt-auto">
                        Lire l'article
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BlogHome;
