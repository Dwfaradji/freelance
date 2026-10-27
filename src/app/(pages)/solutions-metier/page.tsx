import React from 'react';
import Link from 'next/link';
import {
  Cpu,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  HelpCircle,
  Clock,
  Building2,
  FileSpreadsheet,
  Check,
  Lock,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';

export default function SolutionsMetierPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Conception de Logiciels Métier Sur-Mesure & Outils Internes',
    serviceType: 'Développement de logiciels de gestion et portails internes sur-mesure',
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
      'Développement de logiciels métier sur-mesure pour PME, organisations et associations par DevEvoke. Remplacement de tableurs Excel, centralisation de processus et tableaux de bord de pilotage.',
  };

  const painPoints = [
    {
      title: 'L’enfer des tableurs Excel fragmentés et écrasés',
      desc: 'Des versions « planning_final_v3_revu.xlsx » qui circulent par e-mail, des formules cassées sans avertissement et des pertes de données irréversibles dès qu’un fichier est écrasé par inadvertance.',
    },
    {
      title: 'Des progiciels génériques inadaptés à votre réalité',
      desc: 'Les solutions du marché vous forcent à plier votre organisation à leurs contraintes techniques, vous facturent des licences exorbitantes pour des dizaines de fonctionnalités dont vous n’avez aucun usage.',
    },
    {
      title: 'Aucune visibilité consolidée pour la direction',
      desc: 'Passer des journées entières en fin de mois à consolider manuellement des données éparpillées entre plusieurs services avant de pouvoir éditer le moindre rapport d’activité fiable.',
    },
    {
      title: 'Risque réglementaire et failles de confidentialité',
      desc: 'Des données sensibles stockées sur des disques locaux ou des clés USB sans traçabilité des modifications, rendant impossible tout audit de conformité RGPD rigoureux.',
    },
  ];

  const pillars = [
    {
      icon: Cpu,
      title: 'Outils Calqués sur Vos Règles Métier Réelles',
      badge: 'Zéro Compromis',
      desc: 'Aucune fonctionnalité superflue : le logiciel est bâti sur votre vocabulaire interne, vos formulaires de saisie réels et la logique exacte de vos équipes opérationnelles.',
      features: ['Formulaires de saisie guidés & sécurisés', 'Champs et statuts personnalisés', 'Contrôles de cohérence automatiques', 'Interface épurée et intuitive'],
    },
    {
      icon: Layers,
      title: 'Tableaux de Bord & Pilotage Centralisé',
      badge: 'Décisionnel Temps Réel',
      desc: 'Offrez à vos directions et managers une vue d’ensemble instantanée : état d’avancement des dossiers, alertes sur les échéances critiques et graphiques décisionnels en un clic.',
      features: ['Indicateurs clés (KPI) en direct', 'Filtres multicritères instantanés', 'Exports personnalisés PDF & Excel', 'Suivi multi-établissements ou multi-pôles'],
    },
    {
      icon: ShieldCheck,
      title: 'Circuits de Validation & Droits Granulaires',
      badge: 'Gouvernance & Sécurité',
      desc: 'Structurez les flux de travail internes avec des étapes d’approbation claires. Chaque collaborateur accède uniquement aux données strictement nécessaires à sa mission (RBAC).',
      features: ['Gestion des rôles (admin, manager, intervenant)', 'Historique d’audit horodaté de chaque action', 'Notifications automatiques par e-mail / push', 'Signatures électroniques intégrées'],
    },
    {
      icon: Lock,
      title: 'Hébergement Souverain & Sécurité des Données',
      badge: 'Pérennité & Sérénité',
      desc: 'Déployé sur des serveurs sécurisés en France, votre logiciel métier bénéficie de sauvegardes quotidiennes redondées et d’une conformité exemplaire au RGPD.',
      features: ['Serveurs certifiés ISO 27001 en France', 'Chiffrement des données au repos et en transit', 'Sauvegardes quotidiennes externalisées', 'Cession complète de la propriété du code'],
    },
  ];

  const faqs = [
    {
      q: 'Combien coûte un logiciel métier sur-mesure par rapport à un abonnement progiciel ?',
      a: 'Un progiciel générique coûte souvent très cher sur 3 à 5 ans en raison des licences par utilisateur, des coûts d’intégration et des modules additionnels. Un logiciel sur-mesure DevEvoke représente un investissement forfaitaire maîtrisé, sans redevance par utilisateur et avec un code dont vous êtes 100% propriétaire.',
    },
    {
      q: 'Comment s’assurer que les équipes adopteront le nouvel outil ?',
      a: 'L’adoption est garantie par notre démarche d’immersion : le logiciel est co-conçu dès le départ avec vos utilisateurs de terrain. Les écrans sont simplifiés, sans jargon informatique, et les actions courantes s’effectuent en 2 à 3 clics maximum.',
    },
    {
      q: 'Peut-on récupérer l’historique de nos anciens fichiers Excel ?',
      a: 'Absolument. Nous prenons en charge la migration, le nettoyage et l’importation sécurisée de toutes vos données historiques existantes vers votre nouvelle base de données relationnelle.',
    },
    {
      q: 'L’outil peut-il évoluer avec le développement de notre structure ?',
      a: 'Oui, c’est le grand atout d’un développement sur-mesure sous Next.js et PostgreSQL : l’architecture modulaire permet d’ajouter de nouvelles fonctionnalités, de nouveaux flux ou de nouveaux services au fur et à mesure de votre croissance.',
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
            { label: 'Logiciels Métier Sur-Mesure' },
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
                <Cpu className="size-3.5" />
                <span>Outils Internes & Dématérialisation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Logiciels métier sur-mesure & outils{' '}
                <span className="text-highlight">internes d’organisation</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Remplacez définitivement vos fichiers Excel fragmentés et vos progiciels rigides par un outil centralisé, ergonomique et calqué au millimètre sur vos processus réels.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl shadow-primary-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Parler de votre besoin métier</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/diagnostic-numerique"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all text-center"
                >
                  Faire le diagnostic gratuit
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Fin des tableurs Excel dispersés
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Accès multi-utilisateurs sécurisé
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Code 100% propriétaire
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Problématiques Excel & ERP */}
        <section className="py-20 lg:py-24 border-b border-white/5 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <AlertTriangle className="size-3.5 text-amber-400" />
                Dysfonctionnements Quotidiens
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Quand le bricolage d’outils freine votre productivité
              </h2>
              <p className="text-neutral-400 text-base">
                Les tableurs et solutions de fortune finissent toujours par coûter plus cher en temps perdu et en erreurs qu’un logiciel dédié.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="card-modern p-8 space-y-3 border-l-4 border-l-rose-500/60"
                >
                  <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
                    <FileSpreadsheet className="size-4" />
                    <span>Constat n°0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Piliers Logiciels Métier */}
        <section className="py-20 lg:py-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <Sparkles className="size-3.5" />
                Nos Atouts d’Ingénierie
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Un outil taillé sur-mesure pour votre organisation
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                Faites gagner un temps précieux à vos équipes en automatisant leurs tâches quotidiennes et en centralisant toutes leurs informations.
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
          </div>
        </section>

        {/* Section Pourquoi DevEvoke & Local SEO */}
        <section className="py-20 bg-neutral-900/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="section-label">
                  <ShieldCheck className="size-3.5" />
                  Immersion & Proximité Métier
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Comprendre vos contraintes avant de concevoir la première brique
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  Un bon logiciel métier ne s’invente pas dans une tour d’ivoire. Boucif Faradji s’immerge dans vos flux de travail, interviewe vos responsables et modélise les données pour que l’outil devienne une évidence pour tous dès le premier jour.
                </p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Interlocuteur unique :</strong> dialogue direct avec le développeur full-stack qui code personnellement votre solution.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Proximité en Occitanie :</strong> basé à Perpignan, déplacement sur site pour les ateliers d’immersion dans les Pyrénées-Orientales et en région.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Zéro licence récurrente par utilisateur :</strong> votre logiciel n’augmente pas de prix lorsque votre équipe s’agrandit.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 card-modern p-8 space-y-6 bg-neutral-950/80 border-primary-500/20">
                <h3 className="text-xl font-bold text-white">Exemples de Logiciels Métiers Conçus</h3>
                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Gestion Logistique & Flotte</strong>
                    <span>Attribution de matériel, suivi des plannings de véhicules, alertes d’entretien et relevés kilométriques.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Coordination & Suivi d’Activité</strong>
                    <span>Dossiers usagers/clients, plannings d’interventions pluridisciplinaires et génération des bilans d’activité.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Circuits d’Achats & Devis Internes</strong>
                    <span>Demandes d’achats internes, circuits d’approbation budgétaire à double niveau et export comptable.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Étudier la faisabilité de votre logiciel</span>
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
              <h2 className="text-3xl font-bold text-white">Questions fréquentes sur les logiciels métier</h2>
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
              Prêt à simplifier vos processus d’organisation ?
            </h2>
            <p className="text-base text-neutral-300 max-w-2xl mx-auto">
              Échangeons pendant 30 minutes avec Boucif Faradji pour auditer vos outils actuels et esquisser l’architecture de votre futur logiciel sur-mesure.
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
                href="/automatisation"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all"
              >
                Découvrir l&apos;automatisation des processus
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
