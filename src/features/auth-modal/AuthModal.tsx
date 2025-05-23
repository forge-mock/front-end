import React, { useState, useEffect } from "react";
import { Form } from "react-aria-components";
import { formatErrorMessages } from "@shared/api";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { setLocalStorageItem } from "@shared/helpers";
import { useFormValidation } from "@shared/hooks";
import { Modal, Input, Button, addToast } from "@shared/components";
import { login, Login, register, Register } from "@entities/auth";
import { useLoginStore, setUserInfo } from "@entities/user-info";
import { LOGIN_FIELDS, REGISTER_FIELDS, LOGIN_SCHEMA, REGISTER_SCHEMA } from "./constants";
import OauthButtons from "./components/OauthButtons";

export interface AuthModalProps {
  isLogin: boolean;
  isOpen: boolean;
  setIsLogin: (isOpen: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const divider = <div className="h-[1px] w-1/4 bg-[var(--text-color)]" />;

function AuthModal({
  isLogin = true,
  isOpen = false,
  setIsLogin,
  setIsOpen,
}: Readonly<AuthModalProps>): React.JSX.Element {
  const { setIsLoggedIn } = useLoginStore();
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
      setIsLoggedIn(true);
      setUserInfo();
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
      <Form onSubmit={handleSubmit} className="flex flex-col w-96">
        <div className="flex flex-col gap-4">
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
        </div>

        <div className="flex flex-row items-center justify-center mt-8">
          {divider}
          <p className="text-center mx-2">Or sign {isLogin ? "in" : "up"} with</p>
          {divider}
        </div>

        <OauthButtons />

        <button type="button" onClick={handleSwitchForm} className="cursor-pointer text-center my-2 underline">
          {isLogin ? "Do not have an account? Sign up" : "Already have an account? Sign in"}
        </button>

        <div className="flex justify-center gap-4 w-full">
          <Button text="Cancel" outline type="button" onPress={() => setIsOpen(false)} />

          <Button
            text={isLogin ? "Login" : "Register"}
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            type="submit"
            classes="w-20"
          />
        </div>
      </Form>
    </Modal>
  );
}

export default AuthModal;
