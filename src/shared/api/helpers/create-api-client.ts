import axios, { AxiosInstance } from "axios";

export const createApiClient = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
