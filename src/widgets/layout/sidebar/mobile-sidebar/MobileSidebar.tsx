"use client";

import React from "react";
import { useLayoutStore } from "../../useLayoutStore";
import { Tab } from "../interfaces";
import { TABS } from "../constants";
import TabButton from "../components/TabButton";
import styles from "./mobile-sidebar.module.scss";

function MobileSidebar(): React.JSX.Element {
  const { mobileSidebarExpanded } = useLayoutStore();

  return (
    <aside
      className={`fixed flex flex-col justify-between h-full pt-2.5 ${styles.tabContainer} ${mobileSidebarExpanded ? styles.open : ""}`}
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
