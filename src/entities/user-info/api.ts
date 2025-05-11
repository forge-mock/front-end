import { authApi, ApiResponse } from "@shared/api";
import type { UserInfoUpdate, PasswordUpdate } from "./interfaces";

const user = "/user";

export function getUserProviders(): Promise<ApiResponse<string[]>> {
  return authApi.get(`${user}/providers`);
}

export function updateUserInfo(userInfoUpdate: UserInfoUpdate): Promise<ApiResponse<string>> {
  return authApi.put(`${user}/information`, userInfoUpdate);
}

export function register(passwordUpdate: PasswordUpdate): Promise<ApiResponse<string>> {
  return authApi.put(`${user}/password`, passwordUpdate);
}
