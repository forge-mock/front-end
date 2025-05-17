"use client";

import React from "react";
import { Button } from "@shared/components";
import { useFieldsStore } from "@features/draggable-fields";
import { useConfigStore } from "@features/type-select-modal/components/types-configurator/useConfigStore";

function GenerateButton(): React.JSX.Element {
  const { fields } = useFieldsStore();
  const { configs } = useConfigStore();

  const onButtonClick = () => {
    const fieldsWithConfigs = fields.map((field) => {
      const config = configs[field.id];

      const fieldType = config ? config.type : field.type;

      return {
        id: field.id,
        name: field.name,
        type: fieldType,
        config: config || null,
      };
    });

    console.log("Fields with configurations:", fieldsWithConfigs); // use these configs for generating db later  
  };

  return (
    <div>
      <Button text="Generate database" onPress={onButtonClick} />
    </div>
  );
}

export default GenerateButton;
