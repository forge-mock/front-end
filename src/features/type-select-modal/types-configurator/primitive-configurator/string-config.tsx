"use client";

import { Button, Switcher } from "@shared/components";
import ModalWindow from "@shared/components/modal/modal";
import BlankSlider from "@features/blank-slider/blank-slider";
import ValueSwitcher from "@features/switcher/switcher-value";
import { useState } from "react";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function StringConfig({ isOpen, setIsOpen }: ConfiguratorProps) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [isSense, setIsSense] = useState<boolean>(true);

  return (
    <ModalWindow isOpen={isOpen} width={"30%"} height={"50%"} title="String configurator">
      <div className="mt-20">
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
      </div>
      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </ModalWindow>
  );
}

export default StringConfig;
