"use client";

import React, { useState, useCallback } from "react";
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
import Grid from "./components/grid/grid";
import Field from "./components/field/field";
import SortableField from "./components/field/sortable-field";

function DraggableField(): React.JSX.Element {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as number);
        const newIndex = items.indexOf(over!.id as number);

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
        <Grid columns={3}>
          {items.map((id) => (
            <SortableField key={id} id={id as unknown as string} />
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay>{activeId && <Field id={activeId as string} isDragging />}</DragOverlay>
    </DndContext>
  );
}

export default DraggableField;
