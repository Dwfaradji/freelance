import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  Calendar,
  Key,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
} from 'lucide-react';

export default function OutilsMetierPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outils Internes & Modules Logistiques Médico-Sociaux',
    serviceType: 'Développement d’outils informatiques légers pour les services généraux et la logistique',
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
      'Conception de modules internes sur-mesure pour les services généraux médico-sociaux : ticketing maintenance, réservation de salles, gestion du matériel et des locaux.',
  };

  const problems = [
    {
      title: 'Signalements de pannes sur des bouts de papier',
      desc: 'Une poignée cassée, une fuite d’eau ou une ampoule grillée sont signalées verbalement dans un couloir ou sur un post-it, puis oubliées.',
    },
    {
      title: 'Conflits de réservation de salles et de véhicules',
      desc: 'Deux éducateurs prévoient d’utiliser la même salle d’activité ou la même camionnette au même moment par manque d’un planning partagé clair.',
    },
    {
      title: 'Matériel et trousseaux de clés non tracés',
      desc: 'Le matériel mutualisé (vidéoprojecteurs, tablettes, trousseaux de clés) circule sans registre fiable, compliquant l’identification des derniers utilisateurs.',
    },
    {
      title: 'Outils du marché inadaptés aux services généraux',
      desc: 'Les logiciels de GMAO industrielle sont bien trop complexes et coûteux pour la réalité quotidienne d’un établissement médico-social.',
    },
  ];

  const modules = [
    {
      icon: <Wrench className="size-6 text-primary-400" />,
      title: 'Ticketing de maintenance & pannes',
      desc: 'Tout membre du personnel peut signaler un incident en 30 secondes depuis son smartphone avec photo. L’équipe technique reçoit l’alerte et met à jour le statut en un clic.',
    },
    {
      icon: <Calendar className="size-6 text-secondary-400" />,
      title: 'Réservation de salles & espaces partagés',
      desc: 'Planning visuel interactif évitant tout conflit d’occupation entre réunions d’équipes, ateliers d’usagers et entretiens avec les familles.',
    },
    {
      icon: <Key className="size-6 text-accent" />,
      title: 'Prêt de matériel & registre de clés',
      desc: 'Traçabilité instantanée des équipements empruntés (matériel éducatif, informatique, badges) pour responsabiliser les utilisateurs.',
    },
    {
      icon: <ClipboardList className="size-6 text-primary-400" />,
      title: 'Checklists et contrôles périodiques',
      desc: 'Suivi numérique des contrôles de sécurité obligatoires (extincteurs, issues de secours, registres de sécurité) avec rappels automatiques.',
    },
  ];

  const benefits = [
    {
      title: 'Prise en main immédiate sans formation',
      desc: 'Des interfaces si intuitives qu’un nouvel arrivant ou un vacataire peut les utiliser en moins de 5 minutes.',
    },
    {
      title: 'Réactivité décuplée pour les services généraux',
      desc: 'Les techniciens et agents d’entretien ont une liste claire des priorités quotidiennes sur leur téléphone ou tablette.',
    },
    {
      title: 'Visibilité et sérénité pour la direction',
      desc: 'Historique exhaustif des interventions, traçabilité des dépenses de réparation et respect des obligations réglementaires.',
    },
    {
      title: 'Modules légers intégrables à votre rythme',
      desc: 'Pas besoin de refondre tout votre système informatique : nous développons et déployons des modules ciblés en quelques semaines.',
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
                  <Wrench className="size-4" />
                  <span>Solution N°7 — Logistique & Services Généraux</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                  Outils internes & modules logistiques pour le{' '}
                  <span className="text-highlight">
                    médico-social
                  </span>
                </h1>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                  Les services généraux sont la colonne vertébrale du bon fonctionnement d’un établissement. DevEvoke conçoit des micro-outils pratiques et ciblés pour gérer la maintenance, les locaux, le matériel et les plannings partagés sans usine à gaz.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
                  >
                    <span>Décrire votre besoin logistique</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
                  >
                    Découvrir nos autres solutions
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/home/floticar_real_action.jpg"
                    alt="Maintenance et logistique de parc automobile et matériel médico-social"
                    width={800}
                    height={540}
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                      Moyens Généraux & Sécurité
                    </span>
                    <p className="text-white text-sm font-medium">
                      Suivi d’entretien préventif, états des lieux par QR code et gestion des interventions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème Logistique */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                <AlertTriangle className="size-3.5" />
                <span>Dysfonctionnements du quotidien</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                Les petits blocages logistiques finissent par peser sur le climat d’équipe
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Quand une panne met trois semaines à être réparée ou qu’une salle est réservée par deux personnes le même jour, la frustration s’accumule inutilement.
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

        {/* Modules types */}
        <section className="py-20 bg-neutral-900/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Exemples de modules pratiques que nous développons
              </h2>
              <p className="text-neutral-400 text-sm">
                Des outils ciblés, pragmatiques et développés en quelques semaines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-primary-500/30 transition-all space-y-3"
                >
                  <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10">
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Les bénéfices pour vos équipes
            </h2>
            <p className="text-neutral-400 text-sm">
              Fluidité, clarté et sérénité opérationnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-primary-500/30 transition-all space-y-3"
              >
                <div className="p-2.5 w-fit rounded-lg bg-primary-500/10 text-primary-400">
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
              Vous avez un besoin logistique ou interne non résolu ?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Expliquez-nous le fonctionnement de votre établissement. Nous concevons le micro-outil adapté en quelques semaines.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
              >
                <span>Présenter votre besoin</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
