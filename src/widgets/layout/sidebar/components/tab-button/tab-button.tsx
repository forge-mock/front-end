"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@shared/components";
import { Tab as TabProps } from "../../lib/interfaces/tab";

function TabButton({ icon, title, path }: TabProps): React.JSX.Element {
  return (
    <div className="p-2.5">
      <Link href={path} className="flex flex-row items-center gap-4 p-1 border-default hover-default outline-default">
        <Icon src={icon} alt={title} />
        <p className="text-[var(--violet-title-color)] truncate">{title}</p>
      </Link>
    </div>
  );
}

export default TabButton;
