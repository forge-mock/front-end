"use client";

import React from "react";
import Link from "next/link";
import { Tooltip, IconButton } from "@shared/components";
import { Tab as TabProps } from "../../lib/interfaces/tab";

function TabIcon({ icon, title, path }: TabProps): React.JSX.Element {
  return (
    <div className="p-2.5">
      <Link href={path}>
        <Tooltip text={title} offset={5} placement="end">
          <IconButton src={icon} alt={title} />
        </Tooltip>
      </Link>
    </div>
  );
}

export default TabIcon;
