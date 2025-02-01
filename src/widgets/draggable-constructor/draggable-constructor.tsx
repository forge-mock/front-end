"use client";

import React from "react";
import { DraggableFields } from "@features/draggable-fields";

interface DraggableConstructorProps {
  items: string[];
  setItems: (items: string[]) => void;
}

function DraggableConstructor({ items, setItems }: DraggableConstructorProps): React.JSX.Element {
  return <DraggableFields items={items} setItems={setItems}></DraggableFields>;
}

export default DraggableConstructor;
