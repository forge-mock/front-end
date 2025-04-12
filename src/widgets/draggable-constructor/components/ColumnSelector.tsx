"use client";

import React, { useState, useEffect } from "react";
import type { Key } from "react-aria-components";
import { Selector } from "@shared/components";
import { InfoTooltip } from "@features/info-tooltip";

interface ColumnSelectorProps {
  chosenColumnCount: number | null;
  setChosenColumnCount: (columnCount: number) => void;
}

// Element width and place for paddings
const elementWidth = 440;

function setColumnName(columnNumber: number): string {
  if (columnNumber === 1) {
    return "1 column";
  }

  return `${columnNumber} columns`;
}

function ColumnSelector({ chosenColumnCount, setChosenColumnCount }: Readonly<ColumnSelectorProps>): React.JSX.Element {
  const [columns, setColumns] = useState<{ id: number; name: string }[]>([]);

  const onSelectorChange = (selectedColumnCount: Key) => {
    setChosenColumnCount(selectedColumnCount as number);
  };

  useEffect(() => {
    const main = document.querySelector("main");

    const handleResize = () => {
      if (main) {
        const containerWidth = main.getBoundingClientRect().width;
        const columnCount = Math.floor(containerWidth / elementWidth);
        const columns = Array.from({ length: columnCount > 0 ? columnCount : 1 }, (_, i) => ({
          id: i + 1,
          name: setColumnName(i + 1),
        }));

        setColumns(columns);
        setChosenColumnCount(columns[columns.length - 1].id);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div className="w-32">
        {columns.length > 0 && (
          <Selector
            items={columns}
            selectedKey={chosenColumnCount}
            defaultSelectedKey={columns[0].id}
            onSelectionChange={onSelectorChange}
          />
        )}
      </div>

      <InfoTooltip text="Choose count of columns to show" />
    </div>
  );
}

export default ColumnSelector;
