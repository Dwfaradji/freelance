'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Où sont hébergées vos applications web, plateformes SaaS et logiciels métier ?',
    answer: 'Toutes nos solutions sont hébergées sur des infrastructures cloud souveraines situées exclusivement en France (centres de données sécurisés ISO 27001). Vos données restent soumises au droit français et européen, garantissant une conformité stricte au RGPD.',
  },
  {
    question: 'Quelle est la différence entre un logiciel standard du marché et une solution sur-mesure DevEvoke ?',
    answer: 'Les progiciels généralistes imposent souvent des abonnements coûteux par utilisateur et forcent vos collaborateurs à s’adapter à des fonctionnalités rigides. DevEvoke conçoit un outil calqué sur vos flux réels, éliminant les fichiers Excel dispersés et centralisant exactement les informations indispensables à votre activité.',
  },
  {
    question: 'Pouvez-vous concevoir une plateforme SaaS complète de A à Z ?',
    answer: 'Absolument. DevEvoke dispose d’une expertise éprouvée dans la création de produits SaaS, comme l’illustre Floticar (notre solution de gestion de flotte). Nous concevons l’architecture multi-organisations, les interfaces ergonomiques, les API, l’authentification sécurisée, la gestion des rôles (RBAC) et le déploiement cloud.',
  },
  {
    question: 'Développez-vous des applications mobiles professionnelles avec mode hors-ligne ?',
    answer: 'Oui. Nous concevons des applications mobiles (iOS, Android, React Native / Expo ou PWA) adaptées aux équipes de terrain. Elles intègrent nativement un mode déconnecté (hors-ligne) avec synchronisation automatique des données dès le retour d’une connexion réseau.',
  },
  {
    question: 'Pouvez-vous connecter vos solutions à nos outils existants via API ?',
    answer: 'Absolument. Nous concevons des API REST sécurisées pour connecter vos nouvelles applications aux logiciels administratifs, ERP, CRM ou outils comptables déjà en place dans votre organisation, supprimant définitivement les doubles saisies.',
  },
  {
    question: 'Quelle est votre méthode d’accompagnement et quels sont les délais moyens ?',
    answer: 'Chaque projet démarre par un cadrage fonctionnel approfondi. Pour une application web ou un logiciel métier sur-mesure, le cycle moyen de réalisation est de 1 à 3 mois (conception UX, développement, tests, déploiement). Vous dialoguez directement avec le fondateur et développeur pour une réactivité optimale.',
  },
  {
    question: 'Assurez-vous la maintenance et le support technique dans la durée ?',
    answer: 'Oui. DevEvoke assure un suivi sur le long terme : hébergement souverain, sauvegardes quotidiennes chiffrées, surveillance proactive, mises à jour préventives de sécurité et maintenance évolutive continue.',
  },
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-white text-sm sm:text-base leading-relaxed">
          {question}
        </span>
        <span className={`flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 ${isOpen ? 'rotate-180 border-primary-500/40 bg-primary-500/10 text-primary-400' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="border-t border-white/5 px-6 pb-6 pt-4 text-sm text-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PricingFAQ = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
      ))}
    </div>
  );
};

export default PricingFAQ;
