'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import callApi from '../../../utils/callApi';

const NewsLetters = () => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot trap
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const envoyer = async () => {
    if (!isFormValid || isSubmitting) {
      if (!isFormValid) setMessage('Veuillez entrer une adresse email valide.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await callApi({
        url: '/api/newsletters',
        data: { email, website },
      });

      if (response?.data?.status === 200 || response?.data?.success) {
        setMessage('🎉 Bienvenue dans la communauté DevEvoke ! Un email de confirmation vous a été envoyé.');
        setIsSuccess(true);
        setEmail('');
        setWebsite('');
        setIsFormValid(false);
      } else {
        setMessage(response?.data?.error || 'Une erreur est survenue. Veuillez vérifier votre adresse.');
        setIsSuccess(false);
      }
    } catch (err: any) {
      const serverError = err?.response?.data?.error;
      setMessage(serverError || "Une erreur est survenue. Veuillez réessayer dans quelques instants.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
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
    <section id="section7" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Massive CTA Section (Premium SaaS Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[#030712] border border-white/5 p-6 sm:p-14 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 mb-14 sm:mb-20"
        >
          {/* Lueur d'ambiance asymétrique */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/15 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-600/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

          {/* Typography (Gauche) */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tighter leading-[1.05] mb-4 sm:mb-6">
              Prêt à dominer <br />
              <span className="text-highlight">
                votre marché ?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed mb-0">
              Transformons votre vision en une plateforme digitale ultra-performante. Contactez-nous aujourd'hui pour obtenir un devis gratuit et personnalisé.
            </p>
          </div>

          {/* Bouton d'action (Droite) */}
          <div className="relative z-10 shrink-0 w-full lg:w-auto flex justify-center lg:justify-end mt-2 lg:mt-0">
            <Link
              href="/contact"
              className="relative group w-full sm:w-auto inline-block text-center"
            >
              {/* Glow Edge Effect (Signature Vercel) */}
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-60 group-hover:opacity-100 transition duration-500 animate-gradient-x blur-[2px]" />
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-80 group-hover:opacity-100 transition duration-500 animate-gradient-x" />
              
              <div className="relative flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 min-h-[48px] bg-black text-white font-semibold text-base sm:text-lg rounded-full hover:bg-black/80 transition-all duration-300">
                Démarrer mon projet
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="section-label mb-2">Restez informé</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Rejoignez notre newsletter
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8">
            Recevez nos dernières actualités, conseils tech et offres exclusives, sans spam.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto relative">
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="opacity-0 absolute -left-[9999px] w-1 h-1 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="email"
              inputMode="email"
              placeholder="votre@email.com"
              value={email}
              onChange={handleChange}
              className="w-full rounded-full border border-white/10 bg-white/5 pl-5 sm:pl-6 pr-28 sm:pr-32 py-3.5 sm:py-4 text-base sm:text-sm text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all shadow-inner"
              onKeyDown={(e) => e.key === 'Enter' && envoyer()}
            />
            <button
              onClick={envoyer}
              disabled={!isFormValid || isSubmitting}
              className="absolute right-1.5 sm:right-2 top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 bg-primary-600 hover:bg-primary-500 disabled:bg-white/10 disabled:text-gray-500 text-white px-4 sm:px-6 rounded-full font-medium text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center"
            >
              {isSubmitting ? 'Envoi...' : 'Rejoindre'}
            </button>
          </div>

          {message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 text-sm font-medium ${isSuccess ? 'text-green-400' : 'text-red-400'}`}
            >
              {message}
            </motion.p>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default NewsLetters;
