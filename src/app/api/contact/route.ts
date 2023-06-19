import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

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
  };
}

// POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const req = await request.json();
  const { firstname, lastname, email, content } = req;

  // Vérifier les données du formulaire
  if (!firstname || !lastname || !email || !content) {
    return res.json({ message: "INVALID_PARAMETER" });
  }

  // Donner la clé API
  const apiKey = process.env.KEY_SENDGRID;
  if (!apiKey) {
    return res.json({ message: "SENDGRID_API_KEY_MISSING" });
  }
  // Syntaxe adresse email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(email)) {
    res.json({
      message: "EMAIL_SYNTAX_INCORRECT",
    });
    return;
  }

  // Transformer les retours à la ligne pour le HTML
  const message = content
    .replace(/\n/g, "<br>")
    .replace(/\r/g, "<br>")
    .replace(/\t/g, "<br>")
    .replace(/<(?!br\s*\/?)[^>]+>/g, ""); // supprime tout le html en autorisant uniquement les balises <br>

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
        subject: String(message),
      },
    };
    await sgMail.send(msg);
    return res.json({ message: "EMAIL_SENT" });
  } catch (error) {
    return res.json({ message: "EMAIL_SENDING_FAILED" });
  }
}
