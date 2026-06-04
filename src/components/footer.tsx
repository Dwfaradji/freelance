'use client';
import React from 'react';
import Link from 'next/link';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import LinkedIn from '@mui/icons-material/LinkedIn';
import X from '@mui/icons-material/X';
import GitHub from '@mui/icons-material/GitHub';
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
    { href: '/cgv', label: 'CGV' },
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
    <footer className="relative mt-24 border-t border-white/5 bg-gradient-to-b from-transparent to-primary-500/5">
      {/* Glow background pour l'aspect premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-primary-500/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="DevEvoke" className="inline-block mb-6">
              <Image
                src={logo}
                alt="DevEvoke"
                width={140}
                height={46}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="mb-8 max-w-sm text-base text-muted-light leading-relaxed">
              Agence web & mobile à Perpignan. Nous transformons vos idées en
              expériences digitales sur mesure, modernes et performantes.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 hover:text-primary-400 hover:bg-primary-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Liens par colonne */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                {title}
              </h3>
              <ul className="space-y-4">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-base text-muted hover:text-primary-300 hover:translate-x-1 inline-block transition-all duration-200"
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
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">DevEvoke</span>. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <Link href="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
            <Link href="/mentions-legal" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
