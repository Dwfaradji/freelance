'use client';
import React from 'react';
import { motion } from 'motion/react';
import { services } from '@/data/data';

const serviceIcons: Record<string, React.ReactNode> = {
  default: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  ),
};

const cardColors = [
  'from-primary/10 to-secondary/5',
  'from-secondary/10 to-violet-500/5',
  'from-violet-500/10 to-primary/5',
  'from-primary-400/10 to-secondary-400/5',
  'from-secondary-400/10 to-primary-400/5',
  'from-violet-400/10 to-secondary/5',
];

const borderColors = [
  'hover:border-primary/40',
  'hover:border-secondary/40',
  'hover:border-violet-500/40',
  'hover:border-primary-400/40',
  'hover:border-secondary-400/40',
  'hover:border-violet-400/40',
];

const Offerings = () => {
  return (
    <section id="section2" className="py-24">
      <div className="mx-auto">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Nos services</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl max-w-xl">
            Tout ce dont vous avez{' '}
            <span
              className="text-gradient"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              besoin
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted text-lg">
            DevEvoke propose une gamme complète de services digitaux sur mesure
            pour accompagner votre transformation numérique.
          </p>
        </motion.div>

        {/* Liste de services rapides */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {[
            'Création de sites web',
            'Applications web & mobile',
            'Référencement SEO',
            'Hébergement',
            'Maintenance',
            'Formation',
          ].map((item) => (
            <span key={item} className="badge">
              ✦ {item}
            </span>
          ))}
        </motion.div>

        {/* Grille de services */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              id={`service-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${cardColors[i % cardColors.length]} p-6 transition-all duration-400 ${borderColors[i % borderColors.length]} hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5`}
            >
              {/* Fond hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-400" />

              <div className="relative">
                {/* Numéro */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--color-primary)] opacity-60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center text-[var(--color-secondary)]">
                    {serviceIcons.default}
                  </div>
                </div>

                {/* Titre */}
                <h3
                  className="mb-3 text-xl font-bold text-white text-gradient"
                  style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-light">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-primary to-secondary-400 flex-shrink-0" />
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;