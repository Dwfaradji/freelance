import React from 'react';
import Link from 'next/link';
import {
  Lock,
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
    tag: 'Visibilité & Conversion',
  },
  {
    id: 'mobile-app',
    problem: '« Nos intervenants sur le terrain perdent du temps avec des feuilles volantes »',
    solution: 'Application mobile & tablette hors-ligne',
    description:
      'Applications tactiles ergonomiques conçues pour les professionnels nomades (éducateurs, soignants, techniciens) : saisie rapide et mode déconnecté.',
    link: '/application-mobile',
    ctaText: 'Découvrir nos solutions mobiles',
    icon: Users,
    tag: 'Mobilité & Terrain',
  },
  {
    id: 'saas-product',
    problem: '« Nous voulons digitaliser un service et le proposer sous forme d’abonnement »',
    solution: 'Conception de plateforme SaaS',
    description:
      'Développement de votre produit logiciel cloud de A à Z : architecture multi-tenant, abonnements Stripe, espace client et sécurité renforcée.',
    link: '/developpement-saas',
    ctaText: 'Voir notre expertise SaaS',
    icon: Sparkles,
    tag: 'Produit Cloud B2B',
  },
  {
    id: 'automation',
    problem: '« Nos équipes passent des heures à ressaisir les mêmes données entre plusieurs outils »',
    solution: 'Automatisation & interconnexion d’outils',
    description:
      'Suppression des tâches manuelles répétitives, synchronisation automatique de vos bases et interconnexion de vos logiciels via APIs sécurisées.',
    link: '/automatisation',
    ctaText: 'Découvrir l’automatisation',
    icon: FileCheck2,
    tag: 'Productivité Immédiate',
  },
  {
    id: 'extranets-rgpd',
    problem: '« Nos échanges avec les usagers, familles et partenaires manquent de sécurité »',
    solution: 'Portails web & extranets sécurisés (RGPD)',
    description:
      'Espaces d’échange sécurisés, transmission chiffrée de documents sensibles et traçabilité complète des accès avec hébergement souverain en France.',
    link: '/solutions-metier',
    ctaText: 'Découvrir nos portails sécurisés',
    icon: Lock,
    tag: 'Conformité & Confiance',
  },
];

export default function NeedsSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative bg-surface/50 border-t border-white/5">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-600/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="section-label mb-3 inline-block">
            Partir de vos Réalités de Terrain
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Quelle problématique souhaitez-vous{' '}
            <span className="text-gradient">résoudre en priorité ?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            La technologie n’est qu’un moyen. Nous commençons toujours par écouter vos irritants quotidiens, vos contraintes métiers et vos objectifs opérationnels.
          </p>
        </div>

        {/* Needs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between rounded-2xl p-5 sm:p-7 border transition-all duration-300 ${
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
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-2xl glass border border-primary-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0 border border-primary-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-white">
                Votre situation ne rentre dans aucune case ?
              </p>
              <p className="text-xs sm:text-sm text-muted">
                C’est normal : chaque établissement a ses particularités. Échangeons 30 minutes pour clarifier votre besoin.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-primary w-full sm:w-auto text-sm shrink-0"
          >
            <span>Demander un diagnostic offert</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
