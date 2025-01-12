"use client";

import React from "react";
import { TextFieldProps } from "react-aria-components";
import { TextField, Label, Input, Text, FieldError } from "react-aria-components";

interface TextInputProps extends TextFieldProps {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  inputClasses?: string;
}

function TextInput({
  label = "",
  placeholder = "",
  description = "",
  errorMessage = "",
  inputClasses = "",
  ...props
}: TextInputProps) {
  return (
    <TextField {...props} className="flex flex-col">
      <Label className="text-sm text-[var(--light-text-color)]">{label}</Label>
      <Input
        placeholder={placeholder}
        className={({ isInvalid }) =>
          `bg-[var(--grey-background)] border-small-rounded-default hover-border-default placeholder:text-[var(--lighter-text-color)]
          focus-default ${isInvalid && "border-small-rounded-error-default"} ${inputClasses}`
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

export default TextInput;
