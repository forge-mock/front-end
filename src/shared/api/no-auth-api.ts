import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { getCookie } from "@shared/helpers";
import { ApiResponse } from "./interfaces";
import { DEFAULT_ERROR_RESPONSE } from "./constants";
import { createApiClient } from "./helpers";

const apiClient: AxiosInstance = createApiClient("https://localhost:7289");

async function getCsrfToken(): Promise<string | null> {
  await apiClient.get("/csrf/token", { withCredentials: true });
  const xsrf = getCookie("XSRF-TOKEN");
  return xsrf;
}

const noAuthApi = {
  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.post(url, data, config);
      return response.data;
    } catch (error: any) {
      return error.response?.data ?? DEFAULT_ERROR_RESPONSE;
    }
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

export default noAuthApi;
