'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileText,
  Shield,
  Lock,
  Tag,
  ListOrdered,
  HelpCircle,
} from 'lucide-react';

const legalItems = [
  { href: '/cgv', label: 'Conditions Générales (CGV)', icon: FileText },
  { href: '/mentions-legal', label: 'Mentions Légales', icon: Shield },
  { href: '/politique-confidentialite', label: 'Confidentialité & RGPD', icon: Lock },
  { href: '/info-tarif', label: 'Barème & Tarifs', icon: Tag },
  { href: '/info-procedure', label: 'Méthodologie Projet', icon: ListOrdered },
  { href: '/foire-aux-questions', label: 'Foire Aux Questions', icon: HelpCircle },
];

export default function LegalNavSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 ${className}`}>
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/5 py-1">
        {legalItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 ${
                isActive
                  ? 'bg-primary-500/20 text-white border border-primary-500/40 shadow-sm'
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
