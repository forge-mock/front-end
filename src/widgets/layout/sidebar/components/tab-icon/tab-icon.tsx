import React from "react";
import { Tooltip, IconLink } from "@shared/components";

export interface TabIconProps {
  icon: string;
  title: string;
  path: string;
}

function TabIcon({ icon, title, path }: TabIconProps): React.JSX.Element {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <div className="flex shrink-0">
        <Tooltip id={title} place="right" text={title}>
          <IconLink path={path} src={icon} alt={title} />
        </Tooltip>
      </div>
      <p className="text-violet-800 truncate">{title}</p>
    </div>
  );
}

export default TabIcon;
