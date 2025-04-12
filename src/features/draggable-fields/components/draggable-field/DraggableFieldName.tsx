"use client";

import React from "react";
import { Input } from "@shared/components";

interface DraggableFieldNameProps {
  inputValue: string;
}

function DraggableFieldName({ inputValue }: Readonly<DraggableFieldNameProps>): React.JSX.Element {
  return (
    <div className="w-40">
      <Input placeholder="Field name" value={inputValue} />
    </div>
  );
}

export default DraggableFieldName;
