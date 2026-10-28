'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export const AboutMethodology = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0" />
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass p-2">
              <Image 
                src="/images/about/about_field_immersion.jpg" 
                alt="Immersion et co-conception de solutions logicielles dans un établissement médico-social" 
                width={800} 
                height={600} 
                className="w-full h-[380px] sm:h-[450px] rounded-2xl object-cover object-center brightness-[0.95] contrast-[1.05]"
              />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm font-medium text-white tracking-wide uppercase">Immersion & Écoute</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Une méthodologie de conception <span className="text-highlight">centrée sur le terrain</span>
          </h2>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            Dans les entreprises comme dans le médico-social, nous savons qu&apos;un outil conçu uniquement depuis un bureau lointain est voué au rejet. DevEvoke va directement à la rencontre des équipes pour comprendre les véritables frictions opérationnelles (tournées nomades, zones blanches réseau, plannings éclatés).
          </p>
          <ul className="space-y-4">
            {[
              "Immersion terrain et cartographie des processus associatifs",
              "Ateliers de co-conception avec les professionnels d’établissement",
              "Prototypage rapide et tests d'utilisabilité (normes RGAA)",
              "Développement itératif avec validation étape par étape"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-primary-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export const AboutSecurity = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full z-0" />
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass p-2">
             <Image 
                src="/images/about/about_sovereign_security.jpg" 
                alt="Infrastructure cloud souveraine en France et sécurité des données associatives" 
                width={800} 
                height={600} 
                className="w-full h-[380px] sm:h-[450px] rounded-2xl object-cover object-center brightness-[0.95]"
             />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
            <span className="text-sm font-medium text-white tracking-wide uppercase">Souveraineté & RGPD</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            La priorité accordée à la <span className="text-highlight">Sécurité des Données</span>
          </h2>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            Les données associatives et le suivi des usagers exigent une rigueur sans faille. Chez DevEvoke, nous concevons des applications web et mobiles robustes : cloisonnement des accès par rôles (RBAC), chiffrement des flux (HTTPS / TLS 1.3), protection contre les failles courantes (XSS, injections) et hébergement souverain en France.
          </p>
          <ul className="space-y-4">
            {[
              "Hébergement sécurisé sur serveurs souverains en France",
              "Contrôle d'accès strict par rôles (RBAC) et traçabilité",
              "Sauvegardes chiffrées automatisées et régulières",
              "Conformité rigoureuse aux préconisations de la CNIL et au RGPD"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-secondary-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
