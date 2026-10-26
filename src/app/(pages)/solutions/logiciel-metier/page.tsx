import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cpu,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Database,
  FileSpreadsheet,
  ShieldCheck,
  BarChart3,
  Layers,
  Sparkles,
  Lock,
} from 'lucide-react';

export default function LogicielMetierPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement de Logiciel Métier Médico-Social Sur-Mesure',
    serviceType: 'Conception de logiciels informatiques métiers sur-mesure pour établissements médico-sociaux',
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
      'Logiciels métiers sur-mesure pour associations et établissements médico-sociaux. Remplacement des tableurs Excel, centralisation des données et consolidation multi-sites.',
  };

  const problems = [
    {
      title: 'La prolifération des tableurs Excel dispersés',
      desc: 'Les versions s’accumulent ("planning_V3_final_revu.xlsx"), plusieurs personnes éditent en même temps, et les formules finissent inévitablement par se casser.',
    },
    {
      title: 'Sécurité et confidentialité non maîtrisées',
      desc: 'Les fichiers Excel non chiffrés circulent par email ou clé USB, exposant l’établissement à des violations de données et des non-conformités RGPD.',
    },
    {
      title: 'Logiciels standards rigides et licences coûteuses',
      desc: 'Les progiciels généralistes imposent leur logique, obligent vos équipes à changer leurs habitudes de travail et facturent des licences mensuelles par utilisateur.',
    },
    {
      title: 'Temps considérable perdu à consolider les bilans',
      desc: 'En fin de mois ou d’année, agréger les données entre plusieurs pôles ou établissements prend des semaines de travail manuel fastidieux.',
    },
  ];

  const benefits = [
    {
      title: 'Conception 100% calquée sur vos méthodes',
      desc: 'Nous n’adaptons pas votre métier à un logiciel : nous concevons le logiciel pour qu’il réponde exactement à vos processus et à votre vocabulaire interne.',
    },
    {
      title: 'Base de données relationnelle sécurisée',
      desc: 'Toutes les informations sont centralisées dans une base PostgreSQL robuste et chiffrée, hébergée sur des serveurs souverains en France.',
    },
    {
      title: 'Indicateurs et bilans annuels en un clic',
      desc: 'Génération instantanée de vos tableaux de bord de pilotage, statistiques de fréquentation et rapports pour les tutelles (ARS, Départements).',
    },
    {
      title: 'Modèle économique clair sans coût par utilisateur',
      desc: 'Pas de surcoût à chaque nouveau collaborateur ou stagiaire. Votre outil appartient à votre structure et évolue selon vos priorités.',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Immersion & Cartographie des Données',
      desc: 'Nous analysons vos flux d’information, vos tableurs actuels, vos circuits de validation et les besoins spécifiques de chaque métier.',
    },
    {
      step: '2',
      title: 'Modélisation & Prototypage Ergonomique',
      desc: 'Conception des maquettes d’écrans centrées sur la rapidité de saisie, la clarté visuelle et la réduction des risques d’erreur humaine.',
    },
    {
      step: '3',
      title: 'Développement Full-Stack Agile',
      desc: 'Construction de l’application avec les technologies web les plus fiables (Next.js, TypeScript, PostgreSQL), intégrant tests de sécurité et sauvegardes automatiques.',
    },
    {
      step: '4',
      title: 'Déploiement, Migration & Formation',
      desc: 'Reprise de vos données historiques existantes, accompagnement pédagogique de vos collaborateurs et suivi réactif.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-950 text-white selection:bg-primary-500/30 selection:text-primary-200">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 border-b border-white/5">
          <div className="absolute inset-0 bg-radial from-primary-900/20 via-neutral-950/80 to-neutral-950 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs sm:text-sm font-medium mb-6">
                  <Cpu className="size-4" />
                  <span>Solution N°4 — Logiciel Métier & Fin des Tableurs</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Logiciels métier sur-mesure pour le{' '}
                  <span className="text-highlight">
                    médico-social
                  </span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Dites adieu aux fichiers Excel fragmentés et aux progiciels rigides. DevEvoke développe des logiciels internes adaptés à vos protocoles pour centraliser vos données, fluidifier les validations et sécuriser vos processus.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
                  >
                    <span>Cadrer votre logiciel métier</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
                  >
                    Toutes nos solutions
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/workshop_coconception.jpg"
                    alt="Atelier de cadrage et co-conception de logiciel métier médico-social"
                    width={800}
                    height={540}
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                      Co-conception Directe
                    </span>
                    <p className="text-white text-sm font-medium">
                      Conçu main dans la main avec vos équipes pour une adhésion immédiate sur le terrain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème Excel */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                <FileSpreadsheet className="size-3.5" />
                <span>Le piège des tableurs</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Pourquoi Excel atteint vite ses limites dans une structure médico-sociale
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Pratique au début pour démarrer, le tableur devient rapidement un facteur de risque majeur dès que plusieurs professionnels doivent collaborer ou que les volumes grandissent.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-primary-500/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{prob.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bénéfices Sur-Mesure */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                La valeur d’un développement sur-mesure
              </h2>
              <p className="text-neutral-400 text-sm">
                Un outil informatique qui respecte votre histoire associative et vos équipes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-primary-500/30 transition-all space-y-3"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-primary-500/10 text-primary-400">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{b.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre méthode de conception
            </h2>
            <p className="text-neutral-400 text-sm">
              De l’expression de besoin jusqu’à la formation de vos équipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-3"
              >
                <span className="text-3xl font-mono font-bold text-primary-500/40 block">
                  0{st.step}
                </span>
                <h3 className="text-base font-bold text-white">{st.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Envie de remplacer vos tableurs par un vrai logiciel métier ?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Présentez-nous vos processus actuels lors d’un premier échange d’une demi-heure. Nous vous expliquerons comment nous pouvons les digitaliser.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
              >
                <span>Planifier un cadrage gratuit</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/developpement-logiciel-medico-social"
                className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                Développement logiciel médico-social
              </Link>
              <Link
                href="/solutions-medico-social"
                className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                Solutions par établissement
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
