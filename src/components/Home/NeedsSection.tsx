'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Car,
  FileCheck2,
  Cpu,
  Users,
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface NeedItem {
  id: string;
  problem: string;
  solution: string;
  description: string;
  link: string;
  ctaText: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  highlight?: boolean;
}

const needs: NeedItem[] = [
  {
    id: 'custom-software',
    problem: '« Aucun logiciel du marché ne correspond exactement à nos processus réels »',
    solution: 'Logiciel métier sur-mesure',
    description:
      'Conception d’outils internes, portails professionnels et plateformes web adaptés à votre gouvernance, vos protocoles et vos équipes.',
    link: '/solutions-metier',
    ctaText: 'Voir notre approche logiciel',
    icon: Cpu,
    tag: 'Sur-mesure & Évolutif',
    highlight: true,
  },
  {
    id: 'website',
    problem: '« Notre site internet est vieillissant et ne génère pas de prospects qualifiés »',
    solution: 'Développement web & plateformes performantes',
    description:
      'Sites d’entreprise et plateformes web ultra-rapides sous Next.js, taillés pour la conversion, le référencement naturel (SEO) et l’image de marque.',
    link: '/developpement-web',
    ctaText: 'Découvrir le développement web',
    icon: Building2,
    tag: 'Performance & Visibilité',
  },
  {
    id: 'paperwork',
    problem: '« Nos équipes perdent un temps précieux sur des saisies manuelles répétitives »',
    solution: 'Automatisation des flux & suppression double saisie',
    description:
      'Suppression des ressaisies, synchronisation temps réel de vos outils via API et génération instantanée de bilans d’activité en PDF.',
    link: '/automatisation',
    ctaText: 'Explorer l’automatisation',
    icon: FileCheck2,
    tag: 'Gain de temps opérationnel',
  },
  {
    id: 'field-teams',
    problem: '« Nos professionnels sur le terrain manquent d’outils mobiles fiables et hors-ligne »',
    solution: 'Applications mobiles iOS & Android (Offline-First)',
    description:
      'Outils tactiles pour techniciens, commerciaux ou équipes itinérantes : plannings, comptes-rendus express et fonctionnement 100% hors-ligne.',
    link: '/application-mobile',
    ctaText: 'Découvrir les applications mobiles',
    icon: Users,
    tag: 'Mobilité & Hors-Ligne',
  },
  {
    id: 'saas-product',
    problem: '« Nous voulons digitaliser notre offre ou lancer un produit SaaS B2B »',
    solution: 'Conception de plateforme SaaS sur-mesure',
    description:
      'Architecture cloud multi-tenant sécurisée, gestion des abonnements Stripe, facturation automatisée et espace client en libre-service.',
    link: '/developpement-saas',
    ctaText: 'Concevoir votre SaaS',
    icon: ShieldCheck,
    tag: 'Produit Cloud B2B',
  },
  {
    id: 'fleet',
    problem: '« Nous avons besoin de fiabiliser la gestion d’une flotte ou de matériel »',
    solution: 'Floticar — Gestion de flotte connectée',
    description:
      'Carnet de bord numérique par QR code sur smartphone, alertes de contrôle technique et traçabilité des conducteurs. Conçu par DevEvoke.',
    link: '/realisations',
    ctaText: 'Découvrir l’étude de cas',
    icon: Car,
    tag: 'Étude de cas concrète',
  },
];

export default function NeedsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface/50 border-y border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-primary-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Espace Vos Besoins
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Vous partez d’un{' '}
            <span className="text-highlight">
              problème concret
            </span>
            , nous concevons la solution.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Pas de jargon technique stérile : sélectionnez la problématique rencontrée dans votre organisation pour découvrir notre réponse numérique opérationnelle.
          </p>
        </div>

        {/* Needs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative flex flex-col justify-between rounded-2xl p-7 border transition-all duration-300 ${
                  item.highlight
                    ? 'bg-gradient-to-b from-primary-950/40 via-surface to-surface border-primary-500/40 shadow-xl shadow-primary-950/30 hover:border-primary-400'
                    : 'glass border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        item.highlight
                          ? 'bg-primary-500/20 text-primary-400 border-primary-500/30 group-hover:scale-110'
                          : 'bg-white/5 text-gray-300 border-white/10 group-hover:text-primary-400 group-hover:border-primary-500/30'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-primary-300 italic mb-2">
                    {item.problem}
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {item.solution}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-primary-400 transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl glass border border-primary-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Votre besoin spécifique ne figure pas dans cette liste ?
            </h4>
            <p className="text-sm text-muted">
              Nous étudions l’organisation et les contraintes de votre entreprise ou association pour concevoir une réponse technique adaptée.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary shrink-0 px-6 py-3 text-sm font-semibold whitespace-nowrap"
          >
            Échanger avec le fondateur
          </Link>
        </div>
      </div>
    </section>
  );
}
