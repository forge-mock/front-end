"use client";

import BlankSlider from "@features/blank-slider/BlankSlider";
import { Button, NumberInput, Switcher, Modal } from "@shared/components";
import { useState } from "react";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function TextConfig({ isOpen, setIsOpen }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isSense, setIsSense] = useState<boolean>(true);
  const [paragraphsAmount, setParagraphsAmount] = useState<number>(0);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="String configurator">
      <div className="mt-20">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <NumberInput
          label="Paragraphs"
          value={paragraphsAmount}
          onChange={setParagraphsAmount}
          inputClasses=" h-10 w-12 text-center"
          numberFieldClasses="mt-10"
        />
        <Switcher isLeft={isSense} setIsLeft={setIsSense} textLeft="Sense" textRight="Nonsense" />
      </div>
      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </Modal>
  );
}

export default TextConfig;
