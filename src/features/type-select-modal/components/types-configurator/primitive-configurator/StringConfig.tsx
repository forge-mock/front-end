"use client";

import { Switcher, Modal } from "@shared/components";
import BlankSlider from "@features/blank-slider/BlankSlider";
import ValueSwitcher from "@features/value-switcher/ValueSwitcher";
import { useState, useEffect } from "react";
import ConfiguratorControls from "../ConfiguratorControls";
import { useConfigStore } from "../useConfigStore";
import type { StringConfig as StringConfigType } from "../useConfigStore";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fieldId: string;
}

function StringConfig({ isOpen, setIsOpen, fieldId }: Readonly<ConfiguratorProps>) {
  const { getConfigByFieldId } = useConfigStore();

  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [numberValue, setNumberValue] = useState<number>(0);
  const [isSense, setIsSense] = useState<boolean>(true);

  const [initialValues, setInitialValues] = useState({
    blankValue: 0 as number | number[],
    isLeft: true,
    minValue: 0,
    maxValue: 0,
    numberValue: 0,
    isSense: true,
  });

  useEffect(() => {
    if (isOpen && fieldId) {
      const existingConfig = getConfigByFieldId(fieldId) as StringConfigType | undefined;

      if (existingConfig && existingConfig.type === "string") {
        const values = {
          blankValue: existingConfig.blankValue,
          isLeft: existingConfig.isLeft !== undefined ? existingConfig.isLeft : true,
          minValue: existingConfig.minValue,
          maxValue: existingConfig.maxValue,
          numberValue: existingConfig.numberValue,
          isSense: existingConfig.isSense,
        };

        setBlankValue(values.blankValue);
        setIsLeft(values.isLeft);
        setMinValue(values.minValue);
        setMaxValue(values.maxValue);
        setNumberValue(values.numberValue);
        setIsSense(values.isSense);

        setInitialValues(values);
      }
    }
  }, [isOpen, fieldId, getConfigByFieldId]);

  const handleReset = () => {
    setBlankValue(initialValues.blankValue);
    setIsLeft(initialValues.isLeft);
    setMinValue(initialValues.minValue);
    setMaxValue(initialValues.maxValue);
    setNumberValue(initialValues.numberValue);
    setIsSense(initialValues.isSense);
  };

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
            isLeft,
          }}
          onSave={handleSave}
          onCancel={handleCancel}
          onReset={handleReset}
        />
      </div>
    </Modal>
  );
}

export default StringConfig;
