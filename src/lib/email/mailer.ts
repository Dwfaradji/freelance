import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { getEmailConfig } from './config';
import { SendMailOptions, EmailSendResult } from './types';
import { stripCrlf } from '../security/sanitization';

let cachedTransporter: Transporter | null = null;

/**
 * Récupère ou instancie le transporteur Nodemailer (singleton).
 */
export function getTransporter(): Transporter | null {
  const config = getEmailConfig();

  if (!config.isConfigured) {
    return null;
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
    });
  }

  return cachedTransporter;
}

/**
 * Envoie un email transactionnel via le transporteur configuré.
 * Sécurise strictement les en-têtes contre les injections CRLF.
 */
export async function sendMail(options: SendMailOptions): Promise<EmailSendResult> {
  const config = getEmailConfig();
  const transporter = getTransporter();

  if (!transporter) {
    return {
      success: false,
      error: 'SMTP_CONFIG_MISSING: Le serveur SMTP n’est pas configuré.',
    };
  }

  try {
    const fromAddress = options.from || `"${config.from.name}" <${config.from.address}>`;

    const mailOptions = {
      from: stripCrlf(fromAddress),
      to: stripCrlf(options.to),
      ...(options.replyTo ? { replyTo: stripCrlf(options.replyTo) } : {}),
      subject: stripCrlf(options.subject),
      html: options.html,
      text: options.text || options.html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error?.message || 'Erreur inconnue lors de l’envoi de l’email.',
    };
  }
}
