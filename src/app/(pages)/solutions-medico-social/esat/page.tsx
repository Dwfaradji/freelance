import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Briefcase, 
  Users, 
  ArrowRight, 
  Workflow,
  FileSpreadsheet
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export const metadata: Metadata = {
  title: 'Logiciels & Outils Numériques pour ESAT',
  description:
    'Solutions numériques sur-mesure pour ESAT : gestion commerciale d’ateliers, suivi du projet d’accompagnement des travailleurs handicapés et pilotage d’activité.',
  keywords: [
    'logiciel ESAT',
    'solution numérique ESAT',
    'gestion atelier ESAT',
    'projet personnalisé travailleur ESAT',
    'facturation ESAT logiciel',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/esat',
  },
  openGraph: {
    title: 'Logiciels & Outils Numériques pour ESAT | DevEvoke',
    description:
      'Conciliez performance d’atelier et accompagnement médico-social avec nos logiciels sur-mesure pour ESAT.',
    url: 'https://www.devevoke.com/solutions-medico-social/esat',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Logiciels pour ESAT' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsEsatPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour ESAT',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Logiciels de gestion d’ateliers de production et de suivi médico-social pour les Établissements et Services d’Aide par le Travail (ESAT).',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="overflow-hidden pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Solutions', href: '/solutions-medico-social' },
            { label: 'ESAT' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8">
            <Briefcase className="size-4 text-primary-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide uppercase">
              Travail Protégé & Inclusion Professionnelle
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Logiciels et solutions numériques pour les{' '}
            <span className="text-gradient drop-shadow-sm">Établissements & Services d'Aide par le Travail (ESAT)</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Conciliez la gestion de vos activités de production (espaces verts, conditionnement, restauration, menuiserie) avec le suivi médico-social rigoureux du projet personnalisé des travailleurs handicapés.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Discuter d’un projet pour votre ESAT
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/solutions-metier" className="btn-outline w-full sm:w-auto text-base">
              Logiciels métier sur-mesure
            </Link>
          </div>
        </header>

        {/* DOUBLE ENJEU ESAT */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Double Vocation ESAT</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  La synergie entre mission sociale et efficacité économique
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  L'ESAT est une structure unique : elle doit à la fois délivrer des prestations de qualité professionnelle à ses clients donneurs d'ordres (entreprises, collectivités) et assurer un accompagnement médico-social et éducatif bienveillant à ses usagers.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  DevEvoke développe des logiciels qui relient ces deux mondes : suivi de la facturation et des plannings d'ateliers d'un côté, et dématérialisation du <strong>Projet Personnalisé</strong> et des compétences acquises de l'autre.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/esat_workshop_activity.jpg"
                    alt="Atelier de production ESAT encadré par des moniteurs d'atelier"
                    width={800}
                    height={520}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                      Pilotage d'Ateliers & Insertion
                    </span>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Planification adaptée du travail, respect du rythme de chacun et suivi des compétences acquises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4">
                  <Workflow className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Gestion de production & devis</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Édition rapide des devis et factures pour vos clients B2B, suivi de l'avancement des commandes et planification des équipes.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-secondary-500/10 flex items-center justify-center text-secondary-400 mb-4">
                  <Users className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Projet personnalisé & compétences</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Grille de progression adaptée, valorisation des acquis professionnels et traçabilité pour les bilans annuels d'orientation (MDPH).
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <FileSpreadsheet className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Reporting & Rémunération (RSG)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Calcul automatisé des éléments variables, suivi des heures d'atelier et export direct vers votre logiciel de paie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-14 rounded-3xl text-center border border-primary-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Modernisez les outils de gestion de votre ESAT
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Nos consultants analysent vos processus d'atelier et conçoivent la solution logicielle adaptée à vos moniteurs et travailleurs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Demander un devis pour votre ESAT
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/medico-social" className="btn-outline text-base">
                Voir le Pôle Médico-Social
              </Link>
            </div>

            {/* Maillage inter-établissements */}
            <div className="mt-12 pt-8 border-t border-white/10 text-xs sm:text-sm text-muted">
              <span className="block mb-3 font-semibold uppercase tracking-wider text-white/70">Découvrez également nos solutions pour :</span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <Link href="/solutions-medico-social/ime" className="hover:text-primary-400 underline underline-offset-4 transition-colors">IME</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/sessad" className="hover:text-primary-400 underline underline-offset-4 transition-colors">SESSAD</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/ehpad" className="hover:text-primary-400 underline underline-offset-4 transition-colors">EHPAD</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/associations" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Associations gestionnaires</Link>
                <span>•</span>
                <Link href="/developpement-logiciel-medico-social" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Logiciel sur-mesure</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
