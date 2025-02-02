"use client";

import React, { useState, useRef, useEffect } from "react";
import type { Key } from "react-aria-components";
import { Selector } from "@shared/components";
import { LocalStorageItems } from "@shared/lib/constants";
import { setLocalStorage } from "@shared/lib/helpers";

interface ColumnSelectorProps {
  setChosenColumnCount: (columnCount: number) => void;
}

// Element width and gap
const elementWidth = 366;

function ColumnSelector({ setChosenColumnCount }: ColumnSelectorProps): React.JSX.Element {
  const [columns, setColumns] = useState<{ id: number; name: string }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const onSelectorChange = (selectedColumnCount: Key) => {
    setChosenColumnCount(selectedColumnCount as number);
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.getBoundingClientRect().width;
        const columnCount = Math.floor(containerWidth / elementWidth);
        const columns = Array.from({ length: columnCount }, (_, i) => ({ id: i + 1, name: `${i + 1}` }));
        setColumns(columns);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef.current]);

  return (
    <div ref={containerRef}>
      {columns.length > 0 && (
        <Selector items={columns} defaultSelectedKey={columns[0].id} onSelectionChange={onSelectorChange} />
      )}
    </div>
  );
}

export default ColumnSelector;
