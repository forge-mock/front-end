import React from "react";
import { IconButton } from "@shared/components";
import { useFieldsStore } from "../../store/fields-store";

interface RemoveFieldProps {
  id?: string;
}

function RemoveField({ id }: RemoveFieldProps): React.JSX.Element {
  const { removeField } = useFieldsStore();

  function onIconClick() {
    if (id) {
      removeField(id);
    }
  }

  return <IconButton src="/dragging/cross.svg" alt="Settings" height={18} width={18} onClick={onIconClick} />;
}

export default RemoveField;
