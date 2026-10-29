'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Laptop, Server, Award, Sparkles } from 'lucide-react';

const AboutMore = () => {
  const values = [
    {
      title: 'Protection des Données & Éthique',
      desc: 'Nous appliquons les principes de Privacy by Design et de minimisation. Nos architectures respectent scrupuleusement le RGPD et les préconisations de la CNIL pour sécuriser les données des usagers et de leurs familles.',
      icon: <ShieldCheck className="w-8 h-8 text-primary-400" />
    },
    {
      title: 'Sobriété & Ergonomie Métier',
      desc: 'L’informatique doit libérer du temps pour l’accompagnement. Nous concevons des interfaces épurées, accessibles (RGAA) et ultra-intuitives pour les éducateurs, équipes soignantes et personnels administratifs.',
      icon: <Sparkles className="w-8 h-8 text-secondary-400" />
    },
    {
      title: 'Accompagnement Humain & Proximité',
      desc: 'DevEvoke est une agence digitale française indépendante. Nous privilégions le dialogue direct avec les directions et les équipes terrain, sans intermédiaires commerciaux inutiles.',
      icon: <HeartHandshake className="w-8 h-8 text-pink-400" />
    }
  ];

  const strengths = [
    {
      title: "Expertise Logicielle, Web & SaaS",
      desc: "Une équipe d’ingénieurs et de designers UI/UX spécialisés dans la conception de plateformes web modernes, d’applications mobiles et d’outils métiers sur-mesure pour les acteurs du médico-social.",
      details: [
        "Développement Full-Stack Next.js, React et TypeScript de pointe.",
        "Applications mobiles et tablettes adaptées aux tournées terrain (mode hors-ligne).",
        "Conception de logiciels métiers sur-mesure et d'automatisations administratives."
      ],
      icon: <Laptop className="w-6 h-6 text-white" />,
      color: 'bg-primary-500/20'
    },
    {
      title: 'Hébergement Souverain en France',
      desc: 'Vos données restent hébergées sur des infrastructures cloud sécurisées localisées exclusivement sur le territoire français.',
      details: [
        "Hébergement 100% basé en France (serveurs certifiés ISO 27001).",
        "Chiffrement des flux (TLS 1.3) et chiffrement des données stockées (AES-256).",
        "Sauvegardes quotidiennes externalisées et contrôle d'accès strict (RBAC)."
      ],
      icon: <Server className="w-6 h-6 text-white" />,
      color: 'bg-secondary-500/20'
    },
    {
      title: 'Spécialisation Médico-Sociale',
      desc: 'Une compréhension concrète des organisations associatives et des défis rencontrés au quotidien dans les établissements.',
      details: [
        "Prise en compte des réalités multi-sites des associations gestionnaires.",
        "Outils adaptés aux contraintes des IME, SESSAD, ESAT, EHPAD et FAM.",
        "Zéro jargon technique superflu : des solutions directement opérationnelles."
      ],
      icon: <Award className="w-6 h-6 text-white" />,
      color: 'bg-emerald-500/20'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: NOS VALEURS */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Notre ADN</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-4">
              Des valeurs ancrées dans <span className="text-highlight">le service public & associatif</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nous concevons la technologie comme un soutien discret et efficace au service des équipes qui accompagnent au quotidien les personnes vulnérables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: NOS FORCES */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Pourquoi DevEvoke</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-4">
              L'alliance de l’expertise logicielle et de la <span className="text-highlight">connaissance du terrain</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strengths.map((str, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-strong p-8 rounded-3xl border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 rounded-2xl ${str.color} w-fit mb-6 border border-white/10`}>
                    {str.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{str.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{str.desc}</p>
                  
                  <ul className="space-y-3">
                    {str.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMore;
