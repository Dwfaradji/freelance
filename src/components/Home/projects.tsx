'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/data';

const Projects = () => {
  return (
    <section id="section1" className="py-24">
      <div className="mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Nos réalisations</span>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl max-w-lg">
              Des projets qui{' '}
              <span
                className="text-gradient"
                style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              >
                parlent d'eux-mêmes
              </span>
            </h2>
            <Link href="/portfolio" className="btn-outline self-start sm:self-auto shrink-0 text-sm">
              Voir tout →
            </Link>
          </div>
        </motion.div>

        {/* Layout deux colonnes */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl bg-surface border border-border"
          >
            <Swiper
              effect="creative"
              grabCursor
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              creativeEffect={{
                prev: { shadow: true, origin: 'left center', translate: ['-5%', 0, -200], rotate: [0, 100, 0] },
                next: { origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0] },
              }}
              modules={[EffectCreative, Autoplay, Pagination]}
              className="h-full min-h-[360px]"
            >
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <SwiperSlide key={project.id} className="relative">
                    <Image
                      src={project.imageMobile}
                      alt={project.alt || 'Projet DevEvoke'}
                      width={664}
                      height={373}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent" />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <div className="flex h-full min-h-[360px] items-center justify-center text-muted">
                    Aucun projet disponible
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </motion.div>

          {/* Texte + liste */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border p-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">
                Transformez votre idée en réalité
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                Prêts à transformer votre entreprise avec des solutions modernes,
                rapides et fonctionnelles ?
              </p>
            </div>

            {/* Projets en liste */}
            <ul className="space-y-4">
              {[
                {
                  name: 'Fenix Solutions',
                  desc: 'Site vitrine moderne et ergonomique',
                  tag: 'Vitrine',
                },
                {
                  name: 'Keller Williams',
                  desc: 'Plateforme immobilière optimisée',
                  tag: 'Immobilier',
                },
                {
                  name: 'Menu Pizzeria',
                  desc: 'Interface interactive de commande',
                  tag: 'Restaurant',
                },
                {
                  name: 'EvokeFlow',
                  desc: 'Application de prise de commande',
                  tag: 'App',
                },
              ].map((project, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-xl bg-white/3 border border-white/5 p-4 hover:border-primary/30 transition-all duration-200"
                >
                  <div className="size-2 rounded-full bg-gradient-to-r from-primary to-secondary-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-sm">{project.name}</div>
                    <div className="text-xs text-muted truncate">{project.desc}</div>
                  </div>
                  <span className="shrink-0 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary-400">
                    {project.tag}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link href="/contact" className="btn-primary self-start">
              Démarrer mon projet →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
