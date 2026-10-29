import React from 'react';
import Link from 'next/link';
import {
  Globe,
  Cpu,
  Cloud,
  Smartphone,
  Workflow,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  LayoutGrid,
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
    icon: Globe,
    title: 'Développement Web & Plateformes',
    tag: 'Next.js & Performance',
    description: 'Sites d’entreprise haut de gamme, portails de marque et dashboards interactifs ultra-rapides sous Next.js et React.',
    href: '/developpement-web',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles & Tablettes',
    tag: 'Mode Hors-Ligne Garanti',
    description: 'Outils tactiles iOS & Android sous React Native conçus pour les équipes terrain, techniciens et professionnels nomades.',
    href: '/application-mobile',
  },
  {
    icon: Cloud,
    title: 'Conception de Plateformes SaaS',
    tag: 'Produit Cloud B2B',
    description: 'Logiciels cloud multi-tenants, facturation récurrente Stripe intégrée et API REST pour commercialiser votre savoir-faire.',
    href: '/developpement-saas',
    highlight: true,
  },
  {
    icon: Cpu,
    title: 'Logiciels Métier Sur-Mesure',
    tag: 'Remplacement Excel',
    description: 'Outils internes calqués sur vos protocoles pour centraliser vos processus réels et en finir avec les tableurs fragmentés.',
    href: '/solutions-metier',
    highlight: true,
  },
  {
    icon: Workflow,
    title: 'Automatisation des Processus',
    tag: 'Zéro Double Saisie',
    description: 'Suppression des ressaisies manuelles chronophages, synchronisation d’outils par API et génération de bilans en un clic.',
    href: '/automatisation',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Hébergement Souverain',
    tag: 'Conformité RGPD France',
    description: 'Infrastructures cloud sécurisées en France (ISO 27001), sauvegardes quotidiennes chiffrées et conformité réglementaire totale.',
    href: '/securite-et-conformite',
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
            Nos Piliers d’Ingénierie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Des réponses technologiques adaptées à vos usages
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            DevEvoke ne vend pas un progiciel unique rigide. Nous concevons la solution logicielle ou web qui répond au millimètre près à votre organisation.
          </p>
        </div>

        {/* 6 Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`card-modern group flex flex-col justify-between ${item.highlight ? 'border-primary-500/30' : ''
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
                    <span>Découvrir cette expertise</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Links */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/services"
            className="btn-outline text-xs sm:text-sm inline-flex items-center gap-2"
          >
            <span>Consulter l’ensemble de nos services</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
