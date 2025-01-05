"use client";

import React from "react";
import { IconButton } from "@shared/components";

function Burger(): React.JSX.Element {
  return <IconButton src="/layout/burger-menu.svg" alt="burger menu" height={30} width={30} />;
}

export default Burger;
