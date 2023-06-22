import React from "react";
import "./ContactForm.scss";
import images from "@/app/Assets/Gallery";
import Image from "next/image";
import Form from "@/app/Components/Form/Form";

const ContactForm = () => {
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
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
