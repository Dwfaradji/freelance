import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { projects } from '@/data/data';
import ProjectCard from '@/components/Projects/projectCard';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function RealisationsPage() {
  const floticarProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-primary-500/30 selection:text-primary-200">
      <Breadcrumb
        items={[{ label: 'Réalisations' }]}
        backHref="/"
        backLabel="Retour à l'accueil"
      />
      {/* Header Hero */}
      <section className="relative overflow-hidden pt-10 sm:pt-20 pb-12 sm:pb-20 border-b border-white/5">
        <div className="absolute inset-0 bg-radial from-primary-900/20 via-neutral-950/80 to-neutral-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="size-4" />
            <span>Savoir-Faire & Preuves Concrètes</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
            Projets & réalisations d’ingénierie{' '}
            <span className="text-highlight">
              numérique sur-mesure
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
            Découvrez nos développements logiciels, applications mobiles et plateformes SaaS. Des outils pensés pour les réalités opérationnelles des entreprises, des organisations et des structures médico-sociales.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="px-6 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all flex items-center justify-center text-center"
            >
              Explorer nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Study: Floticar */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-primary-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold">
                <span>Étude de Cas SaaS — Conçu & Développé par DevEvoke</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Floticar : La dématérialisation du carnet de bord pour les flottes professionnelles
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Né d’une problématique réelle de terrain, Floticar remplace les carnets de bord papier par un QR code scannable sur smartphone sans téléchargement. Une application SaaS complète avec tableau de bord centralisé pour la direction et alertes automatiques.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary-400 shrink-0" />
                  <span>Traçabilité 100% des conducteurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary-400 shrink-0" />
                  <span>Alertes contrôles techniques & vidanges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary-400 shrink-0" />
                  <span>Signalement immédiat des anomalies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary-400 shrink-0" />
                  <span>Architecture multi-tenant sécurisée</span>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/realisations/floticar"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-xs sm:text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
                >
                  <span>Lire l’étude de cas technique</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://floticar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Visiter floticar.com</span>
                  <ExternalLink className="size-3.5 text-neutral-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={floticarProject.image}
                  alt="Plateforme SaaS Floticar développée par DevEvoke"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Typologies de projets & cas d’usage
          </h2>
          <p className="text-neutral-400 text-sm">
            Chaque organisation a ses flux de travail spécifiques. Voici des exemples d’architectures et d’outils sur-mesure conçus pour digitaliser les métiers.
          </p>
        </div>

        <div className="space-y-16">
          {otherProjects.map((project, idx) => (
            <ProjectCard key={project.id} {...project} index={idx + 1} />
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Vous avez un projet logiciel, une application ou un besoin métier ?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Nous concevons des solutions logicielles et web sur-mesure pour répondre aux besoins opérationnels uniques des organisations. Parlons-en ensemble.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/25 transition-all flex items-center gap-2"
            >
              <span>Discuter de votre projet avec le fondateur</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-sm transition-all"
            >
              Découvrir nos expertises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
