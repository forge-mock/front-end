"use client";

import React from "react";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from "react-aria-components";
import { FocusRing } from "react-aria";
import { Loader } from "@shared/components";

interface ButtonProps extends AriaButtonProps {
  text?: string;
  outline?: boolean;
  isLoading?: boolean;
  classes?: string;
}

function Button({ text, outline = false, classes = "", isLoading = false, ...props }: Readonly<ButtonProps>) {
  return (
    <FocusRing focusRingClass="outline-border-default">
      <AriaButton
        className={`cursor-pointer focus-visible:outline-none border-2 border-solid border-[#6d28d9] rounded-lg px-2
          ${outline || isLoading ? "hover-default border-small-rounded-default" : "hover-background-default text-[#cbd5e1] bg-[#6d28d9]"} 
          data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-default ${classes}`}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-6">
            <Loader size={20} />
          </div>
        ) : (
          text
        )}
      </AriaButton>
    </FocusRing>
  );
}

export default Button;
