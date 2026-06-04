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
  const { firstname, business, email, content } = req;

  // Vérifier les données du formulaire
  if (!firstname || !business || !email || !content) {
    return res.json({ message: 'INVALID_PARAMETER' });
  }

  // Vérifier la configuration SMTP
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;


  // SMTP_HOST=ssl0.ovh.net
  // SMTP_PORT=587
  // SMTP_SECURE=false
  // SMTP_USER=contact@devevoke.com
  // SMTP_PASS=Tlemcen-66

  if (!smtpUser || !smtpPass || !smtpHost || !smtpPort) {
    return res.json({ status: 400, message: 'SMTP_CONFIG_MISSING' });
  }

  // Vérification syntaxe email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    return res.json({ message: 'EMAIL_SYNTAX_INCORRECT' });
  }

  // Nettoyer le contenu pour HTML
  const cleanMessage = content
    .replace(/\n/g, '<br>')
    .replace(/\r/g, '<br>')
    .replace(/\t/g, '    ')
    .replace(/<(?!br\s*\/?)[^>]+>/g, ''); // garder seulement <br>

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
    const mailOptions: MailData = {
      to: String(process.env.EMAIL_TO),
      from: String(smtpUser),
      subject: `Nouveau message de ${firstname}`,
      html: `
        <p><strong>Nom :</strong> ${firstname}</p>
        <p><strong>Entreprise :</strong> ${business}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${cleanMessage}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ status: 200, message: 'EMAIL_SENT' });
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    return res.json({ status: 400, message: 'EMAIL_SENDING_FAILED' });
  }
}



