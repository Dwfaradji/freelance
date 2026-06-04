'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logocv.svg';

const Testimonial = () => {
  return (
    <section id="section5" className="py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[var(--color-surface)] to-[#0d0d24]">
        {/* Décoration de fond */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-secondary), transparent)' }}
        />

        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center p-10 lg:p-14"
          >
            {/* Quote */}
            <div className="mb-6 text-5xl font-serif text-[var(--color-primary)]/40 leading-none select-none">
              &ldquo;
            </div>

            <h2
              className="mb-2 text-lg font-semibold text-gradient"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              Notre expertise à votre service
            </h2>

            <p className="text-lg text-muted-light leading-relaxed lg:text-xl">
              DevEvoke est une entreprise dédiée à la transformation numérique.
              Nous aidons les entreprises à se démarquer grâce à des solutions
              modernes incluant le développement web et mobile, le référencement,
              et le marketing digital. Basés à Perpignan, nous collaborons avec
              des partenaires du monde entier.
            </p>

            {/* Séparateur */}
            <div className="my-8 h-px bg-gradient-to-r from-primary/30 via-transparent to-transparent" />

            {/* Auteur */}
            <div className="mb-8">
              <div
                className="text-xl font-bold text-gradient"
                style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              >
                Boucif Faradji
              </div>
              <p className="mt-1 text-sm text-muted font-medium">
                Fondateur & Développeur — DevEvoke
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/a-propos" className="btn-primary text-sm">
                En savoir plus
              </Link>
              <Link href="/contact" className="btn-outline text-sm">
                Contactez-nous
              </Link>
            </div>
          </motion.div>

          {/* Logo / Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden items-center justify-center border-l border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-14 lg:flex"
          >
            <div className="relative">
              {/* Cercle glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }}
              />
              <div className="relative size-64 overflow-hidden rounded-full border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <Image
                  src={logo}
                  alt="Logo DevEvoke"
                  width={400}
                  height={400}
                  className="size-full object-contain p-8"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
