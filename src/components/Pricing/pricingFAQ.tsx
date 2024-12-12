import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const PricingFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question:
        'Quelles technologies utilisez-vous pour développer des sites web et des applications ?',
      answer:
        'Nous utilisons des frameworks modernes comme Next.js et React pour des interfaces réactives, TailwindCSS pour un design optimisé, et Docker pour des environnements d’exécution fiables. Twig et GitLab complètent nos outils pour assurer un déploiement structuré et efficace.',
    },
    {
      question:
        'Comment puis-je estimer le coût de développement de mon projet ?',
      answer:
        'Le coût dépend de plusieurs critères comme la complexité (ex. intégration d’API, fonctionnalités spécifiques), le design, les délais et les ressources nécessaires. Nous fournissons une évaluation détaillée après une analyse approfondie de vos besoins.',
    },
    {
      question:
        'Quelle est la différence entre un site web statique et un site web dynamique ?',
      answer:
        'Un site statique propose un contenu fixe et non modifiable par l’utilisateur sans mise à jour manuelle du code. Un site dynamique, quant à lui, s’appuie sur des bases de données et des scripts côté serveur pour offrir du contenu interactif, adapté en fonction des actions ou préférences des utilisateurs.',
    },
    {
      question:
        'Pouvez-vous m’aider à héberger mon site web ou mon application ?',
      answer:
        'Oui, nous accompagnons nos clients dans le choix de solutions d’hébergement adaptées (AWS, Vercel, OVH, etc.) en fonction de la performance, de la scalabilité et du coût. Nous assurons également le déploiement et la configuration nécessaires.',
    },
    {
      question:
        'Proposez-vous des services de maintenance pour les sites web et les applications que vous développez ?',
      answer:
        'Nous offrons des services de maintenance réguliers qui incluent la correction de bugs, la mise à jour de sécurité, les optimisations de performance et l’ajout de nouvelles fonctionnalités selon vos besoins.',
    },
    {
      question:
        'Comment puis-je suivre l’avancement de mon projet de développement ?',
      answer:
        'Nous utilisons des outils comme Jira ou Trello pour un suivi transparent et collaboratif. Vous recevez des rapports réguliers et pouvez consulter l’état d’avancement en temps réel grâce à notre système de gestion de projet.',
    },
    {
      question: 'Offrez-vous des services de design en plus du développement ?',
      answer:
        'Oui, nous avons une équipe dédiée pour le design UX/UI qui travaille en étroite collaboration avec nos développeurs afin de créer des interfaces intuitives et adaptées à votre audience cible.',
    },
    {
      question: 'Quels sont les délais moyens pour terminer un projet ?',
      answer:
        'Un projet standard peut durer entre 4 et 12 semaines, selon sa portée. Les projets complexes, intégrant plusieurs fonctionnalités sur mesure ou de multiples plateformes, peuvent nécessiter plus de temps.',
    },
    {
      question:
        'Puis-je demander des modifications après la livraison du projet ?',
      answer:
        'Absolument. Nous proposons des forfaits post-livraison pour intégrer des modifications ou des évolutions à votre solution. Ces ajustements peuvent inclure des ajouts fonctionnels ou des optimisations en fonction de vos retours.',
    },
    {
      question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
      answer:
        'Oui, nous collaborons aussi bien avec des startups cherchant à se lancer qu’avec des PME et des grandes entreprises souhaitant moderniser leurs systèmes numériques.',
    },
    {
      question:
        'Quels sont les avantages de travailler avec vous pour le développement de mon projet ?',
      answer:
        'Nous offrons une expertise technique avancée, une approche centrée sur le client et des solutions sur mesure adaptées à vos besoins spécifiques. De plus, nous nous engageons à respecter les délais et à fournir une assistance continue.',
    },
    {
      question:
        'Quelle est votre politique en matière de confidentialité et de sécurité des données ?',
      answer:
        'Nous respectons des normes strictes pour garantir la confidentialité et la sécurité des données. Tous nos projets incluent des pratiques conformes au RGPD et des solutions de protection avancées contre les menaces potentielles.',
    },
  ];
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="mx-auto mt-10 text-center text-white">
      <Fade>
        <h1 className="font-poppins text-5xl font-bold xxs:text-xl sm:text-3xl lg:text-5xl">
          Questions fréquemment posées
        </h1>
      </Fade>
      <Fade>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Rechercher une question..."
            className="w-full max-w-lg rounded-md border border-gray-300 p-2 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Fade>
      <Fade cascade>
        <article className="mt-10 grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-2">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="p-4">
              <h2 className="font-poppins text-2xl font-bold xxs:text-lg sm:text-2xl">
                {faq.question}
              </h2>
              <p className="mt-2 text-sm opacity-75">{faq.answer}</p>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="col-span-full text-sm opacity-75">
              Aucune question ne correspond à votre recherche.
            </p>
          )}
        </article>
      </Fade>
    </section>
  );
};

export default PricingFAQ;
