"use client";

import React, { useState, useEffect } from "react";
import type { Field } from "@entities/fields";
import { DraggableFields, useFieldsStore } from "@features/draggable-fields";
import ColumnSelector from "./components/column-selector/column-selector";

interface DraggableConstructorProps {
  items: Field[];
  setItems: (items: Field[]) => void;
}

function DraggableConstructor({ items, setItems }: DraggableConstructorProps): React.JSX.Element {
  const [selectedColumnCount, setSelectedColumnCount] = useState<number | null>(null);
  const { fields, clearFields, setAllFields } = useFieldsStore();

  useEffect(() => {
    if (items.length > 0) {
      setAllFields(items);
    }

    return () => {
      clearFields();
    };
  }, [items]);

  return (
    <div className="flex flex-col gap-5">
      <ColumnSelector chosenColumnCount={selectedColumnCount} setChosenColumnCount={setSelectedColumnCount} />

      {selectedColumnCount && (
        <div className="flex justify-center">
          <DraggableFields columnsToShow={selectedColumnCount} items={fields} setItems={setItems}></DraggableFields>
        </div>
      )}
    </div>
  );
}

export default DraggableConstructor;
