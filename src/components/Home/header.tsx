import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Lock,
  CalendarCheck,
} from 'lucide-react';

export default function Header() {
  return (
    <header className="relative min-h-[92svh] w-full flex flex-col justify-center overflow-hidden bg-gradient-to-b from-neutral-950 via-[#070d1d] to-neutral-950 pt-12 pb-16 sm:pt-24 sm:pb-20 lg:pt-36 lg:pb-28 border-b border-white/5">
      {/* Subtle atmospheric glow lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[500px] bg-primary-600/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Narrative Positioning & CTAs (SSR immédiat, aucun blocage JS) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Sector Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span>Agence Digitale Spécialisée Médico-Social &amp; Développement Sur-Mesure</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.15]">
              Solutions digitales &amp; développement sur-mesure pour le{' '}
              <span className="text-highlight">
                secteur médico-social
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              DevEvoke accompagne les établissements médico-sociaux (ESMS, IME, SESSAD, DITEP, ESAT, EHPAD) et associations gestionnaires dans la création et la refonte de sites web, le développement de logiciels métiers, d’applications mobiles hors-ligne et l’automatisation de leurs processus.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-primary-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Parler de votre projet</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions-medico-social"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 hover:text-white font-medium text-sm transition-all text-center backdrop-blur-sm"
              >
                Découvrir nos solutions médico-sociales
              </Link>
            </div>

            {/* Quick link to templates under CTAs */}
            <div className="pt-1 text-xs text-neutral-400 text-center lg:text-left">
              <span>Besoin d’un démarrage rapide ? </span>
              <Link
                href="/templates"
                className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1 transition-colors hover:underline"
              >
                <span>Explorer nos socles &amp; templates métiers</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* Reassurance Trust Markers */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-300 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Hébergement 100% France</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary-400 shrink-0" />
                <span>Conforme RGPD &amp; CNIL</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Users className="size-4 text-sky-400 shrink-0" />
                <span>Direct avec le fondateur</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Photography + Floating UI Glass Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary-500/30 via-secondary-500/20 to-primary-600/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
                <Image
                  src="/images/home/hero_medicosocial_team.jpg"
                  alt="Session de travail et coordination sur logiciel métier sur-mesure"
                  width={800}
                  height={600}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 42vw"
                  className="w-full h-[340px] sm:h-[480px] lg:h-[500px] object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Gradient vignette for text overlay readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Floating Glass Pill Top Left */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 backdrop-blur-md bg-neutral-950/80 border border-white/15 rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-xl flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-medium text-white">
                    Ingénierie Full-Stack Sur-Mesure
                  </span>
                </div>

                {/* Floating Glass Tag Top Right (visible sm+ to avoid mobile badge collision) */}
                <div className="hidden sm:block absolute top-5 right-5 backdrop-blur-md bg-primary-950/80 border border-primary-500/30 rounded-xl px-3 py-1.5 shadow-xl text-[10px] sm:text-[11px] font-semibold text-primary-200">
                  Web • Mobile • SaaS • Métier
                </div>

                {/* Bottom Overlay Card: Real Impact */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-5 backdrop-blur-xl bg-neutral-900/90 border border-white/15 rounded-2xl p-3 sm:p-4 shadow-2xl space-y-2 sm:space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-6 sm:size-7 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center">
                        <CalendarCheck className="size-3.5 sm:size-4" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-white">Outils Métiers &amp; Automatisation</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Zéro double saisie
                    </span>
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-neutral-300 leading-snug">
                    Des interfaces simples créées avec vos professionnels pour libérer du temps utile et éliminer la complexité.
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] sm:text-[10px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Lock className="size-3 text-primary-400" />
                      Données sécurisées en France
                    </span>
                    <span className="text-secondary-400 font-medium">
                      Mode hors-ligne disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
