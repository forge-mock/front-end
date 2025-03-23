"use client";

import { useState } from "react";
import { v4 as buttonId } from "uuid";
import { Button } from "@shared/components";

interface TypesProps {
  onSelectType: (type: string) => void;
}

function PrimitiveTypes({ onSelectType }: Readonly<TypesProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const chooseType = (e: any) => {
    const type = e.target.textContent;
    onSelectType(type);
    setIsOpen(!isOpen);
  };

  const primitiveButtons = ["Number", "String", "Text", "Boolean", "DateTime", "UUID"];

  return (
    <div className="grid grid-cols-4 gap-5">
      {primitiveButtons.map((el) => {
        return (
          <Button
            key={buttonId()}
            text={el}
            onPress={(e) => chooseType(e)}
            className="bg-none border-default p-[15px] text-left"
          />
        );
      })}
    </div>
  );
}

export default PrimitiveTypes;
