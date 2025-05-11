import { AxiosInstance, AxiosRequestConfig } from "axios";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from "@shared/helpers";
import { ApiResponse } from "./interfaces";
import { noAuthApi } from "./no-auth-api";
import { createApiClient, makeApiRequest } from "./helpers";

const baseUrl = process.env.NEXT_PUBLIC_GATEWAY!;
const apiClient: AxiosInstance = createApiClient(baseUrl);

export async function refreshToken(accessToken: string): Promise<string> {
  const response = await noAuthApi.postWithCsrf<string>(`${baseUrl}/auth/refresh-token`, accessToken, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.isSuccess) {
    throw new Error("Failed to refresh token");
  }

  return response.data!;
}

apiClient.interceptors.request.use((config) => {
  const accessToken = getLocalStorageItem<string>(LOCAL_STORAGE_ITEMS.accessToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const accessToken = getLocalStorageItem<string>(LOCAL_STORAGE_ITEMS.accessToken);
        const newAccessToken = await refreshToken(accessToken as string);

        setLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken, newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch {
        removeLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken);
      }
    }

    return Promise.reject(new Error(error));
  }
);

export const authApi = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return makeApiRequest<T>(apiClient, "get", url, undefined, config);
  },

  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return makeApiRequest<T>(apiClient, "post", url, data, config);
  },

  put: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return makeApiRequest<T>(apiClient, "put", url, data, config);
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return makeApiRequest<T>(apiClient, "delete", url, undefined, config);
  },
};
