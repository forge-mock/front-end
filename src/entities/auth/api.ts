import { noAuthApi, ApiResponse } from "@shared/api";
import type { Login, Register } from "./interfaces";

const auth = "/auth";

export function login(login: Login): Promise<ApiResponse<string>> {
  return noAuthApi.post(`${auth}/authenticate`, login);
}

export function register(register: Register): Promise<ApiResponse<string>> {
  return noAuthApi.post(`${auth}/register`, register);
}

export function logout(accessToken: string): Promise<ApiResponse<boolean>> {
  return noAuthApi.post(`${auth}/logout`, accessToken, { withCredentials: true });
}
