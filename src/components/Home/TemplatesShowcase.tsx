import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, LayoutGrid, CheckCircle2 } from 'lucide-react';

import medicalImg from '@/images/templates/etablissement-medico-social-1920.webp';
import medical2Img from '@/images/templates/cabinet-dentaire-orthodontie-1920.webp';
import realEstateImg from '@/images/templates/ehpad-residence-seniors-1920.webp';

interface FeaturedTemplate {
  title: string;
  category: string;
  description: string;
  image: any;
  href: string;
  features: string[];
}

const featuredTemplates: FeaturedTemplate[] = [
  {
    title: 'Portail Établissement Médico-Social',
    category: 'Médico-Social & Santé',
    description:
      'Vitrine accessible et rassurante pensée pour IME, SESSAD et associations gestionnaires. Parcours usagers fluide et conformité RGPD.',
    image: medicalImg,
    href: '/templates',
    features: ['Présentation des pôles', 'Formulaire sécurisé', 'Accessibilité RGAA'],
  },
  {
    title: 'Cabinet Médical & Centre de Soins',
    category: 'Santé & Praticiens',
    description:
      'Design épuré et moderne pour cliniques et cabinets de spécialistes. Mise en avant de l’équipe soignante et prise de contact rapide.',
    image: medical2Img,
    href: '/templates',
    features: ['Espace praticiens', 'Prise de rendez-vous', 'Score SEO 95+'],
  },
  {
    title: 'EHPAD & Résidence Autonomie',
    category: 'Médico-Social & EHPAD',
    description:
      'Portail chaleureux pour valoriser le cadre de vie, les activités quotidiennes et rassurer les familles avec transparence.',
    image: realEstateImg,
    href: '/templates',
    features: ['Visite des espaces', 'Livret d’accueil digital', 'Contact direct direction'],
  },
];

export default function TemplatesShowcase() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-neutral-900/40 border-t border-white/5 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="section-label">
              <LayoutGrid className="size-3.5 text-primary-400" />
              Accélérateurs de Déploiement
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Des socles &amp; templates pré-configurés pour <span className="text-highlight">démarrer rapidement</span>
            </h2>
            <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
              Ne repartez pas d’une page blanche. Découvrez nos modèles spécialisés, prêts à être personnalisés à 100% selon votre charte graphique et vos objectifs.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/templates"
              className="px-6 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all inline-flex items-center justify-center w-full sm:w-auto gap-2 group"
            >
              <span>Voir toute la galerie (16 socles)</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Template Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredTemplates.map((template, idx) => (
            <Link
              key={idx}
              href={template.href}
              className="card-modern group p-0 overflow-hidden flex flex-col justify-between hover:border-primary-500/40 transition-all duration-300"
            >
              <div>
                {/* Thumbnail image with hover effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <Image
                    src={template.image}
                    alt={template.title}
                    width={720}
                    height={450}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-semibold text-white tracking-wide">
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-primary-500 text-white px-5 py-2 text-xs font-semibold shadow-lg">
                      Voir la démo
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                    {template.description}
                  </p>

                  <div className="pt-3 space-y-1.5 border-t border-white/5">
                    {template.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-primary-400 group-hover:text-primary-300">
                  <span>Explorer ce modèle</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400 shrink-0 hidden sm:block">
              <Sparkles className="size-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Chaque socle est une fondation technique hautement optimisée
              </div>
              <div className="text-xs text-neutral-400">
                Développés sous Next.js et TypeScript, sans CMS lourd. Personnalisation complète à vos couleurs et hébergement sécurisé en France.
              </div>
            </div>
          </div>
          <Link
            href="/templates"
            className="shrink-0 w-full sm:w-auto px-5 py-3 min-h-[44px] rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs transition-all shadow-md shadow-primary-500/20 flex items-center justify-center text-center"
          >
            Explorer les 16 modèles →
          </Link>
        </div>
      </div>
    </section>
  );
}
