import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import headerAbout from '@/images/about/header_new.png';

const AboutHeader = () => {
  return (
    <section className="relative w-full pt-16 pb-32 overflow-hidden">
      {/* Arrière-plan avec le dégradé */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Colonne Texte */}
          <div className="w-full lg:w-1/2 lg:pr-8 text-center lg:text-left z-10">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                <span className="text-sm font-medium text-white tracking-wide uppercase">Agence MedTech & e-Santé</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                L'ingénierie au <span className="text-gradient drop-shadow-sm">service du soin.</span>
              </h1>
              
              <p className="text-lg text-muted leading-relaxed mb-6">
                Fondée par des experts en architecture logicielle, <strong>DevEvoke</strong> est l'agence MedTech de référence pour la transformation digitale du secteur médical et médico-social. Nous concevons des logiciels métiers sur-mesure (DUI, portails patients), des applications de télésurveillance (mHealth) et des infrastructures résilientes pour les hôpitaux, cliniques et EHPAD. 
              </p>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Notre mission est double : garantir une <strong>sécurité absolue (conformité HDS, RGPD)</strong> des données de santé, et <strong>réduire drastiquement la charge mentale</strong> des soignants grâce à des interfaces ergonomiques. Nous transformons la technologie en temps médical disponible.
              </p>
              
              {/* Chiffres Clés */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-primary-500 border-l-4">
                  <div className="text-3xl font-bold text-white mb-1">+10 ans</div>
                  <div className="text-sm text-muted-light">D'expertise combinée</div>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-secondary-500 border-l-4">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-muted-light">Conformité HDS & RGPD</div>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-pink-500 border-l-4">
                  <div className="text-3xl font-bold text-white mb-1">+50</div>
                  <div className="text-sm text-muted-light">Projets e-Santé déployés</div>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-violet-500 border-l-4">
                  <div className="text-3xl font-bold text-white mb-1">Zéro</div>
                  <div className="text-sm text-muted-light">Faille de sécurité (Zero Trust)</div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Colonne Image / Visuel 3D */}
          <div className="w-full lg:w-1/2 relative z-10">
            <Fade direction="up" delay={200} triggerOnce>
              <div className="relative rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] group">
                <Image
                  src={headerAbout}
                  alt="Intelligence Artificielle et Médecine"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-60" />
              </div>
            </Fade>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
