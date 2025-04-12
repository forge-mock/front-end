"use client";

import { useState } from "react";
import { Button, Modal } from "@shared/components";
import PrimitiveTypes from "./components/types-content/PrimitiveType";
import CollectionsTypes from "./components/types-content/CollectionsType";
import SpecializedTypes from "./components/types-content/SpecializedType";

interface TypeSelectModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSelectType: (type: string) => void;
}

function TypeSelectModal({ isOpen, setIsOpen, onSelectType }: Readonly<TypeSelectModalProps>) {
  const [selectedType, setSelectedType] = useState<"primitive" | "collections" | "specialized">("primitive");

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Types">
      <div className="flex h-full relative">
        <aside className="w-[15%] flex flex-col border-right-2 bg-inherit flex-grow-1 gap-[5px] pr-[20px] mr-[20px]">
          <Button
            autoFocus
            text="Primitive"
            onPress={() => setSelectedType("primitive")}
            classes="p-[20px] text-left"
          />
          <Button text="Collections" onPress={() => setSelectedType("collections")} classes="p-[20px] text-left" />
          <Button text="Specialized" onPress={() => setSelectedType("specialized")} classes="p-[20px] text-left" />
        </aside>

        <div className="w-3/4">
          {selectedType === "primitive" && <PrimitiveTypes onSelectType={(type) => onSelectType(type)} />}
          {selectedType === "collections" && <CollectionsTypes onSelectType={(type) => onSelectType(type)} />}
          {selectedType === "specialized" && <SpecializedTypes />}
        </div>
      </div>

      <Button
        text="Close modal"
        onPress={() => setIsOpen(false)}
        className="absolute bottom-[120px] right-[320px] bg-[var(--violet-background)] p-[10px] rounded-lg"
      />
    </Modal>
  );
}

export default TypeSelectModal;
