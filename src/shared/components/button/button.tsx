"use client";

import React from "react";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from "react-aria-components";
import { FocusRing } from "react-aria";

interface ButtonProps extends AriaButtonProps {
  text?: string;
  outline?: boolean;
  classes?: string;
}

function Button({ text, outline = false, classes = "", ...props }: Readonly<ButtonProps>) {
  return (
    <FocusRing focusRingClass="outline-border-default">
      <AriaButton
        className={`cursor-pointer focus-visible:outline-none border-2 border-solid border-[#6d28d9] rounded-lg px-2
          ${outline ? "hover-default border-small-rounded-default" : "hover-background-default text-[#cbd5e1] bg-[#6d28d9]"} ${classes}`}
        {...props}
      >
        {text}
      </AriaButton>
    </FocusRing>
  );
}

export default Button;
