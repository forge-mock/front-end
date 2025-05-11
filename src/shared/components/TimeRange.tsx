"use client";

import { TimeField, DateSegment, Label, DateInput } from "react-aria-components";

interface TimeRangeProps {
  disabled?: boolean;
  format?: string;
}

function TimeRange({ disabled = false, format = "12h" }: TimeRangeProps) {
  const is12HourFormat = format === "12h";

  return (
    <div className="flex gap-4">
      <div>
        <Label className="text-sm text-gray-600 block mb-1">Start</Label>
        <div
          className={`border-small-rounded-default pt-1 pr-2 pb-1 pl-2 ${
            disabled ? "opacity-50 pointer-events-none bg-gray-100" : ""
          }`}
        >
          <TimeField isDisabled={disabled} hourCycle={is12HourFormat ? 12 : 24}>
            <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
          </TimeField>
        </div>
      </div>
      <div>
        <Label className="text-sm text-gray-600 block mb-1">End</Label>
        <div
          className={`border-small-rounded-default pt-1 pr-2 pb-1 pl-2 ${
            disabled ? "opacity-50 pointer-events-none bg-gray-100" : ""
          }`}
        >
          <TimeField isDisabled={disabled} hourCycle={is12HourFormat ? 12 : 24}>
            <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
          </TimeField>
        </div>
      </div>
    </div>
  );
}

export default TimeRange;
