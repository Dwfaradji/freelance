"use client";
// import React, { useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
//
// interface FormData {
//   nom: string;
//   email: string;
//   telephone: string;
//   descriptionProjet: string;
//   budget: string;
//   dateDebut: string;
//   commentaires: string;
//   budgetRange: string;
//   maquette: string;
//   cahier: string;
//   projet: string;
//   logo: string;
//   images: string;
//   textes: string;
//   questions: [
//     {
//       questionText: string;
//       type: string;
//       id: string;
//     }
//   ];
//   siret: number;
// }
//
//
// const FormulaireDevis = () => {
//   const [budget, setBudget] = useState("350");
//   const [dateDebut, setDateDebut] = useState("");
//   const [commentaires, setCommentaires] = useState("");
//
//   //Variables
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>();
//
//   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
//   const [openMsgConfirm, setOpenMsgConfirm] = useState(false);
//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     data.budget = budget;
//     setOpenMsgConfirm(true);
//     console.log(data);
//   };
//
//   const questions = [
//     {
//       questionText: "Etes vous un particulier ou un professionnel?",
//       type: "radio",
//       id: "particulier",
//       label: "Particulier",
//       label2: "Professionnel",
//     },
//     {
//       questionText: "Avez vous une maquette?",
//       type: "radio",
//       id: "maquette",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       questionText: "Ce projet est il existant ou nouveau?",
//       type: "radio",
//       id: "projet",
//       label: "Existant",
//       label2: "Nouveau",
//     },
//     {
//       questionText: "Avez vous un cahier des charges?",
//       type: "radio",
//       id: "cahier",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       questionText: "Avez vous un logo?",
//       type: "radio",
//       id: "logo",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       questionText: "Avez vous des images ou videos à nous fournir ?",
//       type: "radio",
//       id: "images",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       questionText:
//         "Avez vous des textes de présentation de votre activité ou de vos produits et services à nous fournir ?",
//       type: "radio",
//       id: "textes",
//       label: "Oui",
//       label2: "Non",
//     },
//   ];
//
//   const [test, setTest] = useState(false);
//
//   const testCheck = (e: any) => {
//     if (e.target.value === "Professionnel") {
//       setTest(true);
//     } else if (e.target.value === "Particulier") {
//       setTest(false);
//       e.target.value = "";
//     }
//   };
//
//   return (
//     <>
//       {!openMsgConfirm && (
//         <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto p-6  shadow-lg shadow-indigo-500/40 rounded-lg  m-10">
//           <h1 className="text-2xl text-center font-semibold mb-4">
//             Formulaire de demande de devis
//           </h1>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-4">
//               <label
//                 htmlFor="nom"
//                 className="block text-m font-medium text-gray-700"
//               >
//                 Nom / Société :
//               </label>
//               <input
//                 className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                 type="text"
//                 id="nom"
//                 {...register("nom", { required: true })}
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-m font-medium text-gray-700 "
//               >
//                 Adresse e-mail :
//               </label>
//               <input
//                 className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                 type="email"
//                 id="email"
//                 {...register("email", { required: true })}
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="telephone"
//                 className="block text-m font-medium text-gray-700"
//               >
//                 Numéro de téléphone :
//               </label>
//               <input
//                 className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                 type="tel"
//                 id="telephone"
//                 {...register("telephone", { required: true })}
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="descriptionProjet"
//                 className="block text-m font-medium text-gray-700"
//               >
//                 Description du projet :
//               </label>
//               <textarea
//                 className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                 id="descriptionProjet"
//                 {...register("descriptionProjet", { required: true })}
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="budget"
//                 className="block text-m font-medium text-gray-700"
//               >
//                 Budget estimé :
//               </label>
//               <p className="block text-m font-medium text-gray-700">
//                 Pour un budget de : {""}
//                 <input
//                   className="w-fit mt-2  p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                   type="number"
//                   min="350"
//                   max="100000"
//                   step="1"
//                   value={budget}
//                   onChange={(e) => setBudget(e.target.value)}
//                   required={true}
//                 />{" "}
//                 €
//               </p>
//               <input
//                 className="w-full mt-2"
//                 type="range"
//                 min="350"
//                 max="100000"
//                 step="1"
//                 id="budgetRange"
//                 value={budget}
//                 onChange={(e) => setBudget(e.target.value)}
//                 required={true}
//               />
//             </div>
//
//             {questions && questions.map((questionText, index) => (
//               <div id={`${index}`} className="mb-4" key={questionText.id}>
//                 <label
//                   htmlFor={questionText.id}
//                   className="block text-m font-medium text-gray-700 "
//                 >
//                   {questionText.questionText}
//                 </label>
//                 <div className="flex items-center flex-d mt-2">
//                   {(questionText.type === "radio" && (
//                     <>
//                       {[...Array(2)].map((_, index) => (
//                         <div key={index}>
//                           <input
//                             className="ml-2 peer/published"
//                             type={questionText.type}
//                             id={questionText.id}
//                             value={
//                               index === 0 ? questionText.label : questionText.label2
//                             }
//
//                             {...register(questionText.id, {
//                               required: true,
//                               onChange: testCheck,
//                             })}
//                           />
//                           <label
//                             htmlFor={questionText.label || questionText.label2}
//                             className="ml-2 peer-checked/published:text-sky-500"
//                           >
//                             {index === 0 ? questionText.label : questionText.label2}
//                           </label>
//                         </div>
//                       ))}
//                       {/*affiche l'input au chanps correspondant lorsque qu'on appuie par ex sur professionnel seul l'input de la questionText dois s'afficher*/}
//                     </>
//                   )) || (
//                     <div>
//                       <textarea
//                         rows={2}
//                         className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                         id={questionText.id}
//                         {...register(questionText.id, { required: true })}
//                       />
//                     </div>
//                   )}
//                 </div>
//                 {test && questionText.id === "particulier" && (
//                   <div className="mt-2">
//                     <label
//                       htmlFor="entreprise"
//                       className="block text-m font-medium text-gray-700"
//                     >
//                       Numéro de SIRET :
//                     </label>
//                     <input
//                       className="w-60 mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                       type="number"
//                       id="siret"
//                       {...register("siret", { required: true })}
//                     />
//                   </div>
//                 )}
//               </div>
//             ))}
//
//             <div className="mb-4">
//               <label
//                 htmlFor="dateDebut"
//                 className="block text-m font-medium text-gray-700"
//               >
//                 Date de début prévue :
//               </label>
//               <input
//                 className=" placeholder:italic placeholder:text-slate-400 w-40 mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                 type="date"
//                 id="dateDebut"
//                 value={dateDebut}
//                 onChange={(e) => setDateDebut(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="commentaires"
//                 className="block text-m font-medium text-gray-700"
//               >
//                 Commentaires :
//               </label>
//               <textarea
//                 className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                 id="commentaires"
//                 value={commentaires}
//                 onChange={(e) => setCommentaires(e.target.value)}
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               >
//                 Envoyer
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//       {openMsgConfirm && (
//         <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto p-6  shadow-lg shadow-indigo-500/40 rounded-lg  m-10">
//          <h2>Message envoyé</h2>
//           <p className="text-blue-950">Merci d'avoir remplis le devis nous reviendrons vers vous une fois le devis effectuer  </p>
//           <button>
//             <a href="/">Retour à l'accueil</a>
//           </button>
//         </div>
//       )}
//     </>
//   );
// };
// export default FormulaireDevis;

// Importations nécessaires
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./form-devis.scss";

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
  // Dans votre composant, initialiser radioSelections
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      radioSelections: {},
    },
  });
  const [formSend, setFormSend] = useState(false);
  // Fonction appelée lors de la soumission du formulaire
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    setFormSend(true);
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
    <div className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto p-6  shadow-lg shadow-indigo-500/40 rounded-lg  m-10">
      <h1 className="text-2xl text-center font-semibold mb-4">
        Formulaire de demande de devis
      </h1>
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
          {errors.nom && <span>Ce champ est requis</span>}{" "}
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
          {errors.nom && <span>Ce champ est requis</span>}{" "}
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
          {errors.nom && <span>Ce champ est requis</span>}{" "}
          {/* Gestion des erreurs */}
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionProjet">Description du projet :</label>
          <textarea
            className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            id="descriptionProjet"
            {...register("descriptionProjet", { required: true })}
          />
          {errors.nom && <span>Ce champ est requis</span>}{" "}
          {/* Gestion des erreurs */}
        </div>
        {/* Champ pour le budget estimé */}
        <div className="field mb-3">
          <label className="block mb-3" htmlFor="budgetEstime">
            Budget estimé : <span>{budgetEstime} €</span>
          </label>
          <input
            type="range"
            id="budgetRange"
            className="w-full"
            min={350}
            max={500000}
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
                  type="number"
                  id="siret"
                  {...register("siret", { required: true })}
                />
                {errors.nom && <span>Ce champ est requis</span>}{" "}
                {/* Gestion des erreurs */}
              </div>
            )}
          </div>
        ))}
        <div className="mb-4">
          <label htmlFor="dateDebut" className="block">
            Date de début prévue :
          </label>
          <input
            className=" placeholder:italic placeholder:text-slate-400 w-40 mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            type="date"
            id="dateDebut"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="commentaires" className="block">
            Commentaires :
          </label>
          <textarea
            className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
            id="commentaires"
            value={commentaires}
            onChange={(e) => setCommentaires(e.target.value)}
          />
        </div>
        {/* Autres champs... */}
        {/* Bouton de soumission */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
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
            <a href="/">{"Retour à l'accueil"}</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default FormulaireDevis;
