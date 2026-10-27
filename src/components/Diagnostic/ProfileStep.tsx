'use client';

import React from 'react';
import {
  FLEET_OPTIONS,
  MOBILITY_OPTIONS,
  SITE_OPTIONS,
  SIZE_OPTIONS,
  STRUCTURE_OPTIONS,
} from '@/lib/diagnostic/constants';
import {
  FleetSize,
  MobilityLevel,
  OrganizationProfile,
  OrganizationSize,
  SiteCount,
  StructureType,
} from '@/lib/diagnostic/types';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Car,
  Compass,
  Info,
  Layers,
  Smartphone,
  Users,
} from 'lucide-react';

interface ProfileStepProps {
  profile: OrganizationProfile;
  onChange: (updates: Partial<OrganizationProfile>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ProfileStep({
  profile,
  onChange,
  onNext,
  onBack,
}: ProfileStepProps) {
  const isComplete =
    Boolean(profile.structureType) &&
    Boolean(profile.size) &&
    Boolean(profile.siteCount) &&
    Boolean(profile.mobility) &&
    Boolean(profile.fleet);

  return (
    <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl space-y-8 relative overflow-hidden">
      {/* En-tête de cadrage */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs uppercase font-bold text-primary-400 tracking-wider flex items-center gap-1.5">
            <Compass className="w-4 h-4" />
            <span>Étape 1 sur 2 • Profil de votre organisation</span>
          </span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 font-mono">
            Non noté (0 pt)
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Contextualisons votre structure
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
          Ces éléments permettent d’adapter la pertinence des questions et recommandations à votre réalité de terrain. <strong className="text-white">Ils ne rapportent aucun point et n’impactent pas votre note de maturité.</strong>
        </p>
      </div>

      <div className="space-y-6">
        {/* Nom facultatif */}
        <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/10">
          <label className="block text-xs font-semibold text-white mb-1.5">
            Nom de votre structure ou association (optionnel) :
          </label>
          <input
            type="text"
            value={profile.name ?? ''}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Ex : Association Alpha, IME Les Chênes, EHPAD Saint-Jean..."
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>

        {/* 1. Type de structure */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <Building2 className="w-4 h-4 text-primary-400" />
            <span>1. Quel type d'établissement ou association représentez-vous ? *</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {STRUCTURE_OPTIONS.map((opt) => {
              const isSelected = profile.structureType === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ structureType: opt.value as StructureType })}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                    isSelected
                      ? 'bg-primary-500/20 border-primary-500 text-white shadow-md shadow-primary-500/10'
                      : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                    {opt.label}
                  </span>
                  <span className="text-[10px] text-neutral-400 leading-snug">
                    {opt.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Taille & 3. Nombre de sites */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-white">
              <Users className="w-4 h-4 text-primary-400" />
              <span>2. Combien de professionnels travaillent dans votre structure ? *</span>
            </label>
            <div className="space-y-1.5">
              {SIZE_OPTIONS.map((opt) => {
                const isSelected = profile.size === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onChange({ size: opt.value as OrganizationSize })}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary-500/20 border-primary-500 text-white font-semibold'
                        : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-white">
              <Layers className="w-4 h-4 text-primary-400" />
              <span>3. Combien de sites ou établissements gérez-vous ? *</span>
            </label>
            <div className="space-y-1.5">
              {SITE_OPTIONS.map((opt) => {
                const isSelected = profile.siteCount === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => onChange({ siteCount: opt.value as SiteCount })}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary-500/20 border-primary-500 text-white font-semibold'
                        : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Mobilité terrain */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-white">
            <Smartphone className="w-4 h-4 text-primary-400" />
            <span>4. Vos équipes interviennent-elles régulièrement en mobilité ou hors établissement ? *</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {MOBILITY_OPTIONS.map((opt) => {
              const isSelected = profile.mobility === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ mobility: opt.value as MobilityLevel })}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 ${
                    isSelected
                      ? 'bg-primary-500/20 border-primary-500 text-white shadow'
                      : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-neutral-200'}`}>
                    {opt.label}
                  </span>
                  <span className="text-[10px] text-neutral-400 leading-snug">
                    {opt.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Flotte automobile */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-semibold text-white">
              <Car className="w-4 h-4 text-primary-400" />
              <span>5. Votre organisation gère-t-elle des véhicules de service ? *</span>
            </label>
            <span className="text-[11px] text-neutral-400">Conditionne le module flotte</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {FLEET_OPTIONS.map((opt) => {
              const isSelected = profile.fleet === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ fleet: opt.value as FleetSize })}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer text-xs font-semibold ${
                    isSelected
                      ? 'bg-primary-500/20 border-primary-500 text-white shadow'
                      : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-neutral-400 flex items-start gap-1 mt-1">
            <Info className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
            <span>
              Si vous sélectionnez « Non », les questions spécifiques à la gestion automobile seront automatiquement retirées du parcours sans pénaliser votre score.
            </span>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </button>

        <button
          type="button"
          disabled={!isComplete}
          onClick={onNext}
          className="btn-primary px-6 py-3 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary-500/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <span>Accéder aux questions d'évaluation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
