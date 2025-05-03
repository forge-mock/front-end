import { create } from "zustand";

interface LoginState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set(() => ({ isLoggedIn })),
}));
