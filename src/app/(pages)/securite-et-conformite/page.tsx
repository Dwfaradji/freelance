import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Sécurité, Conformité et Hébergement HDS | Devevoke",
  description: "Découvrez les engagements de Devevoke pour la protection des données médico-sociales : conformité stricte au RGPD, hébergement certifié HDS en France, sécurité avancée (MFA, chiffrement) et fiabilité.",
};

const SecuriteConformitePage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Sécurité, Conformité et Hébergement des Données de Santé
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Chez Devevoke, nous sommes conscients que la confiance est le fondement de toute solution technologique déployée dans le secteur de la santé. Cette page détaille l'ensemble de nos engagements juridiques, techniques et organisationnels pour garantir la confidentialité et l'intégrité absolue de vos données sensibles.
          </p>
        </div>

        <div className="space-y-12 text-gray-700 dark:text-gray-300">
          <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Devevoke : Votre Partenaire Technologique de Confiance
            </h2>
            <p className="leading-relaxed">
              Devevoke est un éditeur de logiciels spécialisé dans la conception de solutions numériques dédiées au secteur médico-social et à l’e-santé. Notre mission est d'accompagner les établissements (EHPAD, cliniques, centres de soins, associations de santé) en leur fournissant des outils performants, sécurisés et respectueux des réglementations en vigueur.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Une Solution Conçue pour le Secteur Médico-Social
            </h2>
            <p className="leading-relaxed">
              Notre application de gestion simplifie le suivi quotidien des patients tout en garantissant un haut niveau d'exigence technique. Pensée spécifiquement pour les professionnels du soin et de l'accompagnement, elle centralise les informations de santé, optimise les parcours de prise en charge et facilite la coordination inter-équipes au sein d'un environnement strictement contrôlé et cloisonné.
            </p>
          </section>

          <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Conformité Stricte au RGPD et aux Exigences de la CNIL
            </h2>
            <p className="leading-relaxed">
              Le traitement des données à caractère personnel, et a fortiori des données de santé, requiert une rigueur absolue. Devevoke s’engage à respecter scrupuleusement le Règlement Général sur la Protection des Données (RGPD) ainsi que les recommandations de la Commission Nationale de l'Informatique et des Libertés (CNIL). Nos processus intègrent les principes de <strong className="font-semibold">Privacy by Design</strong> (protection des données dès la conception) et de <strong className="font-semibold">Privacy by Default</strong> (protection par défaut au plus haut niveau).
            </p>
          </section>

          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              4. Hébergement Certifié Données de Santé (HDS)
            </h2>
            <p className="leading-relaxed mb-4">
              La souveraineté et la protection physique des données sont des prérequis non négociables.
            </p>
            <p className="leading-relaxed">
              Toutes les données générées et traitées par notre application sont stockées exclusivement en France, sur des infrastructures bénéficiant de la certification <strong className="font-semibold text-blue-600 dark:text-blue-400">Hébergeur de Données de Santé (HDS)</strong>. Cette certification, encadrée par l'Agence du Numérique en Santé (ANS), atteste d'un très haut niveau d'exigence en matière de sécurité physique et logique, garantissant ainsi l'intégrité et la disponibilité continue des dossiers patients.
            </p>
          </section>

          <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              5. Sécurité Avancée et Protection des Infrastructures
            </h2>
            <p className="leading-relaxed mb-6">
              Nous déployons un arsenal de mesures techniques de pointe pour prévenir tout accès non autorisé :
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">✔</span>
                <span><strong className="font-semibold text-gray-900 dark:text-white">Chiffrement renforcé :</strong> Les données sont chiffrées de bout en bout, tant lors de leur transmission (protocoles TLS/SSL robustes) que lors de leur stockage au repos (AES-256).</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">✔</span>
                <span><strong className="font-semibold text-gray-900 dark:text-white">Authentification Forte :</strong> L'accès à la solution est sécurisé par un système d'authentification multifacteur (MFA) systématique.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">✔</span>
                <span><strong className="font-semibold text-gray-900 dark:text-white">Gestion des Accès (RBAC) :</strong> Les droits d'accès sont strictement définis selon le principe du moindre privilège. Chaque utilisateur n'accède qu'aux informations strictement nécessaires à ses fonctions.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">✔</span>
                <span><strong className="font-semibold text-gray-900 dark:text-white">Traçabilité Inaltérable :</strong> Chaque action fait l'objet d'une journalisation (logs) horodatée de manière inaltérable, permettant un audit complet et continu.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">✔</span>
                <span><strong className="font-semibold text-gray-900 dark:text-white">Sauvegardes et PRA :</strong> Des sauvegardes chiffrées quotidiennes, avec un Plan de Reprise d'Activité (PRA) testé régulièrement.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              6. Respect et Exercice des Droits des Patients
            </h2>
            <p className="leading-relaxed mb-4">
              En conformité avec le cadre légal européen, notre logiciel intègre les fonctionnalités nécessaires pour faciliter la gestion des demandes liées aux droits des personnes concernées :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extraire les informations pour répondre aux demandes de <strong>droit d'accès</strong> et de <strong>portabilité</strong>.</li>
              <li>Procéder aux demandes de <strong>rectification</strong> d'informations inexactes.</li>
              <li>Gérer les durées de conservation légales et exécuter le <strong>droit à l'effacement</strong> de manière sécurisée et irréversible.</li>
            </ul>
          </section>

          <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Clarification des Responsabilités
            </h2>
            <p className="leading-relaxed mb-4">
              Pour garantir une parfaite sécurité juridique et opérationnelle, les rôles sont clairement définis :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-600">
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">L'Établissement de Santé (Vous)</h3>
                <p className="text-sm">Agit en tant que <strong>Responsable de Traitement</strong>. Vous déterminez les finalités, recueillez le consentement, définissez les durées de conservation et gérez la relation avec le patient.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-600">
                <h3 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">Devevoke (Nous)</h3>
                <p className="text-sm">Agit exclusivement en qualité de <strong>Sous-Traitant</strong>. Nous traitons les données uniquement sur vos instructions documentées et déployons les moyens techniques pour assurer leur protection.</p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Accord de Traitement des Données (DPA)
            </h2>
            <p className="leading-relaxed">
              Toute souscription à notre solution est encadrée par un Accord de Traitement des Données (Data Processing Agreement - DPA). Ce contrat juridique formel lie Devevoke à votre établissement. Il détaille exhaustivement nos obligations en matière de sécurité, d'assistance technique, de processus de notification en cas de violation de données, et les modalités de restitution ou de suppression définitive.
            </p>
          </section>

          <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Engagement pour l'Accessibilité Numérique
            </h2>
            <p className="leading-relaxed">
              L'inclusion est au cœur de notre démarche éthique. Devevoke s'efforce de concevoir des interfaces conformes aux normes d'accessibilité (RGAA en France et recommandations internationales WCAG), afin de garantir que notre outil soit utilisable par l'ensemble des professionnels, y compris ceux en situation de handicap.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Transparence, Fiabilité et Confiance Mutuelle
            </h2>
            <p className="leading-relaxed">
              La sécurité n'est pas un état de fait, mais un processus continu. Nous mettons à disposition de nos clients des documentations claires et transparentes sur notre architecture de sécurité. De plus, nos systèmes font l'objet d'audits réguliers et de tests d'intrusion (pentests) par des organismes tiers et indépendants, afin de maintenir un niveau de fiabilité à toute épreuve face aux cybermenaces émergentes.
            </p>
          </section>

          <section className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl shadow-sm border border-red-100 dark:border-red-800/50">
            <h2 className="text-2xl font-semibold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              11. Avertissement Relatif à l'Usage de la Solution
            </h2>
            <p className="leading-relaxed text-red-900 dark:text-red-300">
              Le logiciel édité par Devevoke est un outil d'assistance à la gestion administrative, à la coordination et au suivi du parcours médico-social. <strong className="font-semibold">Il ne constitue en aucun cas un dispositif médical.</strong> L'application ne délivre pas de diagnostic clinique ou médical automatisé. Elle est exclusivement conçue pour assister l'organisation et le jugement des professionnels de santé qualifiés, sans jamais se substituer à leur expertise médicale et à leur libre arbitre.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SecuriteConformitePage;
