"use client";

import React, { useState } from "react";
import { Tab } from "../lib/interfaces/tab";
import { DESKTOP_TABS } from "../lib/constants/tabs";
import TabIcon from "../components/tab-icon/tab-icon";
import TabButton from "../components/tab-button/tab-button";
import ExpandIcon from "../components/expand-icon/expand-icon";
import styles from "./desktop-sidebar.module.scss";

function DesktopSidebar(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <aside
      className={`flex flex-col justify-between shrink-0 pt-2.5 border-2
          border-solid border-r-slate-400 bg-slate-100 ${styles.tabContainer} ${isExpanded && styles.open}`}
    >
      <div>
        {isExpanded ? (
          <div className="w-full">
            {DESKTOP_TABS.map(
              (tab: Tab): React.JSX.Element => (
                <TabButton key={tab.title} {...tab} />
              )
            )}
          </div>
        ) : (
          <div className="w-full">
            {DESKTOP_TABS.map(
              (tab: Tab): React.JSX.Element => (
                <TabIcon key={tab.title} {...tab} />
              )
            )}
          </div>
        )}
      </div>
      <ExpandIcon isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </aside>
  );
}

export default DesktopSidebar;
