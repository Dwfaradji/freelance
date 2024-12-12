'use client';

import React from 'react';
import FormulaireDevis from '@/components/SlideDevis/formDevis';
import Slider from '@/components/SlideDevis/slider/slider';
import { data } from '@/data/dataSlideDevis';
import { prices } from '@/data/data';
import { slugify } from '@/utils/slugify';

type Props = {
  params: { slug: string };
};

type Price = {
  id: string;
  title: string;
  subtitle: string;
};

const SectionContent = ({ devis }: { devis: Price }) => {
  switch (devis.id) {
    case '1':
      return (
        <section>
          <h1 className="mb-4 text-center text-2xl font-bold">
            {devis.subtitle}
          </h1>
          <Slider data={data} />
        </section>
      );

    case '2':
      return (
        <section>
          <h1 className="mb-4 text-center text-2xl font-bold">
            {devis.subtitle}
          </h1>
          <article className="container mx-auto mb-8 w-3/4">
            <h2 className="mb-2 block font-bold">
              {' '}
              Augmentez vos ventes en ligne !{' '}
            </h2>
            <p>
              {`Offrez à vos clients une expérience d'achat fluide et optimisée
              avec un site e-commerce conçu pour convertir vos visiteurs en
              acheteurs fidèles. Nous vous accompagnons avec des fonctionnalités
              modernes et une performance de haut niveau.`}
            </p>
            <h2 className="mt-2 block font-bold">
              Prenez les devants en remplissant notre formulaire.
            </h2>
          </article>

          <FormulaireDevis hrefLink={'/'} />
        </section>
      );

    case '3':
      return (
        <section>
          <h1 className="mb-4 text-center text-2xl font-bold">
            {devis.subtitle}
          </h1>
          <article className="container mx-auto mb-8 w-3/4">
            <h2 className="mb-2 block font-bold">
              Optimisez votre gestion client !{' '}
            </h2>
            <p>
              Simplifiez vos processus internes et renforcez vos relations
              clients avec une solution CRM sur mesure. Augmentez votre
              productivité et fidélisez vos clients grâce à des outils adaptés à
              vos besoins.
            </p>
            <h2 className="mt-2 block font-bold">
              Remplissez notre formulaire pour découvrir comment nous pouvons
              vous accompagner.
            </h2>
          </article>

          <FormulaireDevis hrefLink={'/'} />
        </section>
      );

    case '4':
      return (
        <section>
          <h1 className="mb-4 text-center text-2xl font-bold">
            {devis.subtitle}
          </h1>
          <article className="container mx-auto mb-8 w-3/4">
            <h2 className="mb-2 block font-bold">
              Créez une solution SaaS innovante !{' '}
            </h2>
            <p>
              {`Développez une plateforme SaaS robuste et évolutive pour relever
              les défis de votre secteur. Grâce à notre expertise, nous vous
              aidons à concevoir une solution performante, prête à s'adapter aux
              besoins de votre entreprise.`}
            </p>
            <h2 className="mt-2 block font-bold">
              Commencez en remplissant notre formulaire.
            </h2>
          </article>

          <FormulaireDevis hrefLink={'/'} />
        </section>
      );

    case '5':
      return (
        <section>
          <h1 className="mb-4 text-center text-2xl font-bold">
            {devis.subtitle}
          </h1>
          <article className="container mx-auto mb-8 w-3/4">
            <h2 className="mb-2 block font-bold">
              Explorez le potentiel de la blockchain !{' '}
            </h2>
            <p>
              Offrez-vous des solutions sur mesure pour la blockchain : des
              NFTs, des applications DeFi ou des DAO. Nous créons des solutions
              sécurisées et innovantes, adaptées à vos projets ambitieux.
            </p>
            <h2 className="mt-2 block font-bold">
              Remplissez le formulaire pour commencer cette collaboration.
            </h2>
          </article>

          <FormulaireDevis hrefLink={'/'} />
        </section>
      );

    default:
      return <div className="text-center text-white">Section inconnue</div>;
  }
};

export default function Page({ params }: Props) {
  const { slug } = params;

  // Trouver les données correspondantes avec le slug
  const devis = prices.find((devis) => slugify(devis.title) === slug);

  if (!devis) {
    return <div className="text-center text-red-500">Devis introuvable</div>;
  }

  return (
    <div className=" p-6 text-white">
      <SectionContent devis={devis} />
    </div>
  );
}
