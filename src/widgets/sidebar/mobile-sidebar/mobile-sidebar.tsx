import React from "react";
import { Tab } from "../lib/interfaces/tab";
import { MOBILE_TABS } from "../lib/constants/tabs";
import TabButton from "../components/tab-button/tab-button";

function MobileSidebar(): React.JSX.Element {
  return (
    <aside
      className={`flex flex-col justify-between shrink-0 h-full pt-2.5 border-2
      border-solid border-r-slate-400 bg-slate-100`}
    >
      <nav className="w-full">
        {MOBILE_TABS.map(
          (tab: Tab): React.JSX.Element => (
            <TabButton key={tab.title} {...tab} />
          )
        )}
      </nav>
    </aside>
  );
}

export default MobileSidebar;
