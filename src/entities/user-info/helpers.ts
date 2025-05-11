import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { getLocalStorageItem } from "@shared/helpers";
import { useLoginStore } from "@entities/user-info";
import type { UserInfo } from "./interfaces";

export function setUserInfo(userInfo: UserInfo) {
  const accessToken = getLocalStorageItem<string>(LOCAL_STORAGE_ITEMS.accessToken);

  if (accessToken) {
    useLoginStore.getState().setUserInfo(userInfo);
  }
}
