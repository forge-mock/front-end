"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FieldProps } from "../../lib/interfaces/field-props";
import Field from "./field";

function SortableField(props: FieldProps): React.JSX.Element {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return <Field ref={setNodeRef} style={style} withOpacity={isDragging} {...props} {...attributes} {...listeners} />;
}

export default SortableField;
