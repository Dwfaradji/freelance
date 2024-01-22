import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const res = NextResponse;

interface SendGridMail {
  to: string;
  from: string;
  templateId: string;
  dynamic_template_data: {
    template: string;
    // lastname: string;
    // email: string;
    // subject: string;
    // attachments: string;
  };
}

const isObject = (obj: any): obj is Record<string, any> =>
  obj && typeof obj === "object";

const isValueNotEmpty = (value: any): boolean => {
  if (isObject(value)) {
    return Object.values(value).every(isValueNotEmpty);
  }
  return value !== null && value !== undefined && value !== "";
};

const areAllValuesNonEmpty = (obj: Record<string, any>) =>
  isObject(obj) && Object.values(obj).every(isValueNotEmpty);
// POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const data = await request.json();
  const { form } = data;
  form.commentaires === ""
    ? (form.commentaires = "Pas de commentaires particulier")
    : form.commentaires;

  // Teste si tous les champs sont bien rempli
  if (!areAllValuesNonEmpty(data)) {
    return res.json({
      message: "Des champs vides ont été trouvés dans la requête.",
    });
  }

  // Donner la clé API
  const apiKey = process.env.KEY_SENDGRID;
  if (!apiKey) {
    return res.json({ message: "SENDGRID_API_KEY_MISSING" });
  }
  // Syntaxe adresse email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(form.email)) {
    console.log("testEmail");
    return res.json({
      message: "EMAIL_SYNTAX_INCORRECT",
    });
  }
  // Configuration de SendGrid
  sgMail.setApiKey(apiKey);
  //
  try {
    const devis: SendGridMail = {
      to: String(process.env.ADRESS_MAIL),
      from: String(process.env.ADRESS_MAIL),
      templateId: String(process.env.TEMPLATE_ID_DEVIS),
      dynamic_template_data: {
        template: String(data.template),
        // lastname: String(lastname),
        // email: String(email),
        // subject: String(message),
        // attachments: String("piecesJointe"),
      },
    };
    // await sgMail.send(devis);
    console.log(data,"ok");
    return res.json({ message: "DEVIS_SEND" });
  } catch (error) {
    return res.json({ message: "DEVIS_SENDING_FAILED" });
  }
}
