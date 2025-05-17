"use client";

import { Switcher, Modal } from "@shared/components";
import BlankSlider from "@features/blank-slider/BlankSlider";
import ValueSwitcher from "@features/value-switcher/ValueSwitcher";
import { useState } from "react";
import ConfiguratorControls from "../ConfiguratorControls";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fieldId: string;
}

function StringConfig({ isOpen, setIsOpen, fieldId }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [isSense, setIsSense] = useState<boolean>(true);

  const handleSave = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="String configurator" showCloseButton={false}>
      <div className="mt-20 mb-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <ValueSwitcher
          isLeft={isLeft}
          setIsLeft={setIsLeft}
          numberValue={numberValue}
          setValue={setNumberValue}
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
        />
        <Switcher isLeft={isSense} setIsLeft={setIsSense} textLeft="Sense" textRight="Nonsense" />

        <ConfiguratorControls
          fieldId={fieldId}
          fieldType="string"
          config={{
            blankValue,
            isSense,
            minValue,
            maxValue,
            numberValue,
          }}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </Modal>
  );
}

export default StringConfig;
