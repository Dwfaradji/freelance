'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  DIAGNOSTIC_DISCLAIMER,
  FLEET_OPTIONS,
  MOBILITY_OPTIONS,
  SITE_OPTIONS,
  SIZE_OPTIONS,
  STRUCTURE_OPTIONS,
} from '@/lib/diagnostic/constants';
import { getActiveQuestions } from '@/lib/diagnostic/questions';
import {
  DiagnosticReport,
  FleetSize,
  MobilityLevel,
  OrganizationProfile,
  OrganizationSize,
  SiteCount,
  StructureType,
} from '@/lib/diagnostic/types';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Printer,
  RotateCcw,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import DiagnosticAnalyzing from './DiagnosticAnalyzing';
import DiagnosticFooter from './DiagnosticFooter';
import DiagnosticHeader from './DiagnosticHeader';
import DiagnosticReportForm from './DiagnosticReportForm';
import OptionCard from './OptionCard';
import MaturityRadar from './Results/MaturityRadar';
import PrintableReport from './Results/PrintableReport';

export type ModalScreen =
  | 'intro'
  | 'profile_structure'
  | 'profile_size'
  | 'profile_sites'
  | 'profile_mobility'
  | 'profile_fleet'
  | 'question'
  | 'analyzing'
  | 'results'
  | 'report';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: OrganizationProfile;
  onProfileChange: (updates: Partial<OrganizationProfile>) => void;
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, optionId: string) => void;
  onReset: () => void;
  report: DiagnosticReport;
}

export default function DiagnosticModal({
  isOpen,
  onClose,
  profile,
  onProfileChange,
  answers,
  onAnswerChange,
  onReset,
  report,
}: DiagnosticModalProps) {
  const [screen, setScreen] = useState<ModalScreen>('intro');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [displayScore, setDisplayScore] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloquer le défilement de la page sous la modal
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Questions actives selon profil
  const activeQuestions = useMemo(() => {
    return getActiveQuestions(profile);
  }, [profile]);

  // Si le diagnostic est déjà intégralement complété à l'ouverture ("Consulter mes résultats"),
  // afficher directement l'écran de résultats.
  useEffect(() => {
    if (
      isOpen &&
      screen === 'intro' &&
      activeQuestions.length > 0 &&
      activeQuestions.every((q) => Boolean(answers[q.id]))
    ) {
      setScreen('results');
    }
  }, [isOpen, screen, activeQuestions, answers]);

  // Détermination de la phase active pour le Header
  const currentPhaseKey = useMemo(() => {
    if (screen === 'intro') return 'profile';
    if (screen.startsWith('profile_')) return 'profile';
    if (screen === 'results') return 'results';
    if (screen === 'report') return 'report';

    const currentQ = activeQuestions[questionIndex];
    if (!currentQ || !currentQ.dimension) return 'organization';

    if (currentQ.dimension === 'organization') return 'organization';
    if (currentQ.dimension === 'businessTools') return 'businessTools';
    if (currentQ.dimension === 'mobility' || currentQ.dimension === 'data') return 'data';
    if (currentQ.dimension === 'security' || currentQ.dimension === 'management' || currentQ.dimension === 'fleet') {
      return 'security';
    }
    return 'organization';
  }, [screen, activeQuestions, questionIndex]);

  // Numéro d'étape et total pour la barre de progression
  const totalQuestionsCount = activeQuestions.length;
  const currentStepNumber = useMemo(() => {
    if (screen === 'intro') return 1;
    if (screen === 'profile_structure') return 1;
    if (screen === 'profile_size') return 2;
    if (screen === 'profile_sites') return 3;
    if (screen === 'profile_mobility') return 4;
    if (screen === 'profile_fleet') return 5;
    if (screen === 'question') return 5 + questionIndex + 1;
    return 5 + totalQuestionsCount;
  }, [screen, questionIndex, totalQuestionsCount]);

  const totalStepsCount = 5 + totalQuestionsCount;

  // Calcul du temps restant estimé
  const estimatedTimeLeft = useMemo(() => {
    if (screen === 'intro' || screen.startsWith('profile_')) return '≈ 4 min restantes';
    const remaining = totalQuestionsCount - questionIndex;
    if (remaining > 12) return '≈ 3 min restantes';
    if (remaining > 6) return '≈ 2 min restantes';
    if (remaining > 2) return '≈ 1 min restante';
    return 'Dernières questions';
  }, [screen, totalQuestionsCount, questionIndex]);

  // Animation count-up du score lors de l'accès aux résultats
  useEffect(() => {
    if (screen === 'results') {
      setDisplayScore(0);
      const target = report.globalScore;
      const duration = 900;
      const steps = 30;
      const stepTime = duration / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setDisplayScore(target);
          clearInterval(interval);
        } else {
          setDisplayScore(Math.round(current));
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [screen, report.globalScore]);

  // Scroll vers le haut lors de chaque changement d'écran
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [screen, questionIndex]);

  // Demande de fermeture
  const handleCloseRequest = React.useCallback(() => {
    if (screen === 'intro' || screen === 'results' || screen === 'report') {
      onClose();
    } else {
      setShowExitConfirm(true);
    }
  }, [screen, onClose]);

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
    onClose();
  };

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        handleCloseRequest();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleCloseRequest]);

  if (!isOpen || !mounted) return null;

  // Navigation vers l'avant
  const goToNext = () => {
    setDirection('forward');
    if (screen === 'intro') {
      setScreen('profile_structure');
    } else if (screen === 'profile_structure') {
      setScreen('profile_size');
    } else if (screen === 'profile_size') {
      setScreen('profile_sites');
    } else if (screen === 'profile_sites') {
      setScreen('profile_mobility');
    } else if (screen === 'profile_mobility') {
      setScreen('profile_fleet');
    } else if (screen === 'profile_fleet') {
      setScreen('question');
      setQuestionIndex(0);
    } else if (screen === 'question') {
      if (questionIndex < activeQuestions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
      } else {
        setScreen('analyzing');
      }
    }
  };

  // Navigation vers l'arrière
  const goToPrev = () => {
    setDirection('backward');
    if (screen === 'profile_structure') {
      setScreen('intro');
    } else if (screen === 'profile_size') {
      setScreen('profile_structure');
    } else if (screen === 'profile_sites') {
      setScreen('profile_size');
    } else if (screen === 'profile_mobility') {
      setScreen('profile_sites');
    } else if (screen === 'profile_fleet') {
      setScreen('profile_mobility');
    } else if (screen === 'question') {
      if (questionIndex > 0) {
        setQuestionIndex((prev) => prev - 1);
      } else {
        setScreen('profile_fleet');
      }
    } else if (screen === 'report') {
      setScreen('results');
    }
  };

  // Sélection d'une option avec auto-advance temporisé (280ms)
  const handleSelectOptionWithAutoAdvance = (action: () => void) => {
    action();
    setTimeout(() => {
      goToNext();
    }, 280);
  };

  // Slide animation variants (forward / backward)
  const slideVariants = {
    enter: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? -50 : 50,
      opacity: 0,
    }),
  };

  const currentQ = activeQuestions[questionIndex] ?? activeQuestions[0];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none print:static print:inset-auto print:z-auto print:bg-transparent print:backdrop-blur-none print:p-0 print:m-0 print:block print:w-full print:h-auto"
    >
      {/* Fenêtre Modal : Large Desktop min(1100px), Plein écran Mobile 100dvh */}
      <div className="relative w-screen sm:w-[min(1100px,calc(100vw-32px))] h-[100dvh] sm:h-[min(820px,calc(100vh-32px))] bg-neutral-950 border-0 sm:border sm:border-primary-500/30 rounded-none sm:rounded-[24px] shadow-2xl flex flex-col overflow-hidden text-left print:hidden">
        {/* HEADER FIXE */}
        <DiagnosticHeader
          currentStepNumber={currentStepNumber}
          totalStepsCount={totalStepsCount}
          currentPhaseKey={currentPhaseKey}
          onCloseRequest={handleCloseRequest}
          showCloseButton={screen !== 'analyzing'}
        />

        {/* ZONE DE CONTENU SCROLLABLE CENTRÉE */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-5 sm:px-12 py-6 sm:py-8 flex flex-col justify-start relative z-10"
        >
          <AnimatePresence mode="wait" custom={direction}>
            {/* 1. ÉCRAN D'INTRODUCTION */}
            {screen === 'intro' && (
              <motion.div
                key="intro"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-2xl mx-auto text-center space-y-6"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-primary-600 to-cyan-400 p-0.5 shadow-xl shadow-primary-500/25">
                  <div className="w-full h-full bg-neutral-950 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-primary-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    Auto-évaluation médico-sociale
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    Évaluez votre maturité numérique
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg mx-auto">
                    Répondez à quelques questions pour identifier vos forces, vos points de vigilance et vos priorités numériques.
                  </p>
                </div>

                {/* 3 Bénéfices */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left py-2">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-primary-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">≈ 4 minutes</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Résultat personnalisé</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                    <Target className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Conseils concrets</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col items-center gap-3">
                  <button
                    type="button"
                    onClick={goToNext}
                    className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary-500/25 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Commencer le diagnostic</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-neutral-400">
                    Aucune donnée concernant les personnes accompagnées ne vous sera demandée.
                  </p>
                </div>
              </motion.div>
            )}

            {/* 2. ÉTAPES DE PROFIL (1 question à la fois) */}
            {screen === 'profile_structure' && (
              <motion.div
                key="profile_structure"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-2xl mx-auto w-full space-y-6"
              >
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    Profil de votre organisation • 1 / 5
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Quel type d'établissement ou association représentez-vous ?
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Cette information permet de calibrer nos conseils selon vos contraintes légales. (0 point).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STRUCTURE_OPTIONS.map((opt, idx) => (
                    <OptionCard
                      key={opt.value}
                      id={opt.value}
                      label={opt.label}
                      detail={opt.hint}
                      isSelected={profile.structureType === opt.value}
                      indexKey={idx + 1}
                      onSelect={() =>
                        handleSelectOptionWithAutoAdvance(() =>
                          onProfileChange({ structureType: opt.value as StructureType })
                        )
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {screen === 'profile_size' && (
              <motion.div
                key="profile_size"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6"
              >
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    Profil de votre organisation • 2 / 5
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Combien de professionnels travaillent dans votre structure ?
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Effectif global soignants, éducateurs et administratifs.
                  </p>
                </div>

                <div className="space-y-3">
                  {SIZE_OPTIONS.map((opt, idx) => (
                    <OptionCard
                      key={opt.value}
                      id={opt.value}
                      label={opt.label}
                      isSelected={profile.size === opt.value}
                      indexKey={idx + 1}
                      onSelect={() =>
                        handleSelectOptionWithAutoAdvance(() =>
                          onProfileChange({ size: opt.value as OrganizationSize })
                        )
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {screen === 'profile_sites' && (
              <motion.div
                key="profile_sites"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6"
              >
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    Profil de votre organisation • 3 / 5
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Combien de sites ou établissements gérez-vous ?
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Établissements physiques, antennes ou dispositifs rattachés.
                  </p>
                </div>

                <div className="space-y-3">
                  {SITE_OPTIONS.map((opt, idx) => (
                    <OptionCard
                      key={opt.value}
                      id={opt.value}
                      label={opt.label}
                      isSelected={profile.siteCount === opt.value}
                      indexKey={idx + 1}
                      onSelect={() =>
                        handleSelectOptionWithAutoAdvance(() =>
                          onProfileChange({ siteCount: opt.value as SiteCount })
                        )
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {screen === 'profile_mobility' && (
              <motion.div
                key="profile_mobility"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6"
              >
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    Profil de votre organisation • 4 / 5
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Vos équipes interviennent-elles régulièrement en mobilité ?
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Visites à domicile, tournées, interventions extérieures.
                  </p>
                </div>

                <div className="space-y-3">
                  {MOBILITY_OPTIONS.map((opt, idx) => (
                    <OptionCard
                      key={opt.value}
                      id={opt.value}
                      label={opt.label}
                      detail={opt.hint}
                      isSelected={profile.mobility === opt.value}
                      indexKey={idx + 1}
                      onSelect={() =>
                        handleSelectOptionWithAutoAdvance(() =>
                          onProfileChange({ mobility: opt.value as MobilityLevel })
                        )
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {screen === 'profile_fleet' && (
              <motion.div
                key="profile_fleet"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6"
              >
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    Profil de votre organisation • 5 / 5
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Votre organisation gère-t-elle des véhicules de service ?
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Si « Non », les questions flotte seront automatiquement masquées.
                  </p>
                </div>

                <div className="space-y-3">
                  {FLEET_OPTIONS.map((opt, idx) => (
                    <OptionCard
                      key={opt.value}
                      id={opt.value}
                      label={opt.label}
                      isSelected={profile.fleet === opt.value}
                      indexKey={idx + 1}
                      onSelect={() =>
                        handleSelectOptionWithAutoAdvance(() =>
                          onProfileChange({ fleet: opt.value as FleetSize })
                        )
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* 3. QUESTIONNAIRE ÉVALUATION (1 QUESTION À LA FOIS) */}
            {screen === 'question' && currentQ && (
              <motion.div
                key={`q-${currentQ.id}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-2xl mx-auto w-full space-y-6"
              >
                {/* En-tête de la question */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                    {currentQ.dimension === 'fleet'
                      ? 'GESTION DE FLOTTE AUTOMOBILE'
                      : currentQ.dimension?.toUpperCase()}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                    {currentQ.label}
                  </h3>
                  {currentQ.subtitle && (
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {currentQ.subtitle}
                    </p>
                  )}
                </div>

                {/* Liste des options */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, idx) => {
                    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
                    return (
                      <OptionCard
                        key={opt.id}
                        id={opt.id}
                        label={opt.label}
                        detail={opt.detail}
                        badge={opt.isNotApplicable ? 'Optionnel' : undefined}
                        isSelected={answers[currentQ.id] === opt.id}
                        indexKey={letters[idx] ?? idx + 1}
                        onSelect={() =>
                          handleSelectOptionWithAutoAdvance(() =>
                            onAnswerChange(currentQ.id, opt.id)
                          )
                        }
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 4. ÉCRAN DE CALCUL INTERMÉDIAIRE (800-1100ms) */}
            {screen === 'analyzing' && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="my-auto w-full"
              >
                <DiagnosticAnalyzing onFinish={() => setScreen('results')} />
              </motion.div>
            )}

            {/* 5. RESTITUTION DES RÉSULTATS */}
            {screen === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full space-y-8 py-2"
              >
                {/* Bloc 1 : Score Global Animé */}
                <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-3 text-center md:text-left flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Diagnostic finalisé</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <h3 className="text-3xl sm:text-4xl font-black text-white">
                        {report.maturityLevel.label}
                      </h3>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${report.maturityLevel.color} text-black uppercase tracking-wider shadow`}
                      >
                        {report.maturityLevel.badge}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
                      {report.maturityLevel.description}
                    </p>

                    <div className="pt-2 text-xs text-neutral-400 italic border-t border-white/5 leading-relaxed">
                      « {report.customSynthesis} »
                    </div>
                  </div>

                  {/* Chiffre animé */}
                  <div className="shrink-0 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-neutral-900/90 border border-primary-500/30 shadow-2xl relative">
                    <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-emerald-400">
                      {displayScore}
                    </div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">
                      sur 100
                    </div>
                    <span className="text-[10px] text-primary-300 font-mono mt-1">
                      Score de maturité
                    </span>
                  </div>
                </div>

                {/* Bloc 2 : Profil Radar */}
                <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">Votre profil numérique</h4>
                      <p className="text-xs text-neutral-400">
                        Score détaillé sur les 6 dimensions clés
                      </p>
                    </div>
                  </div>
                  <MaturityRadar dimensionScores={report.dimensionScores} />
                </div>

                {/* Bloc 3 : Points Forts */}
                {report.strengths.length > 0 && (
                  <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-lg font-bold text-white">Vos points forts</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {report.strengths.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 rounded-2xl bg-white/[0.02] border border-emerald-500/20"
                        >
                          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{item.title}</span>
                          </div>
                          <p className="text-xs text-neutral-300 leading-snug">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bloc 4 : Points de Vigilance */}
                <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400" />
                      <h4 className="text-lg font-bold text-white">Points de vigilance</h4>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      {report.riskCounts.critical > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono text-[11px]">
                          🔴 {report.riskCounts.critical} critique{report.riskCounts.critical > 1 ? 's' : ''}
                        </span>
                      )}
                      {report.riskCounts.high > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[11px]">
                          🟠 {report.riskCounts.high} élevé{report.riskCounts.high > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {report.risks.slice(0, 4).map((risk) => (
                      <div
                        key={risk.id}
                        className="p-4 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-2 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-xs">{risk.title}</span>
                          <span
                            className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-full ${
                              risk.level === 'critical'
                                ? 'bg-rose-500/20 text-rose-300'
                                : 'bg-amber-500/20 text-amber-300'
                            }`}
                          >
                            {risk.level}
                          </span>
                        </div>
                        <p className="text-neutral-400 leading-relaxed text-[11px]">{risk.description}</p>
                        <p className="text-primary-300 font-medium text-[11px] pt-1 border-t border-white/5">
                          → {risk.recommendation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bloc 5 : Vos 3 Priorités */}
                <div className="glass rounded-3xl p-6 sm:p-8 border border-primary-500/30 space-y-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-400" />
                    <h4 className="text-lg font-bold text-white">Vos 3 priorités d'action</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {report.priorities.map((item, idx) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-neutral-900/80 border border-white/10 flex flex-col justify-between space-y-3"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="w-5 h-5 rounded-md bg-primary-500 text-white font-black text-xs flex items-center justify-center">
                              0{idx + 1}
                            </span>
                            <span className="text-[10px] font-mono text-primary-300 bg-primary-500/10 px-2 py-0.5 rounded">
                              {item.horizon}
                            </span>
                          </div>
                          <h5 className="font-bold text-white text-xs leading-snug mb-1">{item.title}</h5>
                          <p className="text-[11px] text-neutral-400 leading-relaxed">{item.description}</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-emerald-300">
                          {item.action}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bloc 6 : Actions rapides (Quick Wins) */}
                {report.quickWins.length > 0 && (
                  <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <h4 className="text-lg font-bold text-white">Actions rapides à fort impact</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {report.quickWins.map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-2xl bg-neutral-900/60 border border-white/10 text-xs"
                        >
                          <span className="text-[10px] font-mono text-amber-300 block mb-1">
                            Effort faible • 0–30 jours
                          </span>
                          <h5 className="font-bold text-white mb-1">{item.title}</h5>
                          <p className="text-[11px] text-neutral-400">{item.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bloc 7 : Roadmap Timeline (Horizontal desktop / Vertical mobile) */}
                <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <h4 className="text-lg font-bold text-white">Feuille de route séquentielle</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 rounded-2xl bg-neutral-900/60 border border-rose-500/20 space-y-2">
                      <span className="text-xs font-bold text-rose-300 block uppercase">30 JOURS</span>
                      <ul className="space-y-1.5 text-[11px] text-neutral-300">
                        {report.roadmap.thirtyDays.map((r) => (
                          <li key={r.id}>• {r.title}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/60 border border-primary-500/20 space-y-2">
                      <span className="text-xs font-bold text-primary-300 block uppercase">3 MOIS</span>
                      <ul className="space-y-1.5 text-[11px] text-neutral-300">
                        {report.roadmap.threeMonths.map((r) => (
                          <li key={r.id}>• {r.title}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/60 border border-emerald-500/20 space-y-2">
                      <span className="text-xs font-bold text-emerald-300 block uppercase">6 MOIS</span>
                      <ul className="space-y-1.5 text-[11px] text-neutral-300">
                        {report.roadmap.sixMonths.map((r) => (
                          <li key={r.id}>• {r.title}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bloc 8 : CTA Final */}
                <div className="glass rounded-3xl p-8 sm:p-10 border border-primary-500/40 text-center space-y-4">
                  <div className="max-w-xl mx-auto space-y-2">
                    <h4 className="text-2xl font-black text-white">
                      Vous souhaitez aller plus loin ?
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Nous pouvons vous aider à transformer ces priorités en solutions numériques concrètes et adaptées à votre organisation.
                    </p>
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setScreen('report')}
                        className="btn-primary w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Recevoir mon rapport détaillé</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const sanitizedOrg = (profile.name || 'etablissement').toLowerCase().replace(/[^a-z0-9]/g, '-');
                          document.title = `diagnostic-numerique-devevoke-${sanitizedOrg}`;
                          window.print();
                        }}
                        className="btn-outline w-full sm:w-auto px-5 py-3 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Imprimer / PDF</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[10px] text-neutral-400 text-center max-w-2xl mx-auto italic">
                  {DIAGNOSTIC_DISCLAIMER}
                </p>

                {/* Recommencer */}
                <div className="text-center pt-2 pb-4">
                  <button
                    type="button"
                    onClick={() => {
                      onReset();
                      setScreen('intro');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Recommencer un nouveau diagnostic</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* 6. RAPPORT FORMULAIRE (DANS LA MÊME MODAL) */}
            {screen === 'report' && (
              <DiagnosticReportForm
                report={report}
                onBackToResults={() => setScreen('results')}
                onClose={onClose}
              />
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER DE NAVIGATION FIXE (uniquement sur étapes de questions) */}
        {screen !== 'intro' && screen !== 'analyzing' && screen !== 'results' && screen !== 'report' && (
          <DiagnosticFooter
            onPrev={goToPrev}
            onNext={goToNext}
            canGoPrev={true}
            canGoNext={
              screen === 'profile_structure'
                ? Boolean(profile.structureType)
                : screen === 'profile_size'
                ? Boolean(profile.size)
                : screen === 'profile_sites'
                ? Boolean(profile.siteCount)
                : screen === 'profile_mobility'
                ? Boolean(profile.mobility)
                : screen === 'profile_fleet'
                ? Boolean(profile.fleet)
                : screen === 'question'
                ? Boolean(answers[currentQ?.id])
                : true
            }
            isLastQuestion={screen === 'question' && questionIndex === activeQuestions.length - 1}
            estimatedTimeLeft={estimatedTimeLeft}
          />
        )}
      </div>

      {/* CONFIRMATION DE FERMETURE EN COURS DE PARCOURS */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in print:hidden">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full space-y-4 text-center shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Quitter le diagnostic ?</h4>
              <p className="text-xs text-neutral-400">
                Votre progression en cours sera perdue si vous fermez maintenant.
              </p>
            </div>
            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="btn-primary flex-1 py-2 text-xs font-bold cursor-pointer"
              >
                Continuer
              </button>
              <button
                type="button"
                onClick={handleConfirmExit}
                className="flex-1 py-2 text-xs font-semibold rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white cursor-pointer transition-colors"
              >
                Quitter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VERSION IMPRIMABLE MASQUÉE À L'ÉCRAN (ACTIVE EN @media print) */}
      <PrintableReport report={report} />
    </div>,
    document.body
  );
}
