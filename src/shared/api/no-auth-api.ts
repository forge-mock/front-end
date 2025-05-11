import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { getCookie } from "@shared/helpers";
import { ApiResponse } from "./interfaces";
import { DEFAULT_ERROR_RESPONSE } from "./constants";
import { createApiClient, makeApiRequest } from "./helpers";

const apiClient: AxiosInstance = createApiClient(process.env.NEXT_PUBLIC_AUTH!);

async function getCsrfToken(): Promise<string | null> {
  await apiClient.get("/csrf/token", { withCredentials: true });
  const xsrf = getCookie("XSRF-TOKEN");
  return xsrf;
}

export const noAuthApi = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return makeApiRequest<T>(apiClient, "get", url, undefined, config);
  },

  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return makeApiRequest<T>(apiClient, "post", url, data, config);
  },

  postWithCsrf: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const xsrfToken = await getCsrfToken();
      const headers = {
        ...config?.headers,
        "X-XSRF-TOKEN": xsrfToken,
      };

      const response: AxiosResponse<ApiResponse<T>> = await apiClient.post(url, data, {
        ...config,
        headers,
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return error.response?.data ?? DEFAULT_ERROR_RESPONSE;
    }
  },
};
