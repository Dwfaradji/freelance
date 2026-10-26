'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Car,
  CheckCircle2,
  Calendar,
  Clock,
  Laptop,
  Users,
  Send,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import callApi from '@/utils/callApi';

export default function DemandeDemoPage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [business, setBusiness] = useState('');
  const [establishmentType, setEstablishmentType] = useState('Association gestionnaire');
  const [vehicleCount, setVehicleCount] = useState('5 à 15 véhicules');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [demoFocus, setDemoFocus] = useState('Floticar (Gestion de flotte & carnets de bord)');
  const [preferredSlot, setPreferredSlot] = useState('Dans la semaine (matin)');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstname || !business || !email) return;

    setIsSubmitting(true);
    setError(false);

    const messageContent = `
DEMANDE DE DÉMONSTRATION EN DIRECT :
Focus Démo : ${demoFocus}
Organisation : ${business}
Type d'établissement : ${establishmentType}
Taille de la flotte / Sites : ${vehicleCount}
Fonction du demandeur : ${role}
Créneau préféré : ${preferredSlot}
Notes / Attentes particulières : ${notes || 'Aucune'}
    `;

    try {
      const response = await callApi({
        url: '/api/contact',
        data: {
          firstname,
          lastname,
          business,
          establishmentType,
          siteCount: vehicleCount,
          role,
          email,
          phone,
          projectType: `Démonstration : ${demoFocus}`,
          isDemoRequest: true,
          content: messageContent,
        },
      });

      if (response.data.status === 200) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/realisations/floticar"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'étude de cas Floticar
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="section-label mb-3 inline-block">
                Visio personnalisée • 30 minutes
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Découvrez la solution en conditions réelles.
              </h1>
              <p className="text-base text-muted leading-relaxed">
                Une session privée de 30 minutes avec un architecte logiciel pour visualiser l’interface, poser toutes vos questions et tester la prise en main sur vos cas d’usage associatifs.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass border border-white/5">
                <Laptop className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">Visite guidée sur vos cas réels</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Visualisez le carnet de bord conducteur par QR code, la gestion des entretiens et l’espace administrateur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass border border-white/5">
                <Clock className="w-5 h-5 text-secondary-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">Format court & efficace (30 min)</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Adapté aux plannings contraints des directeurs d’établissements et des responsables de flotte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass border border-white/5">
                <Users className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">Échange sans engagement</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Pas de discours commercial oppressant : nous évaluons en toute transparence si la solution correspond à votre organisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-950/40 via-surface to-surface border border-primary-500/20">
              <div className="flex items-center gap-2 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                Spécial Établissements Médico-Sociaux
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Floticar est nativement adapté au fonctionnement des IME, SESSAD, ESAT, EHPAD et MAS : gestion multi-sites, contrôle des permis, partage de clés et historique des incidents avec photos.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative">
              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Demande de démo transmise avec succès !</h2>
                  <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                    Merci {firstname}. Nous vous envoyons une confirmation par email et vous contacterons rapidement pour caler le lien de visioconférence.
                  </p>
                  <Link href="/" className="btn-primary inline-block px-6 py-3 mt-4 text-sm font-semibold">
                    Retour à l’accueil
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Réserver votre démonstration
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Prénom *
                      </label>
                      <input
                        required
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="Marc"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Nom
                      </label>
                      <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Lefebvre"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Association / Organisation *
                      </label>
                      <input
                        required
                        type="text"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        placeholder="Association Les Papillons"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Votre fonction
                      </label>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Directeur / Resp. Parc / DSI"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Type d'établissement
                      </label>
                      <select
                        value={establishmentType}
                        onChange={(e) => setEstablishmentType(e.target.value)}
                        className="w-full rounded-xl bg-surface border border-white/10 px-4 py-3 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="Association gestionnaire">Association gestionnaire</option>
                        <option value="IME (Institut Médico-Éducatif)">IME</option>
                        <option value="SESSAD / SAVS (Service nomade)">SESSAD / SAVS</option>
                        <option value="ESAT (Travail protégé)">ESAT</option>
                        <option value="EHPAD / Résidence autonomie">EHPAD</option>
                        <option value="MAS / FAM">MAS / FAM</option>
                        <option value="Autre structure médico-sociale">Autre structure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Taille de la flotte (véhicules)
                      </label>
                      <select
                        value={vehicleCount}
                        onChange={(e) => setVehicleCount(e.target.value)}
                        className="w-full rounded-xl bg-surface border border-white/10 px-4 py-3 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="1 à 5 véhicules">1 à 5 véhicules</option>
                        <option value="5 à 15 véhicules">5 à 15 véhicules</option>
                        <option value="15 à 30 véhicules">15 à 30 véhicules</option>
                        <option value="Plus de 30 véhicules">Plus de 30 véhicules</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Email professionnel *
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="direction@association-exemple.fr"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Solution souhaitée
                      </label>
                      <select
                        value={demoFocus}
                        onChange={(e) => setDemoFocus(e.target.value)}
                        className="w-full rounded-xl bg-surface border border-white/10 px-4 py-3 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="Floticar (Gestion de flotte & carnets de bord)">
                          Floticar (Gestion de flotte)
                        </option>
                        <option value="Logiciel métier sur-mesure">
                          Logiciel métier sur-mesure
                        </option>
                        <option value="Portail ou application mobile éducateurs/soignants">
                          Application mobile terrain
                        </option>
                        <option value="Audit global & Transformation numérique">
                          Audit global & Modernisation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Créneau préféré
                      </label>
                      <select
                        value={preferredSlot}
                        onChange={(e) => setPreferredSlot(e.target.value)}
                        className="w-full rounded-xl bg-surface border border-white/10 px-4 py-3 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="Cette semaine (Matinée)">Cette semaine (Matinée)</option>
                        <option value="Cette semaine (Après-midi)">Cette semaine (Après-midi)</option>
                        <option value="Semaine prochaine (Matinée)">Semaine prochaine (Matinée)</option>
                        <option value="Semaine prochaine (Après-midi)">Semaine prochaine (Après-midi)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Détails de votre besoin ou questions préalables (optionnel)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Indiquez vos problématiques particulières (ex: beaucoup d'amendes non identifiées, oublis de révisions, plannings partagés complexes...)"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400">
                      Une erreur est survenue lors de l’envoi. Veuillez réessayer ou nous joindre directement par email.
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Envoi de votre demande...</span>
                      ) : (
                        <>
                          <span>Confirmer ma demande de démonstration</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-400 text-center mt-2">
                      Conformité RGPD garantie. Vos données ne seront jamais partagées à des fins publicitaires.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
