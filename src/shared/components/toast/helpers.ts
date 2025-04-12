import { ToastType } from "./interfaces";
import { toastQueue } from "./Toast";

export const addToast = (title: string = "", type: ToastType = "info", timeout: number = 2000) => {
  toastQueue.add({ title, type }, { timeout });
};
