import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import floticarImg from '@/images/projects/floticar-dashboard.png';
import {
  CalendarCheck,
  Wrench,
  AlertTriangle,
  Smartphone,
  FileSpreadsheet,
  ArrowRight,
  TrendingDown,
  Clock,
  Building,
  FileCheck,
  QrCode,
  Sparkles,
  Layers,
} from 'lucide-react';
import FleetCostCalculator from '@/components/Tools/FleetCostCalculator';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function FloticarCaseStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Floticar (par DevEvoke)',
    operatingSystem: 'Web, iOS, Android (PWA)',
    applicationCategory: 'BusinessApplication',
    description:
      'Étude de cas : solution SaaS de gestion de flotte et de suivi des véhicules développée par DevEvoke pour les associations médico-sociales, IME et SESSAD.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Démonstration gratuite de 14 jours sans engagement',
    },
    creator: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
  };

  const fonctionnalites = [
    {
      icon: <QrCode className="size-6 text-primary-400" />,
      title: 'Carnet de bord par QR Code (PWA)',
      desc: 'Aucune application à installer depuis les stores. Le conducteur flashe le QR code collé sur le tableau de bord avec son smartphone pour consigner le départ et le retour en 10 secondes.',
    },
    {
      icon: <CalendarCheck className="size-6 text-secondary-400" />,
      title: 'Planning de réservation partagé',
      desc: 'Visualisation en temps réel de la disponibilité des véhicules. Les éducateurs et soignants réservent en 3 clics selon leur planning d’intervention sans risque de doublon.',
    },
    {
      icon: <Wrench className="size-6 text-accent" />,
      title: 'Alertes contrôles techniques & vidanges',
      desc: 'Ne ratez plus aucun contrôle technique obligatoire, vidange ou révision. Des alertes proactives avertissent les gestionnaires de parc pour garantir la sécurité des personnes accompagnées.',
    },
    {
      icon: <FileCheck className="size-6 text-emerald-400" />,
      title: 'Signalement immédiat d’anomalies & photos',
      desc: 'Prise de photo instantanée en cas d’anomalie ou de rayure au moment de la restitution du véhicule. Traçabilité complète des conducteurs pour responsabiliser les équipes.',
    },
    {
      icon: <TrendingDown className="size-6 text-pink-400" />,
      title: 'Suivi carburant & imputation des amendes',
      desc: 'Zéro amende majorée non imputée. Relevé kilométrique rigoureux et export comptable immédiat pour vos arrêtés de compte et vos financeurs (ARS, Départements).',
    },
    {
      icon: <Building className="size-6 text-cyan-400" />,
      title: 'Console multi-sites & multi-établissements',
      desc: 'Idéal pour les associations gestionnaires pilotant plusieurs IME, SESSAD ou ESAT. Chaque établissement gère son parc tout en offrant une vue consolidée à la direction générale.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-950 text-white selection:bg-primary-500/30 selection:text-primary-200">
        <Breadcrumb
          items={[
            { label: 'Réalisations', href: '/realisations' },
            { label: 'Étude de cas Floticar' },
          ]}
          backHref="/realisations"
          backLabel="Retour aux réalisations"
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-white/5">
          <div className="absolute inset-0 bg-radial from-primary-900/20 via-neutral-950/80 to-neutral-950 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold mb-6">
              <Sparkles className="size-3.5" />
              <span>Étude de Cas Produit — Conçu & Développé par DevEvoke</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
              Floticar : La dématérialisation du carnet de bord pour les{' '}
              <span className="text-highlight">
                flottes médico-sociales
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Comment DevEvoke a créé une plateforme SaaS complète pour éliminer les carnets de bord papier, automatiser le suivi des entretiens et sécuriser la gestion des véhicules associatifs (IME, SESSAD, ESAT, EHPAD).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://floticar.com/demande-de-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
              >
                <span>Demander une démo de 14 jours</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                Parler d’un projet sur-mesure
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Showcase: Field Photography + Dashboard UI Side-by-Side */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Field Photo: Minibus QR Code Scan */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900">
                <Image
                  src="/images/home/floticar_real_action.jpg"
                  alt="Conducteur d'une association médico-sociale scannant le QR code sur le minibus de tournée"
                  width={600}
                  height={500}
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-[0.95]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 backdrop-blur-md bg-neutral-950/80 border border-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-2">
                  <Smartphone className="size-3.5 text-secondary-400" />
                  <span>Côté Conducteur : Scan QR Code</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-neutral-900/90 border border-white/10 rounded-2xl p-4">
                  <span className="text-xs font-bold text-white block">Zéro application à installer</span>
                  <p className="text-[11px] text-neutral-300 leading-snug">
                    Fonctionne sur n&apos;importe quel smartphone en 10 secondes pour consigner le départ et le retour.
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard UI: Fleet Console for Directors */}
            <div className="lg:col-span-7 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900">
                <Image
                  src={floticarImg}
                  alt="Interface du logiciel Floticar développé par DevEvoke pour le médico-social"
                  width={1920}
                  height={1080}
                  className="w-full h-[380px] sm:h-[440px] object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-4 left-4 backdrop-blur-md bg-primary-950/80 border border-primary-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary-200">
                  Côté Direction : Cockpit Centralisé
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-primary-400 font-bold block">
                      Suivi Multi-Établissements
                    </span>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      Contrôles techniques, alertes révisions et imputation des amendes
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 shrink-0">
                    SaaS Souverain en France
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Problem */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-wider text-primary-400 font-semibold block">
                  Contexte & Problématique
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Pourquoi la gestion de flotte était une source de stress pour les associations
                </h2>
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                  Dans une structure médico-sociale, le véhicule n’est pas un luxe : c’est un outil opérationnel indispensable pour amener des enfants à l’école, permettre aux éducateurs nomades de visiter les familles ou véhiculer des résidents.
                </p>
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                  Pourtant, la plupart des établissements fonctionnaient encore avec des carnets papier dans la boîte à gants, des stylos manquants, des amendes non attribuées et des contrôles techniques oubliés. Face à ce constat de terrain récurrent, DevEvoke a décidé de concevoir une réponse logicielle moderne et légère : <strong>Floticar</strong>.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-start gap-4">
                  <AlertTriangle className="size-6 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      Responsabilité juridique & sécurité
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Contrôles techniques dépassés ou pneus usés : Floticar prévient tout risque en alertant immédiatement le gestionnaire avant l’échéance critique.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-start gap-4">
                  <Clock className="size-6 text-secondary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      Conflits de plannings et véhicules introuvables
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Fini les doubles réservations de dernière minute : chaque membre du personnel visualise en temps réel les véhicules libres et les conducteurs en cours.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-start gap-4">
                  <FileSpreadsheet className="size-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      Justification kilométrique et audits ARS
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Exportation simplifiée des données kilométriques et de carburant pour les audits budgétaires des financeurs publics (ARS, Départements).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-wider text-secondary-400 font-semibold block mb-2">
                Fonctionnalités Clés
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Une architecture conçue pour l’adoption immédiate
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base">
                Aucune formation complexe requise. Tout est pensé pour que le personnel de terrain adopte l’outil dès le premier trajet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fonctionnalites.map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-primary-500/30 transition-all space-y-3"
                >
                  <div className="p-2.5 w-fit rounded-xl bg-white/5 border border-white/10">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Cost Calculator Component */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-wider text-accent font-semibold block mb-2">
                Simulateur Financier
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Estimez les gains potentiels pour votre flotte
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Calculez en quelques clics les économies administratives et les coûts d’amendes évités grâce à la dématérialisation.
              </p>
            </div>
            <FleetCostCalculator />
          </div>
        </section>

        {/* Closing Section: Agency Know-How & Bridge to Other Projects */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-primary-500/40 p-8 sm:p-14 text-center space-y-6 shadow-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold">
              <Layers className="size-3.5" />
              <span>Savoir-faire DevEvoke en Ingénierie Logicielle</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
              Ce projet illustre notre capacité à concevoir des solutions adaptées à vos réalités
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Floticar n’est pas le seul outil que nous pouvons vous apporter : c’est la démonstration concrète de notre savoir-faire. Vous avez un besoin métier spécifique (gestion de plannings, suivi d’usagers, portail familles, dématérialisation) ? Nous construisons la solution qui vous ressemble.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
              >
                <span>Parler de votre projet avec DevEvoke</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://floticar.com/demande-de-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                Demander une démo de Floticar
              </Link>
              <Link
                href="/logiciel-gestion-vehicules-medico-social"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-primary-300 hover:text-white font-medium text-sm transition-all"
              >
                Page solution : Gestion de flotte médico-sociale
              </Link>
              <Link
                href="/realisations"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                ← Toutes les réalisations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
