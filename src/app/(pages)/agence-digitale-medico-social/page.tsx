import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  ShieldCheck, 
  Layers, 
  Car, 
  Cpu, 
  Smartphone, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Server, 
  Workflow, 
  Users, 
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';

export default function AgenceDigitaleMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Agence Digitale Médico-Social DevEvoke',
    serviceType: 'Transformation numérique et conception logicielle médico-sociale',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
      logo: 'https://www.devevoke.com/icon.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perpignan',
        addressRegion: 'Occitanie',
        addressCountry: 'FR',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    description:
      'Conception de solutions numériques, logiciels métiers, applications mobiles et gestion de flotte pour les établissements médico-sociaux et associations gestionnaires.',
    audience: {
      '@type': 'Audience',
      audienceType: 'Directions d’établissements médico-sociaux, DSI, associations gestionnaires, IME, SESSAD, ESAT, EHPAD',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.devevoke.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Agence Digitale Médico-Social',
        item: 'https://www.devevoke.com/agence-digitale-medico-social',
      },
    ],
  };

  const etablissements = [
    {
      acronyme: 'IME',
      nom: 'Instituts Médico-Éducatifs',
      desc: 'Centralisation des dossiers éducatifs, gestion des transports quotidiens d’enfants et adolescents, coordination des équipes pluridisciplinaires et liaison sécurisée avec les familles.',
      link: '/solutions-medico-social/ime',
    },
    {
      acronyme: 'SESSAD',
      nom: 'Services d’Éducation Spéciale et de Soins à Domicile',
      desc: 'Gestion des tournées nomades, suivi des plannings d’interventions (école, domicile), dématérialisation des feuilles de route et optimisation du parc automobile partagé.',
      link: '/solutions-medico-social/sessad',
    },
    {
      acronyme: 'ESAT',
      nom: 'Établissements et Services d’Aide par le Travail',
      desc: 'Outils de gestion commerciale et d’atelier, suivi de la production, planification des activités et accompagnement du projet personnalisé des travailleurs handicapés.',
      link: '/solutions-medico-social/esat',
    },
    {
      acronyme: 'EHPAD',
      nom: 'Établissements pour Personnes Âgées Dépendantes',
      desc: 'Fluidification des transmissions soignantes, coordination du parcours de dépendance, portail de communication avec les proches et traçabilité des soins.',
      link: '/solutions-medico-social/ehpad',
    },
    {
      acronyme: 'MAS & FAM',
      nom: 'Maisons d’Accueil Spécialisées & Foyers d’Accueil Médicalisé',
      desc: 'Outils de suivi du projet de vie et du dossier de soins pour résidents en situation de grande dépendance, gestion des constantes et traçabilité des actes.',
      link: '/solutions-medico-social',
    },
    {
      acronyme: 'Associations',
      nom: 'Associations Gestionnaires Multi-Établissements',
      desc: 'Pilotage unifié du système d’information, consolidation des données administratives et budgétaires, gestion centralisée de flotte et gouvernance globale.',
      link: '/solutions-medico-social/associations',
    },
  ];

  const solutions = [
    {
      icon: <Layers className="size-6 text-primary-400" />,
      title: 'Logiciels Métiers & Applications Web',
      desc: 'Conception sur-mesure d’applications adaptées aux flux réels de vos structures : gestion administrative, suivi des usagers, transmission d’informations et tableaux de bord de direction.',
      href: '/developpement-logiciel-medico-social',
    },
    {
      icon: <Car className="size-6 text-secondary-400" />,
      title: 'Gestion de Flotte Automobile (Floticar)',
      desc: 'Solution SaaS dédiée aux associations médico-sociales pour réserver les véhicules partagés, dématérialiser les carnets kilométriques, anticiper les contrôles techniques et maîtriser les coûts de transport.',
      href: '/logiciel-gestion-vehicules-medico-social',
    },
    {
      icon: <Smartphone className="size-6 text-accent" />,
      title: 'Applications Mobiles & Tablettes Terrain',
      desc: 'Applications intuitives conçues pour les professionnels mobiles (éducateurs, soignants, chauffeurs). Mode hors-ligne, saisie rapide et ergonomie pensée pour le terrain.',
      href: '/solutions/application-mobile',
    },
    {
      icon: <Workflow className="size-6 text-emerald-400" />,
      title: 'Automatisation & Dématérialisation',
      desc: 'Réduction drastique des ressaisies manuelles, synchronisation des données entre logiciels existants et dématérialisation des formulaires d’admission ou de suivi.',
      href: '/solutions/automatisation',
    },
  ];

  const methodologie = [
    {
      step: '01',
      title: 'Immersion & Cadrage Métier',
      desc: 'Nous échangeons avec vos directions, chefs de service et équipes terrain pour comprendre vos contraintes réelles, vos réglementations et vos habitudes de travail.',
    },
    {
      step: '02',
      title: 'Conception Ergonomique (UX Soignants & Éducateurs)',
      desc: 'Prototypage d’interfaces épurées, accessibles et rassurantes. L’objectif est zéro charge mentale superflue pour les professionnels.',
    },
    {
      step: '03',
      title: 'Développement Sécurisé & Intégration',
      desc: 'Architecture logicielle robuste, intégration d’API avec vos logiciels en place, respect strict des normes de sécurité et chiffrement des flux.',
    },
    {
      step: '04',
      title: 'Déploiement, Formation & Support Continu',
      desc: 'Accompagnement au changement, formation personnalisée de vos équipes et support réactif basé en France avec maintenance évolutive.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="overflow-hidden pb-24">
        {/* Fil d'Ariane SEO */}
        <nav aria-label="Fil d'Ariane" className="pt-6 pb-2 text-sm text-muted">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li className="text-white font-medium">Agence Digitale Médico-Social</li>
          </ol>
        </nav>

        {/* HERO SECTION */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide uppercase">
              Partenaire Technologique des Acteurs du Médico-Social
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Agence digitale spécialisée dans le{' '}
            <span className="text-gradient drop-shadow-sm">secteur médico-social</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            <strong>DevEvoke</strong> est une agence numérique française qui conçoit des solutions logicielles, des applications web/mobiles et des outils SaaS sur-mesure pour les <strong>associations gestionnaires</strong> et les <strong>établissements médico-sociaux</strong> (IME, SESSAD, ESAT, EHPAD, MAS, FAM).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Demander un échange stratégique
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/solutions-medico-social" className="btn-outline w-full sm:w-auto text-base">
              Découvrir nos solutions médico-sociales
            </Link>
          </div>
        </header>

        {/* SECTION 1 : QUI EST DEVEVOKE & COMPRÉHENSION MÉTIER */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Expertise & Positionnement</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Comprendre les défis humains et opérationnels du médico-social
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Le secteur médico-social ne ressemble à aucun autre. Les contraintes budgétaires, la complexité des financements (ARS, Conseils Départementaux), la gestion des plannings pluridisciplinaires et la charge administrative pèsent quotidiennement sur les équipes soignantes et éducatives.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Chez <strong>DevEvoke</strong>, nous refusons les logiciels rigides inadaptés aux réalités du terrain. Notre démarche d’agence digitale consiste à co-construire des <strong>solutions numériques utiles</strong>, ergonomiques et conformes, capables de libérer du temps administratif au profit de l’accompagnement des personnes accueillies.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="glass p-5 rounded-2xl border border-white/5">
                    <HeartHandshake className="size-6 text-primary-400 mb-2" />
                    <h3 className="text-white font-semibold text-base mb-1">Centré sur l’humain</h3>
                    <p className="text-sm text-muted">Des interfaces pensées pour des utilisateurs aux profils variés sans jargon technologique.</p>
                  </div>
                  <div className="glass p-5 rounded-2xl border border-white/5">
                    <ShieldCheck className="size-6 text-secondary-400 mb-2" />
                    <h3 className="text-white font-semibold text-base mb-1">Réglementation & RGPD</h3>
                    <p className="text-sm text-muted">Protection absolue des données sensibles et hébergement souverain en France.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/about/about_field_immersion.jpg"
                    alt="Immersion DevEvoke au sein d'un établissement médico-social"
                    width={800}
                    height={460}
                    className="w-full h-[280px] sm:h-[320px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs uppercase tracking-widest text-primary-300 font-bold">Immersion terrain</span>
                    <p className="text-white text-sm font-medium">Observer le quotidien avant d’écrire la première ligne de code</p>
                  </div>
                </div>

                <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                    <Sparkles className="size-6 text-primary-400" />
                    Les problématiques concrètes que nous résolvons
                  </h3>
                  <ul className="space-y-3.5">
                    {[
                      'Dispersion des données et multiplication des fichiers Excel non sécurisés',
                      'Complexité de la gestion et du suivi des véhicules pour les tournées SESSAD et transports IME',
                      'Lourdeur de la transmission des informations entre éducateurs, soignants et directions',
                      'Difficulté de pilotage multi-établissements pour les associations gestionnaires',
                      'Besoin de conformité stricte au RGPD Santé et aux exigences de la CNIL',
                      'Outils historiques obsolètes, lents et non utilisables sur smartphone ou tablette',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted text-sm sm:text-base">
                        <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 : NOS SOLUTIONS NUMÉRIQUES MÉDICO-SOCIALES */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Catalogue d’Ingénierie</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-3 mb-6">
                Des solutions numériques adaptées aux organisations médico-sociales
              </h2>
              <p className="text-muted text-lg">
                Que vous ayez besoin d’un logiciel métier sur-mesure, d’une application mobile pour vos équipes nomades ou d’une plateforme SaaS de gestion de flotte, nous concevons des outils dimensionnés pour vos enjeux.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((sol, index) => (
                <div
                  key={index}
                  className="glass rounded-3xl p-8 sm:p-10 border border-white/5 hover:border-primary-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {sol.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{sol.title}</h3>
                    <p className="text-muted leading-relaxed mb-6">{sol.desc}</p>
                  </div>
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
                  >
                    En savoir plus sur cette solution
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* FOCUS FLOTICAR BANNER DÉCISIONNAIRE */}
            <div className="mt-12 glass-strong rounded-3xl p-8 sm:p-12 border border-secondary-500/30 bg-gradient-to-br from-surface to-[#0a192f] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-xs font-semibold uppercase tracking-wider">
                    Produit SaaS Développé par DevEvoke
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Floticar : La gestion de flotte automobile pensée pour les associations et établissements médico-sociaux
                  </h3>
                  <p className="text-muted leading-relaxed text-base">
                    Les IME, SESSAD et associations gèrent quotidiennement des dizaines de véhicules pour transporter des enfants, des adultes vulnérables ou réaliser des soins à domicile. Floticar centralise les réservations, assure le suivi kilométrique, planifie les contrôles techniques et automatise les alertes de maintenance.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <Link
                    href="/realisations/floticar"
                    className="btn-primary text-center justify-center text-sm"
                  >
                    Découvrir l'étude Floticar
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-outline text-center justify-center text-sm"
                  >
                    Demander une démo 14 jours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 : ÉTABLISSEMENTS ET ACTEURS ACCOMPAGNÉS */}
        <section className="py-20 border-t border-white/5 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Typologies de Structures</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
                Les établissements médico-sociaux que nous accompagnons
              </h2>
              <p className="text-muted text-lg">
                Chaque structure médico-sociale possède son cadre légal, ses protocoles d’accueil et son fonctionnement interne. Nous adaptons chaque solution aux spécificités de votre établissement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etablissements.map((etab, i) => (
                <div
                  key={i}
                  className="glass p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xl font-extrabold text-primary-400">
                        {etab.acronyme}
                      </span>
                      <Building2 className="size-5 text-gray-500" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{etab.nom}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">{etab.desc}</p>
                  </div>
                  <Link
                    href={etab.link}
                    className="text-xs font-semibold uppercase tracking-wider text-primary-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    Découvrir les solutions {etab.acronyme} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 : MÉTHODOLOGIE PROJET B2B */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Garantie Méthodologique</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
                Notre approche du numérique médico-social
              </h2>
              <p className="text-muted text-lg">
                La réussite d’un projet digital repose à 50% sur la qualité technologique et à 50% sur l’adhésion des équipes. Notre méthode garantit un accompagnement rigoureux de bout en bout.
              </p>
            </div>

            {/* BANDEAU CO-CONCEPTION PHOTOGRAPHIQUE */}
            <div className="mb-14 rounded-3xl overflow-hidden glass border border-white/10 relative group">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src="/images/home/workshop_coconception.jpg"
                  alt="Atelier collaboratif de co-conception avec les directeurs médico-sociaux"
                  width={1400}
                  height={600}
                  className="size-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12 max-w-2xl">
                  <span className="section-label mb-2 inline-block">Co-Design & Ergonomie</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Des ateliers d’immersion pour concevoir avec vos équipes
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    Nous ne concevons pas des logiciels depuis une tour d’ivoire. Nos designers s’assoient aux côtés de vos professionnels pour valider chaque écran en conditions réelles.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologie.map((m, idx) => (
                <div key={idx} className="relative glass p-6 sm:p-8 rounded-3xl border border-white/5">
                  <div className="text-4xl font-extrabold font-mono text-primary-500/30 mb-4">
                    {m.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 : SÉCURITÉ, HÉBERGEMENT SOUVERAIN & RGPD */}
        <section className="py-20 border-t border-white/5 bg-surface/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Protection des Données & Souveraineté</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Sécurité web, hébergement souverain et conformité RGPD
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Les organisations médico-sociales manipulent des flux d'informations administratives et opérationnelles qui exigent une vigilance stricte en matière de confidentialité et d'intégrité.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  DevEvoke applique les principes de <em>Privacy by Design</em> et de sécurité dès la conception sur l’ensemble de ses réalisations web et logicielles. Nous privilégions des infrastructures souveraines hébergées en France, assurant une conformité rigoureuse avec les recommandations de la CNIL et les standards actuels du web.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/securite-et-conformite" className="btn-primary text-sm">
                    Consulter nos engagements sécurité & RGPD
                  </Link>
                  <Link href="/contact" className="btn-outline text-sm">
                    Échanger avec un conseiller
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                <div className="glass p-6 rounded-2xl border border-white/5">
                  <Server className="size-8 text-primary-400 mb-3" />
                  <h3 className="text-white font-bold mb-2">Hébergement Souverain</h3>
                  <p className="text-xs text-muted leading-relaxed">Serveurs physiques situés en France, garantissant la localisation européenne de vos données.</p>
                </div>
                <div className="glass p-6 rounded-2xl border border-white/5">
                  <Lock className="size-8 text-secondary-400 mb-3" />
                  <h3 className="text-white font-bold mb-2">Chiffrement AES-256</h3>
                  <p className="text-xs text-muted leading-relaxed">Chiffrement de bout en bout des données au repos et en transit (tunnels TLS 1.3 stricts).</p>
                </div>
                <div className="glass p-6 rounded-2xl border border-white/5">
                  <FileText className="size-8 text-accent mb-3" />
                  <h3 className="text-white font-bold mb-2">Traçabilité & Logs</h3>
                  <p className="text-xs text-muted leading-relaxed">Journalisation inaltérable des accès et des actions conformément aux exigences légales.</p>
                </div>
                <div className="glass p-6 rounded-2xl border border-white/5">
                  <Clock className="size-8 text-emerald-400 mb-3" />
                  <h3 className="text-white font-bold mb-2">PRA & Haute Disponibilité</h3>
                  <p className="text-xs text-muted leading-relaxed">Plans de reprise d'activité garantissant la continuité des services en cas d'incident.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 : CALL TO ACTION B2B */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-16 rounded-3xl text-center border border-primary-500/30 shadow-[0_0_60px_rgba(59,130,246,0.2)] relative z-10">
            <span className="section-label mb-4 inline-block">Parlons de votre projet</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Vous représentez une association ou un établissement médico-social ?
            </h2>
            <p className="text-muted text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Échangeons sur vos besoins d’informatisation, vos outils de gestion de flotte ou vos projets d’applications métiers sur-mesure. Nos consultants et architectes logiciels sont à votre disposition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Demander un rendez-vous avec un expert
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/tarifs" className="btn-outline text-base">
                Découvrir nos modalités d'accompagnement
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
