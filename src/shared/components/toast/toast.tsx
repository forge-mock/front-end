"use client";

import React from "react";
import { flushSync } from "react-dom";
import {
  Text,
  UNSTABLE_Toast as AriaToast,
  UNSTABLE_ToastContent as ToastContent,
  UNSTABLE_ToastRegion as ToastRegion,
  UNSTABLE_ToastQueue as AriaToastQueue,
} from "react-aria-components";
import { AnimatePresence, motion } from "framer-motion";
import { COLORS } from "./constants";
import { ToastQueue } from "./interfaces";

export const toastQueue = new AriaToastQueue<ToastQueue>({
  wrapUpdate(fn) {
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        flushSync(fn);
      });
    } else {
      fn();
    }
  },
});

function Toast(): React.JSX.Element {
  return (
    <ToastRegion className="fixed left-1/2 transform -translate-x-1/2 top-0 mt-5 z-50" queue={toastQueue}>
      {({ toast }) => (
        <AnimatePresence mode="wait">
          <motion.div
            key={toast.key}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AriaToast className="flex items-center justify-center" toast={toast}>
              <ToastContent
                style={{ backgroundColor: COLORS[toast.content.type], borderColor: COLORS[toast.content.type] }}
                className="flex flex-col w-auto p-2 border-default max-w-lg"
              >
                <Text slot="title" className="text-[#cbd5e1] text-center">
                  {toast.content.title}
                </Text>
              </ToastContent>
            </AriaToast>
          </motion.div>
        </AnimatePresence>
      )}
    </ToastRegion>
  );
}

export default Toast;
