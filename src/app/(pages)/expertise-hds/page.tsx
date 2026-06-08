'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const ExpertiseHDS = () => {
  return (
    <>
      <header className="mx-auto mb-16 text-center mt-8 px-4">
        <Fade direction="up" triggerOnce>
          <span className="section-label mb-4 inline-block">Expertise HDS</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            L'Excellence Sécuritaire <span className="text-gradient drop-shadow-sm">en E-Santé</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            Chez DevEvoke, nous concevons des logiciels médicaux respectant les normes les plus strictes. La certification HDS n'est pas qu'une obligation légale, c'est le socle de confiance de toute application en santé.
          </p>
        </Fade>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Fade direction="left" triggerOnce>
            <div className="glass p-8 sm:p-12 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">L'Hébergement de Données de Santé (HDS)</h2>
              <p className="text-muted leading-relaxed mb-6">
                Le traitement de données médicales à caractère personnel est un acte sensible. Notre infrastructure garantit que vos applications sont déployées sur des environnements d'hébergement souverains, certifiés HDS en France, protégeant ainsi l'intimité de vos patients contre toute menace ou perte de données.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Audits physiques et logiques réguliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Plan de Reprise d'Activité (PRA) inférieur à 4h</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Chiffrement de bout en bout (AES-256)</span>
                </li>
              </ul>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="space-y-8">
              <div className="glass-strong p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Interopérabilité & HL7 / FHIR</h3>
                <p className="text-muted-light text-sm leading-relaxed">
                  Une application de santé ne vit pas seule. Nous intégrons les standards internationaux (HL7, FHIR) pour connecter vos outils aux Dossiers Médicaux Partagés (DMP) et à la Messagerie Sécurisée en Santé (MSSanté), garantissant un parcours patient sans couture.
                </p>
              </div>
              
              <div className="glass-strong p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Conformité RGPD "Privacy by Design"</h3>
                <p className="text-muted-light text-sm leading-relaxed">
                  Avant même d'écrire la première ligne de code, nous intégrons la protection de la vie privée. Anonymisation des données de test, registre de traitement CNIL et accompagnement de vos DPO font partie de notre standard.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Votre projet mérite une sécurité absolue
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Discutons de vos enjeux de conformité HDS et concevons ensemble une application robuste pour vos soignants.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Contacter nos experts santé →
          </Link>
        </div>
      </section>
    </>
  );
};

export default ExpertiseHDS;
