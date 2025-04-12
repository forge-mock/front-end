export type ToastType = "info" | "success" | "error";

export interface ToastQueue {
  title: string;
  type: ToastType;
}
