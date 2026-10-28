import React from 'react';
import Image from 'next/image';
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  RefreshCw,
  Layers,
  Users2,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    num: '01',
    name: 'Comprendre',
    title: 'Immersion & écoute du terrain',
    desc: 'Échange avec vos directions, chefs de service et équipes terrain pour cartographier vos processus réels et identifier les vrais points de friction.',
    icon: Search,
  },
  {
    num: '02',
    name: 'Concevoir',
    title: 'Co-design UX & ergonomie',
    desc: 'Maquettage interactif simplifié calqué sur vos habitudes d’accompagnement. Pas de jargon technique, des boutons clairs et une accessibilité totale.',
    icon: PenTool,
  },
  {
    num: '03',
    name: 'Développer',
    title: 'Ingénierie moderne & robuste',
    desc: 'Architecture Next.js / TypeScript pérenne, bases relationnelles sécurisées et synchronisation fluide avec mode hors-ligne pour le terrain.',
    icon: Code2,
  },
  {
    num: '04',
    name: 'Déployer',
    title: 'Mise en production sécurisée',
    desc: 'Hébergement souverain sur serveurs français, respect rigoureux du RGPD / CNIL et formation humaine des équipes pour une adoption immédiate.',
    icon: Rocket,
  },
  {
    num: '05',
    name: 'Faire évoluer',
    title: 'Support & accompagnement continu',
    desc: 'Mises à jour préventives, assistance réactive et évolutions continues selon la croissance de votre organisation.',
    icon: RefreshCw,
  },
];

export default function MethodologySection() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-neutral-900/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="section-label">
            <Layers className="size-3.5" />
            Méthodologie DevEvoke
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-5 leading-tight">
            Une approche humaine et pragmatique, pensée pour vos équipes
          </h2>
          <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
            De la première immersion jusqu&apos;au suivi dans le temps, nous construisons la solution avec les professionnels qui l&apos;utiliseront au quotidien.
          </p>
        </div>

        {/* Featured Photo Banner: Co-design in Action */}
        <div className="mb-10 sm:mb-16 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Photo Column */}
            <div className="lg:col-span-6 relative h-[240px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden">
              <Image
                src="/images/home/workshop_coconception.jpg"
                alt="Atelier collaboratif de co-conception numérique entre DevEvoke et des décideurs d'organisation"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-900/90 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 backdrop-blur-md bg-neutral-950/80 border border-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-primary-300 flex items-center gap-2">
                <Users2 className="size-3.5" />
                <span>Atelier de Cadrage Fonctionnel</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 p-5 sm:p-10 lg:p-12 space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="size-3.5" />
                <span>Co-Conception Inclusive</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-white leading-snug">
                Nous nous déplaçons dans vos structures pour observer les pratiques réelles
              </h3>

              <p className="text-xs sm:text-base text-neutral-300 leading-relaxed font-normal">
                Un logiciel médico-social ne s&apos;imagine pas derrière un bureau d&apos;ingénieurs à distance. Nous nous asseyons avec vos directeurs, éducateurs et soignants pour tester les maquettes en conditions réelles et valider chaque écran avant le moindre développement.
              </p>

              <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-6 text-xs text-neutral-300">
                <div className="space-y-1">
                  <span className="text-lg sm:text-xl font-bold text-white block">100%</span>
                  <span className="text-neutral-400 text-[11px] sm:text-xs">Adapté aux processus</span>
                </div>
                <div className="space-y-1 border-l border-white/10 pl-2 sm:pl-6">
                  <span className="text-lg sm:text-xl font-bold text-emerald-400 block">Zéro</span>
                  <span className="text-neutral-400 text-[11px] sm:text-xs">Jargon technique</span>
                </div>
                <div className="space-y-1 border-l border-white/10 pl-2 sm:pl-6">
                  <span className="text-lg sm:text-xl font-bold text-primary-400 block">Sur-mesure</span>
                  <span className="text-neutral-400 text-[11px] sm:text-xs">Évolutif</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="card-modern relative flex flex-col justify-between group hover:border-primary-500/40 text-left p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black font-mono text-primary-500/30 group-hover:text-primary-400 transition-colors">
                      {st.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-neutral-300 group-hover:text-primary-300 group-hover:bg-primary-500/10 transition-colors">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary-400 block mb-1">
                    Étape {idx + 1} • {st.name}
                  </span>

                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {st.title}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
