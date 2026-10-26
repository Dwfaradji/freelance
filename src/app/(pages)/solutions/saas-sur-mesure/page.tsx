import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cloud,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Building2,
  Layers,
  ShieldCheck,
  Server,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function SaasSurMesurePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Conception de Plateformes SaaS Médico-Sociales',
    serviceType: 'Développement de plateformes SaaS multi-établissements pour associations médico-sociales',
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
      'Développement de plateformes SaaS sur-mesure pour associations gestionnaires multi-établissements. Centralisation multi-sites, gouvernance unifiée et hébergement souverain.',
  };

  const problems = [
    {
      title: 'Hétérogénéité des outils entre établissements',
      desc: 'Chaque site utilise ses propres logiciels et habitudes, rendant impossible la consolidation rapide des indicateurs au niveau de la direction générale.',
    },
    {
      title: 'Multiplication des coûts d’abonnements logiciels',
      desc: 'Payer des dizaines de licences progicielles distinctes pour chaque structure pèse lourdement sur les budgets associatifs sans apporter de valeur mutualisée.',
    },
    {
      title: 'Mises à jour manuelles et failles de sécurité',
      desc: 'Les logiciels installés localement ne sont pas mis à jour régulièrement, générant des risques de failles informatiques et des pertes de données.',
    },
    {
      title: 'Difficulté à intégrer un nouvel établissement',
      desc: 'Lors de l’ouverture ou de la reprise d’un nouveau pôle, le déploiement des outils informatiques prend des mois faute d’infrastructure mutualisée.',
    },
  ];

  const benefits = [
    {
      title: 'Architecture multi-établissements étanche',
      desc: 'Chaque pôle ou structure dispose de son propre espace sécurisé, tandis que la direction générale bénéficie d’une console de pilotage consolidée.',
    },
    {
      title: 'Déploiement instantané pour un nouveau site',
      desc: 'Activez un nouvel établissement en quelques clics avec des paramètres prêts à l’emploi, sans intervention technique lourde.',
    },
    {
      title: 'Mises à jour continues sans interruption',
      desc: 'Votre plateforme évolue régulièrement sans nécessiter d’intervention manuelle sur les postes de travail de vos équipes.',
    },
    {
      title: 'Souveraineté des données et conformité RGPD',
      desc: 'Vos bases de données sont hébergées sur le cloud souverain français (OVHcloud, Scaleway) avec des sauvegardes quotidiennes chiffrées.',
    },
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
                  <Cloud className="size-4" />
                  <span>Solution N°5 — Plateformes SaaS Multi-Sites</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Plateformes SaaS sur-mesure pour les{' '}
                  <span className="text-highlight">
                    associations gestionnaires
                  </span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Vous gérez plusieurs établissements (IME, SESSAD, ESAT, EHPAD) ? DevEvoke conçoit des plateformes SaaS modernes pour centraliser vos processus, mutualiser vos outils et unifier le pilotage de votre association.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-secondary-500/20 transition-all flex items-center gap-2"
                  >
                    <span>Étudier votre projet de plateforme</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/realisations/floticar"
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
                  >
                    Voir l’exemple Floticar
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/hero_medicosocial_team.jpg"
                    alt="Direction d'association médico-sociale supervisant sa plateforme SaaS multi-établissements"
                    width={800}
                    height={540}
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-xs font-semibold border border-secondary-500/30 mb-2 inline-block">
                      Multi-Établissements Garanti
                    </span>
                    <p className="text-white text-sm font-medium">
                      Console consolidée pour la Direction et environnements cloisonnés pour chaque structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème Multi-Sites */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                <AlertTriangle className="size-3.5" />
                <span>Complexité multi-établissements</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Piloter plusieurs structures sans outil unifié devient un casse-tête
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Quand chaque établissement fonctionne en silo, la direction générale manque de visibilité globale et perd un temps précieux à harmoniser les données.
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

        {/* Exemple Concret : Floticar */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 sm:p-12 rounded-3xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 border border-secondary-500/30">
                  Étude de Cas DevEvoke
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Floticar : une plateforme SaaS développée par DevEvoke
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Pour répondre au problème critique de gestion de flotte dans les associations médico-sociales, DevEvoke a créé Floticar. Cette plateforme SaaS multi-établissements permet aux directions de piloter des centaines de véhicules sur plusieurs pôles avec des carnets de bord par QR code sur smartphone.
                </p>
                <div className="pt-2">
                  <Link
                    href="/realisations/floticar"
                    className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                  >
                    <span>Découvrir l’étude de cas complète Floticar</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-4 p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-xs text-neutral-300">
                <span className="text-white font-semibold block">Ce que nous savons construire :</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary-400 shrink-0" />
                  <span>Portail multi-tenant étanche</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary-400 shrink-0" />
                  <span>Interfaces PWA ultra légères</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary-400 shrink-0" />
                  <span>Alertes et reporting automatisés</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary-400 shrink-0" />
                  <span>Hébergement haute disponibilité</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Les atouts d’un SaaS dédié pour votre association
            </h2>
            <p className="text-neutral-400 text-sm">
              Conçu pour s’adapter à l’évolution de votre parc d’établissements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-secondary-500/30 transition-all space-y-3"
              >
                <div className="p-2.5 w-fit rounded-lg bg-secondary-500/10 text-secondary-400">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white">{b.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Vous envisagez une plateforme pour vos établissements ?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Contactez nos architectes logiciels pour définir l’architecture et les fonctionnalités adaptées à votre association.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-secondary-500/25 transition-all flex items-center gap-2"
              >
                <span>Échanger sur votre projet SaaS</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
