import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Section,
} from '@react-email/components';
import { emailTokens } from '../design-tokens';
import { EmailContainer } from './EmailContainer';
import { EmailHeader } from './EmailHeader';
import { EmailFooter } from './EmailFooter';

interface EmailLayoutProps {
  preview?: string;
  previewText?: string;
  referenceId?: string;
  children: React.ReactNode;
}

export function EmailLayout({
  preview,
  previewText,
  referenceId,
  children,
}: EmailLayoutProps) {
  const preheaderText = preview || previewText;

  const bodyStyle: React.CSSProperties = {
    backgroundColor: emailTokens.colors.background,
    fontFamily: emailTokens.typography.fontFamily,
    margin: 0,
    padding: '28px 12px',
    color: emailTokens.colors.text,
    WebkitFontSmoothing: 'antialiased',
  };

  const contentSectionStyle: React.CSSProperties = {
    padding: '32px 32px 28px 32px',
  };

  return (
    <Html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
      </Head>
      {preheaderText && <Preview>{preheaderText}</Preview>}
      <Body style={bodyStyle}>
        <EmailContainer>
          <EmailHeader referenceId={referenceId} />
          <Section style={contentSectionStyle}>
            {children}
          </Section>
          <EmailFooter />
        </EmailContainer>
      </Body>
    </Html>
  );
}
