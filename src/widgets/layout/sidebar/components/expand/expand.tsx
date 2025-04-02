"use client";

import React from "react";
import ExpandIcon from "@assets/layout/expand.svg";
import { IconButton } from "@shared/components";
import { LocalStorageItems } from "@shared/constants";
import { setLocalStorageItem } from "@shared/helpers";

interface ExpandProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

function Expand({ isExpanded, setIsExpanded }: Readonly<ExpandProps>): React.JSX.Element {
  function handleClickExpand(): void {
    setIsExpanded(!isExpanded);
    setLocalStorageItem(LocalStorageItems.IsSidebarExpanded, !isExpanded);
  }

  return (
    <div className="flex p-3.5">
      <div className={`transition duration-300 ${isExpanded ? "rotate-0" : "rotate-180"}`}>
        <IconButton Icon={ExpandIcon} onClick={() => handleClickExpand()} />
      </div>
    </div>
  );
}

export default Expand;
