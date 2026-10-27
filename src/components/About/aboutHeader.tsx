import React from 'react';
import { Fade } from '@/components/ui/Fade';
import Image from 'next/image';

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
                <span className="text-sm font-medium text-white tracking-wide uppercase">Agence Digitale & Solutions Métier</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                L&apos;ingénierie numérique pensée pour <span className="text-highlight">votre métier.</span>
              </h1>
              
              <p className="text-lg text-muted leading-relaxed mb-6">
                <strong>DevEvoke</strong> est une agence digitale indépendante spécialisée dans la conception de plateformes web, applications mobiles, architectures SaaS et logiciels métier sur mesure. Nous accompagnons les entreprises, TPE, PME, startups, associations et établissements médico-sociaux dans la digitalisation durable et pragmatique de leurs activités.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Notre engagement : <strong>supprimer les frictions opérationnelles</strong>, automatiser les tâches répétitives et concevoir des outils fiables que vos équipes adoptent avec enthousiasme, tout en garantissant un <strong>hébergement souverain en France</strong> et une conformité rigoureuse au RGPD.
              </p>
              
              {/* Engagements Clés */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-primary-500 border-l-4">
                  <div className="text-2xl font-bold text-white mb-1">Sur-Mesure</div>
                  <div className="text-xs text-muted-light">Calqué sur vos processus réels</div>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-secondary-500 border-l-4">
                  <div className="text-2xl font-bold text-white mb-1">100% RGPD</div>
                  <div className="text-xs text-muted-light">Sécurité et conformité CNIL</div>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-emerald-500 border-l-4">
                  <div className="text-2xl font-bold text-white mb-1">France</div>
                  <div className="text-xs text-muted-light">Hébergement cloud souverain</div>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5 border-l-sky-500 border-l-4">
                  <div className="text-2xl font-bold text-white mb-1">Proximité</div>
                  <div className="text-xs text-muted-light">Interlocuteur direct & agilité</div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Colonne Image: Photographie authentique d'atelier collaboratif */}
          <div className="w-full lg:w-1/2 relative z-10">
            <Fade direction="up" delay={200} triggerOnce>
              <div className="relative rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] group">
                <Image
                  src="/images/home/workshop_coconception.jpg"
                  alt="Atelier collaboratif de conception numérique DevEvoke avec une direction d'association médico-sociale"
                  width={1000}
                  height={750}
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105 brightness-[0.95] contrast-[1.05]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-neutral-900/80 border border-white/10 rounded-2xl p-4">
                  <span className="text-xs font-bold text-white block">Immersion terrain & co-conception</span>
                  <p className="text-[11px] text-neutral-300">
                    Chaque solution est imaginée avec vos professionnels pour garantir une adoption naturelle.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
