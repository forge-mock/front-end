"use client";

import React, { useState } from "react";
import { Button } from "@shared/components";

function FieldType(): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function onButtonClick() {
    console.log(isModalOpen);
    setIsModalOpen(true);
  }

  return <Button text="hello" outline onPress={onButtonClick} classes="w-24" />;
}

export default FieldType;
