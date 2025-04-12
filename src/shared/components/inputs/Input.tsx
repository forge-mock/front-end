"use client";

import React from "react";
import { TextField, Label, Input as AriaInput, Text, FieldError, TextFieldProps } from "react-aria-components";
import styles from "./inputs.module.scss";

interface InputProps extends TextFieldProps {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  inputClasses?: string;
}

function Input({
  label = "",
  placeholder = "",
  description = "",
  errorMessage = "",
  inputClasses = "",
  ...props
}: Readonly<InputProps>) {
  return (
    <TextField {...props} className="flex flex-col">
      <Label className="text-sm text-[var(--light-text-color)]">{label}</Label>
      <AriaInput
        placeholder={placeholder}
        className={({ isInvalid }) =>
          `${styles.input} 
          ${isInvalid ? "border-small-rounded-error-default" : ""} 
          ${inputClasses}`
        }
      />
      {description && (
        <Text slot="description" className="text-sm text-[var(--light-text-color)]">
          {description}
        </Text>
      )}
      <FieldError className="text-[var(--red-text-color)]">{errorMessage}</FieldError>
    </TextField>
  );
}

export default Input;
