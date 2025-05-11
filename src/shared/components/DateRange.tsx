"use client";

import {
  DateRangePicker,
  Group,
  DateSegment,
  DateInput,
  CalendarCell,
  CalendarGrid,
  Dialog,
  Popover,
  RangeCalendar,
  Heading,
} from "react-aria-components";
import Button from "./Button";
import ArrowIcon from "@assets/shared/arrow-down.svg";
import IconButton from "./icon/IconButton";

interface DateRangeProps {
  disabled?: boolean;
}

function DateRange({ disabled = false }: DateRangeProps) {
  return (
    <DateRangePicker isDisabled={disabled}>
      <Group
        className={`flex gap-2 w-fit pt-1 pr-2 pb-1 pl-2 border-small-rounded-default ${
          disabled ? "opacity-50 pointer-events-none bg-gray-100" : ""
        }`}
      >
        <DateInput slot="start">{(segment) => <DateSegment segment={segment} />}</DateInput>
        <span aria-hidden="true">–</span>
        <DateInput slot="end">{(segment) => <DateSegment segment={segment} />}</DateInput>
        <IconButton
          Icon={ArrowIcon}
          ariaLabel="Arrow down"
          height={15}
          width={15}
          classes={`${disabled ? "bg-gray-400" : "bg-purple-500"}`}
        />
      </Group>
      <Popover className="mt-1 rounded-lg shadow-lg border border-gray-200">
        <Dialog className="outline-none p-4 bg-white rounded-lg">
          <RangeCalendar className="outline-none">
            <header className="flex items-center justify-between mb-4">
              <Button
                slot="previous"
                text="◀"
                className="px-2 py-1 text-purple-500 hover:bg-gray-100 rounded-md flex items-center justify-center w-8 h-8"
              />
              <Heading className="text-lg font-medium text-gray-800" />
              <Button
                slot="next"
                text="▶"
                className="px-2 py-1 text-purple-500 hover:bg-gray-100 rounded-md flex items-center justify-center w-8 h-8"
              />
            </header>
            <CalendarGrid className="border-spacing-1 border-separate">
              {(date) => (
                <CalendarCell
                  date={date}
                  className={({ isSelected, isDisabled, isOutsideMonth }) => `
                    w-9 h-9 outline-none cursor-default flex items-center justify-center rounded-full
                    ${
                      isSelected
                        ? "bg-purple-500 text-white hover:bg-purple-600"
                        : isDisabled
                          ? "text-gray-300"
                          : isOutsideMonth
                            ? "text-gray-400"
                            : "hover:bg-gray-100 text-gray-700"
                    }
                  `}
                />
              )}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </DateRangePicker>
  );
}

export default DateRange;
