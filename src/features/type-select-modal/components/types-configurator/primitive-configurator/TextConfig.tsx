"use client";

import BlankSlider from "@features/blank-slider/BlankSlider";
import { NumberInput, Switcher, Modal } from "@shared/components";
import { useState, useEffect } from "react";
import ConfiguratorControls from "../ConfiguratorControls";
import { useConfigStore } from "../useConfigStore";
import type { TextConfig as TextConfigType } from "../useConfigStore";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fieldId: string;
}

function TextConfig({ isOpen, setIsOpen, fieldId }: Readonly<ConfiguratorProps>) {
  const { getConfigByFieldId } = useConfigStore();

  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isSense, setIsSense] = useState<boolean>(true);
  const [paragraphsAmount, setParagraphsAmount] = useState<number>(0);

  const [initialValues, setInitialValues] = useState({
    blankValue: 0 as number | number[],
    isSense: true,
    paragraphsAmount: 0,
  });

  useEffect(() => {
    if (isOpen && fieldId) {
      const existingConfig = getConfigByFieldId(fieldId) as TextConfigType | undefined;

      if (existingConfig && existingConfig.type === "text") {
        const values = {
          blankValue: existingConfig.blankValue,
          isSense: existingConfig.isSense,
          paragraphsAmount: existingConfig.paragraphsAmount,
        };

        setBlankValue(values.blankValue);
        setIsSense(values.isSense);
        setParagraphsAmount(values.paragraphsAmount);

        setInitialValues(values);
      }
    }
  }, [isOpen, fieldId, getConfigByFieldId]);

  const handleReset = () => {
    setBlankValue(initialValues.blankValue);
    setIsSense(initialValues.isSense);
    setParagraphsAmount(initialValues.paragraphsAmount);
  };

  const handleSave = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Text configurator" showCloseButton={false}>
      <div className="mt-20 mb-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <NumberInput
          label="Paragraphs"
          value={paragraphsAmount}
          onChange={setParagraphsAmount}
          inputClasses=" h-10 w-12 text-center"
          numberFieldClasses="mt-10"
        />
        <Switcher isLeft={isSense} setIsLeft={setIsSense} textLeft="Sense" textRight="Nonsense" />

        <ConfiguratorControls
          fieldId={fieldId}
          fieldType="text"
          config={{
            blankValue,
            isSense,
            paragraphsAmount,
          }}
          onSave={handleSave}
          onCancel={handleCancel}
          onReset={handleReset}
        />
      </div>
    </Modal>
  );
}

export default TextConfig;
