'use client';

import React from 'react';
import { DIMENSION_METADATA } from '@/lib/diagnostic/constants';
import { Dimension } from '@/lib/diagnostic/types';

interface MaturityRadarProps {
  dimensionScores: Record<Dimension, number>;
}

export default function MaturityRadar({ dimensionScores }: MaturityRadarProps) {
  const dimensions: Dimension[] = [
    'organization',
    'businessTools',
    'mobility',
    'data',
    'security',
    'management',
  ];

  const size = 360;
  const center = size / 2;
  const radius = 120;
  const angleStep = (Math.PI * 2) / dimensions.length;

  // Calcul des coordonnées d'un point selon l'angle et le pourcentage (0-100)
  const getCoordinates = (index: number, score: number) => {
    // Rotation de -PI/2 pour que le 1er axe pointe vers le haut
    const angle = index * angleStep - Math.PI / 2;
    const r = (score / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Coordonnées du polygone des scores
  const polygonPoints = dimensions
    .map((dim, i) => {
      const score = dimensionScores[dim] ?? 0;
      const { x, y } = getCoordinates(i, score);
      return `${x},${y}`;
    })
    .join(' ');

  // Cercles concentriques de repère (25%, 50%, 75%, 100%)
  const gridLevels = [25, 50, 75, 100];

  return (
    <div className="space-y-6">
      {/* Graphique Radar SVG */}
      <div className="relative flex items-center justify-center py-4">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full max-w-[340px] sm:max-w-[380px] h-auto overflow-visible select-none"
          aria-label="Graphique radar de maturité numérique"
          role="img"
        >
          <defs>
            <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
            </radialGradient>
          </defs>

          {/* Grille de fond (polygones concentriques) */}
          {gridLevels.map((level) => {
            const gridPoints = dimensions
              .map((_, i) => {
                const { x, y } = getCoordinates(i, level);
                return `${x},${y}`;
              })
              .join(' ');
            return (
              <polygon
                key={level}
                points={gridPoints}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
              />
            );
          })}

          {/* Axes reliant le centre aux sommets */}
          {dimensions.map((dim, i) => {
            const { x, y } = getCoordinates(i, 100);
            return (
              <line
                key={dim}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            );
          })}

          {/* Surface du score */}
          <polygon
            points={polygonPoints}
            fill="url(#radarGradient)"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="filter drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]"
          />

          {/* Points sur chaque sommet */}
          {dimensions.map((dim, i) => {
            const score = dimensionScores[dim] ?? 0;
            const { x, y } = getCoordinates(i, score);
            return (
              <circle
                key={dim}
                cx={x}
                cy={y}
                r="4.5"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="2"
              />
            );
          })}

          {/* Libellés des axes */}
          {dimensions.map((dim, i) => {
            const labelCoord = getCoordinates(i, 118);
            const score = dimensionScores[dim] ?? 0;
            const meta = DIMENSION_METADATA[dim];

            return (
              <g key={`label-${dim}`} transform={`translate(${labelCoord.x}, ${labelCoord.y})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-neutral-200 text-[11px] font-semibold"
                >
                  {meta.shortLabel}
                </text>
                <text
                  y="12"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-primary-400 text-[10px] font-bold font-mono"
                >
                  {score}/100
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tableau accessible sous le radar (Section 36) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-white/5">
        {dimensions.map((dim) => {
          const score = dimensionScores[dim] ?? 0;
          const meta = DIMENSION_METADATA[dim];

          let scoreColor = 'text-amber-400 bg-amber-400/10 border-amber-400/20';
          if (score >= 70) scoreColor = 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
          else if (score >= 45) scoreColor = 'text-primary-300 bg-primary-400/10 border-primary-400/20';

          return (
            <div
              key={dim}
              className="p-2.5 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center justify-between"
            >
              <span className="text-xs text-neutral-300 font-medium">{meta.shortLabel}</span>
              <span
                className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${scoreColor}`}
              >
                {score} / 100
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
