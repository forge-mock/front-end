import React from "react";
import CrossIcon from "@assets/shared/cross.svg";
import { IconButton } from "@shared/components";
import { useFieldsStore } from "../../store/fields-store";

interface RemoveFieldProps {
  id?: string;
}

function RemoveField({ id }: Readonly<RemoveFieldProps>): React.JSX.Element {
  const { removeField } = useFieldsStore();

  function onIconClick() {
    if (id) {
      removeField(id);
    }
  }

  return <IconButton Icon={CrossIcon} height={18} width={18} onClick={onIconClick} />;
}

export default RemoveField;
