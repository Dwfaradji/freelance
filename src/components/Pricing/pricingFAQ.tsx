'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Hébergez-vous les données de santé en France ?',
    answer: 'Absolument. Toutes nos infrastructures médicales sont déployées sur des serveurs souverains, localisés en France, et disposent obligatoirement de la certification HDS (Hébergeur de Données de Santé).',
  },
  {
    question: 'Développez-vous des solutions conformes au Ségur du Numérique ?',
    answer: 'Oui, nous intégrons nativement les référentiels d\'interopérabilité et de sécurité dictés par le Ségur de la Santé, y compris l\'intégration avec le DMP (Dossier Médical Partagé) et la MSSanté.',
  },
  {
    question: 'Quelle est votre approche concernant la confidentialité (RGPD Santé) ?',
    answer: 'Nous appliquons le principe de "Privacy by Design". Les données sont chiffrées de bout en bout (AES-256), les accès sont tracés, et nous vous accompagnons pour vos démarches AIPD (Analyse d\'Impact sur la Protection des Données) auprès de la CNIL.',
  },
  {
    question: 'Vos interfaces sont-elles accessibles à tous les patients ?',
    answer: 'L\'inclusion numérique est essentielle. Nos portails patients respectent strictement les normes RGAA (Référentiel Général d\'Amélioration de l\'Accessibilité) pour garantir l\'accès aux personnes en situation de handicap.',
  },
  {
    question: 'Gérez-vous l\'interopérabilité avec les logiciels de notre clinique ?',
    answer: 'Oui. Nous maîtrisons les protocoles d\'échanges standardisés comme HL7, FHIR et DICOM, ce qui nous permet d\'interfacer nos solutions avec vos logiciels existants (GAP, DPI, LIS).',
  },
  {
    question: 'Quels sont les délais pour concevoir un Dossier Patient Informatisé sur-mesure ?',
    answer: 'La conception d\'un DPI dépend de la complexité de vos processus cliniques. En général, il faut compter entre 3 et 6 mois, incluant l\'audit clinique (Shadowing), le développement Zero Trust et la certification finale (Pentests).',
  },
  {
    question: 'Faites-vous des tests d\'intrusion (Pentests) ?',
    answer: 'Oui, la sécurité ne se suppose pas, elle se vérifie. Avant chaque mise en production d\'une application critique, des experts indépendants réalisent des tests d\'intrusion pour garantir l\'imperméabilité de vos systèmes.',
  },
  {
    question: 'Assurez-vous la maintenance et le support critique ?',
    answer: 'Parfaitement. Nous proposons des contrats de maintenance prévoyant un monitoring 24/7 de vos serveurs et une astreinte technique pour garantir une continuité de service vitale en milieu hospitalier (SLA de 99.99%).',
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
        <span className={`flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 ${isOpen ? 'rotate-180 border-primary/40 bg-primary/10 text-primary-400' : ''}`}>
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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="section-label mb-4 inline-block mx-auto w-fit">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Questions{' '}
          <span className="text-gradient drop-shadow-sm">
            fréquentes
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted">
          Vous avez une question ? Retrouvez les réponses aux questions les plus courantes.
        </p>

        {/* Recherche */}
        <div className="mt-8 mx-auto max-w-md">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-6 text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </motion.div>

      {/* Liste accordéon */}
      <div className="mx-auto max-w-3xl space-y-3">
        {filteredFaqs.map((faq, index) => (
          <FAQItem key={index} {...faq} index={index} />
        ))}

        {filteredFaqs.length === 0 && (
          <p className="py-12 text-center text-muted">
            Aucune question ne correspond à votre recherche.
          </p>
        )}
      </div>
    </section>
  );
};

export default PricingFAQ;
