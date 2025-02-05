"use client"

import { Modal, Dialog } from "react-aria-components"
import { ReactNode } from "react"

interface ModalProps {
    isOpen: boolean
    children: ReactNode
}

function ModalWindow ({ children, isOpen }: ModalProps) {
  return (
    <Modal 
      isOpen={isOpen}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      isDismissable
    >
      <Dialog className="bg-white p-6 rounded-lg shadow-lg w-[85%] h-[80%] align-center">
          {children}
      </Dialog>
    </Modal>
  )
}

export default ModalWindow;