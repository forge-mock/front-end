"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  closestCenter,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Grid from "./components/grid/grid";
import SortableField from "./components/field/sortable-field";
import DraggedField from "./components/draggable-field/draggable-field";

interface DraggableFieldsProps {
  items: string[];
  setItems: (items: string[]) => void;
}

function DraggableFields({ items, setItems }: DraggableFieldsProps): React.JSX.Element {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draggedFieldValues, setDraggedFieldValues] = useState<{ inputValue: string; buttonValue: string }>({
    inputValue: "",
    buttonValue: "",
  });

  const gridRef = useRef<HTMLDivElement>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor));

  const getDraggableElement = (id: string) => {
    if (gridRef.current) {
      const activeField = gridRef.current?.querySelector(`[id="${id}"]`);
      const parentElement = activeField?.parentNode;

      const inputValue = parentElement?.querySelector("input")?.value as string;
      const buttonValue = parentElement?.querySelector("button")?.textContent as string;

      setDraggedFieldValues({ inputValue, buttonValue });
    }
  };

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const activeId = event.active.id as string;

    setActiveId(activeId);
    getDraggableElement(activeId);
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        const sortingItems: string[] = [...items];

        const oldIndex: number = sortingItems.indexOf(active.id as string);
        const newIndex: number = sortingItems.indexOf(over!.id as string);
        const updatedItems: string[] = arrayMove(sortingItems, oldIndex, newIndex);

        setItems(updatedItems);
      }

      setActiveId(null);
    },
    [items]
  );

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {items.length > 0 && (
          <Grid ref={gridRef} columns={3}>
            {items.map((id) => (
              <SortableField key={id} id={id as unknown as string} />
            ))}
          </Grid>
        )}
      </SortableContext>
      <DragOverlay>
        {activeId && <DraggedField id={activeId} inputValue={draggedFieldValues.inputValue} isDragging />}
      </DragOverlay>
    </DndContext>
  );
}

export default DraggableFields;
