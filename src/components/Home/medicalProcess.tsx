'use client';
import React from 'react';
import { motion } from 'motion/react';

const MedicalProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Audit Sécurité & Immersion",
      description: "Avant la première ligne de code, nos UX Designers pratiquent l'immersion clinique (Shadowing) pour comprendre le quotidien de vos soignants. En parallèle, nos architectes auditent vos contraintes réglementaires (CNIL, HDS, Ségur).",
      icon: (
        <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Développement Zero Trust",
      description: "Nous développons votre solution sur-mesure (DPI, App Patient) avec une architecture Zero Trust. L'interopérabilité HL7/FHIR est implémentée nativement pour une communication parfaite avec le DMP et vos logiciels existants.",
      icon: (
        <svg className="w-8 h-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Déploiement HDS & Conformité",
      description: "L'application est déployée sur des serveurs souverains certifiés HDS (Hébergeur de Données de Santé) en France. Nous vous accompagnons pour la validation finale (tests d'intrusion) et la formation des équipes cliniques.",
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">Méthodologie Qualité</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-4">
            Notre approche de <span className="text-gradient">conception clinique</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Parce que les erreurs informatiques dans la santé ont des conséquences critiques, nous appliquons un processus de développement rigoureux (Privacy by Design).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Ligne connectrice (Desktop uniquement) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Cercle avec l'icône */}
              <div className="w-24 h-24 rounded-full glass border border-white/10 flex items-center justify-center mb-8 relative group-hover:scale-110 group-hover:border-primary-500/50 transition-all duration-300 shadow-xl bg-[#030712]">
                {/* Numéro flottant */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center border-4 border-[#030712]">
                  {step.number}
                </div>
                {step.icon}
              </div>

              {/* Texte */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalProcess;
