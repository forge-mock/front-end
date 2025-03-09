"use client";

import React from "react";
import { IconButton } from "@shared/components";
import { useLayoutStore } from "../../../store/layout";

function Burger(): React.JSX.Element {
  const { expandMobileSidebar } = useLayoutStore();

  function handleExpandClick(): void {
    expandMobileSidebar();
  }

  return (
    <IconButton src="/layout/burger-menu.svg" alt="burger menu" height={30} width={30} onClick={handleExpandClick} />
  );
}

export default Burger;
