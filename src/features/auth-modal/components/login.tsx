import React from "react";
import { Form } from "react-aria-components";
import { formatErrorMessages } from "@shared/api";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { setLocalStorageItem } from "@shared/helpers";
import { useFormValidation } from "@shared/hooks";
import { Input, Button, addToast } from "@shared/components";
import { login, Login } from "@entities/auth";
import { FormProps } from "./interfaces";
import { LOGIN_FIELDS, LOGIN_SCHEMA } from "./constants";
import styles from "./form.module.scss";

function LoginForm({ setIsOpen }: Readonly<FormProps>): React.JSX.Element {
  const { values, errors, isFieldInvalid, handleChange, validate } = useFormValidation(LOGIN_SCHEMA);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();

    const validation = validate();
    if (!validation.isValid) return;

    try {
      const loginData: Login = validation.data;
      const response = await login(loginData);

      if (!response.isSuccess) {
        addToast(formatErrorMessages(response.errors), "error");
        return;
      }

      const accessToken = response.data;
      setLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken, accessToken);
      setLocalStorageItem(LOCAL_STORAGE_ITEMS.isLoggedIn, true);
      setIsOpen(false);
      addToast("Successfully logged in", "success");
    } catch {
      addToast("Login error", "error");
    }
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Username / email"
        value={values.userInput}
        errorMessage={errors.userInput}
        isInvalid={isFieldInvalid(LOGIN_FIELDS.userInput)}
        onChange={(value) => handleChange(LOGIN_FIELDS.userInput, value)}
      />

      <Input
        label="Password"
        type="password"
        value={values.password}
        errorMessage={errors.password}
        isInvalid={isFieldInvalid(LOGIN_FIELDS.password)}
        onChange={(value) => handleChange(LOGIN_FIELDS.password, value)}
      />
      <Button text="Login" type="submit" classes={styles.button} />
    </Form>
  );
}

export default LoginForm;
