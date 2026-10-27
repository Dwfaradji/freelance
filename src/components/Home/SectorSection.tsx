import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Calendar,
  Layers,
} from 'lucide-react';

const featuredStructures = [
  {
    sigle: 'SESSAD & IME',
    badge: 'Enfance & Éducation Nomade',
    title: 'Outils mobiles et coordination pluridisciplinaire',
    desc: 'Des applications sur tablette et smartphone pensées pour les éducateurs et rééducateurs en tournée, avec saisie rapide de comptes-rendus et mode hors-ligne sans réseau.',
    image: '/images/home/sessad_field_educator.jpg',
    alt: 'Éducatrice spécialisée en intervention auprès d’un jeune en atelier d’apprentissage',
    tag: 'Mode Déconnecté',
    href: '/solutions-medico-social/sessad',
  },
  {
    sigle: 'ESAT',
    badge: 'Travail Protégé & Ateliers',
    title: 'Pilotage de production & suivi des travailleurs',
    desc: 'Un logiciel sur-mesure pour planifier les ateliers (bois, espaces verts, conditionnement), éditer les devis et consolider le suivi des projets personnalisés sans alourdir les moniteurs.',
    image: '/images/home/esat_workshop_activity.jpg',
    alt: 'Travailleurs et moniteur d’atelier en ESAT consultant un planning de production',
    tag: 'Gestion d’Ateliers',
    href: '/solutions-medico-social/esat',
  },
  {
    sigle: 'EHPAD & Résidences',
    badge: 'Grand Âge & Transmissions',
    title: 'Portail usagers, familles et transmissions sécurisées',
    desc: 'Espaces numériques intuitifs pour fluidifier les transmissions entre équipes jour/nuit et partager en toute transparence la vie de l’établissement avec les familles.',
    image: '/images/home/ehpad_coordination_life.jpg',
    alt: 'Animatrice en EHPAD partageant une activité sur tablette avec une résidente dans un salon lumineux',
    tag: 'Lien Familles',
    href: '/solutions-medico-social/ehpad',
  },
];

const otherEstablishments = [
  {
    sigle: 'FAM & MAS',
    title: 'Foyers & Maisons d’Accueil Spécialisées',
    focus: 'Organisation du quotidien des résidents, astreintes et traçabilité des interventions.',
    href: '/medico-social',
  },
  {
    sigle: 'Associations Multi-Sites',
    title: 'Associations Gestionnaires',
    focus: 'Centralisation des données, reporting de gouvernance et pilotage consolidé multi-établissements.',
    href: '/solutions-medico-social/associations',
  },
  {
    sigle: 'Gestion de Parc',
    title: 'Flotte Automobile Associative',
    focus: 'Suivi par QR code, dématérialisation des carnets de bord et alertes de maintenance (Floticar).',
    href: '/realisations',
  },
];

export default function SectorSection() {
  return (
    <section className="py-28 bg-neutral-900/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">
            <Building2 className="size-3.5" />
            Pôle Sectoriel d’Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Une expertise éprouvée dans le médico-social & associatif
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Parce que les contraintes humaines et réglementaires du médico-social exigent une rigueur d’ingénierie absolue, DevEvoke y a développé un savoir-faire approfondi pour simplifier le quotidien des établissements.
          </p>
        </div>

        {/* 3 Featured Photographic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredStructures.map((struct, idx) => (
            <Link
              key={idx}
              href={struct.href}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/80 hover:border-primary-500/40 transition-all duration-500 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* Photo Header */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={struct.image}
                  alt={struct.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.92] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent pointer-events-none" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-neutral-950/80 border border-white/15 px-3 py-1 rounded-full text-[11px] font-semibold text-primary-300">
                  {struct.sigle}
                </div>

                <div className="absolute top-4 right-4 backdrop-blur-md bg-primary-950/80 border border-primary-500/30 px-3 py-1 rounded-full text-[10px] font-mono text-emerald-300">
                  {struct.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary-400 block">
                    {struct.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors leading-snug">
                    {struct.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {struct.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-primary-400 group-hover:text-white transition-colors">
                  <span>Découvrir les solutions adaptées</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Establishments Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherEstablishments.map((est, idx) => (
            <Link
              key={idx}
              href={est.href}
              className="card-modern group flex flex-col justify-between hover:border-primary-500/40 text-left p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold font-mono text-primary-400">
                    {est.sigle}
                  </span>
                  <ArrowRight className="size-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-primary-300 transition-colors">
                  {est.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {est.focus}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-white/5 text-[11px] font-medium text-primary-400">
                Consulter les cas d&apos;usage →
              </div>
            </Link>
          ))}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
            <span>
              Toutes les données associatives sont hébergées sur des serveurs souverains en France et chiffrées selon les préconisations CNIL.
            </span>
          </div>
          <Link
            href="/medico-social"
            className="text-white hover:text-primary-300 font-semibold whitespace-nowrap"
          >
            Explorer notre hub médico-social complet →
          </Link>
        </div>

      </div>
    </section>
  );
}
