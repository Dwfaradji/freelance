'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ImportLogo from '@/components/ui/Logo/importLogo';
import {
  ChevronDown,
  Cpu,
  Cloud,
  Layout,
  Smartphone,
  Workflow,
  Car,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
} from 'lucide-react';

const solutionItems = [
  {
    title: 'Logiciels Métier Sur-Mesure',
    desc: 'Outils internes adaptés à vos protocoles et suppression des tableurs.',
    href: '/solutions/logiciel-metier',
    icon: Cpu,
  },
  {
    title: 'Développement Logiciel Dédié',
    desc: 'Conception logicielle sur-mesure pour structures et associations.',
    href: '/developpement-logiciel-medico-social',
    icon: Layout,
  },
  {
    title: 'Gestion de Flotte Automobile',
    desc: 'Dématérialisation des carnets par QR code avec Floticar.',
    href: '/logiciel-gestion-vehicules-medico-social',
    icon: Car,
  },
  {
    title: 'Applications Mobiles Terrain',
    desc: 'Outils tactiles hors-ligne pour professionnels nomades (SESSAD, SAVS).',
    href: '/solutions/application-mobile',
    icon: Smartphone,
  },
  {
    title: 'Plateformes SaaS',
    desc: 'Solutions web multi-établissements pour associations gestionnaires.',
    href: '/solutions/saas-sur-mesure',
    icon: Cloud,
  },
  {
    title: 'Automatisation & Dématérialisation',
    desc: 'Élimination des doubles saisies et génération automatique de rapports.',
    href: '/solutions/automatisation',
    icon: Workflow,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu au changement de route
  useEffect(() => {
    setOpenMenu(false);
    setSolutionsDropdown(false);
  }, [pathname]);

  // Bloquer le scroll lors de l'ouverture mobile
  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);

  const handleMouseEnterSolutions = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setSolutionsDropdown(true);
  };

  const handleMouseLeaveSolutions = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdown(false);
    }, 200);
  };

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Retour à l'accueil de DevEvoke"
            className="relative z-10 shrink-0 flex items-center"
          >
            <ImportLogo displayColor="colorS" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterSolutions}
              onMouseLeave={handleMouseLeaveSolutions}
            >
              <button
                type="button"
                onClick={() => setSolutionsDropdown(!solutionsDropdown)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith('/solutions')
                    ? 'text-white bg-white/5'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={solutionsDropdown}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    solutionsDropdown ? 'rotate-180 text-primary-400' : 'text-neutral-400'
                  }`}
                />
              </button>

              {/* Mega-menu Dropdown */}
              {solutionsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-[520px] rounded-2xl bg-neutral-900/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl shadow-black/60 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Nos pôles d'ingénierie
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/solutions-medico-social"
                        className="text-xs text-secondary-400 hover:text-secondary-300 font-medium inline-flex items-center gap-1"
                      >
                        <span>Par établissement</span>
                        <ArrowRight className="size-3" />
                      </Link>
                      <Link
                        href="/solutions"
                        className="text-xs text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1"
                      >
                        <span>Hub solutions</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {solutionItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className="group p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all text-left flex items-start gap-3"
                        >
                          <div className="p-2 rounded-lg bg-white/5 text-neutral-300 group-hover:text-primary-400 group-hover:bg-primary-500/10 transition-colors shrink-0">
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-primary-300 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <Link
                      href="/services"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Nos Services & Méthodologie →
                    </Link>
                    <Link
                      href="/logiciel-gestion-vehicules-medico-social"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Gestion de Flotte Automobile →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/secteurs/medico-social"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/secteurs/medico-social'
                  ? 'text-white bg-white/5'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Médico-Social
            </Link>

            <Link
              href="/realisations/floticar"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                pathname === '/realisations/floticar'
                  ? 'text-white bg-white/5'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Car className="size-3.5 text-primary-400" />
              <span>Floticar</span>
            </Link>

            <Link
              href="/realisations"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/realisations'
                  ? 'text-white bg-white/5'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Réalisations
            </Link>

            <Link
              href="/diagnostic-numerique"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/diagnostic-numerique'
                  ? 'text-white bg-white/5'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Diagnostic
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith('/blog')
                  ? 'text-white bg-white/5'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Ressources
            </Link>

            <Link
              href="/a-propos"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/a-propos'
                  ? 'text-white bg-white/5'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              L’Agence
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Burger Mobile */}
          <button
            type="button"
            aria-label={openMenu ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            aria-expanded={openMenu}
            onClick={() => setOpenMenu(!openMenu)}
            className="relative z-10 flex size-10 flex-col items-center justify-center gap-[5px] rounded-lg lg:hidden text-white hover:bg-white/5"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                openMenu ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                openMenu ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                openMenu ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-950/98 backdrop-blur-3xl transition-all duration-300 lg:hidden overflow-y-auto pt-24 pb-12 px-6 ${
          openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 max-w-sm mx-auto">
          {/* Main Links */}
          <div className="space-y-1 border-b border-white/10 pb-6">
            <Link
              href="/secteurs/medico-social"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              Secteur Médico-Social
            </Link>
            <Link
              href="/solutions-medico-social"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              Solutions par Établissement
            </Link>
            <Link
              href="/solutions"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              Hub des Solutions
            </Link>
            <Link
              href="/logiciel-gestion-vehicules-medico-social"
              className="flex items-center gap-2 py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              <Car className="size-5 text-primary-400" />
              <span>Gestion de Flotte Automobile</span>
            </Link>
            <Link
              href="/realisations"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              Réalisations & Études
            </Link>
            <Link
              href="/diagnostic-numerique"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              Diagnostic Numérique Gratuit
            </Link>
            <Link
              href="/services"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              Nos Services & Méthode
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              Ressources & Guides
            </Link>
            <Link
              href="/a-propos"
              className="block py-2 text-xl font-bold text-white hover:text-primary-400"
            >
              L’Agence DevEvoke
            </Link>
          </div>

          {/* Quick Solutions Submenu */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
              Solutions directes :
            </span>
            <div className="grid grid-cols-1 gap-2 text-sm text-neutral-300">
              <Link href="/solutions/logiciel-metier" className="py-1 hover:text-primary-300">
                • Logiciel métier sur-mesure
              </Link>
              <Link href="/developpement-logiciel-medico-social" className="py-1 hover:text-primary-300">
                • Développement logiciel dédié
              </Link>
              <Link href="/solutions/application-mobile" className="py-1 hover:text-primary-300">
                • Applications mobiles terrain (SESSAD)
              </Link>
              <Link href="/solutions/saas-sur-mesure" className="py-1 hover:text-primary-300">
                • Plateformes SaaS multi-établissements
              </Link>
              <Link href="/solutions/automatisation" className="py-1 hover:text-primary-300">
                • Automatisation & Dématérialisation
              </Link>
              <Link href="/solutions/site-web" className="py-1 hover:text-primary-300">
                • Sites web accessibles RGAA
              </Link>
              <Link href="/solutions/outils-metier" className="py-1 hover:text-primary-300">
                • Outils internes & Services généraux
              </Link>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
