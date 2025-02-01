"use client";

import React from "react";
import { DraggableFields } from "@features/draggable-fields";
import { Selector } from "@shared/components";

interface DraggableConstructorProps {
  items: string[];
  setItems: (items: string[]) => void;
}

const ITEMS = [
  { id: 1, label: "Text" },
  { id: 2, label: "Number" },
  { id: 3, label: "Date" },
  { id: 4, label: "Boolean" },
  { id: 5, label: "Object" },
  { id: 6, label: "Array" },
  { id: 7, label: "File" },
];

function DraggableConstructor({ items, setItems }: DraggableConstructorProps): React.JSX.Element {
  return (
    <div>
      <Selector items={ITEMS} itemField="label" />
      <DraggableFields items={items} setItems={setItems}></DraggableFields>
    </div>
  );
}

export default DraggableConstructor;
