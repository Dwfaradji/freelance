import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./ContactForm.scss";
import images from "@/app/Assets/Gallery";
import Image from "next/image";
import axios from "axios";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  content: string;
  // file: File | null;
}

interface Inputs {
  firstname: string;
  lastname: string;
  email: string;
  content: string;
  // file: File | null;
}

const ContactForm = () => {
  //Variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post("/api/contact", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = response.data;
      console.log(response);
      if (!response.data) {
        console.log("error");
      } else {
        console.log("ok", result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const cahierDesCharges = "/downloads/cahierDesCharges.pdf";

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files && e.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     file: file || null,
  //   }));
  // };


  return (
    <section className="container-fluid background-container">
      <div className="content-contact">
        <h2 className="text-h2">Contact</h2>
        <div className="flex-contact">
          <div className="contact col-sm-12 col-md-6">
            <Image
              src={images.contactBackground}
              alt="background contact"
              width="1024"
              height="768"
            />
            <p className="text-base md:text-xl">
              {`Vous avez un projet passionnant en tête ? Ne perdez pas une minute
                de plus et faites le premier pas vers sa concrétisation.
                Remplissez notre formulaire de contact ci-dessous pour nous en
                dire plus et bénéficier de notre expertise. Nous comprenons que
                chaque projet est unique, c'est pourquoi nous vous encourageons à
              nous fournir tous les détails nécessaires pour que nous puissions
              comprendre pleinement votre vision. Notre formulaire vous
              permettra de saisir des informations clés, mais nous ne nous
              arrêtons pas là. Nous vous offrons également la possibilité de
              télécharger des fichiers pertinents tels que votre cahier des
              charges, des maquettes ou tout autre document qui nous aidera à
              mieux cerner vos attentes. En collaborant avec nous, vous
              bénéficierez d'une équipe expérimentée et engagée à vos côtés.
              Notre expertise nous permet de vous offrir des solutions sur
              mesure et de vous accompagner à chaque étape de votre projet. Ne
              manquez pas cette occasion de faire avancer votre projet.
              Remplissez dès maintenant notre formulaire de contact, téléchargez
              vos fichiers et laissez-nous vous montrer comment nous pouvons
              transformer vos idées en réalité.`}
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="firstname">Prénom</label>
              <input
                placeholder="Votre prénon"
                type="text"
                id="firstname"
                {...register("firstname", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="lastname">Nom</label>
              <input
                placeholder="Votre nom"
                type="text"
                id="lastname"
                {...register("lastname", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Votre adresse email"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Votre message"
                id="message"
                {...register("content", {  required: true })}
              />
            </div>
            <div className="file-upload">
              <label htmlFor="file">Upload PDF</label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf"
                // onChange={handleFileChange}
              />
              {/*{formData.file && (*/}
              {/*  <span className="file-name">{formData.file.name}</span>*/}
              {/*)}*/}
            </div>
            <div>
              <a href={cahierDesCharges} download className="file-button">
                Download Cahier des Charges
              </a>
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
