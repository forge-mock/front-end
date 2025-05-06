"use client";

import { Slider, Modal } from "@shared/components";
import BlankSlider from "@features/blank-slider/BlankSlider";
import ValueSwitcher from "@features/value-switcher/ValueSwitcher";
import { useState } from "react";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function NumberConfig({ isOpen, setIsOpen }: Readonly<ConfiguratorProps>) {
  const [decimalValue, setDecimalValue] = useState<number | number[]>(0);
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number>(0);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Number configurator">
      <div className="mt-20 mb-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <ValueSwitcher
          isLeft={isLeft}
          setIsLeft={setIsLeft}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
          numberValue={numberValue}
          setValue={setNumberValue}
          minValue={minValue}
          maxValue={maxValue}
        />
        <Slider
          label="Decimal"
          inputSliderClasses="mt-10"
          step={1}
          maxValue={24}
          onChange={setDecimalValue}
          value={decimalValue}
          name="decimal"
        />
      </div>
    </Modal>
  );
}

export default NumberConfig;
