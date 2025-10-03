import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const res = NextResponse;

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
  const data = await request.json();
  const { form } = data;

  // Valeurs par défaut
  if (form.commentaires === '') form.commentaires = 'Pas de commentaires particulier';
  if (form.siret === '') form.siret = 'Particulier';

  // Vérification des champs
  if (!areAllValuesNonEmpty(data)) {
    return res.json({
      message: 'Des champs vides ont été trouvés dans la requête.',
    });
  }

  // Config SMTP
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;

  if (!smtpUser || !smtpPass || !smtpHost || !smtpPort) {
    return res.json({ status: 400, message: 'SMTP_CONFIG_MISSING' });
  }

  // Vérification email
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(form.email)) {
    return res.json({
      message: 'EMAIL_SYNTAX_INCORRECT',
    });
  }

  // Création transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465, // TLS pour 465
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  // Génération du HTML du devis
  const html = `
    <h2>Nouveau devis reçu</h2>
    <h3>Informations client</h3>
    <p><strong>Nom :</strong> ${form.nom}</p>
    <p><strong>Email :</strong> ${form.email}</p>
    <p><strong>Téléphone :</strong> ${form.telephone}</p>
    <p><strong>SIRET :</strong> ${form.siret}</p>
    <p><strong>Date de début :</strong> ${form.dateDebut}</p>
    <p><strong>Budget estimé :</strong> ${form.budgetEstime}</p>

    <h3>Projet</h3>
    <p><strong>Description :</strong> ${form.descriptionProjet}</p>
    <p><strong>Commentaires :</strong> ${form.commentaires}</p>

    <h3>Choix de l’utilisateur</h3>
    <p><strong>Nombre de pages :</strong> ${data.checkbox.Nombre_de_page}</p>
    <p><strong>Hébergement :</strong> ${data.checkbox.Hebergement}</p>
    <p><strong>Maintenance :</strong> ${data.checkbox.Maintenance}</p>
    <p><strong>Personnalisation :</strong> ${data.checkbox.Personnalisation}</p>

    <h3>Sélections radio</h3>
    <ul>
      <li><strong>Type client :</strong> ${form.radioSelections.typeClient}</li>
      <li><strong>Projet :</strong> ${form.radioSelections.projet}</li>
      <li><strong>Maquette :</strong> ${form.radioSelections.maquette}</li>
      <li><strong>Cahier des charges :</strong> ${form.radioSelections.cahier}</li>
      <li><strong>Logo :</strong> ${form.radioSelections.logo}</li>
      <li><strong>Images :</strong> ${form.radioSelections.images}</li>
      <li><strong>Texte présentation :</strong> ${form.radioSelections.textPresentation}</li>
      <li><strong>Texte services :</strong> ${form.radioSelections.textServices}</li>
    </ul>

    <h3>Style</h3>
    <p><strong>Template :</strong> ${data.template}</p>
    <p><strong>Couleurs :</strong> Principal ${data.colors.Principal}, Secondaire ${data.colors.Secondaire}, Texte ${data.colors.Texte}</p>
    <p><strong>Polices :</strong> ${data.fonts.primary} / ${data.fonts.secondary}</p>
  `;

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: String(process.env.EMAIL_TO),
      subject: `Nouveau devis de ${form.nom}`,
      html,
    });

    return res.json({ status: 200, message: 'DEVIS_SEND' });
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    return res.json({ status: 400, message: 'DEVIS_SENDING_FAILED' });
  }
}