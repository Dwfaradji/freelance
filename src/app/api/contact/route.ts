import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const res = NextResponse;

interface SendGridMail {
  to: string;
  from: string;
  templateId: string;
  firstname: string;
  lastname: string;
  email: string;
  subject: string;

  // dynamic_template_data: {
  //   firstname: string;
  //   lastname: string;
  //   email: string;
  //   subject: string;
  // };
}

// POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const product = await request.json();

  const { firstname, lastname, email, content } = product;

  // Vérifier les données du formulaire
  if (!firstname || !lastname || !email || !content) {
    return res.json({ message: "INVALID_PARAMETER" });
  }

  // Donner la clé API
  const apiKey = process.env.KEY_SENDGRID;
  if (!apiKey) {
    return res.json({ message: "SENDGRID_API_KEY_MISSING" });
  }

  // Configuration de SendGrid
  sgMail.setApiKey(apiKey);

  const msg: SendGridMail = {
    to: "test@belie.com",
    from: String(process.env.EMAIL_TO),
    subject: String(content),
    firstname: firstname,
    lastname: lastname,
    email: email,
    templateId: String(process.env.TEMPLATE_ID),
    // dynamic_template_data: {
    //   firstname: firstname,
    //   lastname: lastname,
    //   email: email,
    //   subject: content,
    // },
    // templateId: String(process.env.TEMPLATE_ID),
    // dynamic_template_data: {
    //   firstname: firstname,
    //   lastname: lastname,
    //   email: email,
    //   subject: content,
    // },
  };

  // Envoi de l'e-mail avec SendGrid
  try {
    await sgMail.send(msg);
    console.log("Message envoyé avec succès");
    return res.json({ message: "EMAIL_SENT" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    return res.json({ message: "EMAIL_SENDING_FAILED" });
  }
}
