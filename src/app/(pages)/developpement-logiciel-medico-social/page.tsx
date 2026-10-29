import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Server, 
  HeadphonesIcon,
  Sparkles
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function DeveloppementLogicielMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement Logiciel Médico-Social Sur-Mesure',
    serviceType: 'Conception et développement de logiciels sur-mesure pour établissements médico-sociaux',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Service de développement informatique d’applications web, logiciels ERP et plateformes métiers pour structures sociales et médico-sociales.',
  };

  const etapes = [
    {
      num: '01',
      title: 'Audit des Usages & Cahier des Charges',
      desc: 'Analyse précise des flux d’informations au sein de votre structure, entretiens avec les directions et les soignants/éducateurs.',
    },
    {
      num: '02',
      title: 'Architecture & UX Design Métier',
      desc: 'Conception de maquettes interactives testées avec vos utilisateurs. Définition des règles de sécurité et des droits d’accès.',
    },
    {
      num: '03',
      title: 'Développement Agile & Sécurisé',
      desc: 'Développement itératif (Next.js, TypeScript, PostgreSQL), protocoles de chiffrement et tests d’intégration continus.',
    },
    {
      num: '04',
      title: 'Déploiement Sécurisé & Formation',
      desc: 'Mise en production sur infrastructure souveraine en France, formation pratique des équipes et accompagnement au changement.',
    },
  ];

  const atouts = [
    {
      icon: <Layers className="size-6 text-primary-400" />,
      title: 'Un outil 100% adapté à vos protocoles',
      desc: 'Finies les fonctionnalités superflues ou les formulaires rigides imposés par les progiciels du marché. Chaque écran répond exactement à votre méthode de travail.',
    },
    {
      icon: <Server className="size-6 text-secondary-400" />,
      title: 'Hébergement Souverain & RGPD',
      desc: 'Vos données sont hébergées en France sur des serveurs sécurisés garantissant une haute disponibilité et une conformité rigoureuse au RGPD.',
    },
    {
      icon: <Cpu className="size-6 text-accent" />,
      title: 'Interopérabilité & Connexion API',
      desc: 'Intégrez facilement votre nouveau logiciel avec vos systèmes existants : paie, comptabilité, messagerie sécurisée MSSanté et annuaires.',
    },
    {
      icon: <HeadphonesIcon className="size-6 text-emerald-400" />,
      title: 'Support réactif & Évolutivité',
      desc: 'Un interlocuteur technique dédié basé en France. Votre logiciel évolue avec vos besoins et les nouvelles exigences réglementaires.',
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
            { label: 'Développement Logiciel Sur-Mesure' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide uppercase">
              Ingénierie Logicielle Sur-Mesure
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Développement de logiciels métiers pour le{' '}
            <span className="text-gradient drop-shadow-sm">secteur médico-social</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Concevez une application web ou un progiciel parfaitement aligné sur le fonctionnement de votre établissement médico-social (IME, SESSAD, ESAT, EHPAD) ou de votre association gestionnaire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Présenter votre cahier des charges
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/solutions-medico-social" className="btn-outline w-full sm:w-auto text-base">
              Voir nos autres solutions
            </Link>
          </div>
        </header>

        {/* ATOUTS DU SUR-MESURE */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Pourquoi le Sur-Mesure ?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
                Pourquoi choisir un développement sur-mesure pour votre établissement ?
              </h2>
              <p className="text-muted text-lg">
                Les progiciels généralistes du marché imposent souvent des interfaces lourdes, des coûts de licence exorbitants et une rigidité qui freine l’adhésion des professionnels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {atouts.map((atout, idx) => (
                <div key={idx} className="glass p-8 sm:p-10 rounded-3xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                      {atout.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{atout.title}</h3>
                    <p className="text-muted leading-relaxed text-base">{atout.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXEMPLES D'APPLICATIONS DÉVELOPPÉES */}
        <section className="py-20 bg-surface/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Cas d'Usage Concrets</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Quelles applications logicielles pouvons-nous développer pour vous ?
                </h2>
                <p className="text-muted leading-relaxed text-base">
                  De la gestion opérationnelle quotidienne au pilotage stratégique de plusieurs établissements, nous concevons des logiciels adaptés à tous les services :
                </p>

                <ul className="space-y-4 pt-2">
                  {[
                    'Dossier usager personnalisé et transmissions ciblées entre soignants et éducateurs',
                    'Outil de planification et d’optimisation des tournées d’intervention pour SESSAD',
                    'Portail de communication sécurisé avec les familles et représentants légaux',
                    'Gestion d’ateliers de production et facturation commerciale pour ESAT',
                    'Outil de suivi logistique, plannings de réservation et gestion des ressources partagées',
                    'Tableaux de bord d’activité et reporting réglementaire pour directions générales',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted text-sm sm:text-base">
                      <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/workshop_coconception.webp"
                    alt="Atelier de co-conception d'application métier médico-sociale"
                    width={800}
                    height={460}
                    className="w-full h-[260px] sm:h-[300px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs uppercase tracking-widest text-primary-300 font-bold">Co-conception UX</span>
                    <p className="text-white text-sm font-medium">Un logiciel taillé sur-mesure pour vos protocoles internes</p>
                  </div>
                </div>

                <div className="glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                    <Sparkles className="size-6 text-primary-400" />
                    Stack Technologique Moderne & Durable
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Nous refusons les technologies obsolètes. Nos développements s’appuient sur les frameworks les plus performants du marché garantissant vitesse, maintenabilité et sécurité :
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">Next.js & React</span>
                      <span className="text-xs text-muted">Interfaces ultra-réactives, légères et ergonomiques</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">Node & TypeScript</span>
                      <span className="text-xs text-muted">Typage strict et logique métier sécurisée</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">PostgreSQL & Redis</span>
                      <span className="text-xs text-muted">Bases relationnelles chiffrées et haute performance</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">Docker & Cloud Souverain</span>
                      <span className="text-xs text-muted">Conteneurisation sécurisée sur serveurs situés en France</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTHODOLOGIE DE DÉVELOPPEMENT */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Processus de Réalisation</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
                Les étapes d’un projet logiciel avec DevEvoke
              </h2>
              <p className="text-muted text-lg">
                Une méthode structurée pour respecter vos budgets, vos délais et garantir l'adhésion totale de vos équipes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {etapes.map((etape, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-extrabold font-mono text-primary-400 block mb-4">
                      {etape.num}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{etape.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{etape.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-16 rounded-3xl text-center border border-primary-500/30 shadow-[0_0_60px_rgba(59,130,246,0.2)] relative z-10">
            <span className="section-label mb-4 inline-block">Concrétisons votre outil</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Vous avez un projet de développement logiciel médico-social ?
            </h2>
            <p className="text-muted text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Discutez de votre projet avec un consultant DevEvoke. Nous établissons un diagnostic clair et un devis transparent sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Prendre contact avec nos architectes
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/agence-digitale-medico-social" className="btn-outline text-base">
                Découvrir l'agence médico-sociale
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
