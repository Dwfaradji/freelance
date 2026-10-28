import React from 'react';
import PricingHeader from '@/components/Pricing/pricingHeader';
import PricingMain from '@/components/Pricing/pricingMain';
import PricingFAQ from '@/components/Pricing/pricingFAQ';
import PricingCTA from '@/components/Pricing/pricingCTA';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LegalNavSwitcher from '@/components/PagesInfo/LegalNavSwitcher';

const Page = () => {
  return (
    <div className="overflow-hidden">
      <Breadcrumb
        items={[{ label: 'Informations Tarifaires & Forfaits' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />
      <LegalNavSwitcher />

      {/* 
        PricingHeader contains the Page Hero and the Additional Services (Maintenance & Hébergement).
        It is rendered at the top because it has the Hero.
      */}
      <PricingHeader />

      {/* 
        PricingMain contains the large Web Development Plans 
      */}
      <div className="mt-8 mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Accompagnement & <span className="text-highlight">Solutions Sur-Mesure</span></h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Des architectures fiables conçues pour répondre aux besoins concrets des associations et établissements médico-sociaux. Chaque prestation inclut nativement le "Privacy by Design", l'hébergement souverain et la conformité RGPD.
          </p>
        </div>
        <PricingMain />
      </div>

      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default Page;
