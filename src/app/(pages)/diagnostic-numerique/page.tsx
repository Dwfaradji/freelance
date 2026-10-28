import React from 'react';
import DiagnosticTool from '@/components/Diagnostic/DiagnosticTool';
import Script from 'next/script';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function DiagnosticPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Diagnostic Numérique Médico-Social DevEvoke',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description:
      'Outil interactif gratuit d’évaluation de la maturité numérique des associations et établissements médico-sociaux (IME, SESSAD, ESAT, EHPAD).',
  };

  return (
    <>
      <Script
        id="diagnostic-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen pb-16 sm:pb-24 relative overflow-hidden">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Diagnostic Numérique' },
          ]}
          backLink={{ href: '/medico-social', label: 'Retour au pôle médico-social' }}
        />
        <MedicoSocialNavSwitcher />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header with 2-Column Presentation */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="section-label inline-block">
                Auto-évaluation gratuite • 3 minutes
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Diagnostic Numérique{' '}
                <span className="text-highlight">
                  Médico-Social
                </span>
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                Mesurez en direct le niveau de digitalisation de votre établissement (IME, SESSAD, ESAT, EHPAD, FAM). Identifiez les failles organisationnelles, les risques de conformité et les leviers d’automatisation prioritaires.
              </p>

              {/* Badges */}
              <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-300 pt-2">
                <div className="glass p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-400 shrink-0" />
                  <span>Résultat instantané sans inscription</span>
                </div>
                <div className="glass p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conforme RGPD & Confidentialité</span>
                </div>
                <div className="glass p-3 rounded-xl border border-white/5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Méthode adaptée associations</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group">
                <Image
                  src="/images/diagnostic/diagnostic_audit_medicosocial.jpg"
                  alt="Consultation d'audit et diagnostic de maturité numérique en établissement médico-social"
                  width={800}
                  height={540}
                  className="w-full h-[320px] sm:h-[380px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30 mb-2 inline-block">
                    Diagnostic Personnalisé
                  </span>
                  <p className="text-white text-sm font-medium">
                    Cartographier vos processus pour identifier concrètement vos gains de temps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Tool */}
          <DiagnosticTool />

          {/* Contextual FAQs or Explanations */}
          <div className="mt-24 max-w-3xl mx-auto border-t border-white/5 pt-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Pourquoi réaliser ce diagnostic pour votre établissement ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-5 rounded-2xl border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-primary-400 mb-2" />
                <h3 className="text-sm font-bold text-white mb-1">Évaluer les risques</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Contrôle des permis, maintenance des véhicules et sécurité des données usagers au sens de la CNIL.
                </p>
              </div>

              <div className="glass p-5 rounded-2xl border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-secondary-400 mb-2" />
                <h3 className="text-sm font-bold text-white mb-1">Chiffrer le temps perdu</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Mesurez le volume d’heures gaspillées chaque semaine en double saisie et gestion papier.
                </p>
              </div>

              <div className="glass p-5 rounded-2xl border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
                <h3 className="text-sm font-bold text-white mb-1">Prioriser les investissements</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Distinguez les besoins critiques à fort ROI des projets secondaires et préparez vos budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
