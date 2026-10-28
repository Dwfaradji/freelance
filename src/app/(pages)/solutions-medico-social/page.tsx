import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Layers, 
  Car, 
  Smartphone, 
  Workflow, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function SolutionsMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Solutions Numériques Médico-Social DevEvoke',
    description: 'Catalogue des solutions logicielles et outils numériques développés par DevEvoke pour le secteur médico-social.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Développement de Logiciels Métiers & Applications Web Médico-Social',
        url: 'https://www.devevoke.com/developpement-logiciel-medico-social',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Applications Mobiles Hors-Ligne pour Équipes Terrain & SESSAD',
        url: 'https://www.devevoke.com/application-mobile',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Solutions Numériques pour Associations Gestionnaires',
        url: 'https://www.devevoke.com/solutions-medico-social/associations',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Solutions Numériques pour IME & DITEP',
        url: 'https://www.devevoke.com/solutions-medico-social/ime',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Solutions Numériques pour SESSAD',
        url: 'https://www.devevoke.com/solutions-medico-social/sessad',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Solutions Numériques pour ESAT',
        url: 'https://www.devevoke.com/solutions-medico-social/esat',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Solutions Numériques pour EHPAD',
        url: 'https://www.devevoke.com/solutions-medico-social/ehpad',
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Étude de cas SaaS Floticar : Gestion de Flotte Associative',
        url: 'https://www.devevoke.com/realisations/floticar',
      },
    ],
  };

  const categories = [
    {
      title: 'Logiciels Métiers & Applications Web',
      desc: 'Développement sur-mesure d’outils centralisés pour fluidifier le dossier usager, les plannings et le suivi administratif.',
      icon: <Layers className="size-6 text-primary-400" />,
      link: '/developpement-logiciel-medico-social',
      linkLabel: 'Découvrir le développement logiciel',
      points: [
        'Portails administratifs et suivi d’activité interne',
        'Gestion des admissions et plannings d’équipes',
        'Tableaux de bord de direction et reporting d’activité',
        'Hébergement sécurisé en France et conformité RGPD',
      ],
    },
    {
      title: 'Gestion de Flotte Automobile (Floticar)',
      desc: 'Solution SaaS éditée par DevEvoke pour gérer et suivre les véhicules des associations, IME et SESSAD.',
      icon: <Car className="size-6 text-secondary-400" />,
      link: '/logiciel-gestion-vehicules-medico-social',
      linkLabel: 'Découvrir le logiciel Floticar',
      badge: 'Solution SaaS DevEvoke',
      points: [
        'Réservation en ligne des véhicules partagés',
        'Carnet de bord dématérialisé sur smartphone',
        'Alertes automatiques contrôles techniques et révisions',
        'Suivi des consommations et ventilation budgétaire',
      ],
    },
    {
      title: 'Applications Mobiles & Tablettes Soignants',
      desc: 'Outils tactiles fluides conçus pour les éducateurs, soignants et intervenants nomades sur le terrain.',
      icon: <Smartphone className="size-6 text-accent" />,
      link: '/solutions/application-mobile',
      linkLabel: 'Découvrir nos solutions mobiles',
      points: [
        'Saisie rapide des transmissions à la volée',
        'Mode hors-connexion (offline first) pour zones blanches',
        'Pointage kilométrique et signatures électroniques',
        'Sécurisation des accès (MFA et biométrie)',
      ],
    },
    {
      title: 'Automatisation des Processus & APIs',
      desc: 'Connectez vos outils historiques et éliminez les ressaisies manuelles chronophages.',
      icon: <Workflow className="size-6 text-emerald-400" />,
      link: '/solutions/automatisation',
      linkLabel: 'Découvrir l’automatisation des flux',
      points: [
        'Interconnexion avec vos logiciels de paie et comptabilité',
        'Dématérialisation des formulaires d’admission',
        'Rappels SMS / emails automatiques aux familles',
        'Génération automatique de documents CERFA et contrats',
      ],
    },
  ];

  const etablissements = [
    {
      slug: 'ime',
      title: 'Instituts Médico-Éducatifs (IME)',
      desc: 'Solutions pour coordonner les projets pédagogiques et éducatifs, sécuriser les transports d’enfants et simplifier les échanges avec les familles.',
      link: '/solutions-medico-social/ime',
      image: '/images/solutions/ime_pedagogy_learning.jpg',
      badge: 'Enfance & Pédagogie',
    },
    {
      slug: 'sessad',
      title: 'SESSAD & Services Nomades',
      desc: 'Outils dédiés aux professionnels en mobilité : gestion des tournées scolaires et à domicile, réservation de flotte et dématérialisation des notes.',
      link: '/solutions-medico-social/sessad',
      image: '/images/home/floticar_real_action.jpg',
      badge: 'Mobilité & Tournées',
    },
    {
      slug: 'esat',
      title: 'Établissements & Services d’Aide par le Travail (ESAT)',
      desc: 'Concilier gestion commerciale d’atelier et suivi du projet personnalisé d’accompagnement des travailleurs en situation de handicap.',
      link: '/solutions-medico-social/esat',
      image: '/images/home/esat_workshop_activity.jpg',
      badge: 'Ateliers & Travail Protégé',
    },
    {
      slug: 'ehpad',
      title: 'EHPAD & Résidences Autonomie',
      desc: 'Modernisation des transmissions ciblées, portail familles rassurant et allègement de la charge administrative des équipes soignantes.',
      link: '/solutions-medico-social/ehpad',
      image: '/images/home/ehpad_coordination_life.jpg',
      badge: 'Grand Âge & Lien Famille',
    },
    {
      slug: 'associations',
      title: 'Associations Gestionnaires Multi-Sites',
      desc: 'Pilotage unifié du système d’information, mutualisation des moyens (flotte, matériel) et reporting consolidé pour les conseils d’administration.',
      link: '/solutions-medico-social/associations',
      image: '/images/home/hero_medicosocial_team.jpg',
      badge: 'Gouvernance & DSI',
    },
    {
      slug: 'mas-fam',
      title: 'Foyers de Vie, MAS & FAM',
      desc: 'Outils ergonomiques pour le suivi au long cours des résidents, le dossier de vie partagé et les activités socio-éducatives adaptées.',
      link: '/contact',
      image: '/images/about/about_field_immersion.jpg',
      badge: 'Hébergement Médicalisé',
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
            { label: 'Catalogue des solutions' },
          ]}
          backHref="/medico-social"
          backLabel="Retour au pôle médico-social"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide uppercase">
              Catalogue Numérique DevEvoke
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Solutions numériques et logiciels pour le{' '}
            <span className="text-gradient drop-shadow-sm">secteur médico-social</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Découvrez l’ensemble des technologies créées par <strong>DevEvoke</strong> pour équiper les <strong>associations</strong>, <strong>IME</strong>, <strong>SESSAD</strong>, <strong>ESAT</strong> et <strong>EHPAD</strong>. Des outils pensés pour simplifier le travail des équipes et renforcer la qualité de l’accompagnement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Présenter votre projet à un consultant
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/agence-digitale-medico-social" className="btn-outline w-full sm:w-auto text-base">
              Notre expertise médico-sociale
            </Link>
          </div>
        </header>

        {/* SECTION 1 : NOS SOLUTIONS PAR THÉMATIQUE */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Offre Technologique</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-6">
                Nos 4 piliers d’ingénierie logicielle
              </h2>
              <p className="text-muted text-lg">
                Des solutions fiables, modulaires et évolutives pour moderniser chaque dimension de votre organisation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="glass rounded-3xl p-8 sm:p-10 border border-white/5 hover:border-primary-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {cat.icon}
                      </div>
                      {cat.badge && (
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 border border-secondary-500/30 font-medium">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                    <p className="text-muted leading-relaxed mb-6">{cat.desc}</p>

                    <ul className="space-y-3 mb-8">
                      {cat.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={cat.link}
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
                  >
                    {cat.linkLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 : SOLUTIONS PAR TYPE D'ÉTABLISSEMENT */}
        <section className="py-20 border-t border-white/5 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="section-label">Adaptation Métier</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-3 mb-6">
                Des solutions adaptées à chaque établissement
              </h2>
              <p className="text-muted text-lg">
                Consultez nos approches ciblées selon votre type de structure médico-sociale ou sanitaire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {etablissements.map((etab, i) => (
                <div
                  key={i}
                  className="glass rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-white/20 hover:glass-strong transition-all duration-300 group shadow-xl"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={etab.image}
                        alt={etab.title}
                        width={600}
                        height={360}
                        className="size-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/80 text-white backdrop-blur-md shadow-lg">
                          {etab.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {etab.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {etab.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={etab.link}
                      className="text-xs font-semibold uppercase tracking-wider text-primary-400 group-hover:text-white inline-flex items-center gap-1.5 transition-colors"
                    >
                      Découvrir l'offre dédiée →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 : SÉCURITÉ & HÉBERGEMENT */}
        <section className="py-16 border-t border-white/5 bg-surface/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center size-14 rounded-full bg-primary-500/10 text-primary-400 mx-auto">
              <ShieldCheck className="size-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Garantie Sécurité Web, Confidentialité & RGPD
            </h2>
            <p className="text-muted leading-relaxed text-base max-w-3xl mx-auto">
              Toutes les solutions conçues par DevEvoke appliquent les meilleures pratiques de sécurité applicative et de conformité RGPD. Hébergement souverain sur serveurs situés en France, chiffrement TLS 1.3 et respect de la confidentialité professionnelle.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link href="/securite-et-conformite" className="btn-primary text-sm">
                Sécurité & Conformité RGPD
              </Link>
              <Link href="/contact" className="btn-outline text-sm">
                Échanger avec le fondateur
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4 : CTA FINAL */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-16 rounded-3xl text-center border border-primary-500/30 shadow-[0_0_60px_rgba(59,130,246,0.2)] relative z-10">
            <span className="section-label mb-4 inline-block">Un besoin spécifique ?</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Co-construisons la solution numérique de votre établissement
            </h2>
            <p className="text-muted text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Vous avez un cahier des charges, une idée de logiciel ou un besoin de modernisation ? Nos architectes et développeurs vous conseillent sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Contacter DevEvoke
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/realisations/floticar" className="btn-outline text-base">
                Découvrir l'étude Floticar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
