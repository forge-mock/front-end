import React from "react";
import Link from "next/link";
import { Tooltip, IconButton } from "@shared/components";
import { Tab as TabProps } from "../../lib/interfaces/tab";

function TabIcon({ icon, title, path }: TabProps): React.JSX.Element {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <Link href={path} className="flex shrink-0">
        <Tooltip id={title} place="right" text={title}>
          <IconButton src={icon} alt={title} />
        </Tooltip>
      </Link>
      <p className="text-violet-800 truncate">{title}</p>
    </div>
  );
}

export default TabIcon;
