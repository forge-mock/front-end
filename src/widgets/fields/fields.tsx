"use client";

import React from "react";
import { DraggableRows } from "@features/draggable-rows";
import Field from "./components/field/field";

function Fields(): React.JSX.Element {
  return (
    <>
      <Field />
      <DraggableRows />
    </>
  );
}

export default Fields;
