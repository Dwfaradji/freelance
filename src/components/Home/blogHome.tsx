'use client';
import React from 'react';
import { motion } from 'motion/react';
import BlogHeader from '../Blog/blogHeader';
import Link from 'next/link';

const BlogHome = () => {
  return (
    <section id="section6" className="py-24">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="section-label">Blog</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Derniers{' '}
            <span
              className="text-gradient"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              articles
            </span>
          </h2>
        </div>
        <Link href="/blog" className="btn-outline self-start shrink-0 text-sm">
          Tous les articles →
        </Link>
      </motion.div>

      {/* Article mis en avant */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <BlogHeader />
      </motion.div>
    </section>
  );
};

export default BlogHome;
