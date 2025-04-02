import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { LocalStorageItems } from "@shared/constants";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from "@shared/helpers";
import { ApiResponse } from "./interfaces/api-response";
import { createApiClient } from "./helpers/create-api-client";

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
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => apiClient.get<T>(url, config),
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> =>
    apiClient.post<T>(url, data, config),
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> =>
    apiClient.put<T>(url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => apiClient.delete<T>(url, config),
};

export default authApi;
