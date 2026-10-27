'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.webp';
import { ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-12 sm:mt-24 border-t border-white/10 bg-neutral-950 text-neutral-400">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 mb-10 sm:mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label="DevEvoke" className="inline-flex items-center gap-3 group">
              <div className="relative size-10 rounded-xl overflow-hidden shadow-md shadow-primary-500/10 shrink-0 border border-white/10 bg-neutral-900/80 p-1 group-hover:scale-105 group-hover:border-primary-500/30 transition-all duration-300">
                <Image
                  src={logo}
                  alt="DevEvoke Logo"
                  width={40}
                  height={40}
                  className="size-full object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white flex items-center">
                Dev<span className="text-primary-400">Evoke</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              DevEvoke est une agence digitale française spécialisée dans la conception de solutions logicielles et numériques sur-mesure : développement web Next.js, applications mobiles nomades, plateformes SaaS et automatisation. Ancrage local à Perpignan (Occitanie) et accompagnement partout en France.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/devevoke/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DevEvoke sur LinkedIn"
                className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/Dwfaradji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub DevEvoke"
                className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all"
              >
                <GitHubIcon />
              </Link>
            </div>
          </div>

          {/* Col 1: Expertises */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Expertises & Pôles
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/developpement-web" className="hover:text-white transition-colors">
                  Développement Web Sur-Mesure
                </Link>
              </li>
              <li>
                <Link href="/application-mobile" className="hover:text-white transition-colors">
                  Applications Mobiles & Tablettes
                </Link>
              </li>
              <li>
                <Link href="/developpement-saas" className="hover:text-white transition-colors">
                  Conception de Plateformes SaaS
                </Link>
              </li>
              <li>
                <Link href="/solutions-metier" className="hover:text-white transition-colors">
                  Logiciels Métier Sur-Mesure
                </Link>
              </li>
              <li>
                <Link href="/automatisation" className="hover:text-white transition-colors">
                  Automatisation des Processus
                </Link>
              </li>
              <li>
                <Link href="/securite-et-conformite" className="hover:text-white transition-colors">
                  Sécurité & Hébergement Souverain
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Socles & Modèles (Templates)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-300 text-primary-400 font-medium transition-colors">
                  Tous nos services & méthodologie →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Pôle Médico-Social */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Univers Médico-Social
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/medico-social" className="hover:text-primary-300 text-primary-400 font-medium transition-colors">
                  Hub Pôle Médico-Social
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social/ime" className="hover:text-white transition-colors">
                  Solutions pour IME
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social/sessad" className="hover:text-white transition-colors">
                  Solutions pour SESSAD & SAVS
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social/esat" className="hover:text-white transition-colors">
                  Gestion Ateliers ESAT
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social/ehpad" className="hover:text-white transition-colors">
                  Solutions pour EHPAD
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social/associations" className="hover:text-white transition-colors">
                  Associations Gestionnaires
                </Link>
              </li>
              <li>
                <Link href="/diagnostic-numerique" className="hover:text-white transition-colors">
                  Diagnostic Numérique Gratuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Entreprise & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              L’Agence & Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  L’Agence & Fondateur
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-white transition-colors">
                  Réalisations & Projets
                </Link>
              </li>
              <li>
                <Link
                  href="https://floticar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-300 text-neutral-300 transition-colors"
                >
                  Étude de Cas Floticar ↗
                </Link>
              </li>
              <li>
                <Link href="/info-procedure" className="hover:text-white transition-colors">
                  Processus de Réalisation
                </Link>
              </li>
              <li>
                <Link href="/foire-aux-questions" className="hover:text-white transition-colors">
                  Foire Aux Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Articles & Guides Conseils
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-white transition-colors">
                  Informations Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-medium hover:text-primary-300 transition-colors">
                  Échanger avec le fondateur →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner with Hosting & Legal */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <div>
            &copy; {currentYear} <span className="text-neutral-300 font-medium">DevEvoke</span> — Agence digitale & solutions métier sur-mesure (Perpignan, Occitanie & France). Hébergement souverain ISO 27001 en France.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2">
            <Link href="/mentions-legal" className="hover:text-white transition-colors py-1">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors py-1">
              Confidentialité & RGPD
            </Link>
            <Link href="/cgv" className="hover:text-white transition-colors py-1">
              CGV
            </Link>
            <Link href="/securite-et-conformite" className="hover:text-white transition-colors py-1">
              Sécurité & Conformité
            </Link>
            <Link href="/info-tarif" className="hover:text-white transition-colors py-1">
              Modalités Tarifaires
            </Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('openCookiePreferences'));
                }
              }}
              className="hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none text-xs text-neutral-400"
            >
              Gestion des cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
