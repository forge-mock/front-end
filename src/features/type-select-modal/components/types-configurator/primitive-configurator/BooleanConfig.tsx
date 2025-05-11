"use client";

import { BlankSlider } from "@features/blank-slider";
import { Modal, Slider, Toggle } from "@shared/components";
import { useState } from "react";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function BooleanConfig({ isOpen, setIsOpen }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [booleanValues, setBooleanValues] = useState<number | number[]>(0.5);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Boolean configurator">
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
      </div>
    </Modal>
  );
}

export default BooleanConfig;
