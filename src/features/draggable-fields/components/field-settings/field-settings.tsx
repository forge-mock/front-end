"use client";

import React, { useState } from "react";
import { IconButton } from "@shared/components";

function FieldSettings(): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function onIconClick() {
    console.log(isModalOpen);
    setIsModalOpen(true);
  }

  return <IconButton src="/dragging/settings.svg" alt="Settings" height={18} width={18} onClick={onIconClick} />;
}

export default FieldSettings;
