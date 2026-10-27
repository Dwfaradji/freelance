import React from 'react';
import {
  EmailLayout,
  EmailBadge,
  EmailHeading,
  EmailText,
  EmailCard,
  EmailSignature,
} from '../../components';
import { NewsletterEmailData } from '../../email-types';
import { emailTokens } from '../../design-tokens';

interface NewsletterConfirmationProps {
  data: NewsletterEmailData;
  referenceId: string;
}

export function NewsletterConfirmationEmail({ data, referenceId }: NewsletterConfirmationProps) {
  return (
    <EmailLayout
      preview="Bienvenue dans la communauté DevEvoke"
      referenceId={referenceId}
    >
      <EmailBadge variant="success">Inscription Confirmée</EmailBadge>

      <EmailHeading as="h1">
        Bienvenue dans la communauté DevEvoke
      </EmailHeading>

      <EmailText variant="bold" size="md">
        Bonjour,
      </EmailText>

      <EmailText variant="default">
        Votre inscription à notre lettre d'information avec l'adresse <strong style={{ color: '#ffffff' }}>{data.email}</strong> a bien été enregistrée.
      </EmailText>

      <EmailCard title="Ce que vous allez recevoir">
        <div style={{ color: emailTokens.colors.muted, fontSize: '13px', lineHeight: '1.7' }}>
          <div style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#ffffff' }}>• Analyses & Veille technologique :</strong> nos retours d'expérience sur l'architecture logicielle, le SaaS et les technologies modernes.
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#ffffff' }}>• Numérisation médico-sociale :</strong> études de cas pratiques sur la modernisation des ESSMS et associations.
          </div>
          <div>
            <strong style={{ color: '#ffffff' }}>• Zéro spam :</strong> nous envoyons uniquement des contenus de fond à haute valeur ajoutée, avec désinscription libre en 1 clic.
          </div>
        </div>
      </EmailCard>

      <EmailSignature customSignOff="Merci pour votre confiance," />
    </EmailLayout>
  );
}

export function renderNewsletterConfirmationText(data: NewsletterEmailData, referenceId: string): string {
  return `
==================================================
BIENVENUE DANS LA NEWSLETTER DEVEVOKE
Réf : ${referenceId}
==================================================

Bonjour,

Votre inscription à la lettre d'information DevEvoke avec l'adresse ${data.email} a bien été enregistrée.

AU PROGRAMME :
- Veille technologique & architecture logicielle.
- Retours d'expérience et études de cas concrètes.
- Fréquence modérée, respect strict de votre vie privée et désinscription libre à tout moment.

Merci pour votre confiance,

L'équipe DevEvoke
Agence digitale
Sites web · Applications · SaaS · Solutions métier
www.devevoke.com
`.trim();
}
