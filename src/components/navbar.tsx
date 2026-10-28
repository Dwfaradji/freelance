'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ImportLogo from '@/components/ui/Logo/importLogo';
import {
  ChevronDown,
  Globe,
  Cpu,
  Cloud,
  Smartphone,
  Workflow,
  ShieldCheck,
  ArrowRight,
  Building2,
  LayoutGrid,
} from 'lucide-react';

const solutionItems = [
  {
    title: 'Développement Web & Plateformes',
    desc: 'Sites d’entreprise Next.js, plateformes réactives et portails web.',
    href: '/developpement-web',
    icon: Globe,
  },
  {
    title: 'Applications Mobiles & Tablettes',
    desc: 'Outils tactiles iOS & Android hors-ligne pour équipes nomades.',
    href: '/application-mobile',
    icon: Smartphone,
  },
  {
    title: 'Conception de Plateformes SaaS',
    desc: 'Logiciels cloud multi-tenants, facturation Stripe et API REST.',
    href: '/developpement-saas',
    icon: Cloud,
  },
  {
    title: 'Logiciels Métier Sur-Mesure',
    desc: 'Remplacement de tableurs Excel et outils de gestion internes.',
    href: '/solutions-metier',
    icon: Cpu,
  },
  {
    title: 'Automatisation des Processus',
    desc: 'Suppression des doubles saisies et synchronisation via API.',
    href: '/automatisation',
    icon: Workflow,
  },
  {
    title: 'Sécurité & Hébergement Souverain',
    desc: 'Serveurs sécurisés ISO 27001 en France et conformité RGPD.',
    href: '/securite-et-conformite',
    icon: ShieldCheck,
  },
  {
    title: 'Socles & Templates Métiers',
    desc: 'Accélérateurs de déploiement personnalisables sous Next.js.',
    href: '/templates',
    icon: LayoutGrid,
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

  const isSolutionActive =
    pathname.startsWith('/developpement-web') ||
    pathname.startsWith('/application-mobile') ||
    pathname.startsWith('/developpement-saas') ||
    pathname.startsWith('/solutions-metier') ||
    pathname.startsWith('/automatisation') ||
    pathname.startsWith('/securite-et-conformite') ||
    pathname.startsWith('/services');

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
            className="relative z-10 shrink-0 flex items-center group"
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
                  isSolutionActive
                    ? 'text-white bg-white/5'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={solutionsDropdown}
                aria-haspopup="true"
              >
                <span>Expertises</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    solutionsDropdown ? 'rotate-180 text-primary-400' : 'text-neutral-400'
                  }`}
                />
              </button>

              {/* Mega-menu Dropdown */}
              {solutionsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-[540px] rounded-2xl bg-neutral-900/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl shadow-black/60 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Pôles d&apos;ingénierie logicielle
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/medico-social"
                        className="text-xs text-secondary-400 hover:text-secondary-300 font-medium inline-flex items-center gap-1"
                      >
                        <Building2 className="size-3" />
                        <span>Pôle Médico-Social</span>
                        <ArrowRight className="size-3" />
                      </Link>
                      <Link
                        href="/services"
                        className="text-xs text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-1"
                      >
                        <span>Tous les services</span>
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
                      href="/templates"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Socles & Templates Métiers →
                    </Link>
                    <Link
                      href="/realisations"
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Consulter les Réalisations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/medico-social"
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/medico-social'
                  ? 'text-white bg-white/5'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Médico-Social
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
            className="relative z-50 flex size-11 min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-[6px] rounded-xl lg:hidden text-white bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <span
              className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                openMenu ? 'translate-y-[8px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                openMenu ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                openMenu ? '-translate-y-[8px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-950/98 backdrop-blur-3xl transition-all duration-300 lg:hidden overflow-y-auto pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.5rem))] pb-[max(2.5rem,calc(env(safe-area-inset-bottom)+1.5rem))] px-5 sm:px-8 ${
          openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 max-w-md mx-auto">
          {/* Main Links */}
          <div className="space-y-1.5 border-b border-white/10 pb-5">
            {[
              { href: '/services', label: 'Nos Expertises & Services' },
              { href: '/medico-social', label: 'Pôle Médico-Social' },
              { href: '/realisations', label: 'Réalisations & Études de Cas' },
              { href: '/diagnostic-numerique', label: 'Diagnostic Numérique Gratuit' },
              { href: '/blog', label: 'Ressources & Guides' },
              { href: '/a-propos', label: 'L’Agence & Fondateur' },
            ].map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base sm:text-lg font-semibold transition-all active:scale-[0.99] ${
                    isActive
                      ? 'bg-primary-500/15 text-primary-300 border border-primary-500/30'
                      : 'text-neutral-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`size-4 transition-transform ${isActive ? 'text-primary-400 translate-x-0.5' : 'text-neutral-500'}`} />
                </Link>
              );
            })}
          </div>

          {/* Quick Solutions Submenu */}
          <div className="space-y-2.5">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block px-1">
              Solutions directes :
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {solutionItems.map((sol) => {
                const SolIcon = sol.icon;
                const isSolActive = pathname === sol.href || pathname.startsWith(sol.href);
                return (
                  <Link
                    key={sol.href}
                    href={sol.href}
                    className={`flex items-center gap-3 p-2.5 rounded-xl transition-all active:bg-white/10 ${
                      isSolActive
                        ? 'bg-primary-500/15 text-primary-300 border border-primary-500/30'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 shrink-0">
                      <SolIcon className="size-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium leading-tight">
                      {sol.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-primary-500/25 active:scale-[0.98] transition-transform"
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
