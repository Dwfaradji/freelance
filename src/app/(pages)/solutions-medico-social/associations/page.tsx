import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Layers, 
  Car, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Workflow,
  Server
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export const metadata: Metadata = {
  title: 'Solutions Numériques pour Associations Médico-Sociales',
  description:
    'Solutions digitales pour associations gestionnaires médico-sociales : pilotage multi-établissements, gestion centralisée de flotte (Floticar), gouvernance des SI et conformité RGPD.',
  keywords: [
    'logiciel association médico-sociale',
    'solution numérique association gestionnaire',
    'gestion flotte association médico-sociale',
    'DSI médico-social',
    'logiciel multi-établissements médico-social',
    'digitalisation association médico-sociale',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/associations',
  },
  openGraph: {
    title: 'Solutions Numériques pour Associations Médico-Sociales | DevEvoke',
    description:
      'Accompagnement technologique sur-mesure pour les associations gestionnaires d’établissements sociaux et médico-sociaux.',
    url: 'https://www.devevoke.com/solutions-medico-social/associations',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Solutions pour associations médico-sociales' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsAssociationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour Associations Médico-Sociales',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Gouvernance des systèmes d’information, consolidation multi-sites et gestion de flotte automobile pour associations gestionnaires.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="overflow-hidden pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Solutions', href: '/solutions-medico-social' },
            { label: 'Associations' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8">
            <Building2 className="size-4 text-primary-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide uppercase">
              Gouvernance & Multi-Établissements
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Solutions numériques pour les{' '}
            <span className="text-gradient drop-shadow-sm">associations médico-sociales</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Vous gérez plusieurs structures (IME, SESSAD, ESAT, foyers, EHPAD) ? DevEvoke accompagne les <strong>Directions Générales</strong> et <strong>DSI associatives</strong> dans l’unification de leur système d’information, la gestion de leur flotte automobile (<strong>Floticar</strong>) et la conformité RGPD.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Planifier un échange de cadrage associatif
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/realisations/floticar" className="btn-outline w-full sm:w-auto text-base">
              Étude de cas gestion de flotte (Floticar)
            </Link>
          </div>
        </header>

        {/* PROBLÉMATIQUES ASSOCIATIVES */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Enjeux de Direction Générale</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Mutualiser les moyens et consolider les données multi-sites
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Les associations gestionnaires regroupent souvent des établissements historiques ayant chacun développé leurs propres habitudes de travail et leurs propres outils. Cette hétérogénéité fragmente les données, complique les reportings pour les financeurs (ARS, départements) et entraîne des surcoûts d’infrastructure.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  DevEvoke vous apporte une vision d’ensemble : alignement stratégique du SI, déploiement d’outils transversaux comme <strong>Floticar</strong> pour les parcs de véhicules mutualisés, et développement de passerelles inter-applicatives sécurisées.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/hero_medicosocial_team.jpg"
                    alt="Direction et coordination d'association médico-sociale en réunion de pilotage"
                    width={800}
                    height={520}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                      Pilotage Multi-Établissements
                    </span>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Une vue consolidée pour la Direction Générale et des outils adaptés pour chaque équipe de terrain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-secondary-500/10 flex items-center justify-center text-secondary-400 mb-4">
                  <Car className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Gestion centralisée de la flotte</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Visualisez l’ensemble des véhicules de l’association par établissement. Partagez les minibus entre structures proches pour maximiser le taux d’usage.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4">
                  <TrendingUp className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Tableaux de bord consolidés CA</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Indicateurs clés d’activité, taux d’occupation, suivi budgétaire et données RH agrégées en temps réel pour éclairer les décisions stratégiques.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Gouvernance RGPD & DPO Mutualisé</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Harmonisation des registres de traitement, audits de conformité de vos prestataires et sécurisation des transferts de données sensibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-14 rounded-3xl text-center border border-primary-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Accélérez la transformation numérique de votre association
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Directeurs généraux, DSI, DAF associatifs : découvrez comment DevEvoke vous aide à rationnaliser vos outils et sécuriser vos données.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Rencontrer un consultant DevEvoke
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/agence-digitale-medico-social" className="btn-outline text-base">
                Découvrir notre démarche d'agence
              </Link>
            </div>

            {/* Maillage inter-établissements */}
            <div className="mt-12 pt-8 border-t border-white/10 text-xs sm:text-sm text-muted">
              <span className="block mb-3 font-semibold uppercase tracking-wider text-white/70">Solutions dédiées par structure :</span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <Link href="/solutions-medico-social/ime" className="hover:text-primary-400 underline underline-offset-4 transition-colors">IME</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/sessad" className="hover:text-primary-400 underline underline-offset-4 transition-colors">SESSAD</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/esat" className="hover:text-primary-400 underline underline-offset-4 transition-colors">ESAT</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/ehpad" className="hover:text-primary-400 underline underline-offset-4 transition-colors">EHPAD</Link>
                <span>•</span>
                <Link href="/logiciel-gestion-vehicules-medico-social" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Gestion de flotte multi-sites</Link>
                <span>•</span>
                <Link href="/developpement-logiciel-medico-social" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Développement sur-mesure</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
