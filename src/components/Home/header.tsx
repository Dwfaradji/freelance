'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <header className="relative min-h-[92vh] overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-16 pb-24">
      {/* Grille de fond animée */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      {/* Blobs lumineux */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-20 blur-3xl animate-blob"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -right-40 h-80 w-80 rounded-full opacity-15 blur-3xl animate-blob"
          style={{
            background: 'radial-gradient(circle, var(--color-secondary), transparent 70%)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 60%)' }}
        />
      </div>

      {/* Dégradé de fond en bas */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
          className="mb-8 inline-flex"
        >
          <span className="badge">
            <span className="size-2 rounded-full bg-secondary-400 animate-pulse" />
            Agence Web & Mobile — Perpignan
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Votre vision,{' '}
          <span
            className="text-gradient"
            style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)' }}
          >
            notre code
          </span>
          .
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted sm:text-xl"
        >
          Nous concevons des sites web et applications mobiles sur mesure,
          performants et modernes. De l'idée au déploiement, nous transformons
          vos projets en{' '}
          <span className="text-muted-light font-medium">expériences digitales exceptionnelles</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Démarrer mon projet
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/portfolio" className="btn-outline">
            Voir nos réalisations
          </Link>
        </motion.div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '20+', label: 'Projets livrés' },
            { value: '15+', label: 'Clients accompagnés' },
            { value: '99%', label: 'Satisfaction client' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold text-gradient"
                style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-[var(--color-muted)] to-transparent" />
      </motion.div>
    </header>
  );
};

export default Header;
