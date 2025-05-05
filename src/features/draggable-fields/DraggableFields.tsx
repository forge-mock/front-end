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
import { useFieldsStore } from "./useFieldStore";
import Grid from "./components/Grid";
import SortableField from "./components/field/SortableField";
import DraggedField from "./components/draggable-field/DraggableField";

interface DraggableFieldsProps {
  columnsToShow: number;
}

function DraggableFields({ columnsToShow }: Readonly<DraggableFieldsProps>): React.JSX.Element {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draggedFieldValues, setDraggedFieldValues] = useState<{ inputValue: string; buttonValue: string }>({
    inputValue: "",
    buttonValue: "",
  });

  const { fields, setAllFields } = useFieldsStore();
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
        const sortingItems: Field[] = [...fields];

        const oldIndex: number = sortingItems.findIndex((item) => item.id === active.id);
        const newIndex: number = sortingItems.findIndex((item) => item.id === over!.id);
        const updatedItems: Field[] = arrayMove(sortingItems, oldIndex, newIndex);

        setAllFields(updatedItems);
      }

      setActiveId(null);
    },
    [fields]
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
      <SortableContext items={fields} strategy={rectSortingStrategy}>
        {fields.length > 0 && (
          <Grid ref={gridRef} columns={columnsToShow}>
            {fields.map((item) => (
              <div key={item.id} id={item.id}>
                <SortableField id={item.id} />
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
