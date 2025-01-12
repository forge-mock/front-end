"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ItemProps } from "../lib/item-props";
import Item from "./item";

function SortableItem(props: ItemProps): React.JSX.Element {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return <Item ref={setNodeRef} style={style} withOpacity={isDragging} {...props} {...attributes} {...listeners} />;
}

export default SortableItem;
