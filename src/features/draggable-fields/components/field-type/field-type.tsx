"use client";

import React, { useState } from "react";
import { Button } from "@shared/components";
import TypeSelectModal from "@features/type-select-modal/type-select-modal";

function FieldType(): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function onButtonClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Button text="hello" outline onPress={onButtonClick} classes="w-24" />
      
      {isModalOpen && <TypeSelectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </>
  );
}

export default FieldType;