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
import type { Field } from "@entities/fields";
import Grid from "./components/grid/grid";
import SortableField from "./components/field/sortable-field";
import DraggedField from "./components/draggable-field/draggable-field";

interface DraggableFieldsProps {
  items: Field[];
  setItems: (items: Field[]) => void;
  columnsToShow: number;
}

function DraggableFields({ items, setItems, columnsToShow }: DraggableFieldsProps): React.JSX.Element {
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
      const childrenElement = activeField?.children[0];

      const inputValue = childrenElement?.querySelector("input")?.value as string;
      const buttonValue = childrenElement?.querySelector("button")?.textContent as string;

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
        const sortingItems: Field[] = [...items];

        const oldIndex: number = sortingItems.findIndex((item) => item.id === active.id);
        const newIndex: number = sortingItems.findIndex((item) => item.id === over!.id);
        const updatedItems: Field[] = arrayMove(sortingItems, oldIndex, newIndex);

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
          <Grid ref={gridRef} columns={columnsToShow}>
            {items.map((item) => (
              <div key={item.id} id={item.id}>
                <SortableField id={item.id as unknown as string} />
              </div>
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
