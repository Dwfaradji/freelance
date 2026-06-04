'use client';
import React from 'react';
import Link from 'next/link';
import { FacebookOutlined, LinkedIn, X, GitHub } from '@mui/icons-material';
import Image from 'next/image';
import logo from '@/images/logocv.svg';

const footerLinks = {
  'Agence': [
    { href: '/a-propos', label: 'À propos' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/templates', label: 'Templates' },
    { href: '/blog', label: 'Blog' },
  ],
  'Services': [
    { href: '/services', label: 'Sites Web' },
    { href: '/services', label: 'Applications Mobile' },
    { href: '/services', label: 'Référencement SEO' },
    { href: '/services', label: 'Hébergement' },
  ],
  'Légal': [
    { href: '/info-procedure', label: 'Notre Processus' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/foire-aux-questions', label: 'FAQ' },
    { href: '/mentions-legal', label: 'Mentions légales' },
    { href: '/politique-confidentialite', label: 'Confidentialité' },
  ],
};

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=100094324716136',
    label: 'Facebook',
    icon: <FacebookOutlined fontSize="small" />,
  },
  {
    href: 'https://github.com/Dwfaradji',
    label: 'GitHub',
    icon: <GitHub fontSize="small" />,
  },
  {
    href: 'https://www.linkedin.com/company/devevoke/',
    label: 'LinkedIn',
    icon: <LinkedIn fontSize="small" />,
  },
  {
    href: 'https://twitter.com/DevEvoke',
    label: 'Twitter / X',
    icon: <X fontSize="small" />,
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border bg-bg">
      {/* Trait dégradé en haut */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="DevEvoke">
              <Image
                src={logo}
                alt="DevEvoke"
                width={120}
                height={40}
                className="mb-4 opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm text-muted leading-relaxed">
              Agence web & mobile à Perpignan. Nous transformons vos idées en
              expériences digitales sur mesure, modernes et performantes.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-all duration-200 hover:border-primary/40 hover:text-primary-400 hover:bg-primary/5"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Liens par colonne */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-light">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barre du bas */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} DevEvoke — Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="/mentions-legal" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
