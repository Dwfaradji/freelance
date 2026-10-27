import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  Car, 
  Users, 
  CalendarCheck, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake,
  FileText
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export const metadata: Metadata = {
  title: 'Solutions Numériques & Logiciels pour IME',
  description:
    'Solutions digitales conçues pour les Instituts Médico-Éducatifs (IME) : suivi éducatif et thérapeutique, gestion des transports et minibus (Floticar), coordination et lien familles.',
  keywords: [
    'logiciel IME',
    'solution numérique IME',
    'gestion véhicules IME',
    'institut médico éducatif logiciel',
    'suivi éducatif IME',
    'Floticar IME',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/ime',
  },
  openGraph: {
    title: 'Solutions Numériques & Logiciels pour IME | DevEvoke',
    description:
      'Facilitez le quotidien des éducateurs, rééducateurs et directions d’IME avec des outils numériques pensés pour l’accompagnement des enfants et adolescents.',
    url: 'https://www.devevoke.com/solutions-medico-social/ime',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Solutions logicielles pour IME' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsImePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour Instituts Médico-Éducatifs (IME)',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Outils de suivi éducatif, gestion de flotte de minibus et coordination pour Instituts Médico-Éducatifs.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="overflow-hidden pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Solutions', href: '/solutions-medico-social' },
            { label: 'IME' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8">
            <GraduationCap className="size-4 text-primary-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide uppercase">
              Établissements Enfance & Handicap
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Solutions numériques et logiciels pour{' '}
            <span className="text-gradient drop-shadow-sm">Instituts Médico-Éducatifs (IME)</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Simplifiez le suivi éducatif et thérapeutique des jeunes accompagnés, optimisez la gestion quotidienne de vos minibus de ramassage avec <strong>Floticar</strong> et facilitez les échanges sécurisés avec les familles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Demander un échange pour votre IME
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/realisations/floticar" className="btn-outline w-full sm:w-auto text-base">
              Découvrir l'étude de cas Floticar
            </Link>
          </div>
        </header>

        {/* LES DÉFIS MAJEURS D'UN IME */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Compréhension des Besoins IME</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Coordonner les équipes éducatives, médicales et logistiques
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  En Institut Médico-Éducatif (IME), les journées sont rythmées par les ateliers pédagogiques, les séances de psychomotricité, d'orthophonie et les temps de vie collective.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  La dispersion des observations dans des classeurs papier ou des notes non synchronisées génère une perte de temps précieuse. DevEvoke conçoit des outils intuitifs permettant de centraliser le <strong>Projet Personnalisé d’Accompagnement (PPA)</strong>, de sécuriser les transmissions et de coordonner les transports en toute sérénité.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/solutions/ime_pedagogy_learning.jpg"
                    alt="Séance éducative individualisée en IME avec outil tactile adapté"
                    width={800}
                    height={520}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                      Pédagogie & Développement
                    </span>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Des interfaces adaptées au rythme d'apprentissage des enfants et adolescents.
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
                <h3 className="text-white font-bold text-lg mb-2">Sécurité des transports & minibus</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Les tournées de ramassage matinales et du soir sont critiques. Floticar permet de planifier les minibus adaptés, de suivre les contrôles techniques et de consigner les kilomètres sans paperasse.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4">
                  <FileText className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Suivi des objectifs éducatifs</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Chaque éducateur ou rééducateur met à jour les bilans périodiques et les réussites de l'enfant dans une interface claire et sécurisée.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <HeartHandshake className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Lien renforcé avec les parents</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Espace numérique pour partager les événements du quotidien, les plannings et les documents administratifs en conformité avec le RGPD.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA DÉCISIONNAIRE */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-14 rounded-3xl text-center border border-primary-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Modernisez les outils de votre Institut Médico-Éducatif
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Présentez-nous votre organisation. Nous vous accompagnons dans le choix ou le développement de la solution la plus pertinente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Contacter un conseiller IME
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
                <Link href="/solutions-medico-social/sessad" className="hover:text-primary-400 underline underline-offset-4 transition-colors">SESSAD</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/esat" className="hover:text-primary-400 underline underline-offset-4 transition-colors">ESAT</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/ehpad" className="hover:text-primary-400 underline underline-offset-4 transition-colors">EHPAD</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/associations" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Associations gestionnaires</Link>
                <span>•</span>
                <Link href="/logiciel-gestion-vehicules-medico-social" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Gestion de flotte</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
