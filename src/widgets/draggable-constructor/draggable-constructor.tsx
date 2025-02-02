"use client";

import React, { useState } from "react";
import { DraggableFields } from "@features/draggable-fields";
import ColumnSelector from "./components/column-selector/column-selector";

interface DraggableConstructorProps {
  items: string[];
  setItems: (items: string[]) => void;
}

function DraggableConstructor({ items, setItems }: DraggableConstructorProps): React.JSX.Element {
  const [selectedColumnCount, setSelectedColumnCount] = useState<number>(1);

  return (
    <div>
      <ColumnSelector setChosenColumnCount={setSelectedColumnCount} />
      <DraggableFields columnsToShow={selectedColumnCount} items={items} setItems={setItems}></DraggableFields>
    </div>
  );
}

export default DraggableConstructor;
