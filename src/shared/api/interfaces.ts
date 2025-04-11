interface SuccessfulApiResponse<T> {
  isSuccess: true;
  data?: T;
}

export interface Errors {
  reasons: string[];
  message: string;
  metadata: any;
}

interface ErrorApiResponse {
  isSuccess: false;
  errors: Errors[];
}

export type ApiResponse<T> = SuccessfulApiResponse<T> | ErrorApiResponse;
