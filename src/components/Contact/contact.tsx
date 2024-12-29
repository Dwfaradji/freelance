import React from 'react';
import pictureContact from '@/images/contact.webp';
import Button from '@/components/ui/Atoms/button';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import callApi from '@/utils/callApi';

const Contact = () => {
  const [sendMsg, setSendMsg] = React.useState(false);
  const [sendText, setSendText] = React.useState('');
  const [buttonSendMsg, setButtonSendMsg] = React.useState(true);
  const [buttonText, setButtonText] = React.useState('Envoyer-nous un message');
  //Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: {}) => {
    const response = await callApi({ url: '/api/contact', data: data });
    try {
      // Traitez la réponse de l'API
      if (response.data.status === 200) {
        console.log("L'e-mail a été envoyé avec succès.");
        window.location.hash = 'confirmation';
        setSendText('Votre message a bien été envoyé');
        setSendMsg(true);
        setButtonSendMsg(false);
        reset();
        return;
      } else {
        window.location.hash = 'Erreur_send';
        setButtonText('Réessayer');
        setSendMsg(true);
        setSendText(
          "Une erreur ses produite lors de l'envoie veuillez réessayer ultérieurement",
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail", error);
    }
  };

  return (
    <Fade cascade>
      <section className="mx-auto mt-10 flex max-w-7xl text-white xxs:flex-col sm:flex-row">
        <article className="m-5 rounded-xl bg-lightblack p-10 xxs:m-0 xxs:p-7  md:w-3/4">
          <h2 className="text-xs opacity-50">Entrer en contact</h2>
          <p className="mt-4 text-white opacity-75 xxs:text-sm xs:text-base sm:text-lg lg:text-xl">
            Besoin d'aide ou simplement envie de discuter de votre prochain
            projet passionnant ? <br /> Nous sommes tout ouïe ! <br />{' '}
            Laissez-nous un message et nous vous contacterons dans les plus
            brefs délais pour discuter de la façon dont nous pouvons concrétiser
            vos idées.
            <br /> Votre prochaine grande aventure commence ici !
          </p>
          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex xxs:flex-col sm:flex-row">
              <div className="xxs:mr-0 sm:mr-5">
                <input
                  className="w-full flex-1 appearance-none rounded-lg border-transparent  bg-white/20 p-2 font-poppins text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple xxs:text-sm sm:w-full md:w-full"
                  placeholder="Votre Nom"
                  type="text"
                  id="firstname"
                  {...register('firstname', { required: true })}
                />
                <br />
                {errors.firstname && ( // errors est un objet
                  <span className="text-red-400">Ce champ est requis</span>
                )}
              </div>
              <div className="xxs:ml-0 xxs:mt-2 sm:ml-5 sm:mt-0">
                <input
                  className="w-full flex-1 appearance-none rounded-lg border-transparent  bg-white/20 p-2 font-poppins text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple xxs:text-sm sm:w-full md:w-full"
                  placeholder="Votre Société"
                  type="text"
                  id="business"
                  {...register('business', { required: true })}
                />
                <br />
                {errors.business && ( // errors est un objet
                  <span className="text-red-400">Ce champ est requis</span>
                )}
              </div>
            </div>

            <div className="mt-5 flex xxs:flex-col sm:flex-row">
              <div className="xxs:mr-0 sm:mr-5">
                <input
                  className="w-full flex-1 appearance-none rounded-lg border-transparent  bg-white/20 p-2 font-poppins text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple xxs:text-sm sm:w-full md:w-full"
                  placeholder="Votre Adresse Email"
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
                />
                <br />
                {errors.email && ( // errors est un objet
                  <span className="text-red-400">Ce champ est requis</span>
                )}
              </div>
              <div className="xxs:ml-0 xxs:mt-2 sm:ml-5 sm:mt-0">
                <input
                  title={'Le numéro doit comporter 10 chiffres'}
                  className="w-full flex-1 appearance-none rounded-lg border-transparent  bg-white/20 p-2 font-poppins text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple xxs:text-sm sm:w-full md:w-full"
                  placeholder="Votre Téléphone"
                  type="tel"
                  id="phone"
                  maxLength={10}
                  {...register('phone', { required: true })}
                />
                <br />
                {errors.phone && ( // errors est un objet
                  <span className="text-red-400">Ce champ est requis</span>
                )}
              </div>
            </div>

            <textarea
              className="mt-5 w-full rounded-xl bg-white/20 p-5 text-white"
              rows={5}
              placeholder="Comment pouvons-nous vous aider?"
              id="message"
              {...register('content', { required: true })}
            />
            <br />
            {errors.content && ( // errors est un objet
              <span className="text-red-400">Ce champ est requis</span>
            )}
            <br />
            {buttonSendMsg && (
              <Button
                type="submit"
                title={buttonText}
                colorClass="bg-gradient-to-r from-pink to-purple"
                marginClass="mt-5"
              ></Button>
            )}

            {sendMsg && (
              <div className="mt-3 text-white">
                <p>{sendText}</p>
              </div>
            )}
          </form>
        </article>
        <div className="ml-2 w-1/4 overflow-hidden rounded-xl xxs:hidden sm:block">
          <Image
            width={200}
            height={200}
            className="size-full object-cover"
            priority={true}
            src={pictureContact}
            alt={'image_contact'}
          />
        </div>
      </section>
    </Fade>
  );
};

export default Contact;
