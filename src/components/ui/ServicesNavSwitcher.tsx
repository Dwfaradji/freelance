'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  Workflow,
  ShieldCheck,
  LayoutGrid,
  Layers,
} from 'lucide-react';

const services = [
  { href: '/services', label: 'Vue d’ensemble', icon: Layers },
  { href: '/developpement-web', label: 'Dév Web & Next.js', icon: Globe },
  { href: '/application-mobile', label: 'Apps Mobiles', icon: Smartphone },
  { href: '/developpement-saas', label: 'Plateformes SaaS', icon: Cloud },
  { href: '/solutions-metier', label: 'Logiciels Métier', icon: Cpu },
  { href: '/automatisation', label: 'Automatisation', icon: Workflow },
  { href: '/securite-et-conformite', label: 'Sécurité & RGPD', icon: ShieldCheck },
  { href: '/templates', label: 'Socles & Templates', icon: LayoutGrid },
];

export default function ServicesNavSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 ${className}`}>
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/5 py-1">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 shrink-0 hidden md:inline mr-2">
          Pôles :
        </span>
        {services.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                isActive
                  ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white border border-primary-500/40 shadow-sm shadow-primary-500/10'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon className={`size-3.5 ${isActive ? 'text-primary-400' : 'text-neutral-500'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
