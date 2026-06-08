'use client';
import React from 'react';
import { motion } from 'motion/react';

const TrustBar = () => {
  const certifications = [
    {
      name: "Hébergeur Données de Santé",
      short: "HDS",
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Conformité Européenne",
      short: "RGPD",
      color: "from-green-500 to-emerald-400"
    },
    {
      name: "Ségur du Numérique",
      short: "SÉGUR",
      color: "from-purple-500 to-pink-400"
    },
    {
      name: "Architecture Sécurisée",
      short: "Zero Trust",
      color: "from-orange-500 to-red-400"
    }
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 tracking-widest uppercase mb-8">
          Infrastructures et logiciels conformes aux plus hautes exigences
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl glass-strong border border-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${cert.color} mb-2`}>
                {cert.short}
              </div>
              <div className="text-xs text-center text-gray-300 font-medium group-hover:text-white transition-colors">
                {cert.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
