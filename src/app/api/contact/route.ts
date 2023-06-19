import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const res = NextResponse;

interface SendGridMail {
  to: string;
  from: string;
  templateId: string;
  dynamic_template_data: {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    attachments: string;
  };
}

// POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const req = await request.json();
  const { firstname, lastname, email, content, file } = req;

  // Vérifier les données du formulaire
  if (!firstname || !lastname || !email || !content) {
    return res.json({ message: "INVALID_PARAMETER" });
  }
  const fileSimul = "https://www.w3schools.com/html/mov_bbb.mp4";

  // Donner la clé API
  const apiKey = process.env.KEY_SENDGRID;
  if (!apiKey) {
    return res.json({ message: "SENDGRID_API_KEY_MISSING" });
  }

  // Configuration de SendGrid
  sgMail.setApiKey(apiKey);

  // Envoi de l'e-mail avec SendGrid
  try {
    const msg: SendGridMail = {
      to: String(process.env.ADRESS_MAIL),
      from: String(process.env.ADRESS_MAIL),
      templateId: String(process.env.TEMPLATE_ID),
      dynamic_template_data: {
        firstname: String(firstname),
        lastname: String(lastname),
        email: String(email),
        subject: String(content),
        attachments: String(fileSimul),
      },
    };
    await sgMail.send(msg);
    console.log("Message envoyé avec succès");
    return res.json({ message: "EMAIL_SENT" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    return res.json({ message: "EMAIL_SENDING_FAILED" });
  }
}
