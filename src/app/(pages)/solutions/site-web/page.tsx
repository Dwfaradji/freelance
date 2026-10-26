import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Eye,
  FileText,
  UserCheck,
  Building2,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
} from 'lucide-react';

export default function SiteWebPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création et Refonte de Sites Web Médico-Sociaux',
    serviceType: 'Création de sites internet accessibles RGAA pour structures médico-sociales',
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
      'Sites internet inclusifs, modernes et conformes RGAA pour IME, ESAT, EHPAD et associations gestionnaires. Présentation des pôles, démarches familles et espace recrutement.',
  };

  const problems = [
    {
      title: 'Sites obsolètes et non consultables sur mobile',
      desc: 'De nombreux sites d’établissements datent de plus de 8 ans : lents à charger, illisibles sur smartphone et donnant une image dépassée de la structure.',
    },
    {
      title: 'Non-conformité aux normes d’accessibilité (RGAA)',
      desc: 'Paradoxalement, les sites accueillant des personnes handicapées ou des seniors souffrent souvent de contrastes insuffisants, de polices inadaptées et d’incompatibilité avec les lecteurs d’écran.',
    },
    {
      title: 'Difficulté à recruter des professionnels qualifiés',
      desc: 'Dans un contexte de tension RH (éducateurs spécialisés, aides-soignants), l’absence d’un espace carrières moderne décourage les candidats potentiels.',
    },
    {
      title: 'Information des familles opaque et appels téléphoniques saturés',
      desc: 'Les familles ne trouvent pas les livrets d’accueil, les plannings ou les formulaires de pré-admission en ligne, ce qui engorge le standard téléphonique.',
    },
  ];

  const benefits = [
    {
      title: 'Accessibilité numérique universelle (RGAA)',
      desc: 'Contrastes vérifiés, navigation au clavier, synthèse vocale prise en charge et langage clair (FALC) pour inclure tous les usagers et leurs proches.',
    },
    {
      title: 'Attractivité RH et candidatures simplifiées',
      desc: 'Section offres d’emploi dédiée avec dépôt de candidature fluide en 1 clic pour capter les meilleurs profils soignants et éducatifs.',
    },
    {
      title: 'Valorisation de votre projet d’établissement',
      desc: 'Mise en valeur de vos pôles d’accompagnement, de vos valeurs associatives et des activités quotidiennes auprès des partenaires institutionnels (ARS, Départements).',
    },
    {
      title: 'Autonomie totale de vos équipes',
      desc: 'Interface d’administration simplifiée permettant à votre secrétariat de publier une actualité, modifier un menu ou déposer un document en 2 minutes.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Audit & Immersion Institutionnelle',
      desc: 'Analyse de votre site actuel, de vos objectifs de communication, de votre public (usagers, familles, candidats, tutelles) et de vos contraintes RGAA.',
    },
    {
      num: '02',
      title: 'Conception UX & Design Inclusif',
      desc: 'Création des maquettes sur mesure axées sur la clarté, l’apaisement visuel, la typographie lisible et les contrastes certifiés.',
    },
    {
      num: '03',
      title: 'Développement Next.js Haute Performance',
      desc: 'Intégration éco-conçue, temps de chargement instantané, respect strict du RGPD et adaptation parfaite à tous les écrans (smartphones, tablettes, PC).',
    },
    {
      num: '04',
      title: 'Formation & Hébergement Souverain',
      desc: 'Hébergement sécurisé sur serveurs français (OVH / Scaleway) et formation pas-à-pas de vos équipes administratives à la gestion de contenu.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-950 text-white selection:bg-primary-500/30 selection:text-primary-200">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 border-b border-white/5">
          <div className="absolute inset-0 bg-radial from-primary-900/20 via-neutral-950/80 to-neutral-950 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs sm:text-sm font-medium mb-6">
                  <Globe className="size-4" />
                  <span>Solution N°1 — Présence & Accessibilité</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Sites web & portails accessibles pour le{' '}
                  <span className="text-highlight">
                    médico-social
                  </span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Valorisez vos établissements (IME, ESAT, EHPAD, MAS, associations gestionnaires) grâce à un site internet moderne, conforme aux normes d’accessibilité RGAA, rassurant pour les familles et optimisé pour le recrutement de vos équipes.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
                  >
                    <span>Demander un devis de refonte</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
                  >
                    Voir toutes les solutions
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/solutions/accessible_web_design.jpg"
                    alt="Atelier de conception web accessible RGAA avec test de contraste et lecteur braille"
                    width={800}
                    height={540}
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                      Accessibilité Universelle RGAA
                    </span>
                    <p className="text-white text-sm font-medium">
                      Interfaces inclusives, navigation simplifiée et langage FALC pensé pour tous les usagers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                <AlertTriangle className="size-3.5" />
                <span>Constat de terrain</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Pourquoi la majorité des sites médico-sociaux ne remplissent plus leur mission ?
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Le secteur médico-social fait face à des attentes grandissantes de transparence, d’inclusivité et de fluidité. Un site web figé dans les années 2010 dessert directement les objectifs de l’établissement.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-red-500/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{prob.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pour Qui ? */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">À qui s’adresse cette solution ?</h2>
            <p className="text-neutral-400 text-sm">
              Nous adaptons l’arborescence et les fonctionnalités selon la typologie de votre structure médico-sociale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
              <Building2 className="size-6 text-primary-400" />
              <h3 className="text-lg font-bold text-white">IME, SESSAD & Enfance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Présentation des projets personnalisés, formulaires de contact pour les parents, explications claires des modalités d’admission et calendrier des périodes scolaires.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
              <Layers className="size-6 text-secondary-400" />
              <h3 className="text-lg font-bold text-white">ESAT & Activités Économiques</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Catalogue en ligne des prestations d’ateliers (conditionnement, espaces verts, blanchisserie), valorisation du travail protégé et formulaires de demande de devis B2B.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
              <ShieldCheck className="size-6 text-accent" />
              <h3 className="text-lg font-bold text-white">EHPAD & Associations Multi-Sites</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Visite virtuelle des espaces de vie, livret d’accueil téléchargeable, portail d’actualités pour les familles et gouvernance globale multi-établissements.
              </p>
            </div>
          </div>
        </section>

        {/* Bénéfices Concrets */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Les bénéfices pour votre établissement
              </h2>
              <p className="text-neutral-400 text-sm">
                Un site web conçu par DevEvoke est un véritable levier d’allègement administratif et de rayonnement institutionnel.
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

        {/* Méthode d'intervention DevEvoke */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Comment nous intervenons</h2>
            <p className="text-neutral-400 text-sm">
              Un processus transparent, collaboratif et sans surprise pour votre équipe de direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 relative space-y-3"
              >
                <span className="text-3xl font-mono font-bold text-primary-500/40 block">
                  {st.num}
                </span>
                <h3 className="text-base font-bold text-white">{st.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Prêt à moderniser la vitrine de votre structure ?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Échangeons sur vos besoins, vos délais et votre budget. Nous vous transmettons une proposition détaillée sous 48h.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/templates"
                className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                Consulter nos socles & templates
              </Link>
              <Link
                href="/realisations"
                className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
