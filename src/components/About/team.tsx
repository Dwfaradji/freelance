import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import myPhoto from '@/images/about/photo-profil-1920.webp';
import back from '@/images/about/Nakamoto-1920.webp';
import front from '@/images/about/africain-1920.webp';
import design from '@/images/about/designer-1920.webp';

const TeamSection = () => {
  const team = [
    {
      name: 'George Palonga',
      role: 'Développeur Web & Mobile Nomade',
      desc: "Spécialisé dans les Progressive Web Apps (PWA) et les interfaces mobiles utilisables hors-ligne, George conçoit des outils réactifs et fluides pour les professionnels de terrain et éducateurs en déplacement.",
      image: front,
      color: 'from-blue-500/20'
    },
    {
      name: 'Léo Zang',
      role: 'Ingénieur Backend & Sécurité Cloud',
      desc: "Léo conçoit des architectures logicielles et bases de données robustes. Il garantit le cloisonnement des données, la gestion stricte des droits d'accès (RBAC) et la conformité au RGPD.",
      image: back,
      color: 'from-violet-500/20'
    },
    {
      name: 'Sophie Cartin',
      role: 'UX/UI Designer Métier & Accessibilité',
      desc: "Formée à l'ergonomie cognitive, Sophie conçoit des interfaces accessibles (RGAA) et épurées pour limiter la fatigue cognitive et faciliter la prise en main par les équipes d'établissements.",
      image: design,
      color: 'from-pink-500/20'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Notre <span className="text-highlight">Équipe</span></h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Des compétences complémentaires en ingénierie logicielle, design et gestion de projet au service de vos défis numériques.
        </p>
      </div>

      {/* Founder Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 relative overflow-hidden glass p-8 md:p-12 rounded-3xl border border-white/10 group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-transparent opacity-50 z-0" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 mix-blend-overlay z-10" />
            <Image
              src={myPhoto}
              alt="Boucif Faradji - Fondateur"
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-white">Boucif Faradji</h3>
              <p className="text-primary-400 font-medium tracking-wide uppercase text-sm mt-1">Fondateur & Architecte Logiciel</p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Ingénieur logiciel et architecte passionné par l’impact concret du numérique dans le secteur médico-social. Mon objectif est d’accompagner les associations gestionnaires et établissements (IME, SESSAD, ESAT, EHPAD) dans la conception d’outils sur-mesure (logiciels métiers, applications nomades, Floticar) qui résolvent leurs irritants opérationnels.
            </p>
            <p className="text-muted leading-relaxed">
              DevEvoke est née d’une conviction : les organisations médico-sociales méritent des solutions numériques modernes, ergonomiques et souveraines, développées dans le respect le plus strict de la confidentialité et du RGPD.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:glass-strong transition-all duration-300 text-center group relative overflow-hidden"
          >
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b ${member.color} blur-3xl opacity-50 z-0`} />
            
            <div className="relative z-10">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-xs font-medium text-primary-400 uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-muted-light text-sm leading-relaxed">{member.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
