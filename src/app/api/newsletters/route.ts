import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const res = NextResponse;

// POST
export async function POST(request: Request) {
  const req = await request.json();
  const { email } = req;

  // Vérif param
  if (!email) {
    return res.json({ message: 'INVALID_PARAMETER' });
  }

  // Config SMTP
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;

  if (!smtpUser || !smtpPass || !smtpHost || !smtpPort) {
    return res.json({ status: 400, message: 'SMTP_CONFIG_MISSING' });
  }

  // Vérif email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    return res.json({
      message: 'EMAIL_SYNTAX_INCORRECT',
    });
  }

  // Transporter Nodemailer
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465, // true si port 465
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: String(process.env.EMAIL_TO), // Admin qui reçoit l’inscription
      subject: 'Nouvelle inscription newsletter',
      html: `
        <h2>Nouvelle inscription à la newsletter</h2>
        <p><strong>Email :</strong> ${email}</p>
      `,
    });

    return res.json({ status: 200, message: 'EMAIL_SENT' });
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    return res.json({ status: 400, message: 'EMAIL_SENDING_FAILED', error });
  }
}