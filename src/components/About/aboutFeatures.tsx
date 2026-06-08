import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import methodologyImage from '@/images/about/methodology.png';
import securityImage from '@/images/about/security.png';

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
                src={methodologyImage} 
                alt="Notre méthodologie en milieu hospitalier" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-2xl object-cover"
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
            <span className="text-sm font-medium text-white tracking-wide uppercase">Immersion & Agilité</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Une méthodologie de conception <span className="text-gradient">centrée sur le terrain</span>
          </h2>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            Dans le secteur de la santé, nous savons qu'un logiciel conçu uniquement depuis des bureaux parisiens est voué à l'échec. C'est pourquoi nos UX Designers pratiquent l'immersion clinique (Shadowing). Nous accompagnons les soignants lors de leurs tournées pour comprendre les véritables frictions du quotidien (port de gants, zones blanches réseau, charge cognitive extrême).
          </p>
          <ul className="space-y-4">
            {[
              "Immersion terrain et cartographie des workflows",
              "Ateliers de Design Thinking avec le personnel soignant",
              "Prototypage rapide et tests d'utilisabilité (RGAA)",
              "Développement Agile en Sprints de 2 semaines"
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
                src={securityImage} 
                alt="Architecture HDS et Cybersécurité" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-2xl object-cover"
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
            <span className="text-sm font-medium text-white tracking-wide uppercase">Souveraineté & HDS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            L'obsession de la <span className="text-gradient drop-shadow-sm">Cybersécurité Médicale</span>
          </h2>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            Les données de santé de vos patients sont la cible numéro un des cyberattaques mondiales. Chez DevEvoke, nous construisons de véritables forteresses numériques. L'architecture "Zero Trust", le chiffrement bout-en-bout des bases de données et l'authentification forte (MFA) sont implémentés nativement dès la première ligne de code de nos projets.
          </p>
          <ul className="space-y-4">
            {[
              "Hébergement exclusif sur serveurs certifiés HDS en France",
              "Architecture réseau Zéro Trust et Micro-segmentation",
              "Sauvegardes chiffrées immuables (Air-Gapped)",
              "Tests d'intrusion réguliers (Pentesting) et audits RGPD"
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
