'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logocv.svg';
import { ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-neutral-950 text-neutral-400">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label="DevEvoke" className="inline-block">
              <Image
                src={logo}
                alt="DevEvoke Logo"
                width={130}
                height={42}
                className="opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              DevEvoke est une agence digitale française spécialisée dans la conception de solutions numériques sur mesure pour les acteurs du médico-social : logiciels métiers, applications nomades, plateformes SaaS et automatisation.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/devevoke/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DevEvoke sur LinkedIn"
                className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all"
              >
                <LinkedIn fontSize="small" />
              </Link>
              <Link
                href="https://github.com/Dwfaradji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub DevEvoke"
                className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all"
              >
                <GitHub fontSize="small" />
              </Link>
            </div>
          </div>

          {/* Col 1: Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions Numériques
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/logiciel-metier" className="hover:text-white transition-colors">
                  Logiciels Métier Sur-Mesure
                </Link>
              </li>
              <li>
                <Link href="/developpement-logiciel-medico-social" className="hover:text-white transition-colors">
                  Développement Logiciel Dédié
                </Link>
              </li>
              <li>
                <Link href="/logiciel-gestion-vehicules-medico-social" className="hover:text-primary-300 text-primary-400 font-medium transition-colors">
                  Gestion de Flotte Automobile
                </Link>
              </li>
              <li>
                <Link href="/solutions/saas-sur-mesure" className="hover:text-white transition-colors">
                  Plateformes SaaS Dédiées
                </Link>
              </li>
              <li>
                <Link href="/solutions/application-web" className="hover:text-white transition-colors">
                  Applications Web & Intranets
                </Link>
              </li>
              <li>
                <Link href="/solutions/application-mobile" className="hover:text-white transition-colors">
                  Apps Mobiles Nomades (SESSAD)
                </Link>
              </li>
              <li>
                <Link href="/solutions/automatisation" className="hover:text-white transition-colors">
                  Automatisation des Processus
                </Link>
              </li>
              <li>
                <Link href="/solutions/outils-metier" className="hover:text-white transition-colors">
                  Outils Internes & Logistique
                </Link>
              </li>
              <li>
                <Link href="/solutions/site-web" className="hover:text-white transition-colors">
                  Sites Web Accessibles RGAA
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors">
                  Socles & Templates Métiers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Secteur & Réalisations */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Secteur & Réalisations
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/agence-digitale-medico-social" className="hover:text-white transition-colors">
                  Agence Digitale Médico-Social
                </Link>
              </li>
              <li>
                <Link href="/secteurs/medico-social" className="hover:text-white transition-colors">
                  Approche Médico-Sociale
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social" className="hover:text-white transition-colors">
                  Catalogue Solutions Médico-Social
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social/ime" className="hover:text-white transition-colors">
                  Solutions pour IME
                </Link>
              </li>
              <li>
                <Link href="/solutions-medico-social/sessad" className="hover:text-white transition-colors">
                  Solutions pour SESSAD
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
                <Link href="/realisations/floticar" className="hover:text-white transition-colors">
                  Étude de Cas Floticar
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-white transition-colors">
                  Toutes les Réalisations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Entreprise & Ressources */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Ressources & Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Nos Services Médico-Sociaux
                </Link>
              </li>
              <li>
                <Link href="/info-procedure" className="hover:text-white transition-colors">
                  Processus de Réalisation
                </Link>
              </li>
              <li>
                <Link href="/diagnostic-numerique" className="hover:text-white transition-colors">
                  Diagnostic Numérique
                </Link>
              </li>
              <li>
                <Link href="/demande-demo" className="hover:text-white transition-colors">
                  Demande de Démonstration
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
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À Propos de l'Agence
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-white transition-colors">
                  Informations Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-medium hover:text-primary-300 transition-colors">
                  Parler de votre projet →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner with Hosting & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {currentYear} <span className="text-neutral-300 font-medium">DevEvoke</span>. Tous droits réservés. Hébergement souverain en France (OVH / Scaleway).
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/mentions-legal" className="hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Confidentialité & RGPD
            </Link>
            <Link href="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
            <Link href="/securite-et-conformite" className="hover:text-white transition-colors">
              Sécurité & Conformité
            </Link>
            <Link href="/info-tarif" className="hover:text-white transition-colors">
              Modalités Tarifaires
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
