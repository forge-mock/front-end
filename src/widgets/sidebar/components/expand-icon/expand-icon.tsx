import React from "react";
import { IconButton } from "@shared/components";
import { LocalStorageItems } from "@shared/lib/constants";
import { setLocalStorage } from "@shared/lib/helpers";

interface ExpandIconProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

function ExpandIcon({ isExpanded, setIsExpanded }: ExpandIconProps): React.JSX.Element {
  function handleClickExpand(): void {
    setIsExpanded(!isExpanded);
    setLocalStorage(LocalStorageItems.IsSidebarExpanded, !isExpanded);
  }

  return (
    <div className="flex p-3.5">
      <div className={`transition duration-300 rotate-180 ${isExpanded && "rotate-0"}`}>
        <IconButton src="/layout/expand.svg" alt="expand" onClick={() => handleClickExpand()} />
      </div>
    </div>
  );
}

export default ExpandIcon;
