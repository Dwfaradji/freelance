import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const res = NextResponse;

// Interface pour les données du mail
interface MailData {
  to: string;
  from: string;
  subject: string;
  html: string;
}

// POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const req = await request.json();
  const {
    firstname,
    lastname,
    business,
    establishmentType,
    siteCount,
    role,
    email,
    phone,
    projectType,
    budget,
    delay,
    isDemoRequest,
    content,
  } = req;

  // Vérifier les données obligatoires du formulaire
  if (!firstname || !business || !email || !content) {
    return res.json({ status: 400, message: 'INVALID_PARAMETER' });
  }

  // Vérifier la configuration SMTP
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;

  if (!smtpUser || !smtpPass || !smtpHost || !smtpPort) {
    return res.json({ status: 400, message: 'SMTP_CONFIG_MISSING' });
  }

  // Vérification syntaxe email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    return res.json({ status: 400, message: 'EMAIL_SYNTAX_INCORRECT' });
  }

  // Nettoyer le contenu pour HTML
  const escapeHtml = (str: string = '') =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const cleanMessage = escapeHtml(content).replace(/\n/g, '<br>');

  // Créer le transport Nodemailer
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465, // true pour 465, false sinon
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    const isDemo = Boolean(isDemoRequest);
    const subjectPrefix = isDemo
      ? '[DEMO FLOTICAR / SAAS]'
      : '[PROJET MÉDICO-SOCIAL]';
    const fullName = `${escapeHtml(firstname)} ${lastname ? escapeHtml(lastname) : ''}`.trim();

    const mailOptions: MailData = {
      to: String(process.env.EMAIL_TO || smtpUser),
      from: String(smtpUser),
      subject: `${subjectPrefix} Demande de ${fullName} (${escapeHtml(business)})`,
      html: `
        <h2>${isDemo ? 'Demande de démonstration' : 'Nouvelle prise de contact / projet'}</h2>
        <table style="font-family: Arial, sans-serif; line-height: 1.6; border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 6px; font-weight: bold; width: 180px;">Nom complet :</td><td style="padding: 6px;">${fullName}</td></tr>
          <tr><td style="padding: 6px; font-weight: bold;">Organisation / Association :</td><td style="padding: 6px;">${escapeHtml(business)}</td></tr>
          ${role ? `<tr><td style="padding: 6px; font-weight: bold;">Fonction :</td><td style="padding: 6px;">${escapeHtml(role)}</td></tr>` : ''}
          ${establishmentType ? `<tr><td style="padding: 6px; font-weight: bold;">Type d'établissement :</td><td style="padding: 6px;">${escapeHtml(establishmentType)}</td></tr>` : ''}
          ${siteCount ? `<tr><td style="padding: 6px; font-weight: bold;">Nombre d'établissements / sites :</td><td style="padding: 6px;">${escapeHtml(String(siteCount))}</td></tr>` : ''}
          <tr><td style="padding: 6px; font-weight: bold;">Email :</td><td style="padding: 6px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding: 6px; font-weight: bold;">Téléphone :</td><td style="padding: 6px;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>` : ''}
          ${projectType ? `<tr><td style="padding: 6px; font-weight: bold;">Type de projet :</td><td style="padding: 6px;">${escapeHtml(projectType)}</td></tr>` : ''}
          ${budget ? `<tr><td style="padding: 6px; font-weight: bold;">Budget indicatif :</td><td style="padding: 6px;">${escapeHtml(budget)}</td></tr>` : ''}
          ${delay ? `<tr><td style="padding: 6px; font-weight: bold;">Délai souhaité :</td><td style="padding: 6px;">${escapeHtml(delay)}</td></tr>` : ''}
        </table>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
        <h3>Description du besoin :</h3>
        <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
          ${cleanMessage}
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ status: 200, message: 'EMAIL_SENT' });
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    return res.json({ status: 400, message: 'EMAIL_SENDING_FAILED' });
  }
}



