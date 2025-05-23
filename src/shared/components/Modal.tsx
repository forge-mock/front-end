"use client";

import React, { ReactNode } from "react";
import { Modal as AriaModal, Dialog, Heading } from "react-aria-components";
import { motion, AnimatePresence } from "framer-motion";
import CrossIcon from "@assets/shared/cross.svg";
import { IconButton } from "@shared/components";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  showCloseButton?: boolean;
  children: ReactNode;
}

function Modal({
  children,
  isOpen,
  setIsOpen,
  title,
  showCloseButton = true,
}: Readonly<ModalProps>): React.JSX.Element {
  return (
    <AnimatePresence>
      {isOpen && (
        <AriaModal
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Dialog className="bg-[var(--light-grey-background)] p-6 rounded-lg shadow-lg align-center relative">
              {showCloseButton && (
                <IconButton
                  Icon={CrossIcon}
                  ariaLabel="Close"
                  height={16}
                  width={16}
                  onClick={() => setIsOpen(false)}
                  classes="absolute top-2 right-2 m-1"
                />
              )}

              <Heading
                slot="title"
                className="flex w-full items-center justify-center text-2xl font-bold italic text-[var(--violet-title-color)] mb-4"
              >
                {title}
              </Heading>

              {children}
            </Dialog>
          </motion.div>
        </AriaModal>
      )}
    </AnimatePresence>
  );
}

export default Modal;
