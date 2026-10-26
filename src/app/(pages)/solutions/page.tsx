import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe,
  Layout,
  Smartphone,
  Cpu,
  Cloud,
  Workflow,
  Wrench,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building2,
  Lock,
  Layers,
  Server,
  Zap,
} from 'lucide-react';

export default function SolutionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques sur-mesure pour le Médico-Social',
    serviceType: 'Développement de solutions numériques médico-sociales',
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
      'Gamme complète de solutions numériques conçues par DevEvoke pour les acteurs médico-sociaux : sites web, applications web, applications mobiles, logiciels métiers, SaaS et automatisation.',
  };

  const solutionPillars = [
    {
      id: 'site-web',
      icon: <Globe className="size-7 text-primary-400" />,
      title: 'Sites Internet & Portails Accessibles',
      badge: 'Présence Institutionnelle & RGAA',
      desc: 'Création et refonte de sites web conformes aux normes d’accessibilité numérique (RGAA). Présentation de vos pôles, information des familles, démarches en ligne et attractivité RH.',
      targets: ['IME', 'ESAT', 'EHPAD', 'Associations gestionnaires'],
      href: '/solutions/site-web',
      features: ['Accessibilité RGAA', 'Portail familles & usagers', 'Espace recrutement intégré', 'Hébergement souverain France'],
    },
    {
      id: 'application-web',
      icon: <Layout className="size-7 text-secondary-400" />,
      title: 'Applications Web & Espaces Métier',
      badge: 'Coordination & Portails Sécurisés',
      desc: 'Plateformes web sécurisées accessibles via navigateur pour coordonner les équipes pluridisciplinaires, partager les plannings et fluidifier les transmissions administratives.',
      targets: ['Équipes éducatives', 'Directions de pôle', 'Secrétariat médico-social'],
      href: '/solutions/application-web',
      features: ['Tableaux de bord temps réel', 'Gestion des droits (RBAC)', 'Liaison sécurisée équipes', 'Architecture responsive web'],
    },
    {
      id: 'application-mobile',
      icon: <Smartphone className="size-7 text-accent" />,
      title: 'Applications Mobiles & Outils Nomades',
      badge: 'Mobilité & Mode Hors-Ligne',
      desc: 'Applications tactiles (smartphones et tablettes) développées spécifiquement pour les professionnels en déplacement régulier (SESSAD, SAVS, SAMSAH). Prise de notes et plannings sans réseau.',
      targets: ['SESSAD', 'SAVS', 'SAMSAH', 'Éducateurs & soignants itinérants'],
      href: '/solutions/application-mobile',
      features: ['Fonctionnement 100% hors-ligne', 'Synchronisation automatique', 'Comptes-rendus en 3 clics', 'Navigation intuitive tactile'],
    },
    {
      id: 'logiciel-metier',
      icon: <Cpu className="size-7 text-primary-400" />,
      title: 'Logiciels Métier Sur-Mesure',
      badge: 'Fin des Tableurs Excel Dispersés',
      desc: 'Développement d’outils sur-mesure calqués sur vos protocoles internes. Centralisez vos données d’activité, organisez vos circuits de validation et dites adieu aux fichiers Excel fragmentés.',
      targets: ['Directeurs d’établissement', 'Responsables administratifs', 'DSI'],
      href: '/solutions/logiciel-metier',
      features: ['Modélisation sur vos processus', 'Circuits de validation internes', 'Rapports d’activité instantanés', 'Zéro dépendance logicielle rigide'],
    },
    {
      id: 'saas-sur-mesure',
      icon: <Cloud className="size-7 text-secondary-400" />,
      title: 'Plateformes SaaS & Multi-Établissements',
      badge: 'Mutualisation & Centralisation',
      desc: 'Conception de solutions SaaS modulaires pour associations gestionnaires pilotant plusieurs sites. À l’image de Floticar (gestion de flotte), nous créons des outils centralisés et évolutifs.',
      targets: ['Associations multi-sites', 'Sièges administratifs', 'Directeurs généraux'],
      href: '/solutions/saas-sur-mesure',
      features: ['Architecture multi-établissements', 'Consolidation des indicateurs', 'Évolutivité cloud souverain', 'Mises à jour sans friction'],
    },
    {
      id: 'automatisation',
      icon: <Workflow className="size-7 text-accent" />,
      title: 'Automatisation & Dématérialisation',
      badge: 'Gain de Temps Administratif',
      desc: 'Suppression des doubles saisies papier, synchronisation entre systèmes disparates et génération automatisée des reportings périodiques et bilans d’activité.',
      targets: ['Secrétariats', 'Services comptables & RH', 'Directions opérationnelles'],
      href: '/solutions/automatisation',
      features: ['Élimination des doubles saisies', 'Connecteurs API sécurisés', 'Génération automatique de PDF', 'Alertes & rappels programmés'],
    },
    {
      id: 'outils-metier',
      icon: <Wrench className="size-7 text-primary-400" />,
      title: 'Outils Internes & Modules Spécifiques',
      badge: 'Logistique & Services Généraux',
      desc: 'Création d’outils pratiques et ciblés pour vos services supports : gestion des stocks, suivi des interventions techniques, plannings de salles et formulaires internes.',
      targets: ['Services généraux', 'Maintenance & logistique', 'Responsables de site'],
      href: '/solutions/outils-metier',
      features: ['Outils légers et rapides', 'Suivi du matériel et des locaux', 'Formulaires de signalement', 'Prise en main en 10 minutes'],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-950 text-white selection:bg-primary-500/30 selection:text-primary-200">
        {/* Header Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 border-b border-white/5">
          <div className="absolute inset-0 bg-radial from-primary-900/20 via-neutral-950/80 to-neutral-950 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs sm:text-sm font-medium mb-6">
                <Sparkles className="size-4" />
                <span>Ingénierie & Transformation Numérique</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Solutions numériques adaptées aux{' '}
                <span className="text-highlight">
                  besoins du médico-social
                </span>
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                DevEvoke n’impose pas un logiciel unique rigide. Nous analysons vos contraintes opérationnelles pour concevoir la réponse numérique sur-mesure adaptée à votre structure : site accessible, application nomade, outil métier ou plateforme SaaS.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
                >
                  <span>Échanger sur votre projet</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/secteurs/medico-social"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all"
                >
                  Comprendre notre approche sectorielle
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Solutions Pillars Grid */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre éventail de solutions numériques
            </h2>
            <p className="text-neutral-400">
              Chaque établissement a des priorités différentes. Découvrez nos piliers d’intervention conçus pour répondre à chaque étape de votre modernisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionPillars.map((sol) => (
              <div
                key={sol.id}
                className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 p-7 hover:border-primary-500/40 hover:bg-neutral-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {sol.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {sol.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="size-3.5 text-primary-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 mb-6">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-2">
                      Idéal pour :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sol.targets.map((tgt, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400"
                        >
                          {tgt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href={sol.href}
                  className="mt-2 w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-primary-500/20 hover:text-primary-300 border border-white/10 hover:border-primary-500/30 text-white text-xs font-medium transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>Découvrir cette solution</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Focus Etude de cas Floticar */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-300 text-xs font-medium">
                  <Layers className="size-3.5" />
                  <span>Exemple de Réalisation Interne</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Floticar : un SaaS métier né d’un besoin médico-social concret
                </h2>
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                  Pour répondre aux problèmes récurrents de gestion de parc automobile dans les IME, SESSAD et associations gestionnaires (carnets papier égarés, amendes non imputables, oublis de contrôle technique), DevEvoke a développé <strong className="text-white">Floticar</strong>.
                </p>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Accessible directement par smartphone via QR code sans aucune installation requise, cette application illustre notre savoir-faire en ingénierie logicielle sur-mesure pour le médico-social.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/realisations/floticar"
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
                  >
                    <span>Consulter l’étude de cas Floticar</span>
                    <ArrowRight className="size-4 text-primary-400" />
                  </Link>
                  <Link
                    href="/realisations"
                    className="px-5 py-2.5 rounded-xl bg-transparent hover:bg-white/5 text-neutral-400 hover:text-white font-medium text-xs sm:text-sm transition-all"
                  >
                    Voir l’ensemble des réalisations
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
                  <Image
                    src="/images/home/floticar_real_action.jpg"
                    alt="Conducteur scannant le QR code sur le minibus associatif"
                    width={600}
                    height={420}
                    className="w-full h-[320px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-neutral-900/85 border border-white/10 rounded-xl p-3 text-xs">
                    <span className="font-bold text-white block">Preuve d&apos;ingénierie concrète</span>
                    <span className="text-[11px] text-neutral-300">
                      100% des trajets tracés sans application à télécharger.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology & Guarantees */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre méthode d’accompagnement
            </h2>
            <p className="text-neutral-400">
              Les structures médico-sociales ont besoin d’écoute, de pragmatisme et de garanties fortes. Voici nos engagements techniques et déontologiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-primary-500/10 text-primary-400">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Conformité RGPD & Hébergement Français</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Toutes nos solutions sont hébergées sur des serveurs souverains sécurisés en France (OVHcloud, Scaleway) respectant strictement les préconisations de la CNIL et les obligations RGPD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-secondary-500/10 text-secondary-400">
                <Lock className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Périmètre Transparent & Sécurisé</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                DevEvoke intervient sur les outils opérationnels, administratifs, logistiques et de communication. Nous n’hébergeons pas de dossiers médicaux cliniques (DPI) et clarifions précisément nos périmètres techniques.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-3">
              <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                <Zap className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Adoption & Ergonomie Épurée</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Un outil n’est utile que s’il est adopté. Nous concevons des interfaces épurées, accessibles et contrastées, validées lors d’ateliers avec vos professionnels de terrain.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Vous avez un projet numérique pour votre structure ?
            </h2>
            <p className="text-neutral-400 text-base max-w-2xl mx-auto">
              Que vous ayez besoin d’un nouveau site web, d’une application nomade pour vos éducateurs ou d’un logiciel métier pour centraliser vos processus, parlons-en lors d’un échange sans engagement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
              >
                <span>Parler de votre projet</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/diagnostic-numerique"
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                Faire un diagnostic numérique gratuit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
