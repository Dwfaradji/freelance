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
    <section id="section7" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-surface-2 to-[#0a1628] border border-white/10 p-10 sm:p-20 text-center mb-16 shadow-2xl"
        >
          {/* Décorations */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-full w-[800px] rounded-full opacity-20 blur-[120px]" style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
              Prêt à dominer <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                votre marché ?
              </span>
            </h2>
            <p className="max-w-2xl text-lg sm:text-xl text-gray-300 font-light mb-12">
              Transformons votre vision en une plateforme digitale ultra-performante. 
              Contactez-nous aujourd'hui pour obtenir un devis gratuit et personnalisé.
            </p>
            
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              Démarrer mon projet maintenant
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
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
