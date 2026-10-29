import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import floticarImg from '@/images/projects/floticar-dashboard.png';
import {
  Car,
  ArrowRight,
  CheckCircle2,
  Smartphone,
} from 'lucide-react';

const floticarFeatures = [
  { label: 'Carnet de bord par QR code', desc: 'Scan direct avec le smartphone du conducteur, sans aucune application à télécharger.' },
  { label: 'Suivi kilométrique & carburant', desc: 'Relevé instantané au départ et à la restitution de chaque trajet associatif.' },
  { label: 'Alertes contrôles techniques', desc: 'Anticipation automatique des échéances réglementaires et révisions constructeur.' },
  { label: 'Traçabilité des conducteurs', desc: 'Attribution claire de chaque véhicule : zéro amende non imputée au sein de l’association.' },
  { label: 'Signalement d’anomalies & photos', desc: 'Prise de photo immédiate en cas de rayure ou incident pour éviter les litiges.' },
  { label: 'Planning de réservation partagé', desc: 'Disponibilité en temps réel de tous les véhicules pour les équipes de tournée.' },
];

export default function FloticarShowcase() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-primary-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-primary-500/30 p-5 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold">
                <Car className="size-3.5 shrink-0" />
                <span>Réalisation SaaS &amp; Preuve d&apos;Expertise • Conçu par DevEvoke</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Étude de cas : Floticar, solution SaaS développée pour les flottes associatives
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Illustration concrète de notre capacité à concevoir un produit numérique complet : né des besoins observés auprès d’associations gestionnaires, d’IME et de SESSAD, <strong className="text-white">Floticar</strong> dématérialise le carnet de bord des véhicules partagés et simplifie le suivi opérationnel.
              </p>

              {/* 6 Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {floticarFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">{feat.label}</strong>
                      <span className="text-neutral-400">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/realisations/floticar"
                  className="px-6 py-3.5 min-h-[44px] rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-xs sm:text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Lire l’étude de cas Floticar</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/realisations"
                  className="px-6 py-3.5 min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center text-center"
                >
                  Découvrir toutes nos réalisations
                </Link>
              </div>
            </div>

            {/* Right Visual: Field Action Photo + Dashboard Overlay */}
            <div className="lg:col-span-6 relative space-y-4">
              {/* Field Action Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900 group">
                <Image
                  src="/images/home/floticar_real_action.jpg"
                  alt="Conducteur scannant le QR code d'un véhicule avec son smartphone"
                  width={600}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[240px] sm:h-[380px] object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge on Photo */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 backdrop-blur-md bg-neutral-950/80 border border-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2">
                  <Smartphone className="size-3.5 text-secondary-400 shrink-0" />
                  <span>Scan QR Code Terrain • Sans Installation</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-200">
                  <span className="font-semibold text-[11px] sm:text-xs">Véhicules Partagés & Tournées</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] sm:text-[11px] border border-emerald-500/30">
                    Dématérialisation Immédiate
                  </span>
                </div>
              </div>

              {/* Complementary mini preview of the dashboard */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/90 p-3.5 sm:p-4 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="size-14 sm:size-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <Image
                      src={floticarImg}
                      alt="Dashboard Floticar"
                      width={80}
                      height={80}
                      sizes="80px"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 sm:hidden">
                    <span className="text-xs font-bold text-white block">Tableau de bord Direction</span>
                    <p className="text-[11px] text-neutral-400 line-clamp-2">
                      Consolidation kilométrique & entretiens.
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block flex-1 min-w-0">
                  <span className="text-xs font-bold text-white block">Tableau de bord Direction & Gestionnaires</span>
                  <p className="text-[11px] text-neutral-400 truncate">
                    Consolidation kilométrique, calendrier des entretiens et export comptable.
                  </p>
                </div>

                <Link
                  href="/realisations/floticar"
                  className="text-xs font-semibold text-primary-400 hover:text-white shrink-0 sm:pr-2 self-end sm:self-auto min-h-[36px] flex items-center"
                >
                  Voir l’étude de cas →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
