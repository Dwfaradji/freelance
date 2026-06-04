'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ImportLogo from '@/components/ui/Logo/importLogo';

const navLinks = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/templates', label: 'Templates' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/blog', label: 'Blog' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openMenu]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-bg/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Retour à l'accueil de DevEvoke"
            className="relative z-10 shrink-0"
          >
            <ImportLogo displayColor="colorS" />
          </Link>

          {/* Nav Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                    isActive
                      ? 'text-white'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-white/5" />
                  )}
                  <span className="relative">{link.label}</span>
                  <span className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-primary to-secondary-400 transition-all duration-300 ${
                    isActive ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* CTA Desktop */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Démarrer un projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Burger Mobile */}
          <button
            aria-label={openMenu ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={openMenu}
            onClick={() => setOpenMenu(!openMenu)}
            className="relative z-10 flex size-10 flex-col items-center justify-center gap-[5px] rounded-lg md:hidden"
          >
            <span className={`h-px w-6 bg-white transition-all duration-300 ${openMenu ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-white transition-all duration-300 ${openMenu ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-white transition-all duration-300 ${openMenu ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Menu Mobile — Full Screen */}
      <div className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
        openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`flex h-full flex-col items-center justify-center gap-2 transition-all duration-500 ${
          openMenu ? 'translate-y-0' : 'translate-y-8'
        }`}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-3xl font-bold text-white/60 hover:text-white transition-all duration-200 py-3 ${
                pathname === link.href ? '!text-white' : ''
              }`}
              style={{ transitionDelay: openMenu ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link href="/contact" className="btn-primary text-base">
              Démarrer un projet →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
