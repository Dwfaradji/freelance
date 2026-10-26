'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Search, Code2, Rocket } from 'lucide-react';

const MedicalProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Analyse des Besoins & Terrain",
      description: "Nous échangeons avec vos directions, chefs de service et équipes de terrain pour cartographier vos processus réels, vos contraintes administratives et les irritants du quotidien.",
      icon: <Search className="w-8 h-8 text-primary-400" />
    },
    {
      number: "02",
      title: "Conception UX & Développement",
      description: "Nos designers et développeurs conçoivent des interfaces simples, accessibles et ergonomiques : logiciels métiers, portails, applications mobiles terrain ou déploiement de Floticar.",
      icon: <Code2 className="w-8 h-8 text-secondary-400" />
    },
    {
      number: "03",
      title: "Déploiement, Formation & Suivi",
      description: "Déploiement sur hébergement cloud souverain en France, conformité RGPD rigoureuse, prise en main immédiate par vos équipes et accompagnement technique dans la durée.",
      icon: <Rocket className="w-8 h-8 text-emerald-400" />
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">Méthodologie Agence</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-4">
            De l’irritant terrain à la <span className="text-highlight">solution adoptée</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Une approche pragmatique et humaine pour concevoir des outils numériques adaptés au rythme des établissements médico-sociaux et adoptés dès le premier jour par vos équipes.
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/5 relative z-10 flex flex-col justify-between hover:border-primary-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalProcess;
