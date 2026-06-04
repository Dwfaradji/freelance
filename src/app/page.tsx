'use client';
import React from 'react';
import { motion } from 'motion/react';
import { MyProvider } from '@/context/context';
import { initialState, reducer } from '@/context/reducer';

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
    <MyProvider initialState={initialState} reducer={reducer}>
      <Scroll />
      <Header />
      <AnimatedStats />
      <Projects />
      <Offerings />

      {/* Section Tarifs */}
      <section id="section3" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="section-label">Tarifs</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Des formules{' '}
              <span
                className="text-gradient"
                style={{ backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              >
                adaptées
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-muted">
              Choisissez la formule qui correspond à vos besoins et à votre budget.
              Paiement flexible — 30% à la commande, solde à la livraison.
            </p>
          </div>
          <Link href="/tarifs" className="btn-outline self-start shrink-0 text-sm">
            Toutes les formules →
          </Link>
        </motion.div>
        <Pricing />
      </section>

      <FeaturedTemplate />
      <Testimonial />
      <BlogHome />
      <NewsLetters />
    </MyProvider>
  );
};

export default Page;