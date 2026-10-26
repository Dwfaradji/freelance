import React from 'react';
import Link from 'next/link';
import {
  Cpu,
  Cloud,
  Layout,
  Smartphone,
  Workflow,
  Car,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  description: string;
  href: string;
  highlight?: boolean;
}

const solutions: SolutionCardProps[] = [
  {
    icon: Cpu,
    title: 'Logiciels Métier Sur-Mesure',
    tag: 'Processus & Centralisation',
    description: 'Des outils adaptés aux processus réels de votre organisation pour en finir avec les fichiers Excel fragmentés et les progiciels rigides.',
    href: '/solutions/logiciel-metier',
    highlight: true,
  },
  {
    icon: Cloud,
    title: 'Plateformes SaaS',
    tag: 'Multi-Établissements',
    description: 'Des applications accessibles et évolutives pour piloter plusieurs établissements, consolider les indicateurs et mutualiser les outils.',
    href: '/solutions/saas-sur-mesure',
  },
  {
    icon: Layout,
    title: 'Applications Web & Intranets',
    tag: 'Espaces Professionnels',
    description: 'Des outils métiers accessibles depuis vos postes de travail par simple navigateur sécurisé, avec gestion fine des droits d’accès.',
    href: '/solutions/application-web',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles Terrain',
    tag: 'Équipes Nomades & SESSAD',
    description: 'Des solutions tactiles adaptées aux équipes en tournée, avec fonctionnement hors-ligne garanti et saisie rapide d’interventions.',
    href: '/solutions/application-mobile',
  },
  {
    icon: Workflow,
    title: 'Automatisation & Dématérialisation',
    tag: 'Gain de Temps Administratif',
    description: 'Réduire les tâches répétitives et administratives : suppression des doubles saisies, génération automatique de rapports et alertes.',
    href: '/solutions/automatisation',
  },
  {
    icon: Car,
    title: 'Gestion de Flotte Automobile (Floticar)',
    tag: 'SaaS Spécialisé',
    description: 'Une solution dédiée au suivi des véhicules associatifs : carnet de bord par QR code sur smartphone, alertes de contrôle technique et suivi des conducteurs.',
    href: '/realisations/floticar',
    highlight: true,
  },
];

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="py-24 bg-neutral-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">
            <Sparkles className="size-3.5" />
            Nos Piliers Numériques
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Des réponses technologiques adaptées à vos usages
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            DevEvoke ne vend pas un logiciel unique générique. Nous concevons la solution logicielle ou web qui correspond exactement à l'organisation de votre structure.
          </p>
        </div>

        {/* 6 Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`card-modern group flex flex-col justify-between ${
                  item.highlight ? 'border-primary-500/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-primary-300 transition-colors"
                  >
                    <span>Découvrir cette solution</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Link to Full Solutions Hub */}
        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="btn-outline text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>Explorer le panorama complet de nos solutions</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
