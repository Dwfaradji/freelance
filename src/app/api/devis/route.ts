import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const res = NextResponse;

interface SendGridMailDevis {
  to: string;
  from: string;
  templateId: string;
  dynamic_template_data: {
    template: string;
    colors: { Principal: string; Secondaire: string; Texte: string };
    fonts: { primary: string; secondary: string };
    checkbox: {
      Nombre_de_page: string;
      Hebergement: string;
      Maintenance: string;
      Personnalisation: string;
    };
    form: {
      radioSelections: {
        typeClient: string;
        projet: string;
        maquette: string;
        cahier: string;
        logo: string;
        images: string;
        textPresentation: string;
        textServices: string;
      };
      dateDebut: string;
      nom: string;
      email: string;
      telephone: string;
      descriptionProjet: string;
      commentaires: string;
      budgetEstime: string;
      siret: string;
    };
  };
}

const isObject = (obj: any): obj is Record<string, any> =>
  obj && typeof obj === 'object';

const isValueNotEmpty = (value: any): boolean => {
  if (isObject(value)) {
    return Object.values(value).every(isValueNotEmpty);
  }
  return value !== null && value !== undefined && value !== '';
};

const areAllValuesNonEmpty = (obj: Record<string, any>) =>
  isObject(obj) && Object.values(obj).every(isValueNotEmpty);

// POST
export async function POST(request: Request) {
  // Récupérer les données du formulaire
  const data = await request.json();
  const { form } = data;

  form.commentaires === ''
    ? (form.commentaires = 'Pas de commentaires particulier')
    : form.commentaires;
  form.siret === '' ? (form.siret = 'Particulier') : form.siret;
  // Teste si tous les champs sont bien rempli
  if (!areAllValuesNonEmpty(data)) {
    return res.json({
      message: 'Des champs vides ont été trouvés dans la requête.',
    });
  }
  // Donner la clé API
  const apiKey = process.env.KEY_SENDGRID_API;
  if (!apiKey) {
    return res.json({status:400,  message: "Key_SENDGRID_API_KEY_MISSING"  });
  }
  // Syntaxe adresse email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(form.email)) {
    return res.json({
      message: 'EMAIL_SYNTAX_INCORRECT',
    });
  }
  // Configuration de SendGrid
  sgMail.setApiKey(apiKey);

  try {
    const devis: SendGridMailDevis = {
      to: String(process.env.EMAIL_TO),
      from: String(process.env.EMAIL_TO),
      templateId: String(process.env.TEMPLATE_ID_DEVIS),
      dynamic_template_data: {
        template: String(data.template),
        colors: {
          Principal: String(data.colors.Principal),
          Secondaire: String(data.colors.Secondaire),
          Texte: String(data.colors.Texte),
        },
        fonts: {
          primary: String(data.fonts.primary),
          secondary: String(data.fonts.secondary),
        },
        checkbox: {
          Hebergement: String(data.checkbox.Hebergement),
          Nombre_de_page: String(data.checkbox.Nombre_de_page),
          Maintenance: String(data.checkbox.Maintenance),
          Personnalisation: String(data.checkbox.Personnalisation),
        },
        form: {
          radioSelections: {
            typeClient: String(data.form.radioSelections.typeClient),
            projet: String(data.form.radioSelections.projet),
            maquette: String(data.form.radioSelections.maquette),
            cahier: String(data.form.radioSelections.cahier),
            logo: String(data.form.radioSelections.logo),
            images: String(data.form.radioSelections.images),
            textPresentation: String(
              data.form.radioSelections.textPresentation,
            ),
            textServices: String(data.form.radioSelections.textServices),
          },
          dateDebut: String(data.form.dateDebut),
          nom: String(data.form.nom),
          email: String(data.form.email),
          telephone: String(data.form.telephone),
          descriptionProjet: String(data.form.descriptionProjet),
          commentaires: String(data.form.commentaires),
          budgetEstime: String(data.form.budgetEstime),
          siret: String(data.form.siret),
        },
      },
    };

    await sgMail.send(devis);
    return res.json({  status: 200, message: 'DEVIS_SEND' });
  } catch (error) {
    return res.json({  status: 400,message: 'DEVIS_SENDING_FAILED' });
  }
}
