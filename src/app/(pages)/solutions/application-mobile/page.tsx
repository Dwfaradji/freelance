import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  WifiOff,
  Clock,
  ShieldCheck,
  FileCheck,
  Zap,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function ApplicationMobilePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Applications Mobiles Terrain pour le Médico-Social',
    serviceType: 'Développement d’applications mobiles hors-ligne pour équipes itinérantes',
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
      'Applications mobiles et tablettes pour professionnels médico-sociaux en tournée (SESSAD, SAVS, SAMSAH). Fonctionnement hors-ligne et saisie rapide d’interventions.',
  };

  const problems = [
    {
      title: 'Zones blanches et perte de connexion 4G/5G',
      desc: 'En tournée à domicile ou en milieu scolaire rural, les logiciels web classiques plantent dès que la connexion internet est instable ou absente.',
    },
    {
      title: 'La double saisie épuisante en fin de journée',
      desc: 'Les éducateurs et soignants notent sur papier durant leurs visites, puis doivent tout retaper sur PC au bureau le soir, générant fatigue et retards.',
    },
    {
      title: 'Interfaces PC inadaptées aux écrans de smartphones',
      desc: 'Tenter d’utiliser un portail administratif complexe sur un petit écran tactile en voiture ou entre deux rendez-vous est une source d’agacement constant.',
    },
    {
      title: 'Risque de perte d’informations et sécurité fragile',
      desc: 'Les carnets manuscrits peuvent être égarés ou oubliés, ce qui pose un problème immédiat de confidentialité et de traçabilité.',
    },
  ];

  const benefits = [
    {
      title: 'Fonctionnement 100% hors-ligne (Offline-First)',
      desc: 'L’application continue de fonctionner parfaitement sans réseau. Vos équipes consultent leurs plannings et rédigent leurs comptes-rendus n’importe où.',
    },
    {
      title: 'Synchronisation automatique et transparente',
      desc: 'Dès que le smartphone capte à nouveau du réseau (4G/Wi-Fi), les données sont synchronisées de manière sécurisée et chiffrée avec le serveur central.',
    },
    {
      title: 'Saisie d’intervention en 3 clics',
      desc: 'Champs pré-remplis, horodatage automatique, dictée vocale et cases à cocher adaptées aux contraintes du terrain.',
    },
    {
      title: 'Gain de temps précieux pour l’accompagnement',
      desc: 'Jusqu’à 45 minutes gagnées par jour et par professionnel, réinvesties directement auprès des usagers et de leurs familles.',
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
          <div className="absolute inset-0 bg-radial from-accent/20 via-neutral-950/80 to-neutral-950 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium mb-6">
                  <Smartphone className="size-4" />
                  <span>Solution N°3 — Mobilité & Terrain Nomade</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Applications mobiles terrain pour les équipes du{' '}
                  <span className="text-highlight">
                    médico-social
                  </span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Spécialement conçues pour les professionnels itinérants (SESSAD, SAVS, SAMSAH, équipes mobiles). Vos intervenants accèdent à leurs plannings et saisissent leurs synthèses même sans réseau internet.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-accent/20 transition-all flex items-center gap-2"
                  >
                    <span>Discuter de votre projet mobile</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
                  >
                    Retour aux solutions
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/solutions/mobile_tournee_educator.jpg"
                    alt="Professionnel nomade consultant sa tournée sur smartphone en milieu ordinaire"
                    width={800}
                    height={540}
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold border border-accent/30 mb-2 inline-block">
                      100% Fonctionnel Hors-Ligne
                    </span>
                    <p className="text-white text-sm font-medium">
                      Saisie immédiate en tournée et synchronisation automatique dès le retour au réseau.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème Terrain */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                <AlertTriangle className="size-3.5" />
                <span>Réalité du terrain</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Les équipes nomades ont besoin d’outils faits pour la mobilité
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Les professionnels en déplacement passent leurs journées sur les routes, dans les écoles ou au domicile des familles. Les contraindre à utiliser des outils pensés pour un bureau fixe est contre-productif.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{prob.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnement Offline-First */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                La force du mode déconnecté (Offline-First)
              </h2>
              <p className="text-neutral-400 text-sm">
                Une architecture technique spécifiquement pensée pour résister aux aléas de connexion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                  <WifiOff className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-white">1. Travaillez sans connexion</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Consultez le planning du jour et saisissez vos comptes-rendus même dans un sous-sol ou en pleine zone rurale sans 4G.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-secondary-500/10 text-secondary-400">
                  <Zap className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-white">2. Synchronisation instantanée</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Dès que le réseau est rétabli, l’application met à jour les données centrales sans aucune manipulation manuelle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-primary-500/10 text-primary-400">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-white">3. Sécurité locale renforcée</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Les données temporairement stockées sur l’appareil sont chiffrées localement et protégées par code PIN ou biométrie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ce que vos équipes y gagnent
            </h2>
            <p className="text-neutral-400 text-sm">
              Moins de tracas administratifs, plus de confort de travail au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-accent/30 transition-all space-y-3"
              >
                <div className="p-2.5 w-fit rounded-lg bg-accent/10 text-accent">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="text-base font-bold text-white">{b.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Équipez vos professionnels nomades d’un outil adapté
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Présentez-nous les tournées de vos services (SESSAD, SAVS, SAMSAH). Nous concevons une application sur-mesure pour votre terrain.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-accent/25 transition-all flex items-center gap-2"
              >
                <span>Planifier un échange technique</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
