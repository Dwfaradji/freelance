"use client";
// Importations nécessaires
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "../../../app/(pages)/form-devis/form-devis.scss";

// Interface pour les données du formulaire
interface IFormData {
  nom: string;
  email: string;
  telephone: string;
  descriptionProjet: string;
  budgetEstime: string; // Renommé pour plus de clarté
  dateDebut: string;
  commentaires: string;
  budgetRange: string;
  maquette: string;
  cahier: string;
  projet: string;
  logo: string;
  images: string;
  textes: string;
  questions: Question[];
  siret?: number;
  radioSelections: { [key: string]: string };
}

// Interface pour les questions
interface Question {
  questionText: string; // Renommé pour plus de clarté
  type: string;
  id: string;
  label: string;
  label2: string;
}

const FormulaireDevis = () => {
  // États pour gérer les valeurs des champs du formulaire
  const [budgetEstime, setBudgetEstime] = useState<string>("350");
  const [dateDebut, setDateDebut] = useState<string>("");
  const [commentaires, setCommentaires] = useState<string>("");
  const [isProfessionnel, setIsProfessionnel] = useState<boolean>(false);
  // Initialisation de useForm pour la gestion du formulaire
  const formatDateToFR = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  //
  /**
   * Formats the budget value into a localized currency format.
   *
   * @param {string} budget - The budget value to be formatted.
   * @returns {string} - The formatted budget value in the "fr-FR" currency format.
   */
  const formatBudget = (budget: string): string => {
    return Number(budget).toLocaleString("fr-FR");
  };

  // Obtenir la date actuelle et la formater au format YYYY-MM-DD
  const currentDate = new Date().toISOString().split("T")[0];

  // Dans votre composant, initialiser radioSelections
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      radioSelections: {},
      dateDebut: currentDate, // Utiliser la date actuelle comme valeur par défaut
    },
  });
  const [formSend, setFormSend] = useState(false);
  // Fonction appelée lors de la soumission du formulaire
  const onSubmit: SubmitHandler<IFormData> = async (data, e) => {
    setFormSend(true);
    data.dateDebut = formatDateToFR(data.dateDebut);
    data.budgetEstime = budgetEstime;
    e && e.target.reset();
    console.log(data); // Affichage des données du formulaire
  };

  // Questions du formulaire
  const questions: Question[] = [
    // Définition des questions ici...
    {
      questionText: "Etes vous un particulier ou un professionnel?",
      type: "radio",
      id: "particulier",
      label: "Particulier",
      label2: "Professionnel",
    },
    {
      questionText: "Ce projet est il existant ?",
      type: "radio",
      id: "projet",
      label: "Oui",
      label2: "Non",
    },
    {
      questionText: "Avez vous une maquette?",
      type: "radio",
      id: "maquette",
      label: "Oui",
      label2: "Non",
    },

    {
      questionText: "Avez vous un cahier des charges?",
      type: "radio",
      id: "cahier",
      label: "Oui",
      label2: "Non",
    },
    {
      questionText: "Avez vous un logo?",
      type: "radio",
      id: "logo",
      label: "Oui",
      label2: "Non",
    },
    {
      questionText: "Avez vous des images ou videos à nous fournir ?",
      type: "radio",
      id: "images",
      label: "Oui",
      label2: "Non",
    },
    {
      questionText:
        "Avez vous des textes de présentation de votre activité à nous fournir ?",
      type: "radio",
      id: "text-presentation",
      label: "Oui",
      label2: "Non",
    },
    {
      questionText:
        "Avez vous des textes de vos produits et services à nous fournir ?",
      type: "radio",
      id: "text-services",
      label: "Oui",
      label2: "Non",
    },
  ];

  // Gestionnaire d'événements pour les boutons radio
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Professionnel") {
      setIsProfessionnel(true);
    } else if (e.target.value === "Particulier") {
      setIsProfessionnel(false);
    }
  };

  return (
    <div className="mx-auto p-6 scroll-me-0 m-10 overflow-y-auto h-96 text-left">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Champ pour le nom ou la société */}
        <div className="field mb-4">
          <label htmlFor="nom">Nom / Société :</label>
          <input
            type="text"
            className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            id="nom"
            {...register("nom", { required: true })}
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
            className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">Ce champ est requis</span>
          )}
          {/* Gestion des erreurs */}
        </div>
        <div className="mb-4">
          <label htmlFor="telephone">Numéro de téléphone :</label>
          <input
            className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            type="tel"
            id="telephone"
            {...register("telephone", { required: true })}
          />
          {errors.telephone && (
            <span className="text-red-600">Ce champ est requis</span>
          )}
          {/* Gestion des erreurs */}
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionProjet">Description du projet :</label>
          <textarea
            className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            id="descriptionProjet"
            {...register("descriptionProjet", { required: true })}
          />
          {errors.descriptionProjet && (
            <span className="text-red-600">Ce champ est requis</span>
          )}
          {/* Gestion des erreurs */}
        </div>
        {/* Champ pour le budget estimé */}
        <div className="field mb-3">
          <label className="block mb-3" htmlFor="budgetEstime">
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

        {/* Boucle sur les questions du formulaire */}
        {questions.map((question: Question) => (
          <div className="question mb-6" key={question.id}>
            <label>{question.questionText}</label>
            {/* Logique pour les boutons radio */}
            <div className="flex mt-3 ">
              <div className="flex items-center me-2 ">
                <input
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id={`${question.id}-1`} // ID unique pour le bouton radio
                  value={question.label}
                  {...register(`radioSelections.${question.id}`, {
                    required: "Ce champ est requis",
                    onChange: handleRadioChange,
                  })}
                />
              </div>
              <label
                className="ms-2 text-[1rem] font-me text-gray-900 dark:text-gray-300 mr-3"
                htmlFor={`${question.id}-1`}
              >
                {question.label}
              </label>

              <div className="flex items-center me-2">
                <input
                  type="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id={`${question.id}-2`} // ID unique pour le bouton radio
                  value={question.label2}
                  {...register(`radioSelections.${question.id}`, {
                    required: "Ce champ est requis",
                    onChange: handleRadioChange,
                  })}
                />
              </div>

              <label
                className="ms-2 text-[1rem] font-me text-gray-900 dark:text-gray-300 mr-3"
                htmlFor={`${question.id}-2`}
              >
                {question.label2}
              </label>
            </div>
            {question.id == "particulier" && isProfessionnel && (
              <div className="mb-4">
                <label
                  htmlFor="siret"
                  className="block text-m font-medium text-gray-700"
                >
                  Numéro de siret :
                </label>
                <input
                  className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
                  type="text"
                  maxLength={16}
                  id="siret"
                  {...register("siret", {
                    required: "Veuillez entrer exactement 16 chiffres",
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
            {errors.radioSelections && errors.radioSelections[question.id] && (
              <span className="text-red-600">Ce champ est requis</span>
            )}
          </div>
        ))}
        <div className="mb-4">
          <label htmlFor="dateDebut" className="block">
            Date de début prévue :
          </label>
          <input
            className="placeholder:italic placeholder:text-slate-400 w-40 mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            type="date"
            id="dateDebut"
            {...register("dateDebut", { required: true, value: "09/01/2024" })}
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
            className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            id="commentaires"
            {...register("commentaires", { required: false })}
          />
          {errors.commentaires && <span>Ce champ est requis</span>}
        </div>
        {/* Autres champs... */}
        {/* Bouton de soumission tu peut utiliser sa logique pour envoyer les donnees au complet */}
        <button
          type="submit"
          className="hidden px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          Envoyer
        </button>
      </form>
      {formSend && (
        <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto p-6  shadow-lg shadow-indigo-500/40 rounded-lg  m-10">
          <h2>Message envoyé</h2>
          <p className="text-blue-950">
            {
              " Merci d'avoir remplis le devis nous reviendrons vers vous une fois le devis effectuer"
            }
          </p>
          <button>
            <a href="/public">{"Retour à l'accueil"}</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormulaireDevis;
