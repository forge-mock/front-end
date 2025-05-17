"use client";

import { Slider, Modal } from "@shared/components";
import BlankSlider from "@features/blank-slider/BlankSlider";
import ValueSwitcher from "@features/value-switcher/ValueSwitcher";
import { useState, useEffect } from "react";
import ConfiguratorControls from "../ConfiguratorControls";
import { useConfigStore } from "../useConfigStore";
import type { NumberConfig as NumberConfigType } from "../useConfigStore";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fieldId: string;
}

function NumberConfig({ isOpen, setIsOpen, fieldId }: Readonly<ConfiguratorProps>): React.JSX.Element {
  const { getConfigByFieldId } = useConfigStore();

  // State for form values
  const [decimalValue, setDecimalValue] = useState<number | number[]>(0);
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(100);
  const [numberValue, setNumberValue] = useState<number>(50);

  // Store initial values for cancel/reset functionality
  const [initialValues, setInitialValues] = useState<{
    decimalValue: number | number[];
    blankValue: number | number[];
    isLeft: boolean;
    minValue: number;
    maxValue: number;
    numberValue: number;
  }>({
    decimalValue: 0,
    blankValue: 0,
    isLeft: true,
    minValue: 0,
    maxValue: 0,
    numberValue: 0,
  });

  // Load existing config when modal opens
  useEffect(() => {
    if (isOpen && fieldId) {
      const existingConfig = getConfigByFieldId(fieldId) as NumberConfigType | undefined;

      // If there's an existing config, use those values
      if (existingConfig && existingConfig.type === "number") {
        const values = {
          decimalValue: existingConfig.decimalValue,
          blankValue: existingConfig.blankValue,
          isLeft: existingConfig.isLeft !== undefined ? existingConfig.isLeft : true, // Use saved isLeft or default
          minValue: existingConfig.minValue,
          maxValue: existingConfig.maxValue,
          numberValue: existingConfig.numberValue,
        };

        // Set form values
        setDecimalValue(values.decimalValue);
        setBlankValue(values.blankValue);
        setIsLeft(values.isLeft);
        setMinValue(values.minValue);
        setMaxValue(values.maxValue);
        setNumberValue(values.numberValue);

        // Store initial values for reset
        setInitialValues(values);
      }
    }
  }, [isOpen, fieldId, getConfigByFieldId]);

  // Reset function to restore initial values when cancel is clicked
  const handleReset = () => {
    setDecimalValue(initialValues.decimalValue);
    setBlankValue(initialValues.blankValue);
    setIsLeft(initialValues.isLeft);
    setMinValue(initialValues.minValue);
    setMaxValue(initialValues.maxValue);
    setNumberValue(initialValues.numberValue);
  };

  const handleSave = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Number configurator" showCloseButton={false}>
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

        <ConfiguratorControls
          fieldId={fieldId}
          fieldType="number"
          config={{
            blankValue,
            decimalValue,
            minValue,
            maxValue,
            numberValue,
            isLeft, // Include isLeft in the config
          }}
          onSave={handleSave}
          onCancel={handleCancel}
          onReset={handleReset} // Pass the reset handler
        />
      </div>
    </Modal>
  );
}

export default NumberConfig;
