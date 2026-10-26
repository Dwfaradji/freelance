import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck2,
  Users,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sécurité Web & Conformité RGPD Médico-Sociale | DevEvoke',
  description:
    'Découvrez les standards de sécurité et de protection des données appliqués par DevEvoke pour les associations médico-sociales : conformité stricte au RGPD, hébergement souverain en France, chiffrement et sécurité applicative.',
  alternates: {
    canonical: 'https://www.devevoke.com/securite-et-conformite',
  },
  openGraph: {
    title: 'Sécurité & Protection des Données Médico-Sociales | DevEvoke',
    description:
      'Engagements techniques et organisationnels de DevEvoke pour garantir la confidentialité et la sécurité des données des établissements médico-sociaux.',
    url: 'https://www.devevoke.com/securite-et-conformite',
    type: 'website',
  },
};

export default function SecuriteConformitePage() {
  return (
    <main className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 inline-block">
            Confidentialité & Protection des Données
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Sécurité Web & Conformité RGPD pour le{' '}
            <span className="text-highlight">
              secteur médico-social
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Dans le secteur médico-social, la protection des informations relatives aux usagers, aux familles et aux équipes constitue un prérequis incontournable. Voici nos engagements techniques et organisationnels pour concevoir des applications fiables et sécurisées.
          </p>
        </header>

        {/* Visuel Datacenter Souverain */}
        <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl mb-16 group">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <Image
              src="/images/about/about_sovereign_security.jpg"
              alt="Couloir de serveurs sécurisés en centre de données souverain français"
              width={1400}
              height={600}
              className="size-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 inline-block mb-2">
                  Datacenters en France métropolitaine
                </span>
                <p className="text-white font-semibold text-lg sm:text-xl">
                  Infrastructures certifiées ISO 27001 & Droit européen
                </p>
              </div>
              <span className="text-xs text-neutral-300 glass px-4 py-2 rounded-xl border border-white/10">
                Chiffrement TLS 1.3 & AES-256
              </span>
            </div>
          </div>
        </div>

        {/* 4 Piliers de Sécurité */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">
              1. Conformité Stricte au RGPD
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Nous appliquons les principes de <em>Privacy by Design</em> (protection des données dès la conception) et de <em>Privacy by Default</em>. Les formulaires et bases de données respectent le principe de minimisation : seules les données strictement nécessaires au fonctionnement du service sont collectées.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-500/10 border border-secondary-500/20 text-secondary-400 flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">
              2. Hébergement Souverain en France
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Les applications web et plateformes conçues par DevEvoke (notamment la solution SaaS Floticar) sont hébergées sur des infrastructures cloud situées exclusivement en France (centres de données sécurisés ISO 27001). Vos données restent soumises au droit européen et français.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">
              3. Chiffrement & Protection Réseau
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Toutes les communications transitent par des protocoles chiffrés récents (HTTPS, TLS 1.3). Les mots de passe sont hachés avec des algorithmes robustes (bcrypt/argon2). Les données sensibles stockées bénéficient d’un chiffrement au repos (AES-256).
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">
              4. Contrôle d’Accès & Traçabilité (RBAC)
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Les accès sont cloisonnés par profils et rôles stricts (Directeur, Responsable de service, Éducateur, Gestionnaire de flotte). Chaque utilisateur n’accède qu’aux informations nécessaires à sa mission, avec journalisation des connexions et actions sensibles.
            </p>
          </div>
        </div>

        {/* Détails Pratiques */}
        <div className="space-y-8 glass rounded-3xl p-8 sm:p-12 border border-white/10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Nos Pratiques de Sécurité Applicative
          </h2>

          <div className="space-y-4 text-sm text-muted">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Validation stricte côté serveur :</strong>
                <p className="mt-0.5">
                  Chaque entrée utilisateur est validée et assainie pour prévenir les injections SQL, failles XSS et attaques CSRF.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Sauvegardes régulières automatisées :</strong>
                <p className="mt-0.5">
                  Sauvegardes quotidiennes externalisées et testées pour garantir un plan de reprise d’activité rapide en cas d’incident.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Transparence & Droit des personnes :</strong>
                <p className="mt-0.5">
                  Possibilité technique d’exporter, modifier ou supprimer les données d’un utilisateur sur simple demande, conformément aux articles 15 à 22 du RGPD.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 sm:p-12 glass rounded-3xl border border-primary-500/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Vous avez des questions sur la sécurité de vos outils ?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto mb-8">
            Échangez avec nos architectes pour étudier vos protocoles internes et sécuriser les accès de votre association médico-sociale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-sm font-semibold">
              <span>Échanger sur votre projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/diagnostic-numerique" className="btn-outline text-sm">
              Faire le diagnostic numérique (3 min)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
