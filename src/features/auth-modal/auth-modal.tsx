import React from "react";
import { Modal } from "@shared/components";
import LoginForm from "./components/login";
import RegisterForm from "./components/register";

export interface AuthModalProps {
  isLogin: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function AuthModal({ isLogin = true, isOpen = false, setIsOpen }: Readonly<AuthModalProps>): React.JSX.Element {
  return (
    <Modal isOpen={isOpen}>
      {isLogin ? <LoginForm setIsOpen={setIsOpen} /> : <RegisterForm setIsOpen={setIsOpen} />}
    </Modal>
  );
}

export default AuthModal;
