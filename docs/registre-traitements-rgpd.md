# Registre des Activités de Traitement RGPD — Formulaires & Vérification E-mail B2B (DevEvoke)

Document de référence interne conforme à l'**article 30 du Règlement Général sur la Protection des Données (RGPD — UE 2016/679)**.

---

## 1. Fiche de traitement : Vérification de délivrabilité des adresses e-mail professionnelles & Lutte anti-spam / anti-fraude

| Rubrique | Détail |
| :--- | :--- |
| **Responsable de traitement** | **DevEvoke** (`contact@devevoke.com` — `https://www.devevoke.com`) |
| **Intitulé du traitement** | Vérification technique de la validité et du caractère professionnel des adresses e-mail soumises sur les formulaires publics B2B |
| **Formulaires concernés** | 1. Formulaire de contact / demande de devis (`/contact` → `POST /api/contact`)<br>2. Formulaire de restitution du Diagnostic Numérique Médico-Social (`POST /api/contact`)<br>3. Formulaire de demande de démo 14 jours du Simulateur Floticar (`POST /api/contact`)<br>4. Formulaire d'inscription à la Newsletter B2B (`POST /api/newsletters`) |
| **Finalités du traitement** | - Garantir la délivrabilité des échanges B2B et des rapports transmis par e-mail<br>- Prévenir le spam, la fraude, les soumissions automatisées et l'utilisation d'adresses factices ou jetables<br>- Protéger la réputation d'expédition du domaine `devevoke.com` |
| **Base légale (Art. 6 RGPD)** | **Intérêt légitime** du responsable de traitement (**Article 6.1.f du RGPD**) : sécurisation des formulaires publics, prévention de la fraude/spam et assurance de la qualité des demandes entrantes B2B |
| **Catégories de personnes concernées** | Prospects professionnels, dirigeants d'établissements médico-sociaux (ESMS, IME, SESSAD, EHPAD, ESAT, associations), responsables informatiques et administratifs |
| **Données transmises au sous-traitant (Minimisation — Art. 5.1.c)** | **Uniquement l'adresse e-mail professionnelle normalisée (`email`)**.<br>Aucune autre donnée du formulaire (`firstname`, `lastname`, `phone`, `business`, `organization`, `content`) n'est transmise à Hunter |
| **Sous-traitant destinataire** | **Hunter Web Services Inc.** (`https://hunter.io`) — Service *Hunter Email Verifier API* (`GET https://api.hunter.io/v2/email-verifier`) |
| **Conservation & Cache technique** | - **Cache mémoire serveur éphémère** : durée maximale (TTL) de **15 minutes**, indexé exclusivement par une empreinte cryptographique irréversible **`SHA-256` salée** (`hashEmailForCache`). Aucune adresse e-mail en clair n'est stockée en mémoire.<br>- **Journaux d'audit (`securityLogger`)** : aucune adresse e-mail en clair n'est journalisée ; seuls le statut technique (`status`), le motif (`reason`) et un condensat irréversible d'IP (`ipHash`) sont inscrits. |

---

## 2. Sous-traitants techniques intervenant sur la chaîne des formulaires

| Sous-traitant | Rôle technique | Données traitées | Garanties RGPD / DPA |
| :--- | :--- | :--- | :--- |
| **Hunter Web Services Inc.** | Prestataire de vérification d'adresses e-mail professionnelles et lutte contre la fraude/spam (Étape préalable à l'envoi) | Adresse e-mail professionnelle uniquement (`email`) | Accord de traitement des données (**Data Processing Addendum — DPA**) incluant les Clauses Contractuelles Types (SCC) de la Commission européenne |
| **Resend Inc.** | Prestataire d'acheminement d'e-mails transactionnels (appelé uniquement après validation complète) | Coordonnées professionnelles et récapitulatif de la demande soumis par le prospect | Accord de traitement des données (**DPA**) et chiffrement TLS en transit |

---

## 3. Procédure de vérification contractuelle : Signature du DPA Hunter

Conformément à l'**article 28 du RGPD**, veuillez vérifier et conserver une copie signée du **Data Processing Addendum (DPA)** de Hunter :

1. Connectez-vous au tableau de bord **Hunter** (`https://hunter.io/users/sign_in`).
2. Accédez aux paramètres du compte (**Account Settings** → **GDPR / Privacy / Data Processing Addendum** ou consultez la documentation officielle RGPD de Hunter sur `https://hunter.io/gdpr`).
3. Vérifiez que le **DPA (Data Processing Addendum)** est actif et rattaché au compte de **DevEvoke**, et archivez le document PDF signé dans les dossiers juridiques internes de l'entreprise.
4. La page publique [`/politique-confidentialite`](file:///Users/bouciffaradji/Documents/Project/Dev/freelance/src/app/(pages)/politique-confidentialite/page.tsx) (alimentée par [`src/data/data.ts`](file:///Users/bouciffaradji/Documents/Project/Dev/freelance/src/data/data.ts#L387-L403)) mentionne désormais explicitement ce traitement, sa base légale (**art. 6.1.f du RGPD**), le principe de minimisation (**art. 5.1.c du RGPD**) et le sous-traitant **Hunter Web Services Inc.**

