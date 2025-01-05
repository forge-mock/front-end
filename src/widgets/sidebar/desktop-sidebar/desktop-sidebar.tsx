"use client";

import React, { useState } from "react";
import { Tab } from "../lib/interfaces/tab";
import { DESKTOP_TABS } from "../lib/constants/tabs";
import TabIcon from "../components/tab-icon/tab-icon";
import ExpandIcon from "../components/expand-icon/expand-icon";

function DesktopSidebar(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <aside className="flex flex-col justify-between shrink-0 w-18 pt-2.5 border-2 border-solid border-r-slate-400 bg-slate-100">
      <div className="w-full">
        {DESKTOP_TABS.map(
          (tab: Tab): React.JSX.Element => (
            <TabIcon key={tab.title} {...tab} />
          )
        )}
      </div>
      <div>
        <ExpandIcon isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      </div>
    </aside>
  );
}

export default DesktopSidebar;
