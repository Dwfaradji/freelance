import React from "react";
import "./ContactForm.scss";
import images from "../../../assets/Gallery";
import Image from "next/image";
import BtnOpenForm from "../../ui/BtnOpenForm/BtnOpenForm";

const ContactForm = () => {
  return (
    <section id="test" className="background-container">
      <div className="contact-background">
        <Image
          src={images.contactBackground}
          alt="background contact"
          width="1024"
          height="768"
        />
      </div>
      <div className="content-contact flex-col flex">
        <h2 className="text-h2">Contact</h2>
        <div className="flex-contact ">
          <div className="contact">
            <div className="text-form">
              <h3 className="text-white mb-2">
                {
                  "Vous voulez un site web ou une application unique qui mettra en valeur votre marque et attirera l'attention de vos visiteurs ? "
                }
              </h3>
              <p className="text-base md:text-xl">
                {`Vous êtes au bon endroit ! Chez DevEvoke, nous sommes experts dans la création de sites web et d'applications 
              sur mesure qui feront une réelle différence pour votre entreprise.
              Notre équipe de professionnels expérimentés sait comment créer des expériences en ligne captivantes. 
              Que vous ayez besoin d'un site web pour présenter votre entreprise, vendre vos produits ou partager votre passion, 
              nous sommes là pour vous aider. Nous travaillerons étroitement avec vous pour comprendre vos besoins spécifiques 
              et créer une solution qui correspond parfaitement à votre vision.
              Nous savons que chaque entreprise est unique, c'est pourquoi nous proposons des designs personnalisés et 
              des fonctionnalités adaptées à vos objectifs. Avec notre expertise technique et notre sens aiguisé du design,
              nous créerons un site web ou une application qui se démarquera de la concurrence et séduira vos visiteurs.
              N'attendez plus pour vous démarquer en ligne ! Contactez-nous dès maintenant et discutons de votre projet. 
              Remplissez simplement notre formulaire rapide et nous vous contacterons pour une consultation gratuite. 
              Ensemble, nous transformerons votre idée en réalité numérique.`}
              </p>
              <p className="text-base md:text-xl mt-2">
                Faites le premier pas vers une présence en ligne qui fera
                sensation !
              </p>
            </div>
            <div className="flex flex-col items-center">
              <BtnOpenForm />
              {/*<FormContact />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
