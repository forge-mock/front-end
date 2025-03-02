"use client";

import { useState } from "react";
import { Button } from "@shared/components";

interface TypesProps {
  onSelectType: (type: string) => void;
}

function PrimitiveTypes({ onSelectType }: TypesProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const chooseType = (e: any) => {
    const type = e.target.textContent;
    onSelectType(type);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <Button text="Number" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
        <Button text="String" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
        <Button text="Text" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
        <Button text="Boolean" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
        <Button text="Date time" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
        <Button text="UUID" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
      </div>
    </>
  );
}

export default PrimitiveTypes;
