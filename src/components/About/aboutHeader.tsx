import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import headerAbout from '@/images/about/aboutHeader-1920.webp';

const AboutHeader = () => {
  return (
    <>
      <header className="mx-auto mb-20 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">L'Agence</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Qui <span className="text-gradient drop-shadow-sm">sommes-nous ?</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            Nous sommes une équipe passionnée, déterminée à transformer vos
            idées en solutions digitales performantes. À travers des
            technologies de pointe et un service client d'exception, nous vous
            aidons à exceller dans l'univers numérique.
          </p>
        </Fade>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
          {/* Overlay dégradé pour la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/20 to-transparent opacity-90 z-10" />
          
          <Image
            src={headerAbout}
            alt="Équipe DevEvoke"
            width={1920}
            height={1080}
            className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          
          {/* Bloc Vision flottant */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20">
            <Fade direction="up" delay={200} triggerOnce>
              <div className="max-w-4xl glass-strong p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-transparent pointer-events-none" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Notre Vision</h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
                  Devevoke est une entreprise innovante spécialisée dans le développement
                  d’applications et de sites web. Nous croyons que chaque entreprise mérite une
                  présence numérique à la hauteur de ses ambitions. Nous
                  redéfinissons l'expérience digitale en créant des solutions sur
                  mesure, alliant innovation, design premium et efficacité redoutable.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
