import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layout,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Users,
  Lock,
  Layers,
  Sparkles,
  Server,
  Zap,
} from 'lucide-react';

export default function ApplicationWebPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Applications Web & Espaces Métier Médico-Sociaux',
    serviceType: 'Développement d’applications web sécurisées pour le secteur médico-social',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
      logo: 'https://www.devevoke.com/icon.png',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    description:
      'Conception d’applications web sur-mesure pour coordonner les équipes, fluidifier les transmissions administratives et centraliser le pilotage opérationnel des structures médico-sociales.',
  };

  const problems = [
    {
      title: 'Transmissions éclatées entre emails, cahiers papier et messageries',
      desc: 'Les informations opérationnelles circulent sur des canaux non sécurisés, créant des pertes de contexte entre équipes de jour, de nuit ou en télétravail.',
    },
    {
      title: 'Logiciels du marché trop rigides et surdimensionnés',
      desc: 'Les progiciels standards imposent des dizaines d’écrans inutiles et des abonnements mensuels prohibitifs par utilisateur, rendant la saisie laborieuse.',
    },
    {
      title: 'Difficulté à cloisonner les accès selon les métiers',
      desc: 'Entre la direction, les secrétaires, les éducateurs et les intervenants extérieurs, la gestion fine des droits d’accès est souvent inexistante dans les tableurs partagés.',
    },
    {
      title: 'Absence d’accès à distance sécurisé pour la direction',
      desc: 'Les directeurs de pôle et responsables de service ne peuvent pas consulter les indicateurs clés hors des murs de l’établissement sans VPN instable.',
    },
  ];

  const benefits = [
    {
      title: 'Accès universel via navigateur sécurisé',
      desc: 'Aucune installation sur les postes de travail. Vos équipes se connectent en HTTPS avec authentification sécurisée depuis n’importe quel ordinateur ou tablette.',
    },
    {
      title: 'Cloisonnement strict des rôles (RBAC)',
      desc: 'Chaque collaborateur n’accède qu’aux informations strictement nécessaires à sa mission, conformément aux principes de minimisation du RGPD.',
    },
    {
      title: 'Interfaces calquées sur votre quotidien',
      desc: 'Nous utilisons le vocabulaire et les étapes exactes de votre organisation, sans formulaires superflus ni complexité inutile.',
    },
    {
      title: 'Traçabilité et historique complet',
      desc: 'Journalisation claire des modifications, validations hiérarchiques et exports d’activité instantanés en PDF ou Excel.',
    },
  ];

  const features = [
    'Tableau de bord de synthèse paramétrable par service',
    'Gestion fine des droits d’accès et rôles professionnels',
    'Circuits d’approbation et notifications automatiques',
    'Partage sécurisé de documents opérationnels',
    'Recherche plein texte instantanée et filtres multicritères',
    'Hébergement cloud souverain en France (OVH / Scaleway)',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-950 text-white selection:bg-primary-500/30 selection:text-primary-200">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 border-b border-white/5">
          <div className="absolute inset-0 bg-radial from-secondary-900/20 via-neutral-950/80 to-neutral-950 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-300 text-xs sm:text-sm font-medium mb-6">
                  <Layout className="size-4" />
                  <span>Solution N°2 — Espaces Métier & Portails Web</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Applications web & espaces collaboratifs pour le{' '}
                  <span className="text-highlight">
                    médico-social
                  </span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Coordonnez vos équipes pluridisciplinaires avec des applications web modernes, fluides et parfaitement sécurisées. Simplifiez les plannings, centralisez les transmissions internes et offrez à votre direction une visibilité en temps réel.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-secondary-500/20 transition-all flex items-center gap-2"
                  >
                    <span>Étudier votre projet web</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
                  >
                    Découvrir toutes nos solutions
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/hero_medicosocial_team.jpg"
                    alt="Équipe médico-sociale collaborant sur une application web métier"
                    width={800}
                    height={540}
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-xs font-semibold border border-secondary-500/30 mb-2 inline-block">
                      Accès Web Sécurisé
                    </span>
                    <p className="text-white text-sm font-medium">
                      Zéro installation sur poste, authentification renforcée et cloisonnement des rôles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                <AlertTriangle className="size-3.5" />
                <span>Obstacles fréquents</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                La dispersion des informations nuit à la coordination
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Quand les équipes jonglent entre logiciels disparates et fichiers non partagés, la coordination quotidienne devient source de stress et de temps perdu.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-secondary-500/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{prob.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Une application web pensée pour vos équipes
              </h2>
              <p className="text-neutral-400 text-sm">
                DevEvoke conçoit des outils agréables et intuitifs qui simplifient réellement les tâches des professionnels de terrain et administratifs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-secondary-500/30 transition-all space-y-3"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-secondary-500/10 text-secondary-400">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{b.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités clés */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div>
              <span className="text-secondary-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                Capacités techniques
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Ce que nos applications web vous apportent
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="p-1 rounded-full bg-secondary-500/20 text-secondary-400">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Hébergement souverain français et chiffrement TLS 1.3
              </span>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-secondary-500 hover:bg-secondary-400 text-white font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <span>Demander une étude préalable</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Besoin d’un outil web sur-mesure pour votre structure ?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Présentez-nous votre organisation et vos cas d’usage. Nous construisons une solution adaptée à vos besoins spécifiques.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-secondary-500/25 transition-all flex items-center gap-2"
              >
                <span>Contactez notre équipe</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
