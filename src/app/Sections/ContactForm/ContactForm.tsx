import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";
import images from "@/app/Assets/Gallery";
import Image from "next/image";

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  file: File | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  //Variables
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const cahierDesCharges = "/downloads/cahierDesCharges.pdf";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    file: null
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file || null
    }));
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   onSubmit(formData);
  // };
  // @ts-ignore
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  // @ts-ignore
  return (
    <section className="container-fluid background-container">
      <div className="content-contact">
        <h2 className="text-h2">Contact</h2>
        <div className="flex-contact">
          <div className="contact col-sm-12 col-md-6">
            <Image
              src={images.contactBackground}
              alt=""
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
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div>
              <label htmlFor="name">Nom</label>
              <input
                placeholder="Votre nom"
                type="text"
                id="name"
                {...register("firstName", { required: true })}
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
                {...register("message", {  required: true })}
              />
            </div>
            <div className="file-upload">
              <label htmlFor="file">Upload PDF</label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
              {formData.file && (
                <span className="file-name">{formData.file.name}</span>
              )}
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
