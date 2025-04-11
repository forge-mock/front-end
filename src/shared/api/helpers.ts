import axios, { AxiosInstance } from "axios";
import { Errors } from "./interfaces";

export const createApiClient = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const formatErrorMessages = (errors: Errors[]): string => {
  return errors.map((error) => error.message).join(". ");
};
