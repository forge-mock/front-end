"use client";

import { NumberInput, Switcher } from "@shared/components";
import { Group } from "react-aria-components";

interface SwitcherValueProps {
  isLeft: boolean;
  setIsLeft: (isLeft: boolean) => void;
  setMaxValue: (maxValue: number) => void;
  setMinValue: (minValue: number) => void;
  minValue: number;
  maxValue: number;
  numberValue: number;
  setValue: (value: number) => void;
}

function ValueSwitcher({
  isLeft,
  setIsLeft,
  numberValue,
  setValue,
  setMaxValue,
  setMinValue,
  maxValue,
  minValue,
}: Readonly<SwitcherValueProps>) {
  return (
    <>
      <Switcher isLeft={isLeft} setIsLeft={setIsLeft} textLeft="Value" textRight="Range" />
      {isLeft ? (
        <NumberInput
          inputClasses=" h-12 w-20 text-center mt-5"
          value={numberValue}
          placeholder="Value"
          onChange={(value) => setValue(value)}
        />
      ) : (
        <Group className="flex gap-2 mt-5">
          <NumberInput
            inputClasses=" h-12 w-20 text-center"
            placeholder="Min"
            onChange={(value) => setMinValue(value)}
            value={minValue}
          />
          <NumberInput
            inputClasses=" h-12 w-20 text-center"
            placeholder="Max"
            onChange={(value) => setMaxValue(value)}
            value={maxValue}
          />
        </Group>
      )}
    </>
  );
}

export default ValueSwitcher;
