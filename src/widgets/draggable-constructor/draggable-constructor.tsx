"use client";

import React, { useState } from "react";
import { DraggableFields } from "@features/draggable-fields";
import ColumnSelector from "./components/column-selector/column-selector";
import AddNewField from "./components/add-new-field/add-new-field";

function DraggableConstructor(): React.JSX.Element {
  const [selectedColumnCount, setSelectedColumnCount] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-center gap-20">
        <ColumnSelector chosenColumnCount={selectedColumnCount} setChosenColumnCount={setSelectedColumnCount} />
        <AddNewField />
      </div>

      {selectedColumnCount && (
        <div className="flex justify-center">
          <DraggableFields columnsToShow={selectedColumnCount} />
        </div>
      )}
    </div>
  );
}

export default DraggableConstructor;
