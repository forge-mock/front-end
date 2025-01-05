"use client";

import React from "react";
import { useLayoutStore } from "../../store/layout";
import { Tab } from "../lib/interfaces/tab";
import { MOBILE_TABS } from "../lib/constants/tabs";
import TabButton from "../components/tab-button/tab-button";
import styles from "./mobile-sidebar.module.scss";

function MobileSidebar(): React.JSX.Element {
  const { mobileSidebarExpanded } = useLayoutStore();

  return (
    <aside
      className={`fixed flex flex-col justify-between h-full pt-2.5 bg-slate-100 
        border-2 border-solid ${styles.tabContainer} 
      ${mobileSidebarExpanded && `${styles.open} border-r-slate-400`}
      ${!mobileSidebarExpanded && "border-r-slate-100"}`}
    >
      <nav className={`w-full truncate`}>
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
