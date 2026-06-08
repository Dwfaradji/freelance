import React from 'react';
import { motion } from 'motion/react';

const AboutMore = () => {
  const values = [
    {
      title: 'Éthique & Secret Médical',
      desc: 'Nous considérons les données de santé comme le patrimoine le plus intime d\'un individu. Nous concevons des solutions strictement conformes HDS et RGPD, garantissant la protection absolue des dossiers patients informatisés.',
      icon: (
        <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
        </svg>
      )
    },
    {
      title: 'Expertise Interopérabilité',
      desc: 'L\'isolement des données nuit au parcours de soins. Nous maîtrisons les normes HL7, FHIR, et nous interfaçons vos applications avec les services socles de l\'État (INS, DMP) via le Ségur du Numérique.',
      icon: (
        <svg className="w-8 h-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: 'Design Centré Soignant',
      desc: 'Nous luttons contre la fatigue d\'alerte. Nous développons des interfaces ergonomiques fluides pour réduire drastiquement la charge mentale et administrative, redonnant ainsi du temps pour le soin.',
      icon: (
        <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    }
  ];

  const strengths = [
    {
      title: "Ingénierie MedTech d'Élite",
      desc: "Une équipe composée exclusivement d'architectes cloud, de développeurs experts et de designers UX spécialisés dans la modélisation de Systèmes d'Information Hospitaliers (SIH) et d'applications cliniques.",
      details: [
        "Maîtrise complète des normes FHIR, HL7 et profils IHE.",
        "Développement de logiciels métiers complexes (DUI, facturation FIDES).",
        "Pratiques d'ingénierie 'Clean Architecture' pour garantir une dette technique nulle."
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      color: 'bg-primary-500/20'
    },
    {
      title: 'Infrastructures HDS Souveraines',
      desc: 'Aucun compromis sur la souveraineté. Nous hébergeons exclusivement les données vitales sur des serveurs en France, certifiés Hébergeur de Données de Santé (HDS).',
      details: [
        "Hébergement 100% basé en France (SecNumCloud & HDS).",
        "Architecture réseau micro-segmentée et Zéro Trust.",
        "Plan de Continuité d'Activité (PCA) et Plan de Reprise (PRA) testés annuellement."
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      color: 'bg-secondary-500/20'
    },
    {
      title: 'Accompagnement Réglementaire',
      desc: 'Nous vous déchargeons de la complexité légale. Accompagnement aux déclarations CNIL, gestion des consentements patients, et sécurisation juridique.',
      details: [
        "Préparation de la documentation technique pour le Marquage CE Dispositif Médical.",
        "Audits de cybersécurité (Pentesting) réguliers sur toutes nos applications.",
        "Gestion intégrée du registre des traitements RGPD de votre établissement."
      ],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      color: 'bg-violet-500/20'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Valeurs */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nos <span className="text-gradient">Valeurs</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:glass-strong transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pourquoi Nous Choisir */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pourquoi <span className="text-gradient drop-shadow-sm">DevEvoke</span> ?</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">Un partenaire technologique stratégique qui comprend viscéralement les contraintes du secteur de la santé et les exigences de la haute sécurité.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group glass shadow-2xl"
            >
              <div className="absolute inset-0 bg-surface/50 backdrop-blur-md z-0" />
              <div className={`absolute -top-10 -right-10 w-64 h-64 ${s.color} blur-[80px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-0`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{s.desc}</p>
                  
                  <ul className="space-y-4 mt-auto">
                    {s.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300 leading-relaxed">
                        <svg className="w-5 h-5 text-green-400 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutMore;
