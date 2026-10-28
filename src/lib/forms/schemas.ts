import { z } from 'zod';
import { sanitizeString, normalizePhone } from '../security/sanitization';
import {
  EMAIL_VALIDATION_MESSAGES,
  normalizeEmail,
  validateProfessionalEmail,
} from '../validation/email';

/**
 * Schéma Zod centralisé pour la validation stricte des adresses e-mail professionnelles :
 * 1. Normalisation (trim, suppression des espaces invisibles, minuscules)
 * 2. Vérification syntaxique RFC 5321 / 5322 (5..254 caractères, sans CRLF, domaine + TLD valides)
 * 3. Refus des e-mails temporaires / jetables
 * 4. Refus des fournisseurs grand public / personnels (gmail, outlook, yahoo, orange, etc.)
 */
export const professionalEmailSchema = z
  .string({ message: EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX })
  .transform((val) => normalizeEmail(val))
  .superRefine((val, ctx) => {
    const validation = validateProfessionalEmail(val);
    if (!validation.isValid) {
      ctx.addIssue({
        code: 'custom',
        message: validation.message ?? EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX,
      });
    }
  });

export const emailFieldSchema = professionalEmailSchema;

export const phoneFieldSchema = z
  .string()
  .trim()
  .max(30, 'Le numéro de téléphone ne doit pas dépasser 30 caractères.')
  .optional()
  .nullable()
  .or(z.literal(''))
  .transform((val) => (val ? normalizePhone(val) : undefined));

export const optionalSanitizedString = (maxLen: number = 150) =>
  z
    .string()
    .trim()
    .max(maxLen, `La valeur ne doit pas dépasser ${maxLen} caractères.`)
    .optional()
    .nullable()
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeString(val, maxLen) : undefined));

/**
 * Schéma pour le formulaire de contact principal et les demandes de devis
 */
export const contactSubmissionSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(2, 'Le prénom doit comporter au moins 2 caractères.')
    .max(80, 'Le prénom ne doit pas dépasser 80 caractères.')
    .transform((val) => sanitizeString(val, 80)),
  lastname: optionalSanitizedString(80),
  business: z
    .string()
    .trim()
    .min(2, 'Le nom de votre organisation ou entreprise est requis.')
    .max(120, 'Le nom de l’organisation ne doit pas dépasser 120 caractères.')
    .transform((val) => sanitizeString(val, 120)),
  role: optionalSanitizedString(100),
  establishmentType: optionalSanitizedString(100),
  siteCount: optionalSanitizedString(80),
  email: emailFieldSchema,
  phone: phoneFieldSchema,
  projectType: optionalSanitizedString(150),
  budget: optionalSanitizedString(80),
  delay: optionalSanitizedString(80),
  isDemoRequest: z.boolean().optional().nullable(),
  service: optionalSanitizedString(100),
  content: z
    .string()
    .trim()
    .min(5, 'Veuillez préciser votre demande ou contexte (minimum 5 caractères).')
    .max(5000, 'Le message ne doit pas dépasser 5 000 caractères.')
    .transform((val) => sanitizeString(val, 5000)),
  rgpdConsent: z
    .union([z.boolean(), z.string()])
    .optional()
    .nullable()
    .transform((val) => val === true || val === 'true' || val === 'on'),
  // Champs Honeypot (doivent être vides)
  website: z.string().optional().nullable(),
  companyWebsite: z.string().optional().nullable(),
  hp_confirm: z.string().optional().nullable(),
});

/**
 * Schéma pour les demandes de démonstration (ex: Floticar)
 */
export const demoSubmissionSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(2, 'Le prénom doit comporter au moins 2 caractères.')
    .max(80)
    .transform((val) => sanitizeString(val, 80)),
  lastname: optionalSanitizedString(80),
  business: z
    .string()
    .trim()
    .min(2, 'L’organisation est requise.')
    .max(120)
    .transform((val) => sanitizeString(val, 120)),
  role: optionalSanitizedString(100),
  establishmentType: optionalSanitizedString(100),
  vehicleCount: optionalSanitizedString(60),
  email: emailFieldSchema,
  phone: phoneFieldSchema,
  demoFocus: optionalSanitizedString(120),
  preferredSlot: optionalSanitizedString(100),
  notes: z
    .string()
    .trim()
    .max(3000, 'Les notes ne doivent pas dépasser 3 000 caractères.')
    .optional()
    .nullable()
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeString(val, 3000) : undefined)),
  website: z.string().optional().nullable(),
});

/**
 * Schéma pour la newsletter DevEvoke
 */
export const newsletterSubmissionSchema = z.object({
  email: emailFieldSchema,
  website: z.string().optional().nullable(),
  companyWebsite: z.string().optional().nullable(),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
export type DemoSubmissionInput = z.infer<typeof demoSubmissionSchema>;
export type NewsletterSubmissionInput = z.infer<typeof newsletterSubmissionSchema>;
