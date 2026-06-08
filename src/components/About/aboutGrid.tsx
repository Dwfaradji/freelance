import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import react from '@/images/about/react-1920.webp';
import nextJs from '@/images/about/nextjs-1920.webp';
import tailwind from '@/images/about/tailwind.webp';
import nodejs from '@/images/about/nodejs.webp';
import postGrey from '@/images/about/postgresql-1920.webp';
import symfony from '@/images/about/symphony.webp';

const AboutGrid = () => {
  const techs = [
    { name: 'React', desc: 'Interfaces dynamiques et fluides pour les plateformes de télésurveillance', img: react },
    { name: 'Next.js', desc: 'Rendu ultra-rapide côté serveur, vital pour les situations d\'urgence', img: nextJs },
    { name: 'Tailwind CSS', desc: 'Systèmes de design accessibles (RGAA) pour les professionnels de santé', img: tailwind },
    { name: 'Node.js', desc: 'Architecture asynchrone hautement scalable pour traiter des millions de données IoT', img: nodejs },
    { name: 'PostgreSQL', desc: 'Intégrité relationnelle absolue pour les Dossiers Patients Informatisés (DPI)', img: postGrey },
    { name: 'Symfony', desc: 'Sécurité et robustesse bancaire appliquée aux flux d\'informations de santé', img: symfony }
  ];

  return (
    <section className="py-20 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Notre Socle Technologique <span className="text-gradient drop-shadow-sm">e-Santé</span></h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Nous utilisons les frameworks les plus robustes et sécurisés du marché pour construire des applications médicales résilientes, interopérables et auditables (HDS).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass flex flex-col items-center justify-center p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:glass-strong transition-all duration-300 group text-center"
          >
            <div className="w-16 h-16 relative mb-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 shrink-0">
              <Image
                src={tech.img}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
              {tech.name}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;
