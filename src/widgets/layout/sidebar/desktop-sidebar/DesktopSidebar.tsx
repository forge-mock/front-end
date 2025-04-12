"use client";

import React, { useState, useEffect } from "react";
import { LOCAL_STORAGE_ITEMS } from "@shared/constants";
import { getLocalStorageItem } from "@shared/helpers";
import { Tab } from "../interfaces";
import { TABS } from "../constants";
import TabIcon from "../components/TabIcon";
import TabButton from "../components/TabButton";
import Expand from "../components/Expand";
import styles from "./desktop-sidebar.module.scss";

function DesktopSidebar(): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const isSidebarExpanded = getLocalStorageItem(LOCAL_STORAGE_ITEMS.isSidebarExpanded);

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
