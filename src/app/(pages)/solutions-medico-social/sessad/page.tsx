import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Car, 
  MapPin, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions Numériques & Gestion de Flotte pour SESSAD',
  description:
    'Solutions logicielles adaptées aux SESSAD : gestion et suivi des véhicules de service (Floticar), organisation des tournées nomades, notes de suivi dématérialisées et conformité RGPD.',
  keywords: [
    'logiciel SESSAD',
    'solution numérique SESSAD',
    'gestion véhicules SESSAD',
    'flotte automobile SESSAD',
    'application éducateur SESSAD',
    'Floticar SESSAD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/sessad',
  },
  openGraph: {
    title: 'Solutions Numériques & Gestion de Flotte pour SESSAD | DevEvoke',
    description:
      'Gérez les interventions mobiles de vos professionnels et optimisez le parc de voitures de votre SESSAD avec nos solutions connectées.',
    url: 'https://www.devevoke.com/solutions-medico-social/sessad',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Solutions logicielles pour SESSAD' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsSessadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques et Gestion de Parc pour SESSAD',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Gestion de flotte automobile (Floticar), organisation des tournées d’intervention et mobilité des équipes de SESSAD.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.devevoke.com/' },
      { '@type': 'ListItem', position: 2, name: 'Pôle Médico-Social', item: 'https://www.devevoke.com/medico-social' },
      { '@type': 'ListItem', position: 3, name: 'Solutions pour SESSAD', item: 'https://www.devevoke.com/solutions-medico-social/sessad' },
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
            <li><Link href="/medico-social" className="hover:text-white transition-colors">Pôle Médico-Social</Link></li>
            <li>/</li>
            <li className="text-white font-medium">Solutions pour SESSAD</li>
          </ol>
        </nav>

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary-500/30 mb-8">
            <MapPin className="size-4 text-secondary-400" />
            <span className="text-xs sm:text-sm font-medium text-secondary-200 tracking-wide uppercase">
              Services d'Éducation Spéciale et de Soins à Domicile
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Solutions numériques et gestion de flotte pour les{' '}
            <span className="text-gradient drop-shadow-sm">équipes nomades de SESSAD</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Les professionnels de SESSAD passent une grande partie de leur temps sur la route (écoles, collèges, domiciles). Découvrez <strong>Floticar</strong> pour piloter facilement vos véhicules de service et nos outils mobiles de saisie d'activité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/realisations/floticar" className="btn-primary w-full sm:w-auto text-base">
              Découvrir l'étude de cas Floticar
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto text-base">
              Échanger sur les besoins de votre SESSAD
            </Link>
          </div>
        </header>

        {/* SPÉCIFICITÉS DU SESSAD */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6">
                <span className="section-label">Enjeux de Mobilité SESSAD</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  La mobilité au cœur de la prise en charge
                </h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  Contrairement aux structures en internat ou externat fixe, le SESSAD intervient directement dans les lieux de vie de l'enfant (écoles, collèges, domicile familial). Les éducateurs spécialisés, psychologues, orthophonistes et psychomotriciens enchaînent les rendez-vous extérieurs.
                </p>
                <p className="text-muted leading-relaxed text-base sm:text-lg">
                  La gestion des véhicules devient vite un casse-tête : réservations en double, carnets de bord papier mal renseignés, entretiens oubliés. <strong>Floticar</strong>, notre solution SaaS, résout ces problématiques en permettant la réservation instantanée et le suivi kilométrique sur smartphone sans application à installer.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/sessad_field_educator.jpg"
                    alt="Éducateur spécialisé SESSAD en séance avec tablette tactile"
                    width={800}
                    height={520}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 text-xs font-semibold border border-secondary-500/30 mb-2 inline-block">
                      Intervention en milieu ordinaire
                    </span>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Outils mobiles légers, utilisables hors-ligne et synchronisés dès le retour au service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <Car className="size-8 text-secondary-400 mb-3" />
                <h3 className="text-white font-bold mb-2">Réservation Autonome</h3>
                <p className="text-xs text-muted leading-relaxed">Les intervenants réservent leur véhicule en quelques clics depuis leur téléphone avant leur départ.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <Smartphone className="size-8 text-primary-400 mb-3" />
                <h3 className="text-white font-bold mb-2">Relevé Kilométrique Mobile</h3>
                <p className="text-xs text-muted leading-relaxed">Fin des carnets papier dans les boîtes à gants : saisie du compteur au départ et au retour.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <Clock className="size-8 text-accent mb-3" />
                <h3 className="text-white font-bold mb-2">Suivi des Révisions</h3>
                <p className="text-xs text-muted leading-relaxed">Alertes automatiques par email pour le gestionnaire avant chaque contrôle technique obligatoire.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <FileCheck className="size-8 text-emerald-400 mb-3" />
                <h3 className="text-white font-bold mb-2">Comptes-Rendus Dématérialisés</h3>
                <p className="text-xs text-muted leading-relaxed">Outils de prise de notes sécurisée utilisables hors-ligne entre deux rendez-vous.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FLOTICAR DÉMO */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-14 rounded-3xl text-center border border-secondary-500/30">
            <span className="section-label mb-3 inline-block">Testez Floticar dans votre SESSAD</span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Simplifiez la vie de vos équipes nomades dès aujourd'hui
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Bénéficiez d'une démonstration personnalisée de 20 minutes pour découvrir comment Floticar s'adapte à votre SESSAD.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Demander une démo 14 jours
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/realisations/floticar" className="btn-outline text-base">
                Étude de cas Floticar
              </Link>
            </div>

            {/* Maillage inter-établissements */}
            <div className="mt-12 pt-8 border-t border-white/10 text-xs sm:text-sm text-muted">
              <span className="block mb-3 font-semibold uppercase tracking-wider text-white/70">Découvrez également nos solutions pour :</span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <Link href="/solutions-medico-social/ime" className="hover:text-secondary-400 underline underline-offset-4 transition-colors">IME</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/esat" className="hover:text-secondary-400 underline underline-offset-4 transition-colors">ESAT</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/ehpad" className="hover:text-secondary-400 underline underline-offset-4 transition-colors">EHPAD</Link>
                <span>•</span>
                <Link href="/solutions-medico-social/associations" className="hover:text-secondary-400 underline underline-offset-4 transition-colors">Associations gestionnaires</Link>
                <span>•</span>
                <Link href="/logiciel-gestion-vehicules-medico-social" className="hover:text-secondary-400 underline underline-offset-4 transition-colors">Logiciel flotte médico-sociale</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
