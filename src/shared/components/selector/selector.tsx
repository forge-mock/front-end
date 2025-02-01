"use client";

import React from "react";
import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from "react-aria-components";
import { FieldError, Text } from "react-aria-components";
import type { SelectProps } from "react-aria-components";

interface SelectorProps<T> extends SelectProps {
  items: Iterable<T>;
  itemId?: string;
  itemField?: string;
  label?: string;
  description?: string;
  errorMessage?: string;
  selectorClasses?: string;
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
}: SelectorProps<T>): React.JSX.Element {
  console.log(items);

  return (
    <Select
      className={({ isInvalid, isFocused }) =>
        `flex flex-col bg-[var(--grey-background)] border-small-rounded-default hover-border-default 
        focus-default ${isInvalid && "border-small-rounded-error-default"} ${isFocused && "border-red-500"} ${selectorClasses}`
      }
      {...props}
    >
      <Label className="text-sm text-[var(--light-text-color)]">{label}</Label>

      <Button className="focus:outline-0 border-0">
        <SelectValue className={({ isPlaceholder }) => `${isPlaceholder && "text-[var(--lighter-text-color)]"}`} />
        <span aria-hidden="true">▼</span>
      </Button>

      {description && (
        <Text slot="description" className="text-sm text-[var(--light-text-color)]">
          {description}
        </Text>
      )}

      <FieldError className="text-[var(--red-text-color)]">{errorMessage}</FieldError>

      <Popover>
        <ListBox items={items}>
          {(item: any) => <ListBoxItem key={item[itemId]}>{item[itemField]}</ListBoxItem>}
        </ListBox>
      </Popover>
    </Select>
  );
}

export default Selector;
