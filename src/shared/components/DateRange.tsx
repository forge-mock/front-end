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

function DateRange() {
  return (
    <DateRangePicker>
      <Group className="flex gap-2 mt-6 w-fit pt-1 pr-2 pb-1 pl-2 2 border-small-rounded-default cursor-pointer">
        <DateInput slot="start">{(segment) => <DateSegment segment={segment} />}</DateInput>
        <span aria-hidden="true">–</span>
        <DateInput slot="end">{(segment) => <DateSegment segment={segment} />}</DateInput>
        <IconButton Icon={ArrowIcon} ariaLabel="Arrow down" height={15} width={15} classes="bg-purple-500" />
      </Group>
      <Popover>
        <Dialog>
          <RangeCalendar>
            <header>
              <Button slot="previous">◀</Button>
              <Heading />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </DateRangePicker>
  );
}

export default DateRange;
