import React from 'react';

export const metadata = {
  title:
    'Contactez DevEvoke - Nous sommes là pour répondre à toutes vos questions sur le développement web',
  description:
    "Contactez l'équipe de DevEvoke pour toute question, demande de renseignement ou collaboration potentielle dans le domaine du développement web. Nous sommes disponibles pour vous fournir des réponses précises et des conseils professionnels. Envoyez-nous un message dès maintenant et laissez-nous vous aider à atteindre vos objectifs en développement web.",
  alternates: {
    canonical: 'https://www.devevoke.com/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
