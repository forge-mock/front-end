"use client";

import React from "react";
import { TextInput } from "@shared/components";

interface DraggableFieldNameProps {
  inputValue: string;
}

function DraggableFieldName({ inputValue }: DraggableFieldNameProps): React.JSX.Element {
  return (
    <div className="w-40">
      <TextInput placeholder="Field name" value={inputValue} />
    </div>
  );
}

export default DraggableFieldName;
