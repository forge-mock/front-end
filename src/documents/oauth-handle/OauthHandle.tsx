"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { setCookie, setLocalStorageItem, removeLocalStorageItem } from "@shared/helpers";
import { refreshToken as refreshTokenRequest } from "@shared/api";
import { addToast } from "@shared/components";
import { useLoginStore } from "@entities/user-info";
import { clearRefreshToken } from "./api";

function errorWhileLogin() {
  addToast("Please, try login again", "error");
}

function OauthHandle(): React.JSX.Element {
  const router = useRouter();
  const { setIsLoggedIn } = useLoginStore();

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch("/api/auth/token");
      const data = await res.json();
      const { accessToken, refreshToken } = data?.data ?? {};

      if (!accessToken || !refreshToken) {
        errorWhileLogin();
        router.push("/");
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
        router.push("/");
      }
    };

    fetchToken();
  }, [router]);

  return <></>;
}

export default OauthHandle;
