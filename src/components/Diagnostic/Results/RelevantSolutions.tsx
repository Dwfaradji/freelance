'use client';

import React from 'react';
import Link from 'next/link';
import { DevEvokeSolution } from '@/lib/diagnostic/types';
import {
  ArrowRight,
  Car,
  Code2,
  Database,
  Lock,
  Share2,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

interface RelevantSolutionsProps {
  solutions: DevEvokeSolution[];
}

export default function RelevantSolutions({ solutions }: RelevantSolutionsProps) {
  if (solutions.length === 0) return null;

  const solutionsMap: Record<
    DevEvokeSolution,
    {
      title: string;
      subtitle: string;
      desc: string;
      icon: React.ReactNode;
      link: string;
      badge: string;
    }
  > = {
    customSoftware: {
      title: 'Logiciels & plateformes métiers sur mesure',
      subtitle: 'Remplacement des fichiers Excel et des outils rigides',
      desc: 'Conception d’outils web centrés sur les pratiques de vos équipes (plannings, coordination médico-sociale, admissions).',
      icon: <Code2 className="w-5 h-5 text-primary-400" />,
      link: '/solutions/saas-sur-mesure',
      badge: 'Outils Métier',
    },
    mobileApp: {
      title: 'Applications mobiles terrain hors-ligne',
      subtitle: 'Pour les éducateurs, soignants et intervenants nomades',
      desc: 'Transmissions rapides, signatures dématérialisées et consultation des dossiers en tournée sans dépendre de la 4G.',
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      link: '/solutions/application-mobile',
      badge: 'Mobilité Terrain',
    },
    automation: {
      title: 'Automatisation des flux & suppression des doubles saisies',
      subtitle: 'Allègement de la charge administrative',
      desc: 'Passerelles automatisées entre formulaires, feuilles d’heures et outils de gestion pour supprimer les ressaisies manuelles.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      link: '/solutions/automatisation',
      badge: 'Automatisation',
    },
    integration: {
      title: 'Interopérabilité & connecteurs de données',
      subtitle: 'Décloisonnement de vos logiciels et bases',
      desc: 'Architecture d’échange par API et passerelles sécurisées pour unifier les données RH, plannings et dossiers usagers.',
      icon: <Share2 className="w-5 h-5 text-secondary-400" />,
      link: '/solutions/outils-metier',
      badge: 'Interopérabilité',
    },
    fleet: {
      title: 'Floticar — Gestion informatisée de flotte automobile',
      subtitle: 'Logiciel SaaS français dédié aux flottes médico-sociales',
      desc: 'Carnets de bord numériques, gestion des permis, alertes révisions et contrôles techniques pour sécuriser vos véhicules.',
      icon: <Car className="w-5 h-5 text-emerald-400" />,
      link: '/realisations/floticar',
      badge: 'Gestion Automobile',
    },
    security: {
      title: 'Sécurisation applicative & protection des données',
      subtitle: 'Renforcement technique et hébergement souverain',
      desc: 'Audit de sécurité des applications, authentification forte (MFA), sauvegardes automatisées et chiffrement.',
      icon: <Lock className="w-5 h-5 text-rose-400" />,
      link: '/securite-et-conformite',
      badge: 'Cybersécurité',
    },
  };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-xl font-extrabold text-white">
            Solutions numériques pouvant répondre à vos besoins
          </h4>
          <p className="text-xs text-neutral-400">
            Sélectionnées strictement selon les points de vigilance révélés par votre diagnostic
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {solutions.map((solKey) => {
          const config = solutionsMap[solKey];
          if (!config) return null;

          return (
            <div
              key={solKey}
              className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-primary-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {config.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {config.badge}
                  </span>
                </div>

                <h5 className="text-sm font-bold text-white leading-snug mb-1">
                  {config.title}
                </h5>
                <p className="text-xs text-primary-300/90 font-medium mb-2">
                  {config.subtitle}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {config.desc}
                </p>
              </div>

              <Link
                href={config.link}
                className="text-xs font-semibold text-primary-400 hover:text-primary-300 inline-flex items-center gap-1.5 pt-2 border-t border-white/5"
              >
                <span>Découvrir la solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
