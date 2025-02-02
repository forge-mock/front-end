"use client";

import React from "react";
import { ButtonProps as AriaButtonProps } from "react-aria-components";
import { FocusRing } from "react-aria";
import { Button as AriaButton } from "react-aria-components";

interface ButtonProps extends AriaButtonProps {
  text: string;
  outline?: boolean;
  classes?: string;
}

function Button({ text, outline = false, classes = "", ...props }: ButtonProps) {
  return (
    <FocusRing focusRingClass="outline-border-default">
      <AriaButton
        className={`cursor-pointer focus-visible:outline-none border-2 border-solid border-[#6d28d9] rounded-lg
          ${outline ? "hover-default" : "hover-background-default text-[#cbd5e1] bg-[#6d28d9]"} ${classes}`}
        {...props}
      >
        {text}
      </AriaButton>
    </FocusRing>
  );
}

export default Button;
