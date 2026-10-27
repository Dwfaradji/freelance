'use client';

import React, { useState } from 'react';
import { DIAGNOSTIC_DISCLAIMER } from '@/lib/diagnostic/constants';
import { DiagnosticReport } from '@/lib/diagnostic/types';
import callApi from '@/utils/callApi';
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Printer,
  Send,
  ShieldCheck,
} from 'lucide-react';

interface DiagnosticReportFormProps {
  report: DiagnosticReport;
  onBackToResults: () => void;
  onClose: () => void;
}

export default function DiagnosticReportForm({
  report,
  onBackToResults,
  onClose,
}: DiagnosticReportFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState(report.organization.name || '');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consentReport, setConsentReport] = useState(false);
  const [consentNewsletter, setConsentNewsletter] = useState(false);
  const [website, setWebsite] = useState(''); // Honeypot trap
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  // Déclencheur impression / enregistrement PDF direct
  const handlePrintPdf = () => {
    const originalTitle = document.title;
    const originalOverflow = document.body.style.overflow;

    // Débloquer l'overflow du body avant l'impression pour éliminer les barres de scroll et le rognage
    document.body.style.overflow = 'visible';

    const sanitizedOrg = (organization || report.organization.name || 'etablissement')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-');
    document.title = `diagnostic-numerique-devevoke-${sanitizedOrg}`;

    window.print();

    document.title = originalTitle;
    document.body.style.overflow = originalOverflow;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !organization || !email) {
      setSendError('Veuillez renseigner les champs obligatoires.');
      return;
    }

    if (!consentReport) {
      setSendError('Veuillez accepter la transmission du rapport par email.');
      return;
    }

    setIsSending(true);
    setSendError(null);

    try {
      const summaryContent = `
DIAGNOSTIC DE MATURITÉ NUMÉRIQUE MÉDICO-SOCIAL :
Établissement : ${organization} (${report.organization.structureType})
Taille : ${report.organization.size} professionnels • Sites : ${report.organization.siteCount}
Score Global : ${report.globalScore}/100 (${report.maturityLevel.label})

Détail des dimensions :
- Organisation & processus : ${report.dimensionScores.organization}/100
- Outils métier : ${report.dimensionScores.businessTools}/100
- Mobilité terrain : ${report.dimensionScores.mobility}/100
- Données & interopérabilité : ${report.dimensionScores.data}/100
- Cybersécurité : ${report.dimensionScores.security}/100
- Pilotage & reporting : ${report.dimensionScores.management}/100
${report.fleet ? `- Flotte automobile : ${report.fleet.score}/100 (${report.fleet.level})` : '- Pas de flotte gérée'}

Risques critiques (${report.riskCounts.critical}) :
${report.risks
  .filter((r) => r.level === 'critical')
  .map((r) => `* [CRITIQUE] ${r.title} : ${r.recommendation}`)
  .join('\n') || 'Aucun'}

Top 3 priorités :
${report.priorities.map((p, i) => `${i + 1}. ${p.title} (${p.horizon})`).join('\n')}

Solutions DevEvoke suggérées :
${report.relevantSolutions.join(', ') || 'Standard'}

Consentement communications séparé : ${consentNewsletter ? 'Oui' : 'Non'}
      `;

      const response = await callApi({
        url: '/api/contact',
        data: {
          firstname: firstName,
          lastname: lastName,
          business: organization,
          role: role,
          email: email,
          phone: phone || undefined,
          projectType: `Rapport Diagnostic Médico-Social (${report.globalScore}/100 - ${report.maturityLevel.label})`,
          establishmentType: report.organization.structureType,
          siteCount: report.organization.siteCount,
          content: summaryContent,
          website,
        },
      });

      if (response?.data?.status === 200 || response?.data?.success) {
        setReferenceId(response.data.referenceId || null);
        setSendSuccess(true);
      } else {
        setSendError(response?.data?.error || 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
      }
    } catch (err: any) {
      const serverError = err?.response?.data?.error;
      const fieldErrors = err?.response?.data?.fieldErrors;
      let detailedMsg = 'Impossible d’envoyer le formulaire pour le moment.';
      if (serverError) {
        detailedMsg = serverError;
      } else if (fieldErrors && typeof fieldErrors === 'object') {
        detailedMsg = Object.values(fieldErrors).flat().join('. ');
      }
      setSendError(detailedMsg);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200 py-4">
      {/* Bouton retour vers résultats */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToResults}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Revenir aux résultats</span>
        </button>
        <span className="text-xs font-mono text-primary-300">
          Score : {report.globalScore}/100 ({report.maturityLevel.label})
        </span>
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          <span>Restitution Complète & Rapport</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Recevez votre rapport détaillé & plan d'action
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
          Générez instantanément votre rapport au format PDF ou recevez la synthèse complète par email avec les recommandations d'un architecte DevEvoke.
        </p>
      </div>

      {/* Téléchargement direct PDF */}
      <div className="p-4 rounded-2xl bg-primary-500/10 border border-primary-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-xs text-neutral-200">
          <strong className="text-white block font-semibold mb-0.5">
            Export vectoriel immédiat :
          </strong>
          <span>Générez votre rapport complet au format A4 sans attendre.</span>
        </div>
        <button
          type="button"
          onClick={handlePrintPdf}
          className="btn-primary px-4 py-2.5 text-xs font-bold flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimer / PDF</span>
        </button>
      </div>

      {/* Formulaire de réception email */}
      {sendSuccess ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center text-emerald-300 space-y-3">
          <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
          <h4 className="text-lg font-bold text-white">Rapport bien transmis !</h4>
          <p className="text-xs text-emerald-200/90 leading-relaxed max-w-md mx-auto">
            Votre diagnostic a été enregistré avec succès. Un architecte spécialisé dans le secteur médico-social prendra contact avec vous sous 24 à 48 heures ouvrées pour échanger sur vos priorités.
          </p>
          {referenceId && (
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/10 font-mono text-xs text-white">
                <span className="text-neutral-400">Réf :</span>
                <strong className="text-emerald-400">{referenceId}</strong>
              </span>
            </div>
          )}
          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={onBackToResults}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
            >
              Revoir les résultats
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-primary px-4 py-2 text-xs font-bold cursor-pointer"
            >
              Fermer le diagnostic
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 p-5 rounded-2xl bg-neutral-900/60 border border-white/10 text-left">
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="opacity-0 absolute -left-[9999px] w-1 h-1 pointer-events-none"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Prénom *
              </label>
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ex : Pierre"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Ex : Dubois"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Association / Établissement *
              </label>
              <input
                required
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Ex : Association Solidarité Autisme"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Fonction
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Ex : Directeur Général, DSI, Cadre..."
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Email professionnel *
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="p.dubois@association-exemple.fr"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Téléphone (facultatif)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex : 06 12 34 56 78"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
            </div>
          </div>

          {/* Cases de consentement */}
          <div className="space-y-2 pt-2 border-t border-white/5 text-[11px] text-neutral-300">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                required
                type="checkbox"
                checked={consentReport}
                onChange={(e) => setConsentReport(e.target.checked)}
                className="mt-0.5 rounded border-white/20 text-primary-500 focus:ring-primary-400 cursor-pointer"
              />
              <span>
                J’accepte que les données de mon diagnostic soient transmises à DevEvoke afin de recevoir mon rapport d'évaluation personnalisé par email. *
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer text-neutral-400">
              <input
                type="checkbox"
                checked={consentNewsletter}
                onChange={(e) => setConsentNewsletter(e.target.checked)}
                className="mt-0.5 rounded border-white/20 text-primary-500 focus:ring-primary-400 cursor-pointer"
              />
              <span>
                (Optionnel) J’accepte de recevoir des retours d’expérience et conseils de DevEvoke sur la modernisation du secteur médico-social.
              </span>
            </label>
          </div>

          {sendError && (
            <p className="text-xs text-rose-400 bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
              {sendError}
            </p>
          )}

          <button
            type="submit"
            disabled={!consentReport || isSending}
            className={`btn-primary w-full py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 transition-all duration-200 ${
              !consentReport
                ? 'opacity-40 grayscale cursor-not-allowed pointer-events-none'
                : isSending
                ? 'opacity-70 cursor-wait'
                : 'cursor-pointer'
            }`}
            title={
              !consentReport
                ? 'Veuillez accepter la transmission du rapport pour continuer'
                : undefined
            }
          >
            {isSending ? (
              <span>Transmission en cours...</span>
            ) : (
              <>
                <span>Transmettre et recevoir mon rapport</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
