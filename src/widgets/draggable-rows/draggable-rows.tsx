"use client";

import React, { useState, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Grid from "./components/grid/grid";
import SortableItem from "./components/item/sortable-item";
import Item from "./components/item/item";

function DraggableRows(): React.JSX.Element {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const [activeId, setActiveId] = useState<string | number | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id);
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
        <Grid columns={6}>
          {items.map((id) => (
            <SortableItem key={id} id={id as unknown as string} />
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {activeId ? <Item id={activeId as string} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default DraggableRows;
