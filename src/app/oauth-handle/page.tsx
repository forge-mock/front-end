"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { setCookie, setLocalStorageItem, removeLocalStorageItem } from "@shared/helpers";
import { noAuthApi, refreshToken as refreshTokenRequest } from "@shared/api";
import { addToast } from "@shared/components";
import { useLoginStore } from "@features/auth-modal";

function errorWhileLogin() {
  addToast("Please, try login again", "error");
}

export async function clearRefreshToken(): Promise<void> {
  await noAuthApi.get<void>(`${process.env.NEXT_PUBLIC_AUTH!}/auth/clear-refresh-token`, {
    withCredentials: true,
  });
}

export default function Home() {
  const router = useRouter();
  const { setIsLoggedIn } = useLoginStore();

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch("/api/auth/token");
      const data = await res.json();
      const { accessToken, refreshToken } = data?.data ?? {};

      if (!accessToken || !refreshToken) {
        errorWhileLogin();
      }

      try {
        await clearRefreshToken();
        setCookie("refresh_token", refreshToken);

        const newAccessToken = await refreshTokenRequest(accessToken);
        setLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken, newAccessToken);
        setLocalStorageItem(LOCAL_STORAGE_ITEMS.isLoggedIn, true);
        setIsLoggedIn(true);

        router.push("/");
      } catch {
        errorWhileLogin();
        setLocalStorageItem(LOCAL_STORAGE_ITEMS.isLoggedIn, false);
        removeLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken);
        setIsLoggedIn(false);
      }
    };

    fetchToken();
  }, [router]);

  return <></>;
}
