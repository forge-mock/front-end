"use client";

import React, { useState } from "react";
import { IconButton } from "@shared/components";
import NumberConfig from "@features/type-select-modal/types-configurator/primitive-configurator/number-config";
import { Types } from "@features/type-select-modal/enums/types";
import StringConfig from "@features/type-select-modal/types-configurator/primitive-configurator/string-config";
import TextConfig from "@features/type-select-modal/types-configurator/primitive-configurator/text-config";
import BooleanConfig from "@features/type-select-modal/types-configurator/primitive-configurator/boolean-config";
import DateTimeConfig from "@features/type-select-modal/types-configurator/primitive-configurator/date-time-config";
import UUIDConfig from "@features/type-select-modal/types-configurator/primitive-configurator/uuid-config";

interface FieldSettingsProps {
  selectedType: string;
}

function FieldSettings({ selectedType }: FieldSettingsProps): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function onIconClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <IconButton
        src="/dragging/settings.svg"
        alt="Settings"
        isDisabled={selectedType === "Type"}
        height={18}
        width={18}
        onClick={onIconClick}
      />

      {selectedType === Types.NUMBER && <NumberConfig isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
      {selectedType === Types.STRING && <StringConfig isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
      {selectedType === Types.TEXT && <TextConfig isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
      {selectedType === Types.BOOLEAN && <BooleanConfig isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
      {selectedType === Types.DATETIME && <DateTimeConfig isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
      {selectedType === Types.UUID && <UUIDConfig isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </>
  );
}

export default FieldSettings;
