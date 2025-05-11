import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { getLocalStorageItem } from "@shared/helpers";
import { useLoginStore } from "@entities/user-info";
import type { UserInfo } from "./interfaces";

export function setUserInfo() {
  const accessToken = getLocalStorageItem<string>(LOCAL_STORAGE_ITEMS.accessToken);

  if (accessToken) {
    const payload = JSON.parse(atob(accessToken.split(".")[1]));

    const userInfo: UserInfo = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
    };

    useLoginStore.getState().setUserInfo(userInfo);
  }
}
