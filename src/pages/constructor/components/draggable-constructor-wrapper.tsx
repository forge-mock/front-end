"use client";

import React, { useState, useEffect } from "react";
import type { Field } from "@entities/fields";
import { DraggableConstructor } from "@widgets/draggable-constructor";
import { v4 as uuidv4 } from "uuid";

function DraggableConstructorWrapper(): React.JSX.Element {
  const [items, setItems] = useState<Field[]>([]);

  useEffect(() => {
    const generatedItems = Array.from({ length: 5 }, () => ({
      id: uuidv4(),
      name: "",
      type: "",
    }));
    setItems(generatedItems);
  }, []);

  return <DraggableConstructor items={items} setItems={setItems} />;
}

export default DraggableConstructorWrapper;
