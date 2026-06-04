'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import Link from 'next/link';
import Image2 from 'next/image';
import { slugify } from '@/utils/slugify';
import myPhoto from '@/images/about/photo-profil-688.webp';

const BlogsContainer = () => {
  const sortedPosts = [...blogData].sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const posts = sortedPosts.slice(1);

  return (
    <section className="py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((blog: any, i: number) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <Link href={`/blog/${slugify(blog.title)}`} className="group block">
              <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    width={500}
                    height={300}
                    src={blog.img}
                    alt={blog.alt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/80 to-transparent" />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <p className="mb-2 text-xs font-mono text-[var(--color-primary)]">
                    {new Date(blog.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>
                  <h2 className="font-bold text-white leading-tight text-lg group-hover:text-primary-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted line-clamp-3 leading-relaxed">
                    {blog.descriptionShort}
                  </p>

                  {/* Auteur */}
                  <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                    <Image2
                      width={28}
                      height={28}
                      className="size-7 rounded-full object-cover"
                      src={myPhoto.src}
                      alt="Boucif Faradji"
                      sizes="28px"
                    />
                    <span className="text-xs text-muted">Boucif Faradji</span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogsContainer;
