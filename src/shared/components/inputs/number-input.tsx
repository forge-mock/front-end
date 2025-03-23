"use client";

import { NumberField, Label, Input, NumberFieldProps } from "react-aria-components";
import styles from "./inputs.module.scss";

interface NumberInputProps extends NumberFieldProps {
  label?: string;
  inputClasses?: string;
  numberFieldClasses?: string;
  placeholder?: string;
}

function NumberInput({ label, inputClasses, numberFieldClasses, placeholder, ...props }: Readonly<NumberInputProps>) {
  return (
    <NumberField {...props} className={numberFieldClasses}>
      {label ? <Label className="size-6 text-black mr-10">{label}</Label> : null}
      <Input className={() => `${styles.input}${inputClasses}`} placeholder={placeholder} />
    </NumberField>
  );
}

export default NumberInput;
