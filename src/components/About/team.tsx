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
      role: 'Développeur Frontend Santé',
      desc: "Ancien développeur d'applications critiques, George est spécialisé dans les interfaces de télésurveillance et les PWA (Progressive Web Apps) hors-ligne. Son code garantit une fluidité absolue pour le personnel soignant, même dans les zones blanches des hôpitaux.",
      image: front,
      color: 'from-blue-500/20'
    },
    {
      name: 'Léo Zang',
      role: 'Ingénieur Backend & Sécurité',
      desc: "Léo est notre expert en architecture Cloud HDS. Il déploie des infrastructures Zéro Trust et s'assure de l'interopérabilité totale de nos systèmes (HL7, FHIR, API Ségur) pour garantir l'intégrité et le cloisonnement des dossiers médicaux.",
      image: back,
      color: 'from-violet-500/20'
    },
    {
      name: 'Sophie Cartin',
      role: 'UX/UI Designer Clinique',
      desc: "Formée aux sciences cognitives, Sophie conçoit des interfaces médicales selon les normes d'accessibilité RGAA. Elle pratique le design centré soignant pour limiter la fatigue d'alerte et réduire les erreurs de saisie en milieu clinique.",
      image: design,
      color: 'from-pink-500/20'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Notre <span className="text-gradient drop-shadow-sm">Équipe</span></h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Le succès d'un projet repose sur l'expertise de chaque membre. Voici les talents qui donnent vie à vos ambitions numériques.
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
              <p className="text-primary-400 font-medium tracking-wide uppercase text-sm mt-1">Fondateur & Architecte e-Santé</p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Passionné par l'innovation médicale et les nouvelles technologies, je suis un Architecte Logiciel spécialisé dans l'e-santé avec une forte expertise HDS et FHIR. Mon objectif est de transformer les défis complexes des hôpitaux et EHPAD en solutions web et mobiles performantes, hautement sécurisées, et parfaitement interopérables.
            </p>
            <p className="text-muted leading-relaxed">
              Devevoke est le fruit de ma vision : offrir aux établissements de soins et startups MedTech une ingénierie de pointe alliée à une éthique irréprochable, pour redonner du temps médical aux soignants dans un univers numérique en pleine mutation.
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
