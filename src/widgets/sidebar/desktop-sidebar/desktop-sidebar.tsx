"use client";

import React, { useState, useEffect } from "react";
import { LocalStorageItems } from "@shared/lib/constants";
import { getLocalStorage } from "@shared/lib/helpers";
import { Tab } from "../lib/interfaces/tab";
import { DESKTOP_TABS } from "../lib/constants/tabs";
import TabIcon from "../components/tab-icon/tab-icon";
import TabButton from "../components/tab-button/tab-button";
import ExpandIcon from "../components/expand-icon/expand-icon";
import styles from "./desktop-sidebar.module.scss";

function DesktopSidebar(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean | null>(null);

  useEffect(() => {
    const isSidebarExpanded = getLocalStorage(LocalStorageItems.IsSidebarExpanded);

    if (isSidebarExpanded) {
      setIsExpanded(isSidebarExpanded as boolean);
    } else {
      setIsExpanded(false);
    }
  }, []);

  if (isExpanded === null) {
    return <></>;
  }

  return (
    <aside
      className={`flex flex-col justify-between shrink-0 h-full pt-2.5 border-2
          border-solid border-r-slate-400 bg-slate-100 ${styles.tabContainer} ${isExpanded && styles.open}`}
    >
      <nav>
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
      </nav>
      <ExpandIcon isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </aside>
  );
}

export default DesktopSidebar;
