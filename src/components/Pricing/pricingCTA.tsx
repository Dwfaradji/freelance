import React from 'react';
import Link from 'next/link';

const PricingCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden mb-16">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto glass p-10 sm:p-16 rounded-3xl text-center border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Besoin d&apos;un coup de pouce pour choisir ?
        </h2>
        <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
          Trouver la solution idéale peut sembler difficile, mais nos templates sont conçus pour vous inspirer et vous simplifier la tâche. Explorez nos meilleures options pour faire un choix éclairé.
        </p>
        <Link href="/templates" className="btn-primary inline-flex">
          Explorer les Templates →
        </Link>
      </div>
    </section>
  );
};

export default PricingCTA;
