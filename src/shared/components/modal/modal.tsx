"use client";

import { Modal, Dialog, Heading } from "react-aria-components";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  title: string;
}

function ModalWindow({ children, isOpen, width, height, title }: ModalProps) {
  return (
    <Modal isOpen={isOpen} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Dialog
        className={`bg-white p-6 rounded-lg shadow-lg align-center`}
        style={{ width: width || "70%", height: height || "80%" }}
      >
        <Heading slot="title" className="text-slate-950 font-semibold uppercase text-xl">
          {title}
        </Heading>
        {children}
      </Dialog>
    </Modal>
  );
}

export default ModalWindow;
