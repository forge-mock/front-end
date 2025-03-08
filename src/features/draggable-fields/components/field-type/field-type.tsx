"use client";

import React, { useState } from "react";
import { Button } from "@shared/components";
import { TypeSelectModal } from "@features/type-select-modal";

interface FieldProps {
  selectedType: string;
  setSelectedType: (selectedType: string) => void;
}

function FieldType({ selectedType, setSelectedType }: FieldProps): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function onButtonClick() {
    setIsModalOpen(true);
  }

  function onSettingType(type: string) {
    setIsModalOpen(false);
    setSelectedType(type);
  }

  return (
    <>
      <Button text={selectedType} outline onPress={onButtonClick} classes="w-24" />

      {isModalOpen && <TypeSelectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} onSelectType={onSettingType} />}
    </>
  );
}

export default FieldType;
