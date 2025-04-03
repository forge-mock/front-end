interface SuccessfulApiResponse<T> {
  isSuccess: boolean;
  data?: T;
}

interface ErrorApiResponse {
  isSuccess: boolean;
  errors?: {
    reasongs: string[];
    message: string;
    metadata: any;
  };
}

export type ApiResponse<T> = SuccessfulApiResponse<T> | ErrorApiResponse;
