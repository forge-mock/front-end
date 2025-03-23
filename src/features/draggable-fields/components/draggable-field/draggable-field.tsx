"use client";

import React, { CSSProperties } from "react";
import { FieldProps } from "../../lib/interfaces/field-props";
import FieldType from "../field-type/field-type";
import FieldSettings from "../field-settings/field-settings";
import Draggable from "../field/draggable";
import RemoveField from "../field/remove-field";
import DraggableFieldName from "./draggable-field-name";

interface DraggableFieldProps extends FieldProps {
  inputValue: string;
}

function DraggedField({ inputValue, withOpacity, isDragging, ...props }: Readonly<DraggableFieldProps>): React.JSX.Element {
  const inlineStyles: CSSProperties = {
    opacity: withOpacity ? "0.5" : "1",
    transformOrigin: "10px 10px",
    transform: isDragging ? "scale(1.05)" : "scale(1)",
  };

  return (
    <div
      className="flex flex-row items-center w-[380px] bg-[var(--light-grey-background)] gap-2 p-1.5 border-default"
      style={inlineStyles}
    >
      <div
        className={`flex select-none shrink-0 flex-row items-center p-1 rounded-full border-2 border-solid 
          border-[var(--violet-border)] outline-border-default ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        {...props}
      >
        <Draggable />
      </div>
      <DraggableFieldName inputValue={inputValue} />
      <FieldType />
      <FieldSettings />
      <RemoveField />
    </div>
  );
}

export default DraggedField;
