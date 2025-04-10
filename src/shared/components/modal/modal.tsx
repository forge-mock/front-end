"use client";

import { Modal as AriaModal, Dialog, Heading } from "react-aria-components";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  title?: string;
}

function Modal({ children, isOpen, title }: Readonly<ModalProps>) {
  return (
    <AriaModal isOpen={isOpen} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Dialog className={`bg-[var(--light-grey-background)] p-6 rounded-lg shadow-lg align-center`}>
        <Heading slot="title" className="text-slate-950 font-semibold uppercase text-xl">
          {title}
        </Heading>
        {children}
      </Dialog>
    </AriaModal>
  );
}

export default Modal;
