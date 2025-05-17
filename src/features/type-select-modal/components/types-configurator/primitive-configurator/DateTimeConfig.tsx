import { DateRange, TimeRange, Modal, Selector, Toggle } from "@shared/components";
import { useState } from "react";
import BlankSlider from "@features/blank-slider/BlankSlider";
import { dateFormat, separators, timeFormat } from "./constants";
import { Key, Label } from "react-aria-components";
import ConfiguratorControls from "../ConfiguratorControls";

interface ConfiguratorProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  fieldId: string;
}

function DateTimeConfig({ isOpen, setIsOpen, fieldId }: Readonly<ConfiguratorProps>) {
  const [blankValue, setBlankValue] = useState<number | number[]>(0);
  const [selectedTimeFormat, setSelectedTimeFormat] = useState<Key>(timeFormat[0].id);
  const [selectedDateFormat, setSelectedDateFormat] = useState<Key>(dateFormat[0].id);
  const [selectedSeparator, setSelectedSeparator] = useState<Key>(separators[1].id);
  const [isDateRangeSelected, setIsDateRangeSelected] = useState<boolean>(false);
  const [isTimeRangeSelected, setIsTimeRangeSelected] = useState<boolean>(false);

  const changeDateFormat = (selectedDateFormat: Key) => {
    setSelectedDateFormat(selectedDateFormat);
  };
  const changeTimeFormat = (selectedTimeFormat: Key) => {
    setSelectedTimeFormat(selectedTimeFormat);
  };
  const changeSeparator = (separator: Key) => {
    setSelectedSeparator(separator);
  };

  const handleSave = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="DateTime configurator" showCloseButton={false}>
      <div className="mt-12 mb-10">
        <BlankSlider blankValue={blankValue} setBlankValue={setBlankValue} />
        <div className="flex gap-7 mt-14">
          <Label className="text-black">Date Format</Label>
          <Selector
            items={dateFormat}
            onSelectionChange={(selectedDateFormat) => changeDateFormat(selectedDateFormat)}
            placeholder="Select date format"
            selectedKey={selectedDateFormat}
            selectorClasses="w-[50%]"
          />
        </div>
        <div className="flex gap-11 mt-6">
          <Label className="text-black">Separator</Label>
          <Selector
            items={separators}
            onSelectionChange={(separator) => changeSeparator(separator)}
            placeholder="Select date format"
            selectedKey={selectedSeparator}
            selectorClasses="w-[50%]"
          />
        </div>
        <div className="flex justify-start gap-9 items-center mt-6">
          <div>
            <Toggle text="Date range" onChange={setIsDateRangeSelected} isSelected={isDateRangeSelected} />
          </div>
          <div>
            <DateRange disabled={!isDateRangeSelected} />
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <Label className="text-black">Time Format</Label>
          <Selector
            items={timeFormat}
            onSelectionChange={(selectedTimeFormat) => changeTimeFormat(selectedTimeFormat)}
            placeholder="Select time format"
            selectedKey={selectedTimeFormat}
            selectorClasses="w-[50%]"
          />
        </div>
        <div className="flex justify-start gap-8 items-center mt-6">
          <div>
            <Toggle text="Time range" onChange={setIsTimeRangeSelected} isSelected={isTimeRangeSelected} />
          </div>
          <div>
            <TimeRange
              disabled={!isTimeRangeSelected}
              format={timeFormat.find((format) => format.id === selectedTimeFormat)?.name === "24-hour" ? "24h" : "12h"}
            />
          </div>
        </div>

        <ConfiguratorControls
          fieldId={fieldId}
          fieldType="datetime"
          config={{
            blankValue,
            timeFormat: Number(selectedTimeFormat),
            dateFormat: Number(selectedDateFormat),
            separator: Number(selectedSeparator),
            isDateRangeSelected,
            isTimeRangeSelected,
          }}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </Modal>
  );
}

export default DateTimeConfig;
