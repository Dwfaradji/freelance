'use client';
import React from 'react';
import { motion } from 'motion/react';
import { services } from '@/data/data';

const ServiceList = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Illustration / Graphic */}
              <div className="w-full lg:w-5/12 h-64 sm:h-80 rounded-3xl glass border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Abstract graphic representing the service */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary blur-3xl opacity-40 group-hover:opacity-70 group-hover:scale-125 transition-all duration-700" />
                  <span className="text-8xl font-black text-white/5 absolute">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Sub-items / Tech */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-sm">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceList;
