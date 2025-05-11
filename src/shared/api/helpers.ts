import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { Errors, ApiResponse } from "./interfaces";
import { DEFAULT_ERROR_RESPONSE } from "./constants";

export function createApiClient(baseURL: string): AxiosInstance {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function formatErrorMessages(errors: Errors[]): string {
  return errors.map((error) => error.message).join(". ");
}

export async function makeApiRequest<T>(
  apiClient: AxiosInstance,
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    let response: AxiosResponse<ApiResponse<T>>;

    switch (method) {
      case "get":
        response = await apiClient.get(url, config);
        break;
      case "post":
        response = await apiClient.post(url, data, config);
        break;
      case "put":
        response = await apiClient.put(url, data, config);
        break;
      case "delete":
        response = await apiClient.delete(url, config);
        break;
    }

    return response.data;
  } catch (error: any) {
    return error.message.response?.data ?? DEFAULT_ERROR_RESPONSE;
  }
}
