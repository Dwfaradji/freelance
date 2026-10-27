import { NextResponse } from 'next/server';

/**
 * Validation des métadonnées de requête HTTP (méthode, content-type, payload size).
 */

const MAX_PAYLOAD_BYTES = 50 * 1024; // 50 Ko max pour un formulaire JSON

export interface RequestValidationResult {
  valid: boolean;
  errorResponse?: NextResponse;
  parsedBody?: any;
}

export async function validateFormRequest(
  request: Request,
  requestId: string
): Promise<RequestValidationResult> {
  // 1. Vérifier la méthode
  if (request.method !== 'POST') {
    return {
      valid: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          status: 405,
          message: 'METHOD_NOT_ALLOWED',
          error: 'Méthode non autorisée. Utilisez POST.',
          requestId,
        },
        { status: 405, headers: { Allow: 'POST' } }
      ),
    };
  }

  // 2. Vérifier le Content-Type
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return {
      valid: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          status: 415,
          message: 'UNSUPPORTED_MEDIA_TYPE',
          error: 'Le format de requête doit être application/json.',
          requestId,
        },
        { status: 415 }
      ),
    };
  }

  // 3. Vérifier la taille du corps de requête
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
    return {
      valid: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          status: 413,
          message: 'PAYLOAD_TOO_LARGE',
          error: 'La taille des données dépasse la limite autorisée (50 Ko).',
          requestId,
        },
        { status: 413 }
      ),
    };
  }

  // 4. Parser le JSON de manière sécurisée
  try {
    const rawBody = await request.text();
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return {
        valid: false,
        errorResponse: NextResponse.json(
          {
            success: false,
            status: 413,
            message: 'PAYLOAD_TOO_LARGE',
            error: 'La taille des données dépasse la limite autorisée.',
            requestId,
          },
          { status: 413 }
        ),
      };
    }

    if (!rawBody || rawBody.trim().length === 0) {
      return {
        valid: false,
        errorResponse: NextResponse.json(
          {
            success: false,
            status: 400,
            message: 'EMPTY_BODY',
            error: 'Le corps de la requête est vide.',
            requestId,
          },
          { status: 400 }
        ),
      };
    }

    const parsedBody = JSON.parse(rawBody);
    return {
      valid: true,
      parsedBody,
    };
  } catch {
    return {
      valid: false,
      errorResponse: NextResponse.json(
        {
          success: false,
          status: 400,
          message: 'INVALID_JSON',
          error: 'Format JSON invalide.',
          requestId,
        },
        { status: 400 }
      ),
    };
  }
}
