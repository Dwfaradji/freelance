import React, { useState, useEffect } from 'react';
import Input from '../Atoms/input';
import Button from '../Atoms/button';
import callApi from '../../../utils/callApi';
import { Fade } from 'react-awesome-reveal';

const NewsLetters = () => {
  const [email, setEmail] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const envoyer = async () => {
    if (isFormValid) {
      try {
        await callApi({ url: '/api/newsletters', data: { email } });
        setMessage('Le formulaire a bien été envoyé.');
        setEmail(''); // Réinitialiser le champ email après l'envoi
        setIsFormValid(false); // Réinitialiser la validité du formulaire
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire :", error);
        setMessage("Une erreur est survenue lors de l'envoi du formulaire.");
      }
    } else {
      setMessage("Le formulaire n'est pas valide.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    setEmail(value); // Mettre à jour l'état email

    if (!regex.test(value)) {
      setIsFormValid(false);
      setMessage('Veuillez entrer un email correct.');
    } else {
      setIsFormValid(true);
      setMessage(null); // Réinitialiser les messages en cas de saisie correcte
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 2000); // 2000 millisecondes = 2 secondes

      return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté ou si le message change
    }
  }, [message]);

  return (
    <section id="section7" className={'my-20'}>
      <div className={'w-full xxs:w-full xs:w-full sm:w-3/4'}>
        <Fade direction={'up'}>
          <h2
            className={
              'mb-10 bg-gradient-to-r from-pink to-purple text-xl text-gradient lg:text-3xl'
            }
          >
            Rejoignez notre Communauté !
          </h2>
        </Fade>
        <div className={'text-white '}>
          <p>
            En vous abonnant à notre newsletter, vous ne manquerez plus aucune
            de nos actualités ! Bénéficiez d’avantages uniques :
          </p>

          <ul className={'list-disc px-5 py-2'}>
            <Fade direction={'left'} delay={100}>
              <li>
                {' '}
                Offres exclusives : Accédez à des promotions réservées
                uniquement à nos abonnés.
              </li>
              <li>
                {' '}
                Contenu Premium : Recevez des articles et des guides
                spécialement conçus pour vous.
              </li>
              <li>
                {' '}
                Événements à venir : Soyez informé(e) en avant-première de nos
                événements et lancements.
              </li>
              <li>
                {' '}
                Inscrivez-vous maintenant pour ne rien manquer de notre
                actualité et profiter d’offres spéciales !
              </li>
            </Fade>
          </ul>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-4 sm:w-2/4 lg:w-1/3">
          <Input
            placeholder="Adresse E-mail"
            value={email} // Liaison avec l'état email
            onChange={handleChange} // Gère les changements dans le champ de saisie
          />
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple"
            title="NewsLetter"
            textColor="text-white"
            marginClass="ml-2"
            onClick={envoyer} // Gère l'envoi du formulaire
          />
        </div>
        {message && (
          <div className=" left-0 top-6 mt-2 rounded px-4 py-2 text-white">
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsLetters;
