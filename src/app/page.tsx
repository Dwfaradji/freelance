'use client';
import React from 'react';
import { motion } from 'motion/react';

import Scroll from '@/components/ui/scroll';
import Header from '@/components/Home/header';
import AnimatedStats from '@/components/Home/AnimatedStats';
import Projects from '@/components/Home/projects';
import Offerings from '@/components/Home/offerings';
import Pricing from '@/components/Home/pricing';
import FeaturedTemplate from '@/components/Home/featuredTemplate';
import Testimonial from '@/components/Home/testimonial';
import BlogHome from '@/components/Home/blogHome';
import NewsLetters from '@/components/ui/Newsletters/newsLetters';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <>
      <Scroll />
      <Header />
      <AnimatedStats />
      <Projects />
      <Offerings />

      {/* Section Tarifs */}
      <section id="section3" className="py-16 md:py-24 lg:py-32 relative">
        {/* Section separator */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-2xl">
              <span className="section-label">Transparence & Qualité</span>
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
                Un investissement{' '}
                <span className="text-gradient drop-shadow-sm">
                  rentable
                </span>
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Des solutions haut de gamme, sans surprise. Choisissez la formule adaptée à votre croissance et bénéficiez d&apos;un paiement flexible avec 30% à la commande, le solde à la livraison.
              </p>
            </div>
            <Link href="/tarifs" className="btn-outline self-start shrink-0 mt-4 sm:mt-0 hover:bg-white/5">
              Voir toutes les formules →
            </Link>
          </motion.div>
          <Pricing />
        </div>
      </section>

      <FeaturedTemplate />
      <Testimonial />
      <BlogHome />
      <NewsLetters />
    </>
  );
};

export default Page;