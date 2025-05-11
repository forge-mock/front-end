"use client";

import React, { useState } from "react";
import { Form } from "react-aria-components";
import { useFormValidation } from "@shared/hooks";
import { formatErrorMessages } from "@shared/api";
import { Input, Button, addToast } from "@shared/components";
import { updatePassword } from "@entities/user-info";
import type { PasswordUpdate } from "@entities/user-info";
import { PASSWORDS_FIELDS, PASSWORDS_SCHEMA } from "../constants";
import ChangeInfoModal from "./ChangeInfoModal";

function PasswordUpdate(): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { values, errors, isFieldInvalid, handleChange, validate, reset } = useFormValidation(PASSWORDS_SCHEMA);

  function handleClick(): void {
    const validation = validate();
    if (!validation.isValid) return;

    setIsOpen(true);
  }

  async function handleSubmit(): Promise<void> {
    const validation = validate();
    const userInfoUpdate: PasswordUpdate = validation.data;

    try {
      setIsSubmitting(true);
      const response = await updatePassword(userInfoUpdate);

      if (!response.isSuccess) {
        addToast(formatErrorMessages(response.errors), "error");
        return;
      }

      addToast("Password successfully updated", "success");
    } catch {
      addToast("An error occurred. Please try again", "error");
    } finally {
      setIsSubmitting(false);
      setIsOpen(false);
    }
  }

  return (
    <>
      <Form className="flex flex-col justify-between w-96 h-[400px]">
        <div className="flex flex-col gap-4">
          <Input
            label="Old Password"
            type="password"
            value={values.oldPassword ?? ""}
            errorMessage={errors.oldPassword}
            isInvalid={isFieldInvalid(PASSWORDS_FIELDS.oldPassword)}
            onChange={(value) => handleChange(PASSWORDS_FIELDS.oldPassword, value)}
          />

          <Input
            label="New Password"
            type="password"
            value={values.newPassword ?? ""}
            errorMessage={errors.newPassword}
            isInvalid={isFieldInvalid(PASSWORDS_FIELDS.newPassword)}
            onChange={(value) => handleChange(PASSWORDS_FIELDS.newPassword, value)}
          />
        </div>

        <div className="flex justify-center mt-10 gap-4 w-full">
          <Button text="Reset" outline type="button" onPress={() => reset()} />

          <Button
            text="Save"
            type="button"
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            onPress={handleClick}
            classes="w-20"
          />
        </div>
      </Form>

      <ChangeInfoModal
        title="Change Password"
        description={["Are you sure you want to change your password?"]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default PasswordUpdate;
