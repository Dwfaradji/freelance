'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Page = () => {
  return (
    <div className="overflow-hidden pb-24">
      {/* Hero Header */}
      <header className="mx-auto mb-16 mt-8 text-center px-4">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Légal</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Conditions Générales de{' '}
            <span className="text-gradient drop-shadow-sm">
              Vente
            </span>
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </Fade>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce delay={200}>
          <article className="glass rounded-3xl border border-white/5 p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary-400">
              
              <h2>1. Objet</h2>
              <p>Les présentes Conditions Générales de Vente définissent les modalités de fourniture de prestations de développement logiciel, création d'applications web, solutions SaaS et services informatiques proposés par Devevoke.</p>

              <h2>2. Champ d'application</h2>
              <p>Les présentes CGV s'appliquent à toute prestation réalisée dans un cadre professionnel, notamment pour des clients publics ou assimilés.</p>

              <h2>3. Acceptation</h2>
              <p>Toute commande implique l'acceptation pleine et entière des présentes CGV. Le client reconnaît en avoir pris connaissance avant signature du devis.</p>

              <h2>4. Devis et commande</h2>
              <p>Les prestations font l'objet d'un devis détaillé. La commande est ferme et définitive à compter de :</p>
              <ul>
                <li>la signature du devis</li>
                <li>le versement de l'acompte prévu</li>
              </ul>

              <h2>5. Modalités de paiement</h2>
              <p>Un acompte de 30 % est exigé avant le démarrage du projet.</p>
              <p>Cet acompte est définitif et non remboursable, sauf cas de force majeure imputable à Devevoke.</p>
              <p>Le solde de 70 % est exigible à la livraison finale du projet, avant mise en production.</p>

              <h2>6. Hébergement et infrastructure</h2>
              <p>L'hébergement de l'application et la gestion de l'infrastructure sont assurés à la demande du client.</p>
              <p>Ces services font l'objet d'une facturation distincte, indépendante du développement, selon :</p>
              <ul>
                <li>une facturation mensuelle forfaitaire, ou</li>
                <li>une facturation basée sur la consommation réelle des ressources (serveurs, trafic, stockage)</li>
              </ul>
              <p>Les coûts peuvent évoluer en fonction de l'usage. Devevoke s'engage à informer le client en amont de toute modification significative.</p>

              <h2>7. Délais de réalisation</h2>
              <p>Les délais sont donnés à titre indicatif.</p>
              <p>Devevoke ne pourra être tenue responsable des retards causés par :</p>
              <ul>
                <li>absence de validation du client</li>
                <li>retard de fourniture des éléments nécessaires</li>
                <li>modifications demandées en cours de projet</li>
              </ul>

              <h2>8. Obligations du client</h2>
              <p>Le client s'engage à :</p>
              <ul>
                <li>fournir les éléments nécessaires au projet dans des délais raisonnables</li>
                <li>valider les étapes de développement</li>
                <li>collaborer activement au bon déroulement du projet</li>
              </ul>

              <h2>9. Propriété intellectuelle</h2>
              <p>Les livrables restent la propriété de Devevoke jusqu'au paiement complet.</p>
              <p>Après paiement intégral :</p>
              <ul>
                <li>les droits d'utilisation sont transférés au client</li>
                <li>le client obtient un droit d'exploitation non exclusif ou exclusif selon mention au devis</li>
              </ul>
              <p>Toute reproduction, revente ou diffusion sans autorisation est interdite.</p>
              <p><em>Note : Le client reconnaît avoir pris connaissance et accepter sans réserve les CGV régissant son devis.</em></p>

              <h2>10. Maintenance et support</h2>
              <p>Sauf mention contraire au devis :</p>
              <ul>
                <li>aucune maintenance n'est incluse</li>
                <li>aucun support technique n'est garanti après livraison</li>
              </ul>
              <p>Toute maintenance ou support fait l'objet d'un contrat séparé.</p>

              <h2>11. Niveau de service (SLA)</h2>
              <p>Sauf engagement spécifique au devis :</p>
              <ul>
                <li>aucune garantie de disponibilité n'est contractuellement assurée</li>
                <li>les performances peuvent dépendre de services tiers (hébergeurs, APIs, etc.)</li>
              </ul>
              <p>Toute exigence de disponibilité (type SLA) doit être définie contractuellement.</p>

              <h2>12. Responsabilité</h2>
              <p>Devevoke est tenue à une obligation de moyens.</p>
              <p>Sa responsabilité ne pourra être engagée pour :</p>
              <ul>
                <li>pertes de données non imputables à Devevoke</li>
                <li>interruptions de service liées à des prestataires tiers</li>
                <li>dommages indirects (perte d'exploitation, perte de revenus, etc.)</li>
              </ul>

              <h2>13. Données et confidentialité</h2>
              <p>Les applications développées ne sont pas destinées à traiter des données personnelles sensibles.</p>
              <p>Sauf demande spécifique et contractualisation dédiée, les solutions livrées sont conçues pour un usage pédagogique sans gestion de données personnelles ou d'authentification complexe.</p>

              <h2>14. Modifications et évolutions</h2>
              <p>Toute demande de modification non prévue dans le devis initial fera l'objet d'une facturation complémentaire.</p>

              <h2>15. Résiliation</h2>
              <p>En cas d'arrêt du projet par le client :</p>
              <ul>
                <li>les sommes déjà versées restent acquises à Devevoke</li>
                <li>les travaux réalisés sont dus au prorata</li>
              </ul>

              <h2>16. Force majeure</h2>
              <p>Devevoke ne pourra être tenue responsable en cas d'événement indépendant de sa volonté empêchant l'exécution du contrat.</p>

              <h2>17. Droit applicable et litiges</h2>
              <p>Les présentes CGV sont soumises au droit français.</p>
              <p>Tout litige relève des tribunaux compétents en France.</p>

              <h2>18. Contact</h2>
              <p>
                <strong>Devevoke</strong><br />
                Email : <a href="mailto:contact@devevoke.com">contact@devevoke.com</a><br />
                Site : <a href="https://www.devevoke.com" target="_blank" rel="noopener noreferrer">www.devevoke.com</a>
              </p>
            </div>
          </article>
        </Fade>
      </div>
    </div>
  );
};

export default Page;
