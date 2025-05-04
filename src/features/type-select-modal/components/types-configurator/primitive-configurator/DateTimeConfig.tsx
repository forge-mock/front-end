import { Button, Modal, Selector } from "@shared/components";
import { useState } from "react";
import BlankSlider from "@features/blank-slider/BlankSlider";
import { dateFormat, separators } from "./constants";
import { Key, Label } from "react-aria-components";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function DateTimeConfig({ isOpen, setIsOpen }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [selectedDateFormat, setSelectedDateFormat] = useState<Key>(dateFormat[0].id);
  const [selectedSeparator, setSelectedSeparator] = useState<Key>(separators[1].id);

  const changeDateFormat = (selectedFormat: Key) => {
    setSelectedDateFormat(selectedFormat);
  };

  const changeSeparator = (separator: Key) => {
    setSelectedSeparator(separator);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="DateTime configurator">
      <div className="mt-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <div className="flex gap-7 mt-14">
          <Label className="text-black">Format</Label>
          <Selector
            items={dateFormat}
            onSelectionChange={(selectedFormat) => changeDateFormat(selectedFormat)}
            placeholder="Select date format"
            selectedKey={selectedDateFormat}
            selectorClasses="w-[50%]"
          />
        </div>
        <div className="flex gap-2 mt-6">
          <Label className="text-black">Separator</Label>
          <Selector
            items={separators}
            onSelectionChange={(separator) => changeSeparator(separator)}
            placeholder="Select date format"
            selectedKey={selectedSeparator}
            selectorClasses="w-[50%]"
          />
        </div>
      </div>
      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </Modal>
  );
}

export default DateTimeConfig;
