'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Users,
  Lock,
  CalendarCheck,
} from 'lucide-react';

export default function Header() {
  return (
    <header className="relative min-h-[92svh] w-full flex flex-col justify-center overflow-hidden bg-gradient-to-b from-neutral-950 via-[#070d1d] to-neutral-950 pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-white/5">
      {/* Subtle atmospheric glow lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[500px] bg-primary-600/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Narrative Positioning & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Sector Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span>Partenaire Numérique du Médico-Social & Associatif</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[1.12]">
              Des solutions numériques sur-mesure au service de l&apos;humain et du{' '}
              <span className="text-highlight">
                médico-social
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              DevEvoke conçoit des logiciels métiers, applications mobiles et outils de coordination qui allègent la charge administrative des équipes et renforcent le suivi des personnes accompagnées (IME, SESSAD, ESAT, EHPAD, MAS, FAM).
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
                href="/solutions"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 hover:text-white font-medium text-sm transition-all text-center backdrop-blur-sm"
              >
                Découvrir nos solutions
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
                <span>Conforme RGPD & CNIL</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Users className="size-4 text-sky-400 shrink-0" />
                <span>Co-conception avec le terrain</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Real Photography + Floating UI Glass Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary-500/30 via-secondary-500/20 to-primary-600/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
                <Image
                  src="/images/home/hero_medicosocial_team.jpg"
                  alt="Équipe de coordination médico-sociale en pleine concertation avec une tablette numérique"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Gradient vignette for text overlay readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Floating Glass Pill Top Left */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 backdrop-blur-md bg-neutral-950/75 border border-white/15 rounded-full px-3.5 py-1.5 shadow-xl flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-medium text-white">
                    Coordination Multi-Sites Active
                  </span>
                </div>

                {/* Floating Glass Tag Top Right */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 backdrop-blur-md bg-primary-950/80 border border-primary-500/30 rounded-xl px-3 py-1.5 shadow-xl text-[10px] sm:text-[11px] font-semibold text-primary-200">
                  IME • SESSAD • ESAT • EHPAD
                </div>

                {/* Bottom Overlay Card: Real Impact */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 backdrop-blur-xl bg-neutral-900/90 border border-white/15 rounded-2xl p-4 shadow-2xl space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-7 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center">
                        <CalendarCheck className="size-4" />
                      </div>
                      <span className="text-xs font-bold text-white">Transmissions & Outils Métiers</span>
                    </div>
                    <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Zéro double saisie
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-300 leading-snug">
                    Des interfaces simples créées avec vos professionnels pour libérer du temps d&apos;accompagnement.
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] text-neutral-400">
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
          </motion.div>

        </div>
      </div>
    </header>
  );
}
