'use client';
import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'motion/react';

const statsData = [
  {
    end: 20,
    suffix: '+',
    label: 'Projets livrés',
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
    label: 'Clients accompagnés',
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
    end: 99,
    suffix: '%',
    label: 'Satisfaction client',
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
    end: 8,
    suffix: '+',
    label: 'Technologies maîtrisées',
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
  <section className="relative py-8">
    {/* Séparateur */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="grid grid-cols-2 gap-px bg-white/5 md:grid-cols-4 rounded-2xl overflow-hidden">
      {statsData.map((stat, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center gap-3 bg-surface p-8 text-center group hover:bg-[#0d0d22] transition-colors duration-300"
        >
          {/* Icône */}
          <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 p-0.5`}>
            <div className="flex size-full items-center justify-center rounded-[10px] bg-surface">
              <span className={`text-gradient bg-gradient-to-br ${stat.color}`}>
                {stat.icon}
              </span>
            </div>
          </div>

          {/* Nombre */}
          <div
            className={`text-4xl font-bold text-gradient bg-gradient-to-r ${stat.color}`}
          >
            <CountUp start={0} end={stat.end} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
          </div>

          {/* Label */}
          <p className="text-sm text-muted group-hover:text-muted-light transition-colors">
            {stat.label}
          </p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default AnimatedStats;