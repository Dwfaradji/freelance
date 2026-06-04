'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
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
    <section id="section7" className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Massive CTA Section (Premium SaaS Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[#030712] border border-white/5 p-10 sm:p-16 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 mb-20"
        >
          {/* Lueur d'ambiance asymétrique */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/15 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-600/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

          {/* Typography (Gauche) */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tighter leading-[1.05] mb-6">
              Prêt à dominer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                votre marché ?
              </span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-0">
              Transformons votre vision en une plateforme digitale ultra-performante. Contactez-nous aujourd'hui pour obtenir un devis gratuit et personnalisé.
            </p>
          </div>

          {/* Bouton d'action (Droite) */}
          <div className="relative z-10 shrink-0 w-full lg:w-auto flex justify-center lg:justify-end mt-4 lg:mt-0">
            <Link
              href="/contact"
              className="relative group w-full sm:w-auto inline-block"
            >
              {/* Glow Edge Effect (Signature Vercel) */}
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-60 group-hover:opacity-100 transition duration-500 animate-gradient-x blur-[2px]" />
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-80 group-hover:opacity-100 transition duration-500 animate-gradient-x" />
              
              <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-black text-white font-semibold text-lg rounded-full hover:bg-black/80 transition-all duration-300">
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
          <h3 className="text-2xl font-bold text-white mb-4">
            Rejoignez notre newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-8">
            Recevez nos dernières actualités, conseils tech et offres exclusives, sans spam.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto relative">
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={handleChange}
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all shadow-inner"
              onKeyDown={(e) => e.key === 'Enter' && envoyer()}
            />
            <button
              onClick={envoyer}
              disabled={!isFormValid}
              className="absolute right-2 top-2 bottom-2 bg-primary-600 hover:bg-primary-500 disabled:bg-white/10 disabled:text-gray-500 text-white px-6 rounded-full font-medium transition-colors"
            >
              Rejoindre
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
