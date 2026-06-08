'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logocv.svg';

const AnimatedWord = ({ children, delay, highlight = false }: { children: React.ReactNode, delay: number, highlight?: boolean }) => (
  <span className="relative inline-block overflow-hidden pt-2 pb-4 -mb-4 px-1">
    <motion.span
      initial={{ y: "120%", opacity: 0, rotate: 5 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={`inline-block ${highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-extrabold drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'text-white'}`}
    >
      {children}
    </motion.span>
  </span>
);

const Testimonial = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} id="section5" className="py-24 md:py-40 relative flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* Liquid Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary-600/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-secondary-600/10 rounded-full blur-[100px]" 
        />
        {/* Grille de fond subtile */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
      </div>

      {/* Floating abstract geometric shapes tied to scroll */}
      <motion.div style={{ y: y1 }} className="absolute left-10 top-20 w-32 h-32 border border-white/5 rounded-full backdrop-blur-3xl hidden lg:block" />
      <motion.div style={{ y: y2 }} className="absolute right-20 bottom-40 w-48 h-48 border border-white/5 rounded-3xl rotate-12 backdrop-blur-3xl hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Citation Monumentale */}
        <div className="text-center max-w-5xl mx-auto mb-20 flex flex-wrap justify-center gap-x-3 sm:gap-x-4 lg:gap-x-5 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2]">
          {["Nous", "ne", "développons", "pas", "de", "simples", "logiciels.", "Nous", "forgeons", "des"].map((word, i) => (
            <AnimatedWord key={i} delay={i * 0.03}>{word}</AnimatedWord>
          ))}
          <AnimatedWord delay={11 * 0.03} highlight>outils de santé</AnimatedWord>
          {["qui", "simplifient", "le", "quotidien", "des", "soignants", "et", "des", "patients."].map((word, i) => (
            <AnimatedWord key={`end-${i}`} delay={(12 + i) * 0.03}>{word}</AnimatedWord>
          ))}
        </div>

        {/* Espace Auteur & Logo Ultra Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
        >
          {/* Lueur au survol */}
          <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative flex items-center gap-6 p-2 pr-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
            {/* Logo encerclé */}
            <div className="flex items-center justify-center size-16 md:size-20 rounded-full border border-white/10 bg-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent" />
              <Image
                src={logo}
                alt="Logo DevEvoke"
                width={50}
                height={50}
                className="object-contain relative z-10 drop-shadow-lg"
              />
            </div>
            
            {/* Informations */}
            <div className="flex flex-col text-left py-2">
              <span className="text-xl font-bold tracking-tight text-white mb-0.5">Boucif Faradji</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span className="text-primary-400 font-semibold uppercase tracking-[0.2em] text-[10px]">Fondateur & Expert E-Santé</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action (A propos) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <Link href="/a-propos" className="group flex items-center gap-4 text-sm text-gray-400 hover:text-white transition-colors duration-300">
            <span className="w-12 h-[1px] bg-gray-600 group-hover:bg-primary-500 transition-colors" />
            <span className="uppercase tracking-[0.15em] font-medium">{`Découvrir l'agence`}</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;
