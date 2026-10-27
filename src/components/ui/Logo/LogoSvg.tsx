'use client';

import React, { useId } from 'react';

export interface ILogoSvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  animated?: boolean;
  viewBox?: string;
}

export default function LogoSVG({
  className = '',
  animated = true,
  viewBox = '270 120 560 560',
  ...props
}: ILogoSvgProps) {
  const reactId = useId();
  const id = `devevoke-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg
      id={id}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${animated ? 'group/svg' : ''} ${className}`}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        {/* Ombre portée subtile entre les entrelacs */}
        <filter id={`${id}-dropShadow`} x="-15%" y="-15%" width="135%" height="135%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#051329" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#38C6D9" floodOpacity="0.25" />
        </filter>

        <filter id={`${id}-innerShadowBevel`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="-2" dy="4" stdDeviation="4" floodColor="#04192E" floodOpacity="0.45" />
        </filter>

        {/* Dégradé principal de l'arche 'D' (Turquoise lumineux en haut vers Bleu Océan en bas) */}
        <linearGradient id={`${id}-dMainGrad`} x1="25%" y1="12%" x2="65%" y2="90%">
          <stop offset="0%" stopColor="#38C6D9" />
          <stop offset="28%" stopColor="#5FD9E6" />
          <stop offset="62%" stopColor="#2294B8" />
          <stop offset="100%" stopColor="#0E5A8A" />
        </linearGradient>

        {/* Dégradé du biseau supérieur/droit lumineux du 'D' */}
        <linearGradient id={`${id}-dLightBevel`} x1="20%" y1="10%" x2="80%" y2="85%">
          <stop offset="0%" stopColor="#8CF0F8" />
          <stop offset="45%" stopColor="#A8F7FC" />
          <stop offset="100%" stopColor="#2DA3C4" />
        </linearGradient>

        {/* Dégradé du biseau intérieur/sombre du 'D' */}
        <linearGradient id={`${id}-dDarkBevel`} x1="20%" y1="15%" x2="70%" y2="95%">
          <stop offset="0%" stopColor="#147491" />
          <stop offset="50%" stopColor="#0E5E82" />
          <stop offset="100%" stopColor="#083B66" />
        </linearGradient>

        {/* Dégradé de l'aile inférieure gauche du 'D' */}
        <linearGradient id={`${id}-dBottomWingGrad`} x1="75%" y1="10%" x2="15%" y2="95%">
          <stop offset="0%" stopColor="#64DCE8" />
          <stop offset="45%" stopColor="#289BBF" />
          <stop offset="100%" stopColor="#0F5F8C" />
        </linearGradient>

        {/* Dégradé de la branche supérieure du 'E' */}
        <linearGradient id={`${id}-eTopGrad`} x1="10%" y1="60%" x2="95%" y2="20%">
          <stop offset="0%" stopColor="#175A9E" />
          <stop offset="50%" stopColor="#2D82C9" />
          <stop offset="100%" stopColor="#48A4E8" />
        </linearGradient>

        {/* Biseau sombre branche supérieure du 'E' */}
        <linearGradient id={`${id}-eTopBevelDark`} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0B3569" />
          <stop offset="100%" stopColor="#1B5D9E" />
        </linearGradient>

        {/* Dégradé de la colonne gauche entrelacée du 'E' */}
        <linearGradient id={`${id}-eSpineGrad`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0D3C73" />
          <stop offset="50%" stopColor="#1E62A8" />
          <stop offset="100%" stopColor="#0B3162" />
        </linearGradient>

        {/* Dégradé de la barre centrale du 'E' (Cyan / Bleu vif) */}
        <linearGradient id={`${id}-eMidGrad`} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#1877A8" />
          <stop offset="35%" stopColor="#31A9CE" />
          <stop offset="100%" stopColor="#48C4E2" />
        </linearGradient>

        {/* Dégradé de la branche inférieure du 'E' (Bleu Roi profond / Marine) */}
        <linearGradient id={`${id}-eBotGrad`} x1="10%" y1="20%" x2="95%" y2="80%">
          <stop offset="0%" stopColor="#0D3B75" />
          <stop offset="55%" stopColor="#175299" />
          <stop offset="100%" stopColor="#1D63AE" />
        </linearGradient>

        {/* Biseau contour sombre du 'E' inférieur */}
        <linearGradient id={`${id}-eBotBevel`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#07234B" />
          <stop offset="100%" stopColor="#0D3B73" />
        </linearGradient>
      </defs>

      {/* Style avec micro-animations CSS modernes, lueur respirante et transitions 3D */}
      {animated && (
        <style>{`
          #${id} .devevoke-d {
            transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease;
            transform-origin: 550px 400px;
          }
          #${id} .devevoke-e {
            transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease;
            transform-origin: 550px 400px;
          }
          #${id} .devevoke-shine {
            animation: devevokeShine 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          #${id} .devevoke-glow-pulse {
            animation: devevokePulse 4.5s ease-in-out infinite;
          }
          /* Hover / Group-hover transitions */
          :hover > #${id} .devevoke-d,
          .group:hover #${id} .devevoke-d,
          #${id}:hover .devevoke-d {
            transform: translate(-3px, -3px) scale(1.025);
            filter: drop-shadow(0 0 16px rgba(95, 217, 230, 0.55));
          }
          :hover > #${id} .devevoke-e,
          .group:hover #${id} .devevoke-e,
          #${id}:hover .devevoke-e {
            transform: translate(2px, 2px) scale(0.985);
            filter: drop-shadow(0 0 10px rgba(45, 130, 201, 0.4));
          }
          @keyframes devevokePulse {
            0%, 100% {
              opacity: 0.75;
            }
            50% {
              opacity: 1;
              filter: drop-shadow(0 0 12px rgba(56, 198, 217, 0.45));
            }
          }
          @keyframes devevokeShine {
            0%, 75% {
              opacity: 0.8;
            }
            85% {
              opacity: 1;
              filter: brightness(1.25);
            }
            95%, 100% {
              opacity: 0.8;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            #${id} .devevoke-d,
            #${id} .devevoke-e,
            #${id} .devevoke-shine,
            #${id} .devevoke-glow-pulse {
              animation: none !important;
              transition: none !important;
              transform: none !important;
            }
          }
        `}</style>
      )}

      {/* =============================================================== */}
      {/* 1. ÉLÉMENTS DU 'E' SITUÉS EN ARRIÈRE-PLAN DU 'D'                */}
      {/* =============================================================== */}
      <g id={`${id}-E-group`} className={animated ? 'devevoke-e' : ''}>
        {/* Colonne verticale courbe du 'E' */}
        <g id={`${id}-E-left-spine`}>
          <path
            d="M 521 301 C 491 360, 491 440, 522 503 L 559 462 C 547 422, 547 375, 558 340 Z"
            fill="#092B5A"
          />
          <path
            d="M 526 312 C 502 365, 502 435, 527 491 L 550 465 C 538 424, 538 374, 549 338 Z"
            fill={`url(#${id}-eSpineGrad)`}
          />
          <path
            d="M 549 338 C 538 374, 538 424, 550 465 L 557 458 C 546 420, 546 376, 556 344 Z"
            fill="#3882C7"
            opacity="0.7"
          />
        </g>

        {/* Branche supérieure du 'E' */}
        <g id={`${id}-E-top-arm`}>
          <path
            d="M 559 243 C 596 218, 642 207, 698 207 L 789 207 C 789 246, 767 273, 725 273 L 668 273 C 638 273, 616 280, 601 291 Z"
            fill={`url(#${id}-eTopBevelDark)`}
          />
          <path
            d="M 559 243 C 596 218, 642 207, 698 207 L 789 207 L 777 219 L 696 219 C 644 219, 602 229, 571 251 Z"
            fill="#67B8F0"
            opacity="0.85"
            className={animated ? 'devevoke-shine' : ''}
          />
          <path
            d="M 571 251 C 602 229, 644 219, 696 219 L 776 219 C 772 245, 754 260, 722 260 L 666 260 C 636 260, 611 267, 593 279 Z"
            fill={`url(#${id}-eTopGrad)`}
          />
        </g>

        {/* Barre médiane horizontale du 'E' */}
        <g id={`${id}-E-middle-bar`}>
          <path
            d="M 618 363 L 754 363 C 754 404, 735 429, 696 429 L 621 429 Z"
            fill="#0E497A"
          />
          <path
            d="M 618 363 L 754 363 L 742 375 L 620 375 Z"
            fill="#67CFF0"
            opacity="0.85"
            className={animated ? 'devevoke-shine' : ''}
          />
          <path
            d="M 622 375 L 741 375 C 738 400, 723 416, 694 416 L 623 416 Z"
            fill={`url(#${id}-eMidGrad)`}
          />
          <path
            d="M 618 363 L 637 363 L 638 429 L 621 429 Z"
            fill="#07284F"
            opacity="0.45"
          />
        </g>

        {/* Branche inférieure du 'E' */}
        <g id={`${id}-E-bottom-arm`}>
          <path
            d="M 609 502 C 626 519, 650 528, 684 528 L 732 528 C 772 528, 795 554, 795 593 L 696 593 C 642 593, 599 580, 568 553 Z"
            fill={`url(#${id}-eBotBevel)`}
          />
          <path
            d="M 602 513 C 622 531, 648 540, 684 540 L 730 540 C 759 540, 776 557, 780 580 L 696 580 C 645 580, 606 568, 579 545 Z"
            fill={`url(#${id}-eBotGrad)`}
          />
          <path
            d="M 609 502 C 626 519, 650 528, 684 528 L 732 528 L 726 539 L 682 539 C 647 539, 621 529, 602 513 Z"
            fill="#347BC4"
            opacity="0.7"
          />
        </g>
      </g>

      {/* =============================================================== */}
      {/* 2. LETTRE 'D' AU PREMIER PLAN (AVEC BISEAUX 3D HAUTE PRÉCISION) */}
      {/* =============================================================== */}
      <g
        id={`${id}-D-foreground`}
        filter={`url(#${id}-dropShadow)`}
        className={`${animated ? 'devevoke-d' : ''}`}
      >
        {/* Corps global extérieur du 'D' (Base de biseau) */}
        <path
          d="M 308 207 L 442 207 C 554 207, 625 285, 625 400 C 625 515, 554 593, 442 593 L 310 593 C 312 486, 375 402, 488 361 L 486 427 C 428 450, 395 485, 382 529 L 440 529 C 517 529, 560 476, 560 400 C 560 324, 517 271, 440 271 L 382 271 C 396 308, 419 336, 455 354 L 397 383 C 339 346, 311 284, 308 207 Z"
          fill={`url(#${id}-dDarkBevel)`}
        />

        {/* Biseau supérieur et extérieur droit très lumineux (effet 3D glacé) */}
        <path
          d="M 308 207 L 442 207 C 554 207, 625 285, 625 400 C 625 468, 598 525, 550 559 L 541 547 C 586 515, 612 463, 612 400 C 612 292, 545 220, 442 220 L 321 220 Z"
          fill={`url(#${id}-dLightBevel)`}
          className={animated ? 'devevoke-glow-pulse' : ''}
        />

        {/* Biseau lumineux sur l'arête supérieure de l'aile basse du 'D' */}
        <path
          d="M 310 593 C 312 486, 375 402, 488 361 L 486 427 L 474 418 L 475 379 C 380 417, 326 492, 323 581 Z"
          fill={`url(#${id}-dLightBevel)`}
          className={animated ? 'devevoke-glow-pulse' : ''}
        />

        {/* Face principale biseautée de l'arche du 'D' et de l'aile supérieure */}
        <path
          d="M 322 220 L 442 220 C 546 220, 612 292, 612 400 C 612 508, 546 580, 442 580 L 323 580 C 326 492, 380 417, 475 379 L 474 416 C 414 442, 379 485, 366 542 L 440 542 C 526 542, 573 483, 573 400 C 573 317, 526 258, 440 258 L 365 258 C 380 303, 405 335, 437 353 L 398 370 C 349 337, 325 284, 322 220 Z"
          fill={`url(#${id}-dMainGrad)`}
        />

        {/* Nuance dédiée sur l'aile inférieure gauche pour reproduire le volume exact */}
        <path
          d="M 323 580 C 326 492, 380 417, 475 379 L 474 416 C 414 442, 379 485, 366 542 L 440 542 L 440 580 Z"
          fill={`url(#${id}-dBottomWingGrad)`}
          opacity="0.85"
        />

        {/* Filet lumineux de finition sur l'arête interne droite de la boucle du D */}
        <path
          d="M 440 542 C 526 542, 573 483, 573 400 C 573 317, 526 258, 440 258 L 440 264 C 521 264, 566 320, 566 400 C 566 480, 521 536, 440 536 Z"
          fill="#7CE8F5"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
