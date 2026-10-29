import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Smartphone, 
  Clock, 
  ArrowRight, 
  FileCheck,
  Calendar,
  Users,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export const metadata: Metadata = {
  title: 'Applications Mobiles Hors-Ligne & Solutions Numériques pour SESSAD',
  description:
    'Solutions logicielles et applications mobiles adaptées aux SESSAD, SAVS et SAMSAH : saisie de comptes-rendus en mode hors-ligne, organisation des tournées nomades, suivi des véhicules de service et conformité RGPD.',
  keywords: [
    'logiciel SESSAD',
    'solution numérique SESSAD',
    'application mobile SESSAD',
    'application éducateur SESSAD',
    'tournées médico-sociales logiciel',
    'gestion véhicules SESSAD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/sessad',
  },
  openGraph: {
    title: 'Applications Mobiles & Solutions Numériques pour SESSAD | DevEvoke',
    description:
      'Facilitez les interventions mobiles de vos éducateurs et rééducateurs en SESSAD grâce à des outils terrain ergonomiques fonctionnant même hors-ligne.',
    url: 'https://www.devevoke.com/solutions-medico-social/sessad',
    siteName: 'DevEvoke',
    images: [{ url: '/icon.png', width: 800, height: 600, alt: 'Solutions logicielles et mobiles pour SESSAD' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsSessadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Applications Mobiles et Solutions Numériques pour SESSAD',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Applications mobiles hors-ligne, organisation des tournées d’intervention, saisie de comptes-rendus terrain et suivi logistique pour équipes de SESSAD.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="overflow-hidden pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Solutions', href: '/solutions-medico-social' },
            { label: 'SESSAD' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary-500/30 mb-8">
            <MapPin className="size-4 text-secondary-400" />
            <span className="text-xs sm:text-sm font-medium text-secondary-200 tracking-wide uppercase">
              Services d'Éducation Spéciale et de Soins à Domicile
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.15]">
            Applications mobiles et solutions numériques pour les{' '}
            <span className="text-gradient drop-shadow-sm">équipes nomades de SESSAD</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-10">
            Les professionnels de SESSAD passent une grande partie de leur temps sur la route (écoles, collèges, domiciles). Nous concevons des applications mobiles hors-ligne et des outils collaboratifs pensés pour fluidifier leur quotidien sans alourdir leur charge mentale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-base">
              Échanger sur vos besoins SESSAD
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/diagnostic-numerique" className="btn-outline w-full sm:w-auto text-base">
              Faire le diagnostic gratuit
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
                  La déconnexion réseau, la double saisie papier-informatique et la dispersion des plannings pèsent lourdement sur les intervenants. Nous développons des applications mobiles intuitives avec synchronisation automatique et mode hors-ligne, garantissant la continuité du suivi des enfants sans perte d'information.
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
                <Calendar className="size-8 text-secondary-400 mb-3" />
                <h3 className="text-white font-bold mb-2">Planning Nomade & Tournées</h3>
                <p className="text-xs text-muted leading-relaxed">Visualisation claire des interventions extérieures, adresses des rendez-vous et changements d'emploi du temps en direct.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <Smartphone className="size-8 text-primary-400 mb-3" />
                <h3 className="text-white font-bold mb-2">Saisie 100% Hors-Ligne</h3>
                <p className="text-xs text-muted leading-relaxed">Prise de notes et bilans d'interventions en école ou à domicile sans connexion, avec synchronisation automatique au retour.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <Users className="size-8 text-accent mb-3" />
                <h3 className="text-white font-bold mb-2">Coordination Pluridisciplinaire</h3>
                <p className="text-xs text-muted leading-relaxed">Partage sécurisé des transmissions entre éducateurs, psychologues, rééducateurs et secrétariat conformément au RGPD.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <FileCheck className="size-8 text-emerald-400 mb-3" />
                <h3 className="text-white font-bold mb-2">Comptes-Rendus Dématérialisés</h3>
                <p className="text-xs text-muted leading-relaxed">Fiches de suivi pré-remplies, validation numérique et transmission instantanée au dossier unique de l'enfant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SESSAD CO-CONSTRUCTION */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-strong p-10 sm:p-14 rounded-3xl text-center border border-secondary-500/30">
            <span className="section-label mb-3 inline-block">Co-construisons vos outils SESSAD</span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Simplifiez la vie de vos équipes nomades dès aujourd'hui
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Bénéficiez d&apos;un échange de cadrage gratuit de 30 minutes avec un architecte logiciel pour évaluer vos processus et prototyper vos futurs outils mobiles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Réserver un échange de cadrage
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/realisations" className="btn-outline text-base">
                Découvrir nos réalisations
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
