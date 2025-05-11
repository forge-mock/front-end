"use client";

import React, { useState, useEffect } from "react";
import { Form } from "react-aria-components";
import { useFormValidation } from "@shared/hooks";
import { Input, Button, addToast } from "@shared/components";
import { formatErrorMessages } from "@shared/api";
import { useLoginStore, updateUserInfo } from "@entities/user-info";
import type { UserInfoUpdate } from "@entities/user-info";
import { INFO_FIELDS, INFO_SCHEMA } from "../constants";

function UserInfoUpdate(): React.JSX.Element {
  const [initialValues, setInitialValues] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { userInfo } = useLoginStore();
  const { values, errors, isFieldInvalid, handleChange, validate, reset } = useFormValidation(
    INFO_SCHEMA,
    initialValues
  );

  useEffect(() => {
    const initialValues = {
      [INFO_FIELDS.newUserEmail]: userInfo?.email ?? "",
      [INFO_FIELDS.username]: userInfo?.name ?? "",
    };

    setInitialValues(initialValues);
  }, [userInfo]);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();

    const validation = validate();
    if (!validation.isValid) return;

    const userInfoUpdate: UserInfoUpdate = validation.data;

    try {
      setIsSubmitting(true);
      const response = await updateUserInfo(userInfoUpdate);

      if (!response.isSuccess) {
        addToast(formatErrorMessages(response.errors), "error");
        return;
      }
    } catch {
      addToast("An error occurred. Please try again", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col w-96">
      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          value={values.newUserEmail ?? ""}
          errorMessage={errors.newUserEmail}
          isInvalid={isFieldInvalid(INFO_FIELDS.newUserEmail)}
          onChange={(value) => handleChange(INFO_FIELDS.newUserEmail, value)}
        />

        <Input
          label="Username"
          value={values.username ?? ""}
          errorMessage={errors.username}
          isInvalid={isFieldInvalid(INFO_FIELDS.username)}
          onChange={(value) => handleChange(INFO_FIELDS.username, value)}
        />
      </div>

      <div className="flex justify-center mt-10 gap-4 w-full">
        <Button text="Reset" outline type="button" onPress={() => reset()} />

        <Button text="Save" isLoading={isSubmitting} isDisabled={isSubmitting} type="submit" classes="w-20" />
      </div>
    </Form>
  );
}

export default UserInfoUpdate;
