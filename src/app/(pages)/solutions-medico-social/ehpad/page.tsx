import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building, 
  Heart, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Smartphone,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Transformation Numérique & Logiciels pour EHPAD',
  description:
    'Solutions digitales pour EHPAD et résidences autonomie : transmissions d’équipes ciblées, portail familles, allègement de la charge administrative et conformité RGPD.',
  keywords: [
    'logiciel EHPAD',
    'solution numérique EHPAD',
    'transformation numérique EHPAD',
    'portail famille EHPAD',
    'transmissions soignantes EHPAD',
    'logiciel gestion EHPAD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/ehpad',
  },
  openGraph: {
    title: 'Transformation Numérique & Logiciels pour EHPAD | DevEvoke',
    description:
      'Gagnez du temps administratif et facilitez le quotidien de vos équipes grâce à des outils ergonomiques conformes au RGPD.',
    url: 'https://www.devevoke.com/solutions-medico-social/ehpad',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Solutions logicielles pour EHPAD' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsEhpadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques et Logiciels pour EHPAD',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Conception d’outils numériques pour les EHPAD : transmissions de soins, portail famille et allègement administratif.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.devevoke.com/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions Médico-Social', item: 'https://www.devevoke.com/solutions-medico-social' },
      { '@type': 'ListItem', position: 3, name: 'Solutions pour EHPAD', item: 'https://www.devevoke.com/solutions-medico-social/ehpad' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="overflow-hidden pb-24">
        {/* Fil d'Ariane SEO */}
        <nav aria-label="Fil d'Ariane" className="pt-6 pb-2 text-sm text-muted">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/solutions-medico-social" className="hover:text-white transition-colors">Solutions Médico-Social</Link></li>
            <li>/</li>
            <li className="text-white font-medium">Solutions pour EHPAD</li>
          </ol>
        </nav>

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8">
            <Building className="size-4 text-primary-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-200 tracking-wide uppercase">
              Grand Âge & Dépendance
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Solutions numériques et logiciels pour{' '}
            <span className="text-gradient drop-shadow-sm">EHPAD & Résidences Autonomie</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Libérez vos soignants de la lourdeur administrative, fluidifiez les transmissions au lit du résident et offrez aux familles un espace d’échange transparent et rassurant.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Demander un audit pour votre EHPAD
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/securite-et-conformite" className="btn-outline w-full sm:w-auto text-base">
              Nos garanties Sécurité & RGPD
            </Link>
          </div>
        </header>

        {/* ENJEUX EHPAD */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Défis Soignants & Qualité</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Redonner du temps soignant auprès des personnes âgées
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Les soignants en EHPAD (aides-soignantes, infirmières, psychologues) passent trop de temps devant des logiciels administratifs complexes à saisir des informations en double, au détriment du temps passé auprès des résidents.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Notre philosophie : concevoir des interfaces ultra-épurées, tactiles et rapides, utilisables sur tablette ou smartphone directement dans la chambre, pour saisir les constantes, valider les repas ou consigner un événement en moins de 30 secondes.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/ehpad_coordination_life.jpg"
                    alt="Coordinatrice de vie et résidente en EHPAD partageant un moment chaleureux avec tablette"
                    width={800}
                    height={520}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                      Lien Social & Qualité de Vie
                    </span>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Le numérique comme vecteur de lien entre résidents, soignants et familles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4">
                  <Smartphone className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Transmissions Ciblées Mobiles</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Saisie rapide de la méthode DAR (Donnée, Action, Résultat) sur tablette soignante avec alertes automatiques à l'IDEC.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-secondary-500/10 flex items-center justify-center text-secondary-400 mb-4">
                  <Heart className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Portail Familles Sécurisé</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Partage des activités, gazette de l’établissement, menus et messages rassurants pour impliquer les proches dans le quotidien.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="size-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Hébergement Souverain & RGPD</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Hébergement souverain sur serveurs en France, chiffrement TLS et conformité stricte aux exigences de protection des données.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-14 rounded-3xl text-center border border-primary-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Modernisez le système d’information de votre EHPAD
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Échangez avec nos spécialistes du secteur sanitaire et médico-social pour préparer votre transition numérique.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Contacter un expert EHPAD
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/solutions-medico-social" className="btn-outline text-base">
                Voir toutes nos solutions
              </Link>
            </div>

            {/* Maillage inter-établissements */}
            <div className="mt-12 pt-8 border-t border-white/10 text-xs sm:text-sm text-muted">
              <span className="block mb-3 font-semibold uppercase tracking-wider text-white/70">Découvrez également nos solutions pour :</span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <Link href="/solutions-medico-social/ime" className="hover:text-primary-400 underline underline-offset-4 transition-colors">IME</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/sessad" className="hover:text-primary-400 underline underline-offset-4 transition-colors">SESSAD</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/esat" className="hover:text-primary-400 underline underline-offset-4 transition-colors">ESAT</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/associations" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Associations gestionnaires</Link>
                <span>•</span>
                <Link href="/developpement-logiciel-medico-social" className="hover:text-primary-400 underline underline-offset-4 transition-colors">Logiciel médico-social sur-mesure</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
