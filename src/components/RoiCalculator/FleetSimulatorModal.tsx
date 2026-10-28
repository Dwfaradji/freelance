'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ADMIN_HOURS_PRESETS,
  FLEET_PROBLEMS,
  MAINTENANCE_PRESETS,
  MILEAGE_PRESETS,
  ORGANIZATION_OPTIONS,
} from '@/lib/roi/constants';
import {
  formatEstimatedCurrency,
} from '@/lib/roi/calculator';
import {
  FleetInputs,
  FleetProblemId,
  FullFleetSimulationResult,
} from '@/lib/roi/types';
import callApi from '@/utils/callApi';
import {
  EMAIL_VALIDATION_MESSAGES,
  validateProfessionalEmail,
} from '@/lib/validation/email';
import {
  AlertTriangle,
  ArrowRight,
  Calculator,
  Car,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Info,
  Minus,
  Plus,
  Printer,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import FleetSimulatorFooter from './FleetSimulatorFooter';
import FleetSimulatorHeader from './FleetSimulatorHeader';
import FleetSimulatorPrintable from './FleetSimulatorPrintable';
import SimulatorOptionCard from './SimulatorOptionCard';

export type SimulatorScreen =
  | 'intro'
  | 'step_vehicles'
  | 'step_mileage'
  | 'step_fuel'
  | 'step_maintenance'
  | 'step_admin_time'
  | 'step_management'
  | 'step_problems'
  | 'summary'
  | 'calculating'
  | 'results'
  | 'demo_form';

interface FleetSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputs: FleetInputs;
  onInputsChange: (updates: Partial<FleetInputs>) => void;
  selectedProblems: FleetProblemId[];
  onProblemsChange: (problems: FleetProblemId[]) => void;
  onReset: () => void;
  simulation: FullFleetSimulationResult;
}

export default function FleetSimulatorModal({
  isOpen,
  onClose,
  inputs,
  onInputsChange,
  selectedProblems,
  onProblemsChange,
  simulation,
}: FleetSimulatorModalProps) {
  const [screen, setScreen] = useState<SimulatorScreen>('intro');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [displaySavings, setDisplaySavings] = useState(0);

  // Formulaire démo / contact
  const [demoFirstName, setDemoFirstName] = useState('');
  const [demoLastName, setDemoLastName] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoOrg, setDemoOrg] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoWebsite, setDemoWebsite] = useState('');
  const [demoConsent, setDemoConsent] = useState(false);
  const [isSendingDemo, setIsSendingDemo] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoError, setDemoError] = useState<string | null>(null);
  const [demoFirstNameError, setDemoFirstNameError] = useState<string | null>(null);
  const [demoEmailError, setDemoEmailError] = useState<string | null>(null);
  const [demoConsentError, setDemoConsentError] = useState<string | null>(null);
  const sendingDemoRef = useRef(false);

  // Accordéon des hypothèses
  const [isAssumptionsOpen, setIsAssumptionsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Verrouillage du scroll d'arrière-plan
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Numérotation des étapes pour le header (1 à 7)
  const currentStepNumber = useMemo(() => {
    switch (screen) {
      case 'intro':
        return 1;
      case 'step_vehicles':
        return 1;
      case 'step_mileage':
        return 2;
      case 'step_fuel':
        return 3;
      case 'step_maintenance':
        return 4;
      case 'step_admin_time':
        return 5;
      case 'step_management':
        return 6;
      case 'step_problems':
        return 7;
      case 'summary':
      case 'calculating':
      case 'results':
      case 'demo_form':
      default:
        return 7;
    }
  }, [screen]);

  // Animation count-up des économies lors de l'accès aux résultats
  useEffect(() => {
    if (screen === 'results') {
      setDisplaySavings(0);
      const target = simulation.annualGrossSaving;
      const duration = 900;
      const steps = 30;
      const stepTime = duration / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setDisplaySavings(target);
          clearInterval(interval);
        } else {
          setDisplaySavings(Math.round(current));
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [screen, simulation.annualGrossSaving]);

  // Défilement automatique vers le haut
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [screen]);

  // Gestion de la fermeture
  const handleCloseRequest = useCallback(() => {
    if (screen === 'intro' || screen === 'results' || screen === 'demo_form') {
      onClose();
    } else {
      setShowExitConfirm(true);
    }
  }, [screen, onClose]);

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
    onClose();
  };

  // Gestion du clavier Escape
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

  // Navigation avant
  const goToNext = () => {
    setDirection('forward');
    switch (screen) {
      case 'intro':
        setScreen('step_vehicles');
        break;
      case 'step_vehicles':
        setScreen('step_mileage');
        break;
      case 'step_mileage':
        setScreen('step_fuel');
        break;
      case 'step_fuel':
        setScreen('step_maintenance');
        break;
      case 'step_maintenance':
        setScreen('step_admin_time');
        break;
      case 'step_admin_time':
        setScreen('step_management');
        break;
      case 'step_management':
        setScreen('step_problems');
        break;
      case 'step_problems':
        setScreen('summary');
        break;
      case 'summary':
        setScreen('calculating');
        break;
      case 'calculating':
        setScreen('results');
        break;
      case 'results':
        setScreen('demo_form');
        break;
      default:
        break;
    }
  };

  // Navigation arrière
  const goToPrev = () => {
    setDirection('backward');
    switch (screen) {
      case 'step_vehicles':
        setScreen('intro');
        break;
      case 'step_mileage':
        setScreen('step_vehicles');
        break;
      case 'step_fuel':
        setScreen('step_mileage');
        break;
      case 'step_maintenance':
        setScreen('step_fuel');
        break;
      case 'step_admin_time':
        setScreen('step_maintenance');
        break;
      case 'step_management':
        setScreen('step_admin_time');
        break;
      case 'step_problems':
        setScreen('step_management');
        break;
      case 'summary':
        setScreen('step_problems');
        break;
      case 'results':
        setScreen('summary');
        break;
      case 'demo_form':
        setScreen('results');
        break;
      default:
        break;
    }
  };

  // Auto-advance temporisé pour choix simples (280ms)
  const handleSelectWithAutoAdvance = (action: () => void) => {
    action();
    setTimeout(() => {
      goToNext();
    }, 280);
  };

  // Variantes d'animation slide
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

  // Déclencheur impression / enregistrement PDF
  const handlePrintPdf = () => {
    const originalTitle = document.title;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'visible';
    document.title = `simulation-gains-floticar-${inputs.vehicles}-vehicules`;
    window.print();
    document.title = originalTitle;
    document.body.style.overflow = originalOverflow;
  };

  // Soumission demande démo / lead
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sendingDemoRef.current) {
      return;
    }

    let hasValidationError = false;
    if (demoFirstName.trim().length < 2) {
      setDemoFirstNameError('Le prénom doit comporter au moins 2 caractères.');
      hasValidationError = true;
    } else {
      setDemoFirstNameError(null);
    }

    const emailValidation = validateProfessionalEmail(demoEmail);
    if (!emailValidation.isValid) {
      const msg =
        emailValidation.message || EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX;
      setDemoEmailError(msg);
      hasValidationError = true;
    } else {
      setDemoEmailError(null);
    }

    if (!demoConsent) {
      setDemoConsentError('Veuillez confirmer votre accord pour être recontacté.');
      hasValidationError = true;
    } else {
      setDemoConsentError(null);
    }

    if (hasValidationError) {
      setDemoError('Veuillez vérifier les champs obligatoires.');
      return;
    }

    sendingDemoRef.current = true;
    setIsSendingDemo(true);
    setDemoError(null);
    setDemoEmailError(null);

    try {
      const summaryContent = `
SIMULATION FLOTICAR — DEMANDE DE DÉMONSTRATION :
Véhicules : ${inputs.vehicles}
Kilométrage annuel : ${Math.round(inputs.annualKmPerVehicle)} km/vhc/an
Mode d'organisation : ${inputs.organizationType}
Temps admin déclaré : ${inputs.weeklyAdminHours} h/semaine
Problèmes cochés : ${selectedProblems.join(', ') || 'Aucun'}

RÉSULTATS DE LA SIMULATION :
Potentiel d'économies annuelles : ${simulation.annualGrossSaving} €/an (~${simulation.monthlyGrossSaving} €/mois)
Gain net annuel (après logiciel) : ${simulation.roi.annualNetGain} €/an
Seuil de rentabilité : ~${simulation.roi.paybackMonths} mois
Coût estimé Floticar : ${simulation.roi.annualSoftwareCost} €/an (${simulation.roi.monthlySoftwareCost} €/mois)
      `;

      const response = await callApi({
        url: '/api/contact',
        data: {
          firstname: demoFirstName.trim(),
          lastname: demoLastName.trim() || '',
          business: demoOrg.trim() || 'Structure non renseignée',
          email: emailValidation.normalizedEmail,
          phone: demoPhone.trim() || undefined,
          service: 'floticar_simulator_demo',
          content: summaryContent,
          website: demoWebsite,
        },
      });

      if (response && (response.status === 200 || response.data?.status === 200 || response.data?.success)) {
        setDemoSuccess(true);
      } else {
        const emailFieldErr = response?.data?.fieldErrors?.email?.[0];
        if (emailFieldErr) {
          setDemoEmailError(emailFieldErr);
        } else {
          setDemoError(
            response?.data?.error ||
              'Une erreur est survenue lors de l’envoi. Veuillez réessayer.'
          );
        }
      }
    } catch (err: any) {
      const serverError = err?.response?.data?.error;
      const fieldErrors = err?.response?.data?.fieldErrors;
      if (fieldErrors?.email?.[0]) {
        setDemoEmailError(fieldErrors.email[0]);
      } else {
        let detailedMsg = 'Impossible de transmettre la demande pour le moment.';
        if (serverError) {
          detailedMsg = serverError;
        } else if (fieldErrors && typeof fieldErrors === 'object') {
          detailedMsg = Object.values(fieldErrors).flat().join('. ');
        }
        setDemoError(detailedMsg);
      }
    } finally {
      sendingDemoRef.current = false;
      setIsSendingDemo(false);
    }
  };

  // Transition d'analyse automatique (800–1200ms)
  useEffect(() => {
    if (screen === 'calculating') {
      const timer = setTimeout(() => {
        setScreen('results');
      }, 1050);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  // Validation d'avancement
  const canGoNext = useMemo(() => {
    switch (screen) {
      case 'step_vehicles':
        return inputs.vehicles >= 1;
      case 'step_mileage':
        return inputs.annualKmPerVehicle > 0;
      case 'step_fuel':
      case 'step_maintenance':
      case 'step_admin_time':
      case 'step_management':
      case 'step_problems':
      case 'summary':
        return true;
      default:
        return true;
    }
  }, [screen, inputs]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none print:static print:inset-auto print:z-auto print:bg-transparent print:backdrop-blur-none print:p-0 print:m-0 print:block print:w-full print:h-auto"
    >
      {/* Fenêtre Modal : Large Desktop min(1100px), Plein écran Mobile 100dvh */}
      <div className="relative w-screen sm:w-[min(1100px,calc(100vw-32px))] h-[100dvh] sm:h-[min(820px,calc(100vh-32px))] bg-neutral-950 border-0 sm:border sm:border-secondary-500/30 rounded-none sm:rounded-[24px] shadow-2xl flex flex-col overflow-hidden text-left print:hidden">
        {/* HEADER FIXE */}
        <FleetSimulatorHeader
          currentStepNumber={currentStepNumber}
          totalStepsCount={7}
          onCloseRequest={handleCloseRequest}
          showCloseButton={screen !== 'calculating'}
        />

        {/* ZONE DE CONTENU SCROLLABLE CENTRÉE */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto px-5 sm:px-12 py-6 sm:py-8 flex flex-col justify-start relative z-10"
        >
          <AnimatePresence mode="wait" custom={direction}>
            {/* 0. ÉCRAN D'INTRODUCTION */}
            {screen === 'intro' && (
              <motion.div
                key="intro"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-2xl mx-auto text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 rounded-3xl bg-secondary-500/15 border border-secondary-500/30 text-secondary-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(14,165,233,0.2)]">
                  <Calculator className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary-400 font-semibold px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20">
                    Outil d'évaluation interactive • Floticar
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Combien votre flotte pourrait-elle vous faire économiser ?
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
                    Estimez en quelques minutes les économies potentielles et le temps récupérable grâce à une gestion centralisée et moderne de vos véhicules.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 pt-2 text-left">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-neutral-200">Simulation gratuite</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-secondary-400 shrink-0" />
                    <span className="text-xs font-semibold text-neutral-200">Résultat immédiat</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-primary-400 shrink-0" />
                    <span className="text-xs font-semibold text-neutral-200">Aucun engagement</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={goToNext}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-secondary-500 hover:bg-secondary-400 text-white font-extrabold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-secondary-500/25 hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Calculer mes économies</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-[11px] text-neutral-400 mt-3">
                    Les résultats sont des estimations basées sur vos paramètres et des moyennes sectorielles documentées.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 1 : NOMBRE DE VÉHICULES */}
            {screen === 'step_vehicles' && (
              <motion.div
                key="step_vehicles"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    VOTRE FLOTTE
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Combien de véhicules gérez-vous ?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Véhicules de service, de fonction ou navettes actuellement gérés par votre structure.
                  </p>
                </div>

                {/* Sélecteur Numérique Premium */}
                <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-white/10 text-center space-y-6 shadow-xl">
                  <div className="flex items-center justify-center gap-6">
                    <button
                      type="button"
                      onClick={() => onInputsChange({ vehicles: Math.max(1, inputs.vehicles - 1) })}
                      disabled={inputs.vehicles <= 1}
                      aria-label="Diminuer le nombre de véhicules"
                      className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 disabled:opacity-30 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer text-lg font-bold"
                    >
                      <Minus className="w-5 h-5" />
                    </button>

                    <div className="min-w-[140px]">
                      <div className="text-5xl sm:text-6xl font-black text-white tracking-tight font-mono">
                        {inputs.vehicles}
                      </div>
                      <div className="text-xs text-secondary-400 font-semibold uppercase tracking-wider mt-1">
                        {inputs.vehicles > 1 ? 'Véhicules gérés' : 'Véhicule géré'}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onInputsChange({ vehicles: inputs.vehicles + 1 })}
                      aria-label="Augmenter le nombre de véhicules"
                      className="w-12 h-12 rounded-2xl bg-secondary-500/20 hover:bg-secondary-500/30 border border-secondary-500/40 text-secondary-300 flex items-center justify-center transition-all cursor-pointer text-lg font-bold"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slider fluide d'ajustement */}
                  <div className="space-y-2 pt-2">
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={inputs.vehicles}
                      onChange={(e) => onInputsChange({ vehicles: Number(e.target.value) })}
                      className="w-full accent-secondary-400 cursor-pointer h-2 bg-white/10 rounded-lg"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                      <span>1 véhicule</span>
                      <span>25</span>
                      <span>50</span>
                      <span>100+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 2 : KILOMÉTRAGE */}
            {screen === 'step_mileage' && (
              <motion.div
                key="step_mileage"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    USAGE & DÉPLACEMENTS
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Combien de kilomètres votre flotte parcourt-elle par an ?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Kilométrage moyen par véhicule ou cumul annuel global.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {MILEAGE_PRESETS.map((preset) => {
                    const isSelected = inputs.annualKmPerVehicle === preset.value;
                    return (
                      <SimulatorOptionCard
                        key={preset.id}
                        label={preset.label}
                        description={preset.hint}
                        selected={isSelected}
                        onClick={() =>
                          handleSelectWithAutoAdvance(() =>
                            onInputsChange({ annualKmPerVehicle: preset.value })
                          )
                        }
                      />
                    );
                  })}
                </div>

                {/* Saisie libre précise */}
                <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-center justify-between gap-4">
                  <span className="text-xs text-neutral-300 font-medium">
                    Ou saisissez une valeur précise :
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1000}
                      step={500}
                      value={inputs.annualKmPerVehicle}
                      onChange={(e) =>
                        onInputsChange({ annualKmPerVehicle: Math.max(0, Number(e.target.value)) })
                      }
                      className="w-28 px-3 py-1.5 rounded-xl bg-black/40 border border-white/20 text-white font-mono text-sm text-right focus:outline-none focus:border-secondary-400"
                    />
                    <span className="text-xs text-neutral-400">km / an</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 3 : CARBURANT */}
            {screen === 'step_fuel' && (
              <motion.div
                key="step_fuel"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    BUDGETS & DÉPENSES
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Quel est votre budget carburant annuel ?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Dépense globale de carburant pour l’ensemble de vos {inputs.vehicles} véhicules.
                  </p>
                </div>

                {/* Option 1 : Je ne connais pas mon budget */}
                <SimulatorOptionCard
                  label="Je ne connais pas mon budget précis"
                  description="Calculer automatiquement une estimation basée sur vos kilomètres, une consommation de 7 L/100km et un carburant à 1,80 €/L."
                  badge="Estimation auto"
                  selected={inputs.fuelCalculationMode === 'estimated'}
                  onClick={() =>
                    handleSelectWithAutoAdvance(() =>
                      onInputsChange({
                        fuelCalculationMode: 'estimated',
                        annualFuelBudget: undefined,
                      })
                    )
                  }
                />

                {/* Option 2 : Saisie directe du budget connu */}
                <div
                  className={`p-5 rounded-2xl border transition-all ${
                    inputs.fuelCalculationMode === 'known'
                      ? 'bg-secondary-500/10 border-secondary-400/80 shadow-md'
                      : 'bg-neutral-900/60 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <span className="text-sm font-bold text-white block">
                        J'ai un budget annuel identifié
                      </span>
                      <span className="text-xs text-neutral-400">
                        Indiquez votre dépense annuelle réelle
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onInputsChange({
                          fuelCalculationMode: 'known',
                          annualFuelBudget: inputs.annualFuelBudget ?? 15000,
                        })
                      }
                      className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold text-secondary-300 hover:bg-white/20"
                    >
                      Saisir
                    </button>
                  </div>

                  {inputs.fuelCalculationMode === 'known' && (
                    <div className="pt-2 flex items-center gap-3">
                      <input
                        type="number"
                        min={0}
                        step={500}
                        value={inputs.annualFuelBudget ?? 15000}
                        onChange={(e) =>
                          onInputsChange({
                            fuelCalculationMode: 'known',
                            annualFuelBudget: Math.max(0, Number(e.target.value)),
                          })
                        }
                        className="flex-1 px-4 py-2.5 rounded-xl bg-black/50 border border-white/20 text-white font-mono text-base focus:outline-none focus:border-secondary-400 text-right"
                      />
                      <span className="text-sm font-semibold text-white">€ / an</span>
                    </div>
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-neutral-400 flex items-center gap-2">
                  <Info className="w-4 h-4 text-secondary-400 shrink-0" />
                  <span>
                    Si vous ne le connaissez pas, le simulateur utilisera automatiquement une valeur représentative de {Math.round(simulation.currentCost.fuel).toLocaleString('fr-FR')} €/an.
                  </span>
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 4 : ENTRETIEN */}
            {screen === 'step_maintenance' && (
              <motion.div
                key="step_maintenance"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    BUDGETS & MAINTENANCE
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Combien dépensez-vous environ en entretien par an ?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Révisions, vidanges, pneumatiques, réparations et contrôles techniques.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <SimulatorOptionCard
                    label="Je ne sais pas exactement"
                    description={`Calculer automatiquement sur la base de 450 € / véhicule / an (~${(inputs.vehicles * 450).toLocaleString('fr-FR')} € / an pour ${inputs.vehicles} véhicules).`}
                    badge="Estimation auto"
                    selected={!inputs.isMaintenanceCustom}
                    onClick={() =>
                      handleSelectWithAutoAdvance(() =>
                        onInputsChange({
                          annualMaintenanceBudget: inputs.vehicles * 450,
                          isMaintenanceCustom: false,
                        })
                      )
                    }
                  />

                  {MAINTENANCE_PRESETS.map((preset) => {
                    const isSelected =
                      inputs.isMaintenanceCustom && inputs.annualMaintenanceBudget === preset.value;
                    return (
                      <SimulatorOptionCard
                        key={preset.id}
                        label={preset.label}
                        description={preset.hint}
                        selected={isSelected}
                        onClick={() =>
                          handleSelectWithAutoAdvance(() =>
                            onInputsChange({
                              annualMaintenanceBudget: preset.value,
                              isMaintenanceCustom: true,
                            })
                          )
                        }
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 5 : TEMPS ADMINISTRATIF */}
            {screen === 'step_admin_time' && (
              <motion.div
                key="step_admin_time"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    TEMPS & PROCESSUS
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Combien de temps consacrez-vous chaque semaine au suivi de flotte ?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Relevé des kilomètres, vérification des carnets, contrôles techniques, factures carburant, relances conducteurs...
                  </p>
                </div>

                <div className="space-y-2.5">
                  {ADMIN_HOURS_PRESETS.map((preset) => {
                    const isSelected = inputs.weeklyAdminHours === preset.hours;
                    return (
                      <SimulatorOptionCard
                        key={preset.id}
                        label={preset.label}
                        description={preset.hint}
                        selected={isSelected}
                        onClick={() =>
                          handleSelectWithAutoAdvance(() =>
                            onInputsChange({ weeklyAdminHours: preset.hours })
                          )
                        }
                      />
                    );
                  })}
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center text-[11px] text-neutral-400">
                  Temps valorisé sur une hypothèse de salaire chargé de {inputs.hourlyCost} € / heure.
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 6 : GESTION ACTUELLE */}
            {screen === 'step_management' && (
              <motion.div
                key="step_management"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    ORGANISATION ACTUELLE
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Comment gérez-vous actuellement votre flotte ?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Cette donnée permet de mesurer précisément l'écart avec une gestion centralisée.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {ORGANIZATION_OPTIONS.map((opt) => {
                    const isSelected = inputs.organizationType === opt.value;
                    return (
                      <SimulatorOptionCard
                        key={opt.value}
                        label={opt.label}
                        description={opt.hint}
                        badge={opt.badge}
                        selected={isSelected}
                        onClick={() =>
                          handleSelectWithAutoAdvance(() =>
                            onInputsChange({ organizationType: opt.value })
                          )
                        }
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ÉTAPE 7 : PROBLÈMES RENCONTRÉS (CHOIX MULTIPLE) */}
            {screen === 'step_problems' && (
              <motion.div
                key="step_problems"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-2xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    DIFFICULTÉS DU TERRAIN
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Quels sont vos principaux problèmes aujourd'hui ?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Sélectionnez jusqu'à 3 à 5 difficultés récurrentes (facultatif).
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {FLEET_PROBLEMS.map((prob) => {
                    const isSelected = selectedProblems.includes(prob.id);
                    return (
                      <SimulatorOptionCard
                        key={prob.id}
                        label={prob.label}
                        description={prob.description}
                        selected={isSelected}
                        isMultiSelect
                        onClick={() => {
                          if (prob.id === 'none') {
                            onProblemsChange(['none']);
                          } else {
                            const withoutNone = selectedProblems.filter((p) => p !== 'none');
                            if (isSelected) {
                              onProblemsChange(withoutNone.filter((p) => p !== prob.id));
                            } else {
                              if (withoutNone.length < 5) {
                                onProblemsChange([...withoutNone, prob.id]);
                              }
                            }
                          }
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* RÉCAPITULATIF : VÉRIFIEZ VOTRE SIMULATION */}
            {screen === 'summary' && (
              <motion.div
                key="summary"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="text-center space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-secondary-400 font-mono font-semibold">
                    VÉRIFICATION
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                    Vérifiez votre simulation
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Vous pouvez modifier chaque paramètre avant de générer votre estimation.
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-3xl bg-neutral-900/80 border border-white/10 space-y-3.5 divide-y divide-white/5">
                  {/* Ligne 1 : Véhicules */}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <div>
                      <span className="text-xs text-neutral-400 block">Flotte gérée</span>
                      <span className="text-sm font-bold text-white">
                        {inputs.vehicles} véhicule{inputs.vehicles > 1 ? 's' : ''}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen('step_vehicles')}
                      className="text-xs font-semibold text-secondary-400 hover:text-secondary-300 cursor-pointer"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 2 : Kilomètres */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="text-xs text-neutral-400 block">Kilométrage annuel</span>
                      <span className="text-sm font-bold text-white">
                        {Math.round(inputs.annualKmPerVehicle).toLocaleString('fr-FR')} km / vhc / an
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen('step_mileage')}
                      className="text-xs font-semibold text-secondary-400 hover:text-secondary-300 cursor-pointer"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 3 : Carburant */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="text-xs text-neutral-400 block">Budget carburant</span>
                      <span className="text-sm font-bold text-white">
                        {simulation.isFuelEstimated
                          ? `~${simulation.currentCost.fuel.toLocaleString('fr-FR')} € (estimé)`
                          : `${(inputs.annualFuelBudget ?? 0).toLocaleString('fr-FR')} € (déclaré)`}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen('step_fuel')}
                      className="text-xs font-semibold text-secondary-400 hover:text-secondary-300 cursor-pointer"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 4 : Entretien */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="text-xs text-neutral-400 block">Entretien & réparations</span>
                      <span className="text-sm font-bold text-white">
                        {simulation.isMaintenanceEstimated
                          ? `~${simulation.currentCost.maintenance.toLocaleString('fr-FR')} € (estimé)`
                          : `${inputs.annualMaintenanceBudget.toLocaleString('fr-FR')} € (déclaré)`}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen('step_maintenance')}
                      className="text-xs font-semibold text-secondary-400 hover:text-secondary-300 cursor-pointer"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 5 : Temps administratif */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="text-xs text-neutral-400 block">Suivi administratif</span>
                      <span className="text-sm font-bold text-white">
                        {inputs.weeklyAdminHours} h / semaine
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen('step_admin_time')}
                      className="text-xs font-semibold text-secondary-400 hover:text-secondary-300 cursor-pointer"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Ligne 6 : Organisation */}
                  <div className="flex items-center justify-between gap-4 pt-3.5">
                    <div>
                      <span className="text-xs text-neutral-400 block">Gestion actuelle</span>
                      <span className="text-sm font-bold text-white">
                        {ORGANIZATION_OPTIONS.find((o) => o.value === inputs.organizationType)?.label}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setScreen('step_management')}
                      className="text-xs font-semibold text-secondary-400 hover:text-secondary-300 cursor-pointer"
                    >
                      Modifier
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={goToNext}
                    className="w-full py-4 rounded-2xl bg-secondary-500 hover:bg-secondary-400 text-white font-extrabold text-base transition-all shadow-xl shadow-secondary-500/20 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Lancer le calcul économique</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ÉCRAN DE CALCUL INTERMÉDIAIRE (800-1100ms) */}
            {screen === 'calculating' && (
              <motion.div
                key="calculating"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="my-auto max-w-md mx-auto text-center space-y-6 py-12"
              >
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-secondary-500/20 animate-ping" />
                  <div className="w-20 h-20 rounded-full border-4 border-secondary-400 border-t-transparent animate-spin flex items-center justify-center">
                    <Car className="w-8 h-8 text-secondary-400 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Analyse de votre flotte...
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                    Nous comparons votre situation actuelle avec nos modélisations d’optimisation sectorielles.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Modélisation des coûts d'exploitation et carburant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Calcul du temps administratif valorisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Projection du retour sur investissement Floticar</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ÉCRAN DES RÉSULTATS */}
            {screen === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 py-4 max-w-4xl mx-auto w-full"
              >
                {/* 1. HERO DES GAINS POTENTIELS */}
                <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-secondary-500/15 via-neutral-900 to-neutral-900 border border-secondary-500/30 text-center relative overflow-hidden shadow-2xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-500/15 border border-secondary-500/30 text-secondary-300 text-xs font-mono font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Simulation économique personnalisée</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-200">
                    Votre potentiel d'économies estimé
                  </h3>

                  <div className="space-y-1">
                    <div className="text-4xl sm:text-7xl font-black text-white tracking-tight font-mono">
                      +{displaySavings.toLocaleString('fr-FR')} €
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-secondary-300">
                      par an (≈ {simulation.monthlyGrossSaving.toLocaleString('fr-FR')} € / mois)
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 max-w-lg mx-auto">
                    Estimation basée sur {inputs.vehicles} véhicules et les hypothèses réalistes du simulateur. Soit environ {simulation.savingPerVehicle.toLocaleString('fr-FR')} € d'économies brutes par véhicule et par an.
                  </p>

                  {/* Indice de confiance */}
                  <div className="pt-2 flex items-center justify-center gap-2 text-xs">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        simulation.confidence === 'high'
                          ? 'bg-emerald-400'
                          : simulation.confidence === 'medium'
                          ? 'bg-amber-400'
                          : 'bg-sky-400'
                      }`}
                    />
                    <span className="text-neutral-300 font-medium">
                      Indice de confiance :{' '}
                      {simulation.confidence === 'high'
                        ? '🟢 Précis (budgets réels)'
                        : simulation.confidence === 'medium'
                        ? '🟠 Modéré (semi-estimé)'
                        : '🔵 Indicatif (moyennes secteur)'}
                    </span>
                  </div>
                </div>

                {/* 2. SYNTHÈSE NARRATIVE SUR-MESURE */}
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                  « {simulation.personalizedNarrative} »
                </div>

                {/* 3. COMPARAISON DES 3 SCÉNARIOS (GRAPHIQUE / CARTES) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Comparaison des niveaux de gestion
                    </h4>
                    <span className="text-xs text-neutral-400">Coûts annuels comparés</span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {/* Scénario 1 : Actuel */}
                    <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-neutral-300 uppercase">
                          {simulation.scenarios.current.title}
                        </span>
                      </div>
                      <div className="text-2xl font-black text-white font-mono">
                        {simulation.scenarios.current.cost.toLocaleString('fr-FR')} €
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        Coût estimé actuel avec votre organisation actuelle.
                      </p>
                    </div>

                    {/* Scénario 2 : Optimisé (Recommandé) */}
                    <div className="p-4 rounded-2xl bg-secondary-500/10 border border-secondary-500/40 space-y-2 relative shadow-lg">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-secondary-300 uppercase">
                          {simulation.scenarios.optimized.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary-500/20 text-secondary-300 font-bold">
                          Recommandé
                        </span>
                      </div>
                      <div className="text-2xl font-black text-white font-mono">
                        {simulation.scenarios.optimized.cost.toLocaleString('fr-FR')} €
                      </div>
                      <div className="text-xs font-bold text-emerald-400">
                        Économie : +{simulation.scenarios.optimized.saving.toLocaleString('fr-FR')} € / an
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        Adoption standard des processus digitaux Floticar.
                      </p>
                    </div>

                    {/* Scénario 3 : Automatisé */}
                    <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-neutral-300 uppercase">
                          {simulation.scenarios.automated.title}
                        </span>
                      </div>
                      <div className="text-2xl font-black text-white font-mono">
                        {simulation.scenarios.automated.cost.toLocaleString('fr-FR')} €
                      </div>
                      <div className="text-xs font-bold text-emerald-400">
                        Potentiel : +{simulation.scenarios.automated.saving.toLocaleString('fr-FR')} € / an
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        Déploiement maximal avec automatisation complète.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. D'OÙ VIENNENT VOS ÉCONOMIES (DÉCOMPOSITION) */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    D'où proviennent vos économies ?
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-1">
                      <span className="text-[11px] text-neutral-400 font-semibold uppercase block">
                        Temps administratif
                      </span>
                      <div className="text-xl font-black text-secondary-400 font-mono">
                        +{simulation.breakdown.admin.toLocaleString('fr-FR')} €
                      </div>
                      <p className="text-[11px] text-neutral-400">
                        Saisie mobile QR code et carnets papier supprimés.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-1">
                      <span className="text-[11px] text-neutral-400 font-semibold uppercase block">
                        Carburant
                      </span>
                      <div className="text-xl font-black text-secondary-400 font-mono">
                        +{simulation.breakdown.fuel.toLocaleString('fr-FR')} €
                      </div>
                      <p className="text-[11px] text-neutral-400">
                        Contrôle des dérives et suivi régulier des tournées.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-1">
                      <span className="text-[11px] text-neutral-400 font-semibold uppercase block">
                        Entretien
                      </span>
                      <div className="text-xl font-black text-secondary-400 font-mono">
                        +{simulation.breakdown.maintenance.toLocaleString('fr-FR')} €
                      </div>
                      <p className="text-[11px] text-neutral-400">
                        Respect des vidanges et anticipation des réparations.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-1">
                      <span className="text-[11px] text-neutral-400 font-semibold uppercase block">
                        Pertes & Oublis
                      </span>
                      <div className="text-xl font-black text-secondary-400 font-mono">
                        +{simulation.breakdown.incidentsAndLosses.toLocaleString('fr-FR')} €
                      </div>
                      <p className="text-[11px] text-neutral-400">
                        Alertes contrôles techniques et moins d’immobilisations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. RETOUR SUR INVESTISSEMENT FLOTICAR (ROI) */}
                <div className="p-6 rounded-3xl bg-neutral-900/90 border border-secondary-500/30 space-y-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Votre retour sur investissement potentiel
                      </h4>
                      <p className="text-xs text-neutral-400">
                        Calculé sur la tarification standard de référence Floticar (15 € HT / véhicule / mois).
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-secondary-300 px-3 py-1 rounded-full bg-secondary-500/15 border border-secondary-500/30">
                      Amorti en ~{simulation.roi.paybackMonths} mois
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
                    <div className="p-2.5 sm:p-3 bg-black/40 rounded-2xl border border-white/5">
                      <span className="text-[10px] sm:text-[11px] text-neutral-400 block mb-0.5">Investissement logiciel</span>
                      <span className="text-xs sm:text-base md:text-lg font-bold text-white font-mono break-words">
                        {simulation.roi.annualSoftwareCost.toLocaleString('fr-FR')} € / an
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-neutral-500 block">({simulation.roi.monthlySoftwareCost} €/mois)</span>
                    </div>

                    <div className="p-2.5 sm:p-3 bg-black/40 rounded-2xl border border-white/5">
                      <span className="text-[10px] sm:text-[11px] text-neutral-400 block mb-0.5">Économies brutes</span>
                      <span className="text-xs sm:text-base md:text-lg font-bold text-white font-mono break-words">
                        +{simulation.annualGrossSaving.toLocaleString('fr-FR')} €
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-neutral-500 block">estimées / an</span>
                    </div>

                    <div className="p-2.5 sm:p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
                      <span className="text-[10px] sm:text-[11px] text-emerald-300 block mb-0.5">Gain net potentiel</span>
                      <span className="text-xs sm:text-base md:text-lg font-bold text-emerald-400 font-mono break-words">
                        +{simulation.roi.annualNetGain.toLocaleString('fr-FR')} €
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-emerald-300/80 block">après coût logiciel</span>
                    </div>

                    <div className="p-2.5 sm:p-3 bg-secondary-500/10 rounded-2xl border border-secondary-500/30">
                      <span className="text-[10px] sm:text-[11px] text-secondary-300 block mb-0.5">ROI estimé</span>
                      <span className="text-xs sm:text-base md:text-lg font-bold text-secondary-400 font-mono break-words">
                        +{simulation.roi.roiPercent} %
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-secondary-300/80 block">sur 12 mois</span>
                    </div>
                  </div>
                </div>

                {/* 6. TOP 3 PRIORITÉS D'ACTION */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Les leviers qui pourraient avoir le plus d'impact
                  </h4>
                  <div className="space-y-2.5">
                    {simulation.priorities.map((item) => (
                      <div
                        key={item.number}
                        className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-secondary-500/20 text-secondary-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                              {item.number}
                            </span>
                            <span className="text-sm font-bold text-white">{item.title}</span>
                          </div>
                          <span className="text-[10px] font-semibold text-secondary-300 px-2.5 py-0.5 rounded-full bg-secondary-500/15 border border-secondary-500/30 shrink-0">
                            Impact {item.impact} • {item.horizon}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                        <p className="text-xs text-secondary-200 font-medium">
                          <strong>Action conseillée :</strong> {item.action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. TRANSPARENCE DES HYPOTHÈSES (ACCORDÉON) */}
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-900/60">
                  <button
                    type="button"
                    onClick={() => setIsAssumptionsOpen(!isAssumptionsOpen)}
                    className="w-full p-4 flex items-center justify-between text-left text-xs font-bold text-neutral-300 hover:text-white cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-secondary-400" />
                      <span>Comment cette estimation est-elle calculée ? (Transparence des hypothèses)</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform ${
                        isAssumptionsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isAssumptionsOpen && (
                    <div className="p-4 pt-0 space-y-3 text-xs text-neutral-300 border-t border-white/5 divide-y divide-white/5">
                      {simulation.assumptions.map((ass) => (
                        <div key={ass.id} className="pt-2.5 first:pt-0">
                          <div className="flex justify-between items-center mb-0.5">
                            <strong className="text-white">{ass.label}</strong>
                            <span className="font-mono text-secondary-400 font-semibold">{ass.value}</span>
                          </div>
                          <p className="text-neutral-400 text-[11px]">{ass.description}</p>
                          <span className="text-[10px] text-neutral-500 block italic mt-0.5">
                            Source : {ass.source}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 8. ACTIONS ET CTA FINAL */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setScreen('summary')}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Modifier mes données</span>
                  </button>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handlePrintPdf}
                      className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Printer className="w-4 h-4 text-secondary-400" />
                      <span>Exporter en PDF</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScreen('demo_form')}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-secondary-500 hover:bg-secondary-400 text-white text-xs font-bold transition-all shadow-lg shadow-secondary-500/25 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Demander une démo 14 jours</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FORMULAIRE DÉMO ET RAPPORT (SLIDE INTERNE DANS LA MODAL) */}
            {screen === 'demo_form' && (
              <motion.div
                key="demo_form"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="my-auto max-w-xl mx-auto w-full space-y-6 py-4"
              >
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setScreen('results')}
                    className="text-xs text-neutral-400 hover:text-white cursor-pointer"
                  >
                    ← Revenir aux résultats
                  </button>
                  <span className="text-xs font-mono text-secondary-400">
                    Gain estimé : +{simulation.annualGrossSaving.toLocaleString('fr-FR')} € / an
                  </span>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-500/15 border border-secondary-500/30 text-secondary-400 flex items-center justify-center mx-auto">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Testez Floticar gratuitement pendant 14 jours
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                    Recevez une démonstration personnalisée basée sur vos {inputs.vehicles} véhicules et votre potentiel d'économies de {simulation.annualGrossSaving.toLocaleString('fr-FR')} € / an.
                  </p>
                </div>

                {demoSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center text-emerald-300 space-y-3">
                    <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
                    <h4 className="text-lg font-bold text-white">Demande bien reçue !</h4>
                    <p className="text-xs text-emerald-200/90 leading-relaxed">
                      Un responsable produit Floticar vous recontactera sous 24h ouvrées pour vous ouvrir votre espace de test 14 jours sans aucun engagement.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handlePrintPdf}
                        className="btn-outline text-xs px-4 py-2 inline-flex items-center gap-2 cursor-pointer"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Télécharger mon rapport PDF</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleDemoSubmit} noValidate className="space-y-4 text-left">
                    {demoError && (
                      <div role="alert" className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                        {demoError}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sim-demo-firstname" className="text-xs text-neutral-300 font-semibold mb-1 block">
                          Prénom *
                        </label>
                        <input
                          id="sim-demo-firstname"
                          type="text"
                          required
                          aria-invalid={Boolean(demoFirstNameError)}
                          value={demoFirstName}
                          onChange={(e) => {
                            setDemoFirstName(e.target.value);
                            if (demoFirstNameError) setDemoFirstNameError(null);
                          }}
                          placeholder="Jean"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-secondary-400"
                        />
                        {demoFirstNameError && (
                          <span role="alert" className="text-red-400 text-xs mt-1 block">
                            {demoFirstNameError}
                          </span>
                        )}
                      </div>
                      <div>
                        <label htmlFor="sim-demo-lastname" className="text-xs text-neutral-300 font-semibold mb-1 block">
                          Nom
                        </label>
                        <input
                          id="sim-demo-lastname"
                          type="text"
                          value={demoLastName}
                          onChange={(e) => setDemoLastName(e.target.value)}
                          placeholder="Dupont"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-secondary-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="sim-demo-org" className="text-xs text-neutral-300 font-semibold mb-1 block">
                          Organisation / Structure
                        </label>
                        <input
                          id="sim-demo-org"
                          type="text"
                          value={demoOrg}
                          onChange={(e) => setDemoOrg(e.target.value)}
                          placeholder="Association / IME / EHPAD"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-secondary-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="sim-demo-phone" className="text-xs text-neutral-300 font-semibold mb-1 block">
                          Téléphone
                        </label>
                        <input
                          id="sim-demo-phone"
                          type="tel"
                          value={demoPhone}
                          onChange={(e) => setDemoPhone(e.target.value)}
                          placeholder="06 XX XX XX XX"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-secondary-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="sim-demo-email" className="text-xs text-neutral-300 font-semibold mb-1 block">
                        Email professionnel *
                      </label>
                      <input
                        id="sim-demo-email"
                        type="email"
                        inputMode="email"
                        required
                        aria-invalid={Boolean(demoEmailError)}
                        aria-describedby={
                          demoEmailError ? 'sim-demo-email-error' : undefined
                        }
                        value={demoEmail}
                        onChange={(e) => {
                          setDemoEmail(e.target.value);
                          if (demoEmailError) setDemoEmailError(null);
                          if (demoError) setDemoError(null);
                        }}
                        onBlur={() => {
                          if (demoEmail.trim()) {
                            const check = validateProfessionalEmail(demoEmail);
                            setDemoEmailError(check.isValid ? null : (check.message ?? null));
                          }
                        }}
                        placeholder="jean.dupont@association.fr"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-secondary-400"
                      />
                      {demoEmailError && (
                        <span
                          id="sim-demo-email-error"
                          role="alert"
                          className="text-red-400 text-xs mt-1 block"
                        >
                          {demoEmailError}
                        </span>
                      )}
                    </div>

                    {/* Honeypot anti-spam (invisible pour les humains, appât pour bots) */}
                    <input
                      type="text"
                      name="website"
                      value={demoWebsite}
                      onChange={(e) => setDemoWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="opacity-0 absolute -left-[9999px] w-1 h-1 pointer-events-none"
                      aria-hidden="true"
                    />

                    <div className="pt-1">
                      <label htmlFor="sim-demo-consent" className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          id="sim-demo-consent"
                          type="checkbox"
                          required
                          aria-invalid={Boolean(demoConsentError)}
                          checked={demoConsent}
                          onChange={(e) => {
                            setDemoConsent(e.target.checked);
                            if (demoConsentError) setDemoConsentError(null);
                          }}
                          className="mt-0.5 accent-secondary-500 rounded"
                        />
                        <span className="text-[11px] text-neutral-400 leading-snug">
                          J'accepte d'être recontacté(e) pour planifier une démonstration de Floticar et recevoir ma simulation détaillée. Aucune donnée n'est cédée à des tiers.
                        </span>
                      </label>
                      {demoConsentError && (
                        <span role="alert" className="text-red-400 text-xs mt-1 block">
                          {demoConsentError}
                        </span>
                      )}
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        type="submit"
                        disabled={isSendingDemo}
                        className={`flex-1 py-3 rounded-xl bg-secondary-500 hover:bg-secondary-400 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-secondary-500/20 flex items-center justify-center gap-2 duration-200 ${
                          isSendingDemo
                            ? 'opacity-70 cursor-wait'
                            : 'cursor-pointer hover:shadow-secondary-500/30'
                        }`}
                      >
                        {isSendingDemo ? (
                          <span>Envoi en cours...</span>
                        ) : (
                          <>
                            <span>Demander ma démo gratuite (14 jours)</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER FIXE DE NAVIGATION */}
        {screen !== 'intro' &&
          screen !== 'calculating' &&
          screen !== 'results' &&
          screen !== 'demo_form' && (
            <FleetSimulatorFooter
              onPrev={goToPrev}
              onNext={goToNext}
              canGoPrev={screen !== 'step_vehicles'}
              canGoNext={canGoNext}
              nextLabel={screen === 'summary' ? 'Calculer mes économies' : 'Continuer'}
              estimatedTimeLeft={
                screen === 'summary'
                  ? 'Prêt pour le calcul'
                  : currentStepNumber <= 3
                  ? '≈ 2 min restantes'
                  : 'Dernières étapes'
              }
            />
          )}
      </div>

      {/* CONFIRMATION D'ABANDON */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in print:hidden">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full space-y-4 text-center shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Quitter le simulateur ?</h4>
              <p className="text-xs text-neutral-400">
                Vos paramètres en cours seront perdus si vous fermez maintenant.
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

      {/* RAPPORT IMPRIMABLE (AFFICHÉ EXCLUSIVEMENT EN @media print) */}
      <FleetSimulatorPrintable simulation={simulation} />
    </div>,
    document.body
  );
}
