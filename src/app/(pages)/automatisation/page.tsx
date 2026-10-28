import React from 'react';
import Link from 'next/link';
import {
  Workflow,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Clock,
  FileCheck2,
  Bell,
  RefreshCw,
  Lock,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';

export default function AutomatisationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatisation des Processus Métier & Synchronisation de Données',
    serviceType: 'Automatisation des flux administratifs et intégration d’API',
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
      'Automatisation de processus métier, suppression des doubles saisies et synchronisation API par DevEvoke. Génération automatique de bilans d’activité et workflows sécurisés.',
  };

  const painPoints = [
    {
      title: 'La double et triple saisie manuelle des mêmes informations',
      desc: 'Saisir le même contact ou la même intervention dans un tableur, puis dans un logiciel de facturation et enfin dans un compte-rendu papier : des heures gaspillées chaque semaine.',
    },
    {
      title: 'Des erreurs de recopie inévitables et coûteuses',
      desc: 'Une faute de frappe dans un numéro de facture, un montant erroné ou une date décalée provoquent des litiges clients, des rejets bancaires ou des non-conformités d’audit.',
    },
    {
      title: 'Lenteur de génération des rapports périodiques',
      desc: 'Passer plusieurs jours en fin de mois ou de trimestre à agréger des données à la main pour produire les bilans d’activité réclamés par la direction ou les autorités.',
    },
    {
      title: 'Oublis d’échéances et de relances administratives',
      desc: 'Faute d’alertes automatisées, des échéances de contrôles techniques, de renouvellements contractuels ou de relances d’impayés passent inaperçues.',
    },
  ];

  const pillars = [
    {
      icon: RefreshCw,
      title: 'Connecteurs API & Passerelles Inter-Outils',
      badge: 'Zéro Ressaisie',
      desc: 'Nous créons des ponts logiciels sécurisés entre vos outils existants (CRM, ERP, messagerie, Google Workspace, outils métiers) pour synchroniser vos données en temps réel sans intervention humaine.',
      features: ['Synchronisation automatique bidirectionnelle', 'Élimination des transferts de fichiers manuels', 'Historique des échanges et gestion des erreurs', 'Sécurité par clés d’API chiffrées'],
    },
    {
      icon: FileCheck2,
      title: 'Génération Automatique de Documents & PDF',
      badge: 'Gain de Temps Administratif',
      desc: 'Créez en un clic des bilans d’activité, contrats, feuilles de route ou factures pré-remplis à partir de vos données en base, prêts à être envoyés ou signés électroniquement.',
      features: ['Mise en page PDF fidèle à votre charte', 'Remplissage instantané multi-sources', 'Envoi automatique par e-mail sécurisé', 'Archivage horodaté conforme RGPD'],
    },
    {
      icon: Bell,
      title: 'Déclencheurs & Alertes Intelligentes',
      badge: 'Anticipation Active',
      desc: 'Configurez des règles métier automatiques : alertes par e-mail ou SMS avant l’expiration d’un délai critique, rappels automatiques pour les relances et notifications d’anomalies.',
      features: ['Surveillance permanente des échéances', 'Alertes paramétrables par profil ou service', 'Relances automatiques graduées', 'Rapports d’anomalies quotidiens'],
    },
    {
      icon: Lock,
      title: 'Workflows Sécurisés & Audit Trail',
      badge: 'Conformité & Contrôle',
      desc: 'Toutes les automatisations sont journalisées de manière transparente. Vous gardez la main sur les circuits d’approbation et conservez une traçabilité totale pour vos audits.',
      features: ['Validation humaine requise sur seuils critiques', 'Journal d’exécution accessible en temps réel', 'Hébergement sécurisé des scripts en France', 'Conformité stricte au RGPD'],
    },
  ];

  const faqs = [
    {
      q: 'Quels types d’outils pouvez-vous interconnecter ?',
      a: 'Nous pouvons connecter quasiment tous les outils disposant d’une API (Stripe, HubSpot, Notion, Airtable, Google Workspace, logiciels comptables, ERP) ainsi que vos bases de données propriétaires (PostgreSQL, MySQL, SQL Server) ou vos serveurs de fichiers sécurisés (SFTP).',
    },
    {
      q: 'Quelle est la différence entre un script d’automatisation DevEvoke et Zapier / Make ?',
      a: 'Zapier ou Make sont utiles pour des automatisations très simples, mais deviennent vite coûteux, lents et rigides dès qu’il s’agit de traiter des volumes importants ou des règles de calcul complexes. Nos automatisations sur-mesure tournent directement sur votre infrastructure, sans surcoût par tâche et avec une fiabilité maximale.',
    },
    {
      q: 'Comment s’assurer qu’une automatisation ne crée pas d’erreurs de données ?',
      a: 'Chaque workflow inclut des contrôles de cohérence stricts avant toute écriture en base. En cas d’incohérence ou d’anomalie, le système bloque la transaction, prévient le gestionnaire par e-mail et consigne l’incident dans un journal d’audit.',
    },
    {
      q: 'Quel retour sur investissement attendre d’un projet d’automatisation ?',
      a: 'L’automatisation des tâches répétitives génère souvent un retour sur investissement dès le premier trimestre : en supprimant ne serait-ce que 4 à 8 heures de saisie par semaine pour un collaborateur, le gain en confort de travail et en productivité est immédiat.',
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
            { label: 'Automatisation des Processus' },
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
                <Workflow className="size-3.5" />
                <span>Productivité & Dématérialisation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Automatisation des processus &{' '}
                <span className="text-highlight">suppression des doubles saisies</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Libérez vos équipes de la corvée des tâches répétitives, connectez vos outils hétérogènes et automatisez la génération de vos bilans pour vous concentrer sur l’essentiel.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl shadow-primary-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Identifier vos gains d&apos;automatisation</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/solutions-metier"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all text-center"
                >
                  Voir nos logiciels métier
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Zéro double saisie
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Génération de PDF en 1 clic
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Flux 100% sécurisés
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Constat Saisies Répétitives */}
        <section className="py-20 lg:py-24 border-b border-white/5 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <AlertTriangle className="size-3.5 text-amber-400" />
                Friction Administrative
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Combien d&apos;heures vos collaborateurs perdent-ils chaque semaine ?
              </h2>
              <p className="text-neutral-400 text-base">
                Les copier-coller manuels et la ressaisie d&apos;informations entre logiciels fragmentés constituent la première source de fatigue et d&apos;erreurs évitables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="card-modern p-8 space-y-3 border-l-4 border-l-amber-500/60"
                >
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                    <Clock className="size-4" />
                    <span>Point de blocage n°0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Piliers Automatisation */}
        <section className="py-20 lg:py-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <Sparkles className="size-3.5" />
                Nos Leviers Technologiques
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Des flux fluides et fiabilisés de bout en bout
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                Faites communiquer vos logiciels sans effort et automatisez l’envoi de vos documents réglementaires.
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
                  Pragmatisme & Rigueur
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  L&apos;expertise technique d&apos;un développeur pour sécuriser vos flux
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  Contrairement aux bricolages No-Code fragiles qui tombent en panne sans explication, nos scripts d’automatisation sont codés de manière robuste, avec gestion d’erreurs et hébergement en France.
                </p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Interlocuteur direct :</strong> vous travaillez avec Boucif Faradji, concepteur de la solution, garant de la cohérence de vos données.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Implantation en Occitanie :</strong> basé à Perpignan, DevEvoke intervient localement et à distance partout en France.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Conformité RGPD stricte :</strong> aucun transfert illégal de données vers des serveurs tiers non sécurisés.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 card-modern p-8 space-y-6 bg-neutral-950/80 border-primary-500/20">
                <h3 className="text-xl font-bold text-white">Cas Typiques d’Automatisation</h3>
                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Édition des Bilans d’Activité</strong>
                    <span>Agrégation automatique des pointages mensuels et génération immédiate des rapports d’activité PDF.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Rappels & Alertes Réglementaires</strong>
                    <span>Surveillance automatique des dates de validité de permis, contrôles techniques ou certifications.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Synchronisation Données Terrain</strong>
                    <span>Remontée automatique des comptes-rendus mobiles vers le système administratif central sans ressaisie.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Auditer vos besoins d’automatisation</span>
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
              <h2 className="text-3xl font-bold text-white">Questions fréquentes sur l&apos;automatisation</h2>
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
              Prêt à en finir avec les ressaisies manuelles ?
            </h2>
            <p className="text-base text-neutral-300 max-w-2xl mx-auto">
              Planifiez un échange de 30 minutes avec Boucif Faradji pour cartographier vos processus manuels et évaluer les gains de temps réalisables dès les premières semaines.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Demander un diagnostic d’automatisation</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/developpement-web"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all"
              >
                Découvrir nos solutions web
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
