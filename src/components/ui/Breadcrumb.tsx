'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  backHref?: string;
  backLabel?: string;
  backLink?: {
    href?: string;
    label?: string;
  };
  className?: string;
  showHomeIcon?: boolean;
}

export default function Breadcrumb({
  items,
  backLink,
  backHref: explicitBackHref,
  backLabel: explicitBackLabel,
  className = '',
  showHomeIcon = true,
}: BreadcrumbProps) {
  const router = useRouter();

  // Déduire un lien de retour intelligent si non précisé :
  // utilise le dernier élément avec un href dans la hiérarchie ou /
  const fallbackParent = items.length > 1 ? items[items.length - 2] : null;
  const backHref = explicitBackHref || backLink?.href || fallbackParent?.href || '/';
  const backLabel = explicitBackLabel || backLink?.label || (fallbackParent ? `Retour à ${fallbackParent.label}` : 'Retour');

  const handleBack = (e: React.MouseEvent) => {
    // Si l'utilisateur clique et qu'il y a un historique navigateur interne
    if (typeof window !== 'undefined' && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.devevoke.com/',
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.label,
        ...(item.href ? { item: item.href.startsWith('http') ? item.href : `https://www.devevoke.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />

      <nav
        aria-label="Fil d'Ariane et navigation retour"
        className={`w-full py-3.5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-neutral-400 ${className}`}
      >
        {/* Fil d'Ariane Desktop & Tablette */}
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {/* Racine Accueil */}
          <li className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors py-1 px-1.5 rounded-md hover:bg-white/5"
              title="Retour à l'accueil"
            >
              {showHomeIcon && <Home className="size-3.5 text-primary-400" />}
              <span className="hidden sm:inline">Accueil</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                <ChevronRight className="size-3.5 text-neutral-600 shrink-0" aria-hidden="true" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors py-1 px-1.5 rounded-md hover:bg-white/5 font-medium line-clamp-1 max-w-[140px] sm:max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className="text-neutral-200 font-semibold line-clamp-1 max-w-[180px] sm:max-w-[280px] md:max-w-none text-primary-300/90"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Bouton de retour tactile intelligent */}
        <div className="shrink-0">
          <Link
            href={backHref}
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/30 text-xs font-medium text-neutral-300 hover:text-white transition-all active:scale-95 group shadow-sm"
            title={backLabel}
          >
            <ArrowLeft className="size-3.5 text-primary-400 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden xs:inline">{backLabel}</span>
            <span className="xs:hidden">Retour</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
