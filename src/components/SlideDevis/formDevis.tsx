'use client';
// Importations nécessaires
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMyContext } from '@/context/context';
import Link from 'next/link';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IFormData, Question } from '@/data/typeFile';
import questions from '@/data/dataForm';
import { useRouter } from 'next/navigation';
import callApi from '@/utils/callApi';

const FormulaireDevis = ({ onClickBack, hrefLink }: any) => {
  const router = useRouter();
  // États pour gérer les valeurs des champs du formulaire
  const [budgetEstime, setBudgetEstime] = useState<string>('350');
  const [isProfessionnel, setIsProfessionnel] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<boolean>(false);

  // Initialisation de useForm pour la gestion du formulaire
  const formatDateToFR = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const formatBudget = (budget: string): string => {
    return Number(budget).toLocaleString('fr-FR');
  };

  // Obtenir la date actuelle et la formater au format YYYY-MM-DD
  const currentDate = new Date().toISOString().split('T')[0];

  // Dans votre composant, initialiser radioSelections
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      radioSelections: {},
      dateDebut: currentDate, // Utiliser la date actuelle comme valeur par défaut
    },
  });

  const [{ form }, dispatch] = useMyContext();
  const sendDataForm = useMyContext()[0];

  useEffect(() => {
    if (form) {
      sendDevis();

    }
  }, [form, dispatch]);

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    await dispatch({ type: 'ADD_FORM', payload: data });
    data.dateDebut = formatDateToFR(data.dateDebut);
    data.budgetEstime = budgetEstime;
  };

  // Gestionnaire d'événements pour les boutons radio
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
        reset()
      }else{
        setErrorMsg(true)
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'envoi du devis:",
        error,
      );
    }
  }

  return (
    <section className="mx-auto columns-1 gap-8 text-left text-white md:w-4/5 lg:w-2/4 dark:bg-white">
      <form className={`p-3`} onSubmit={handleSubmit(onSubmit)}>
        {/* Champ pour le nom ou la société */}
        <div className={'1-partie text-white dark:text-gray-300'}>
          <div className="field mb-4">
            <label htmlFor="nom">Nom / Société :</label>
            <input
              type="text"
              className="focus:shadow-indigo mt-2 w-full rounded-md p-1.5 ring-1 ring-inset focus:shadow-lg focus:outline-none focus:ring-0"
              id="nom"
              {...register('nom', { required: true })}
            />
            {errors.nom && (
              <span className="text-red-600">Ce champ est requis</span>
            )}
            {/* Gestion des erreurs */}
          </div>
          {/* Autres champs... */}
          <div className="mb-4">
            <label htmlFor="email">Adresse e-mail :</label>
            <input
              className="focus:shadow-indigo-500/40 mt-2 w-full rounded-md p-1.5 ring-1 ring-inset focus:shadow-lg focus:outline-none focus:ring-0"
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">Ce champ est requis</span>
            )}
            {/* Gestion des erreurs */}
          </div>
          <div className="mb-4">
            <label htmlFor="telephone">Numéro de téléphone :</label>
            <input
              className="focus:shadow-indigo-500/40 mt-2 w-full rounded-md p-1.5 ring-1 ring-inset focus:shadow-lg focus:outline-none focus:ring-0"
              type="tel"
              id="telephone"
              {...register('telephone', { required: true })}
            />
            {errors.telephone && (
              <span className="text-red-600">Ce champ est requis</span>
            )}
            {/* Gestion des erreurs */}
          </div>
          <div className="mb-4">
            <label htmlFor="descriptionProjet">Description du projet :</label>
            <textarea
              className="focus:shadow-indigo-500/40 mt-2 w-full rounded-md p-1.5 ring-1 ring-inset focus:shadow-lg focus:outline-none focus:ring-0"
              id="descriptionProjet"
              {...register('descriptionProjet', { required: true })}
            />
            {errors.descriptionProjet && (
              <span className="text-red-600">Ce champ est requis</span>
            )}
            {/* Gestion des erreurs */}
          </div>
          {/* Champ pour le budget estimé */}
          <div className="field mb-3">
            <label className="mb-3 block" htmlFor="budgetEstime">
              Budget estimé : <span>{formatBudget(budgetEstime)} €</span>
            </label>
            <input
              type="range"
              id="budgetRange"
              className="w-full"
              min={350}
              max={100000}
              value={budgetEstime}
              onChange={(e) => setBudgetEstime(e.target.value)}
            />
          </div>
        </div>
        <div className="2_partie text-white dark:text-gray-300">
          {/* Boucle sur les questions du formulaire */}
          {questions.map((question: Question) => (
            <div className="question mb-6" key={question.id}>
              <label>{question.questionText}</label>
              {/* Logique pour les boutons radio */}
              <div className="mt-3 flex ">
                <div className="me-2 flex items-center ">
                  <input
                    type="radio"
                    className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    id={`${question.id}-1`} // ID unique pour le bouton radio
                    value={question.label}
                    {...register(`radioSelections.${question.id}`, {
                      required: 'Ce champ est requis',
                      onChange: handleRadioChange,
                    })}
                  />
                </div>
                <label
                  className="font-me mr-3 ms-2 text-[1rem] dark:text-gray-300"
                  htmlFor={`${question.id}-1`}
                >
                  {question.label}
                </label>

                <div className="me-2 flex items-center">
                  <input
                    type="radio"
                    className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    id={`${question.id}-2`} // ID unique pour le bouton radio
                    value={question.label2}
                    {...register(`radioSelections.${question.id}`, {
                      required: 'Ce champ est requis',
                      onChange: handleRadioChange,
                    })}
                  />
                </div>

                <label
                  className="font-me mr-3 ms-2 text-[1rem] "
                  htmlFor={`${question.id}-2`}
                >
                  {question.label2}
                </label>
              </div>
              {question.label2 == 'Professionnel' && isProfessionnel && (
                <div className="mt-4">
                  <label htmlFor="siret" className="text-m block font-medium">
                    Numéro de siret :
                  </label>
                  <input
                    className="focus:shadow-indigo-500/40 mt-2 w-full rounded-md p-1.5 ring-1 ring-inset focus:shadow-lg focus:outline-none focus:ring-0"
                    type="text"
                    maxLength={16}
                    id="siret"
                    {...register('siret', {
                      required: 'Veuillez entrer exactement 16 chiffres',
                      validate: (value) =>
                        /^\d{16}$/.test(String(value)) ||
                        "Veuillez entrer un numéro de SIRET valide (jusqu'à 16 chiffres)",
                    })}
                  />
                  {errors.siret && (
                    <span className="text-red-600">{errors.siret.message}</span>
                  )}
                  {/* Gestion des erreurs */}
                </div>
              )}
              {errors.radioSelections &&
                errors.radioSelections[question.id] && (
                  <span className="text-red-600">Ce champ est requis</span>
                )}
            </div>
          ))}
          <div className="mb-4">
            <label htmlFor="dateDebut" className="block">
              Date de début prévue :
            </label>
            <input
              className="placeholder:text-slate-400 focus:shadow-indigo-500/40 mt-2 w-40 rounded-md p-1.5 ring-1 ring-inset placeholder:italic focus:shadow-lg focus:outline-none focus:ring-0"
              type="date"
              id="dateDebut"
              {...register('dateDebut', {
                required: false,
                value: '09/01/2024',
              })}
            />
            <br />
            {errors.dateDebut && (
              <span className="text-red-600">Ce champ est requis</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="commentaires" className="block">
              Commentaires :
            </label>
            <textarea
              className="focus:shadow-indigo-500/40 mt-2 w-full rounded-md p-1.5 ring-1 ring-inset focus:shadow-lg focus:outline-none focus:ring-0"
              id="commentaires"
              {...register('commentaires', { required: false })}
            />
            {errors.commentaires && <span>Ce champ est requis</span>}
          </div>
        </div>
        <div className=" mt-8 flex justify-between text-center text-white ">
          {/* Bouton de soumission du formulaire et du bouton retour*/}

          <>

            <Link
              scroll={true}
              className={
                'sm:width-full md:width-full lg:width-full mr-3 w-1/4 scale-100 items-center justify-center rounded-lg bg-blue px-3 py-2 text-sm transition hover:scale-110 focus:outline-none focus:ring-1 focus:ring-offset-1 active:scale-95 md:w-2/6 lg:w-60 lg:justify-between'
              }
              href={`${hrefLink}`}
              onClick={onClickBack}
            >
              Retour
            </Link>

            <button
              type={'submit'}
              className="sm:width-full md:width-full lg:width-full ml-3 w-1/4 scale-100 items-center justify-center rounded-lg bg-blue px-3 py-2 text-sm transition hover:scale-110 focus:outline-none focus:ring-1 focus:ring-offset-1 active:scale-95 md:w-2/6 lg:w-60 lg:justify-between"
            >
              <SendOutlinedIcon className={'-rotate-45'} />
            </button>


          </>

        </div>
        {errorMsg &&(
          <p className={"mt-3"}> {"Une erreur s'est produite lors de l'envoie du devis"}</p>
        )}
      </form>
    </section>
  );
};

// Vous pouvez toujours définir un displayName pour plus de clarté, bien que ce soit optionnel maintenant
FormulaireDevis.displayName = 'FormulaireDevis';

export default FormulaireDevis;
