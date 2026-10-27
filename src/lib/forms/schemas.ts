import { z } from 'zod';
import { sanitizeString, normalizeEmail, normalizePhone } from '../security/sanitization';

/**
 * Regex pour validation stricte des emails professionnels :
 * - Pas de caractères d'injection d'en-tête (CR/LF)
 * - Format username@domain.tld valide
 * - Longueur maximale RFC 5321 (254 caractères)
 */
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const emailFieldSchema = z
  .string()
  .trim()
  .min(5, 'L’adresse email est requise.')
  .max(254, 'L’adresse email est trop longue.')
  .regex(EMAIL_REGEX, 'Format d’adresse email invalide.')
  .transform((val) => normalizeEmail(val));

export const phoneFieldSchema = z
  .string()
  .trim()
  .max(30, 'Le numéro de téléphone ne doit pas dépasser 30 caractères.')
  .optional()
  .or(z.literal(''))
  .transform((val) => (val ? normalizePhone(val) : undefined));

export const optionalSanitizedString = (maxLen: number = 150) =>
  z
    .string()
    .trim()
    .max(maxLen, `La valeur ne doit pas dépasser ${maxLen} caractères.`)
    .optional()
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
  isDemoRequest: z.boolean().optional(),
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
    .transform((val) => val === true || val === 'true' || val === 'on'),
  // Champs Honeypot (doivent être vides)
  website: z.string().optional(),
  companyWebsite: z.string().optional(),
  hp_confirm: z.string().optional(),
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
    .or(z.literal(''))
    .transform((val) => (val ? sanitizeString(val, 3000) : undefined)),
  website: z.string().optional(),
});

/**
 * Schéma pour la newsletter DevEvoke
 */
export const newsletterSubmissionSchema = z.object({
  email: emailFieldSchema,
  website: z.string().optional(),
  companyWebsite: z.string().optional(),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
export type DemoSubmissionInput = z.infer<typeof demoSubmissionSchema>;
export type NewsletterSubmissionInput = z.infer<typeof newsletterSubmissionSchema>;
