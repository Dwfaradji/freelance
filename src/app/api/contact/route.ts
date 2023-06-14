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
    content: string;
  };
}

//POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const product = await request.json();

  const { firstname, lastname, email, content } = product;

  // Vérifier les données du formulaire
  if (!firstname || !lastname || !email || !content) {
    res.json({ message: "INVALID_PARAMETER" });
    return;
  }

  // Donner la clé API
  sgMail.setApiKey(String(process.env.KEY_SENDGRID));
  // Création du message
  const sendGridMail: SendGridMail = {
    to: "test@belie.com",
    from: "contact@devevoke.com",
    templateId: String(process.env.TEMPLATE_ID),
    dynamic_template_data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      content: content,
    },
  };
  const sent = sgMail.send(sendGridMail);
  // SendGrid
  const promise = async () => {
    try {
      await sgMail.send(sendGridMail);
      console.log("Message Envoyer");
    } catch (error) {
      console.error(error, "error");
    }
  };
  await promise();

  return NextResponse.json({ message: sent });
}
