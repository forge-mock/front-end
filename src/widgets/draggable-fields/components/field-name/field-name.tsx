"use client";

import React, { useState } from "react";
import { TextInput } from "@shared/components";

function FieldName(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  console.log(inputValue);

  // TODO: update store fields after unfocus
  function onBlurInput(): void {
    console.log("Hello!");
  }

  return (
    <div className="w-40">
      <TextInput placeholder="Field name" value={inputValue} onChange={(e) => setInputValue(e)} onBlur={onBlurInput} />
    </div>
  );
}

export default FieldName;
