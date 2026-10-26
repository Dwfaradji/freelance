import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Workflow,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  FileText,
  Clock,
  Sparkles,
  RefreshCw,
  Sliders,
  Check,
} from 'lucide-react';

export default function AutomatisationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatisation & Dématérialisation Médico-Sociale',
    serviceType: 'Automatisation des flux administratifs et intégration de systèmes médico-sociaux',
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
      'Solutions d’automatisation des tâches répétitives, dématérialisation de documents et synchronisation de données pour établissements médico-sociaux.',
  };

  const problems = [
    {
      title: 'La corvée des doubles et triples saisies',
      desc: 'La même information (admission, coordonnées, date d’intervention) est retapée manuellement dans le logiciel administratif, un tableur Excel et un carnet papier.',
    },
    {
      title: 'Heures perdues sur des tâches sans valeur ajoutée',
      desc: 'Vos secrétaires et assistants passent des journées entières à extraire des données, copier-coller des lignes et relancer manuellement des interlocuteurs.',
    },
    {
      title: 'Erreurs de transcription et documents oubliés',
      desc: 'La saisie manuelle entraîne inévitablement des fautes de frappe, des dates erronées et des dossiers administratifs incomplets.',
    },
    {
      title: 'Outils cloisonnés qui ne communiquent pas entre eux',
      desc: 'Votre logiciel de gestion, votre comptabilité et vos plannings fonctionnent en silos fermés, sans passerelle technique d’échange de données.',
    },
  ];

  const benefits = [
    {
      title: 'Élimination définitive des doubles saisies',
      desc: 'Une information saisie une seule fois est automatiquement propagée dans tous vos systèmes concernés via des connecteurs fiables.',
    },
    {
      title: 'Génération instantanée de documents et bilans',
      desc: 'Création automatisée de synthèses d’activité, attestations, factures d’ateliers ESAT et rapports réglementaires au format PDF en un clic.',
    },
    {
      title: 'Relances et alertes programmées',
      desc: 'Envoi automatique de notifications par email ou SMS pour les renouvellements de dossiers MDPH, les échéances administratives ou les plannings.',
    },
    {
      title: 'Sérénité retrouvée pour les équipes administratives',
      desc: 'Vos collaborateurs se recentrent sur l’accueil humain, l’écoute des familles et la coordination au lieu de s’épuiser sur des copier-coller.',
    },
  ];

  const useCases = [
    {
      title: 'Dématérialisation des demandes d’admission',
      desc: 'Formulaire intelligent en ligne pour les familles, vérification automatique des pièces jointes et intégration directe dans la base de pré-admission.',
    },
    {
      title: 'Synchronisation plannings & feuilles d’heures',
      desc: 'Passerelle automatisée entre les plannings de tournée des intervenants nomades et le récapitulatif mensuel d’activité.',
    },
    {
      title: 'Génération des états statistiques annuels',
      desc: 'Agrégation automatique des données d’accompagnement pour produire les indicateurs attendus par les autorités de tarification.',
    },
    {
      title: 'Rappels automatiques d’échéances réglementaires',
      desc: 'Alertes par email programmées pour les visites médicales, les révisions de projets personnalisés et les contrôles techniques de véhicules.',
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
                  <Workflow className="size-4" />
                  <span>Solution N°6 — Productivité & Gain de Temps</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Automatisation & dématérialisation pour le{' '}
                  <span className="text-highlight">
                    médico-social
                  </span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Libérez vos équipes des tâches répétitives chronophages. DevEvoke met en place des flux automatisés, élimine les doubles saisies et synchronise vos logiciels pour que chacun se concentre sur l’humain.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-accent/20 transition-all flex items-center gap-2"
                  >
                    <span>Identifier vos gisements de temps</span>
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
                    src="/images/solutions/automation_medicosocial_office.jpg"
                    alt="Coordinatrice médico-sociale supervisant les flux automatisés sur son poste de travail"
                    width={800}
                    height={540}
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold border border-accent/30 mb-2 inline-block">
                      Zéro Ressaisie Manuelle
                    </span>
                    <p className="text-white text-sm font-medium">
                      Passerelles directes entre vos plannings, logiciels de paie et outils comptables.
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
                <span>Temps administratif perdu</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                La bureaucratie manuelle pèse sur les professionnels
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Les équipes du médico-social ont choisi ce métier pour accompagner des personnes, pas pour recopier à la main les mêmes données dans trois logiciels différents.
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

        {/* Cas d'usage concrets */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Exemples concrets d’automatisation
              </h2>
              <p className="text-neutral-400 text-sm">
                Des gains d’efficacité immédiats mis en œuvre sans perturber vos habitudes de travail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-accent/30 transition-all space-y-3"
                >
                  <div className="p-2.5 w-fit rounded-lg bg-accent/10 text-accent">
                    <Check className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{uc.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ce que votre structure y gagne
            </h2>
            <p className="text-neutral-400 text-sm">
              Fiabilité des données, sérénité des équipes et allègement de la charge mentale.
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
              Quelles tâches répétitives souhaitez-vous supprimer ?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Parlez-nous de vos flux actuels. Nous identifierons ensemble les automatisations les plus rentables à mettre en place rapidement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-accent/25 transition-all flex items-center gap-2"
              >
                <span>Demander un diagnostic automatisation</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
