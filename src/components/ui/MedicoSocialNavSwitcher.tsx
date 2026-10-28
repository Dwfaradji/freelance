'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2,
  GraduationCap,
  Navigation,
  Briefcase,
  HeartPulse,
  Users,
  Car,
  FileSearch,
  Layers,
  Code2,
  Sparkles,
} from 'lucide-react';

const medicoSocialItems = [
  { href: '/medico-social', label: 'Pôle Médico-Social', icon: Building2 },
  { href: '/agence-digitale-medico-social', label: 'Agence Médico-Sociale', icon: Sparkles },
  { href: '/solutions-medico-social', label: 'Toutes les solutions', icon: Layers },
  { href: '/developpement-logiciel-medico-social', label: 'Logiciels Sur-Mesure', icon: Code2 },
  { href: '/solutions-medico-social/associations', label: 'Associations', icon: Users },
  { href: '/solutions-medico-social/ime', label: 'IME', icon: GraduationCap },
  { href: '/solutions-medico-social/sessad', label: 'SESSAD', icon: Navigation },
  { href: '/solutions-medico-social/esat', label: 'ESAT', icon: Briefcase },
  { href: '/solutions-medico-social/ehpad', label: 'EHPAD', icon: HeartPulse },
  { href: '/logiciel-gestion-vehicules-medico-social', label: 'Parc Auto ESMS', icon: Car },
  { href: '/diagnostic-numerique', label: 'Audit Gratuit', icon: FileSearch },
];

export default function MedicoSocialNavSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 ${className}`}>
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/5 py-1">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary-400 shrink-0 hidden md:inline mr-2">
          Secteurs :
        </span>
        {medicoSocialItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                isActive
                  ? 'bg-gradient-to-r from-secondary-500/25 to-primary-500/20 text-white border border-secondary-500/40 shadow-sm shadow-secondary-500/10'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon className={`size-3.5 ${isActive ? 'text-secondary-400' : 'text-neutral-500'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
