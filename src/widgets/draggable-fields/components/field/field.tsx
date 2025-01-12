"use client";

import React from "react";
import Draggable from "./components/draggable";
import FieldName from "./components/field-name";
import FieldType from "./components/field-type";
import FieldSettings from "./components/field-settings";

function Field(): React.JSX.Element {
  return (
    <div className="flex flex-row items-center w-[356px] gap-2 p-1.5 border-default">
      <Draggable />
      <FieldName />
      <FieldType />
      <FieldSettings />
    </div>
  );
}

export default Field;
