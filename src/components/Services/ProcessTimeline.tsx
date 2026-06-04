'use client';
import React from 'react';
import { motion } from 'motion/react';
import { pageInfosProcess } from '@/data/data';

const ProcessTimeline = () => {
  // Filter out the H1 title and just get the steps (and final summary)
  const steps = pageInfosProcess.filter(step => step.title && step.text);
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-block">Méthodologie</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Notre processus de <span className="text-gradient">création</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-surface border border-primary/40 -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                    <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary-400 mb-2 block">
                        Étape {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title.replace(/^Étape \d+ : /, '')}
                      </h3>
                      <p className="text-muted leading-relaxed text-sm">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
