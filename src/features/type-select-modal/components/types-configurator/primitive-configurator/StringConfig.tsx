"use client";

import { Switcher, Modal } from "@shared/components";
import BlankSlider from "@features/blank-slider/BlankSlider";
import ValueSwitcher from "@features/value-switcher/ValueSwitcher";
import { useState } from "react";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function StringConfig({ isOpen, setIsOpen }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [isSense, setIsSense] = useState<boolean>(true);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="String configurator">
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
      </div>
    </Modal>
  );
}

export default StringConfig;
