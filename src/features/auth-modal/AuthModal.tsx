import React, { useState, useEffect } from "react";
import { Form } from "react-aria-components";
import { formatErrorMessages } from "@shared/api";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { setLocalStorageItem } from "@shared/helpers";
import { useFormValidation } from "@shared/hooks";
import { Modal, Input, Button, addToast } from "@shared/components";
import { login, Login, register, Register } from "@entities/auth";
import { LOGIN_FIELDS, REGISTER_FIELDS, LOGIN_SCHEMA, REGISTER_SCHEMA } from "./constants";

export interface AuthModalProps {
  isLogin: boolean;
  isOpen: boolean;
  setIsLogin: (isOpen: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

function AuthModal({
  isLogin = true,
  isOpen = false,
  setIsLogin,
  setIsOpen,
}: Readonly<AuthModalProps>): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { values, errors, isFieldInvalid, handleChange, validate, reset } = useFormValidation(
    isLogin ? LOGIN_SCHEMA : REGISTER_SCHEMA
  );

  useEffect(() => {
    reset();
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();

    const validation = validate();
    if (!validation.isValid) return;

    const authData: Login | Register = validation.data;

    try {
      setIsSubmitting(true);
      const response = isLogin ? await login(authData as Login) : await register(authData as Register);

      if (!response.isSuccess) {
        addToast(formatErrorMessages(response.errors), "error");
        return;
      }

      const accessToken = response.data;
      setLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken, accessToken);
      setLocalStorageItem(LOCAL_STORAGE_ITEMS.isLoggedIn, true);
      addToast(isLogin ? "Successfully logged in" : "Successfully registered", "success");
      setIsOpen(false);
    } catch {
      addToast("An error occurred. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleSwitchForm(e: React.MouseEvent): void {
    e.preventDefault();
    setIsLogin(!isLogin);
    reset();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={isLogin ? "Login" : "Register"}>
      <Form onSubmit={handleSubmit} className="flex flex-col w-96 gap-4">
        {!isLogin && (
          <Input
            label="Username"
            value={values.username ?? ""}
            errorMessage={errors.username}
            isInvalid={isFieldInvalid(REGISTER_FIELDS.username)}
            onChange={(value) => handleChange(REGISTER_FIELDS.username, value)}
          />
        )}

        <Input
          label="Email"
          type="email"
          value={values.userEmail ?? ""}
          errorMessage={errors.userEmail}
          isInvalid={isFieldInvalid(LOGIN_FIELDS.userEmail)}
          onChange={(value) => handleChange(LOGIN_FIELDS.userEmail, value)}
        />

        <Input
          label="Password"
          type="password"
          value={values.password ?? ""}
          errorMessage={errors.password}
          isInvalid={isFieldInvalid(LOGIN_FIELDS.password)}
          onChange={(value) => handleChange(LOGIN_FIELDS.password, value)}
        />

        <button type="button" onClick={handleSwitchForm} className="cursor-pointer text-center my-2 underline">
          {isLogin ? "Do not have an account? Sign up" : "Already have an account? Sign in"}
        </button>

        <Button text={isLogin ? "Login" : "Register"} isDisabled={isSubmitting} type="submit" />
      </Form>
    </Modal>
  );
}

export default AuthModal;
