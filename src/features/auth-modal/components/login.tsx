import React from "react";
import { Form } from "react-aria-components";
import { Input, Button } from "@shared/components";

export interface LoginFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

function LoginForm({ setIsOpen }: Readonly<LoginFormProps>): React.JSX.Element {
  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input label="Username" />
      <Input label="Password" type="password" />
      <Button text="Login" type="submit" />
    </Form>
  );
}

export default LoginForm;
