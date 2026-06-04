'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section id="section1" className="py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Texte (Gauche) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="section-label mb-4">Portfolio</span>
            <h2 className="text-5xl font-extrabold text-white sm:text-6xl tracking-tight leading-[1.1] mb-6">
              Où l'idée prend{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                vie
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Chaque ligne de code, chaque pixel, est pensé pour créer une expérience mémorable. Découvrez comment nous avons aidé nos clients à transformer leur vision en réalité digitale.
            </p>

            <ul className="space-y-4 mb-10">
              {['Design sur-mesure', 'Performances extrêmes', 'Expérience utilisateur (UX) optimisée'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary-500/20 text-primary-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/portfolio" className="btn-primary w-fit group">
              Explorer le portfolio complet
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>

          {/* Carousel (Droite) - Effect Cards for a stacked premium look */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative perspective-[2000px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-[100px] pointer-events-none rounded-full" />
            
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="w-full max-w-[400px] sm:max-w-[500px] aspect-[4/5] sm:aspect-[4/3] rounded-3xl shadow-2xl"
            >
              {projects && projects.length > 0 ? (
                projects.map((project, i) => (
                  <SwiperSlide key={project.id} className="rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                    <div className="relative w-full h-full group">
                      <Image
                        src={project.imageMobile || project.image}
                        alt={project.title || 'Projet DevEvoke'}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                      
                      <div className="absolute bottom-0 left-0 p-8 w-full">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-primary-400 bg-primary-900/40 border border-primary-500/20 rounded-full uppercase">
                          {project.type || 'Web App'}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide className="rounded-3xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center">
                  <span className="text-gray-500">Aucun projet</span>
                </SwiperSlide>
              )}
            </Swiper>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
