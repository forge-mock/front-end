"use client";

import { Button, Menu as MenuAria, MenuTrigger, Popover } from "react-aria-components";
import type { MenuProps as MenuAriaProps, MenuTriggerProps } from "react-aria-components";

interface MenuProps<T> extends MenuAriaProps<T>, Omit<MenuTriggerProps, "children"> {
  isButton?: boolean;
  menuChildren: React.ReactNode;
}

function Menu<T extends object>({ isButton = false, menuChildren, children, ...props }: Readonly<MenuProps<T>>) {
  return (
    <MenuTrigger {...props}>
      {isButton ? menuChildren : <Button>{menuChildren}</Button>}

      <Popover
        offset={5}
        className={({ isEntering, isExiting }) =>
          `p-2 border-default bg-[var(--grey-background)] transition duration-300
          ${isEntering ? "animate-in fade-in" : ""}
          ${isExiting ? "animate-out fade-out" : ""}`
        }
      >
        <MenuAria {...props}>{children}</MenuAria>
      </Popover>
    </MenuTrigger>
  );
}

export default Menu;
