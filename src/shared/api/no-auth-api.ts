import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { ApiResponse } from "./interfaces/api-response";
import { DEFAULT_ERROR_RESPONSE } from "./constants/error-response";
import { createApiClient } from "./helpers/create-api-client";

const apiClient: AxiosInstance = createApiClient("https://localhost:7289");

const noAuthApi = {
  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.post(url, data, config);
      return response.data;
    } catch (error: any) {
      return error.response?.data ?? DEFAULT_ERROR_RESPONSE;
    }
  },
};

export default noAuthApi;
