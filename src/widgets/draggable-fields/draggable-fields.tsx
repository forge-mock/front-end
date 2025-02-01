"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  closestCenter,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";
import Grid from "./components/grid/grid";
import SortableField from "./components/field/sortable-field";
import DraggedField from "./components/draggable-field/draggable-field";

function DraggableFields(): React.JSX.Element {
  const [items, setItems] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draggedFieldValues, setDraggedFieldValues] = useState<{ inputValue: string; buttonValue: string }>({
    inputValue: "",
    buttonValue: "",
  });

  const gridRef = useRef<HTMLDivElement>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  useEffect(() => {
    const generatedItems = Array.from({ length: 20 }, () => uuidv4());
    setItems(generatedItems);
  }, []);

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

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over!.id as string);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);

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
        <Grid ref={gridRef} columns={3}>
          {items.map((id) => (
            <SortableField key={id} id={id as unknown as string} />
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay>
        {activeId && <DraggedField id={activeId} inputValue={draggedFieldValues.inputValue} isDragging />}
      </DragOverlay>
    </DndContext>
  );
}

export default DraggableFields;
