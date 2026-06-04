'use client';
import React from 'react';
import pictureContact from '@/images/contact.webp';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import callApi from '@/utils/callApi';

const Contact = () => {
  const [sendMsg, setSendMsg] = React.useState(false);
  const [sendText, setSendText] = React.useState('');
  const [buttonSendMsg, setButtonSendMsg] = React.useState(true);
  const [buttonText, setButtonText] = React.useState('Envoyez-nous un message');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Variables
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setButtonText('Envoi en cours...');
    try {
      const response = await callApi({ url: '/api/contact', data: data });
      if (response.data.status === 200) {
        window.location.hash = 'confirmation';
        setSendText('Votre message a bien été envoyé. Nous vous répondrons très vite !');
        setSendMsg(true);
        setButtonSendMsg(false);
        reset();
      } else {
        window.location.hash = 'Erreur_send';
        setButtonText('Réessayer');
        setSendMsg(true);
        setSendText("Une erreur s'est produite lors de l'envoi. Veuillez réessayer ultérieurement.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail", error);
      setButtonText('Réessayer');
      setSendMsg(true);
      setSendText("Erreur de connexion. Veuillez vérifier votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full appearance-none rounded-xl bg-white/[0.03] border border-white/10 px-5 py-4 text-white placeholder:text-muted focus:border-primary-500 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all";

  return (
    <Fade cascade triggerOnce>
      <section className="glass rounded-3xl border border-white/5 shadow-2xl overflow-hidden relative">
        {/* Subtle glow background */}
        <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-5 relative z-10">
          {/* Formulaire */}
          <article className="p-8 sm:p-12 lg:col-span-3 flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Entrer en contact
              </span>
              <p className="text-muted leading-relaxed text-lg">
                Besoin d'aide ou simplement envie de discuter de votre prochain projet passionnant ? Nous sommes tout ouïe ! Laissez-nous un message et nous vous contacterons dans les plus brefs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <input
                    className={inputClasses}
                    placeholder="Votre Nom"
                    type="text"
                    id="firstname"
                    {...register('firstname', { required: true })}
                  />
                  {errors.firstname && (
                    <span className="text-red-400 text-sm mt-2 block ml-1">Ce champ est requis</span>
                  )}
                </div>

                {/* Société */}
                <div>
                  <input
                    className={inputClasses}
                    placeholder="Votre Société"
                    type="text"
                    id="business"
                    {...register('business', { required: true })}
                  />
                  {errors.business && (
                    <span className="text-red-400 text-sm mt-2 block ml-1">Ce champ est requis</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <input
                    className={inputClasses}
                    placeholder="Votre Adresse Email"
                    type="email"
                    id="email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm mt-2 block ml-1">Ce champ est requis</span>
                  )}
                </div>

                {/* Téléphone */}
                <div>
                  <input
                    className={inputClasses}
                    placeholder="Votre Téléphone"
                    type="tel"
                    id="phone"
                    maxLength={10}
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-sm mt-2 block ml-1">Ce champ est requis</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  className={`${inputClasses} min-h-[160px] resize-y`}
                  placeholder="Comment pouvons-nous vous aider ?"
                  id="message"
                  {...register('content', { required: true })}
                />
                {errors.content && (
                  <span className="text-red-400 text-sm mt-2 block ml-1">Ce champ est requis</span>
                )}
              </div>

              <div className="pt-2">
                {buttonSendMsg && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full sm:w-auto px-8 py-4 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {buttonText}
                  </button>
                )}

                {sendMsg && (
                  <div className={`mt-4 p-4 rounded-xl border ${!buttonSendMsg ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                    <p className="flex items-center gap-2 font-medium">
                      {!buttonSendMsg ? (
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      )}
                      {sendText}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </article>

          {/* Image */}
          <div className="hidden lg:block lg:col-span-2 relative">
            <Image
              fill
              className="object-cover object-center"
              priority
              src={pictureContact.src}
              alt="Développeur au travail"
              sizes="(max-width: 1024px) 0vw, 40vw"
            />
            {/* Overlay gradient for smooth blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Contact;
