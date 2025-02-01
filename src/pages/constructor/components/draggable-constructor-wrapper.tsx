"use client";

import React, { useState, useEffect } from "react";
import { DraggableConstructor } from "@widgets/draggable-constructor";
import { v4 as uuidv4 } from "uuid";

function DraggableConstructorWrapper(): React.JSX.Element {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const generatedItems = Array.from({ length: 20 }, () => uuidv4());
    setItems(generatedItems);
  }, []);

  return <DraggableConstructor items={items} setItems={setItems} />;
}

export default DraggableConstructorWrapper;
