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
  CheckCircle2,
  ArrowRight,
  Server,
  Users,
  FileText,
  Clock,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

export default function SecteurMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour le Secteur Médico-Social',
    serviceType: 'Transformation numérique et ingénierie logicielle médico-sociale',
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
      'Accompagnement des acteurs médico-sociaux dans la conception de solutions numériques sur-mesure : sites web, applications mobiles, logiciels métiers et automatisation.',
  };

  const structures = [
    {
      sigle: 'IME',
      nom: 'Instituts Médico-Éducatifs',
      desc: 'Gestion des admissions, suivi des projets personnalisés de scolarisation, communication sécurisée avec les familles et coordination pluridisciplinaire.',
      link: '/solutions-medico-social/ime',
    },
    {
      sigle: 'SESSAD',
      nom: 'Services d’Éducation Spéciale et de Soins à Domicile',
      desc: 'Outils mobiles pour équipes nomades, gestion des plannings de tournée, comptes-rendus d’interventions en milieu scolaire ou à domicile.',
      link: '/solutions-medico-social/sessad',
    },
    {
      sigle: 'ESAT',
      nom: 'Établissements et Services d’Aide par le Travail',
      desc: 'Suivi de la production en atelier, gestion commerciale et devis, fiches d’activités adaptées aux travailleurs en situation de handicap.',
      link: '/solutions-medico-social/esat',
    },
    {
      sigle: 'EHPAD',
      nom: 'Établissements d’Hébergement pour Personnes Âgées Dépendantes',
      desc: 'Transmissions ciblées, portails familles rassurants, allègement de la charge administrative des équipes soignantes et éducatives.',
      link: '/solutions-medico-social/ehpad',
    },
    {
      sigle: 'FAM / MAS',
      nom: 'Foyers d’Accueil Médicalisé & Maisons d’Accueil Spécialisées',
      desc: 'Coordination du quotidien, suivi du projet de vie, gestion des plannings d’astreinte et traçabilité des actes d’accompagnement.',
      link: '/contact',
    },
    {
      sigle: 'Associations',
      nom: 'Associations Gestionnaires Multi-Établissements',
      desc: 'Centralisation des données administratives, gouvernance du système d’information, consolidation multi-sites et pilotage de direction.',
      link: '/solutions-medico-social/associations',
    },
  ];

  const solutions = [
    {
      title: 'Logiciels Métiers Sur-Mesure',
      desc: 'Développement d’outils informatiques calqués sur vos protocoles internes pour centraliser les données sans rigidité commerciale.',
      link: '/solutions/logiciel-metier',
      icon: <Cpu className="size-6 text-primary-400" />,
    },
    {
      title: 'Applications Mobiles & Tablettes',
      desc: 'Applications tactiles pensées pour le terrain avec fonctionnement hors-ligne pour les éducateurs et soignants en déplacement.',
      link: '/solutions/application-mobile',
      icon: <Smartphone className="size-6 text-secondary-400" />,
    },
    {
      title: 'Sites Web Accessibles & Portails',
      desc: 'Création de vitrines institutionnelles conformes aux normes d’accessibilité numérique (RGAA) valorisant vos structures.',
      link: '/solutions/site-web',
      icon: <Layers className="size-6 text-accent" />,
    },
    {
      title: 'Automatisation & Dématérialisation',
      desc: 'Élimination des doubles saisies papier, synchronisation des données et génération automatique de reportings d’activité.',
      link: '/solutions/automatisation',
      icon: <Clock className="size-6 text-emerald-400" />,
    },
    {
      title: 'Plateformes SaaS & Portails Multi-Sites',
      desc: 'Conception d’outils en ligne mutualisés pour plusieurs établissements, facilitant le travail collaboratif à l’échelle d’un pôle.',
      link: '/solutions/saas-sur-mesure',
      icon: <Server className="size-6 text-primary-400" />,
    },
    {
      title: 'Outils Internes & Tableaux de Bord',
      desc: 'Tableaux de bord de direction pour visualiser les indicateurs clés et piloter les moyens généraux en toute clarté.',
      link: '/solutions/outils-metier',
      icon: <FileText className="size-6 text-secondary-400" />,
    },
  ];

  const methodologie = [
    {
      step: '01',
      title: 'Immersion & Analyse des Besoins',
      desc: 'Nous échangeons avec vos directions, soignants et éducateurs pour comprendre le réel fonctionnement de terrain avant de concevoir la moindre ligne de code.',
    },
    {
      step: '02',
      title: 'Co-conception & Ergonomie Intuitive',
      desc: 'Création de maquettes épurées et testées auprès des professionnels. L’outil doit être immédiatement compréhensible, sans nécessiter des semaines de formation.',
    },
    {
      step: '03',
      title: 'Développement Robuste & Sécurisé',
      desc: 'Ingénierie web moderne (Next.js, TypeScript, PostgreSQL), hébergement souverain en France et stricte conformité aux exigences du RGPD.',
    },
    {
      step: '04',
      title: 'Déploiement & Accompagnement',
      desc: 'Mise en production progressive, formation bienveillante des équipes et maintenance continue pour faire évoluer la solution dans le temps.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="size-3.5" />
                <span>Secteur Médico-Social & Associatif</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Solutions numériques et transformation digitale pour le{' '}
                <span className="text-highlight">
                  médico-social
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed font-light mb-8">
                DevEvoke accompagne les associations gestionnaires et établissements d’accueil dans la modernisation de leurs pratiques. Nous concevons des outils numériques simples, sécurisés et respectueux du temps consacré aux personnes accompagnées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base">
                  Parler de votre projet
                  <ArrowRight className="size-4" />
                </Link>
                <Link href="/solutions" className="btn-outline text-base">
                  Explorer nos solutions
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Photo */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900">
                <Image
                  src="/images/home/hero_medicosocial_team.jpg"
                  alt="Équipe de coordination médico-sociale utilisant une solution numérique DevEvoke"
                  width={600}
                  height={500}
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-neutral-900/85 border border-white/10 rounded-2xl p-4">
                  <span className="text-xs font-bold text-white block">Au plus près des équipes</span>
                  <p className="text-[11px] text-neutral-300">
                    Des outils ergonomiques conçus pour alléger la charge mentale des professionnels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENJEUX DU SECTEUR */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Comprendre Vos Réalités</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              Les défis numériques des organisations médico-sociales
            </h2>
            <p className="text-muted text-base sm:text-lg">
              La transformation digitale ne doit pas être un fardeau administratif supplémentaire pour vos collaborateurs, mais un levier de sérénité au service de l’humain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl border border-white/5">
              <div className="size-12 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center mb-6">
                <Clock className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Alléger la charge administrative</h3>
              <p className="text-sm text-muted leading-relaxed">
                Les éducateurs et soignants passent trop d’heures à ressaisir des informations sur papier ou sur des tableurs disparates. Nos solutions automatisent les flux répétitifs pour redonner du temps utile au contact direct des personnes.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/5">
              <div className="size-12 rounded-xl bg-secondary-500/10 text-secondary-400 flex items-center justify-center mb-6">
                <Users className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Faciliter l’adhésion des équipes</h3>
              <p className="text-sm text-muted leading-relaxed">
                Le principal risque d’un projet informatique est le rejet par les professionnels de terrain. Nous concevons des interfaces épurées, intuitives et adaptées aux usages concrets pour garantir une adoption naturelle dès les premières minutes.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/5">
              <div className="size-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Garantir la conformité RGPD</h3>
              <p className="text-sm text-muted leading-relaxed">
                Les données administratives et organisationnelles exigent une protection stricte. Toutes nos réalisations reposent sur un hébergement souverain en France, un chiffrement moderne et des règles strictes de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURES ACCOMPAGNÉES */}
      <section className="py-20 border-b border-white/5 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Typologies d’Établissements</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              Des réponses adaptées à chaque structure
            </h2>
            <p className="text-muted text-base">
              Chaque établissement possède ses spécificités de fonctionnement. Nous adaptons l’ingénierie numérique à vos contraintes organisationnelles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {structures.map((s, i) => (
              <div key={i} className="glass p-7 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all">
                <div>
                  <div className="inline-block px-3 py-1 rounded-md bg-white/5 text-primary-400 font-mono text-xs font-bold mb-3">
                    {s.sigle}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.nom}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">{s.desc}</p>
                </div>
                <Link href={s.link} className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-medium">
                  <span>En savoir plus</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS NUMÉRIQUES POSSIBLES */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">L’Éventail de nos Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              Ce que DevEvoke peut concevoir pour vous
            </h2>
            <p className="text-muted text-base">
              Nous ne sommes pas prisonniers d’un produit unique : nous concevons l’outil qui répond précisément à votre cahier des charges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <div key={i} className="glass p-7 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all">
                <div>
                  <div className="mb-4">{sol.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">{sol.desc}</p>
                </div>
                <Link href={sol.link} className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-medium">
                  <span>Découvrir la solution</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPLE CONCRET : FLOTICAR PARMI NOS RÉALISATIONS */}
      <section className="py-20 border-b border-white/5 bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl border border-primary-500/20 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold uppercase tracking-wide">
                  Exemple concret de réalisation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Floticar : La gestion de flotte automobile pensée pour le médico-social
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  Pour illustrer notre capacité à concevoir des solutions adaptées aux contraintes des associations gestionnaires, IME et SESSAD, découvrez <strong>Floticar</strong> : un carnet de bord dématérialisé par QR code, suivi des contrôles techniques et traçabilité des anomalies.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link href="/realisations/floticar" className="btn-primary text-sm">
                    Consulter l’étude de cas Floticar
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link href="/realisations" className="btn-outline text-sm">
                    Voir toutes nos réalisations
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
                  <Image
                    src="/images/home/floticar_real_action.jpg"
                    alt="Conducteur scannant le QR code sur le minibus associatif avec Floticar"
                    width={500}
                    height={350}
                    className="w-full h-[260px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs flex justify-between items-center text-neutral-300">
                    <span className="font-semibold text-white">Application PWA par QR code</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                      Opérationnel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODOLOGIE DEVEVOKE */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Méthodologie Agence</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4">
              Comment DevEvoke conduit votre projet
            </h2>
            <p className="text-muted text-base">
              Une démarche itérative centrée sur la réalité des professionnels et la pérennité technique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologie.map((m, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/5 relative">
                <span className="text-4xl font-black text-white/10 block mb-3 font-mono">{m.step}</span>
                <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Vous avez un projet numérique pour votre structure ?
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Qu’il s’agisse de créer un nouveau site internet, de concevoir un logiciel métier ou d’automatiser une procédure complexe, échangeons sur vos attentes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base">
              Parler de votre projet
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/diagnostic-numerique" className="btn-outline text-base">
              Réaliser un diagnostic en ligne
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
