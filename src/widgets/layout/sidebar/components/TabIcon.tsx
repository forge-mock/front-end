import React from "react";
import { Tooltip, IconLink } from "@shared/components";

export interface TabIconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
}

function TabIcon({ Icon, title, path }: Readonly<TabIconProps>): React.JSX.Element {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <div className="flex shrink-0">
        <Tooltip id={title} place="right" text={title}>
          <IconLink path={path} Icon={Icon} />
        </Tooltip>
      </div>
      <p className="text-[var(--violet-title-color)] truncate">{title}</p>
    </div>
  );
}

export default TabIcon;
