"use client";

import React from "react";
import Image from "next/image";

function Burger(): React.JSX.Element {
  return (
    <div
      className="cursor-pointer p-1.5 border-2 border-solid border-violet-600 rounded-full bg-slate-100
      transition duration-300 hover:bg-slate-300 active:transition-none active:bg-slate-400"
    >
      <Image src="/layout/burger-menu.svg" height={30} width={30} alt="burger menu" priority />
    </div>
  );
}

export default Burger;
