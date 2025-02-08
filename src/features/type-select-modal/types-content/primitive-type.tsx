"use client"

import { useState } from "react";
import { Button } from "@shared/components";
import { Types } from "../enums/types";
import PrimitiveConfig from "../types-configurator/primitive-config";
import StringConfig from "../types-configurator/string-config";
import TextConfig from "../types-configurator/text-config";
import BooleanConfig from "../types-configurator/boolean-config";
import DateTimeConfig from "../types-configurator/date-time-config";
import UUIDConfig from "../types-configurator/uuid-config";

function PrimitiveTypes() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const chooseType = (e: any) => {
    setSelectedType(e.target.textContent)
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <Button text="Number" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left"/>
        <Button text="String" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left"/>
        <Button text="Text" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left"/>
        <Button text="Boolean" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left"/>
        <Button text="Date time" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left"/>
        <Button text="UUID" onPress={(e) => chooseType(e)} className="bg-none border-default p-[15px] text-left"/>
      </div>

      {selectedType === Types.NUMBER && <PrimitiveConfig isOpen={isOpen} setIsOpen={setIsOpen}/>}
      {selectedType === Types.STRING && <StringConfig isOpen={isOpen} setIsOpen={setIsOpen}/>}
      {selectedType === Types.TEXT && <TextConfig isOpen={isOpen} setIsOpen={setIsOpen}/>}
      {selectedType === Types.BOOLEAN && <BooleanConfig isOpen={isOpen} setIsOpen={setIsOpen}/>}
      {selectedType === Types.DATETIME && <DateTimeConfig isOpen={isOpen} setIsOpen={setIsOpen}/>}
      {selectedType === Types.UUID && <UUIDConfig isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </>
  )
}

export default PrimitiveTypes;