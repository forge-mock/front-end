"use client";

import React from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
  FieldError,
  Text,
} from "react-aria-components";
import { FocusRing } from "react-aria";
import type { SelectProps } from "react-aria-components";
import TriangleIcon from "@assets/selector/triangle.svg";

interface SelectorProps<T> extends SelectProps {
  items: Iterable<T>;
  itemId?: string;
  itemField?: string;
  label?: string;
  description?: string;
  errorMessage?: string;
  selectorClasses?: string;
  labelClasses?: string;
}

function Selector<T extends object>({
  items = [],
  itemId = "id",
  itemField = "name",
  label = "",
  description = "",
  errorMessage = "",
  selectorClasses = "",
  ...props
}: Readonly<SelectorProps<T>>): React.JSX.Element {
  return (
    <Select
      className={({ isInvalid }) =>
        `flex flex-col focus-default
        ${isInvalid ? "border-small-rounded-error-default" : ""} 
        ${selectorClasses}`
      }
      {...props}
    >
      <Label className="text-sm text-[var(--light-text-color)]">{label}</Label>

      <FocusRing focusRingClass="outline-border-default">
        <Button className="flex flex-row items-center justify-center gap-2 focus:outline-none border-small-rounded-default hover-border-default bg-[var(--grey-background)]">
          <SelectValue
            className={({ isPlaceholder }) => `${isPlaceholder ? "text-[var(--lighter-text-color)]" : ""}`}
          />
          <TriangleIcon style={{ transform: "rotate(180deg)" }} />
        </Button>
      </FocusRing>

      {description && (
        <Text slot="description" className="text-sm text-[var(--light-text-color)]">
          {description}
        </Text>
      )}

      <FieldError className="text-[var(--red-text-color)]">{errorMessage}</FieldError>

      <Popover
        offset={0}
        className={({ isEntering, isExiting }) =>
          `p-2 border-default bg-[var(--grey-background)] transition duration-300 w-[--trigger-width]
          ${isEntering ? "animate-in fade-in" : ""}
          ${isExiting ? "animate-out fade-out" : ""}`
        }
      >
        <ListBox className="flex flex-col gap-1 outline-none" items={items}>
          {(item: any) => (
            <ListBoxItem
              key={item[itemId]}
              className={({ isHovered, isSelected, isFocused, isFocusVisible }) =>
                `px-1 rounded-md cursor-pointer
                ${isHovered ? "hover-default" : ""}
                ${isSelected ? "text-[#cbd5e1] bg-[#6d28d9]" : ""}
                ${isFocused ? "outline-none" : ""}
                ${isFocusVisible ? "outline-default" : ""}`
              }
            >
              {item[itemField]}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </Select>
  );
}

export default Selector;
