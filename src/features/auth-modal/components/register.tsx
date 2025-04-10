import React from "react";
import { Form } from "react-aria-components";
import { Input, Button } from "@shared/components";

export interface RegisterFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

function RegisterForm({ setIsOpen }: Readonly<RegisterFormProps>): React.JSX.Element {
  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input />
      <Input type="email" />
      <Input type="password" />
      <Button text="Register" type="submit" />
    </Form>
  );
}

export default RegisterForm;
