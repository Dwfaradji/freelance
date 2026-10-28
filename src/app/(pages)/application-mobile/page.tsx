import React from 'react';
import Link from 'next/link';
import {
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  WifiOff,
  QrCode,
  Lock,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';

export default function ApplicationMobilePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement d’Applications Mobiles Professionnelles iOS & Android',
    serviceType: 'Création d’applications mobiles terrain, offline-first et React Native',
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
      'Conception d’applications mobiles iOS et Android sur-mesure sous React Native et Expo par DevEvoke. Mode hors-ligne garanti, synchronisation cloud automatique et ergonomie tactile optimisée pour équipes nomades.',
  };

  const painPoints = [
    {
      title: 'Zones blanches et coupures régulières de réseau 4G/5G',
      desc: 'En déplacement chez des clients, sur des chantiers ou en zone rurale, les applications web standards deviennent inutilisables dès que le réseau faiblit, bloquant l’activité des équipes.',
    },
    {
      title: 'La double saisie épuisante en fin de journée',
      desc: 'Vos collaborateurs notent les informations sur des carnets papier ou des fiches volantes durant leurs interventions, puis doivent tout retaper sur PC le soir, générant fatigue, erreurs et retards.',
    },
    {
      title: 'Interfaces bureautiques inadaptées aux écrans tactiles',
      desc: 'Tenter de remplir des tableaux denses sur un smartphone dans un véhicule ou debout sur le terrain provoque frustration et rejet des outils par les équipes.',
    },
    {
      title: 'Perte de traçabilité et données dispersées',
      desc: 'Des rapports d’intervention égarés, des photos de constat stockées sur les smartphones personnels et aucune synchronisation instantanée avec le système central de l’entreprise.',
    },
  ];

  const pillars = [
    {
      icon: WifiOff,
      title: 'Architecture 100% Hors-Ligne (Offline-First)',
      badge: 'Continuité d’Activité',
      desc: 'L’application enregistre immédiatement les données en base locale sécurisée. Dès qu’une connexion réseau (Wi-Fi ou 4G/5G) est détectée, la synchronisation avec le cloud s’opère silencieusement sans conflit.',
      features: ['Accès permanent aux plannings & dossiers', 'Aucun blocage en zone blanche', 'Synchronisation bidirectionnelle résiliente', 'Gestion fine des conflits de données'],
    },
    {
      icon: Smartphone,
      title: 'Expérience Tactile Fluide iOS & Android',
      badge: 'React Native & Expo',
      desc: 'Un socle de code mutualisé moderne pour publier simultanément sur l’App Store et Google Play, tout en garantissant des performances équivalentes au natif pur (60 images par seconde).',
      features: ['Utilisable d’une seule main sur le terrain', 'Interface sombre & claire contrastée', 'Temps de réponse instantané', 'Mises à jour rapides over-the-air'],
    },
    {
      icon: QrCode,
      title: 'Capteurs Matériels & Intégrations Terrain',
      badge: 'Productivité Opérationnelle',
      desc: 'Exploitation native des composants des smartphones : scan rapide de QR codes et codes-barres, prise de photos géolocalisées avec annotations, signature client au doigt et notifications push.',
      features: ['Scan instantané par caméra', 'Signature électronique certifiée', 'Horodatage & géolocalisation sécurisée', 'Dictée vocale des comptes-rendus'],
    },
    {
      icon: Lock,
      title: 'Sécurité & Chiffrement Mobile',
      badge: 'Protection des Données',
      desc: 'Protection des données sensibles stockées sur l’appareil : chiffrement AES local, authentification biométrique (Face ID, Touch ID), déconnexion automatique et respect rigoureux du RGPD.',
      features: ['Chiffrement SQLite local sécurisé', 'Authentification biométrique native', 'Conformité RGPD & CNIL', 'Révocation d’accès à distance'],
    },
  ];

  const faqs = [
    {
      q: 'Combien de temps faut-il pour concevoir une application mobile professionnelle ?',
      a: 'Un premier prototype opérationnel (MVP) est généralement déployable en 6 à 10 semaines. Grâce à la stack React Native / Expo, le développement pour iOS (iPhone/iPad) et Android se fait sur une base unique, divisant le délai et le coût par deux par rapport à deux développements natifs séparés.',
    },
    {
      q: 'Comment distribuer l’application à nos équipes sans passer par les stores publics ?',
      a: 'Nous pouvons configurer une distribution interne privée (Apple Business Manager, Google Play Entreprise ou distribution MDM interne). Vos collaborateurs installent l’application en un clic sécurisé sans qu’elle soit visible du grand public.',
    },
    {
      q: 'L’application peut-elle communiquer avec nos logiciels ou ERP existants ?',
      a: 'Oui. L’application mobile est connectée via des API REST sécurisées ou des webhooks à votre base de données, votre CRM, votre ERP ou votre solution de facturation centrale.',
    },
    {
      q: 'Qui assure la maintenance et le suivi des mises à jour des OS mobiles ?',
      a: 'DevEvoke assure un suivi technique proactif : adaptation annuelle aux nouvelles versions d’iOS et d’Android, renouvellement des certificats de signature, sauvegardes et support technique réactif.',
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
            { label: 'Applications Mobiles & Tablettes' },
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
                <Smartphone className="size-3.5" />
                <span>Ingénierie Mobile • iOS & Android</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Applications mobiles sur-mesure & outils nomades{' '}
                <span className="text-highlight">tout-terrain</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Offrez à vos équipes mobiles (techniciens, commerciaux, soignants, éducateurs) des outils tactiles simples, capables de fonctionner 100% hors-ligne et de supprimer définitivement la paperasse administrative.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl shadow-primary-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Parler de votre projet mobile</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/realisations"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all text-center"
                >
                  Consulter nos cas d&apos;usage
                </Link>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Mode hors-ligne garanti
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  React Native & Expo
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Données chiffrées localement
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Problématiques Terrain */}
        <section className="py-20 lg:py-24 border-b border-white/5 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <AlertTriangle className="size-3.5 text-amber-400" />
                Réalités Terrain
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Les freins quotidiens des équipes en déplacement
              </h2>
              <p className="text-neutral-400 text-base">
                Sur le terrain, les logiciels non adaptés ralentissent les interventions et alourdissent la charge mentale de vos professionnels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="card-modern p-8 space-y-3 border-l-4 border-l-amber-500/60"
                >
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                    <AlertTriangle className="size-4" />
                    <span>Irritant n°0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Piliers Mobiles */}
        <section className="py-20 lg:py-28 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="section-label">
                <Sparkles className="size-3.5" />
                Conçu Pour Vos Équipes
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Une ergonomie mobile pensée pour le réel
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                Des applications fiables, prêtes pour les conditions les plus exigeantes (chantiers, tournées à domicile, entrepôts logistiques).
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
                  Accompagnement Sur-Mesure
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Un développeur dédié qui teste les outils dans vos conditions réelles
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  Une application mobile ne se conçoit pas derrière un écran de bureau : elle doit être testée avec vos utilisateurs finaux dans leurs conditions réelles de déplacement.
                </p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Co-conception avec les utilisateurs :</strong> boutons larges, contrastes lisibles en plein soleil, navigation sans sous-menus complexes.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Proximité géographique :</strong> basé à Perpignan, DevEvoke intervient dans tout le sud de la France (Pyrénées-Orientales, Occitanie) et à distance partout en France.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-primary-400 shrink-0 mt-0.5" />
                    <span><strong>Zéro sous-traitance :</strong> vous échangez directement avec Boucif Faradji, concepteur et développeur de l’application.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 card-modern p-8 space-y-6 bg-neutral-950/80 border-primary-500/20">
                <h3 className="text-xl font-bold text-white">Cas d’Usage Métiers</h3>
                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Services d’Aide & Soins à Domicile</strong>
                    <span>Planning journalier, pointage d’interventions, fiches bénéficiaires et notes vocales déconnectées.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Techniciens & Maintenance</strong>
                    <span>Rapports de visite, prise de photos géolocalisées, relevés de compteurs et signature client.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <strong className="text-white block font-semibold mb-1">Gestion de Flottes & Matériel</strong>
                    <span>Scan QR code de prise de véhicule, état des lieux visuel et relevés kilométriques instantanés.</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-white text-neutral-950 font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Échanger sur votre projet mobile</span>
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
              <h2 className="text-3xl font-bold text-white">Questions fréquentes sur les applications mobiles</h2>
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
              Prêt à digitaliser le travail de vos équipes nomades ?
            </h2>
            <p className="text-base text-neutral-300 max-w-2xl mx-auto">
              Échangeons pendant 30 minutes avec Boucif Faradji pour cadrer vos besoins terrain et concevoir une solution mobile pragmatique.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Demander un échange de cadrage</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/solutions-metier"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-sm transition-all"
              >
                Découvrir nos logiciels métier
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
