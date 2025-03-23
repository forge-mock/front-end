"use client";

import React, { useState } from "react";
import SettingsIcon from "@assets/dragging/settings.svg";
import { IconButton } from "@shared/components";
import { Types } from "@features/type-select-modal/enums/types";
import {
  BooleanConfig,
  DateTimeConfig,
  NumberConfig,
  StringConfig,
  TextConfig,
  UUIDConfig,
} from "@features/type-select-modal/types-configurator/primitive-configurator";

interface FieldSettingsProps {
  selectedType?: string;
}

function FieldSettings({ selectedType }: Readonly<FieldSettingsProps>): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const typeComponents = {
    [Types.NUMBER]: NumberConfig,
    [Types.STRING]: StringConfig,
    [Types.TEXT]: TextConfig,
    [Types.BOOLEAN]: BooleanConfig,
    [Types.DATETIME]: DateTimeConfig,
    [Types.UUID]: UUIDConfig,
  };

  const ConfigComponent = typeComponents[selectedType as keyof typeof typeComponents];

  function onIconClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <IconButton
        Icon={SettingsIcon}
        isDisabled={selectedType === "Type"}
        height={18}
        width={18}
        onClick={onIconClick}
      />

      {ConfigComponent ? <ConfigComponent isOpen={isModalOpen} setIsOpen={setIsModalOpen} /> : null}
    </>
  );
}

export default FieldSettings;
