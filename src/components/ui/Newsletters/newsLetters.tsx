'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import callApi from '../../../utils/callApi';

const NewsLetters = () => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const envoyer = async () => {
    if (!isFormValid) {
      setMessage('Veuillez entrer une adresse email valide.');
      return;
    }
    try {
      await callApi({ url: '/api/newsletters', data: { email } });
      setMessage('🎉 Bienvenue dans la communauté DevEvoke !');
      setIsSuccess(true);
      setEmail('');
      setIsFormValid(false);
    } catch {
      setMessage("Une erreur est survenue. Veuillez réessayer.");
      setIsSuccess(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsFormValid(emailRegex.test(value));
    if (message) setMessage(null);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section id="section7" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d0d24] to-[#0a1628] border border-primary/15 p-10 lg:p-16 text-center"
      >
        {/* Décorations */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, var(--color-primary), transparent)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-16 left-1/4 h-32 w-64 rounded-full opacity-10 blur-2xl"
          style={{ background: 'radial-gradient(ellipse, var(--color-secondary), transparent)' }}
        />

        <div className="relative">
          <span className="section-label block mx-auto w-fit">Newsletter</span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Rejoignez la{' '}
            <span
              className="text-gradient"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              communauté
            </span>
          </h2>

          <p className="mt-4 mx-auto max-w-lg text-muted text-base sm:text-lg">
            Recevez nos dernières actualités, conseils tech et offres exclusives
            directement dans votre boîte mail.
          </p>

          {/* Avantages */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted">
            {['Offres exclusives', 'Guides & tutoriels', 'Avant-premières'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          {/* Formulaire pill */}
          <div className="mt-8 mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={handleChange}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              onKeyDown={(e) => e.key === 'Enter' && envoyer()}
            />
            <button
              onClick={envoyer}
              className="btn-primary shrink-0"
              disabled={!isFormValid}
            >
              S'abonner
            </button>
          </div>

          {/* Message de retour */}
          {message && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-sm ${isSuccess ? 'text-secondary-400' : 'text-red-400'}`}
            >
              {message}
            </motion.p>
          )}

          <p className="mt-4 text-xs text-muted">
            Pas de spam. Désabonnement en un clic.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsLetters;
