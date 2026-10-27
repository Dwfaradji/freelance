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
  Lock,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function MedicoSocialHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour le Secteur Médico-Social & Associatif',
    serviceType: 'Transformation numérique et ingénierie logicielle médico-sociale',
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
      'Pôle d’expertise numérique DevEvoke dédié au médico-social : logiciels métiers, applications mobiles hors-ligne pour SESSAD, outils pour IME, ESAT, EHPAD et gestion de flotte Floticar. Hébergement souverain sécurisé en France.',
  };

  const structures = [
    {
      sigle: 'IME',
      nom: 'Instituts Médico-Éducatifs',
      desc: 'Gestion des admissions, suivi des projets personnalisés de scolarisation, communication avec les familles et coordination pluridisciplinaire.',
      link: '/solutions-medico-social/ime',
      badge: 'Enfance & Pédagogie',
    },
    {
      sigle: 'SESSAD & SAVS',
      nom: 'Services d’Accompagnement à Domicile',
      desc: 'Outils mobiles pour éducateurs nomades, gestion des plannings de tournée, comptes-rendus d’interventions en milieu scolaire ou à domicile sans réseau.',
      link: '/solutions-medico-social/sessad',
      badge: 'Mobilité & Hors-Ligne',
    },
    {
      sigle: 'ESAT',
      nom: 'Établissements d’Aide par le Travail',
      desc: 'Suivi de la production en atelier (bois, espaces verts, conditionnement), devis commerciaux et fiches d’activités adaptées aux travailleurs.',
      link: '/solutions-medico-social/esat',
      badge: 'Production & Inclusion',
    },
    {
      sigle: 'EHPAD & Résidences',
      nom: 'Établissements pour Personnes Âgées',
      desc: 'Transmissions d’équipes sécurisées, gestion des astreintes et portails familles pour maintenir un lien transparent avec les proches.',
      link: '/solutions-medico-social/ehpad',
      badge: 'Grand Âge & Lien Familles',
    },
    {
      sigle: 'FAM & MAS',
      nom: 'Foyers d’Accueil Médicalisés',
      desc: 'Organisation du quotidien des résidents, protocoles de soins et traçabilité rigoureuse des interventions d’accompagnement.',
      link: '/contact',
      badge: 'Hébergement & Soins',
    },
    {
      sigle: 'Associations Multi-Sites',
      nom: 'Sièges & Directions Générales',
      desc: 'Centralisation des indicateurs d’activité multi-établissements, harmonisation du système d’information et pilotage budgétaire unifié.',
      link: '/solutions-medico-social/associations',
      badge: 'Gouvernance & Reporting',
    },
  ];

  const commitments = [
    {
      icon: ShieldCheck,
      title: 'Hébergement Souverain en France',
      desc: 'Infrastructures cloud hautement sécurisées situées sur le sol français (centres de données certifiés ISO 27001), conformité RGPD intégrale et étanchéité des données.',
    },
    {
      icon: Users,
      title: 'Immersion & Co-Conception Terrain',
      desc: 'Nous passons du temps aux côtés de vos professionnels (éducateurs, moniteurs d’ateliers, secrétaires) pour concevoir des écrans évidents qui s’adoptent sans formation lourde.',
    },
    {
      icon: Smartphone,
      title: 'Mode Déconnecté Garanti',
      desc: 'Vos équipes en déplacement ne sont jamais bloquées : les applications continuent de fonctionner sans réseau et se synchronisent automatiquement au retour.',
    },
    {
      icon: Cpu,
      title: 'Code Propriétaire Sans Enfermement',
      desc: 'Aucune licence captive par utilisateur qui étrangle le budget de votre association. Vous êtes pleinement propriétaire du code développé.',
    },
  ];

  const faqs = [
    {
      q: 'Comment DevEvoke garantit la sécurité et la conformité des données des résidents ?',
      a: 'Toutes nos solutions appliquent les recommandations strictes de la CNIL et du RGPD : minimisation des données collectées, chiffrement AES des bases et des échanges HTTPS, politique de mots de passe renforcée, journal d’audit des accès et hébergement souverain en France sans transfert hors Union Européenne.',
    },
    {
      q: 'Nos professionnels sont peu à l’aise avec l’informatique. L’adoption est-elle garantie ?',
      a: 'C’est précisément notre raison d’être : nous ne concevons pas des progiciels usines à gaz avec 50 boutons par écran. Les interfaces sont épurées, rédigées dans le vocabulaire quotidien de vos professionnels, avec de gros boutons tactiles et une logique d’action en 2 à 3 clics.',
    },
    {
      q: 'Quelle est la place de Floticar dans l’accompagnement de DevEvoke ?',
      a: 'Floticar est notre solution SaaS dédiée à la gestion de flotte automobile par QR code. Elle est née au contact direct des problématiques d’IME et de SESSAD confrontés aux pertes régulières de carnets de bord papier et aux amendes non imputées. C’est un exemple concret de notre capacité à résoudre un irritant quotidien.',
    },
    {
      q: 'Comment s’organisent les échanges avec l’association ?',
      a: 'Un interlocuteur direct : Boucif Faradji, fondateur et architecte logiciel. Basé à Perpignan (Occitanie), nous intervenons dans vos établissements de la région et organisons des revues d’avancement régulières en visioconférence pour les associations partout en France.',
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
          items={[{ label: 'Pôle Médico-Social & Associatif' }]}
          backLink={{ href: '/', label: 'Retour au site' }}
        />
        <MedicoSocialNavSwitcher />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20 border-b border-white/5">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[400px] bg-primary-600/15 blur-[160px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-secondary-600/10 blur-[150px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold uppercase tracking-wider">
                <Building2 className="size-3.5" />
                <span>Pôle d&apos;Excellence Sectoriel • Médico-Social</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Solutions numériques pensées pour les acteurs du{' '}
                <span className="text-highlight">médico-social</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Allégez la charge administrative de vos équipes et renforcez le temps utile consacré aux personnes accompagnées grâce à des logiciels métiers sur-mesure, des applications mobiles nomades et des outils de coordination simples.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl shadow-primary-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Parler de votre établissement</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/diagnostic-numerique"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all text-center"
                >
                  Faire le diagnostic médico-social gratuit
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Hébergement sécurisé France
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Conforme RGPD & CNIL
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Co-conception avec le terrain
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Solutions par Typologie d'Établissement */}
        <section className="py-20 lg:py-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <Sparkles className="size-3.5" />
                Écosystème Sectoriel
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Des réponses adaptées à chaque structure
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                Chaque type d’établissement répond à des contraintes réglementaires et opérationnelles spécifiques. Découvrez nos modules dédiés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {structures.map((s, idx) => (
                <Link
                  key={idx}
                  href={s.link}
                  className="card-modern p-8 space-y-4 group flex flex-col justify-between hover:border-primary-500/40 transition-all text-left"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white group-hover:text-primary-300 transition-colors">
                        {s.sigle}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-300 bg-primary-500/10 px-2.5 py-1 rounded-full border border-primary-500/20">
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-200">{s.nom}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{s.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-primary-400 group-hover:text-primary-300 font-semibold">
                    <span>Découvrir les solutions</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Engagements Médicosociaux */}
        <section className="py-20 lg:py-24 bg-neutral-900/30 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <ShieldCheck className="size-3.5" />
                Éthique & Rigueur
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Nos engagements au service des professionnels du soin et de l’éducatif
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commitments.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div key={idx} className="card-modern p-8 space-y-4">
                    <div className="size-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{c.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Floticar Showcase Banner */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-modern p-8 sm:p-12 border-primary-500/30 bg-gradient-to-br from-neutral-900 to-neutral-950">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold">
                    <Car className="size-3.5" />
                    <span>Innovation Métier Concrète</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Floticar : La gestion de flotte pensée pour vos tournées
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    Né sur le terrain auprès d’IME et de SESSAD, Floticar remplace le carnet de bord papier par un simple QR code scanné avec le smartphone des conducteurs, sans application à installer. Zéro amende non imputée, alertes de contrôle technique automatiques et disponibilité des véhicules en temps réel.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
                  <Link
                    href="https://www.floticar.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Découvrir Floticar</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/realisations"
                    className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Consulter tous nos projets →
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
              <h2 className="text-3xl font-bold text-white">Questions fréquentes du secteur médico-social</h2>
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
              Échangeons sur les besoins numériques de votre établissement
            </h2>
            <p className="text-base text-neutral-300 max-w-2xl mx-auto">
              Planifiez un échange de cadrage de 30 minutes avec Boucif Faradji pour auditer vos outils actuels et esquisser ensemble des solutions pragmatiques.
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
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all"
              >
                Découvrir l&apos;ensemble de nos services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
