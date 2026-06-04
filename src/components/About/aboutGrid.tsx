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
    { name: 'React', img: react },
    { name: 'Next.js', img: nextJs },
    { name: 'Tailwind CSS', img: tailwind },
    { name: 'Node.js', img: nodejs },
    { name: 'PostgreSQL', img: postGrey },
    { name: 'Symfony', img: symfony }
  ];

  return (
    <section className="py-20 mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technologies <span className="text-gradient">Maîtrisées</span></h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Nous utilisons les frameworks et outils les plus performants du marché pour garantir la fiabilité, la rapidité et l'évolutivité de vos projets.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass flex flex-col items-center justify-center p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:glass-strong transition-all duration-300 group"
          >
            <div className="w-16 h-16 relative mb-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
              <Image
                src={tech.img}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-white/50 group-hover:text-white transition-colors duration-300 text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;
