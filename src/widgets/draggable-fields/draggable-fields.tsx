"use client";

import React from "react";
import Draggable from "./components/draggable/draggable";
import Field from "./components/field/field";

function Fields(): React.JSX.Element {
  return (
    <>
      <Field />
      <Draggable />
    </>
  );
}

export default Fields;
