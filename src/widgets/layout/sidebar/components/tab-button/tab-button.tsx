"use client";

import React from "react";
import Link from "next/link";
import { Icon as IconContainer } from "@shared/components";
import { Tab as TabProps } from "../../lib/interfaces/tab";

function TabButton({ Icon, title, path }: TabProps): React.JSX.Element {
  return (
    <div className="p-2.5">
      <Link
        href={path}
        className="flex flex-row items-center gap-4 p-1 border-default hover-default outline-border-default"
      >
        <IconContainer Icon={Icon} />
        <p className="text-[var(--violet-title-color)] truncate">{title}</p>
      </Link>
    </div>
  );
}

export default TabButton;
