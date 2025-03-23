"use client";

import {
  Label,
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  SliderProps as AriaSliderProps,
} from "react-aria-components";

interface SliderProps extends AriaSliderProps {
  inputSliderClasses?: string;
  inputTrackClasses?: string;
  inputThumbClasses?: string;
  label?: string;
  name: string;
}

function Slider({
  label,
  inputSliderClasses,
  inputTrackClasses,
  inputThumbClasses,
  name,
  ...props
}: Readonly<SliderProps>) {
  return (
    <AriaSlider className={() => `items-center flex ${inputSliderClasses}`} {...props}>
      {label ? (
        <Label aria-label="Label" className="size-6 text-black mr-16">
          {label}
        </Label>
      ) : null}
      <SliderTrack
        className={({ isDisabled }) =>
          `w-[300px] h-[4px] bg-[var(--violet-background)] rounded-sm relative mr-4
      ${isDisabled ? "bg-gray-500 cursor-default" : ""}
      ${inputTrackClasses}`
        }
      >
        <SliderThumb
          name={name}
          className={({ isDisabled }) =>
            `w-4 h-4 absolute bg-[var(--violet-background)] rounded-full top-1/2 translate-y-[-50%]
            ${isDisabled ? "bg-gray-500 cursor-default" : "cursor-pointer"}
            ${inputThumbClasses}`
          }
        />
      </SliderTrack>
      <SliderOutput className="size-6 text-black" />
    </AriaSlider>
  );
}

export default Slider;
