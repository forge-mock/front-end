"use client";

import React, { CSSProperties } from "react";
import { FieldProps } from "../../lib/interfaces/field-props";
import FieldType from "../field-type/field-type";
import FieldSettings from "../field-settings/field-settings";
import Draggable from "../field/draggable";
import DraggableFieldName from "./draggable-field-name";

interface DraggableFieldProps extends FieldProps {
  inputValue: string;
}

function DraggedField({ inputValue, withOpacity, isDragging, ...props }: DraggableFieldProps): React.JSX.Element {
  const inlineStyles: CSSProperties = {
    opacity: withOpacity ? "0.5" : "1",
    transformOrigin: "10px 10px",
    transform: isDragging ? "scale(1.05)" : "scale(1)",
  };

  return (
    <div
      className="flex flex-row items-center w-[356px] bg-[var(--light-grey-background)] gap-2 p-1.5 border-default"
      style={inlineStyles}
    >
      <div className={isDragging ? "cursor-grabbing" : "cursor-grab"} {...props}>
        <Draggable />
      </div>
      <DraggableFieldName inputValue={inputValue} />
      <FieldType />
      <FieldSettings />
    </div>
  );
}

export default DraggedField;
