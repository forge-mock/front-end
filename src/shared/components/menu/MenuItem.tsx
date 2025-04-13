"use client";

import { MenuItem as MenuItemAria } from "react-aria-components";
import type { MenuItemProps } from "react-aria-components";

function MenuItem({ ...props }: Readonly<MenuItemProps>) {
  return (
    <MenuItemAria
      {...props}
      className={({ isHovered, isFocused, isFocusVisible }) =>
        `px-1 rounded-md cursor-pointer
        ${isHovered ? "hover-default" : ""} 
        ${isFocused ? "outline-none" : ""} 
        ${isFocusVisible ? "outline-default" : ""}`
      }
    >
      {props.children}
    </MenuItemAria>
  );
}

export default MenuItem;
