"use client";

import React, { useState, useEffect } from "react";
import { Form } from "react-aria-components";
import { useFormValidation } from "@shared/hooks";
import { refreshToken, formatErrorMessages } from "@shared/api";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { getLocalStorageItem, setLocalStorageItem } from "@shared/helpers";
import { Input, Button, Loader, addToast } from "@shared/components";
import { useLoginStore, updateUserInfo, setUserInfo } from "@entities/user-info";
import type { UserInfoUpdate } from "@entities/user-info";
import { OauthButtons } from "@features/auth-modal";
import { useUserProviders } from "../hooks/useUserProviders";
import { INFO_FIELDS, INFO_SCHEMA } from "../constants";
import ChangeInfoModal from "./ChangeInfoModal";

function UserInfoUpdate(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { userInfo } = useLoginStore();
  const { providers, isLoading } = useUserProviders();
  const { values, errors, isFieldInvalid, handleChange, validate, reset } = useFormValidation(
    INFO_SCHEMA,
    initialValues
  );

  const isPreviousValues = userInfo?.email === values.newUserEmail && userInfo?.name === values.username;

  useEffect(() => {
    const initialValues = {
      [INFO_FIELDS.newUserEmail]: userInfo?.email ?? "",
      [INFO_FIELDS.username]: userInfo?.name ?? "",
    };

    setInitialValues(initialValues);
  }, [userInfo]);

  function handleClick(): void {
    const validation = validate();
    if (!validation.isValid) return;

    setIsOpen(true);
  }

  async function handleSubmit(): Promise<void> {
    const validation = validate();
    const userInfoUpdate: UserInfoUpdate = validation.data;

    try {
      setIsSubmitting(true);
      const response = await updateUserInfo(userInfoUpdate);

      if (!response.isSuccess) {
        addToast(formatErrorMessages(response.errors), "error");
        return;
      }

      const accessToken = getLocalStorageItem<string>(LOCAL_STORAGE_ITEMS.accessToken);
      const newAccessToken = await refreshToken(accessToken as string, values.newUserEmail, values.username);
      setLocalStorageItem(LOCAL_STORAGE_ITEMS.accessToken, newAccessToken);
      setUserInfo();

      addToast("Data successfully updated", "success");
    } catch {
      addToast("An error occurred. Please try again", "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Form className="flex flex-col justify-between w-96 h-[400px]">
        <div>
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

          {isLoading ? (
            <div className="flex items-center justify-center mt-10">
              <Loader size={50} />
            </div>
          ) : (
            <div className="flex flex-col mt-10 gap-2">
              <p className="text-center">Or add another sign in way</p>
              <OauthButtons addedProviders={providers} />
            </div>
          )}
        </div>

        <div className="flex justify-center mt-10 gap-4 w-full">
          <Button text="Reset" outline type="button" onPress={() => reset()} />

          <Button
            text="Save"
            isLoading={isSubmitting}
            isDisabled={isSubmitting || isPreviousValues}
            type="button"
            onPress={() => handleClick()}
            classes="w-20"
          />
        </div>
      </Form>

      <ChangeInfoModal
        title="Change User Information"
        description={[
          "Are you sure you want to change your data?",
          "If you change your email, you will need to verify it again.",
        ]}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default UserInfoUpdate;
