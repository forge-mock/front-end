"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FieldProps } from "../../interfaces";
import Field from "./Field";

function SortableField({ id }: Readonly<FieldProps>): React.JSX.Element {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? undefined,
  };

  return <Field id={id} ref={setNodeRef} style={style} withOpacity={isDragging} {...attributes} {...listeners} />;
}

export default SortableField;
