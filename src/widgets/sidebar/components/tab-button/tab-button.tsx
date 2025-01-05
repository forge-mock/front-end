import React from "react";
import Link from "next/link";
import { IconButton } from "@shared/components";
import { Tab as TabProps } from "../../lib/interfaces/tab";

function TabButton({ icon, title, path }: TabProps): React.JSX.Element {
  return (
    <div className="p-2.5">
      <Link href={path}>
        <div
          className="flex flex-row items-center gap-4 p-1 border-2 border-solid border-slate-100 rounded-xl
          transition duration-300 hover:bg-slate-300 active:transition-none active:bg-slate-400"
        >
          <IconButton src={icon} alt={title} />
          <p className="text-violet-800 truncate">{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default TabButton;
