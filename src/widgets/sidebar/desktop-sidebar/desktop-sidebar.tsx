import React from "react";
import { Tab } from "../lib/interfaces/tab";
import { DESKTOP_TABS } from "../lib/constants/tabs";
import TabIcon from "../components/tab-icon/tab-icon";

function DesktopSidebar(): React.JSX.Element {
  return (
    <aside className="flex shrink-0 w-18 pt-2.5 border-2 border-solid border-r-slate-400 bg-slate-100">
      <div className="flex flex-col w-full">
        {DESKTOP_TABS.map(
          (tab: Tab): React.JSX.Element => (
            <TabIcon key={tab.title} {...tab} />
          )
        )}
      </div>
    </aside>
  );
}

export default DesktopSidebar;
