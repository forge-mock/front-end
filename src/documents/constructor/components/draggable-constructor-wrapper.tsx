"use client";

import React, { useEffect } from "react";
import { useFieldsStore } from "@features/draggable-fields";
import { DraggableConstructor } from "@widgets/draggable-constructor";
import { v4 as uuidv4 } from "uuid";

function DraggableConstructorWrapper(): React.JSX.Element {
  const { clearFields, setAllFields } = useFieldsStore();

  useEffect(() => {
    const generatedItems = Array.from({ length: 5 }, () => ({
      id: uuidv4(),
      name: "",
      type: "",
    }));
    setAllFields(generatedItems);

    return () => {
      clearFields();
    };
  }, []);

  return <DraggableConstructor />;
}

export default DraggableConstructorWrapper;
