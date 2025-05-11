import { create } from "zustand";
import type { UserInfo } from "./interfaces";

interface LoginState {
  isLoggedIn: boolean;
  userInfo?: UserInfo;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserInfo: (userInfo: UserInfo) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isLoggedIn: false,
  userInfo: undefined,
  setIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
  setUserInfo: (userInfo) => set(() => ({ userInfo })),
}));
