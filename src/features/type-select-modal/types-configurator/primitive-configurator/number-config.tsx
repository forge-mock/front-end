"use client";

import { Slider, ModalWindow, Button } from "@shared/components";
import BlankSlider from "@features/blank-slider/blank-slider";
import ValueSwitcher from "@features/switcher/switcher-value";
import { useState } from "react";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function NumberConfig({ isOpen, setIsOpen }: ConfiguratorProps) {
  const [decimalValue, setDecimalValue] = useState<number | number[]>(0);
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number>(0);

  return (
    <ModalWindow isOpen={isOpen} width={"30%"} height={"50%"} title="Number configurator">
      <div className="mt-20">
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
      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </ModalWindow>
  );
}

export default NumberConfig;
