'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Quelles technologies utilisez-vous pour développer des sites web et des applications ?',
    answer: 'Nous utilisons des frameworks modernes comme Next.js et React pour des interfaces réactives, TailwindCSS pour un design optimisé, et Docker pour des environnements d\'exécution fiables. Twig et GitLab complètent nos outils pour assurer un déploiement structuré et efficace.',
  },
  {
    question: 'Comment puis-je estimer le coût de développement de mon projet ?',
    answer: 'Le coût dépend de plusieurs critères comme la complexité, le design, les délais et les ressources nécessaires. Nous fournissons une évaluation détaillée après une analyse approfondie de vos besoins. N\'hésitez pas à nous contacter pour un devis gratuit.',
  },
  {
    question: 'Quelle est la différence entre un site web statique et un site web dynamique ?',
    answer: 'Un site statique propose un contenu fixe. Un site dynamique s\'appuie sur des bases de données et des scripts côté serveur pour offrir du contenu interactif, adapté en fonction des actions des utilisateurs.',
  },
  {
    question: 'Pouvez-vous m\'aider à héberger mon site web ou mon application ?',
    answer: 'Oui, nous accompagnons nos clients dans le choix de solutions d\'hébergement adaptées (AWS, Vercel, OVH, etc.) en fonction de la performance, de la scalabilité et du coût.',
  },
  {
    question: 'Proposez-vous des services de maintenance ?',
    answer: 'Nous offrons des services de maintenance réguliers qui incluent la correction de bugs, la mise à jour de sécurité, les optimisations de performance et l\'ajout de nouvelles fonctionnalités selon vos besoins.',
  },
  {
    question: 'Quels sont les délais moyens pour terminer un projet ?',
    answer: 'Un projet standard peut durer entre 4 et 12 semaines, selon sa portée. Les projets complexes, intégrant plusieurs fonctionnalités sur mesure, peuvent nécessiter plus de temps.',
  },
  {
    question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
    answer: 'Oui, nous collaborons aussi bien avec des startups cherchant à se lancer qu\'avec des PME et des grandes entreprises souhaitant moderniser leurs systèmes numériques.',
  },
  {
    question: 'Quelle est votre politique en matière de confidentialité et de sécurité des données ?',
    answer: 'Nous respectons des normes strictes pour garantir la confidentialité et la sécurité des données. Tous nos projets incluent des pratiques conformes au RGPD et des solutions de protection avancées.',
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
