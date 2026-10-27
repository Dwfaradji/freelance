'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import callApi from '@/utils/callApi';
import { CheckCircle2, ShieldCheck, Send } from 'lucide-react';

interface ContactProps {
  prefilledMessage?: string;
  hideImage?: boolean;
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
  defaultProjectType?: string;
}

interface FormData {
  firstname: string;
  lastname: string;
  business: string;
  role: string;
  establishmentType: string;
  siteCount: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  delay: string;
  content: string;
  rgpdConsent: boolean;
  website?: string; // Honeypot trap field
}

const Contact = ({
  prefilledMessage = '',
  hideImage = false,
  title = 'Votre Projet Digital',
  subtitle,
  description,
  defaultProjectType = 'Logiciel métier sur-mesure',
}: ContactProps) => {
  const [sendMsg, setSendMsg] = React.useState(false);
  const [sendText, setSendText] = React.useState('');
  const [buttonSendMsg, setButtonSendMsg] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [referenceId, setReferenceId] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstname: '',
      lastname: '',
      business: '',
      role: '',
      establishmentType: 'PME / Entreprise',
      siteCount: '1 site unique',
      email: '',
      phone: '',
      projectType: defaultProjectType,
      budget: 'En cours de cadrage',
      delay: '1 à 3 mois',
      content: prefilledMessage,
      rgpdConsent: true,
      website: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await callApi({ url: '/api/contact', data });
      if (response?.data?.status === 200 || response?.data?.success) {
        window.location.hash = 'confirmation';
        setReferenceId(response.data.referenceId || null);
        setSendText('Votre demande de projet a bien été transmise à notre équipe.');
        setSendMsg(true);
        setButtonSendMsg(false);
        reset();
      } else {
        window.location.hash = 'Erreur_send';
        setSendMsg(true);
        setSendText(response?.data?.error || "Une erreur s'est produite lors de l'envoi. Veuillez vérifier vos données ou réessayer.");
      }
    } catch {
      setSendMsg(true);
      setSendText('Erreur de connexion. Veuillez vérifier votre réseau ou réessayer dans quelques instants.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full appearance-none rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all';
  const selectClasses =
    'w-full rounded-xl bg-surface border border-white/10 px-4 py-3 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all';

  return (
    <Fade cascade triggerOnce>
      <section className="glass rounded-3xl border border-white/5 shadow-2xl overflow-hidden relative">
        {/* Subtle glow background */}
        <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-12 relative z-10">
          {/* Formulaire */}
          <article
            className={`p-6 sm:p-10 lg:p-12 flex flex-col justify-center ${
              hideImage ? 'lg:col-span-12' : 'lg:col-span-8'
            }`}
          >
            <div className="mb-8">
              {subtitle && (
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {subtitle}
                </h2>
              )}
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
                {title}
              </span>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                {description ||
                  'Vous envisagez un logiciel métier, une plateforme SaaS, une application mobile, un site web ou l’automatisation de vos processus ? Décrivez votre projet pour échanger directement avec le fondateur.'}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Honeypot anti-spam (invisible pour les humains, piège à bots) */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="opacity-0 absolute -left-[9999px] w-1 h-1 pointer-events-none"
                aria-hidden="true"
                {...register('website')}
              />

              {/* Ligne 1 : Nom & Prénom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Prénom *
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="ex. Stéphane"
                    type="text"
                    id="firstname"
                    {...register('firstname', { required: true })}
                  />
                  {errors.firstname && (
                    <span className="text-red-400 text-xs mt-1 block">Ce champ est requis</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Nom
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="ex. Martin"
                    type="text"
                    id="lastname"
                    {...register('lastname')}
                  />
                </div>
              </div>

              {/* Ligne 2 : Organisation & Fonction */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Entreprise / Organisation *
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="ex. Entreprise Martin / Association"
                    type="text"
                    id="business"
                    {...register('business', { required: true })}
                  />
                  {errors.business && (
                    <span className="text-red-400 text-xs mt-1 block">Ce champ est requis</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Votre fonction
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="ex. Dirigeant / DSI / Chef de projet"
                    type="text"
                    id="role"
                    {...register('role')}
                  />
                </div>
              </div>

              {/* Ligne 3 : Type d'organisation & Périmètre */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Type d’organisation
                  </label>
                  <select {...register('establishmentType')} className={selectClasses}>
                    <option value="PME / Entreprise">PME / Entreprise</option>
                    <option value="TPE / Indépendant">TPE / Indépendant</option>
                    <option value="Startup / Projet SaaS">Startup / Projet SaaS</option>
                    <option value="Association gestionnaire / ESSMS">Association gestionnaire / Médico-Social</option>
                    <option value="Association / Organisation professionnelle">Association / Organisation pro</option>
                    <option value="Autre organisation">Autre structure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Périmètre / Nombre de sites
                  </label>
                  <select {...register('siteCount')} className={selectClasses}>
                    <option value="1 site unique">1 site unique</option>
                    <option value="2 à 5 sites">2 à 5 sites</option>
                    <option value="6 à 15 sites">6 à 15 sites</option>
                    <option value="Plus de 15 sites">Plus de 15 sites / Multi-tenant</option>
                  </select>
                </div>
              </div>

              {/* Ligne 4 : Email pro & Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Email professionnel *
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="direction@votre-association.fr"
                    type="email"
                    id="email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-1 block">Ce champ est requis</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Téléphone direct
                  </label>
                  <input
                    className={inputClasses}
                    placeholder="06 12 34 56 78"
                    type="tel"
                    id="phone"
                    maxLength={14}
                    {...register('phone')}
                  />
                </div>
              </div>

              {/* Ligne 5 : Type de projet & Budget indicatif */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Nature du projet
                  </label>
                  <select {...register('projectType')} className={selectClasses}>
                    <option value="Logiciel métier sur-mesure">Logiciel métier sur-mesure</option>
                    <option value="Conception & Développement SaaS">Plateforme SaaS</option>
                    <option value="Application mobile (iOS / Android)">Application mobile nomade</option>
                    <option value="Développement web & Espace client">Développement web & Espace client</option>
                    <option value="Automatisation des processus">Automatisation des processus & API</option>
                    <option value="Floticar (Gestion de flotte)">Floticar (Gestion de flotte)</option>
                    <option value="Audit & Cadrage technique">Audit & Cadrage technique</option>
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Budget indicatif
                  </label>
                  <select {...register('budget')} className={selectClasses}>
                    <option value="En cours de cadrage">En cours de cadrage</option>
                    <option value="Moins de 10 000 €">&lt; 10 000 €</option>
                    <option value="10 000 € à 25 000 €">10 000 € à 25 000 €</option>
                    <option value="25 000 € à 50 000 €">25 000 € à 50 000 €</option>
                    <option value="Plus de 50 000 €">&gt; 50 000 €</option>
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Délai souhaité
                  </label>
                  <select {...register('delay')} className={selectClasses}>
                    <option value="1 à 3 mois">1 à 3 mois</option>
                    <option value="Urgent (< 1 mois)">Urgent (&lt; 1 mois)</option>
                    <option value="3 à 6 mois">3 à 6 mois</option>
                    <option value="Cadrage amont (6+ mois)">Cadrage amont (6+ mois)</option>
                  </select>
                </div>
              </div>

              {/* Message / Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Description de votre besoin ou contexte *
                </label>
                <textarea
                  className={`${inputClasses} min-h-[130px] resize-y`}
                  placeholder="Expliquez brièvement votre problématique (ex: outils actuels, nombre d'usagers/éducateurs concernés, objectifs prioritaires...)"
                  id="message"
                  {...register('content', { required: true })}
                />
                {errors.content && (
                  <span className="text-red-400 text-xs mt-1 block">Ce champ est requis</span>
                )}
              </div>

              {/* RGPD Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  defaultChecked={false}
                  id="rgpd"
                  {...register('rgpdConsent', { required: true })}
                  className="mt-1 rounded bg-white/5 border-white/20 text-primary-500 focus:ring-primary-500"
                />
                <label htmlFor="rgpd" className="text-xs text-muted leading-relaxed">
                  En soumettant ce formulaire, j’accepte que les informations saisies soient exploitées par DevEvoke pour échanger sur mon projet médico-social. Données confidentielles, non cédées à des tiers.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                {buttonSendMsg && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-wait' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Transmettre mon projet</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}

                {sendMsg && (
                  <div
                    className={`mt-4 p-5 rounded-2xl border ${
                      !buttonSendMsg
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                        : 'bg-red-500/10 border-red-500/20 text-red-400'
                    }`}
                  >
                    <div className="flex items-start gap-3 text-sm">
                      {!buttonSendMsg ? (
                        <CheckCircle2 className="size-5 shrink-0 text-emerald-400 mt-0.5" />
                      ) : (
                        <ShieldCheck className="size-5 shrink-0 text-red-400 mt-0.5" />
                      )}
                      <div className="space-y-2">
                        <p className="font-semibold text-white">{sendText}</p>
                        {!buttonSendMsg && (
                          <>
                            <p className="text-xs text-neutral-300 leading-relaxed">
                              Un email de confirmation récapitulatif vient de vous être envoyé. Notre équipe prendra contact avec vous dans un délai de 24 à 48 heures ouvrées.
                            </p>
                            {referenceId && (
                              <div className="pt-1">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 border border-white/10 font-mono text-xs text-white">
                                  <span>Réf. dossier :</span>
                                  <strong className="text-emerald-400">{referenceId}</strong>
                                </span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </article>

          {/* Image & Reassurance Side */}
          {!hideImage && (
            <div className="hidden lg:flex lg:col-span-4 flex-col justify-between p-8 bg-surface/70 border-l border-white/5 relative">
              <div className="space-y-6">
                <div className="p-4 rounded-2xl glass border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-primary-400 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    Engagement de Confidentialité
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Les échanges préliminaires, cahiers des charges et données fonctionnelles partagés sont couverts par un accord de stricte confidentialité (NDA sur simple demande).
                  </p>
                </div>

                <div className="space-y-3 text-xs text-gray-300">
                  <h4 className="font-bold text-white text-sm">Ce que comprend notre retour :</h4>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                    <span>Analyse d’adéquation fonctionnelle & faisabilité technique.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                    <span>Fourchette budgétaire et planning estimatif réaliste.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                    <span>Proposition d’un premier atelier de cadrage de 45 minutes en visio.</span>
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mt-8 group">
                <Image
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                  src="/images/home/workshop_coconception.jpg"
                  alt="Échange et cadrage de projet avec l'équipe DevEvoke"
                  sizes="(max-width: 1024px) 0vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-neutral-300">
                  <span className="font-bold text-white block">Échange sans engagement</span>
                  <span className="text-[11px] text-neutral-400">Atelier d&apos;écoute et faisabilité technique</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Fade>
  );
};

export default Contact;
