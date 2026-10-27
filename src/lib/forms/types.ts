export type FormType =
  | 'contact'
  | 'quote'
  | 'demo'
  | 'diagnostic'
  | 'simulator'
  | 'newsletter';

export interface FormSubmissionSuccessResponse {
  success: true;
  status: 200;
  message: string;
  referenceId: string;
  requestId: string;
}

export interface FormSubmissionErrorResponse {
  success: false;
  status: number;
  message: string;
  error: string;
  fieldErrors?: Record<string, string[]>;
  requestId: string;
}

export type FormSubmissionResponse =
  | FormSubmissionSuccessResponse
  | FormSubmissionErrorResponse;
