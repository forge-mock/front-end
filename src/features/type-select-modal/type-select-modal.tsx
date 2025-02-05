"use client"

import { useState } from "react";
import { Button } from "@shared/components";
import PrimitiveTypes from "./types-content/primitive-type";
import CollectionsTypes from "./types-content/collections-type";
import SpecializedTypes from "./types-content/specialized-type";
import ModalWindow from "@shared/components/modal/modal";

interface TypeSelectModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function TypeSelectModal({ isOpen, setIsOpen }: TypeSelectModalProps) {
  const [selectedType, setSelectedType] = useState<'primitive' | 'collections' | 'specialized'>('primitive');

  return (
    <ModalWindow
      isOpen={isOpen}
    >
      <div className="flex">
        <aside className="w-1/4 flex flex-col border-none bg-inherit gap-[5px]">
          <Button autoFocus text="Primitive" onPress={() => setSelectedType('primitive')} classes="p-[20px] w-[200px] text-left"/>
          <Button text="Collections" onPress={() => setSelectedType('collections')} classes="p-[20px] w-[200px] text-left"/>
          <Button text="Specialized" onPress={() => setSelectedType('specialized')} classes="p-[20px] w-[200px] text-left"/>
        </aside>
        
        <div className="w-3/4">
          {selectedType === 'primitive' && <PrimitiveTypes />}
          {selectedType === 'collections' && <CollectionsTypes />}
          {selectedType === 'specialized' && <SpecializedTypes />}
        </div>
      </div>

      <Button text="Close modal" onPress={() => setIsOpen(false)}/>
    </ModalWindow>
  )
}

export default TypeSelectModal;