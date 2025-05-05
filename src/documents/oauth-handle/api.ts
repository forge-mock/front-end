import { noAuthApi } from "@shared/api";

export async function clearRefreshToken(): Promise<void> {
  await noAuthApi.get<void>(`${process.env.NEXT_PUBLIC_AUTH!}/auth/clear-refresh-token`, {
    withCredentials: true,
  });
}
