"use client";

import { useState } from "react";
import { Button } from "@shared/components";

interface TypesProps {
  onSelectType: (type: string) => void;
}

function CollectionsTypes({ onSelectType }: TypesProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const chooseType = (e: any) => {
    const type = e.target.textContent;
    onSelectType(type);
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      <Button text="Num.arr" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
      <Button text="Str.arr" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
      <Button text="Text.arr" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
      <Button text="Bool.arr" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
      <Button text="D/T.arr" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
      <Button text="UUID.arr" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left" />
    </div>
  );
}

export default CollectionsTypes;
