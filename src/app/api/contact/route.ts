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





// import { NextResponse } from 'next/server';
// import sgMail from '@sendgrid/mail';
//
// const res = NextResponse;
//
// interface SendGridMail {
//   to: string;
//   from: string;
//   templateId: string;
//   dynamic_template_data: {
//     firstname: string;
//     business: string;
//     email: string;
//     subject: string;
//     message_body: string; // Insérer le contenu HTML propre
//   };
// }
//
// // POST
// export async function POST(request: Request) {
//   // Récupérer les données du formulaire
//   const req = await request.json();
//   const { firstname, business, email, content } = req;
//   // Vérifier les données du formulaire
//   if (!firstname || !business || !email || !content) {
//     return res.json({ message: 'INVALID_PARAMETER' });
//   }
//
//   // Donner la clé API
//   const apiKey = process.env.KEY_SENDGRID_API;
//   if (!apiKey) {
//     return res.json({ status: 400, message: 'Key_SENDGRID_API_KEY_MISSING' });
//   }
//   // Syntaxe adresse email
//   const pattern =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!pattern.test(email)) {
//     res.json({
//       message: 'EMAIL_SYNTAX_INCORRECT',
//     });
//     return;
//   }
//
//   // Transformer les retours à la ligne pour le HTML
//   const cleanMessage = content
//     .replace(/\n/g, '<br>') // Remplacer les retours à la ligne par des <br>
//     .replace(/\r/g, '<br>') // Remplacer les retours chariot par des <br>
//     .replace(/\t/g, '    ') // Remplacer les tabulations par 4 espaces simples
//     .replace(/<(?!br\s*\/?)[^>]+>/g, ''); // Supprimer toutes les balises HTML sauf <br>ttoyer les entités HTML mal échappées// supprime tout le html en autorisant uniquement les balises <br>
//
//   // Configuration de SendGrid
//   sgMail.setApiKey(apiKey);
//
//   try {
//     const msg: SendGridMail = {
//       to: String(process.env.EMAIL_TO),
//       from: String(process.env.EMAIL_TO),
//       templateId: String(process.env.TEMPLATE_ID_CONTACT),
//       dynamic_template_data: {
//         firstname: String(firstname),
//         business: String(business),
//         email: String(email),
//         subject: 'Nouveau message de ' + String(firstname),
//         message_body: cleanMessage, // Insérer le contenu HTML propre
//       },
//     };
//     await sgMail.send(msg);
//     return res.json({ status: 200, message: 'EMAIL_SENT' });
//   } catch (error) {
//     return res.json({ status: 400, message: 'EMAIL_SENDING_FAILED' });
//   }
// }
