import React from 'react';
import Image from 'next/image';
import photoProfil from '@/images/about/photo-profil-1920.webp';
import {
  Users2,
  Sliders,
  CheckCircle2,
  Cpu,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';

const reasons = [
  {
    icon: Users2,
    title: 'Compréhension du terrain',
    desc: 'Nous cherchons d’abord à comprendre les contraintes humaines et organisationnelles de votre établissement avant de proposer la moindre brique technique.',
  },
  {
    icon: Sliders,
    title: 'Solutions sur-mesure',
    desc: 'Aucune solution générique imposée. Votre outil informatique est calqué sur votre histoire associative et vos protocoles internes.',
  },
  {
    icon: CheckCircle2,
    title: 'Approche pragmatique',
    desc: 'Priorité absolue à l’utilité réelle et à l’adoption par les professionnels. Nous concevons des outils simples pour enlever de la charge mentale, pas pour en ajouter.',
  },
  {
    icon: Cpu,
    title: 'Technologie moderne & souveraine',
    desc: 'Développement sur des socles techniques actuels (Next.js, TypeScript, PostgreSQL), hébergement souverain en France et conformité rigoureuse au RGPD.',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement dans la durée',
    desc: 'DevEvoke n’est pas un prestataire ponctuel qui disparaît après la livraison. Nous assurons la maintenance, le support et l’évolution pérenne de vos solutions.',
  },
];

export default function WhyDevEvoke() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-neutral-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="section-label">
            <ShieldCheck className="size-3.5" />
            Pourquoi Choisir DevEvoke
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-5 leading-tight">
            Un partenaire numérique qui comprend vos enjeux métier
          </h2>
          <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
            Ce qui nous distingue : l’alliance entre une véritable expertise logicielle moderne et une immersion sincère dans le quotidien de vos équipes.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-16">
          {reasons.slice(0, 3).map((r, idx) => {
            const Icon = r.icon;
            return (
              <div key={idx} className="card-modern group text-left space-y-4 p-5 sm:p-8">
                <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {r.desc}
                </p>
              </div>
            );
          })}

          {reasons.slice(3).map((r, idx) => {
            const Icon = r.icon;
            return (
              <div key={idx + 3} className="card-modern lg:col-span-1.5 group text-left space-y-4 p-5 sm:p-8">
                <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-400 group-hover:scale-110 group-hover:bg-secondary-500/10 transition-all">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Human Quote Banner with Real Portrait */}
        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/15 p-5 sm:p-10 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
            {/* Founder Avatar with subtle aura */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500 blur-sm opacity-60" />
              <div className="relative size-20 sm:size-24 rounded-full overflow-hidden border-2 border-white/20 shadow-xl">
                <Image
                  src={photoProfil}
                  alt="Boucif Faradji, Fondateur de DevEvoke"
                  width={120}
                  height={120}
                  sizes="96px"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Quote & Signature */}
            <div className="space-y-3 flex-1">
              <blockquote className="text-sm sm:text-lg font-medium text-neutral-200 italic leading-relaxed">
                « Nous ne venons pas imposer un logiciel prêt à l&apos;emploi. Nous venons vous écouter, comprendre vos irritants et construire l&apos;outil simple qui libère du temps utile pour vos équipes. »
              </blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                <span className="text-sm font-bold text-white">
                  Boucif Faradji
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                  Fondateur & Développeur Full-Stack
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
