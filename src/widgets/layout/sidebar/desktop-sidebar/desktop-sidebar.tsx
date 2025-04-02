"use client";

import React, { useState, useEffect } from "react";
import { LocalStorageItems } from "@shared/constants";
import { getLocalStorageItem } from "@shared/helpers";
import { Tab } from "../lib/interfaces/tab";
import { TABS } from "../lib/constants/tabs";
import TabIcon from "../components/tab-icon/tab-icon";
import TabButton from "../components/tab-button/tab-button";
import Expand from "../components/expand/expand";
import styles from "./desktop-sidebar.module.scss";

function DesktopSidebar(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const isSidebarExpanded = getLocalStorageItem(LocalStorageItems.IsSidebarExpanded);

    if (isSidebarExpanded) {
      setIsExpanded(isSidebarExpanded as boolean);
    }
  }, []);

  return (
    <aside
      className={`flex flex-col justify-between shrink-0 h-full pt-2.5 ${styles.tabContainer} ${isExpanded ? styles.open : ""}`}
    >
      <nav>
        <div className="w-full">
          {TABS.map(
            (tab: Tab): React.JSX.Element =>
              isExpanded ? <TabButton key={tab.title} {...tab} /> : <TabIcon key={tab.title} {...tab} />
          )}
        </div>
      </nav>
      <Expand isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </aside>
  );
}

export default DesktopSidebar;
