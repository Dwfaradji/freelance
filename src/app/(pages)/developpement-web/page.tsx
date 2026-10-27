import React from 'react';
import Link from 'next/link';
import {
  Globe,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  Clock,
  Search,
  Lock,
  LayoutGrid,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';

export default function DeveloppementWebPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement Web Sur-Mesure & Next.js',
    serviceType: 'Création de sites internet professionnels et plateformes web réactives',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
      logo: 'https://www.devevoke.com/icon.png',
      founder: {
        '@type': 'Person',
        name: 'Boucif Faradji',
        jobTitle: 'Fondateur & Développeur Full-Stack',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perpignan',
        addressRegion: 'Occitanie',
        addressCountry: 'FR',
      },
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Occitanie' },
      { '@type': 'Country', name: 'France' },
    ],
    description:
      'Conception et développement de sites vitrines haut de gamme, applications web et plateformes digitales sur-mesure sous Next.js, React et TypeScript par DevEvoke.',
  };

  const painPoints = [
    {
      title: 'Sites WordPress lents et surchargés de plugins',
      desc: 'Des dizaines d’extensions incompatibles créent des failles de sécurité régulières, une maintenance chaotique et des temps de chargement supérieurs à 4 secondes qui font fuir vos prospects.',
    },
    {
      title: 'Templates génériques sans différenciation de marque',
      desc: 'Un design vu partout ailleurs qui dessert votre crédibilité auprès des décideurs B2B et échoue à refléter le professionnalisme de vos équipes.',
    },
    {
      title: 'Visibilité SEO compromise par une dette technique',
      desc: 'Balisage sémantique défaillant, Core Web Vitals dans le rouge et code illisible pour les robots d’indexation de Google.',
    },
    {
      title: 'Dépendance technique et coûts cachés',
      desc: 'Absence de maîtrise sur le code source, surprises tarifaires à chaque modification mineure et interlocuteurs changeants.',
    },
  ];

  const pillars = [
    {
      icon: Globe,
      title: 'Sites Vitrines & Portails de Marque',
      badge: 'Visibilité & Image Premium',
      desc: 'Architecture Next.js sur-mesure taillée pour la conversion. Design épuré, navigation fluide, respect rigoureux de votre charte graphique et compatibilité responsive absolue.',
      features: ['Temps de chargement < 1s', 'Animations fluides & interactives', 'Score Google PageSpeed 95+', 'Balisage SEO structuré'],
    },
    {
      icon: Cpu,
      title: 'Plateformes Web & Espaces Métier',
      badge: 'Interactivité & Outils Internes',
      desc: 'Développement d’applications web accessibles par navigateur : espaces clients sécurisés, dashboards analytiques, extranets partenaires et catalogues dynamiques.',
      features: ['Gestion des rôles & permissions (RBAC)', 'Tableaux de bord temps réel', 'Connexion API REST / GraphQL', 'Bases de données PostgreSQL'],
    },
    {
      icon: Search,
      title: 'SEO Technique & Performance Core Web Vitals',
      badge: 'Acquisition & Référencement',
      desc: 'Optimisation SEO native dès la première ligne de code : rendu serveur (SSR/SSG), métadonnées dynamiques, sitemaps automatisés et balises Schema.org.',
      features: ['Indexation rapide sur Google', 'Balisage JSON-LD sémantique', 'Audit SEO régulier', 'Stratégie de maillage interne'],
    },
    {
      icon: Lock,
      title: 'Sécurité & Hébergement Souverain',
      badge: 'Conformité & Pérennité',
      desc: 'Déploiement sur des infrastructures cloud souveraines localisées en France ou en Europe, conformité RGPD intégrée et chiffrement HTTPS de bout en bout.',
      features: ['Hébergement ISO 27001 France', 'Sauvegardes quotidiennes chiffrées', 'Certificats SSL automatisés', 'Propriété intégrale du code'],
    },
  ];

  const faqs = [
    {
      q: 'Pourquoi privilégier Next.js plutôt qu’un CMS comme WordPress ?',
      a: 'Next.js offre une vitesse de chargement incomparable, une sécurité maximale (aucun plugin tiers vulnérable), une liberté de design totale et une architecture évolutive sans dette technique. Vos données restent étanches et votre score SEO naturel est naturellement supérieur.',
    },
    {
      q: 'Suis-je propriétaire de mon site web et de son code source ?',
      a: 'Oui, à 100%. Chez DevEvoke, l’intégralité du code source développé vous est cédée sans abonnement logiciel captif. Vous restez maître de vos actifs numériques.',
    },
    {
      q: 'Comment se déroule la collaboration avec l’agence ?',
      a: 'Vous échangez directement avec Boucif Faradji, fondateur et développeur. Pas d’intermédiaire commercial : les arbitrages techniques et ergonomiques sont tranchés rapidement avec une méthodologie agile rythmée par des démonstrations hebdomadaires.',
    },
    {
      q: 'Proposez-vous un accompagnement local en Occitanie ?',
      a: 'Tout à fait. Basé à Perpignan dans les Pyrénées-Orientales, DevEvoke intervient aussi bien localement (Perpignan, Narbonne, Montpellier, Toulouse) qu’à distance dans toute la France grâce à des outils de suivi collaboratif transparents.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-950 text-white pb-20">
        <Breadcrumb
          items={[
            { label: 'Nos Expertises', href: '/services' },
            { label: 'Développement Web & Next.js' },
          ]}
          backLink={{ href: '/services', label: 'Retour aux services' }}
        />
        <ServicesNavSwitcher />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20 border-b border-white/5">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[400px] bg-primary-600/15 blur-[160px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-secondary-600/10 blur-[150px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold uppercase tracking-wider">
                <Code2 className="size-3.5" />
                <span>Ingénierie Web Moderne • Next.js & React</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Développement web sur-mesure & plateformes{' '}
                <span className="text-highlight">digitales performantes</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Des sites vitrines d’entreprise aux plateformes web complexes, DevEvoke conçoit des solutions robustes, ultra-rapides et pensées pour transformer vos visiteurs en opportunités d’affaires concrètes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl shadow-primary-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Parler de votre projet web</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/templates"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 text-primary-300 font-medium text-sm transition-all flex items-center justify-center gap-2"
                >
                  <LayoutGrid className="size-4" />
                  <span>Voir nos templates</span>
                </Link>
                <Link
                  href="/realisations"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all text-center"
                >
                  Réalisations
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Code 100% propriétaire
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Next.js & TypeScript
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Hébergement France sécurisé
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Problématiques */}
        <section className="py-20 lg:py-24 border-b border-white/5 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <AlertTriangle className="size-3.5 text-amber-400" />
                Points de Friction Courants
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Pourquoi la plupart des sites d’entreprise échouent à convaincre
              </h2>
              <p className="text-neutral-400 text-base">
                Un site lent ou mal architecturé ne coûte pas seulement cher en maintenance : il dégrade activement votre crédibilité auprès de vos clients et partenaires.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="card-modern p-8 space-y-3 border-l-4 border-l-rose-500/60"
                >
                  <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
                    <AlertTriangle className="size-4" />
                    <span>Constat n°0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Piliers Web */}
        <section className="py-20 lg:py-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <Sparkles className="size-3.5" />
                Notre Approche Ingénierie
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Des solutions web conçues pour durer
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                Chaque projet bénéficie d’une architecture logicielle moderne, sur-mesure et prête à monter en charge selon la croissance de votre organisation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="card-modern p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                      <p className="text-neutral-300 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-white/5">
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                          <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Callout Accélérateur Socles & Templates */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary-950/60 via-neutral-900/90 to-primary-950/40 border border-primary-500/20 shadow-xl shadow-primary-500/5 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-400">
                  <LayoutGrid className="size-4" />
                  <span>Accélérateur de déploiement</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Besoin d’aller vite ? Explorez nos socles &amp; templates métiers
                </h3>
                <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
                  Pour réduire le délai de mise en ligne et optimiser votre budget, découvrez nos modèles pré-configurés (santé, médico-social, cabinets professionnels, services). Chaque socle sert de fondation solide et est entièrement personnalisé à votre image.
                </p>
              </div>
              <Link
                href="/templates"
                className="shrink-0 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm transition-all shadow-lg shadow-primary-500/25 flex items-center gap-2 group"
              >
                <span>Explorer les templates</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section Pourquoi DevEvoke & Local SEO Anchor */}
        <section className="py-20 bg-neutral-900/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="section-label">
                  <ShieldCheck className="size-3.5" />
                  Agence Indépendante & Réactive
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  L&apos;engagement d&apos;un développeur expert dédié à la réussite de votre projet
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  Contrairement aux agences traditionnelles où votre projet est délégué à des intervenants juniors successifs, vous travaillez en relation directe avec <strong className="text-white">Boucif Faradji</strong>, fondateur et développeur full-stack.
                </p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Interlocuteur unique & expert :</strong> fluidité absolue des échanges, compréhension immédiate de vos enjeux métier et prise de décision rapide.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Ancrage local & proximité :</strong> basé à Perpignan (Pyrénées-Orientales, Occitanie), avec déplacements possibles dans vos locaux et visio permanente.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Accompagnement durable :</strong> contrat de maintenance réactive, hébergement souverain et évolutions sans rupture.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 card-modern p-8 space-y-6 bg-neutral-950/80 border-primary-500/20">
                <h3 className="text-xl font-bold text-white">Stack Technique Maîtrisée</h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Frontend</strong>
                    <span className="text-neutral-400">Next.js 15, React 19, TypeScript, Tailwind CSS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Backend & API</strong>
                    <span className="text-neutral-400">Node.js, PostgreSQL, Prisma, REST & GraphQL</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Performance</strong>
                    <span className="text-neutral-400">SSR, SSG, Core Web Vitals, CDN Edge</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Cloud & Sécurité</strong>
                    <span className="text-neutral-400">Serveurs France, SSL/TLS, RGPD & CNIL</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Échanger directement avec le fondateur</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-24 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <span className="section-label">
                <HelpCircle className="size-3.5" />
                Foire Aux Questions
              </span>
              <h2 className="text-3xl font-bold text-white">Questions fréquentes sur le développement web</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="card-modern p-6 space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-2">
                    <span className="text-primary-400">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Prêt à concrétiser votre nouveau site ou plateforme web ?
            </h2>
            <p className="text-base text-neutral-300 max-w-2xl mx-auto">
              Planifiez un échange de cadrage gratuit de 30 minutes avec Boucif Faradji pour auditer votre besoin, valider la faisabilité technique et estimer budget et planning.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Planifier un échange de cadrage</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/templates"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 text-primary-300 font-medium text-sm transition-all flex items-center justify-center gap-2"
              >
                <LayoutGrid className="size-4" />
                <span>Explorer nos templates</span>
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all"
              >
                Consulter tous nos services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
