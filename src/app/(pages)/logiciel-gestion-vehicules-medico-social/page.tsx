import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import floticarImg from '@/images/projects/floticar-dashboard.png';
import { 
  Car, 
  CalendarCheck, 
  Wrench, 
  AlertTriangle, 
  Smartphone, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingDown, 
  Clock, 
  Building, 
  KeyRound,
  FileCheck
} from 'lucide-react';
import FleetCostCalculator from '@/components/Tools/FleetCostCalculator';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function LogicielGestionVehiculesMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Floticar',
    operatingSystem: 'Web, iOS, Android (PWA)',
    applicationCategory: 'BusinessApplication',
    description:
      'Solution SaaS de gestion de flotte et de suivi des véhicules adaptée aux besoins des associations et établissements médico-sociaux (IME, SESSAD, ESAT, EHPAD).',
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
      icon: <CalendarCheck className="size-6 text-primary-400" />,
      title: 'Planning de Réservation Partagé',
      desc: 'Visualisez en temps réel la disponibilité des véhicules de service ou de fonction. Les professionnels (éducateurs, soignants, chefs de service) réservent en 3 clics selon leur planning d’intervention.',
    },
    {
      icon: <Smartphone className="size-6 text-secondary-400" />,
      title: 'Carnet de Bord Dématérialisé',
      desc: 'Adieu aux carnets papier perdus ou illisibles dans la boîte à gants. Relevé kilométrique, motif de déplacement et niveau de carburant renseignés directement sur smartphone au départ et au retour.',
    },
    {
      icon: <Wrench className="size-6 text-accent" />,
      title: 'Alertes Entretiens & Contrôles Techniques',
      desc: 'Ne ratez plus aucun contrôle technique obligatoire, révision ou vidange. Des notifications proactives avertissent les gestionnaires de parc avant l’échéance pour garantir la sécurité des passagers.',
    },
    {
      icon: <FileCheck className="size-6 text-emerald-400" />,
      title: 'État des Lieux Numérique & Sinistres',
      desc: 'Prise de photos instantanée en cas d’anomalie ou de rayure au moment de la restitution du véhicule. Traçabilité complète des conducteurs pour responsabiliser les équipes.',
    },
    {
      icon: <TrendingDown className="size-6 text-pink-400" />,
      title: 'Maîtrise des Dépenses & Carburant',
      desc: 'Suivi rigoureux de la consommation de carburant, des cartes essence et des frais de péage. Exportation des données comptables pour vos arrêtés de compte et vos financeurs (ARS, Départements).',
    },
    {
      icon: <Building className="size-6 text-cyan-400" />,
      title: 'Gestion Multi-Sites & Multi-Établissements',
      desc: 'Idéal pour les associations gestionnaires pilotant plusieurs IME, SESSAD, ESAT ou foyers. Partitionnez la flotte par structure tout en conservant une vue consolidée au siège associatif.',
    },
  ];

  const casUsages = [
    {
      structure: 'Pour les IME (Instituts Médico-Éducatifs)',
      challenge: 'Transports quotidiens d’enfants et minibus adaptés PMR',
      solution: 'Gestion rigoureuse des minibus partagés, suivi des contrôles de sécurité et assignation des chauffeurs pour assurer des trajets sécurisés sans retard.',
      link: '/solutions-medico-social/ime',
    },
    {
      structure: 'Pour les SESSAD (Soins & Éducation à Domicile)',
      challenge: 'Équipes nomades réalisant des tournées quotidiennes',
      solution: 'Permet aux éducateurs spécialisés, psychologues et psychomotriciens de réserver une voiture de service en autonomie et de valider les kilomètres parcourus depuis leur smartphone.',
      link: '/solutions-medico-social/sessad',
    },
    {
      structure: 'Pour les Associations Gestionnaires Multi-Établissements',
      challenge: 'Flotte hétérogène éclatée sur plusieurs communes',
      solution: 'Vue globale pour le Responsable Moyens Généraux ou le Directeur Administratif : taux d’utilisation des véhicules, anticipation des renouvellements et respect des budgets alloués.',
      link: '/solutions-medico-social/associations',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="overflow-hidden pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Solutions', href: '/solutions-medico-social' },
            { label: 'Gestion de Flotte Automobile' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO SECTION */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary-500/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-secondary-200 tracking-wide uppercase">
              Solution SaaS Éditée par DevEvoke
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Logiciel de gestion de flotte et suivi des véhicules pour{' '}
            <span className="text-gradient drop-shadow-sm">associations médico-sociales</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            <strong>Floticar</strong> est la solution logicielle en ligne conçue pour répondre aux contraintes spécifiques des <strong>associations gestionnaires</strong>, <strong>IME</strong>, <strong>SESSAD</strong> et établissements du médico-social. Centralisez vos réservations, automatisez les contrôles et maîtrisez vos coûts de transport.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Demander une démonstration de 14 jours
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto text-base">
              Contacter un conseiller Floticar
            </Link>
          </div>
        </header>

        {/* VISUEL DOUBLE TERRAIN & COCKPIT FLOTICAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Field Action Photograph */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group flex flex-col justify-end min-h-[380px] lg:min-h-[480px]">
              <Image
                src="/images/home/floticar_real_action.jpg"
                alt="Chauffeur et éducateur scannant le QR code sur minibus associatif avec Floticar"
                width={800}
                height={600}
                className="absolute inset-0 size-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" />
              <div className="relative z-10 p-6 sm:p-8 space-y-2">
                <span className="px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-xs font-semibold border border-secondary-500/30 inline-block">
                  Usage Terrain Immédiat
                </span>
                <h3 className="text-xl font-bold text-white">Zéro application à télécharger</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Le conducteur scanne le QR code collé sur le tableau de bord du véhicule : l’état des lieux et le relevé kilométrique s’ouvrent en 2 secondes sur son smartphone.
                </p>
              </div>
            </div>

            {/* Dashboard Console Preview */}
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.15)] group flex flex-col justify-between">
              <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden">
                <Image
                  src={floticarImg}
                  alt="Interface du logiciel Floticar pour la gestion de flotte automobile en établissement médico-social"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80 pointer-events-none" />
              </div>
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary-400 font-bold">Cockpit Direction & Moyens Généraux</span>
                  <p className="text-white font-semibold text-lg sm:text-xl">Supervision en temps réel du parc associatif</p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 shrink-0">
                  100% Web & Mobile
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1 : POURQUOI UNE GESTION SPÉCIFIQUE DANS LE MÉDICO-SOCIAL */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Enjeux de Terrain</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Pourquoi la gestion d'un parc automobile est un défi majeur en association médico-sociale ?
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Dans une structure médico-sociale, le véhicule n'est pas un simple moyen de transport : c'est un <strong>outil de travail indispensable</strong> à la mission d'accompagnement. Qu'il s'agisse de transporter des enfants scolarisés en IME, de permettre aux éducateurs de SESSAD de visiter les familles, ou de véhiculer des résidents de FAM/MAS vers des activités extérieures, l'indisponibilité d'un véhicule paralyse le service.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Pourtant, de nombreuses associations fonctionnent encore avec des cahiers de réservation papier, des tableaux Excel éparpillés et des entretiens gérés dans l'urgence. <strong>Floticar</strong> a été adapté pour mettre fin à ces frictions administratives tout en sécurisant la responsabilité juridique des directions d'établissements.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                  <AlertTriangle className="size-8 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Responsabilité juridique & sécurité</h3>
                    <p className="text-sm text-muted">Contrôles techniques dépassés ou pneus lisses : Floticar prévient tout risque en bloquant la réservation d'un véhicule non conforme.</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                  <Clock className="size-8 text-secondary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Conflits de plannings évités</h3>
                    <p className="text-sm text-muted">Plus de double réservation de dernière minute : chaque membre du personnel visualise en temps réel les véhicules libres.</p>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                  <FileSpreadsheet className="size-8 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Justification des frais kilométriques</h3>
                    <p className="text-sm text-muted">Exportation simplifiée des données kilométriques et carburant pour les audits budgétaires des financeurs publics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 : FONCTIONNALITÉS CLÉS DE FLOTICAR */}
        <section className="py-20 bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Fonctionnalités Floticar</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-3 mb-6">
                Des outils pensés pour les chauffeurs, éducateurs et directions
              </h2>
              <p className="text-muted text-lg">
                Floticar regroupe toutes les fonctionnalités indispensables pour piloter votre flotte automobile en toute sérénité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fonctionnalites.map((f, idx) => (
                <div
                  key={idx}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-secondary-500/30 transition-all duration-300"
                >
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 : CAS D'USAGE PAR TYPE D'ÉTABLISSEMENT */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Adaptabilité Terrain</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
                Floticar en action dans vos établissements
              </h2>
              <p className="text-muted text-lg">
                Que votre flotte soit composée de 3 citadines ou de 40 minibus adaptés, Floticar s'adapte à votre organisation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {casUsages.map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.structure}</h3>
                    <div className="text-xs uppercase tracking-wider text-secondary-400 font-semibold mb-4">
                      {item.challenge}
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-6">{item.solution}</p>
                  </div>
                  <Link
                    href={item.link}
                    className="text-xs font-semibold uppercase tracking-wider text-primary-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    Voir les solutions dédiées →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 : SÉCURITÉ DES DONNÉES & HÉBERGEMENT */}
        <section className="py-16 border-t border-white/5 bg-surface/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary-500/10 text-primary-400 mx-auto">
              <ShieldCheck className="size-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Une solution 100% hébergée en France et conforme au RGPD
            </h2>
            <p className="text-muted leading-relaxed text-base">
              Toutes les données de trajets, d'utilisateurs et de véhicules gérées dans Floticar sont stockées sur des serveurs souverains sécurisés en France. Vos données restent votre propriété exclusive et ne sont jamais revendues ni partagées à des tiers.
            </p>
          </div>
        </section>

        {/* SECTION 4.5 : SIMULATEUR CALCULATEUR DE GAINS */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FleetCostCalculator />
          </div>
        </section>

        {/* SECTION 5 : CALL TO ACTION DÉMONSTRATION 14 JOURS */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-16 rounded-3xl text-center border border-secondary-500/30 shadow-[0_0_60px_rgba(6,182,212,0.2)] relative z-10">
            <span className="section-label mb-4 inline-block">Testez Floticar sans engagement</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Simplifiez la gestion des véhicules de votre association
            </h2>
            <p className="text-muted text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Bénéficiez d'une démonstration personnalisée et testez gratuitement Floticar pendant 14 jours avec votre équipe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://floticar.com/demande-de-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Demander une démonstration de 14 jours
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/agence-digitale-medico-social" className="btn-outline text-base">
                Découvrir l'agence DevEvoke
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
