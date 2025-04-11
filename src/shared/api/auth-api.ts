import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { LocalStorageItems } from "@shared/constants";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from "@shared/helpers";
import { ApiResponse } from "./interfaces";
import { DEFAULT_ERROR_RESPONSE } from "./constants";
import { createApiClient } from "./helpers";

const baseUrl = "https://localhost:7289";
const apiClient: AxiosInstance = createApiClient(baseUrl);

apiClient.interceptors.request.use((config) => {
  const accessToken = getLocalStorageItem<string>(LocalStorageItems.AccessToken);

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
        const accessToken = getLocalStorageItem(LocalStorageItems.AccessToken);
        const response = await axios.post(`${baseUrl}/auth/refresh-token`, accessToken);
        const newAccessToken = response.data.accessToken;

        setLocalStorageItem(LocalStorageItems.AccessToken, newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch {
        console.error("Please, login again");
        removeLocalStorageItem(LocalStorageItems.AccessToken);
      }
    }

    return Promise.reject(new Error(error));
  }
);

const authApi = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.get(url, config);
      return response.data;
    } catch (error: any) {
      return error.response?.data ?? DEFAULT_ERROR_RESPONSE;
    }
  },

  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.post(url, data, config);
      return response.data;
    } catch (error: any) {
      return error.response?.data ?? DEFAULT_ERROR_RESPONSE;
    }
  },

  put: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.put(url, data, config);
      return response.data;
    } catch (error: any) {
      return error.response?.data ?? DEFAULT_ERROR_RESPONSE;
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await apiClient.delete(url, config);
      return response.data;
    } catch (error: any) {
      return error.response?.data ?? DEFAULT_ERROR_RESPONSE;
    }
  },
};

export default authApi;
