"use client";

import React, { useState } from "react";
import { TextInput } from "@shared/components";

function FieldName(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  // TODO: update store fields after unfocus
  function onBlurInput(): void {
    console.log("Hello!");
  }

  return <TextInput label="Field name" value={inputValue} onChange={(e) => setInputValue(e)} onBlur={onBlurInput} />;
}

export default FieldName;
