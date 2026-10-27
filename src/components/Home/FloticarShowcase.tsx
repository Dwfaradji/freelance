import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import floticarImg from '@/images/projects/floticar-dashboard.png';
import {
  Car,
  QrCode,
  CalendarCheck,
  Wrench,
  AlertTriangle,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
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
    <section className="py-28 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-primary-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-primary-500/30 p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-semibold">
                <Car className="size-3.5" />
                <span>Preuve Concrète d&apos;Ingénierie Métier • Conçu par DevEvoke</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Floticar : La gestion de flotte pensée pour les organisations & établissements
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Né des contraintes réelles constatées auprès d’associations gestionnaires, d’IME, de SESSAD et d’entreprises, <strong className="text-white">Floticar</strong> élimine les carnets de bord papier, responsabilise les conducteurs et protège le budget de l’organisation.
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
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="https://www.floticar.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-xs sm:text-sm hover:opacity-95 shadow-lg shadow-primary-500/20 transition-all flex items-center gap-2"
                >
                  <span>Visiter le site officiel Floticar</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/realisations"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
                >
                  Voir nos études de cas
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
                  className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge on Photo */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-neutral-950/80 border border-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2">
                  <Smartphone className="size-3.5 text-secondary-400" />
                  <span>Scan QR Code Terrain • Sans Installation</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
                  <span className="font-semibold">Véhicules Partagés & Tournées</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] border border-emerald-500/30">
                    Dématérialisation Immédiate
                  </span>
                </div>
              </div>

              {/* Complementary mini preview of the dashboard */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/90 p-4 shadow-xl flex items-center gap-4">
                <div className="size-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src={floticarImg}
                    alt="Dashboard Floticar"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-white block">Tableau de bord Direction & Gestionnaires</span>
                  <p className="text-[11px] text-neutral-400 truncate">
                    Consolidation kilométrique, calendrier des entretiens et export comptable.
                  </p>
                </div>
                <Link
                  href="https://www.floticar.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary-400 hover:text-white shrink-0 pr-2"
                >
                  Découvrir Floticar →
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
