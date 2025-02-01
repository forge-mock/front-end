"use client";

import React, { CSSProperties, forwardRef } from "react";
import { FieldProps } from "../../lib/interfaces/field-props";
import FieldName from "../field-name/field-name";
import FieldType from "../field-type/field-type";
import FieldSettings from "../field-settings/field-settings";
import Draggable from "./draggable";

function Field(
  { withOpacity, isDragging, style, ...props }: FieldProps,
  ref: React.Ref<HTMLDivElement>
): React.JSX.Element {
  const inlineStyles: CSSProperties = {
    opacity: withOpacity ? "0.5" : "1",
    transformOrigin: "10px 10px",
    transform: isDragging ? "scale(1.05)" : "scale(1)",
    ...style,
  };

  return (
    <div
      ref={ref}
      className="flex flex-row items-center w-[356px] bg-[var(--light-grey-background)] gap-2 p-1.5 border-default"
      style={inlineStyles}
    >
      <div className={isDragging ? "cursor-grabbing" : "cursor-grab"} {...props}>
        <Draggable />
      </div>
      <FieldName />
      <FieldType />
      <FieldSettings />
    </div>
  );
}

export default forwardRef<HTMLDivElement, FieldProps>(Field);
