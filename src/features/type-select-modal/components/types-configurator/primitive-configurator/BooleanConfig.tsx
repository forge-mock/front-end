"use client";

import { BlankSlider } from "@features/blank-slider";
import { Modal, Slider, Toggle } from "@shared/components";
import { useState } from "react";
import ConfiguratorControls from "../ConfiguratorControls";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fieldId: string;
}

function BooleanConfig({ isOpen, setIsOpen, fieldId }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [booleanValues, setBooleanValues] = useState<number | number[]>(0.5);

  const handleSave = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Boolean configurator" showCloseButton={false}>
      <div className="mt-20 mb-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <div className="flex items-end mt-14">
          <Toggle text="Values" onChange={setIsSelected} isSelected={isSelected} classes="mr-10" />
          <Slider
            name="values"
            formatOptions={{ style: "percent" }}
            value={booleanValues}
            onChange={setBooleanValues}
            step={0.01}
            maxValue={1}
            isDisabled={!isSelected}
          />
        </div>

        <ConfiguratorControls
          fieldId={fieldId}
          fieldType="boolean"
          config={{
            blankValue,
            isSelected,
            booleanValues,
          }}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </Modal>
  );
}

export default BooleanConfig;
