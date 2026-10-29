import React from 'react';

/**
 * PageTransition : wrapper passe-plat léger sans blocage du rendu SSR ni écran opaque.
 * Le contenu est immédiatement disponible pour le navigateur, le LCP et le SEO.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
