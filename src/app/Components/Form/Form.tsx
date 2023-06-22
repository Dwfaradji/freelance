import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import "./Form.scss";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  content: string;
  file: File[];
}

const Form = () => {
  const [sendMsg, setSendMsg] = React.useState(false);
  //Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.set("file", data.file?.[0]);

    try {
      const response2 = await axios.post("/api/uploadTest", formData, {});
      const data = await response2;
      // Traitez la réponse de l'API
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'envoi du fichier.",
        error
      );
    }

    try {
      const response = await axios.post("/api/contact", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Traitez la réponse de l'API
      if (response.status === 200) {
        console.log("L'e-mail a été envoyé avec succès.");
        setSendMsg(true);
        reset(); // ici
      } else {
        console.log("Erreur lors de l'envoi de l'e-mail");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail", error);
    }
  };

  const cahierDesCharges = "/downloads/cahierDesCharges.pdf";

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input
            placeholder="Votre prénon"
            type="text"
            id="firstname"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && ( // errors est un objet
            <span className="error text-white">Ce champ est requis</span>
          )}
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input
            placeholder="Votre nom"
            type="text"
            id="lastname"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && ( // errors est un objet
            <span className="error text-white">Ce champ est requis</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Votre adresse email"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && ( // errors est un objet
            <span className="error text-white">Ce champ est requis</span>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Votre message"
            id="message"
            {...register("content", { required: true })}
          />
          {errors.content && ( // errors est un objet
            <span className="error text-white">Ce champ est requis</span>
          )}
        </div>
        <div className="file-upload">
          <label htmlFor="file">Charger PDF</label>
          <input type="file" id="file" accept=".pdf" {...register("file")} />
          {/*{formData.file && (*/}
          {/*  <span className="file-name">{formData.file.name}</span>*/}
          {/*)}*/}
        </div>
        <div>
          <a
            href={cahierDesCharges}
            className="file-button"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-solid fa-download "></i> Cahier des Charges PDF
          </a>
        </div>
        {!sendMsg && (
          <button className="submit-button" type="submit">
            Envoyer
          </button>
        )}

        {sendMsg && (
          <div className="send-msg">
            <p>Votre message a bien été envoyé</p>
          </div>
        )}
      </form>
      {/*  <FileUploader />*/}
    </>
  );
};

export default Form;
