'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BarChart3,
  Car,
  FileSpreadsheet,
  Building2,
  Lock,
  Mail,
  Send,
  RotateCcw,
} from 'lucide-react';
import callApi from '@/utils/callApi';

interface Question {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    points: number;
    detail: string;
    risk?: string;
  }[];
}

const questions: Question[] = [
  {
    id: 'structure',
    category: 'Votre Structure',
    title: 'Quel type d’établissement ou association représentez-vous ?',
    subtitle: 'Cette information permet de calibrer nos recommandations selon vos contraintes légales et opérationnelles.',
    options: [
      {
        label: 'Association gestionnaire multi-établissements',
        points: 20,
        detail: 'Plusieurs sites (IME, SESSAD, ESAT, FAM...) avec besoin de consolidation centrale.',
      },
      {
        label: 'IME / SESSAD / SAVS (Enfance & Services nomades)',
        points: 15,
        detail: 'Équipes éducatives souvent sur le terrain et gestion active de véhicules.',
      },
      {
        label: 'ESAT / Entreprise Adaptée (Travail protégé)',
        points: 15,
        detail: 'Activités de production, plannings d’ateliers, facturation et suivi médico-social.',
      },
      {
        label: 'EHPAD / MAS / FAM / Foyer d’hébergement',
        points: 15,
        detail: 'Accueil permanent, continuité des soins 24h/24, transmissions soignantes.',
      },
      {
        label: 'Autre structure sociale ou médico-sociale',
        points: 10,
        detail: 'Accompagnement spécifique, accueil de jour ou coordination de parcours.',
      },
    ],
  },
  {
    id: 'fleet',
    category: 'Gestion de flotte automobile',
    title: 'Comment gérez-vous actuellement les véhicules de service et tournées ?',
    subtitle: 'La flotte automobile est le 2e poste de dépense opérationnelle des services nomades.',
    options: [
      {
        label: 'Cahiers papier ou tableau Excel mis à jour manuellement',
        points: 5,
        detail: 'Risque de perte de suivi kilométrique, oublis de révisions et contrôle des permis difficile.',
        risk: 'Surcoûts mécaniques, risque juridique employeur en cas de sinistre non assuré.',
      },
      {
        label: 'Réservations par calendrier partagé (Outlook/Google) sans suivi d’état',
        points: 10,
        detail: 'Planification basique sans gestion des carnets d’entretien ni photos d’anomalies.',
        risk: 'Dégradations non imputables, retards de maintenance préventive.',
      },
      {
        label: 'Un logiciel spécialisé de gestion de flotte (ex: Floticar)',
        points: 25,
        detail: 'QR codes, suivi automatique, alertes contrôles techniques et gestion des conducteurs.',
      },
      {
        label: 'Pas de flotte ou gestion assurée par un tiers loueur global',
        points: 20,
        detail: 'Prestation externalisée ou flotte très restreinte (< 2 véhicules).',
      },
    ],
  },
  {
    id: 'tools',
    category: 'Outils & Données métiers',
    title: 'Comment s’organise le suivi des dossiers et la saisie des informations ?',
    subtitle: 'L’interopérabilité et la centralisation conditionnent le temps disponible auprès des usagers.',
    options: [
      {
        label: 'Multiples fichiers Excel, Word et classeurs physiques dispersés',
        points: 5,
        detail: 'Ressaisie manuelle fréquente, risque d’erreurs et perte de données sensibles.',
        risk: 'Perte de temps estimée à 3 à 5 heures par semaine par professionnel.',
      },
      {
        label: 'Un dossier usager informatisé (DUI) rigide + beaucoup d’outils annexes “bricolés”',
        points: 12,
        detail: 'Le logiciel principal ne couvre pas les besoins quotidiens des équipes de terrain.',
        risk: 'Désengagement des professionnels et dispersion de l’information clé.',
      },
      {
        label: 'Outils métiers sur-mesure connectés et portails web dédiés',
        points: 25,
        detail: 'Processus fluides, synchronisation sécurisée et visibilité temps réel.',
      },
      {
        label: 'Projet de refonte ou d’informatisation actuellement à l’étude',
        points: 10,
        detail: 'Prise de conscience de la direction et recherche de solutions adaptées.',
      },
    ],
  },
  {
    id: 'mobile',
    category: 'Mobilité & Terrain',
    title: 'De quels outils disposent les professionnels lors de leurs déplacements ?',
    subtitle: 'Les éducateurs et intervenants à domicile ont besoin d’accéder à l’information en mobilité.',
    options: [
      {
        label: 'Notes manuscrites sur papier, ressaisies le soir ou le lendemain au bureau',
        points: 5,
        detail: 'Lourdeur administrative, retards dans les transmissions et risque de divulgation.',
        risk: 'Délai excessif de transmission et risque de non-conformité RGPD des fiches papier.',
      },
      {
        label: 'Ordinateurs portables lourds avec clé 4G et VPN parfois capricieux',
        points: 12,
        detail: 'Fonctionne au bureau mais peu ergonomique en tournée ou au domicile des familles.',
      },
      {
        label: 'Application mobile ou tablette adaptée avec mode déconnecté (hors-ligne)',
        points: 25,
        detail: 'Saisie vocale, signature électronique, consultation sécurisée instantanée.',
      },
    ],
  },
  {
    id: 'rgpd',
    category: 'Sécurité & RGPD',
    title: 'Quel est votre niveau de conformité sur la protection des données et le RGPD ?',
    subtitle: 'Les données des usagers accompagnés et de leurs familles sont sensibles au sens de la CNIL.',
    options: [
      {
        label: 'Aucune politique claire : mots de passe partagés, clés USB non chiffrées',
        points: 5,
        detail: 'Vulnérabilité critique aux cyberattaques et sanctions CNIL.',
        risk: 'Non-conformité RGPD majeure et vulnérabilité aux rançongiciels.',
      },
      {
        label: 'Sensibilisation de base mais sauvegardes irrégulières et postes non chiffrés',
        points: 12,
        detail: 'Des chartes existent mais les serveurs locaux ou outils grand public restent vulnérables.',
        risk: 'Données usagers vulnérables en cas de vol de matériel ou d’intrusion.',
      },
      {
        label: 'Politique stricte, hébergement souverain sécurisé et audit régulier',
        points: 25,
        detail: 'DPO identifié, registres tenus à jour et protocoles de sauvegarde éprouvés.',
      },
    ],
  },
];

export default function DiagnosticTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedDetails, setSelectedDetails] = useState<Record<string, { label: string; risk?: string }>>({});
  const [isFinished, setIsFinished] = useState(false);

  // Formulaire pour envoyer le résultat
  const [contactName, setContactName] = useState('');
  const [contactOrg, setContactOrg] = useState('');
  const [contactRole, setContactRole] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  const currentQuestion = questions[currentStep];

  const handleSelectOption = (points: number, label: string, risk?: string) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: points };
    const updatedDetails = {
      ...selectedDetails,
      [currentQuestion.id]: { label, risk },
    };
    setAnswers(updatedAnswers);
    setSelectedDetails(updatedDetails);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSelectedDetails({});
    setCurrentStep(0);
    setIsFinished(false);
    setSendSuccess(false);
  };

  // Calcul du score global (sur 100 max)
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
  const normalizedScore = Math.min(100, Math.round((totalScore / 120) * 100));

  let maturityLevel = {
    title: 'Maturité Initiale',
    badge: 'Urgence de Structuration',
    color: 'from-amber-500 to-red-500',
    description:
      'Votre organisation repose encore largement sur des processus manuels ou des outils bureautiques dispersés. Le potentiel de gain de temps et de sécurisation est immédiat.',
  };

  if (normalizedScore >= 70) {
    maturityLevel = {
      title: 'Maturité Avancée',
      badge: 'Organisation Digitale Optimale',
      color: 'from-emerald-400 to-teal-500',
      description:
        'Votre structure a déjà engagé une forte démarche de modernisation. Les axes d’optimisation concernent désormais l’interopérabilité fine, l’intelligence métier et l’automatisation avancée.',
    };
  } else if (normalizedScore >= 45) {
    maturityLevel = {
      title: 'Maturité En Transition',
      badge: 'Modernisation en cours',
      color: 'from-blue-400 to-indigo-500',
      description:
        'Des briques numériques existent mais cohabitent avec des processus manuels chronophages. L’unification et l’adaptation métier permettront un vrai saut qualitatif.',
    };
  }

  // Risques identifiés
  const identifiedRisks = Object.entries(selectedDetails)
    .filter(([_, value]) => Boolean(value.risk))
    .map(([key, value]) => ({ key, risk: value.risk as string, option: value.label }));

  const handleSubmitResult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactOrg || !contactEmail) return;

    setIsSending(true);
    setSendError(false);

    try {
      const summaryText = `
DIAGNOSTIC NUMÉRIQUE MÉDICO-SOCIAL :
Score : ${normalizedScore}/100 (${maturityLevel.title})
Organisation : ${contactOrg}
Fonction : ${contactRole}
Nom : ${contactName}
Téléphone : ${contactPhone}

Réponses détaillées :
${Object.entries(selectedDetails)
  .map(([k, v]) => `- [${k}] ${v.label} ${v.risk ? `(Risque : ${v.risk})` : ''}`)
  .join('\n')}
      `;

      const response = await callApi({
        url: '/api/contact',
        data: {
          firstname: contactName,
          business: contactOrg,
          role: contactRole,
          email: contactEmail,
          phone: contactPhone,
          projectType: `Diagnostic Numérique (${normalizedScore}/100 - ${maturityLevel.title})`,
          content: summaryText,
        },
      });

      if (response.data.status === 200) {
        setSendSuccess(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Top progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-muted mb-2 font-medium">
                <span className="uppercase tracking-wider text-primary-400 font-semibold">
                  Étape {currentStep + 1} sur {questions.length} • {currentQuestion.category}
                </span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% complété</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question title */}
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {currentQuestion.title}
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Options list */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedDetails[currentQuestion.id]?.label === option.label;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(option.points, option.label, option.risk)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 group flex items-start gap-4 ${
                      isSelected
                        ? 'bg-primary-500/15 border-primary-500 text-white shadow-lg shadow-primary-500/10'
                        : 'bg-white/[0.02] border-white/10 text-gray-200 hover:bg-white/[0.05] hover:border-white/20'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full shrink-0 mt-0.5 border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-primary-400 bg-primary-500 text-white'
                          : 'border-white/20 group-hover:border-primary-400'
                      }`}
                    >
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <span className="text-xs text-muted group-hover:text-white">{idx + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base sm:text-lg text-white mb-1 group-hover:text-primary-300 transition-colors">
                        {option.label}
                      </p>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {option.detail}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Question précédente
              </button>

              <span className="text-xs text-muted">
                Sélectionnez une option pour continuer automatiquement
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Score Banner */}
            <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden text-center sm:text-left">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 blur-[100px] pointer-events-none rounded-full" />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    <BarChart3 className="w-3.5 h-3.5 text-primary-400" />
                    Synthèse de votre diagnostic
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    Niveau : {maturityLevel.title}
                  </h3>
                  <p className="text-sm text-muted max-w-xl leading-relaxed">
                    {maturityLevel.description}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col items-center justify-center w-36 h-36 rounded-3xl bg-surface border border-white/15 shadow-2xl relative">
                  <div className="text-5xl font-black text-white drop-shadow-[0_2px_12px_rgba(56,189,248,0.5)]">
                    {normalizedScore}
                  </div>
                  <div className="text-xs font-semibold text-muted tracking-wider uppercase mt-1">
                    sur 100
                  </div>
                </div>
              </div>
            </div>

            {/* Identified Risks & Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Risks Card */}
              <div className="glass rounded-3xl p-7 border border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Points d’attention critiques</h4>
                    <p className="text-xs text-muted">Détectés à partir de vos réponses</p>
                  </div>
                </div>

                {identifiedRisks.length > 0 ? (
                  <ul className="space-y-3">
                    {identifiedRisks.map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span>{item.risk}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Aucun risque critique majeur identifié. Votre socle est robuste. Le principal levier réside dans l’automatisation fine des tâches périodiques.
                  </p>
                )}
              </div>

              {/* Recommendations Card */}
              <div className="glass rounded-3xl p-7 border border-white/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Solutions DevEvoke ciblées</h4>
                    <p className="text-xs text-muted">Pour lever ces freins opérationnels</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">Floticar — Gestion de flotte</p>
                      <p className="text-xs text-muted mt-0.5">Carnet de bord mobile, alertes révisions, contrôle des permis.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <FileSpreadsheet className="w-5 h-5 text-secondary-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">Développement de logiciels métiers</p>
                      <p className="text-xs text-muted mt-0.5">Remplacement des fichiers Excel dispersés par une interface unique.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">Conformité RGPD & Hébergement Souverain</p>
                      <p className="text-xs text-muted mt-0.5">Mise en conformité des formulaires, sauvegardes sécurisées et protection des accès.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="glass rounded-3xl p-8 sm:p-10 border border-primary-500/30 shadow-2xl relative">
              <div className="max-w-2xl mx-auto text-center mb-8">
                <span className="section-label mb-3 inline-block">Restitution & Accompagnement</span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Recevez votre audit détaillé & échangez avec un expert
                </h4>
                <p className="text-sm text-muted">
                  Un architecte DevEvoke analyse votre diagnostic et vous propose un plan d’action pragmatique, sans engagement commercial agressif.
                </p>
              </div>

              {sendSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center text-emerald-300">
                  <CheckCircle2 className="w-10 h-10 mx-auto mb-3" />
                  <h5 className="text-lg font-bold text-white mb-1">Diagnostic bien transmis !</h5>
                  <p className="text-sm text-emerald-200/80">
                    Merci. Un architecte spécialisé dans le secteur médico-social prendra contact avec vous sous 24 à 48 heures ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitResult} className="space-y-4 max-w-xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Nom & Prénom *
                      </label>
                      <input
                        required
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="ex. Pierre Dubois"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Association / Établissement *
                      </label>
                      <input
                        required
                        type="text"
                        value={contactOrg}
                        onChange={(e) => setContactOrg(e.target.value)}
                        placeholder="ex. Association Solidarité Autisme"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Votre fonction
                      </label>
                      <input
                        type="text"
                        value={contactRole}
                        onChange={(e) => setContactRole(e.target.value)}
                        placeholder="ex. Directeur Général / DSI / Resp. Adjoint"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="ex. 06 12 34 56 78"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Email professionnel *
                    </label>
                    <input
                      required
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="p.dubois@association-exemple.fr"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    />
                  </div>

                  {sendError && (
                    <p className="text-xs text-red-400">
                      Une erreur est survenue lors de l’envoi. Veuillez vérifier vos coordonnées ou nous contacter directement à contact@devevoke.com.
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      {isSending ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <span>Recevoir mon rapport & plan d’action</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-400 text-center mt-2">
                      Conformément au RGPD, vos coordonnées restent strictement confidentielles et ne seront jamais cédées à des tiers.
                    </p>
                  </div>
                </form>
              )}

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Recommencer le diagnostic
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
