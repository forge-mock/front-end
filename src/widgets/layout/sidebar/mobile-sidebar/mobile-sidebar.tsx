"use client";

import React from "react";
import { useLayoutStore } from "../../store/layout";
import { Tab } from "../lib/interfaces/tab";
import { TABS } from "../lib/constants/tabs";
import TabButton from "../components/tab-button/tab-button";
import styles from "./mobile-sidebar.module.scss";

function MobileSidebar(): React.JSX.Element {
  const { mobileSidebarExpanded } = useLayoutStore();

  return (
    <aside
      className={`fixed flex flex-col justify-between h-full pt-2.5 ${styles.tabContainer} ${mobileSidebarExpanded && styles.open}`}
    >
      <nav className="w-full truncate">
        {TABS.map(
          (tab: Tab): React.JSX.Element => (
            <TabButton key={tab.title} {...tab} />
          )
        )}
      </nav>
    </aside>
  );
}

export default MobileSidebar;
