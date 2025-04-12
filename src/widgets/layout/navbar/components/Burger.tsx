"use client";

import React from "react";
import BurgerMenuIcon from "@assets/layout/burger-menu.svg";
import { IconButton } from "@shared/components";
import { useLayoutStore } from "../../store";

function Burger(): React.JSX.Element {
  const { expandMobileSidebar } = useLayoutStore();

  function handleExpandClick(): void {
    expandMobileSidebar();
  }

  return <IconButton Icon={BurgerMenuIcon} height={30} width={30} onClick={handleExpandClick} />;
}

export default Burger;
