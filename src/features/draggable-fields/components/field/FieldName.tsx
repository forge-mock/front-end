"use client";

import React, { useState } from "react";
import { Input } from "@shared/components";
import { useFieldsStore } from "../../useFieldStore";

interface FieldNameProps {
  id: string;
}

function FieldName({ id }: Readonly<FieldNameProps>): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const { updateFieldName } = useFieldsStore();

  function onBlurInput(): void {
    if (inputValue.trim() !== "") {
      setIsError(false);
      updateFieldName(id, inputValue);
    } else {
      setIsError(true);
      updateFieldName(id, "");
    }
  }

  return (
    <div className="w-40">
      <Input
        placeholder="Field name"
        value={inputValue}
        isInvalid={isError}
        onChange={(e) => setInputValue(e)}
        onBlur={onBlurInput}
      />
    </div>
  );
}

export default FieldName;
