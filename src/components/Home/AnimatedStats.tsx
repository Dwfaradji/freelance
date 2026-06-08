'use client';
import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'motion/react';

const statsData = [
  {
    end: 50,
    suffix: '+',
    label: 'Établissements de santé',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
    color: 'from-primary to-secondary-400',
  },
  {
    end: 15,
    suffix: '+',
    label: 'Projets certifiés HDS',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: 'from-secondary-400 to-violet-400',
  },
  {
    end: 100,
    suffix: '%',
    label: 'Conformité RGPD & CNIL',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: 'from-violet-400 to-primary-400',
  },
  {
    end: 1,
    suffix: 'M+',
    label: 'Dossiers Patients Traités',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
    color: 'from-primary-400 to-secondary',
  },
];

const AnimatedStats = () => (
  <section className="relative w-full border-y border-white/5 bg-black/50 backdrop-blur-xl z-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col items-center justify-center text-center group relative ${
              index % 2 !== 0 ? '' : 'before:absolute before:inset-y-0 before:-right-4 sm:before:-right-6 before:w-px before:bg-white/5'
            } ${
              index < 3 ? 'md:after:absolute md:after:inset-y-0 md:after:-right-6 md:after:w-px md:after:bg-white/5' : ''
            }`}
          >
            {/* Nombre */}
            <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 drop-shadow-sm`}>
              <CountUp start={0} end={stat.end} duration={2.5} suffix={stat.suffix} />
            </div>

            {/* Label */}
            <p className="text-sm sm:text-base font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AnimatedStats;