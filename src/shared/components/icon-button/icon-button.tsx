import React from "react";
import Image from "next/image";
import { Button } from "react-aria-components";

interface IconButtonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function IconButton({ src, alt, width = 24, height = 24 }: IconButtonProps) {
  return (
    <Button
      className={({ isHovered, isFocused }) => `
    flex shrink-0 flex-row items-center p-1 rounded-full border-2 border-solid border-violet-600 transition duration-300
    ${isHovered && "bg-slate-300"}
    ${isFocused && "bg-slate-400"}
  `}
    >
      <Image src={src} width={width} height={height} alt={alt} />
    </Button>
  );
}

export default IconButton;
