import ConfigSlider from "@shared/components/slider/slider";

interface BlankSliderProps {
  blankValue: number | number[];
  setBlankValue: (blankValue: number | number[]) => void;
}

function BlankSlider({ blankValue, setBlankValue }: BlankSliderProps) {
  return (
    <ConfigSlider
      value={blankValue}
      onChange={setBlankValue}
      label="Blank"
      step={0.01}
      maxValue={1}
      formatOptions={{ style: "percent" }}
      name="blank"
    />
  );
}

export default BlankSlider;
