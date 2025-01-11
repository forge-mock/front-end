"use client";

import React from "react";
import Draggable from "./components/draggable";
import FieldName from "./components/field-name";

function Field(): React.JSX.Element {
  return (
    <>
      <Draggable />
      <FieldName />
    </>
  );
}

export default Field;
