import { AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiResponse } from "./interfaces/api-response";
import { createApiClient } from "./helpers/create-api-client";

const apiClient: AxiosInstance = createApiClient("https://localhost:7289");

const noAuthApi = {
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> =>
    apiClient.post<T>(url, data, config),
};

export default noAuthApi;
