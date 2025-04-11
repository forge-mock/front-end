import React, { useState } from "react";
import { Form } from "react-aria-components";
import { Input, Button, addToast } from "@shared/components";
import { formatErrorMessages } from "@shared/api";
import { login, Login } from "@entities/auth";
import styles from "./form.module.scss";

export interface LoginFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

function LoginForm({ setIsOpen }: Readonly<LoginFormProps>): React.JSX.Element {
  const [userInput, setUserInput] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData: Login = { userInput, password };

    try {
      const response = await login(loginData);

      if (response.isSuccess) {
        setIsOpen(false);
      } else {
        addToast(formatErrorMessages(response.errors), "error");
      }
    } catch {
      addToast("Login error", "error");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Input label="Username / email" value={userInput} onChange={setUserInput} />
      <Input label="Password" type="password" value={password} onChange={setPassword} />
      <Button text="Login" type="submit" classes={styles.button} />
    </Form>
  );
}

export default LoginForm;
