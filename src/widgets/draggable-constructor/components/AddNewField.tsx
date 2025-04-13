import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@shared/components";
import type { Field } from "@entities/fields";
import { useFieldsStore } from "@features/draggable-fields";

function AddNewField(): React.JSX.Element {
  const { addField } = useFieldsStore();

  const onButtonClick = () => {
    const newField: Field = {
      id: uuidv4(),
      name: "",
      type: "",
    };

    addField(newField);
  };

  return (
    <div>
      <Button text="Add new field" onPress={onButtonClick} />
    </div>
  );
}

export default AddNewField;
