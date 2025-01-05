"use client";

import React from "react";
import Image from "next/image";

interface IconButtonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  classes?: string;
  onClick?: () => void;
}

function IconButton({ src, alt, width = 24, height = 24, onClick, classes = "" }: IconButtonProps) {
  return (
    <div
      onClick={() => onClick?.()}
      className={`flex select-none shrink-0 flex-row items-center p-1 rounded-full border-2 border-solid border-violet-600 
      cursor-pointer transition duration-300 hover:bg-slate-300 active:transition-none active:bg-slate-400 ${classes}`}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
}

export default IconButton;
