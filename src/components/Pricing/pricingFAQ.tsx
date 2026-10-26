'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Où sont hébergées vos applications et solutions SaaS comme Floticar ?',
    answer: 'Toutes nos applications sont hébergées sur des infrastructures cloud souveraines situées exclusivement en France (centres de données sécurisés ISO 27001). Vos données restent soumises au droit français et européen, garantissant une conformité stricte au RGPD.',
  },
  {
    question: 'Comment Floticar s’adapte-t-il à un IME, un SESSAD ou une association gestionnaire ?',
    answer: 'Floticar a été pensé pour le fonctionnement concret des structures médico-sociales : gestion des réservations partagées, carnets de bord numériques accessibles par QR code sans installation sur smartphone, alertes automatiques d’entretiens et de contrôles techniques, et traçabilité des conducteurs.',
  },
  {
    question: 'Quelle est votre démarche concernant la protection des données et le RGPD ?',
    answer: 'Nous appliquons le principe de Privacy by Design : chiffrement des flux (HTTPS / TLS 1.3), chiffrement des bases de données au repos (AES-256), cloisonnement strict des accès par rôles (RBAC) et respect du principe de minimisation des informations collectées.',
  },
  {
    question: 'Vos outils sont-ils adaptés aux équipes peu à l’aise avec l’informatique ?',
    answer: 'Oui, c’est notre priorité absolue. Nous concevons des interfaces extrêmement sobres et intuitives. Pour les équipes nomades (SESSAD, SAVS), les applications fonctionnent même en mode déconnecté (hors-ligne) et se synchronisent automatiquement dès le retour du réseau.',
  },
  {
    question: 'Pouvez-vous connecter vos solutions à nos outils existants ?',
    answer: 'Absolument. Nous concevons des API REST sécurisées pour synchroniser vos outils métiers, vos logiciels administratifs ou vos tableaux de bord de direction générale, évitant ainsi toute double saisie.',
  },
  {
    question: 'Quels sont les délais moyens de réalisation d’un projet ?',
    answer: 'Pour le déploiement de Floticar, la mise en place se fait en quelques jours. Pour un logiciel métier sur-mesure ou une application mobile dédiée, le cycle de réalisation dure généralement de 1 à 3 mois, incluant cadrage des besoins, développement, tests et formation des utilisateurs.',
  },
  {
    question: 'Assurez-vous la maintenance et le support technique dans la durée ?',
    answer: 'Tout à fait. Nous proposons des forfaits d’accompagnement incluant la maintenance préventive, les mises à jour de sécurité régulières, les sauvegardes quotidiennes et un support technique réactif pour garantir la continuité de vos services.',
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
