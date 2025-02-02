"use client";

import React, { useState } from "react";
import { DraggableFields } from "@features/draggable-fields";
import ColumnSelector from "./components/column-selector/column-selector";

function DraggableConstructor(): React.JSX.Element {
  const [selectedColumnCount, setSelectedColumnCount] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <ColumnSelector chosenColumnCount={selectedColumnCount} setChosenColumnCount={setSelectedColumnCount} />

      {selectedColumnCount && (
        <div className="flex justify-center">
          <DraggableFields columnsToShow={selectedColumnCount} />
        </div>
      )}
    </div>
  );
}

export default DraggableConstructor;
