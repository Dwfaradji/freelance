'use client';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMyContext } from '@/context/context';
import Link from 'next/link';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IFormData, Question } from '@/data/typeFile';
import questions from '@/data/dataForm';
import { useRouter } from 'next/navigation';
import callApi from '@/utils/callApi';
import { motion } from 'motion/react';

const FormulaireDevis = ({ onClickBack, hrefLink }: any) => {
  const router = useRouter();
  const [budgetEstime, setBudgetEstime] = useState<string>('350');
  const [isProfessionnel, setIsProfessionnel] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatDateToFR = (dateString: string) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString;
  };

  const formatBudget = (budget: string): string => {
    return Number(budget).toLocaleString('fr-FR');
  };

  const currentDate = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      radioSelections: {},
      dateDebut: currentDate,
    },
  });

  const [{ form }, dispatch] = useMyContext();
  const sendDataForm = useMyContext()[0];

  useEffect(() => {
    if (form) {
      sendDevis();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, dispatch]);

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    setIsSubmitting(true);
    data.dateDebut = formatDateToFR(data.dateDebut);
    data.budgetEstime = budgetEstime;
    await dispatch({ type: 'ADD_FORM', payload: data });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'Professionnel') {
      setIsProfessionnel(true);
    } else if (e.target.value === 'Particulier') {
      setIsProfessionnel(false);
    }
  };

  async function sendDevis() {
    try {
      const response = await callApi({ url: '/api/devis', data: sendDataForm });
      if (response.data.status === 200) {
        await dispatch({ type: 'ADD_STATUS', payload: true });
        router.push('/devis/confirmation');
        reset();
      } else {
        setErrorMsg(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'envoi du devis:", error);
      setErrorMsg(true);
      setIsSubmitting(false);
    }
  }

  // Styles communs
  const inputClass = "w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 outline-none";
  const labelClass = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <section className="mx-auto w-full glass p-6 sm:p-10 rounded-3xl border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
      {/* Glow décoratif interne */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] rounded-full pointer-events-none" />

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-10">
        
        {/* SECTION 1: Informations Personnelles */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm">1</span>
            Vos informations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className={labelClass}>Nom / Société *</label>
              <input type="text" id="nom" className={inputClass} placeholder="Ex: Jean Dupont / Acme Corp" {...register('nom', { required: true })} />
              {errors.nom && <span className="text-xs text-red-400 mt-1 block">Ce champ est requis</span>}
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Adresse e-mail *</label>
              <input type="email" id="email" className={inputClass} placeholder="jean@exemple.com" {...register('email', { required: true })} />
              {errors.email && <span className="text-xs text-red-400 mt-1 block">Ce champ est requis</span>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="telephone" className={labelClass}>Numéro de téléphone *</label>
              <input type="tel" id="telephone" className={inputClass} placeholder="06 12 34 56 78" {...register('telephone', { required: true })} />
              {errors.telephone && <span className="text-xs text-red-400 mt-1 block">Ce champ est requis</span>}
            </div>
          </div>
        </div>

        <hr className="border-white/5" />

        {/* SECTION 2: Le Projet */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm">2</span>
            Votre projet
          </h3>
          <div className="space-y-6">
            <div>
              <label htmlFor="descriptionProjet" className={labelClass}>Description détaillée du projet *</label>
              <textarea id="descriptionProjet" rows={4} className={inputClass} placeholder="Décrivez votre idée, vos objectifs, vos concurrents..." {...register('descriptionProjet', { required: true })} />
              {errors.descriptionProjet && <span className="text-xs text-red-400 mt-1 block">Ce champ est requis</span>}
            </div>

            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <label htmlFor="budgetRange" className="text-sm font-medium text-gray-300">Budget estimé</label>
                <span className="text-primary-400 font-bold text-xl">{formatBudget(budgetEstime)} €</span>
              </div>
              <input
                type="range"
                id="budgetRange"
                min={350}
                max={100000}
                step={50}
                value={budgetEstime}
                onChange={(e) => setBudgetEstime(e.target.value)}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-3 font-medium">
                <span>350 €</span>
                <span>100 000 € +</span>
              </div>
            </div>

            <div>
              <label htmlFor="dateDebut" className={labelClass}>Date de début souhaitée</label>
              <input type="date" id="dateDebut" className={`${inputClass} text-gray-300 w-full sm:w-auto`} {...register('dateDebut')} />
            </div>
          </div>
        </div>

        <hr className="border-white/5" />

        {/* SECTION 3: Questionnaire */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm">3</span>
            Questions rapides
          </h3>
          <div className="space-y-4">
            {questions.map((question: Question) => (
              <div key={question.id} className="bg-black/20 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                <p className="text-white font-medium mb-4">{question.questionText}</p>
                <div className="flex flex-wrap gap-3">
                  {/* Option 1 */}
                  <label className="relative flex-1 cursor-pointer">
                    <input type="radio" value={question.label} className="peer sr-only" {...register(`radioSelections.${question.id}`, { required: true, onChange: handleRadioChange })} />
                    <div className="text-center px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 peer-checked:bg-primary-500/20 peer-checked:border-primary-500 peer-checked:text-primary-400 hover:bg-white/10">
                      {question.label}
                    </div>
                  </label>
                  
                  {/* Option 2 */}
                  <label className="relative flex-1 cursor-pointer">
                    <input type="radio" value={question.label2} className="peer sr-only" {...register(`radioSelections.${question.id}`, { required: true, onChange: handleRadioChange })} />
                    <div className="text-center px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 peer-checked:bg-primary-500/20 peer-checked:border-primary-500 peer-checked:text-primary-400 hover:bg-white/10">
                      {question.label2}
                    </div>
                  </label>
                </div>
                {errors.radioSelections && errors.radioSelections[question.id] && (
                  <span className="text-xs text-red-400 mt-2 block">Veuillez sélectionner une option</span>
                )}

                {/* SIRET Dynamique */}
                {question.label2 === 'Professionnel' && isProfessionnel && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 pt-4 border-t border-white/5">
                    <label htmlFor="siret" className={labelClass}>Numéro de SIRET *</label>
                    <input type="text" id="siret" maxLength={14} className={inputClass} placeholder="Vos 14 chiffres de SIRET" {...register('siret', {
                        required: 'Veuillez entrer votre SIRET',
                        validate: (value) => /^\d{14}$/.test(String(value)) || "Veuillez entrer un SIRET valide (exactement 14 chiffres)",
                      })}
                    />
                    {errors.siret && <span className="text-xs text-red-400 mt-1 block">{errors.siret.message}</span>}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label htmlFor="commentaires" className={labelClass}>Commentaires supplémentaires (optionnel)</label>
            <textarea id="commentaires" rows={3} className={inputClass} placeholder="Un détail important à préciser ?" {...register('commentaires')} />
          </div>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm text-center font-medium">
            Une erreur s'est produite lors de l'envoi du devis. Veuillez réessayer.
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t border-white/5">
          <Link href={hrefLink || '/tarifs'} onClick={onClickBack} className="btn-outline flex-1 justify-center py-4 text-center">
            Retour aux tarifs
          </Link>
          <button type="submit" disabled={isSubmitting} className="btn-primary flex-[2] justify-center py-4 gap-3 relative overflow-hidden group">
            {isSubmitting ? (
              <span className="animate-pulse flex items-center justify-center gap-2">
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
                Envoyer ma demande <SendOutlinedIcon fontSize="small" className="-rotate-45" />
              </span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

FormulaireDevis.displayName = 'FormulaireDevis';

export default FormulaireDevis;
