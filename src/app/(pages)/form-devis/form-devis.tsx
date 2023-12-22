// "use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
//       question: string;
//       type: string;
//       id: string;
//     }
//   ];
//   siret: number;
// }

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
//       question: "Etes vous un particulier ou un professionnel?",
//       type: "radio",
//       id: "particulier",
//       label: "Particulier",
//       label2: "Professionnel",
//     },
//     {
//       question: "Avez vous une maquette?",
//       type: "radio",
//       id: "maquette",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       question: "Ce projet est il existant ou nouveau?",
//       type: "radio",
//       id: "projet",
//       label: "Existant",
//       label2: "Nouveau",
//     },
//     {
//       question: "Avez vous un cahier des charges?",
//       type: "radio",
//       id: "cahier",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       question: "Avez vous un logo?",
//       type: "radio",
//       id: "logo",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       question: "Avez vous des images ou videos à nous fournir ?",
//       type: "radio",
//       id: "images",
//       label: "Oui",
//       label2: "Non",
//     },
//     {
//       question:
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
//             {questions.map((question, index) => (
//               <div id={`${index}`} className="mb-4" key={question.id}>
//                 <label
//                   htmlFor={question.id}
//                   className="block text-m font-medium text-gray-700 "
//                 >
//                   {question.question}
//                 </label>
//                 <div className="flex items-center flex-d mt-2">
//                   {(question.type === "radio" && (
//                     <>
//                       {[...Array(2)].map((_, index) => (
//                         <div key={index}>
//                           <input
//                             className="ml-2 peer/published"
//                             type={question.type}
//                             id={question.id}
//                             value={
//                               index === 0 ? question.label : question.label2
//                             }
//                             {...register(question.id, {
//                               required: true,
//                               onChange: testCheck,
//                             })}
//                           />
//                           <label
//                             htmlFor={question.label || question.label2}
//                             className="ml-2 peer-checked/published:text-sky-500"
//                           >
//                             {index === 0 ? question.label : question.label2}
//                           </label>
//                         </div>
//                       ))}
//                       {/*affiche l'input au chanps correspondant lorsque qu'on appuie par ex sur professionnel seul l'input de la question dois s'afficher*/}
//                     </>
//                   )) || (
//                     <div>
//                       <textarea
//                         rows={2}
//                         className="w-full mt-2 p-1.5 ring-1 ring-inset focus:ring-0 focus:outline-none rounded-md focus:shadow-lg focus:shadow-indigo-500/40"
//                         id={question.id}
//                         {...register(question.id, { required: true })}
//                       />
//                     </div>
//                   )}
//                 </div>
//                 {test && question.id === "particulier" && (
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
